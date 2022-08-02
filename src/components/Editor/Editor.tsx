import { useState } from "react";

const ExperimentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    setIsSubmitting(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <input id="content" type="text" name="content" />
      </div>
      <div>
        <label htmlFor="tags">Tags</label>
        <input id="tags" type="text" name="tags" />
      </div>

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default ExperimentForm;
