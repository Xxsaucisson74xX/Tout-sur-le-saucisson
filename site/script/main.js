function reponse(mot,choix) {
  // récupère un mot, si l'utilisateur rentre ce texte elle alerte bonne réponse sinon mauvaise réponse
    if (choix == mot) {
        window.alert('Bonne réponse');
    } 
    else {
        window.alert('Mauvaise réponse');
    }
}
function question2(){
    let ch = document.getElementById("choix2").value;
	reponse("saucisson à l'ail",ch);
}


