//import { useEmpleados } from "../context/EmpleadosProvider";
import { useNavigate } from "react-router-dom";
// import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Nombre", "Correo", "Teléfono", "Cédula", "Especialidad", "Estado", "Accion"];
 
 
export default function EmpleadoTable({empleados}) {
  const navigate = useNavigate()
  return (
    <div>
      <table id="table" className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Telófono</th>
            <th scope="col">Cédula</th>
            <th scope="col">Especialidad</th>
            <th scope="col">Estado</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map(({ idEmp, nombre, email, telefono, cedula, estado }, index) => {
            return (
              <tr key={idEmp}>
                <td>{idEmp}</td>
                <td>{nombre}</td>
                <td>{email}</td>
                <td>{telefono}</td>
                <td>{cedula}</td>
                <td>{estado}</td>
                <td>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                </td>
                <td>
                  <a
                    className="btn bg-secondary text-white"
                    href="editempleado.html"
                  >
                    {" "}
                    Editar <span data-feather="edit-3" />{" "}
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}