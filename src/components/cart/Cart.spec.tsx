import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Cart from "./Cart";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useOutletContext: () => ({
      cartItems: [{ id: 1, name: "Mock Game", price: 1000 }],
      removeFromCart: vi.fn(),
    }),
  };
});

describe("Test for Cart Component", () => {
  it("renders Your Cart correctly", () => {
    render(<Cart />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent).toMatch(/Your Cart/i);
  });
});
