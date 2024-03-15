import { createContext, useReducer } from "react";


export const PostList = createContext({
  postList:[],
  addPost:()=>{},
  deletePost:()=>{}
});

const postListReducer = (currentPostList, action)=>{
  let newPostList = currentPostList;
  if(action.type === "DELETE_POST"){
    newPostList = currentPostList.filter(post => post.id !== action.payload.postId);
  }
  return newPostList
}
const PostListProvider = ({children}) => {

  const[postList, dispatchPostList] = useReducer(postListReducer,DEFAULT_POST_LIST)

  const addPost = () =>{

  }
  const deletePost = (postId)=>{
  
    dispatchPostList({
      type:"DELETE_POST",
      payload:{
        postId
      }
    })

  }

  return(
  <PostList.Provider value={{
    postList,
    addPost,
    deletePost
  }}>
    {children}
  </PostList.Provider>
  )
}


const DEFAULT_POST_LIST = [
  {
    id:'1',
    title:'Going to mumbai',
    body:'hy Friends i am going to mumbai',
    reactions:2,
    userId:'user_9',
    tags:['vacation','mumbai','enjoying']
  },
  {
    id:'2',
    title:'Traveimg to shimla',
    body:'hyy friends . i am travelling to shimla',
    reactions:5,
    userId:'user_10',
    tags:['vacation','shimla','enjoying']
  }
]


export default PostListProvider;