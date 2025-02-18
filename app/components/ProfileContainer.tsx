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
    <div className="flex bg-profile w-[54rem] rounded-[10px] shadow-2xs p-10 gap-10">
      <div>
        <img
          src={profile.avatar_url}
          className="w-[9.25rem] h-[9.25rem] rounded-lg"
          alt={profile.login}
        />
      </div>
      <div className="flex flex-col w-full justify-between items-center">
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
        <div className="flex w-full gap-5">
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
