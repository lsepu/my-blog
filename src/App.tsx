import { useContext, useState } from 'react'
import './App.css'
import StoreProvider, { Store } from './state/StoreProvider'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import AboutMe from './pages/about_me/AboutMe'
import Blog from './pages/blog/Blog'
import BlogForm from './pages/blog_form/BlogForm'
import Knowledge from './pages/knowledge/Knowledge'
import Portfolio from './pages/portfolio/Portfolio'

function App() {
  const [count, setCount] = useState(0)

  const {state} = useContext(Store)
  console.log(state);
  

  return (
      <BrowserRouter>
        <nav className='navbar'>
          <Link to="/">About me</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/knowledge">Knowledge</Link>
          <Link to="/portfolio">Portfolio</Link>
          {state.logged&&<Link to="/blog/form">Blog form</Link>}
          {state.logged?<button>Log out</button>:<button>Log in</button>}
        </nav>
        {state.logged?
          <Routes>
            <Route path="/" element={<AboutMe />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/blog/form" element={<BlogForm />}/>
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>:
          <Routes>
            <Route path="/" element={<AboutMe />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>}      
        <footer className='footer'>This is my footer</footer>
      </BrowserRouter>
  )
}

export default App
