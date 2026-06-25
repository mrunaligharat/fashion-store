import { useState } from "react";
import { supabase } from "../supabase";

export  function Addproduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("products")
      .insert([
        {
          name,
          price,
          image,
          link
        }
      ]);

    if (error) {
      alert("Error adding product");
      console.log(error);
    } else {
  alert("Product Added Successfully");

  window.location.reload();
}
  };

  return (
  <div>

    <button onClick={() => setShowForm(true)}>
      Add Product
    </button>

    {showForm && (

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <input
          type="text"
          placeholder="Product Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <button type="submit">
          Submit
        </button>

      </form>

    )}

  </div>
);

}
