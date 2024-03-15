const CreatePost = () =>{
  return(
    <form className="create_post">
       <div className="mb-3">
    <label htmlFor="userId" className="form-label">User id</label>
    <input type="text" className="form-control" id="userId" aria-describedby="emailHelp" placeholder="Enter your user id"/>
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post title</label>
    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="how are you feeling today?"/>
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea type="text" className="form-control" id="body" aria-describedby="emailHelp" placeholder="Write more about your post"/>
  </div>
 
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
  
}

export default CreatePost;