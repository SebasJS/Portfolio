import "./Form.css"

export const Form = () => {
  return (
    <section className="formContainer">
        <form>
          <h4>Contactame</h4>
          <div className="inputGroup">
            <label htmlFor="name">Nombre</label>
            <input className="inputData" type="text" name="name" id="name" placeholder="Nombre" />
            <label htmlFor="phone">Telefono</label>
            <input className="inputData" type="tel" name="phone" id="phone" placeholder="Telefono" />
            <label htmlFor="email">Email</label>
            <input className="inputData" type="email" name="email" id="email" placeholder="Email" />
            <label htmlFor="message">Mensaje</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Mensaje"></textarea>
            <input className="btnForm" type="submit" value="Enviar" />
          </div>
        </form>
    </section>
  )
}
