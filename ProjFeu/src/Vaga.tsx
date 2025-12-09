// COMPONENTE PARA LISTAR AS VAGAS

// Importa a fx. 'CardList'
import CardList from "./CardList";

// Declara a fx. 'Vaga' que recebe como argumentos os detalhes do vag e retorna esses detalhes dentro do container 'CardList'
export default function Vaga({ titulo, descricao, requisitos, tipo }) {
  return (
    <CardList> {/* o 'CardList' é o prop que usa os argumentos da fx 'Vaga' como children */}
      <h3>{titulo}</h3>
      <p><strong><i className="fas fa-info-circle text-dark me-2"></i>Descrição da vaga:</strong> {descricao}</p>
      <p><strong><i className="fas fa-check-circle text-dark me-2"></i>Requisitos:</strong> {requisitos}</p>
      <p><strong><i className="fas fa-briefcase text-dark me-2"></i>Modalidade:</strong> {tipo}</p>
    </CardList>
  );
}