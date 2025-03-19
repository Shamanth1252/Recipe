import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Type.css";

export default function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((res) => setRecipes(res.data.recipes))
      .catch((err) => console.log("Error fetching recipes:", err));
  }, []);

  // Filter recipes based on search input
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="main3">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search recipes..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Recipe Cards */}
      {filteredRecipes.map((item) => (
        <div key={item.id} className="card2" onClick={() => setSelectedRecipe(item)}>
          <img id="res" src={item.image} alt={item.name} />
          <p><b>Name:</b> {item.name}</p>
        </div>
      ))}

      {/* Popup for Selected Recipe */}
      {selectedRecipe && (
        <div className="popup">
          <div className="popup-content">
            {/* Close Button */}
            <button className="close-btn" onClick={() => setSelectedRecipe(null)}>❌</button>
            
            <img id="res" src={selectedRecipe.image} alt={selectedRecipe.name} />
            <p><b>Name:</b> {selectedRecipe.name}</p>
            <p><b>Ingredients:</b> {selectedRecipe.ingredients.join(", ")}</p>
            <p><b>Instructions:</b> {selectedRecipe.instructions}</p>
          </div>
        </div>
      )}
    </div>
  );
}
