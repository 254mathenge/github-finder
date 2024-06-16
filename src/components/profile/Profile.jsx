/* eslint-disable no-undef */
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Profile.css"
import { RiGitRepositoryFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";

import useGithubProfile from "../../store/gitProfileStore";
import { useEffect } from "react";


function Profile() {

    const fetchProfile = useGithubProfile(state => state.fetchProfile);
    const username  = useGithubProfile(state => state.username);
    const profileInfo = useGithubProfile(state => state.profileInfo);
    useEffect(()=>{
        fetchProfile(username);
    },[username])
    const {login,avatar_url,followers,following,name,public_repos,bio} = profileInfo;
    //console.log("Profiles component",profileInfo)
    return (
        
            <div className="profile-section" >
                <div className="profile-image">
                    <img src={avatar_url} alt="profile avatar"/>
                </div>
                <div className="profile-name">
                    
                    <h2 className="profile-tname"> {name ? name : login} </h2>
                    <p className="profile-username"> {name ? name : login} </p>
                </div>
                <div className="profile-text">
                    <p>
                        {bio ? bio : ""}
                    </p>

                </div>
                <div className="profile-link">
                    <a href="/"className="profile-view">< FaExternalLinkAlt className="icon"/> View on github</a>
                </div>
                <div className="profile-follow-repo">
                    <p className="repository"><RiGitRepositoryFill className="icon"/> Repository {public_repos}</p>
                    <p className="followers"><IoIosPeople className="icon"/> Followers {followers}</p>
                    <p className="following"><IoIosPeople className="icon"/> Following {following} </p>
                </div>


            </div>
            
    )
}
export default Profile;