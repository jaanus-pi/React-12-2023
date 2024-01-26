import "../css/Contact.css"

const Contact = () => {
  return (
    <div className="contact">
      <form className="contactForm">
        <label className="contactLabel">Nimi</label>
        <input type='text' className="contactInput"autoFocus={true}/>
        <label className="contactLabel">E-mail</label>
        <input type='text' className="contactInput" placeholder="mail@mail.ee"/>
        <label className="contactLabel">Sõnum</label>
        <textarea className="contactInput contactMessage" placeholder="Tekkis küsimusi, ideid? Võta minuga ühendust!"/>
        <button className="sendButton">Saada</button>
      </form>
    </div>
  )
}

export default Contact