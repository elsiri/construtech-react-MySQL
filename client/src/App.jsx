import { Route, Routes } from "react-router-dom";
import ObrasPage from "./pages/ObrasPage";
import ObrasForm from "./pages/ObrasForm";
import MaterialesPage from "./pages/MaterialesPage";
import FormMaterial from "./pages/FormMaterial";
import FormTemplate from "./pages/FormTemplate";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { MaterialContextProvider } from "./context/MaterialesProvider";
import { ObraContextProvider } from "./context/ObrasProvider";
function App() {
  return (
    <div className="">
      <Header/>
      {/* <Navbar /> */}
      <div className="container mx-auto py-4 px20">
        <ObraContextProvider>
          <Routes>
            <Route path="/obras" element={<ObrasPage />} />
            <Route path="/new" element={<ObrasForm />} />
            <Route path="/edit/:id" element={<ObrasForm />} />
            <Route path="/formTemplate" element={<FormTemplate />} />      
            <Route path="/formTemplateEdit/:id" element={<FormTemplate />} />                  
            {/* <Route path="/obras/*" element={<NotFound />} />                       */}
          </Routes>           
        </ObraContextProvider> 
        <MaterialContextProvider>
          <Routes>
            <Route path="/materiales" element={<MaterialesPage />} />
            <Route path="/formMaterial" element={<FormMaterial/>} />
            <Route path="/formMaterialEdit/:id" element={<FormMaterial/>} />
            {/* <Route path="/materiales/*" element={<NotFound />} /> */}
          </Routes>
        </MaterialContextProvider>
      </div>
    </div>
  )
}

export default App