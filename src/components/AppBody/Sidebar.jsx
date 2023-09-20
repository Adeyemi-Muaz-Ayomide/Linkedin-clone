import Avatar from "@mui/material/Avatar";

const Sidebar = () => {
    const statStyle = "mt-4 flex justify-between"
    const statStyleParagraph = "text-gray-500 text-sm font-semibold"
    const statStyleNumber = "!text-[#0a66c2] font-bold"
  return (
    // Sidebar
    <div className="sticky top-20 flex-[0.2] rounded-xl text-center h-fit">
      {/* Sidebar Top */}
      <div className="flex flex-col items-center rounded-t-xl border-solid bg-white pb-3 border-b-0">
        <img
          src="https://source.unsplash.com/random?wallpapers"
          alt=""
          className="w-full h-16 object-cover mb-[-20px] rounded-t-xl"
        />
        <Avatar className="mb-3" />
        <h2>Adeyemi Muaz</h2>
        <h4>Adeyemimuaz65@gmail.com</h4>
      </div>

      {/* Sidebar stats  */}
      <div>
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
      <div>
        <p>Recent</p>
      </div>
    </div>
  );
};

export default Sidebar;
