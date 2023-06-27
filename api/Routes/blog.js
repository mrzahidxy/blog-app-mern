const Blog = require("../models/Blog");
const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");
const router = require("express").Router();

//? BLOG POST
router.post("/", verifyToken, async (req, res) => {
  const newBlog = new Blog({
    userId: req.user.id,
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
  });

  try {
    const savedBlog = await newBlog.save();
    res.status(200).json({
      message: "The blog has been successfully posted!",
      data: savedBlog,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//? BLOGS GET
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json(error);
  }
});

//? SINGLE BLOG GET
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json(error);
  }
});

//? UPDATE
router.put("/edit/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Blog.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json("The blog has been successfully updated!");
  } catch (error) {
    res.status(500).json(error);
  }
});

//? DELETE
router.delete("/delete/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json("The blog has been successfully deleted!");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
