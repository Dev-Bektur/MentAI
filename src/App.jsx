import myRouter from './router'
import { RouterProvider } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div>
      <RouterProvider router={myRouter}/>
    </div>
  )
}

export default App
