/* eslint-disable no-undef */
import Repositories from "../components/Repositories/Repositories";
import Profile from "../components/profile/Profile";
import Followers from "../components/Followers/Followers";
import Following from "../components/Following/Following";
import "./Home.css"
function Home() {
  return (
    <div className="home-section">
      <div className="home-profile-repos">
        <Profile />
        <Repositories />
      </div>
      
      <Followers />
      <Following />
    </div>
  );
}
export default Home;
