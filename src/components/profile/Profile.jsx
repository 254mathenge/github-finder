import { FaExternalLinkAlt } from "react-icons/fa";
import "./Profile.css"
import { RiGitRepositoryFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
function Profile() {
    return (
        <>
            <div className="profile-section" >
                <div className="profile-image">
                    <img src="" alt=""/>
                </div>
                <div className="profile-name">
                    
                    <h2 className="profile-tname"> Faith Mathenge</h2>
                    <p className="profile-username"> 254mathenge</p>
                </div>
                <div className="profile-text">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, sequi?</p>

                </div>
                <div className="profile-link">
                    <a href="https://github.com/254mathenge"className="profile-view">< FaExternalLinkAlt /> View on github</a>
                </div>
                <div className="profile-follow-repo">
                    <p className="repository"><RiGitRepositoryFill/>Repository</p>
                    <p className="followers"><IoIosPeople/>Followers</p>
                    <p className="following"><IoIosPeople/>Following</p>
                </div>


            </div>
            
            
        </>
    )
}
export default Profile;