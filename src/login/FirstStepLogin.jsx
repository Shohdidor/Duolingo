import React from 'react'
import DuolingosFace from "/src/img & video/Duolingos Face.png"
import { Link } from 'react-router-dom'
function FirstStepLogin() {
  return (
    <> 
     <Link to="/signin">
    <div className='bg-[#8CC73C] flex justify-center items-center h-screen'>
    <img src={DuolingosFace} alt="Duolingo" />
    </div>
    </Link>
    </>
  )
}

export default FirstStepLogin