# Quick-Calc

Quick-Calc is a lightweight calculator application built with React that performs basic arithmetic operations: addition, subtraction, multiplication, and division. The project emphasizes clean code structure, separation of concerns, and testability over complex UI design. It also includes graceful error handling and a clear/reset function to ensure a smooth and user-friendly experience.

This application is intended as a demonstration of modern React development practices, including component-based architecture and reusable business logic, and unit testing.

---

## Features

- Addition of two numbers
- Subtraction of two numbers
- Multiplication of two numbers
- Division with graceful handling of division by zero
- Clear (C) button to reset inputs and result
- Consistent styling

---

## Tech Stack

- **React** (with functional components and hooks)
- **Vite** for fast development and build tooling
- **JavaScript (ES6+)**
- **CSS** for styling
- **Vitest** for unit and integration testing
- **React Testing Library** for UI interaction testing

---

## Project Structure

```
quick-calc/
├─ src/
│ ├─ Calculator.jsx # Main calculator component
│ ├─ CalculatorLogic.js # Pure calculation functions
│ ├─ Calculator.test.js # Unit tests for calculator logic
│ ├─ CalculatorLogic.test.js # Unit tests for logic
│ ├─ Calculator.integration.test.jsx # Integration tests for UI
│ ├─ App.jsx # Application entry component
│ ├─ index.css # Global styles
│ └─ main.jsx # React bootstrap file
├─ package.json
└─ README.md
```

---

## Setup Instructions

Follow these steps to run Quick-Calc locally:

### 1️. Clone the repository

```bash
git clone https://github.com/m-musona/swe-testing-assignment.git
cd quick-calc
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## Design Decisions

- Separation of Logic and UI
  Calculation functions are isolated in calculatorLogic.js to make them reusable and easy to test.

- Graceful Error Handling
  Division by zero does not crash the app and instead returns a clear, user-friendly error message.

- Minimal UI by Design
  The interface is intentionally simple to keep the focus on code quality, clarity, and correctness.

---

## How to Run Tests

This project uses Vitest for its test suite. You can run the tests using the following command:

```bash
npm test
```

---

## Testing Framework Research: Vitest vs. Jest

When choosing a testing framework for this React application, the two primary candidates were Jest and Vitest. Jest has long been the industry standard for React testing due to its massive ecosystem, built-in mocking capabilities, and extensive documentation. However, Jest often requires complex configuration (via Babel or TS-Jest) to work correctly with modern ESM-based tools like Vite, which can lead to slower startup times and "transformation" headaches during the build process.

In contrast, Vitest is a modern testing framework built specifically to leverage the speed of Vite. It shares the same configuration, transformation pipeline, and plugins as the development server, making it significantly faster and easier to set up in a Vite project. While Vitest is newer, it maintains a Jest-compatible API, allowing developers to use familiar functions like describe, test, and expect without a steep learning curve.

Justification for Choice: I chose Vitest for this project because it offers a "zero-config" experience that aligns perfectly with the Vite build tool. By using the same pipeline for both development and testing, we ensure that the test environment behaves exactly like the browser. Its superior performance in "Watch Mode" provides an instant feedback loop, which is essential for the test-driven development approach used in Quick-Calc.

---

## License

This project is provided for educational and demonstration purposes.

---
