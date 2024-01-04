import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify';

const MaintainCategories = () => {
  const [categories, setCategories] = useState([]);
  const categoryRef = useRef();

  useEffect(() => {
    fetch(process.env.REACT_APP_CATEGORIES_DB_URL)
      .then(res => res.json())
      .then(json => setCategories(json || []));
  }, []);

  const addCategory = () => {
    if (categoryRef.current.value.toLowerCase() !== categoryRef.current.value) {
      toast.error("The category name must only contain lowercase letters.");
      return;
    }

    if (categoryRef.current.value.includes(" ")) {
      toast.error("The category name must not contain spaces. Please use hyphens (-) instead.");
      return;
    }

    categories.push({"name": categoryRef.current.value});
    fetch(process.env.REACT_APP_CATEGORIES_DB_URL, {"method": "PUT", "body": JSON.stringify(categories)})
      .then(() => {
        setCategories(categories.slice());
        toast.success("Category added: " + categoryRef.current.value);
        categoryRef.current.value = "";
      })
  }

  const deleteCategory = (index) => {
    categories.splice(index, 1);
    fetch(process.env.REACT_APP_CATEGORIES_DB_URL, {"method": "PUT", "body": JSON.stringify(categories)})
      .then(() => {
        setCategories(categories.slice())
        toast.success("Category deleted");
      });
  }

  return (
    <div>
      <label>Name</label> <br />
      <input ref={categoryRef} type="text" /> <br />
      <button onClick={addCategory}>Add</button> <br />
      {categories.map((category, index) => 
        <div key={category.name}>
          {category.name}
          <button onClick={() => deleteCategory(index)}>x</button>
        </div>)}
    </div>
  )
}

export default MaintainCategories