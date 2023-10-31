import { useEmpleados } from "../context/EmpleadosProvider";
import { useNavigate } from "react-router-dom";
// import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Nombre", "Correo", "Teléfono", "Cédula", "Especialidad", "Estado", "Accion"];
 
 
export default function EmpleadoTable({empleados}) {
  const navigate = useNavigate()
  return (
    <div>
      <table className="">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className=""
              >
                  {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {empleados.map(({ idEmp, nombre, email, telefono, cedula, estado }, index) => {
            const isLast = index === empleados.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={idEmp}>
                <td className={classes}>
                    {nombre}
                  
                </td>
                <td className={classes}>
                    {email}
                  
                </td>
                <td className={classes}>
                    {telefono}
                  
                </td>
                <td className={classes}>
                    {cedula}
                  
                </td>   
                <td className={classes}>
                    {"Especialidad"}
                  
                </td>                             
                <td className={classes}>
                    {estado}
                  
                </td>
                <td className={classes}>

                <button className="" onClick={ ()=> navigate(`/editarEmpleado/${idEmp}`)}>
                    Editar
                </button> 
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}