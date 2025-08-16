import './RepositoriesList.css'
import RepositoriesItem from './RepositoriesItem'
import fetchApi from '../../Api/RepositoriesAPI'
import React, { useEffect, useState } from 'react'

const RepositoriesList = () => {

  const [repos, setRepos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        const result = await fetchApi();
        if(result && result.data) {
            setRepos(result.data);
        } else {
            console.warn("fetching repos action is not successfull.");
        };
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(repos);
  }, [repos])

  return (
    <div className='repositoriesList'>
        <h2 className='repositoriesTitle'>repositories /</h2>
        {
  repos && repos.length > 0 ? (
    // If repos are available, render up to the first 5 real repositories
    repos.slice(0, 5).map((repo, index) => (
      <RepositoriesItem
        repoTitle={repo.name}
        repoDesc={repo.description}
        repoDate={repo.pushed_at}
        repoLink={repo.html_url}
        key={index}
      />
    ))
  ) : (
    // If repos are not yet loaded, render 5 placeholder "Loading" items
    Array(5).fill(null).map((_, index) => (
      <p key={index}>Loading repository {index + 1}...</p> // Or a skeleton loader component
    ))
  )
}
    </div>
  )
}

export default RepositoriesList