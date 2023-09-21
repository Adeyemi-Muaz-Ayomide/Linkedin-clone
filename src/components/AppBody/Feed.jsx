import { useState } from "react";

import Post from "./Post";
import InputOption from "./InputOption";

import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const sendPost = (e) => {
    e.preventDefault()
  }
  return (
    //Feed
    <div className="flex-[0.6] my-0 mx-[20px]">
      {/* Feed Input Container */}
      <div className="bg-white p-[10px] pb-5 rounded-[10px] mb-5">
        {/* Feed Input */}
        <div className="flex pl-[15px] rounded-3xl p-[10px]  border border-slate-200">
          <CreateIcon />
          <form className="flex w-full">
            <input
              type="text"
              className="border-none flex-1 ml-[10px] font-semibold outline-0"
            />
            <button type="submit" onClick={sendPost} className="hidden">
              Send
            </button>
          </form>
        </div>
        {/* Feed inputOptions */}
        <div className="flex justify-around">
          <InputOption Icon={ImageIcon} color={"#70B5F9"} title={"Photo"} />
          <InputOption
            Icon={SubscriptionsIcon}
            color={"#E7A33E"}
            title={"Video"}
          />
          <InputOption Icon={EventNoteIcon} color={"#C0CBCD"} title={"Event"} />
          <InputOption
            Icon={CalendarViewDayIcon}
            color={"#7FC15E"}
            title={"Write article"}
          />
        </div>
      </div>

      {posts.map((post) => <Post key={post} /> )}
      <Post
        name="Adeyemi muaz"
        description="This is a test"
        message="WOW!! This worked"
      />
    </div>
  );
};

export default Feed;
