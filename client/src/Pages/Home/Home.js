import styles from './Home.module.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// Componentes
import { Card } from '../../components/Card/Card';
import { Filters } from '../../components/Filters/Filters';
import { NavBar } from '../../components/NavBar/NavBar';
import { Paginate} from '../../components/Paginate/Paginate';
import { Footer } from '../../components/Footer/Footer';


export const Home = () => {

  // Estado para actualizar el orden/filtro actual
  const [orden, setOrden] = useState('');

  // Estado para actualizar la página actual
  const [currentPage, setCurrentPage] = useState(1);

  // Estado de los pokemon que se muestran por página
  const [pokemonPerPage, setPokemonPerPage] = useState(12);

  // Me traigo los estados del reducer 
  const allPokemon = useSelector((state) => state.allPokemon);
  const pokemon = useSelector((state) => state.pokemon);

  // Delimitar el indíce de los pokemon a paginar
  const lastPokemonIndex = currentPage * pokemonPerPage;
  const firstPokemonIndex = lastPokemonIndex - pokemonPerPage;
  const currentPokemon = allPokemon.slice(firstPokemonIndex, lastPokemonIndex);

 
  return (
    <div className={styles.containerHome} id='home'>

      <NavBar allPokemon={pokemon} setCurrentPage={setCurrentPage} />
      
      <Filters setCurrentPage={setCurrentPage}
      currentPokemon={currentPokemon} setOrden={setOrden} />

      <Card currentPokemon={currentPokemon} />

      <Paginate allPokemon={allPokemon} currentPage={currentPage}
        setCurrentPage={setCurrentPage} pokemonPerPage={pokemonPerPage}
        currentPokemon={currentPokemon} />

      <Footer currentPokemon={currentPokemon} />

    </div>
  )
}
