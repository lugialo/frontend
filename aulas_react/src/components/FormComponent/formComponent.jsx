import { useEffect, useState } from "react";
import "./formComponent.css";

function FormComponent({
  name,
  price,
  stock,
  handleName,
  handlePrice,
  handleStock,
  saveProduct,
  edit,
}) {
  useEffect(() => {}, [
    edit,
    handleName,
    handlePrice,
    handleStock,
    name,
    price,
    stock,
  ]);
  return (
    <>
      <div className="container">
        <h2>Formulário de Produtos</h2>
        <form method="post" onSubmit={saveProduct}>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            name="nome"
            value={name}
            onChange={handleName}
            required
          />
          <label htmlFor="preco">Preço:</label>
          <input
            type="number"
            name="preco"
            value={price}
            onChange={handlePrice}
            required
          />
          <label htmlFor="estoque">Estoque:</label>
          <input
            type="number"
            name="estoque"
            value={stock}
            onChange={handleStock}
            required
          />
          <input type="submit" value="Salvar" />
        </form>
      </div>
    </>
  );
}

export default FormComponent;
