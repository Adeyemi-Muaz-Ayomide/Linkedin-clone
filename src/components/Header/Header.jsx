import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  const avatar = "https://i.pravatar.cc/48?u=118836";
  return (
    // Header section
    <header className="flex justify-evenly sticky top-0 py-3 w-full z-[999] border-b-[0.1px] border-solid bg-white">
      {/* Left header section */}
      <div className="flex">
        <img
          className="object-contain h-10"
          src="/icons8-linkedin (1).svg"
          alt="picture of linkedin"
        />

        {/* Search section */}
        <div className="flex items-center p-2 rounded h-6 bg-[#eef3f8]">
          <SearchIcon />
          <input
            type="text"
            className="border-none outline-none bg-inherit text-gray-700"
            placeholder="Search"
          />
        </div>
      </div>
      {/* Right header section */}
      <div className="flex">
        <HeaderOption Icon={HomeIcon} title={"Home"} />
        <HeaderOption Icon={SupervisorAccountIcon} title={"My Network"} />
        <HeaderOption Icon={BusinessCenterIcon} title={"Jobs"} />
        <HeaderOption Icon={ChatIcon} title={"Messaging"} />
        <HeaderOption Icon={NotificationsIcon} title={"Notifications"} />
        <HeaderOption avatar={avatar} src={avatar} title="me" />
      </div>
    </header>
  );
};

export default Header;
