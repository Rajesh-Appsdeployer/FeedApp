import React ,{ useState } from 'react';
import '../Css/Feed.css'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.webp'
import BlogData from "../components/data/Blogdata";

const Feed = () => {
    const [blogs,setBlogs]=useState(BlogData);
    const handleLike =(key,valuelike) =>{

    console.log(valuelike,"valuelike")
     
       var updatelike= blogs.map(blog=>      
        blog.id===key?{...blog,like:valuelike?blog.like-1 :blog.like+1,liked:!blog.liked}  
        :blog   
      )
    setBlogs(updatelike);
    console.log(blogs,"valuelike")
}
  return (
    <>
    
        <div className='feed'>
          <div className='userProfile'>
          <div className='home'>
           <img src={image1} alt='bac'/>
           <div className='post'>
           <div className='Profile'>
            <img src={image2} alt='profile' />
            <h2 className='name'>Rajesh Nagar</h2>
            </div>
             
            
        
           </div>
           
           </div>
           <div className='heder'>
           <div className='Homefeed'>
           {blogs && blogs.map((item,key)=>{
        
        return(
            item.name?
              <div className='details' key={key}>
                 <div className='blog'>
                 <img src={image2} alt='profile' />
                 <h3>Rajesh Nagar</h3>
                 </div>
                 <div className='blogpost'>
                 <p className='paragraph'>{item.blogDescription}</p>
                 <img src={item.imageUrl} alt='bac'/>
                 </div>
                 <div className="card-footer">
                <div className="feed__inputOptions">
              
                  <div className="inputOption" onClick={()=>handleLike(item.id,item.liked)}>
                  {item.like}
                  <i className={item.liked?"fa-solid fa-thumbs-up active_like":"fa-solid fa-thumbs-up"}/>
                    <h5 className={item.liked?"active_like":""}>Like</h5>
                  </div>
                  <div className="inputOption">
                  {item.comment}
                    <i className="fa-regular fa-comment"></i>
                    <h5>Comment</h5>
                  </div>
                  <div className="inputOption">
                    <i className="fa-solid fa-share"></i>
                    <h5>Share</h5>
                  </div>
                  <div className="inputOption">
                    <i className="fa-solid fa-paper-plane"></i>
                    <h5>Send</h5>
                  </div>
                </div>
              </div>
              </div>  
           :''
        )}
           )}
           </div>
          </div>
          </div>
        </div>
    </>
  )
}

export default Feed