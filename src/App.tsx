import { useState } from 'react'
import { Navbar, NavItem, Button } from 'ogilvy-design-system'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar
        logo={{ src: "/src/assets/taleed-logo.png", alt: 'Logo', href: '/src/assets/taleed-logo.png' }}
        colorMode="dark"
        actions={
          <Button variant="filled" className="rounded-btn" iconRight={<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}>Get Connected</Button>
        }
      >
        <NavItem label="About Us" href="/"  />
        <NavItem label="Services" href="https://vite.dev/" />
        <NavItem label="Ecosystem Partnerships" href="https://chat.vite.dev/" />
        <NavItem label="Events" href="https://github.com/vitejs/vite" />
        <NavItem label="News" href="https://github.com/vitejs/vite" />
      </Navbar>


  
    </>
  )
}

export default App
