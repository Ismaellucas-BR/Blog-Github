import { data } from "react-router";

interface Repo {
  id: string;
  name: string;
  description?: string;
  html_url: string;
  pushed_at: string;
}

interface RepoListProps {
  repo: Repo;
}

function RepoList({ repo }: RepoListProps) {
  const hoje = new Date();
  const data = new Date(repo.pushed_at);
  const diffTime = Math.abs(hoje.getTime() - data.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return (
    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col gap-5 bg-post text-text rounded-lg p-5 h-[13.5rem] h-min-[13.5rem]">
        <div className="flex justify-between ">
          <h2 className="font-bold text-xl font-nunito">{repo.name}</h2>
          <span className="font-normal text-lg font-nunito">{`Há ${diffDays} dias`}</span>
        </div>

        <p className="font-normal text-lg font-nunito overflow-hidden line-clamp-4">
          {repo.description}
        </p>
      </div>
    </a>
  );
}

export default RepoList;
