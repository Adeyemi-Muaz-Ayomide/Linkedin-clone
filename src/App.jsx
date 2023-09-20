/* eslint-disable react/no-unescaped-entities */
import Sidebar from "./components/AppBody/Sidebar";
import Header from "./components/Header/Header";
import "./index.css";
const App = () => {
  return (
    <div className="bg-[#f3f2ef] flex items-center flex-col">
      <Header />

      {/* App Body */}
      <div className="flex">
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
