import React, { useState, useEffect } from "react";
import "../github/github_about.css";

export default function GithubAbout() {
    const [userData, setUserData] = useState({});
    const [repoCount, setRepoCount] = useState(0);
    const username = 'Njambi-M';

    useEffect(() => {
        const fetchData = async () => {
          try {
            const userresponse = await fetch(`https://api.github.com/users/${username}`);
            const repoResponse = await fetch(`https://api.github.com/users/${username}/repos`);
            const userresult = await userresponse.json();
            setUserData(userresult);
            const repoResult = await repoResponse.json();
            setRepoCount(repoResult.length);
          } catch (error) {
            console.error('Error fetching GitHub data:', error);
          }
        };
    
        fetchData();
      }, [username]);

    return(  
    <div className="git_info">
      <h2>{`GitHub User: ${userData.login}`}</h2>
      <p>{`Name: ${userData.name}`}</p>
      <p>{`Number of Public Repositories: ${repoCount}`}</p>
    </div>
  );
};