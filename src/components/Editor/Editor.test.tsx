import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Editor from ".";

describe("Editor form", () => {
  test("should save the content", () => {
    render(<Editor />);
    const inputTitle = screen.getByLabelText(/title/i);
    const inputContent = screen.getByLabelText(/content/i);
    const inputTags = screen.getByLabelText(/tags/i);
    const btnSubmit = screen.getByRole("button", { name: /submit/i });

    // Submitting form should disable the button
    userEvent.click(btnSubmit);
    expect(btnSubmit).toBeDisabled();
  });
});
