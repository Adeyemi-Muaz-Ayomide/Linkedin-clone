import { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };
  const handleRegister = () => {};

  const inputStyle =
    "w-[350px] h-[50px] text-xl pl-[10px] mb-[10px] rounded-md";

  return (
    <div className="grid place-items-center mx-auto py-[100px]">
      <img className=" object-contain h-[70px] my-[20px]" src="" alt="" />

      <form className="flex flex-col">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputStyle}
          type="text"
          placeholder="Full name (required if registering)"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          className={inputStyle}
          type="text"
          placeholder="Profile pic URL (optional)"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputStyle}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputStyle}
          type="password"
          placeholder="Password"
        />
        <button
          type="submit"
          onClick={handleLogin}
          className="w-[365px] h-[50px] text-2xl text-white rounded-md bg-[#0074b1]"
        >
          Sign In
        </button>

        <p className="mt-[20px]">
          Not a member?{" "}
          <span
            onClick={handleRegister}
            className=" cursor-pointer text-[#0177b7]"
          >
            Register Now
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
