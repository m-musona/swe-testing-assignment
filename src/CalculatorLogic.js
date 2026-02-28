// Add Two Numbers
export function add(a, b) {
  return a + b;
}

// Subtract Two Numbers
export function subtract(a, b) {
  return a - b;
}

// Multiply Two Numbers
export function multiply(a, b) {
  return a * b;
}

// Divide Two Numbers
export function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
}
