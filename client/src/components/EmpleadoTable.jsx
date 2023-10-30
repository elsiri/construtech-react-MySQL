import { useEmpleados } from "../context/EmpleadosProvider";
import { useNavigate } from "react-router-dom";
import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Nombre", "Correo", "Teléfono", "Cédula", "Especialidad", "Estado", "Accion"];
 
 
export default function EmpleadoTable({empleados}) {
  const navigate = useNavigate()
  return (
    <div>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
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
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {nombre}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {email}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {telefono}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {cedula}
                  </Typography>
                </td>   
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {"Especialidad"}
                  </Typography>
                </td>                             
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {estado}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                <button className="bg-slate-800 px-2 py-1 text-white" onClick={ ()=> navigate(`/editarEmpleado/${idEmp}`)}>
                    Editar
                </button> 
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}