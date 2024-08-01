import React, { useContext } from 'react';
import { modalContext } from '../context/modalContext';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import dummyData from './dummyData.json';
import CardDish from "./card/cardDish";
import Modal from "./modal/modal";

const MenuDigital = () =>{
    const categories = dummyData.categories;

    const { modalStatus } = useContext(modalContext)

    return(
        <>
            <Link to='/'> Regresar </Link>
            <p>este es el Menú digital</p>
            <p>categorias</p>
            
            {categories.map((categoria, index) => (
                    <div key={index}  >
                        <h2 className="categories-title">{categoria.name}</h2>
                        <div className="wrap-dish">
                            {categoria.dishes && <CardDish dishes={categoria.dishes} />}
                        </div>
                    </div>
            ))}
        
        {modalStatus && (
            <Modal></Modal>
        )}
            
        </>
    )
}
export default MenuDigital;