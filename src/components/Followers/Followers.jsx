/* eslint-disable react/prop-types */
import "./Followers.css"

const follower = [
    {
        image:"",
        name: "Katamii",
        link:"view on github"
    },
    {
        image:"",
        name: "Alex Githinji",
        link:"view on github"
    }
]
const FollowerCard =(props)=>{
    return (
        <div className="follower-card">
            <div className="follower-image">
                <img src={props.image} alt=""/>
            </div>
            <div className="follower-name">
                <p className="follower-name">{props.name}</p>
            </div>
        </div>
    )
}

export default function Followers() {
    return (
        <>
            <h2 className="follower-h2">Followers(2)</h2>
            <div className="followers-section">
                {follower.map((follower, index) => (
                    <FollowerCard
                        key={index}
                        image={follower.image}
                        name={follower.name}
                    />
                ))}
            </div>
        </>
    )
}
