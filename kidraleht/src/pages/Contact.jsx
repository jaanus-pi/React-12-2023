import { useRef } from "react";
import "../css/Contact.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const [notification, setNotification] = useState("");
  const [messageSubmitted, setMessageSubmitted] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    if (nameRef.current.value === "") {
      setNotification("Palun sisestage oma nimi!")
      setMessageSubmitted(true);
      setLoading(false);
      return;
    }

    if (emailRef.current.value === "") {
      setNotification("Palun sisestage oma e-mail!")
      setMessageSubmitted(true);
      setLoading(false);
      return;
    }

    if (messageRef.current.value === "") {
      setNotification("Palun sisestage oma sõnum!")
      setMessageSubmitted(true);
      setLoading(false);
      return;
    }

    emailjs.sendForm('service_zb44adv', 'template_t20l13f', formRef.current, 'dUtQ84Svgf3DLwnyL')
      .then((result) => {
          console.log(result.text);
          setMessageSent(true);
          setMessageSubmitted(true);
          setNotification("Sõnum saadetud!")
          setLoading(false);
          clearForm();
      }, (error) => {
          console.log(error.text);
          setMessageSubmitted(true);
          setLoading(false);
          setNotification("Tekkis viga, palun proovige uuesti.");
      });
  };

  const clearForm = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  }

  return (
    <div className="contact">
      {messageSubmitted === true && 
        <div className={messageSent === true ? "contactMessageBox messageSuccess" : "contactMessageBox messageError"}>
          {notification}
        </div>}
      <form ref={formRef} onSubmit={sendEmail} className="contactForm">
        <label className="contactLabel">NIMI</label>
        <input type='text' name="from_name" ref={nameRef} className="contactInput" autoFocus={true}/>
        <label className="contactLabel">E-MAIL</label>
        <input type='text' name="from_email" ref={emailRef} className="contactInput" placeholder="mail@mail.ee"/>
        <label className="contactLabel">SÕNUM</label>
        <textarea className="contactInput contactMessage" name="message" ref={messageRef} placeholder="Tekkis küsimusi, ideid? Võta minuga ühendust!"/>
        <button className="sendButton" type="submit">{loading === false ? <span>SAADA</span> : <span>Palun oodake...</span>}</button>
      </form>
    </div>
  )
}

export default Contact