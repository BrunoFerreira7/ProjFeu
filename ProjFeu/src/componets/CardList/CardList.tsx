// COMPONENTE REUTILIZÁVEL PARA MOSTRAR LISTAS EM CARDS
// Declara a fx que irá renderizar o conteúdo no site
import type { ReactNode } from "react";
type CardListProps = {
  children: ReactNode;
};
export default function CardList({ children }: CardListProps) {
    return (
    // cards container  
    <div className="tab-content"> {/* css class */}
      {/* job item container */}
      <div className="job-item p-4 mb-4">
        <div className="row g-4">
          <div className="col-sm-12 col-md-8 d-flex align-items-center">
            <div className="text-start ps-4">
              {children} {/* o 'children' é qualquer objeto (como 'Vaga') */} 
            </div>
          </div>
          {/* CTA btns container */}
          <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
            <div className="d-flex mb-3">
              <a className="btn color-white btn-square me-3" href=""><i className="far fa-heart text-dark"></i></a>
              <a className="btn btn-dark" href="">Aplicar para a vaga</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}