import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import dummyData from './dummyData.json';

const MenuDigital = () =>{
    const categories = dummyData.categories;
    return(
        <>
            <p>este es el Menú digital</p>
            <p>categorias</p>
            <ul>
            {categories.map((categoria, index) => (
                    <li key={index}>
                        <h2>{categoria.name}</h2>
                        <ul>
                            {categoria.dishes && categoria.dishes.map((plato,index2)=>(
                                <li key={index2}>
                                    <h3>{plato.name}</h3>
                                    <img src={plato.image} />
                                    <p>{plato.description}</p>
                                    <span>{plato.price}</span>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            <Link to='/'> Regresar </Link>
        </>
        
    )
}
export default MenuDigital;