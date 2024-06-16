/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { FaCodeFork } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import "./Repositories.css"
const repository = [
    {
        title: "-hermit-md",
        forks: 0,
        stars: 0,
    },
    {
        title: "convert-Arabic",
        forks: 0,
        stars: 0,
    },
    {
        title: "atascienceresearch",
        forks: 0,
        stars: 0,
    },
    {
        title: "Gawaji-store",
        forks: 0,
        stars: 0,
    },
    {
        title: "raganork-md",
        forks: 0,
        stars: 0,
    },
    {
        title: "CSS=Box-Model",
        forks: 0,
        stars: 0,
    },
]

const RepositoryCard = (props) => {
    return (
        <div className="repositories-card">
             <div className="repository-title-space"> 
            <div className="repository-title">
                <p className="repository-title">{props.title }</p>
                </div>
                </div>
            <div className="repository-star-fork">
                <p className="repository-fork"><FaCodeFork />{props.forks} forks</p>
                <p className="repository-star">< FaRegStar />{props.stars} stars</p>
            </div>
        </div>
    )
}
 export default function Repositories() {
    return (
        <>
             <h2 className="Repository-h2">Repositories(20)</h2>
            <div className="repositories-section">
               
                {repository.map((repo, index) => (
                    <RepositoryCard
                        key={index}
                        title={repo.title}
                        forks={repo.forks}
                        stars={repo.stars}
               
                
                    />
                ))}
            </div>
        </>
    )
}
