import React from 'react';
import './category-filter.scss'
const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-filter">
      <div className="category-filter-scroll">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => onSelectCategory(category.name)}
            className={`category-button ${selectedCategory === category.name ? 'active' : ''}`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
