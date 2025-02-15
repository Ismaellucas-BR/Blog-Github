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

export default function Home() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    const username = "Ismaellucas-BR";

    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setProfile(data);
        console.log(data);
      });

    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
        console.log(data);
      });
  }, []);

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="w-[54rem]">
        <ProfileContainer />
        <section className="flex flex-col gap-2 mt-14">
          <div className="flex justify-between">
            <h2 className="text-subtitle font-nunito font-bold text-lg">
              Publicações
            </h2>
            <span className="text-span font-nunito font-normal text-sm">
              6 publicações
            </span>
          </div>
          <form className="w-full">
            <input
              className="bg-input text-text font-normal text-[1rem] font-nunito border border-border p-3 rounded-md w-full"
              placeholder="Buscar conteúdo"
              type="search"
            />
          </form>
        </section>
      </div>
    </main>
  );
}
