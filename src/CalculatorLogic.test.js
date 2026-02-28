import { add, subtract, multiply, divide } from "./CalculatorLogic";

describe("Quick-Calc core calculation logic", () => {
  // Basic operations
  test("adds two numbers correctly", () => {
    expect(add(5, 3)).toBe(8);
  });

  test("subtracts two numbers correctly", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("multiplies two numbers correctly", () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test("divides two numbers correctly", () => {
    expect(divide(8, 2)).toBe(4);
  });

  // Edge cases
  test("handles division by zero gracefully", () => {
    expect(divide(5, 0)).toBe("Error: Division by zero");
  });

  test("handles negative numbers", () => {
    expect(add(-5, -3)).toBe(-8);
  });

  test("handles decimal numbers", () => {
    expect(multiply(2.5, 4)).toBe(10);
  });

  test("handles very large numbers", () => {
    expect(add(1000000000, 1000000000)).toBe(2000000000);
  });
});
