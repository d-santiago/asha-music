import "./ProfileCard.css";
import { useEffect, useState } from 'react';
import profilepic from './../profilepic.JPG';
const axios = require('axios');





const Profile = (props) => {

	const [followersCount, setFollowersCount] = useState(0);
	const [followingCount, setFollowingCount] = useState(0);

	useEffect(() => {
		const values = { uid: sessionStorage.uid };
		console.log(values);
	    axios.post("/user/followerCount", values)
	    .then((res) => {
	    	console.log(res.data);
	        setFollowersCount(res.data.count);
	    })

	    axios.post("/user/followingCount", values)
	    .then((res) => {
	    	console.log(res.data);
	        setFollowingCount(res.data.count);
	    })
	}, []);

	return (
	<div>
		<div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
	    	<div className="profilecard p-4 col-md-3">
	        	<div className="profileimage d-flex flex-column justify-content-center align-items-center"> 
	        	<img src={profilepic} height="100" width="100" />
	        	<span className="name mt-3">{props.name}</span> 
	        	<span className="idd">{props.username}</span>
		            <div className="d-flex flex-row justify-content-center align-items-center gap-2"> <span className="profileidd1">{props.artistName}</span></div>
		            <div className="d-flex flex-row justify-content-center align-items-center mt-3" onClick={props.handleFollowers}> 
		            	<span className="profilenumber">{followersCount} <span className="profilefollow">Followers</span></span> 
		            </div>
		            <div className="d-flex flex-row justify-content-center align-items-center" onClick={props.handleFollowing}> 
		            	<span className="profilenumber">{followingCount} <span className="profilefollow">Following</span></span> 
		            </div>
		            <div className=" d-flex mt-2"> <button className="profilebtn1 btn-dark">Edit Profile</button> </div>
		            <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i className="fa fa-twitter"></i></span> <span><i className="fa fa-facebook-f"></i></span> <span><i className="fa fa-instagram"></i></span> <span><i className="fa fa-linkedin"></i></span> </div>
		            <div className=" px-2 rounded mt-4 profiledate "> <span className="profilejoin">Joined May,2021</span> </div>
	       	 	</div>
	    	</div>
		</div>
	</div>
	)
}

export default Profile;