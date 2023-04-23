import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css'
import { NavBar } from '../../components/NavBar/NavBar';

export const Contact = () =>{
  
  const [input, setInput] = useState({
    from_name: '',
    email_id: '',
    message: ''
  });

  const handleChange = (e) => {
    setInput({
        ...input, [e.target.name] : e.target.value
    })
  }

  const form = useRef();

  const sendEmail = (e) => {
    if (!input.from_name || !input.email_id || !input.message) {
      alert("Please complete all fields")
      } else {
      e.preventDefault();
      emailjs.sendForm('default_service', 'template_g3ycfrg', form.current, 'XG4NgA-AuhcF9dzP4')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        alert("Gracias por sus valiosos comentarios, el correo fue enviado con éxito")
        setInput({
          from_name: '',
          email_id: '',
          message: ''
        })
      }
    };


    return (
      <div>        
        <NavBar />
         <div>   
          <form ref={form} onSubmit={sendEmail} className={styles.field}>
            <h2>¡Contact me!</h2>

            <label htmlFor="from_name">Name</label>
            <input onChange={(e) => handleChange(e)} type="text" value={input.from_name} name="from_name" id="from_name" />

            <label htmlFor="email_id">Email</label>
            <input onChange={(e) => handleChange(e)} type="email" value={input.email_id} name="email_id" id="email_id" />

            <label htmlFor="message">Message</label>
            <textarea onChange={(e) => handleChange(e)} name="message" value={input.message} id="message" rows="4" cols="30"/>

            <input type="submit" value="Send" />
        </form>
      </div>
      </div>
     
    )
}