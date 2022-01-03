function reponse(mot,choix) {
  // récupère un texte, si l'utilisateur rentre ce texte elle retourn vrai sinon faux
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


