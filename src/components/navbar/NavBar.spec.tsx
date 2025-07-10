import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";

describe("NavBar Component", () => {
  it("renders links and cart item count", () => {
    render(
      <MemoryRouter>
        <NavBar noOfItemsInCart={3} />
      </MemoryRouter>,
    );

    expect(screen.getByText(/GameVault/i)).toBeInTheDocument();
    expect(screen.getByText(/Store/i)).toBeInTheDocument();
    expect(screen.getByText(/Cart/i)).toBeInTheDocument();

    expect(screen.getByText("3")).toBeInTheDocument();
  });
});
