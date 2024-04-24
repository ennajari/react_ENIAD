import React, { useState } from 'react';
import './App.css';

function App() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const renderErrorMessage = (name) =>
    errorMessages.name === name && <div className="error">{errorMessages.message}</div>;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = database.find((user) => user.username === formData.get("uname"));
    if (userData) {
      if (userData.password !== formData.get("upass")) {
        setErrorMessages({ name: "upass", message: errors.upass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderForm = (
    <div className="login-form">
      <div className="title">Connexion</div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>L'identifiant </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Mot de passe </label>
            <input type="password" name="upass" required />
            {renderErrorMessage("upass")}
          </div>
          <div className="button-container">
            <input type="submit" value="Se connecter" />
          </div>
        </form>
      </div>
    </div>
  );

  const database = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" }
  ];

  const errors = {
    uname: "Votre identifiant est incorrect.",
    upass: "Votre mot de passe est incorrect."
  };

  return (
    <div className="app">
      {isSubmitted ? (
        <div>
          <div className="title">Accueil</div>
          <div>Bonjour</div>
        </div>
      ) : (
        renderForm
      )}
    </div>
  );
}

export default App;
