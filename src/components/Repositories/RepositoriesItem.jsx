import './RepositoriesItem.css'

const RepositoriesItem = ({ repoTitle, repoDesc, repoDate, repoLink }) => {
  return (
    <div className="repository">
      <a 
        href={repoLink} 
        className="repositoryDetails" 
        target="_blank" 
        rel="noreferrer"
      >
        <h3 className="repositoryTitle">{repoTitle}</h3>
        <p className="repositoryDescription">{repoDesc}</p>
        <p className="repositoryDate">Push Date : {repoDate}</p>
      </a>
    </div>
  )
}

export default RepositoriesItem
