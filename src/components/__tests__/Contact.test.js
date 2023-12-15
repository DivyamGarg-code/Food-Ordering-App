import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe('Contact Us Page Test Case', () => {
    test("Should load contact us component", () => {
        render(<Contact />);
        const heading = screen.getByRole("button");
        expect(heading).toBeInTheDocument();
    });

    test("Should load button inside the contact us component", () => {
        render(<Contact />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    test("Should load 2 input boxes inside the contact us component", () => {
        render(<Contact />);
        // Querying
        const inputBoxes = screen.getAllByRole("textbox"); // When their are multiple
        // This will return me the array of react element 
        // console.log(inputBoxes.length);
        expect(inputBoxes.length).toBe(2);
    });

});


// You need to render the component in jsDOM first