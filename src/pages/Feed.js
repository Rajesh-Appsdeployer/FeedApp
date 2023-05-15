import React, { useState } from "react";
import Profile from '../components/profile';
import Blog from '../components/blog'
import '../Css/home.css';
// import Details from './Details';
const Home =() =>{

    const [userName,setUserName]=useState("Rajesh Nagar")
    return(
        <div class="container">
        <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3 ">
        <div class="sidebar">  
          <Profile username={userName}/>
          </div>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-9">
            <Blog username={userName}/>
            </div>
            {/* <div class="col-xs-12 col-sm-12 col-md-3"> */}
        {/* <div class="sidebar detail_css"> 
         <Details/>
         </div> */}
         {/* </div> */}
        </div>

    </div>
    )
}

export default Home;