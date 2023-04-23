import React, { useEffect } from 'react';
import styles from './CreateForm.module.css';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { postPokemon, getAllPokemon } from '../../../redux/actions';

export const CreateForm = ({ input, setInput, disabled }) => {
  // Para ejecutar las funciones de las actions
  const dispatch = useDispatch();

  // Para cambiar de página/ruta
  const history = useHistory();

  // Guardo el id pasado por la ruta 
  const {id} = useParams();

  // Ejecuto en automático la action para obtener los pokemon 
  useEffect(() => {
    dispatch(getAllPokemon());
  },[dispatch])

  // Crear el pokemon
  function handleSubmit(e) {
    e.preventDefault(); 
    dispatch(postPokemon(input));
    alert('Pokemon created succesfully!!'); 
    setInput({
      name: '',
      image: '',
      types: [],
      hp:'',
      attack: '',
      defense: '',
      speed:'',
      height: '',
      weight: '',
    })
    history.push('/home');
  };


  return (
    <div>
      {/* Button create */}
      <button 
        className={id ? styles.hideButton : `${styles.buttonCreate} btn btn-primary`} 
        type="button"
        onClick={(e) => handleSubmit(e)}
        disabled={disabled || !input.types.length}
      >Create Pokemon
      </button>
    </div>
  )
}
