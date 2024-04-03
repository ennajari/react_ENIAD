function formatNoms(personnes) {
    return personnes.map(personne => `${personne.prenom} ${personne.nom}`);
  }
  
  const personnes = [
    { prenom: 'Ahmed', nom: 'ALAMI' },
    { prenom: 'Fatima', nom: 'ALAOUI' },
    { prenom: 'Karim', nom: 'BAGHDADI' }
  ];
  
  nomsComplets = formatNoms(personnes);
  console.log(nomsComplets);
  