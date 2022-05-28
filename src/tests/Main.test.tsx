import { render, screen } from "@testing-library/react";
import Main from "../structure/Main";
import DataSources from "../components/DataSources";
import "@testing-library/jest-dom";

describe("main container testing", () => {
    it("renders Main component", () => {
        render(<Main />);
    });
    it("renders checkbox and articles", async () => {
        render(<Main />);
        const mockChange = jest.fn();
        const mockSources = [{
            id: "0",
            name: "sports",
            checked: true
        }];
        render(<DataSources sources={mockSources} handleChange={mockChange} />);
        expect(await screen.findByText("Vålerengas førsterekke smadrer rivalene: - Seriegullet er I våre hender")).toBeInTheDocument();
    });
});
