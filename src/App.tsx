import { Outlet } from "react-router-dom"
import Header from "./components/shared/Header"
import Footer from "./components/shared/Footer"

function App() {

  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-150px)]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  )
}

export default App
