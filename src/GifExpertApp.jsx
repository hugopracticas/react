import React, { useState } from "react";
import {AddCategory, GifGrid} from './components'

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["pokemon"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    //console.log(newCategory)
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
        //setCategories = { setCategories }
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
