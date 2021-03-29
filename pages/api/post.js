// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const API_URL = process.env.API_URL;

export const getAllPosts = async () => {
  const res = await fetch(`${API_URL}/posts`);
  return res.json();
};

export const createPost = async (post) => {
  await fetch(`${API_URL}/posts`, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });
};

export const getPostById = async (id) => {
  const res = await fetch(`${API_URL}/posts/${id}`);
  console.log(res)
  return res.json();
};
