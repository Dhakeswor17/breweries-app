import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from '@react-oauth/google';

interface User {
  name: string;
  email: string;
}

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleGoogleLoginSuccess = (response: CredentialResponse) => {
    // Decode the JWT to extract user data
    const userData = response.credential ? JSON.parse(atob(response.credential.split('.')[1])) : {};
    setName(userData.name || '');
    setEmail(userData.email || '');
  };

  const handleSubmit = () => {
    // Submit form
    console.log({ name, email, message });
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <form onSubmit={handleSubmit}>
        <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
        <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
        <TextField label="Message" value={message} onChange={(e) => setMessage(e.target.value)} fullWidth />
        
        <GoogleLogin 
          onSuccess={handleGoogleLoginSuccess}
          onError={() => console.log('Login Failed')}
        />
        
        <Button type="submit" variant="contained">Submit</Button>
      </form>
    </GoogleOAuthProvider>
  );
};

export default ContactForm;
