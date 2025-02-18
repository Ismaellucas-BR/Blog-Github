interface Repo {
  id: string;
  name: string;
  description?: string;
  html_url: string;
}

interface RepoListProps {
  repo: Repo;
}

function RepoList({ repo }: RepoListProps) {
  return (
    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
      <div className="bg-post text-text rounded-lg pb-2.5 p-5">
        <div>
          <h2 className="font-bold text-xl font-nunito">{repo.name}</h2>
          <span className="font-normal text-lg font-nunito">{`Há ${repo.}`}</span>
        </div>

        <p className="font-normal text-lg font-nunito">{repo.description}</p>
      </div>
    </a>
  );
}

export default RepoList;
