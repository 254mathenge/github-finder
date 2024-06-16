/* eslint-disable react/prop-types */
import "./Following.css";
import useGithubProfile from "../../store/gitProfileStore";
import { useEffect } from "react";


const FollowingCard = (props) => {
  return (
    <div className="following-card">
      <div className="following-image">
        <img src={props.image} alt="" />
      </div>
      <div className="following-name">
        <p className="following-name">{props.name}</p>
      </div>
      <div className="following-link">
        <p className="following-link">{props.link}</p>
      </div>
    </div>
  );
};

export default function Following() {
  const followingInfos = useGithubProfile((state) => state.followingInfo);
  const fetchFollowing = useGithubProfile((state) => state.fetchFollowing);
  const username = useGithubProfile((state) => state.username);
  useEffect(() => {
    fetchFollowing(username);
  }, [username]);
  //console.log("Following component", followingInfos);
  return (
    <>
      <h2 className="following-h2">Following</h2>
      <div className="following-section">
        {followingInfos.map(({avatar_url,id,login,url}) => (
          <FollowingCard
            key={id}
            image={avatar_url}
            name={login}
            link={url}
          />
        ))}
      </div>
    </>
  );
}
