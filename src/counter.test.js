import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
afterEach(cleanup);
// testing for increament value
test("increments counter", () => {
  render(<Counter />);
  fireEvent.click(screen.getByTestId("increment"));
  expect(screen.getByTestId("counter")).toHaveTextContent(2);
});
// testing for decreament value
test("decrements counter", () => {
  render(<Counter />);
  fireEvent.click(screen.getByTestId("decrement"));
  expect(screen.getByTestId("counter")).toHaveTextContent(0);
});
// tasting for counter intial value
test("counter", () => {
  render(<Counter />);
  expect(screen.getByTestId("counter")).toHaveTextContent(1);
});
