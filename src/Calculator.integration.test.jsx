import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";
import Calculator from "./Calculator";

describe("Quick-Calc integration tests", () => {
  test("performs addition through the UI (5 + 3 = 8)", async () => {
    const user = userEvent.setup();
    render(<Calculator />);

    // Get input fields and add button
    const inputs = screen.getAllByRole("spinbutton");
    const addButton = screen.getByRole("button", { name: "+" });

    // Simulate user typing and clicking
    await user.type(inputs[0], "5");
    await user.type(inputs[1], "3");
    await user.click(addButton);

    // Assert the result
    expect(screen.getByTestId("result")).toHaveTextContent("8");
  });

  test("clear button resets inputs and result to 0", async () => {
    const user = userEvent.setup();
    render(<Calculator />);

    // Get input fields, multiply button, and clear button
    const inputs = screen.getAllByRole("spinbutton");
    const multiplyButton = screen.getByRole("button", { name: "x" });
    const clearButton = screen.getByRole("button", { name: "C" });

    // Simulate user typing and clicking
    await user.type(inputs[0], "4");
    await user.type(inputs[1], "5");
    await user.click(multiplyButton);

    // Assert the multiplication result
    expect(screen.getByTestId("result")).toHaveTextContent("20");

    // Click the clear button
    await user.click(clearButton);

    // Assert that inputs are cleared and result is reset
    expect(inputs[0]).toHaveValue(null);
    expect(inputs[1]).toHaveValue(null);
    expect(screen.getByTestId("result")).toHaveTextContent("0");
  });
});
