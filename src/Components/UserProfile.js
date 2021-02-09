import React ,{useState,useEffect}from 'react'
import axios from 'axios';
import SkeletonProfile from './Skeletons/SkeletonProfile';
const UserProfile = () => {
    const [profile,setProfile]=useState(null);
   
    useEffect(()=>{
     setTimeout(async()=>{ //just for testing
         const {data}=await axios.get('https://jsonplaceholder.typicode.com/users/1');
         console.log(data);
         setProfile(data);
         
     },5000)
    },[])

    return (
        <div className="user">
          <h2>User Detail</h2>
          {
            profile?(
                <div className="profile">
                 <h3>{profile.username}</h3>
                 <p>{profile.email}</p>
                 <a href={profile.website}>Website</a>
                </div>
            ):<SkeletonProfile/>
        }   
        </div>
        
    )
}

export default UserProfile
