import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaTimes, FaUserCircle } from 'react-icons/fa'; // Import icons
import { BiWater } from 'react-icons/bi'; // Real-time water level icon

const sharedClasses = {
  card: 'bg-aquamarine-100 p-4 rounded-lg text-aquamarine-900 shadow-lg',
  primaryBtn: 'bg-aquamarine-500 text-white py-2 px-4 rounded-lg hover:bg-aquamarine-400 transition-all w-full',
  closeBtn: 'text-aquamarine-700 hover:text-aquamarine-500 transition-all text-2xl', // Styles for the close icon
};

const LandlordDashboard = () => {
  const [showManageResidents, setShowManageResidents] = useState(false);

  const loginResponse = useSelector((state) => state.loginReducer.loginResponse);

  return (
    !showManageResidents ? (
      <div className="bg-aquamarine-50 text-aquamarine-900 min-h-screen font-sans">
        <div className="flex flex-col items-center py-4 px-6">
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-aquamarine-200 to-aquamarine-300 p-6 rounded-lg shadow-lg mb-4 w-full max-w-3xl text-center">
            <div className="flex justify-center items-center mb-4">
              <FaUserCircle className="text-aquamarine-500 text-6xl mr-4" />
              <div>
                <p className="text-2xl font-bold">Welcome, {loginResponse.firstName + " " + loginResponse.lastName}!</p>
                <p className="text-lg text-aquamarine-700">We are thrilled to have you here.</p>
              </div>
            </div>
            <p className="text-lg text-aquamarine-600">Manage your apartments, monitor water levels, and stay updated with recent activities.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <div className={`${sharedClasses.card} hover:bg-aquamarine-200 cursor-pointer transition-all`}>
            <p className="text-lg font-semibold">Apartment 1</p>
            <p className="text-sm text-aquamarine-700">Water level: Normal</p>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <div className={sharedClasses.card}>
            <p className="text-lg font-semibold">Real-time Water Level</p>
            <div className="flex justify-center">
              <BiWater className="text-aquamarine-500 text-4xl" />
            </div>
          </div>

          <div className={sharedClasses.card}>
            <p className="text-lg font-semibold">Scrolling Past History</p>
            <div className="overflow-y-auto h-40">
              <div className="flex justify-between items-center border-b border-aquamarine-300 py-2">
                <p>Date: 01/01/2022</p>
                <p>Refilled: 1000L</p>
                <p>Price: $50</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              className={`${sharedClasses.primaryBtn} w-48`} // Smaller and centered button
              onClick={() => setShowManageResidents(true)}
            >
              Manage Residents
            </button>
          </div>
        </div>
      </div>
    ) : (
      <div className="fixed top-0 left-0 w-full h-full bg-aquamarine-900/50 flex justify-center items-center">
        <div className={`${sharedClasses.card} relative max-w-md w-full p-6`}>
          {/* Close Button (X icon) */}
          <button
            className={`${sharedClasses.closeBtn} absolute top-4 right-4`}
            onClick={() => setShowManageResidents(false)}
          >
            <FaTimes />
          </button>

          <p className="text-lg font-semibold mb-4 text-center">Manage Residents</p>
          <div className="space-y-4"> {/* Adjust spacing */}
            <button className={sharedClasses.primaryBtn}>Create New Residents</button>
            <button className={sharedClasses.primaryBtn}>View Existing Residents</button>
            <button className={sharedClasses.primaryBtn}>Modify Resident Details</button>
            <button className={sharedClasses.primaryBtn}>Manage Pending Requests</button>
          </div>
        </div>
      </div>
    )
  );
};

export default LandlordDashboard;
