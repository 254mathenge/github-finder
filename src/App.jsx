import { BrowserRouter , Routes ,Route} from "react-router-dom"
// import Home from "./pages/Home"
import Header from "./components/Header/Header"
import "./assets/global.css";
import Home from "./pages/Home";
function App() {
 
  return (
    <>
  <div className="app">
      <BrowserRouter>
      <Header/>
          <Routes>
          <Route path="" element={<Home />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
