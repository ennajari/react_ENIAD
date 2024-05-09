import React, { useState } from 'react';
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    uname: "",
    upass: "",
    dob: "",
    city: "",
    gender: "",
    hobbies: []
  });
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" }
  ];

  const errors = {
    uname: "Votre identifiant est incorrect.",
    upass: "Votre mot de passe est incorrect.",
    dob: "Veuillez entrer votre date de naissance au format jj/mm/aaaa.",
    city: "Veuillez sélectionner une ville parmi : Casablanca, Rabat, Marrakech, Oujda, Agadir, Tanger, et Fès.",
    gender: "Veuillez sélectionner votre genre.",
    hobbies: "Veuillez sélectionner au moins un loisir."
  };

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("uname").toLowerCase(); // Convertir en minuscules
    const password = formData.get("upass");
    const userData = database.find(user => user.username === username);
    if (userData) {
      setErrorMessages({ uname: "Cet identifiant existe déjà." });
    } else {
      const passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      if (!passRegex.test(password)) {
        setErrorMessages({ upass: "Le mot de passe doit contenir au moins 8 caractères, des lettres, des nombres et des symboles." });
      } else {
        setIsSubmitted(true);
      }
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = event => {
    const { name, checked } = event.target;
    const updatedHobbies = checked
      ? [...formData.hobbies, name]
      : formData.hobbies.filter(hobby => hobby !== name);
    setFormData({
      ...formData,
      hobbies: updatedHobbies
    });
  };

  const renderErrorMessage = name => {
    return errorMessages[name] && (
      <div key={name} className="error">
        {errorMessages[name]}
      </div>
    );
  };

  const renderForm = (
    <div className="login-form">
      <div className="title">Inscription</div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>L'identifiant </label>
            <input type="text" name="uname" value={formData.uname} onChange={handleChange} required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Mot de passe </label>
            <input type="password" name="upass" value={formData.upass} onChange={handleChange} required />
            {renderErrorMessage("upass")}
          </div>
          <div className="input-container">
            <label htmlFor="dob">Date de naissance:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
            {renderErrorMessage("dob")}
          </div>
          <div className="input-container">
            <label>Ville </label>
            <select name="city" value={formData.city} onChange={handleChange} required>
              <option value="">Sélectionner une ville</option>
              <option value="Casablanca">Casablanca</option>
              <option value="Rabat">Rabat</option>
              <option value="Marrakech">Marrakech</option>
              <option value="Oujda">Oujda</option>
              <option value="Agadir">Agadir</option>
              <option value="Tanger">Tanger</option>
              <option value="Fès">Fès</option>
            </select>
            {renderErrorMessage("city")}
          </div>
          <div className="input-container">
            <label>Genre </label>
            <div>
              <input type="radio" name="gender" value="Homme" onChange={handleChange} required /> Homme
              <input type="radio" name="gender" value="Femme" onChange={handleChange} required /> Femme
            </div>
            {renderErrorMessage("gender")}
          </div>
          <div className="input-container">
            <label>Loisirs </label>
            <div>
              <input type="checkbox" name="Sport" onChange={handleCheckboxChange} /> Sport
              <input type="checkbox" name="Lecture" onChange={handleCheckboxChange} /> Lecture
              <input type="checkbox" name="Musique" onChange={handleCheckboxChange} /> Musique
            </div>
            {renderErrorMessage("hobbies")}
          </div>
          <div className="button-container">
            <input type="submit" value="S'inscrire" />
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="app">
      {isSubmitted ? (
        <div>
          <div className="title">Accueil</div>
          <div>Inscription réussie !</div>
        </div>
      ) : (
        renderForm
      )}
    </div>
  );
};

export default App;
