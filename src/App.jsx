/* eslint-disable react/no-unescaped-entities */
import { useSelector } from "react-redux";
import Feed from "./components/AppBody/Feed";
import Sidebar from "./components/AppBody/Sidebar";
import Header from "./components/Header/Header";
import "./index.css";
import { selectUser } from "./features/UserSlice";
import Login from "./components/Login/Login";
const App = () => {
  const user = useSelector(selectUser);
  return (
    <div className="bg-[#f3f2ef] flex-1 items-center flex-col">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <>
          {/* App Body */}
          <div className="flex">
            <Sidebar />
            <Feed />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
