import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event"

import Greet from "../components/Greet";

describe("Greet", () => {
    test("Renders correctly", async () => {
        render(<Greet />);
        const divElement = screen.getByTestId("custom-div");
        expect(divElement).toBeInTheDocument();
    });

    test("Renders with Hello World", async () => {
        render(<Greet />);
        const linkElement = await screen.findByText(/Hello World/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Renders with a name prop", async () => {
        render(<Greet name="Furqan" />);
        const linkElement = await screen.findByText(/Hello World Furqan/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Changes text on button click", async () => {
        user.setup()

        render(<Greet name="Furqan" />);

        const linkElement = await screen.findByText(/Hello World/i);
        const buttonElement = screen.getByRole("button");

        await user.click(buttonElement);

        expect(linkElement).toHaveTextContent("Clicked");
    });
});
