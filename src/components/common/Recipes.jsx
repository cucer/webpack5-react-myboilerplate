import { useState } from 'react';

const chocolate = {
  calorie: 200,
  year: 2022,
  type: 'Chocolate',
};

const darkchocolate = {
  ...chocolate,
  color: 'Black',
  brand: 'Godiva',
};

const Recipes = () => {
  const [recipe, setRecipe] = useState({});
  return (
    <div>
      <h3>Current recipe:</h3>
      <button onClick={() => setRecipe(chocolate)}>Chocolate</button>
      <button onClick={() => setRecipe(darkchocolate)}>Dark Chocolate</button>
      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material} : {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
