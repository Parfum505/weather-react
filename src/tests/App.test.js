import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
  getAllByText,
} from "@testing-library/react";
import App from "../App";
import { result } from "./mock.data";

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return { ...render(<Router history={history}>{component}</Router>) };
};
afterEach(cleanup);

test("rendering Home pages with mock data", async () => {
  const {
    getByText,
    getByPlaceholderText,
    getByTestId,
    getAllByText,
  } = renderWithRouter(<App />);

  expect.assertions(4);
  expect(getByText("Weather Forcast")).toBeInTheDocument();
  expect(getByText("Loading...")).toBeInTheDocument();

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(result),
    })
  );
  fireEvent.change(getByPlaceholderText("Search..."), {
    target: { value: "Krakow" },
  });
  fireEvent.submit(getByTestId("form"));
  const textNode = await waitForElement(() => getByText(/krakow/i));
  expect(textNode).toBeInTheDocument();
  expect(getAllByText(/Show details/i).length).toBeGreaterThan(0);
  jest.restoreAllMocks();
});
