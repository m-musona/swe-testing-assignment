# Quick-Calc

Quick-Calc is a lightweight calculator application built with React that performs basic arithmetic operations: addition, subtraction, multiplication, and division. The project emphasizes clean code structure, separation of concerns, and testability over complex UI design. It also includes graceful error handling and a clear/reset function to ensure a smooth and user-friendly experience.

This application is intended as a demonstration of modern React development practices, including component-based architecture and reusable business logic.

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
- **Vitest / Jest** (depending on setup) for unit testing

---

## Project Structure

```
quick-calc/
├─ src/
│ ├─ Calculator.jsx # Main calculator component
│ ├─ CalculatorLogic.js # Pure calculation functions
│ ├─ Calculator.test.js # Unit tests for calculator logic
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
