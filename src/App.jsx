
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'

function App() {

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element = {<Home/>}>        
        </Route>
      </Route>
    )
  )

  return (
    <>    

<RouterProvider router ={route}/>
        


        
    </>
  )
}

export default App
