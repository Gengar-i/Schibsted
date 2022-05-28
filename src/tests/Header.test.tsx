import { render, screen } from "@testing-library/react";
import Header from "../structure/Header";
import "@testing-library/jest-dom";

it("Header component contains text", () => {
    render(<Header />);
    expect(screen.getByText(/SCHIBSTED FRONT ASSIGNMENT/i)).toBeInTheDocument();
});
