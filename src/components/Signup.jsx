const sharedClasses = {
  primaryBtn: "bg-aquamarine-500 text-white px-4 py-2 rounded-lg hover:bg-aquamarine-400 transition-all",
  secondaryBtn: "bg-aquamarine-300 text-aquamarine-900 px-4 py-2 rounded-lg hover:bg-aquamarine-200 transition-all",
  card: "max-w-md w-full p-6 rounded-lg bg-aquamarine-100 text-aquamarine-900 shadow-lg",
  input: "w-full p-2 mb-4 bg-aquamarine-50 text-aquamarine-900 rounded-lg",
};

const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-aquamarine-50">
      <div className={sharedClasses.card}>
        <h2 className="text-2xl font-bold mb-4 text-aquamarine-800">Sign Up</h2>
        <label className="block mb-2 text-aquamarine-700">Select Your Role:</label>
        <div className="flex items-center mb-4 text-aquamarine-700">
          <input type="radio" id="landlord" name="role" value="landlord" className="mr-2" />
          <label htmlFor="landlord" className="mr-4">Landlord</label>
          <input type="radio" id="tenant" name="role" value="tenant" className="mr-2" />
          <label htmlFor="tenant">Tenant</label>
        </div>
        <input type="text" placeholder="Full Name" className={sharedClasses.input} />
        <input type="email" placeholder="Email" className={sharedClasses.input} />
        <input type="password" placeholder="Password" className={sharedClasses.input} />
        <button className={sharedClasses.primaryBtn + " mb-4"}>Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;
