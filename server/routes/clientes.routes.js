import {Router} from "express";
import {pool} from "../db.js";
import {
    getClientes,
    getCliente,
    createCliente,
    updateCliente,
    deleteCliente
} from "../controllers/clientes.controller.js"

const router = Router()

router.get("/clientes", getClientes)

router.get("/cliente/:id", getCliente)

router.post("/clientes", createCliente)

router.put("/cliente/:id", updateCliente)

router.delete("/cliente/:id", deleteCliente)

router.get('/clientNew', (req,res) => {
    res.render('addCliente');
});

router.get("/clientsList", async (req,res) =>{
    // const result = await getClientes();
    // console.dir(result)
    // res.render("clientes", {result})
    try {
        const [result] = await pool.query('SELECT *FROM cliente ORDER BY idCli DESC')
        // console.log(result)
        res.render("clientes", {result})        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }   
    
    
})

router.post('/formtest', (req,res) =>{
    console.log(req.body)
})

 export default router