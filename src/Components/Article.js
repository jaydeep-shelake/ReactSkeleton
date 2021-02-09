import React ,{useState,useEffect}from 'react'
import axios from 'axios';
import SkeletonArticle from './Skeletons/SkeletonArticle'
const Article = () => {
   const [articles,setArticle]=useState([]);
   useEffect(()=>{
    setTimeout(async()=>{ //just for testing
        const {data}=await axios.get('https://jsonplaceholder.typicode.com/posts');
        setArticle(data);
        
    },5000)
   },[])

   const renderArticle= articles.map((article,index)=>{
       return(
           <div key={index} className="body">
             <h3>{article.title}</h3>
             <p>{article.body}</p>  
           </div>
       )
   })
    return (
    
        <div className="articles">
            <h2>Articles</h2>
            
            { articles.length>0?renderArticle:[1,2,3,4,5,6,7,8,9,10].map((n)=><SkeletonArticle theme="dark" key={n}/>)}
        </div>
    )
}

export default Article
//https://jsonplaceholder.typicode.com/posts
//https://jsonplaceholder.typicode.com/users/1