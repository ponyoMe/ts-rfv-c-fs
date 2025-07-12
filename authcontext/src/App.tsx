import { BrowserRouter } from "react-router-dom"
import AppRoute from "./routes/AppRoute"
import { AuthProvider } from "./context/AuthContext"


function App() {


  return (
    <div>
      {/* <Login /> */}
      {/* <Register /> */}
      <BrowserRouter>
      <AuthProvider>
       <AppRoute />
      </AuthProvider>
      </BrowserRouter>
    
      
    </div>
  )
}

export default App
