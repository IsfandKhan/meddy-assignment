import { useState } from 'react';
import { useRouter } from 'next/router';
import { request } from '../backend-services';

const CreatePost = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    title: '',
    body: '',
    userId: 1
  });

  const click = async (event) => {
    event.preventDefault();
    try {
      await request.post('/posts', form);
      alert('Post Successful');
      router.push('/');
    } catch (error) {
      alert('Something Occurred');
      setForm({
        title: '',
        body: '',
        userId: 1
      });
    }
  };

  const updateForm = (event, field) => {
    setForm((prevState) => {
      const formState = { ...prevState };
      formState[field] = event.target.value;
      return formState;
    });
  };

  return (
    <form className="m-3 p-3" onSubmit={click}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          className="form-control"
          placeholder="Enter Title"
          onChange={(e) => updateForm(e, 'title')}
        />
      </div>
      <div className="form-group">
        <label htmlFor="body">Body</label>
        <input
          type="text"
          className="form-control"
          id="body"
          placeholder="Enter Body"
          onChange={(e) => updateForm(e, 'body')}
        />
      </div>
      <button type="submit" className="btn btn-dark w-100">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
