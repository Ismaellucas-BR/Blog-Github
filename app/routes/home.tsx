import ProfileContainer from "~/components/ProfileContainer";
import type { Route } from "./+types/home";
import RepoList from "~/components/RepoList";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

interface Repo {
  id: string;
  name: string;
  description?: string;
  html_url: string;
  public_repos: number;
}

export default function Home() {
  const [profile, setProfile] = useState<Repo | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    const username = "Ismaellucas-BR";

    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((userProfile) => {
        setProfile(userProfile);
        console.log(userProfile);
      });

    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
        console.log(data);
      });
  }, []);

  const filteredRepos = repos.filter((repo) => {
    return repo.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="w-[54rem]">
        {profile && <ProfileContainer profile={profile} />}
        <section className="flex flex-col gap-2 mt-14">
          <div className="flex justify-between">
            <h2 className="text-subtitle font-nunito font-bold text-lg">
              Publicações
            </h2>
            <span className="text-span font-nunito font-normal text-sm">
              {profile
                ? `${profile.public_repos} publicações`
                : "Carregando..."}
            </span>
          </div>
          <form className="w-full">
            <input
              className="bg-input text-text font-normal text-[1rem] font-nunito border border-border p-3 rounded-md w-full"
              placeholder="Buscar conteúdo"
              type="search"
              onChange={(e) => setsearchTerm(e.target.value)}
            />
          </form>
        </section>
        <section className="flex flex-col gap-7">
          {filteredRepos.map((repo) => (
            <RepoList key={repo.id} repo={repo} />
          ))}
        </section>
      </div>
    </main>
  );
}
