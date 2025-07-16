import { useState } from "react";
import { AddCategory, GifGrid } from "./Components";

export const GiftExpertApp = () => {
  const [categorias, setCategorias] = useState(["Dragon Ball"]);

  const onAddCategory = (newCategory) => {
    if (categorias.includes(newCategory)) return;

    setCategorias([newCategory, ...categorias]);

    // setCategorias([...categorias, "One PuchMan"]);
    // setCategories( cat => [..cat, 'Valorant']);
  };

  return (
    <>
      <h1>GiftExpertApp</h1>

      <AddCategory
        // setCategories={setCategorias}
        onNewCategory={(event) => onAddCategory(event)}
      />

      {categorias.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
