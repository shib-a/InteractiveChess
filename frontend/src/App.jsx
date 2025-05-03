import { useState } from 'react'
import {WelcomePage} from './WelcomePage'
import './App.css'
import {Profile} from "./Profile.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
          <WelcomePage/>
          {/*<Profile/>*/}
      </div>
  )
}

export {App};
