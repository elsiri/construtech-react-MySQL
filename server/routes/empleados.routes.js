import { Router, json } from "express";
import {
    getEmpleados,
    getEmpleado,
    createEmpleado,
    updateEmpleado,
    deleteEmpleado,
    getEmpleadosEspecialidades
} from "../controllers/empleados.controller.js"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const router = Router()

router.get("/empleados", async (req, res) =>{
    try {
        const result = await prisma.empleado.findMany()
        res.status(200).json(result)

    } catch (error) {
        console.log(json({message: error.message}));
        return res.status(500).json({message: error.message})
    }
})

router.get("/empleado/:id", async (req, res) =>{
    try {
        const result = await prisma.empleado.findFirst({
            where: {
                idEmp:parseInt(req.params.id)
            }
        })
        console.log(result);
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: error.message})
    }
})

router.post("/empleados", async (req, res) => {
    try {
        const {nombre, direccion, estado, email, telefono, tipoDoc, cedula} = req.body
        const result = await prisma.empleado.create({
            data:{
                nombre: nombre,
                direccion:direccion,
                email:email,
                telefono:telefono,
                tipoDoc:tipoDoc,
                cedula:cedula,
                estado:parseInt(estado)
            }
        })
        console.log(result);
        res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
})

router.put("/empleado/:id", async (req, res) => {
    try {
        const {nombre, direccion, estado, email, telefono, tipoDoc, cedula} = req.body
        const result = await prisma.empleado.update({
            where:{
                idEmp:parseInt(req.params.id)
            },
            data:{
                nombre: nombre,
                direccion:direccion,
                email:email,
                telefono:telefono,
                tipoDoc:tipoDoc,
                cedula:cedula,
                estado:parseInt(estado)
            }
        })

        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: error.message})
    }
})

router.delete("/empleado/:id", async (req, res) => {
    try {
        const result = await prisma.empleado.delete({
            where:{
                idEmp:parseInt(req.params.id)
            }
        })
        res.status(200).json(result)
        console.log(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: error.message})
    }
})

router.get("/empleadosEsp", getEmpleadosEspecialidades)

export default router