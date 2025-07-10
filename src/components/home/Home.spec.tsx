import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

describe("Home Component", () => {
  it("renders heading, paragraph, and store link", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /Welcome to GameVault/i }),
    ).toBeInTheDocument();

    expect(screen.getByText(/Dive into a world of games/i)).toBeInTheDocument();

    const storeLink = screen.getByRole("link", { name: /Browse the Store/i });
    expect(storeLink).toBeInTheDocument();
    expect(storeLink).toHaveAttribute("href", "/store");
  });
});
