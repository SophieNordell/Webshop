const CategoryFilter = ({ selectedCategory, onCategoryClick }) => {
  const categories = [
    { name: "all", label: "ALLA" },
    { name: "women's clothing", label: "DAM" },
    { name: "men's clothing", label: "HERR" },
    { name: "jewelery", label: "ACCESSOARER" },
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
