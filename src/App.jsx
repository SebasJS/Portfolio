import './App.css'
import { AboutMe } from './component/AboutMe'
import { Projects } from './component/Projects'
import { Skills } from './component/Skills'
import { Intro } from './component/intro'

function App() {

  return (
    <div className='container'>
      <Intro />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
