# Testing Guide

This guide covers all testing approaches in the boilerplate.

## Testing Stack

- **Vitest** - Unit and integration tests
- **React Testing Library** - Component testing
- **Playwright** - End-to-end (E2E) tests

## Unit Testing with Vitest

### Running Tests

```bash
pnpm test              # Run all tests
pnpm test:ui           # Run tests with UI
pnpm test:coverage     # Run tests with coverage report
```

### Writing Your First Test

Create a test file next to your component:

```tsx
// components/button.test.tsx
import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("renders with correct text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    screen.getByText("Click me").click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Test File Naming

Use one of these patterns:

- `component.test.tsx`
- `component.spec.tsx`
- `__tests__/component.tsx`

### Common Testing Patterns

#### Testing Rendering

```tsx
it("renders the component", () => {
  render(<MyComponent />);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});
```

#### Testing User Interactions

```tsx
import { fireEvent } from "@testing-library/react";

it("handles button click", () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Click</Button>);

  fireEvent.click(screen.getByText("Click"));
  expect(handleClick).toHaveBeenCalled();
});
```

#### Testing State Changes

```tsx
it("updates count on click", () => {
  render(<Counter />);

  const button = screen.getByText("Increment");
  expect(screen.getByText("Count: 0")).toBeInTheDocument();

  fireEvent.click(button);
  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});
```

#### Testing Async Operations

```tsx
import { waitFor } from "@testing-library/react";

it("loads and displays data", async () => {
  render(<DataComponent />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText("Data loaded")).toBeInTheDocument();
  });
});
```

### Mocking

#### Mock Functions

```tsx
const mockFn = vi.fn();
mockFn.mockReturnValue("mocked value");
mockFn.mockResolvedValue("async value");
```

#### Mock Modules

```tsx
vi.mock("@/lib/api", () => ({
  fetchData: vi.fn().mockResolvedValue({ data: "test" }),
}));
```

### Testing Hooks

```tsx
import { renderHook } from "@testing-library/react";
import { useCounter } from "./use-counter";

it("increments counter", () => {
  const { result } = renderHook(() => useCounter());

  expect(result.current.count).toBe(0);

  result.current.increment();
  expect(result.current.count).toBe(1);
});
```

## Component Testing

### Testing with Props

```tsx
it("displays custom message", () => {
  render(<Alert message="Warning!" variant="warning" />);
  expect(screen.getByText("Warning!")).toBeInTheDocument();
});
```

### Testing Conditional Rendering

```tsx
it("shows error when error prop is true", () => {
  render(<Form hasError={true} />);
  expect(screen.getByText("Error occurred")).toBeInTheDocument();
});

it("hides error when error prop is false", () => {
  render(<Form hasError={false} />);
  expect(screen.queryByText("Error occurred")).not.toBeInTheDocument();
});
```

### Testing Forms

```tsx
import { fireEvent } from "@testing-library/react";

it("submits form with correct data", () => {
  const handleSubmit = vi.fn();
  render(<LoginForm onSubmit={handleSubmit} />);

  fireEvent.change(screen.getByLabelText("Email"), {
    target: { value: "test@example.com" },
  });

  fireEvent.change(screen.getByLabelText("Password"), {
    target: { value: "password123" },
  });

  fireEvent.click(screen.getByText("Submit"));

  expect(handleSubmit).toHaveBeenCalledWith({
    email: "test@example.com",
    password: "password123",
  });
});
```

### Testing Accessibility

```tsx
it("has accessible button", () => {
  render(<Button aria-label="Close dialog">X</Button>);
  expect(screen.getByLabelText("Close dialog")).toBeInTheDocument();
});
```

## End-to-End Testing with Playwright

### Running E2E Tests

```bash
pnpm test:e2e         # Run E2E tests
pnpm test:e2e:ui      # Run E2E tests with UI
```

### Writing E2E Tests

Create test files in the `tests/` directory:

```typescript
// tests/homepage.spec.ts
import { test, expect } from "@playwright/test";

test("homepage loads correctly", async ({ page }) => {
  await page.goto("/en");

  await expect(page.getByRole("heading", { name: "Welcome" })).toBeVisible();
});

