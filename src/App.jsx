import './App.css'
import { AboutMe } from './component/AboutMe'
import { Form } from './component/Form'
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
      <Form />
    </div>
  )
}

export default App
