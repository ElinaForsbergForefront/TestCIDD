import { render, screen } from "@testing-library/react";
import App from "./App";

// Add the following import to fix TS2593 error
import { test, expect } from "vitest";

test("renders Vite + React text", () => {
    render(<App />);
    expect(screen.getByText(/vite \+ react/i)).toBeInTheDocument();
});
