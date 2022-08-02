import React, { useState } from "react";
import { savePost } from "../../api";

export interface Post {
  title: string;
  content: string;
  tags: string[];
}

const ExperimentForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    setIsSubmitting(true);
    savePost({
      title,
      content,
      tags: tags
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item.length),
    });
  }

  function onChangeHandler(evt: React.ChangeEvent<HTMLInputElement>) {
    if (evt.target.name === "title") {
      setTitle(evt.target.value);
    }

    if (evt.target.name === "content") {
      setContent(evt.target.value);
    }

    if (evt.target.name === "tags") {
      setTags(evt.target.value);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <input
          id="content"
          type="text"
          name="content"
          value={content}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="tags">Tags</label>
        <input
          id="tags"
          type="text"
          name="tags"
          value={tags}
          onChange={onChangeHandler}
        />
      </div>

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default ExperimentForm;
