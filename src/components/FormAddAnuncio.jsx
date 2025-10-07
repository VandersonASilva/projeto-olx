import { useState } from "react";

export default function FormAddAnuncio() {
  const [dataAnuncio, setDataAnuncio] = useState({
    titulo: "",
    preco: "",
    descricaoCurta: "",
    descricaoCompleta: "",
    linkImagem: "",
  });

  function handleChangeInputs(event) {
    const { name, value } = event.target;
    setDataAnuncio({ ...dataAnuncio, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(dataAnuncio);
    console.log("Enviando dados...");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 mt-3 lg:pb-12">
      <div>
        <label className="font-medium">Título do anúncio</label>
        <input
          type="text"
          required
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
          required
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
          required
          name="descricaoCurta"
          value={dataAnuncio.descricaoCurta}
          onChange={handleChangeInputs}
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Descrição completa</label>
        <textarea
          required
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
          required
          name="linkImagem"
          value={dataAnuncio.linkImagem}
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
