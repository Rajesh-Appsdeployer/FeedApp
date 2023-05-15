import React, { useState, useRef } from 'react';
import profile_image from '../images/images.jpeg'
import '../Css/createpost.css'
import image2 from '../images/image2.webp'
import '../Css/post.css'
// import BlogData from "../components/data";
 
 
const FileUploader = () => {
     
    const [input, setInput] = useState("");
    const [des,setDes]= useState('')
    //  const handlechange=()=>{
    //   BlogData.push({

    //   })
    //  }

     
    return (
        <>
            <div className='form'>
            <div className='blog'>
                 <img src={image2} alt='profile' />
                 <h3>Rajesh Nagar</h3>
                 </div>
                 <hr/>
                 <textarea id="w3review" name="w3review" rows="4" cols="20" placeholder='Type here'/>
                 <input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg"/>
                <button>Post</button>
                </div>
        
        </>
    );
};
export default FileUploader;