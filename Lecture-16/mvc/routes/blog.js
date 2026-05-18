const { getBlogs, postBlog } = require("../controllers/blog");


// routes/paths
function blog(app){
    app.get('/blogs' , getBlogs);
    app.post('/blogs' , postBlog);
}

module.exports = blog;
// export default blog;









