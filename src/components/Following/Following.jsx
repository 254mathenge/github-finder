/* eslint-disable react/prop-types */
import "./Following.css"

const following = [
    {
        image:"",
        name:"Katamii"
    },
    {
        image:"",
        name:"Alex Githinji"
    }
]
const FollowingCard =(props)=>{
    return (
        <div className="following-card">
            <div className="following-image">
                <img src={props.image} alt=""/>
            </div>
            <div className="following-name">
                <p className="following-name">{props.name}</p>
            </div>
        </div>
    )
}

export default function Following() {
    return (
        <>
            <h2 className="following-h2">Following(2)</h2>
            <div className="following-section">
                {following.map((following, index) => (
                    <FollowingCard
                        key={index}
                        image={following.image}
                        name={following.name}
                    />
                ))}
            </div>
        </>
    )
}