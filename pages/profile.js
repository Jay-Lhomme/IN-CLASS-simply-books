import React from 'react';
import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function Profile() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
        color: 'white',
      }}
    >
      <h1>Bye-Bye</h1>
      <p>Click the button below to say goodbye...</p>
      <Button type="button" className="justify-content-center align-content-center" size="lg" variant="danger" onClick={signOut}>
        SIGN OUT
      </Button>
    </div>
  );
}
