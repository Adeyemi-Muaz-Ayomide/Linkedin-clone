/* eslint-disable react/prop-types */

const InputOption = ({ Icon, title, color }) => {
  return (
    <div className="flex items-center mt-4 text-[#4b5563] p-[10px] cursor-pointer hover:bg-[#e5e7eb] hover:rounded-[10px]">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
};

export default InputOption;
