import ChildComponent from "./childComponent";

function IntroComponent() {
  const a = 5,
    b = 2,
    nome = "Gabriel";
  const aluno = {
    nome: "Pedro",
    idade: 20,
  };

  return (
    <div>
      <h2>Componente de introdução</h2>
      <h3>Template Expressions</h3>
      <p>
        {nome}, o produto entre {a} e {b} é {a * b}
      </p>
      <p>
        Aluno {aluno.nome} <br /> E-mail: {aluno.idade}
      </p>

      <ChildComponent />
    </div>
  );
}
export default IntroComponent;
