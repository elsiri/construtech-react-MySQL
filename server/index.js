import express from "express";
import cors from "cors";
import {dirname, join} from "path";
import { fileURLToPath } from "url";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js"
import obrasRoutes from "./routes/obras.routes.js"
import materialesRoutes from "./routes/materiales.routes.js"
import clientesRoutes from "./routes/clientes.routes.js";
import empleadosRoutes from "./routes/empleados.routes.js";
import exphbs from "express-handlebars";
const app = express()
const _dirname = dirname(fileURLToPath(import.meta.url))
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.use(indexRoutes)
app.use(obrasRoutes)
app.use(materialesRoutes)
app.use(clientesRoutes)
app.use(empleadosRoutes)
app.use(express.static(join(_dirname,"../client/dist")))
app.listen(PORT)
console.log("server listeing in port: "+PORT)


app.engine('.hbs', exphbs.engine({ 
    extname: '.hbs', 
    defaultLayout: "main", 
    helpers:{ 
        calculo: function (value) {
                return value + 7;
        },
        switchStatus: function (value){
            if (value ===1) {
                return "checked";
            }else{
                return "";
            }
        }


    }
}));
app.set('view engine', 'hbs');

app.use('*/Bootstrap-4-Multi-Select-BsMultiSelect',express.static('public/Bootstrap-4-Multi-Select-BsMultiSelect'));
app.use('*/css',express.static('public/css'));
app.use('*/js',express.static('public/js'));
app.use('*/images',express.static('public/images'));

app.get('/testhtml', (req, res) => {
    res.render('home');
});