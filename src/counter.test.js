import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
afterEach(cleanup)
test("increments counter", () => {
  render(<Counter />);
  fireEvent.click(screen.getByTestId("increment"));
  expect(screen.getByTestId("counter")).toHaveTextContent(2);
});
test("decrements counter", () => {
  render(<Counter />);
  fireEvent.click(screen.getByTestId("decrement"));
  expect(screen.getByTestId("counter")).toHaveTextContent(0);
});

test("counter", () => {
  render(<Counter />);
  expect(screen.getByTestId("counter")).toHaveTextContent(1);
});
