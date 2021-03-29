import { useState } from 'react';
import { createPost } from './api/post';

export default function CreatePost() {
  const [form, setForm] = useState({
    title: '',
    body: '',
    userId: 1
  });

  const click = async (event) => {
    event.preventDefault();
    await createPost(form);
  };

  const updateForm = (event, field) => {
    setForm((prevState) => {
      const formState = { ...prevState };
      formState[field] = event.target.value;
      return formState;
    });
  };

  return (
    <form onSubmit={click}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input id="title" type="text" className="form-control" placeholder="Enter Title" onChange={(e) => updateForm(e, 'title')} />
      </div>
      <div className="form-group">
        <label htmlFor="body">Body</label>
        <input type="text" className="form-control" id="body" placeholder="Enter Body" onChange={(e) => updateForm(e, 'body')} />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
