 const formvalid=document.getElementById('bouton-envoi');
 const prenom=document.getElementById('prenom');
  const missprenom=document.getElementById('misprenom');
  formvalid.addEventListener('click',validation);

      function validation(event) {
      if(prenom.validity.valueMissing){
        event.preventDefault();
        missprenom.textContent='prenommanquant';
        missprenom.style.color='red';

    
      } else  {
        event.preventDefault();
        missprenom.textContent='validation';
     prenom.style.color='black';
    }
}

