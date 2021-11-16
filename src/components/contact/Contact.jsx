import { useState } from "react";
import { useForm, ValidationError } from '@formspree/react'
import "./contact.scss"

export default function Contact() {

  

  const [state, handleSubmit] = useForm("xoqygndd");
  state.succeeded ? <p>Thanks for joining!</p> : <p>oups</p>;
  
  return (
    <div className="contact" id="contact">
          <div className="left">
             <img src="assets/shake.png" alt="shake" />
          </div>
          <div className="right">
         <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Envoyer
      </button>
     
    </form>
    <div className="rightUnder">
            <a href="mailto:edwarbarrera@gmail.com"> <img  className="icon" src="assets/mail.png" alt="" /></a>
            <a href=""> <img className="icon" src="assets/linkedin.png" alt="" /></a>
           <a href=""> <img  className="icon" src="assets/github.png" alt="" /></a>
           
          </div>
        </div>
        </div>
  );







{/* 
  // const [message, setMessage]=useState(false)

  // const handleSubmit=(e)=>{
  //   e.preventDefault(); */}
  {/* //   setMessage(true);
  // }
  //   return (
  //     <div className="contact" id="contact">
  //       <div className="left">
  //         <img src="assets/shake.png" alt="shake" />
  //       </div>
  //       <div className="right">
  //         <h2>Contact</h2>
  //         <form  onSubmit={handleSubmit}>
  //           <input type="text" placeholder="e-mail" />
  //           <textarea placeholder="Le message saisi ne sera pas envoyé. Vous pouvez néanmoins me contacter via les liens  e-mail / LinkedIn / GitHub  ci-dessous "></textarea>
  //           <button type="submit">Envoyer</button>
  //           {message && <span>Merci ! Le message que vous avez saisi ne sera pas envoyé. Vous pouvez néanmoins me contacter via les liens  e-mail / LinkedIn / GitHub  ci-dessous</span>}
  //         </form>
  //         <div className="rightUnder">
  //          <a href="mailto:edwarbarrera@gmail.com"> <img  className="icon" src="assets/mail.png" alt="" /></a>
  //          <a href=""> <img className="icon" src="assets/linkedin.png" alt="" /></a>
  //          <a href=""> <img  className="icon" src="assets/github.png" alt="" /></a>
           
  //         </div>
  //       </div>

  //     </div>
  //     ) */
  
  
  }




}

