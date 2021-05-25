import PostMessage from "../models/postMessage.js";

export const getPosts = (req, res) => {
  res.send("This Works !!!");
};

export const createPost = (req, res) => {
  res.send("Post Creation");
};
