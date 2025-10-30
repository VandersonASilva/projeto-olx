import HeaderLogado from "../components/HeaderLogado";
import SectionAddAnuncio from "../components/SectionAddAnuncio";
import CardsLogado from "../components/CardsLogado";
import Footer from "../components/Footer";
import Drawer from "../components/Drawer";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";

export default function MeusAnunciosPage() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [anunciosData, setAnunciosData] = useEffect([]);
  const [Loading, setLoading] = useState(false);
  const [anuncioToDelete, setAnuncioToDelete] = useState("");

  async function fetchData() {
    setLoading(true);

    const response = await fetch("");
    try {
      const response = await fetch(
        `https://dc-classificados.up.railway.app/api/anuncios/addNewAnuncio?userId=${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <HeaderLogado />
      <SectionAddAnuncio setOpenDrawer={setOpenDrawer} />
      <CardsLogado setOpenModal={setOpenModal} />
      <Footer />

      <Drawer open={openDrawer} setOpen={setOpenDrawer} />
      <Modal open={openModal} setOpen={setOpenModal} />
    </div>
  );
}
