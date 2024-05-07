import { useState, useEffect } from "react";
import "./App.css";
import TableComponent from "./components/TableComponent/tableComponent";
import FormComponent from "./components/FormComponent/formComponent";

function App() {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState(1);
  const [editId, setEditId] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [edit, setEdit] = useState(false);

  const url = "http://localhost:3000/products";

  useEffect(() => {
    const getProductsList = async () => {
      const res = await fetch(url);

      const data = await res.json();
      setProducts(data);
    };

    getProductsList();
  }, []);

  const clearForm = () => {
    setName("");
    setPrice("");
    setStock("");
  };

  const saveProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const newName = form.elements["nome"].value;
    const newPrice = parseFloat(form.elements["preco"].value);
    const newStock = parseFloat(form.elements["estoque"].value);

    if (!edit) {
      setId((prevId) => prevId + 1);
      setProducts((prevProducts) => [
        ...prevProducts,
        { id, name: newName, price: newPrice, stock: newStock },
      ]);
    }

    if (edit) {
      const updatedProducts = products.map((product) =>
        product.id === editId
          ? { id: editId, name: newName, price: newPrice, stock: newStock }
          : product
      );
      setProducts(updatedProducts);
    }
    clearForm();
  };

  const editProduct = (id) => {
    const product = products.find((product) => product.id === id);
    setEditId(id);
    setName(product.name);
    setPrice(product.price);
    setStock(product.stock);
    setEdit(true);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleStock = (e) => {
    setStock(e.target.value);
  };

  const formattedPrice = (price) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const formattedStock = (stock) => {
    return stock.toFixed(2).replace(".", ",");
  };

  return (
    <>
      <TableComponent
        data={products}
        formatPrice={formattedPrice}
        formatStock={formattedStock}
        editProduct={editProduct}
        deleteProduct={deleteProduct}
      />

      <FormComponent
        saveProduct={saveProduct}
        handleName={handleName}
        handlePrice={handlePrice}
        handleStock={handleStock}
        name={name}
        price={price}
        stock={stock}
      />
    </>
  );
}

export default App;
