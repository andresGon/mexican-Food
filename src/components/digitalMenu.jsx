import React, { useContext, useRef, useState } from 'react';
import { modalContext } from '../context/modalContext';
import dummyData from './dummyData.json';
import CardDish from "./card/cardDish";
import Modal from "./modal/modal";
import Header from './header/header';
import CategoryFilter from './category-filter/CategoryFilter';

const MenuDigital = () => {
  const categories = dummyData.categories;
  const { modalStatus } = useContext(modalContext);

  // Estado para la categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState("");

  // Crear referencias para cada categoría
  const categoryRefs = useRef({});
  
  // Función para manejar el desplazamiento y seleccionar la categoría con un ajuste de 100px
  const handleSelectCategory = (categoryName) => {
    setSelectedCategory(categoryName); // Establece la categoría seleccionada

    // Obtener la posición del elemento y sumar el ajuste de 100px
    const categoryElement = categoryRefs.current[categoryName];
    if (categoryElement) {
      const elementPosition = categoryElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - 120, // Ajuste de 100px hacia arriba
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fadeIn">
      <Header />

      {/* Filtro de categorías */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      
      {/* Mapeo de categorías */}
      {categories.map((categoria, index) => (
        <div
          className={`category-wrap ${index === 0 ? 'first' : ''}`}
          key={index}
          ref={(el) => (categoryRefs.current[categoria.name] = el)}
        >
          <h2 className="categories-title">{categoria.name}</h2>
          <div className="wrap-dish">
            {categoria.dishes && <CardDish dishes={categoria.dishes} />}
          </div>
        </div>
      ))}

      {modalStatus && <Modal />}
    </div>
  );
};

export default MenuDigital;
