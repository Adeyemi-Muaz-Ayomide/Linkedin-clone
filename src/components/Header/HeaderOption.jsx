/* eslint-disable react/prop-types */
import Avatar from "@mui/material/Avatar";
const HeaderOption = ({ avatar, title, Icon }) => {
  const iconStyle = "object-contain !h-[25px] !w-[25px]";
  return (
    <div className="flex items-center mr-5 cursor-pointer text-gray-400  flex-col hover:text-black">
      {Icon && <Icon className={iconStyle} />}
      {avatar && <Avatar src={avatar} alt={title} className={iconStyle} />}
      <h3 className="font-normal text-xs">{title}</h3>
    </div>
  );
};

export default HeaderOption;
