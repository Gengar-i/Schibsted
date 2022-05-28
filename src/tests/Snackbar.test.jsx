import { render, screen } from "@testing-library/react";
import Snackbar from "../components/MuiSnackbar";
import "@testing-library/jest-dom";

it("snackbar renders", () => {
    render(<Snackbar open={true} />);
    expect(screen.getByRole("alert")).toBeInTheDocument();
});
