# Testing Strategy: Quick-Calc

This document describes the testing approach taken for the Quick-Calc project, focusing on mathematical accuracy and user interface stability.

## 1. Testing Strategy Overview

### What was tested?

- **Core Mathematical Logic**: Every arithmetic function (add, subtract, multiply, divide) was tested in isolation.
- **Edge Cases**: Specific scenarios such as division by zero and handling empty inputs were validated.
- **UI Integration**: The interaction between the input fields, buttons, and the result display was tested to ensure the state updates correctly after user actions.
- **Reset Functionality**: The "Clear" button was tested to ensure it resets both the internal state and the visible inputs.

### What was not tested and why?

- **Visual/CSS Regression**: Precise pixel-perfect layout was not tested, as the focus was on functional correctness.
- **End-to-End (E2E) Browser Testing**: Tools like Playwright or Cypress were not used because the component-level integration tests provided sufficient confidence for this scale of application.
- **Non-Functional Aspects**: Performance under load and security vulnerabilities were not tested, as they fall outside the scope of a basic arithmetic tool.

---

## 2. Integration of Lecture Concepts

### The Testing Pyramid

My test suite reflects the proportions of the Testing Pyramid. The base of the pyramid consists of Unit Testing, which accounts for the majority of the tests (8 cases). These tests are fast and check the pure logic of the calculator. The middle layer consists of Integration Testing , which are fewer in number (2 cases) and verify that the UI components correctly interact with the underlying logic.

### Black-box vs. White-box Testing

- **Black-box Testing**: This approach was used for the Unit Tests. The mathematical functions were treated as "black boxes" where specific inputs were provided (e.g. 5 and 3) and expected outputs (e.g. 8) were asserted without regard for the internal code implementation.

- **White-box Testing**: This approach was applied during Integration Testing. To write these tests, knowledge of the internal DOM structure such as `data-testid="result"` and `role="spinbutton"` was required to accurately query and interact with the elements.

### Regression Testing

The entire suite serves as a Regression Testing mechanism. By automating these tests with Vitest, any future changes such as refactoring the `divide` function or updating the UI framework can be instantly verified. If a change accidentally breaks the existing requirement that "division by zero returns an error message," the regression suite will fail, alerting the developer before the code is deployed.

---

## 3. Test Results Summary

The following results were generated using the Vitest testing framework:

| Test Name                                          | Type        | Status |
| -------------------------------------------------- | ----------- | ------ |
| `add(a, b)` returns correct sum                    | Unit        | PASS   |
| `subtract(a, b)` returns correct difference        | Unit        | PASS   |
| `multiply(a, b)` returns correct product           | Unit        | PASS   |
| `divide(a, b)` returns correct quotient            | Unit        | PASS   |
| `divide(a, 0)` returns `"Error: Division by zero"` | Unit        | PASS   |
| Performs addition through the UI (5 + 3 = 8)       | Integration | PASS   |
| Clear button resets inputs and result to 0         | Integration | PASS   |

**Note**: This testing strategy aligns with the V-shape model which emphasizes that testing plans should be designed upfront during the verification phases (Design) to save time during validation.
