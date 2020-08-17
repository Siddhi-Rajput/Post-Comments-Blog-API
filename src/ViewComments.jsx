import React,{useState, useEffect} from 'react';

const ViewComments = (props)=>{

    const id= props.id;
    const [comments, setComments] = useState([]);
    
    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then((apiData)=>{
        return apiData.json();
      }).then((actualData)=>{
        const myData = JSON.stringify(actualData);
        console.log(`Comments : ${myData}`);
        setComments(actualData);
       }).catch((error)=>{
        console.log(`The error : ${error}`);
      })
    },[]);

    return(
        <>
            {comments.map((val)=> (
            <div class="card mt-3">
              <div class="card-header">
                Comment by {val.name}
              </div>
              <div class="card-body">
                  <p className="card-text"><small className="text-muted">{val.body}</small></p>
              </div>
            </div>
                
            ))}
        </>
    )
}

export default ViewComments;