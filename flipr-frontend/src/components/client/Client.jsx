import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import AboutUs from './AboutUs';

const Client = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/Client/');
        setClients(response.data?.clients);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className='client'>
      <Container>
        <h3>Happy Clients</h3>
        <div className='client-outer'>
        {clients.map((client, index) => (
          <div className='client-box' key={index}>
            <div className="client-img">
              <img src={client.image} alt={client.name} />
            </div>
            <p className="client-description">
              {client.description || 'No description available.'}
            </p>
            <h4 className="client-name">{client.name}</h4>
            <p className="client-role">{client.designation}</p>
          </div>
        ))}
        </div>
       
      </Container>

    </div>

  );
};

export default Client;