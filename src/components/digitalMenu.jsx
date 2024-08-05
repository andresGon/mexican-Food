import React, { useContext } from 'react';
import { modalContext } from '../context/modalContext';
import dummyData from './dummyData.json';
import CardDish from "./card/cardDish";
import Modal from "./modal/modal";
import Header from './header/header';

const MenuDigital = () =>{
    const categories = dummyData.categories;

    const { modalStatus } = useContext(modalContext)

    return(
        <div className='fadeIn'>
            <Header></Header>        
            {categories.map((categoria, index) => (
                    <div className='categories-wrap' key={index}  >
                        <h2 className="categories-title">{categoria.name}</h2>
                        <div className="wrap-dish">
                            {categoria.dishes && <CardDish dishes={categoria.dishes} />}
                        </div>
                    </div>
            ))}
        
        {modalStatus && (
            <Modal></Modal>
        )}
            
        </div>
    )
}
export default MenuDigital;