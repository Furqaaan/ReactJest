import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";

import Greet from "../components/Greet";

describe("Greet", () => {
    test("Renders correctly", async () => {
        render(<Greet />);
        const divElement = screen.getByTestId("custom-div")
        expect(divElement).toBeInTheDocument();
    });

    test("Renders with Hello World", () => {
        render(<Greet />);
        const linkElement = screen.getByText(/Hello World/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Renders with a name prop", () => {
        render(<Greet name="Furqan" />);
        const linkElement = screen.getByText(/Hello World Furqan/i);
        expect(linkElement).toBeInTheDocument();
    });
});
