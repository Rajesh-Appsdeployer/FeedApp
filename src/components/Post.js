import React, { useState, useRef } from 'react';
import profile_image from '../images/images.jpeg'
import '../Css/createpost.css'
import image2 from '../images/image2.webp'
import '../Css/post.css'
 
// import { FaHireAHelper, FaPoll } from 'react-icons/fa'
// import { CgFileDocument } from 'react-icons/cg'
// import { MdOutlineAddAPhoto, MdCelebration } from 'react-icons/md'
// import { FiVideo } from 'react-icons/fi'
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Tooltip from 'react-bootstrap/Tooltip';
// import Overlay from 'react-bootstrap/Overlay';
// import Popover from 'react-bootstrap/Popover';
const FileUploader = () => {
    // const hiddenFileInput = React.useRef(null);
    // const [target, setTarget] = useState(null);
    // const ref = useRef(null);
    // const handleClickSelect = event => {
    //     console.log("click")
    //     hiddenFileInput.current.click();
    // };
    // const [input, setInput] = useState("");
    // const [showEmojis, setShowEmojis] = useState(false);

    // const handleClick = (event) => {
    //     setShowEmojis(!showEmojis);
    //     setTarget(event.target);
    // };
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