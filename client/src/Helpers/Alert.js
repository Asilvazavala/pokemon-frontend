import React from 'react';

export const Alert = () => {
  // Seleccionar el elemento donde se desplegará la alerta
  // const alertPlace = document.getElementById('alertPlace')

  // // Mensaje que se desplegará y tipo/color de alerta
  // const alert = (message, type) => {
  //   const wrapper = document.createElement('div')
  //   wrapper.innerHTML = [
  //     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
  //     `   <div>${message}</div>`,
  //     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
  //     '</div>'
  //   ].join('')
  //   // Añadir mensaje y tipo de alerta al elemento
  //   alertPlace.append(wrapper)
  // }

  // // Seleccionar el botón para ejecutar la función de mostrar la alerta
  // const alertTrigger = document.getElementById('btnAlert')
  // if (alertTrigger) {
    // alertTrigger.addEventListener('click', () => {
  
  //   })
  // }


  return (
    <div>
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success!</strong> Your message was sent successfully.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
  )
}
