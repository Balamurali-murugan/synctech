import React from "react";
import { useNavigate } from "react-router-dom";

const sharedClasses = {
  primaryBtn: "bg-aquamarine-500 text-white px-4 py-2 rounded-lg hover:bg-aquamarine-400 transition-all",
  secondaryBtn: "bg-aquamarine-300 text-aquamarine-900 px-4 py-2 rounded-lg hover:bg-aquamarine-200 transition-all",
};

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const Section = ({ title, content }) => {
    return (
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg">{content}</p>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-aquamarine-50 text-aquamarine-900">
      <section className="flex flex-col items-center justify-center flex-1">
        <Section
          title="What We Are?"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Section
          title="Why We Are?"
          content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Section
          title="How We Work?"
          content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        
        {/* Buttons section, placed after the "How We Work" section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <button onClick={handleLogin} className={sharedClasses.primaryBtn}>
            Login
          </button>
          <button onClick={handleSignup} className={sharedClasses.secondaryBtn}>
            Signup
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
