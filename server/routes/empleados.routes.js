import {Router} from "express";
import {
    getEmpleados,
    getEmpleado,
    createEmpleado,
    updateEmpleado,
    deleteEmpleado
} from "../controllers/empleados.controller.js"

const router = Router()

router.get("/empleados", getEmpleados)

router.get("/empleado/:id", getEmpleado)

router.post("/empleados", createEmpleado)

router.put("/empleado/:id", updateEmpleado)

router.delete("/empleado/:id", deleteEmpleado)

 export default router