const CategoryFilter = ({ selectedCategory, onCategoryClick }) => {
  const categories = [
    { name: "all", label: "ALL" },
    { name: "women's clothing", label: "WOMENS" },
    { name: "men's clothing", label: "MENS" },
    { name: "jewelery", label: "ACCESSORIES" },
  ];

  return (
    <div className="category-div">
      {categories.map((category) => (
        <div
          key={category.name}
          onClick={() => onCategoryClick(category.name)}
          className={`category ${
            selectedCategory === category.name ? "active" : ""
          }`}
        >
          {category.label}
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
