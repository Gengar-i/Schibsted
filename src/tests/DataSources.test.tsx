import { render, screen } from "@testing-library/react";
import DataSources from "../components/DataSources";
import "@testing-library/jest-dom";

describe("data sources render properly", () => {
    it("check if articles are rendered", () => {
        const mockChange = jest.fn();
        const mockSources = [{
            id: "0",
            name: "sports",
            checked: true
        },
        {
            id: "1",
            name: "fashion",
            checked: false
        }];
        render(<DataSources sources={mockSources} handleChange={mockChange} />);
        expect(screen.getByRole("checkbox", { name: "controlled-0" })).toBeInTheDocument();
        expect(screen.getByTestId("data-source-0")).toBeChecked();
        expect(screen.getByTestId("data-source-1")).not.toBeChecked();
    });
});
