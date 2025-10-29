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

  async function fetchData() {
    try {
      localStorage.getItem("userId");

      const data = await Response.json();

      if (Response.ok) {
        setAnunciosData(data);
      }
    } catch (error) {
      console.error(error);
      toast.error(data.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {}, []);

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
