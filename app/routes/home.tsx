import React, { useEffect, useState } from "react";
import ProfileContainer from "~/components/ProfileContainer";
import RepoList from "~/components/RepoList";
import Pagination from "~/components/Pagination";
import type { Route } from "./+types/home";

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
  pushed_at: string;
}

export default function Home() {
  const [profile, setProfile] = useState<Repo | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setsearchTerm] = useState("");
  const itemsPerPage = 10; // Número de itens por página

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

  // Paginação dos repositórios filtrados
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRepos = filteredRepos.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className="flex flex-col items-center justify-center -translate-y-18">
      <div className="w-full lg:w-[54rem] p-5 lg:p-0">
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
        <section className="flex flex-col gap-10">
          <div className="grid grid-cols-1 flex-col gap-10 mt-10 md:grid-cols-2">
            {currentRepos.map((repo) => (
              <RepoList key={repo.id} repo={repo} />
            ))}
          </div>
          <Pagination
            totalItems={filteredRepos.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
        </section>
      </div>
    </main>
  );
}
