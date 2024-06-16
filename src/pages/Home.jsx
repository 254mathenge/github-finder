/* eslint-disable no-undef */
import Repositories from "../components/Repositories/Repositories";
import Profile from "../components/profile/Profile";
import Followers from "../components/Followers/Followers";
import Following from "../components/Following/Following";
function Home() {
    return (
        <>
            <div className="home-section" >
         
                    <Profile />
                <Repositories />
                <Followers />
                <Following/>
              </div>
        </>
    )
}
export default Home;