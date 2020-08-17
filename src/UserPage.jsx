import React,{useState, useEffect} from 'react';
import {useParams,NavLink} from 'react-router-dom';
import avatar from '../src/images/avatar.png'

const UserPage=()=>{

    const {userId} = useParams();
    const [userDetails, setUserDetails] = useState([]);
    const [addressDetails, setAddressDetails] = useState([]);
    const [companyDetails, setCompanyDetails] = useState([]);
    const [geoDetails, setGeoetails] = useState([]);

    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((apiData)=>{
        console.log( apiData);
        return apiData.json();
      }).then((actualData)=>{
        console.log(actualData);
        const myData = JSON.stringify(actualData);
        setUserDetails(actualData);
        setAddressDetails(actualData.address);
        setGeoetails(actualData.address.geo)
        setCompanyDetails(actualData.company);
       }).catch((error)=>{
        console.log(`The error : ${error}`);
      })
    },[]);

    return(
        <>
            <div className="card mb-3" style={{maxWidth:"1340px",marginTop:"110px",marginLeft:"10px"}}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img style={{height:"300px",width:"300px"}} src={avatar} title={userDetails.name} alt={userDetails.name} />
                </div>
                <div className="col-md-8" style={{marginLeft:"-110px"}}>
                  <div className="card-body">
                    <p className="card-text text-decoration-underline">Basic Details : </p>
                    <p className="card-text"><small className="text-muted">Name : {userDetails.name}</small></p>
                    <p className="card-text"><small className="text-muted">Username : {userDetails.username}</small></p>
                    <p className="card-text"><small className="text-muted">Email : {userDetails.email}</small></p>
                    <p className="card-text"><small className="text-muted">Phone Number : {userDetails.phone}</small></p>
                    <p className="card-text"><small className="text-muted">Website : {userDetails.website}</small></p>
                  </div>
                </div>
                <div className="col-md-8" style={{marginTop:"-300px",marginLeft:"40em"}}>
                  <div className="card-body">
                    <p className="card-text text-decoration-underline">Address Details : </p>
                    <p className="card-text"><small className="text-muted">Street,Suite : {addressDetails.street} {addressDetails.suite}</small></p>
                    <p className="card-text"><small className="text-muted">City : {addressDetails.city}</small></p>
                    <p className="card-text"><small className="text-muted">Zip Code : {addressDetails.zipcode}</small></p>
                    <p className="card-text"><small className="text-muted">Latitude : {geoDetails.lat}</small></p>
                    <p className="card-text"><small className="text-muted">Longitude : {geoDetails.lng}</small></p>
                  </div>
                </div>
                <div className="col-md-8" style={{marginTop:"-300px",marginLeft:"60em"}}>
                  <div className="card-body">
                    <p className="card-text text-decoration-underline">Company Details : </p>
                    <p className="card-text"><small className="text-muted">Company Name : {companyDetails.name}</small></p>
                    <p className="card-text"><small className="text-muted">Catch Phrase : {companyDetails.catchPhrase}</small></p>
                    <p className="card-text"><small className="text-muted">Company-bs : {companyDetails.bs}</small></p>
                    <NavLink exact activeClassName="active_class" className="btn btn-primary mt-3"  to={`/user/${userId}/posts/`}>View Posts</NavLink>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}

export default UserPage;