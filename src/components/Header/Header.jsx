/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from "react";
import "./Header.css";
const Header = () => {
  const [Header, setHeader] = useState(null);

  const HandleSearch = async (event) => {
    console.log("username",event.target.value);
    try {
      const api_url = "https://api.github.com/users/254mathenge";
      // setLoading(true);

      await fetch(api_url)
        .then(async response => {
          //set loading to false
          //do sth with the returned response
          const res =await response.json()
          console.log("git fetch response", res);
        }).catch(error => {
          //set loading to false
          //handle an error that was caught
          console.log("an error was caught",error)
        })
      
      // setLoading(false);
      // setHeader(response.slip.advice);
    } catch (err) {
      setHeader("error fetching data");
      // setLoading(false);
    }
  };


  function HandleSubmit(event) {
    //const { name, value } = event.target;
    console.log("event at the handle submit function",event.target)
  }
  return (
    <>
      <div className="header-navbar-wrapper">
        <div className="header-logo">
          <h1>GITHUB FINDER</h1>
        </div>
        <div className="header-link">
          <p>
            By{" "}
            <a href="FaithMathenge" className="git-link">
              Faith Mathenge
            </a>
          </p>
        </div>
        
        <form className="header-search"
          onSubmit={
            (event) => {
              event.preventDefault();
              // HandleSearch(event)
              HandleSubmit(event)
            }}>
          <input
            type="text"
            className="type-text"
            name="username"
            value={e.target.value}
            placeholder="Enter a username"
          />
          <button className="button" type="submit"  >
            {" "}
            Search{" "}
          </button>
        </form>
      </div>
    </>
  );
};
export default Header;
