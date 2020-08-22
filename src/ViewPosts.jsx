import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ViewComments from './ViewComments';

const ViewPosts=()=>{

    const {userId} = useParams();
    const [posts, setPosts] = useState([]);
    
    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then((apiData)=>{
        console.log( apiData);
        return apiData.json();
      }).then((actualData)=>{
        console.log(actualData);
        const myData = JSON.stringify(actualData);
        console.log("Posts:" +myData)
        setPosts(actualData);
       }).catch((error)=>{
        console.log(`The error : ${error}`);
      })
    },[]);

    const [expand,setExpand] = useState(false);
    const [buttonTitle, setButtonTitle] = useState("View Comments");

    const expandIt = () =>{
      
     if (buttonTitle === "Hide Comments"){
      setExpand(false);
      setButtonTitle("View Comments") 
      }else{
       setExpand(true);
       setButtonTitle("Hide Comments"); 
     } 
    }

    return(
      <div className="grand-parent">
        {posts.map((val)=> {
          return(
          <div className="parent" key={val.id} >
            <div className="card card-css">
              <div className="card-body">
                <h5 className="card-title"><strong> {val.title}</strong></h5>
                <p className="card-text"><small className="text-muted">{val.body}</small></p>
                <button  className="btn btn-primary" onClick={expandIt}>{buttonTitle}</button>
                {expand ?
                <ViewComments id={val.id} /> : null }
              </div>
            </div>
          </div> 
          )})
          }
          </div>
        
    )
}

export default ViewPosts;