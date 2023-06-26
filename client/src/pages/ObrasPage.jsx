import { useEffect } from "react";
import ObraCard from "../components/ObraCard";
import { useObras } from "../context/ObrasProvider";
function ObrasPage() {

    const {obras, Obras} = useObras()

    useEffect(() =>{
    Obras()  
    }, [])

    function renderMain() {
        if (obras.length === 0) {
            return <h1>Sin Obras</h1>
            
        }
        return obras.map((obra) =><ObraCard obra={obra} key={obra.idObra} />)
    }

    return(
        <div>
            <h1 className="text5-xl text-white font-bold text-center">Obras</h1>
            <div className="grid grid-cols-3 gap-2">
                {renderMain()}
            </div>

        </div>
    )
}

export default ObrasPage