import React,{useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom'

const User=()=>{
  
  const [userList, setUserList] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then((apiData)=>{
      console.log( apiData);
      return apiData.json();
    }).then((actualData)=>{
      console.log(actualData);
      const myData = JSON.stringify(actualData);
      setUserList(actualData);
     }).catch((error)=>{
      console.log(`The error : ${error}`);
    })
  },[]);

    return(
      <>
      <h2 className='heading-userList'>User List</h2>
      <div className="main-div">
        
        <div className='table-row-main-div table-main-header'>
            <div className="container-fluid table-row-child-div table-header">
            <table>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Username</td>
                <td>Phone</td>
            </tr>
              </table>
            </div>
        </div> 
        {userList.map((val)=> {
          return ( 
            <div className='table-row-main-div' key={val.id}>
                <div className="container-fluid table-row-child-div">
                 <table>
                 <tr>
                    <td><NavLink exact activeClassName="active_class" to={`/user/${val.id}/`}>{val.name}</NavLink></td>
                    {/* <div >{val.name}</div> */}
                    <td>{val.email}</td>
                    <td>{val.username}</td>
                    <td>{val.phone}</td>
                  </tr>
                  </table>
                </div>
            </div> 
        )
          {/* 
            <ul key={val.id}>
            <NavLink exact activeClassName="active_class"  to={`/user/${val.id}/`}>{val.name}</NavLink>
            </ul> */}
        })}
      </div>
      </>
    ); 
}

export default User;