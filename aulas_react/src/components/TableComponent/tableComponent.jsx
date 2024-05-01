import "./tableComponent.css";

function TableComponent({
  data,
  formatPrice,
  formatStock,
  deleteProduct,
  editProduct,
}) {
  return (
    <>
      {" "}
      <h1>Tabela de Produtos</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th style={{ paddingRight: "50px" }}>ID</th>
              <th style={{ paddingRight: "100px" }}>Nome</th>
              <th style={{ paddingRight: "100px" }}>Preço</th>
              <th style={{ paddingRight: "100px" }}>Estoque (kg)</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{formatPrice(item.price)}</td>
                <td>{formatStock(item.stock)}</td>
                <td>
                  <button
                    style={{ marginLeft: "25px", marginRight: "50px" }}
                    onClick={() => editProduct(item.id)}
                  >
                    Editar
                  </button>
                  <button
                    style={{ marginRight: "25px" }}
                    onClick={() => deleteProduct(item.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableComponent;
