import Avatar from "@mui/material/Avatar";

const Sidebar = () => {
  const statStyle = "mt-4 flex justify-between";
  const statStyleParagraph = "text-gray-500 text-sm font-semibold";
  const statStyleNumber = "!text-[#0a66c2] font-bold";

  const recentItems = (topic) => {
    return (
      <div className="flex text-sm font-bold cursor-pointer text-gray-500 mb-1 p-[5px] hover:text-black hover:cursor-pointer hover:rounded-xl hover:bg-slate-50">
        <span className="mr-[10px] ml-[5px]">#</span>
        <p>{topic}</p>
      </div>
    );};
  return (
    // Sidebar
    <div className="sticky top-20 flex-[0.2] rounded-xl text-center h-fit">
      {/* Sidebar Top */}
      <div className="flex flex-col items-center rounded-t-xl border border-slate-200 bg-white pb-3 border-b-0">
        <img
          src="https://source.unsplash.com/random?wallpapers"
          alt=""
          className="w-full h-16 object-cover mb-[-20px] rounded-t-xl"
        />
        <Avatar className="mb-3" />
        <h2 className="text-lg">Adeyemi Muaz</h2>
        <h4 className="text-gray-500 text-sm">Adeyemimuaz65@gmail.com</h4>
      </div>

      {/* Sidebar stats  */}
      <div className="p-[10px] mb-[10px] bg-white rounded-b-xl border border-slate-200 ">
        {/* Sidebar stat */}
        <div className={statStyle}>
          <p className={statStyleParagraph}>Who viewed you</p>
          <p className={statStyleNumber}>2,543</p>
        </div>
        <div className={statStyle}>
          <p className={statStyleParagraph}>Views on post</p>
          <p className={statStyleNumber}>1,396</p>
        </div>
      </div>

      {/* Sidebar bottom  */}
      <div className="text-left p-[10px] bg-white border border-slate-200 rounded-lg mt-[10px]">
        <p className="text-sm pb-[10px]">Recent</p>
        <p>
          {recentItems("reactjs")}
          {recentItems("programming")}
          {recentItems("webdevelopment")}
          {recentItems("softwareengineering")}
          {recentItems("developer")}
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
