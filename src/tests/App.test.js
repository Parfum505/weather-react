import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent, cleanup } from "@testing-library/react";
import App from "../App";

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return { ...render(<Router history={history}>{component}</Router>) };
};
afterEach(cleanup);

test("rendering Home pages", () => {
  const { debug, getByText } = renderWithRouter(<App />);
  expect(getByText("Weather Forcast")).toBeInTheDocument();
  expect(getByText("Loading...")).toBeInTheDocument();
  debug();
});
