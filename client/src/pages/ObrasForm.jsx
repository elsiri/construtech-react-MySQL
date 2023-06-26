import { Form, Formik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useObras } from "../context/ObrasProvider";
function ObrasForm() {

    const {createObra, getObra, updateObra} = useObras()
    const params = useParams()
    const navigate = useNavigate()
    const [obra, setObra] = useState({
        descripcion:"",
        cantidad:"",
        fecha:""
    })


    useEffect(() =>{
        const loadObras = async () => {
            if (params.id) {
                const obra = await getObra(params.id)
                setObra({
                    descripcion:obra.descripcion,
                    cantidad:obra.cantidad,
                    fecha:obra.fechaini
                })
            }
        }
        loadObras()
    }, [])

    return(
        <div className="">
            <Formik initialValues={obra}
            enableReinitialize={true}
            onSubmit={ async (values, actions) =>{
                console.log(values)
                if (params.id) {
                   await updateObra(params.id, values)
                   navigate("/")
                }else{
                   await createObra(values)
                   navigate("/")
                }
                setObra({
                    descripcion:"",
                    cantidad:"",
                    fecha:""
                })
            }}>
                {({handleChange, handleSubmit, values, isSubmitting}) => (
                <Form onSubmit={handleSubmit} className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10">
                    <h1 className="text-xl font-bold uppercase text-center m-5">{params.id ? "Actualizar obra" :"Agregar obra"}</h1>                    
                    <label className="block">Obra Descripcion</label>
                    <input className="px-2 py-1 rounded-sm w-full"  name="descripcion" id="descripcion" type="text" placeholder="Descripcion de la obra" onChange={handleChange} value={values.descripcion} />
                    <label className="block">Cantidad consumo material</label>
                    <input className="px-2 py-1 rounded-sm w-full" name="cantidad" id="cantidad" type="text" placeholder="Cantidad consumo de materiale" onChange={handleChange} value={values.cantidad} />
                    <label className="block">Fecha de inicio</label>
                    <input className="px-2 py-1 rounded-sm w-full" name="fecha" id="fecha" type="text" placeholder="Fecha de inicio de obra" onChange={handleChange} value={values.fecha} />

                    <button type="submit" disabled={isSubmitting} className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md">
                        {isSubmitting ? "Guardando...": "Guardar"}
                    </button>               
                </Form>
                )}
            </Formik>
        </div>
    )
}

export default ObrasForm