const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  postTitle: {
    type: String,
  },
  postMessage: {
    type: String
  }
})

const Post = mongoose.model("post", postSchema);
module.exports = Post;
