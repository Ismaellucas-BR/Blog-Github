import Logo from "../../public/assets/Logo.png";
function Header() {
  return (
    <header
      className={`flex justify-center items-center max-w-[90rem] max-h-[18.5rem] w-full h-[18.5rem] bg-[url(../../public/assets/Cover.png)] bg-cover bg-no-repeat bg-center`}
    >
      <img
        src={Logo}
        className="w-[9.25rem] h-[6.125rem]"
        alt="Logo escrito: Github blog"
      />
    </header>
  );
}

export default Header;
