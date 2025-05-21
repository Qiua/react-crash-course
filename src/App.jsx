import './App.css'
import Post from './components/Post'

function App() {

  return (
    <main>
      <Post title="React Journey Begins" author="Andrey" body="React makes building user interfaces a breeze! I'm learning how components work." />
      <Post title="My First Deployment" author="Sarah" body="Just deployed my first React application. Hooks are amazing!" />
      <Post title="Understanding React Core" author="Mike" body="Props and state management are crucial concepts in React." />
      <Post title="Performance Insights" author="Emily" body="Virtual DOM is what makes React so efficient and fast." />
    </main>
  )
}

export default App