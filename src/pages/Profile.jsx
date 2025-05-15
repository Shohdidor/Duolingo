import React from "react";
import { FaBolt, FaMedal, FaTrophy, FaStar } from "react-icons/fa";




function Profile() {
  
  const stats = [
    { icon: <FaBolt className="text-yellow-500" />, value: 0, label: "Shock Mode" },
    { icon: <FaMedal className="text-blue-500" />, value: 0, label: "Current Liga" },
    { icon: <FaTrophy className="text-orange-500" />, value: 2, label: "Top 3" },
    { icon: <FaStar className="text-purple-600" />, value: 12134, label: "Experience Points" },
  ];

  const user =
    JSON.parse(localStorage.getItem("account")) ||
    JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return (
      <div className="text-center mt-20 text-3xl text-red-600 font-semibold animate-pulse">
        🚫 No user is currently logged in or registered.
      </div>
    );
  }

  return (
    <>
    <div className="flex items-center">
      
    <div className="w-[42%] font-sans">
      <div className="flex flex-col gap-6 p-10 rounded-3xl shadow-2xl bg-white w-full max-w-md animate-fade-in-up">
        <img
          src={user.avatar || "https://i.pravatar.cc/150?img=12"}
          alt="avatar"
          className="w-full h-66 object-cover border-4 border-[#4bbc4b] shadow-lg transition-transform hover:scale-105 duration-300"
        />
        <div className="text-left mr-auto space-y-3">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-wide animate-slide-in">
            {user.name}
          </h1>
          <p className="text-xl text-gray-600 font-light">{user.email}</p>
          <p className="text-lg text-green-500 font-medium">{user.phone}</p>
          <p className="text-lg text-red-500 font-medium">{user.address}</p>
          <p className="text-xl text-blue-700 font-bold">
            ⭐ Points: {user.points}
          </p>
        </div>
      </div>
    </div>
    

    
     <div className="w-full max-w-md bg-green-300 p-6 rounded-2xl shadow-2xl space-y-5">
     <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-4">
      Statistics
     </h1>

     {stats.map((item, index) => (
       <div
         key={index}
         className="flex items-center gap-5 p-4 rounded-xl hover:bg-blue-200 ease-in-out hover:scale-[1.01] bg-gradient-to-br from-white-900 to-green-100
          transition-transform duration-300 shadow-sm"
       >
         <div className="text-2xl">{item.icon}</div>
         <p className="text-xl font-bold text-gray-700 w-[60px]">{item.value}</p>
         <h1 className="text-xl font-semibold text-gray-900">{item.label}</h1>
       </div>
     ))}
   </div>

   
   </div>



   </>
  );
}

export default Profile;
