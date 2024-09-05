import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchLoginDetails } from "../redux/action";

const sharedClasses = {
  primaryBtn: "bg-aquamarine-500 text-white px-4 py-2 rounded-lg hover:bg-aquamarine-400 transition-all",
  secondaryBtn: "bg-aquamarine-300 text-aquamarine-900 px-4 py-2 rounded-lg hover:bg-aquamarine-200 transition-all",
  card: "max-w-md w-full p-6 rounded-lg bg-aquamarine-100 text-aquamarine-900 shadow-lg",
  input: "w-full p-2 mb-4 bg-aquamarine-50 text-aquamarine-900 rounded-lg",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    dispatch(
      fetchLoginDetails({
        username: userName,
        password: password,
      })
    );
  };

  const loginResponse = useSelector((state) => state.loginReducer.loginResponse);

  useEffect(() => {
    if (loginResponse && Object.keys(loginResponse).length !== 0) {
      console.log(loginResponse);
      navigate("/landlordDashboard");
    }
  }, [loginResponse]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-aquamarine-50">
      <div className={sharedClasses.card}>
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <input
          type="text"
          placeholder="User ID"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          className={sharedClasses.input}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className={sharedClasses.input}
        />
        <button
          className={sharedClasses.primaryBtn + " w-full mb-4"} // Make the button full width for alignment
          onClick={loginHandler}
        >
          Sign In
        </button>
        <div className="flex justify-center">
          <a href="#" className="text-aquamarine-700 hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
