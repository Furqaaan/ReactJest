import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Greet from "../Greet";

describe("Greet", () => {
    test("Renders with Hello World", () => {
        render(<Greet />);
        const linkElement = screen.getByText(/Hello World/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Renders with a name", () => {
        render(<Greet name="Furqan" />);
        const linkElement = screen.getByText(/Hello World Furqan/i);
        expect(linkElement).toBeInTheDocument();
    });
});
