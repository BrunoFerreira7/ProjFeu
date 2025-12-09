// Import React use state
import { useState } from 'react'

// Import componente 'Vaga'para poder criar o Array 'jobs' com suas propriedades
import Vaga from './Vaga'

// External style --- ATUALIZAR o CSS para agregar as bibliotecas animate e owlcarousel
import './css/style.css'
import './css/bootstrap.min.css'
import './lib/animate/animate.min.css'
import './lib/owlcarousel/assets/owl.carousel.min.css'

// External files
import workUs from './img/work-us.jpg';

// Fx. principal que cria o array de objetos 'jobs' e retorna suas propiedades no site usando o componente 'Vaga' que é childre de 'CardList'
export default function App() {

  // Array de objetos 'jobs'
  const jobs = [
    {titulo: "Dev Frontend Júnior", descricao: "desenvolver Newsletters para a empresa", requisitos: "1 ano de experiência", tipo: "remoto"},
    {titulo: "Dev Frontend Júnior", descricao: "desenvolver Newsletters para a empresa", requisitos: "1 ano de experiência", tipo: "remoto"},
    {titulo: "Dev Frontend Júnior", descricao: "desenvolver Newsletters para a empresa", requisitos: "1 ano de experiência", tipo: "presencial"},
    {titulo: "Dev Frontend Júnior", descricao: "desenvolver Newsletters para a empresa", requisitos: "1 ano de experiência", tipo: "remoto"},
    {titulo: "Dev Frontend Júnior", descricao: "desenvolver Newsletters para a empresa", requisitos: "1 ano de experiência", tipo: "presencial"},
    {titulo: "Dev Frontend Júnior", descricao: "desenvolver Newsletters para a empresa", requisitos: "1 ano de experiência", tipo: "híbrido"}
  ]
  

  return (
    <>
      <div className='banner-container'>
        <img src={workUs} className='banner-img' alt='Trabalhe conosco'/>
      </div>

      <div className='text-container'>  
        <h2>Trabalhe Conosco</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      </div>

      <div className='job-item'> {/* css class */}

        {/* o .map percorre o array e renderiza um <Vaga> com suas propiedades para cada item */}
        {/* vaga → o item atual do array jobs, i → o índice do item no array (0, 1, 2, …) */}
        {/* key ajuda o React a comparar a lista antiga vs. a nova e reusar/mover os elementos corretos */}
        {jobs.map((job, i) => (
          <Vaga
            key={i}
            titulo={job.titulo}
            descricao={job.descricao}
            requisitos={job.requisitos}
            tipo={job.tipo}
          />
        ))}
      </div>

      <div className='cta-item'>
        <h2>CTA - Newsletter</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      


    </>
  )
}