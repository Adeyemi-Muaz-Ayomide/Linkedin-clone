/* eslint-disable react/no-unescaped-entities */
import Feed from "./components/AppBody/Feed";
import Sidebar from "./components/AppBody/Sidebar";
import Header from "./components/Header/Header";
import "./index.css";
const App = () => {
  return (
    <div className="bg-[#f3f2ef] flex-1 items-center flex-col">
      <Header />

      {/* App Body */}
      <div className="flex">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
};

export default App;
