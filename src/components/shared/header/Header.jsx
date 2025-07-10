import logo from "../../../assets/images/logo.svg";
import searchIcon from "../../../assets/images/search.svg";
const Header = () => {
  return (
    <header className="hidden lg:block bg-shadowBg z-50 fixed w-[95%] uppercase left-1/2 -translate-x-1/2 ">
      <nav className="px-[4rem] py-5 text-white">
        <ul className="flex gap-4 text-sm w-fit">
          <li>personal</li>
          <li>business</li>
          <li>play</li>
          <li>investors</li>
          <li>foundation</li>
        </ul>
      </nav>
      <nav className="px-[4rem] py-5 flex items-center justify-between bg-mtn ">
        <div className="flex items-center gap-10">
          <img src={logo} alt="logo" className="w-20" />
          <ul className="flex gap-4 w-fit">
            <li>personal</li>
            <li>business</li>
            <li>play</li>
            <li>investors</li>
            <li>foundation</li>
          </ul>
        </div>
        <span>
          <img src={searchIcon} alt="" />
        </span>
      </nav>
    </header>
  );
};

export default Header;
