import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './SearchBar.module.css';
import { searchPokemonByName } from '../../../redux/actions';
import { Results } from '../Results/Results'

export const SearchBar = ({ allPokemon, setCurrentPage }) => {
  // Ejecuto las funciones de las actions
  const dispatch = useDispatch();

  // Resultados de la búsqueda en la SearchBar
  const [results, setResults] = useState([]);

  // Estado del input de búsqueda
  const [search, setSearch] = useState('');

  // Deshabilitar botón "Search" si esta vacío el estado search
  const disabled = !search.length

  // Actualizar el estado de la búsqueda 
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  // Hacer la búsqueda de Pokemon por nombre
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchPokemonByName(search));
    setSearch('');
    setCurrentPage(1);
  };

  // Actualizar el número de resultados encontrados
  const handleResults = (items) => {
    setResults(items);
  };

  // Actualizar el pokemon seleccionado
  const handleItemSelected = (item) => {  
    setSearch(item)
    dispatch(searchPokemonByName(item))
    setSearch('');
    setCurrentPage(1);
  }

  return (
    <div className={results.length > 0 ? styles.containerAllResponsive : styles.containerAll }>
      <form className={`${styles.containerSerchBar} d-flex`} role="search" onSubmit={handleSubmit}>
        {/* Quantity Results */}
        { search.length > 0 && <div className={styles.quantityResults}>{results.length > 5 ? 5 : results.length} results </div>}
        
        {/* Input search & Button Search */}
        <input className={styles.inputSearch} onChange={(e) => handleChange(e)} value={search} type="search" placeholder="Search..." aria-label="Search" />
        <button 
          className={`${styles.buttonSearch} btn btn-outline-success`} 
          disabled={disabled} 
          id='btnAlert' 
          type="submit"
        >Search
        </button>
      </form>

      {/* Search results */}
      <div className={styles.conatinerResults}>
        { allPokemon && <Results 
          allPokemon={allPokemon} 
          onItemSelected={handleItemSelected} 
          search={search} 
          onResultsCalculated={handleResults}
          />
        }
      </div>
    </div>
  )
}
