/* eslint-disable react/prop-types */
import "./Followers.css"
import { FaExternalLinkAlt } from "react-icons/fa";
import useGithubProfile from "../../store/gitProfileStore";
import { useEffect } from "react";


const FollowerCard = (props) => {
   
    return (
        <div className="follower-card">
            <div className="follower-image">
                <img src={props.image} alt=""/>
            </div>
            <div className="follower-name">
                <p className="follower-name">{props.name}</p>
            </div>
            <div className="follower-link">
                <p className="follower-link"><FaExternalLinkAlt />{props.link}</p>
            </div>
        </div>
    )
}

export default function Followers() {
    const followersInfos = useGithubProfile(state => state.followersInfo)
    const fetchFollowers = useGithubProfile((state) => state.fetchFollowers);
    const username = useGithubProfile((state) => state.username);
    useEffect(() => {
      fetchFollowers(username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [username]);
    //console.log("Followers component", followersInfos)
    
    return (
        <>
        <div>
           <h2 className="follower-h2">Followers</h2>
            </div>
            <div className="followers-section">
                {followersInfos.map(({id,avatar_url,login,url}) => (
                    <FollowerCard
                        key={id}
                        image={avatar_url}
                        name={login}
                        link={url}
                    />
                ))}
            </div>
        </>
    )
}
