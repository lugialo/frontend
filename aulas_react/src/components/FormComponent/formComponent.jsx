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
  setEdit,
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
        <h2>{edit ? "Editar Produto" : "Adicionar Produto"}</h2>
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
          <div className="submitInputs">
            <input type="submit" value="Salvar" />
            {edit ? (
              <button
                className="cancelButton"
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  setEdit(false);
                }}
              >
                Cancelar
              </button>
            ) : null}
          </div>
        </form>
      </div>
    </>
  );
}

export default FormComponent;
