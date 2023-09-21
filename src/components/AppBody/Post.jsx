/* eslint-disable react/prop-types */
import Avatar from "@mui/material/Avatar";
import InputOption from "./InputOption";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Post = ({ name, description, message, photoUrl }) => {
  return (
    //Post
    <div className="bg-white p-4 mb-[10px] rounded-xl">
      {/* Post Header */}
      <div className="flex mb-[10px]">
        <Avatar />
        {/* Post Info */}
        <div className="ml-[10px]">
          <h2 className="text-[15px]">{name}</h2>
          <p className=" text-xs text-gray-500">{description}</p>
        </div>
      </div>
      {/* Post Body */}
      <div className=" overflow-any">
        <p>{message}</p>
      </div>

      {/* Post Buttons */}
      <div className="flex"> 
        <InputOption Icon={ThumbUpAltOutlinedIcon} title='Like' color='gray'/>
        <InputOption Icon={ChatOutlinedIcon} title='Comment' color='gray'/>
        <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray'/>
        <InputOption Icon={SendOutlinedIcon} title='Send' color='gray'/>
      </div>
    </div>
  );
};

export default Post;
