import axios from "axios";

export const getPosts = async () => {
  const response = await axios.get("http://localhost:3000/post");
  console.log(response.data);
  return response.data;
};

export const getOnePost = async (postId: string) => {
  const response = await axios.get(`http://localhost:3000/post/${postId}`);
  console.log(response.data);
  return response.data;
};

export const createPost = async (post: any) => {
  const response = await axios.post("http://localhost:3000/post", post);
  console.log(response.data);
  return response.data;
};

export const deletePost = async (postId: string) => {
  const response = await axios.delete("http://localhost:3000/post", {
    data: {
      postId: postId,
    },
  });
  console.log(response.data);
  return response.data;
};

export const updatePost = async (post: any) => {
  const response = await axios.put("http://localhost:3000/post", post);
  console.log(response.data);
  return response.data;
};
