/* eslint-disable react/no-unescaped-entities */
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/UserSlice";
import Feed from "./components/AppBody/Feed";
import Sidebar from "./components/AppBody/Sidebar";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import "./index.css";
const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      //user is signed in
      dispatch(
        login({
          email: user.email,
          uid: user.uid,
          displayName: user.name,
          photoURL: user.profilePic,
        })
      );
    } else {
      // User is signed out
      dispatch(logout());
    }
  });
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
