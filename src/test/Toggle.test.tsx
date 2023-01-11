import {render, screen, fireEvent} from "@testing-library/react";
import Toggle from "../Components/Toggle";

describe("<Toggle/>", () => {
    it("should render OFF by default", () => {
        render(<Toggle/>);
        expect(screen.getByText(/OFF/)).toBeInTheDocument();
    });

    it("should render ON when clicked", () => {
        render(<Toggle/>);
        expect(screen.getByText(/OFF/)).toBeInTheDocument();
        fireEvent.click(screen.getByText(/OFF/));

        expect(screen.getByText(/ON/)).toBeInTheDocument();
    })
})