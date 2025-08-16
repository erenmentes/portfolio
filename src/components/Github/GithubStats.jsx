import React, { useEffect, useState } from 'react'
import './GithubStats.css';
import fetchGithubApi from '../../Api/GithubAPI';

const GithubStats = () => {

    const [githubData, setGithubData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchGithubApi();
            if(result && result.data) {
                setGithubData(result);
            } else {
                console.warn("fetching github data action is not successfull.");
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        console.log(githubData.data);
    }, [githubData]);

  return (
    <div className='githubStats'>
        <h2 className='githubTitle'>github stats /</h2>
        <div className="githubDetails">
            <img src="https://avatars.githubusercontent.com/u/197309527?v=4" alt="" />
            <div className="stats">
                <p>username : {githubData?.data?.login}</p>
                <p>bio : {githubData?.data?.bio}</p>
                <p>total repositories : {githubData?.data?.public_repos} </p>
                <p>followers : {githubData?.data?.followers}</p>
            </div>
        </div>
    </div>
  )
};

export default GithubStats;