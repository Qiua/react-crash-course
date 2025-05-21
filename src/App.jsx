import './App.css'
import Post from './components/Post'

function App() {

  return (
    <main>
      <Post title="Title 1" author="Andrey" body="React makes building user interfaces a breeze! I'm learning how components work." />
      <Post title="Title 2" author="Sarah" body="Just deployed my first React application. Hooks are amazing!" />
      <Post title="Title 3" author="Mike" body="Props and state management are crucial concepts in React." />
      <Post title="Title 4" author="Emily" body="Virtual DOM is what makes React so efficient and fast." />
    </main>
  )
}

export default App