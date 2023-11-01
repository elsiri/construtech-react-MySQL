import { useEffect, useState } from "react";
import  Select  from "react-select";
import { Form, Formik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { useEmpleados } from "../context/EmpleadosProvider";

export default function EmpleadosForm() {
//   const [agreed, setAgreed] = useState(false)
    const {createEmpleado, getEmpleado, updateEmpleado} = useEmpleados()
    const params = useParams()
    const navigate = useNavigate()
    const [empleado, setEmpleado] = useState({
        nombre:"",
        direccion:"",
        estado:"",
        email:"",
        telefono:"",
        tipoDoc:"",
        cedula:""
    })
    
    const inputFechafinDisabled = {
        display: "none"
    }
    const inputFechafinEnabled ={
        color:"red"
    }
    useEffect(() =>{
        const loadEmpleados = async () => {
            if (params.id) {
                const empleado = await getEmpleado(params.id)
                setEmpleado({
                    nombre:empleado.nombre,
                    direccion:empleado.direccion,
                    estado:empleado.estado,
                    email:empleado.email,
                    telefono:empleado.telefono,
                    tipoDoc:empleado.tipoDoc,
                    cedula:empleado.cedula
                })                
            }
        }
        loadEmpleados()
    })

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Formik initialValues={empleado}
          enableReinitialize={true}
          onSubmit={ async (values) => {
            if (params.id) {
              await updateEmpleado(params.id, values)
              navigate("/empleados")
            } else {
              await createEmpleado(values)
              navigate("/empleados")
            }
              setEmpleado({
                  nombre:"",
                  direccion:"",
                  estado:"",
                  email:"",
                  telefono:"",
                  tipoDoc:"",
                  cedula:""
              })
          }}
          >
            {({handleChange, handleSubmit, values, isSubmitting}) =>(
              <Form onSubmit={handleSubmit}>
                <div className="card text-center w-100">
                  <div className="card-header bg-primary text-white">
                    <h2>{params.id ? "Editar": "Agregar"} empleado</h2>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-6 mt-3">
                        <label htmlFor="nombre" className="form-label">Nombre <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="nombre" onChange={handleChange} value={values.nombre} />
                      </div>
                      <div className="col-6 mt-3">
                        <label htmlFor="tipoDoc" className="form-label">Tipo documento<span className="text-danger">*</span></label>
                        <select id="tipoDoc" className="form-select" onChange={handleChange} value={values.tipoDoc}>
                          <option value="">Seleccione tipo documento</option>
                          <option value="CC">Cedula de ciudadania</option>
                          <option value="CE">Cedula de extranjeria</option>
                          <option value="PS">Pasaporte</option>
                        </select>
                      </div>
                      <div className="col-6 mt-3">
                        <label htmlFor="cedula" className="form-label">Numero documento <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="cedula"  onChange={handleChange} value={values.cedula}/>
                      </div>
                      <div className="col-6 mt-3">
                        <label htmlFor="email" className="form-label">Correo electronico <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="email" onChange={handleChange} value={values.email} />
                      </div>
                      <div className="col-6 mt-3">
                        <label htmlFor="telefono" className="form-label">Telefono <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="telefono" onChange={handleChange} value={values.telefono} />
                      </div>
                      <div className="col-6 mt-3">
                        <label htmlFor="direccion" className="form-label">Direccion <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="direccion" onChange={handleChange} value={values.direccion} />
                      </div>
                      <div className="col-6 mt-3">
                        <label htmlFor="especialidad" className="form-label">Especialidad <span className="text-danger">*</span></label>
                        <select id="especialidad" className="form-select"  >
                          <option value="1">Plomeria</option>
                          <option value="2">Drywall</option>
                          <option value="3">Pintura</option>
                        </select>
                      </div>
                      <div className="col-6 mt-3">
                        <label htmlFor="estado" className="form-label">Estado <span className="text-danger">*</span></label>
                        <select id="estado" className="form-select" onChange={handleChange} value={values.estado} >
                          <option value="">Seleccione estado</option>
                          <option value="1">Activo</option>
                          <option value="0">Inactivo</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-center">
                    <div className="row">
                      <div className="col-md-6">
                        <button disabled={isSubmitting} className="btn btn-primary w-50">
                          <h4>{params.id ? "Editar": "Agregar"}</h4>
                        </button>
                      </div>
                      <div className="col-md-6">
                      <a type="button" href="" className="btn btn-danger w-50" onClick={()=> navigate(`/empleados`)}>
                        <h4>Cancelar</h4>
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            )} 
          </Formik>
        </div>
      </div>
    </div>
    // <div className="isolate bg-white px-6 py-12 ">

    //     <Formik initialValues={empleado}
    //         enableReinitialize={true}
    //         onSubmit={ async (values) =>{
    //             if (params.id) {
    //                await updateEmpleado(params.id, values)
    //                navigate("/empleados")
    //             }else{

    //                await createEmpleado(values)
    //                navigate("/empleados")
    //             }
    //             setEmpleado({
    //               nombre:"",
    //               direccion:"",
    //               estado:"",
    //               email:"",
    //               telefono:"",
    //               tipoDoc:"",
    //               cedula:""
    //             })
    //         }}>
        //     {({handleChange, handleSubmit, values, isSubmitting}) => (
        // <Form onSubmit={handleSubmit} className="mx-auto mt-2 max-w-xl">
        // <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1">
        //   <div className="col-span-1">
        //     <label htmlFor="nombre" className="block text-sm font-semibold leading-6 text-gray-900">
        //       Nombres
        //     </label>
        //     <div className="mt-2.5">
        //     <input
        //         type="text"
        //         name="nombre"
        //         id="nombre"
        //         autoComplete="family-name"
        //         className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
        //         onChange={handleChange} value={values.nombre}
        //       />
        //     </div>
        //   </div>
        //   <div className="col-span-1">
        //     <label htmlFor="direccion" className="block text-sm font-semibold leading-6 text-gray-900">
        //       Direccion
        //     </label>
        //     <div className="mt-2.5">
        //       <input
        //         type="text"
        //         name="direccion"
        //         id="direccion"
        //         autoComplete="family-name"
        //         className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
        //         onChange={handleChange} value={values.direccion}
        //       />
        //     </div>
        //   </div>
        //   <div className="col-span-1">
        //     <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
        //       Email
        //     </label>
        //     <div className="mt-2.5">
        //       <input
        //         type="text"
        //         name="email"
        //         id="email"
        //         autoComplete="family-name"
        //         className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
        //         onChange={handleChange} value={values.email}
        //       />
        //     </div>
        //   </div>          
        //   <div className="col-span-1">
        //     <label htmlFor="telefono" className="block text-sm font-semibold leading-6 text-gray-900">
        //       Telefono
        //     </label>
        //     <div className="mt-2.5">
        //       <input
        //         type="text"
        //         name="telefono"
        //         id="telefono"
        //         autoComplete="organization"
        //         className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        //         onChange={handleChange} value={values.telefono}
        //       />
        //     </div>
        //   </div>
        //   <div className="col-span-1">
        //     <label htmlFor="cedula" className="block text-sm font-semibold leading-6 text-gray-900">
        //       Cedula
        //     </label>
        //     <div className="mt-2.5">
        //       <input
        //         type="text"
        //         name="cedula"
        //         id="cedula"
        //         autoComplete="organization"
        //         className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        //         onChange={handleChange} value={values.cedula}
        //       />
        //     </div>
        //   </div>
        //   <div className="col-span-1">
        //       <label htmlFor="tipoDoc" className="block text-sm font-medium leading-6 text-gray-900">
        //         Tipo documento
        //       </label>
        //       <div className="mt-2">
        //         <select
        //           id="tipoDoc"
        //           name="tipoDoc"
        //           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        //           onChange={handleChange} value={values.tipoDoc}
        //         >
        //           <option value="">Seleccione tipo cedula</option>
        //           <option value="CC">Cedula ciudadania</option>
        //           <option value="CE">Cedula extranjeria</option>
        //         </select>
        //       </div>
        //     </div>            
        //     <div className="col-span-1">
        //       <label htmlFor="estado" className="block text-sm font-medium leading-6 text-gray-900">
        //         Estado
        //       </label>
        //       <div className="mt-2">
        //         <select
        //           id="estado"
        //           name="estado"
        //           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        //           onChange={handleChange} value={values.estado}
        //         >
        //           <option value="">Seleccione estado</option>
        //           <option value={1}>Activo</option>
        //           <option value={0}>Inactivo</option>
        //         </select>
        //       </div>
        //     </div>            
        // </div>
        // <div className="mt-10">
        //   <button disabled={isSubmitting}
        //     type="submit"
        //     className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        //   >
        //     {params.id ? "Actualizar": "Guardar"}
        //   </button>
        // </div>
        // </Form>
        // )}
    // </Formik>
    // </div>
  )
}
