import { useState } from 'react';
import { createPost } from './api/post';

export default function CreatePost() {
  const [form, setForm] = useState({
    title: '',
    body: '',
    userId: 1
  });

  const click = async (e) => {
    e.preventDefault();
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
      <label>Enter title: </label>
      <input type="text" onChange={(e) => updateForm(e, 'title')} />
      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <label>Enter body: </label>
      <input type="text" onChange={(e) => updateForm(e, 'body')} />
      <button type="submit">Submit</button>
    </form>
  );
}
