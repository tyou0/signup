import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SignIn } from "./SignIn.jsx";

describe("Sign in Page", () => {
  test("render", () => {
    render(<SignIn />);

    const username = screen.getByPlaceholderText("USERNAME");
    const password = screen.getByPlaceholderText("PASSWORD");
    const login = screen.getByText(/LOGIN/i);
    const forgot = screen.getByText(/Forgot password?/i);

    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(login).toBeInTheDocument();
    expect(forgot).toBeInTheDocument();
  });
});
