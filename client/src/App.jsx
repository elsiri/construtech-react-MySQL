import { Route, Routes } from "react-router-dom";
import ObrasPage from "./pages/ObrasPage";
import ObrasForm from "./pages/ObrasForm";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { ObraContextProvider } from "./context/ObrasProvider";
function App() {
  return (
    <div className="bg-zinc-800 h-screen">
      <Navbar />
      <div className="container mx-auto py-4 px20">
        <ObraContextProvider>
          <Routes>
            <Route path="/" element={<ObrasPage />} />
            <Route path="/new" element={<ObrasForm />} />
            <Route path="/edit/:id" element={<ObrasForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>           
        </ObraContextProvider>          
      </div>
    </div>
  )
}

export default App