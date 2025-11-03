import { Home } from "./components/home";
import { Sidebar } from "./components/sidebar"



function App() {
 

  return (
    <>
    <div className='h-screen flex'>
      <Sidebar/>
      <Home/>
      </div>
    </>
  )
}

export default App;
