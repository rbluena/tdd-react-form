import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Editor from ".";
import type { Post } from "./Editor";
import { savePost as mockSavePost } from "../../api";

jest.mock("../../api/index.ts");

afterEach(() => {
  jest.clearAllMocks();
});

describe("Editor form", () => {
  test("should save the content", () => {
    const response: { status: number } = { status: 200 };
    (mockSavePost as jest.Mock).mockResolvedValueOnce(response);

    const fakePost = {
      title: "First title",
      content: "First content",
      tags: ["tag1", "tag2"],
    };

    const { debug } = render(<Editor />);

    const inputTitle = screen.getByLabelText(/title/i);
    const inputContent = screen.getByLabelText(/content/i);
    const inputTags = screen.getByLabelText(/tags/i);
    const btnSubmit = screen.getByRole("button", { name: /submit/i });

    // Input values
    userEvent.type(inputTitle, fakePost.title);
    userEvent.type(inputContent, fakePost.content);
    userEvent.type(inputTags, "tag1, tag2");

    // Submitting form should disable the button
    userEvent.click(btnSubmit);

    expect(btnSubmit).toBeDisabled();
    expect(mockSavePost).toHaveBeenCalledWith(fakePost);

    expect(mockSavePost).toHaveBeenCalledTimes(1);
  });
});
