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

function App() {
  let component;
  let condition = false;

  if (condition) {
    component = <ConditionalComponent1 />;
  } else {
    component = <ConditionalComponent2 />;
  }
  const products = [
    { id: 1, name: "Laranja" },
    { id: 2, name: "Maçã" },
    { id: 3, name: "Banana" },
    { id: 4, name: "Melão" },
    { id: 5, name: "Melancia" },
  ];

  const listPost = [
    { id: 1, title: "Post 1", description: "Descrição do Post 1" },
    { id: 2, title: "Post 2", description: "Descrição do Post 2" },
    { id: 3, title: "Post 3", description: "Descrição do Post 3" },
  ];

  const listItems = products.map((product) => (
    <li key={product.id}>{product.name}</li>
  ));

  return (
    <>
      {/* {component} */}
      <div>
        {condition ? <ConditionalComponent1 /> : <ConditionalComponent2 />}
      </div>

      <ol>{listItems}</ol>

      <ProductComponent name="vela de maçonaria" category="diversos" />

      {listPost.map((post) => (
        <PostComponent
          key={post.id}
          title={post.title}
          description={post.description}
        />
      ))}

      <div>
        <GenericComponent>
          <p>Eu sou o primeiro conteúdo fornecido pelo componente pai</p>
          <hr />
        </GenericComponent>
        <GenericComponent>
          <p>Eu sou o segundo conteúdo fornecido pelo componente pai!</p>
          <ul>
            <li>Item 01</li>
            <li>Item 02</li>
          </ul>
          <hr />
        </GenericComponent>
      </div>
      <div>
        <MyButtonComponent />
      </div>

      <div>
        <UseStateComponent1 />
      </div>
    </>
  );
}

export default App;
