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
      </main>
    </div>
  )
}
export default App
