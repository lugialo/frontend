import { useState } from "react";
import "./App.css";
import IntroComponent from "./components/introComponent";
import EventComponent from "./components/eventComponent";
import ConditionalComponent1 from "./components/conditionalComponent";
import ConditionalComponent2 from "./components/conditionalComponent2";
import ProductComponent from "./components/productComponent";
import PostComponent from "./components/postComponent";
import GenericComponent from "./components/genericComponent";
import MyButtonComponent from "./components/myButtonComponent";
import UseStateComponent1 from "./components/useStateComponent1";
import TableComponent from "./components/TableComponent/tableComponent";

function App() {
  const listProducts = [
    { id: 1, name: "Maçã", price: 10, stock: 20.5 },
    { id: 2, name: "Banana", price: 8, stock: 40.7 },
    { id: 3, name: "Melancia", price: 7, stock: 100 },
    { id: 4, name: "Melão", price: 9, stock: 30 },
    { id: 5, name: "Uva", price: 11, stock: 50 },
  ];
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
        data={listProducts}
        formatPrice={formattedPrice}
        formatStock={formattedStock}
      />
    </>
  );
}

export default App;
