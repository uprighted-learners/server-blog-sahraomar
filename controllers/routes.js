const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const blogFilePath = path.join(__dirname, "../api/blog.json");

//middleware to log requests
router.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

//function to read blog data
const readBlogData = () => {
  const data = fs.readFileSync(blogFilePath);
  return JSON.parse(data);
};

// function to write blog data
const writeBlogData = (data) => {
  fs.writeFileSync(blogFilePath, JSON.stringify(data, null, 2));
};

// get all posts

router.get("/posts", (req, res) => {
  const data = readBlogData();
  res.json(data);
});

//GET post by post_id
router.get("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const data = readBlogData();
  const post = data.find((p) => p.post_id === postId);
  if (post) {
    res.json(post);
  } else {
    res.status(404).send("Post not found");
  }
});

//create a new post
router.post("/posts", (req, res) => {
  const data = readBlogData();
  const newPost = req.body;
});

//update an exsiting post by post_id
