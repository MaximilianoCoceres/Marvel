import React, { useState } from 'react';
import './contact.css';
import Ironmanimg from '../../img/ironman.png';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    };
    return (
        <div id='sectioncontact' className='row'>

            <form onSubmit={handleSubmit}>
                <div className='col-6 img-form'>

                    <img src={Ironmanimg} alt=''></img>
                </div>
                <div className='col-6 formulario'>

                    <label htmlFor="name-input">Nombre:</label>
                    <input type="text" id="name-input" value={name} onChange={(event) => setName(event.target.value)} />
                    <label htmlFor="email-input">Email:</label>
                    <input type="email" id="email-input" value={email} onChange={(event) => setEmail(event.target.value)} />
                    <label htmlFor="message-input">Mensaje:</label>
                    <textarea id="message-input" value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
                    <button type="submit" className='btnForm '>Enviar</button>
                </div>
            </form>



        </div>
    );
}

export default Contact;
