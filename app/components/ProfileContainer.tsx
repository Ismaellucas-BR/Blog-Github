import {
  ArrowSquareOut,
  GithubLogo,
  Building,
  Users,
} from "@phosphor-icons/react";
function ProfileContainer() {
  return (
    <div className="flex bg-profile w-[54rem] rounded-[10px] shadow-2xs p-10 gap-10">
      <div>
        <img
          src="https://i0.wp.com/talkandchalk.com.br/wp-content/uploads/2023/02/Como-o-Google-Tradutor-entende-os-idiomas.webp?fit=1400%2C788&ssl=1"
          className="w-[9.25rem] h-[9.25rem] rounded-lg"
          alt=""
        />
      </div>
      <div className="flex flex-col w-full justify-between items-center">
        <div className="flex justify-between w-full items-center">
          <h2 className="text-title font-bold text-2xl font-nunito">
            Nome pessoa
          </h2>{" "}
          <span className="flex items-center gap-1.5 text-blue font-bold text-[0.75rem] font-nunito uppercase">
            GITHUB
            <ArrowSquareOut size={24} />
          </span>
        </div>
        <span className="text-text font-normal text-[1rem] font-nunito">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </span>
        <div className="flex w-full gap-5">
          <div className="flex gap-2">
            <GithubLogo size={24} className="text-label" />
            <span className="text-text font-normal text-[1rem] font-nunito">
              cameronwll
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
              32 seguidores
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileContainer;
