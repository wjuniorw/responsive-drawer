import React, { useState } from 'react'
import ToolBar from './components/Toolbar'
import SideDrawer from './components/SideDrawer'
import BackDrop from './components/Backdrop'

function App() {
  const [open, toggle] = useState(false)
  return (
    <div style={{ height: '100%' }}>
      <ToolBar toggleDrawer={() => toggle(!open)} />
      <SideDrawer show={open} />
      {open && <BackDrop closeDrawer={() => toggle(false)} />}
      <main style={{ marginTop: '64px' }}>
        <h1>hi!</h1>
        <p style={{ textAlign: 'center', margin: '0 5rem', fontSize: '20px', color: '#d1d1d1'}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </main>
    </div>
  )
}
export default App
