import { render, screen, fireEvent } from "@testing-library/react";
import Main from "../structure/Main";
import "@testing-library/jest-dom";

describe("selects sorting item properly", () => {
    it("selects change is working", async () => {
        render(<Main />);
        const select = screen.getByRole("button", { name: /sort by date/i });
        fireEvent.mouseDown(select);
        expect(screen.getByRole("listbox")).not.toEqual(null);
        expect(screen.getByRole("option", { name: /ascending/i })).toBeInTheDocument();
        expect(screen.getByRole("option", { name: /descending/i })).toBeInTheDocument();
        const input = screen.getByTestId("sort-by-date-input");
        fireEvent.change(input, { target: { value: "asc" } })
        expect(await screen.findByTestId("sort-by-date-label")).toHaveTextContent("Ascending");
    });

});