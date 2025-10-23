import { useEffect, useState } from "react";

export default function useEffectPage() {
  const [todosAnuncios, setTodosAnuncios] = useState([]);
  const [loading, setLoading] = useState(false);
  //const [count, setCount] = useState(0);

  async function fetchAnuncios() {
    try {
      setLoading(true);

      const response = await fetch(
        "https://dc-classificados.up.railway.app/api/anuncios/getAllAnuncios"
      );

      const data = await response.json();
      setTodosAnuncios(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log("Componente renderizado");
    fetchAnuncios();
  }, []);

  console.log(todosAnuncios);

  return (
    <div>
      {loading ? (
        <div>CARREGANDO....</div>
      ) : (
        <div>
          {todosAnuncios.map((item, index) => {
            return (
              <div key={index}>
                <h1>{item.titulo}</h1>
                <img src={item.imagem} alt="" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// function handleDiminuir() {
//   setCount((prevState) => {
//     return prevState - 1;
//   });
// }

// function handleAumentar() {
//   setCount((prevState) => {
//     return prevState + 1;
//   });
// }

// return (
//   <div>
//     <button onClick={handleDiminuir}>Diminuir</button>
//     <h1>{count}</h1>
//     <button onClick={handleAumentar}>Aumentar</button>
//   </div>
// );
