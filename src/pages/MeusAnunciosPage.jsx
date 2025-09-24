import HeaderLogado from "../components/HeaderLogado";
import SectionAddAnuncio from "../components/SectionAddAnuncio";
import CardsLogado from "../components/CardsLogado";
import Footer from "../components/Footer";
import Drawer from "../components/Drawer";
import Modal from "../components/Modal";
import { useState } from "react";

export default function MeusAnunciosPage() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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
