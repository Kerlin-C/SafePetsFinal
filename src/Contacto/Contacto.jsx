import { useState } from 'react';
import './contacto.css'

const Contacto = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [motivo, setMotivo] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí puedes realizar la lógica para enviar los datos del formulario, como una solicitud HTTP a un servidor o cualquier otra acción requerida.
      // Puedes acceder a los valores de nombre, correo, telefono y motivo utilizando las variables de estado correspondientes.
    };
  
    return (
        <div className="contacto-container">
          <div className="contacto-info">
            <h1>Formulario de Contacto</h1>
          </div>
          <div className="formulario-contacto">
            <form onSubmit={handleSubmit}>
              <div className="campo">
                <label htmlFor="nombre">Nombre Completo:</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>
    
              <div className="campo">
                <label htmlFor="correo">Correo:</label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  required
                />
              </div>
    
              <div className="campo">
                <label htmlFor="telefono">Teléfono:</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </div>
    
              <div className="campo">
                <label htmlFor="motivo">Motivo:</label>
                <textarea
                  id="motivo"
                  name="motivo"
                  rows="4"
                  value={motivo}
                  onChange={(e) => setMotivo(e.target.value)}
                  required
                ></textarea>
              </div>
    
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
  );
};
  
  export default Contacto;