test("can navigate to about page", async ({ page }) => {
  await page.goto("/en");

  await page.getByRole("link", { name: "About" }).click();

  await expect(page).toHaveURL(/.*about/);
});
```

### Common E2E Patterns

#### Navigation

```typescript
test("navigates between pages", async ({ page }) => {
  await page.goto("/en");
  await page.click("text=About");
  await expect(page).toHaveURL("/en/about");
});
```

#### Form Submission

```typescript
test("submits contact form", async ({ page }) => {
  await page.goto("/en/contact");

  await page.fill('input[name="email"]', "test@example.com");
  await page.fill('textarea[name="message"]', "Hello!");
  await page.click('button[type="submit"]');

  await expect(page.getByText("Message sent")).toBeVisible();
});
```

#### Waiting for Elements

```typescript
test("waits for data to load", async ({ page }) => {
  await page.goto("/en/dashboard");

  await page.waitForSelector(".data-loaded");

  await expect(page.getByText("Dashboard Data")).toBeVisible();
});
```

#### Testing Multiple Locales

```typescript
test("works in Arabic", async ({ page }) => {
  await page.goto("/ar");

  await expect(page.getByText("مرحبا")).toBeVisible();
});
```

### Playwright Configuration

The config is in `playwright.config.ts`. Key settings:

- Base URL: `http://localhost:3000`
- Browsers: Chromium, Firefox, WebKit
- Screenshots on failure
- Video recording on retry

## Test Organization

### Directory Structure

```
project/
├── components/
│   ├── button.tsx
│   └── button.test.tsx          # Component tests
├── lib/
│   ├── utils.ts
│   └── utils.test.ts            # Utility tests
└── tests/
    ├── homepage.spec.ts         # E2E tests
    └── auth.spec.ts
```

### Grouping Tests

```tsx
describe("Button Component", () => {
  describe("rendering", () => {
    it("renders with text", () => {
      // test
    });
  });

  describe("interactions", () => {
    it("handles click", () => {
      // test
    });
  });
});
```

## Best Practices

### 1. Test User Behavior, Not Implementation

```tsx
// Bad - testing implementation
it("sets state to true", () => {
  const { result } = renderHook(() => useToggle());
  result.current.toggle();
  expect(result.current.state).toBe(true);
});

// Good - testing behavior
it("shows content when toggled", () => {
  render(<ToggleComponent />);
  fireEvent.click(screen.getByText("Toggle"));
  expect(screen.getByText("Content")).toBeVisible();
});
```

### 2. Use Accessible Queries

```tsx
// Preferred order:
screen.getByRole("button", { name: "Submit" });
screen.getByLabelText("Email");
screen.getByPlaceholderText("Enter email");
screen.getByText("Welcome");
screen.getByTestId("custom-element"); // Last resort
```

### 3. Avoid Testing Implementation Details

```tsx
// Bad
expect(component.state.count).toBe(1);

// Good
expect(screen.getByText("Count: 1")).toBeInTheDocument();
```

### 4. Keep Tests Simple

Each test should verify one thing:

```tsx
// Bad - testing multiple things
it("handles form", () => {
  // tests validation
  // tests submission
  // tests error handling
});

// Good - separate tests
it("validates email format", () => {});
it("submits form data", () => {});
it("shows error on failure", () => {});
```

### 5. Use beforeEach for Setup

```tsx
describe("UserList", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("test 1", () => {});
  it("test 2", () => {});
});
```

## Coverage

### View Coverage Report

```bash
pnpm test:coverage
```

This generates a coverage report in `coverage/` directory.

### Coverage Goals

Aim for:

- 80%+ line coverage
- 80%+ branch coverage
- 100% coverage for critical paths

## Debugging Tests

### Debug in VS Code

Add breakpoints and run tests in debug mode.

### Use test.only

```tsx
it.only("this test runs alone", () => {
  // only this test runs
});
```

### Use screen.debug()

```tsx
it("debugs component", () => {
  render(<MyComponent />);
  screen.debug(); // prints DOM to console
});
```

## Common Issues

### Test Fails: Element Not Found

Use `waitFor` for async elements:

```tsx
await waitFor(() => {
  expect(screen.getByText("Loaded")).toBeInTheDocument();
});
```

### Test Fails: Act Warning

Wrap state updates in `act()`:

```tsx
import { act } from "@testing-library/react";

act(() => {
  // state updates
});
```

### Mock Not Working

Ensure mocks are defined before imports:

```tsx
vi.mock("@/lib/api");
import { MyComponent } from "./my-component";
```

## Quick Reference

### Vitest Matchers

```tsx
expect(value).toBe(expected);
expect(value).toEqual(expected);
expect(value).toBeTruthy();
expect(value).toBeFalsy();
expect(array).toContain(item);
expect(fn).toHaveBeenCalled();
expect(fn).toHaveBeenCalledWith(arg);
```

### Testing Library Queries

```tsx
getByText(); // throws if not found
queryByText(); // returns null if not found
findByText(); // async, waits for element
getAllByText(); // returns array
```

### Playwright Actions

```tsx
page.goto(url);
page.click(selector);
page.fill(selector, value);
page.waitForSelector(selector);
page.screenshot();
```

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Playwright Documentation](https://playwright.dev/)
