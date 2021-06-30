import React, { useContext } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';


const ListadoProyectos = () => {

    //Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos } = proyectosContext;
    //Revisar si proyectos tiene contenidos
    if (proyectos.length === 0) return null;



    return ( 
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto
                    key={proyectos.id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
     );
}
 
export default ListadoProyectos;