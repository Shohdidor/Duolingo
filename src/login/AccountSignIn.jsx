import axios from 'axios';
import React, { useEffect, useState } from 'react';

const api = "http://localhost:3000/users";

function AccountSignIn() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  async function checkUser() {
    try {
      const { data } = await axios.get(api);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  function findUser(e) {
    e.preventDefault(); // 🚫 Prevents page refresh

    const found = data.find((elem) => elem.name === name && elem.password === password);

    if (found) {
      localStorage.setItem("account", JSON.stringify(found));
      window.location = "/duolingo/profile";
    } else {
      alert("Wrong name or password! 🫠");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-lime-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md animate-fade-in border-2 border-lime-300">
        <h2 className="text-3xl font-extrabold text-center text-lime-700 mb-6">Sign In to Duoflow</h2>

        <form className="space-y-5" onSubmit={findUser}>
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-lime-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Who are you?"
              className="w-full px-4 py-3 rounded-xl border border-lime-300 focus:outline-none focus:ring-2 focus:ring-lime-500 transition duration-200"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-lime-700 mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your secret"
              className="w-full px-4 py-3 rounded-xl border border-lime-300 focus:outline-none focus:ring-2 focus:ring-lime-500 transition duration-200"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-lime-500 hover:bg-lime-600 text-white font-bold py-3 rounded-xl shadow-lg transition duration-300"
          >
            Sign
          </button>
        </form>
      </div>
    </div>
  );
}

export default AccountSignIn;
