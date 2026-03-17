const express = require("express");
const postController = require("../controllers/posts.controller.js");
const router = express.Router();

router.get("/", (req, res) => postController.getAllPosts());

module.exports = router;
