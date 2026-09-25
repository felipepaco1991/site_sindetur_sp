import { MotionConfig } from "framer-motion";
import Hero from "@/components/associacao/Hero";
import Sobre from "@/components/associacao/Sobre";
import Servicos from "@/components/associacao/Servicos";
import Numeros from "@/components/associacao/Numeros";
import Associese from "@/components/associacao/Associese";
import Contato from "@/components/associacao/Contato";
import AssociationForm from "@/components/associacao/AssociationForm";
import "@/styles/associacao.css";

export default function AssocieSe() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="association-page overflow-x-hidden">
        <Hero />
        <Sobre />
        <Servicos />
        <Numeros />
        <Associese />
        <AssociationForm />
        <Contato />
      </div>
    </MotionConfig>
  );
}
