import HeaderLogado from "../components/HeaderLogado";
import SectionAddAnuncio from "../components/SectionAddAnuncio";
import CardsLogado from "../components/CardsLogado";
import Footer from "../components/Footer";
import Drawer from "../components/Drawer";
import Modal from "../components/Modal";

export default function MeusAnunciosPage() {
  return (
    <div>
      <HeaderLogado />
      <SectionAddAnuncio />
      <CardsLogado />
      <Footer />

      <Drawer />
      <Modal />
    </div>
  );
}
