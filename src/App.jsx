import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Global from './pages/Global'
import Profile from './pages/Profile'
import FirstStepLogin from './login/FirstStepLogin'
import SignIn from './login/SignIn'
import AccountSignIn from './login/AccountSignIn'

function App() {
  const router = createBrowserRouter ( [ 
    {
      path : "/",
      element : <FirstStepLogin />
    },
    {
      path : "/signin",
      element : <SignIn />
    },
    {
      path : "/account",
      element : <AccountSignIn />
    },
    {
      path : "/duolingo" ,
      element : <Layout /> ,
      children : [
        { 
          index : true,
          element : <Home />
        },
        {
          path : "settings",
          element : <Settings />
        },
        {
          path : "global",
          element : <Global />
        },
        {
          path : "profile" , 
          element : <Profile />
        },
      ]
    },
  ])
  return ( 
    <>
    <div>
      <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
