import { useState } from "react";
import { toast } from "react-toastify";

export default function FormAddAnuncio({ setOpen }) {
  const [dataAnuncio, setDataAnuncio] = useState({
    titulo: "",
    preco: "",
    descricaoCurta: "",
    descricaoCompleta: "",
    imagem: "",
  });

  function handleChangeInputs(event) {
    const { name, value } = event.target;
    setDataAnuncio({ ...dataAnuncio, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `https://dc-classificados.up.railway.app/api/anuncios/addNewAnuncio?userId=${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ...dataAnuncio,
            preco: Number(dataAnuncio.preco),
          }),
          // para converter o objeto preco em number usando Number()
        }
      );

      const data = await response.json();
      if (response.ok) {
        toast.success("Anúncio criado com sucesso!");
        // limpar os inputs
        setDataAnuncio({
          titulo: "",
          preco: "",
          descricaoCurta: "",
          descricaoCompleta: "",
          imagem: "",
        });

        // fechar o drawer
        setOpen(false);

        // requisição para trazer os dados do anúncio atualizados - falta implementar
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 mt-3 lg:pb-12">
      <div>
        <label className="font-medium">Título do anúncio</label>
        <input
          type="text"
          // required
          name="titulo"
          value={dataAnuncio.titulo}
          onChange={handleChangeInputs}
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Preço</label>
        <input
          type="number"
          // required
          name="preco"
          value={dataAnuncio.preco}
          onChange={handleChangeInputs}
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Descrição curta</label>
        <input
          type="text"
          // required
          name="descricaoCurta"
          value={dataAnuncio.descricaoCurta}
          onChange={handleChangeInputs}
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Descrição completa</label>
        <textarea
          // required
          name="descricaoCompleta"
          value={dataAnuncio.descricaoCompleta}
          onChange={handleChangeInputs}
          className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
        ></textarea>
      </div>
      <div>
        <label className="font-medium">Link da imagem</label>
        <input
          type="text"
          // required
          name="imagem"
          value={dataAnuncio.imagem}
          onChange={handleChangeInputs}
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white font-medium  bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150 cursor-pointer"
      >
        Adicionar Anúncio
      </button>
    </form>
  );
}
