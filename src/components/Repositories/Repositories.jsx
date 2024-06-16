/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { FaCodeFork } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import "./Repositories.css"
import useGithubProfile from "../../store/gitProfileStore";
import { useEffect } from "react";


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
const repoInfos = useGithubProfile(state => state.reposInfo);
const fetchRepos = useGithubProfile(state => state.fetchRepos)
const username  = useGithubProfile(state => state.username);
    useEffect(()=>{
        fetchRepos(username);
},[username])

//console.log("Repositoriescomponent",repoInfos)

return (
    <div className="repository-wrapper">
         <h2 className="Repository-h2">Repositories {repoInfos.length}</h2>
        <div className="repositories-section">
           
            {repoInfos.map(({forks,id,name,stargazers_count}) => (
                <RepositoryCard
                    key={id}
                    title={name}
                    forks={forks}
                    stars={stargazers_count}
                />
            ))}
        </div>
    </div>
)
}