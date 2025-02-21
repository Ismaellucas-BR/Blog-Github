import {
  ArrowSquareOut,
  GithubLogo,
  Building,
  Users,
} from "@phosphor-icons/react";

interface Profile {
  avatar_url?: string;
  login?: string;
  name?: string;
  bio?: string;
  followers?: number;
  public_repos?: number;
}
interface ProfileContainerProps {
  profile: Profile;
}

function ProfileContainer({ profile }: ProfileContainerProps) {
  return (
    <div className="flex flex-col bg-profile w-full lg:w-[54rem]  rounded-[10px] shadow-2xs p-10 gap-10 md:flex-row">
      <div className="flex justify-center items-center w-full lg:w-[12rem] h-[9.375rem]sm:h-full lg:h-[9.25rem]">
        <img
          src={profile.avatar_url}
          className="w-[9.375rem] h-[9.375rem] lg:h-[9.25rem]rounded-full"
          alt={profile.login}
        />
      </div>
      <div className="flex flex-col w-full justify-between items-center gap-3">
        <div className="flex justify-between w-full items-center">
          <h2 className="text-title font-bold text-2xl font-nunito">
            {profile.name || profile.login}
          </h2>{" "}
          <span className=" gap-1.5 text-blue font-bold text-[0.75rem] font-nunito uppercase">
            <a
              className="flex items-center"
              target="_blank"
              href="https://github.com/Ismaellucas-BR">
              GITHUB
              <ArrowSquareOut size={24} />
            </a>
          </span>
        </div>
        <span className="text-text font-normal text-[1rem] font-nunito">
          {profile.bio}
        </span>
        <div className="flex flex-col w-full gap-5 mt-5 lg:flex-row lg:mt-0">
          <div className="flex gap-2">
            <GithubLogo size={24} className="text-label" />
            <span className="text-text font-normal text-[1rem] font-nunito">
              {profile.login}
            </span>
          </div>
          <div className="flex gap-2">
            <Building size={24} className="text-label" />
            <span className="text-text font-normal text-[1rem] font-nunito">
              Rocketseat
            </span>
          </div>
          <div className="flex gap-2">
            <Users size={24} className="text-label" />
            <span className="text-text font-normal text-[1rem] font-nunito">
              {profile.followers} seguidores
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileContainer;
