
   function myForm (form) {
     
      var firstName = form.firstName.value;
      var lastName = form.lastName.value;
      var email = form.email.value;
     var form = document.querySelector('#testForm');

  if(firstName==" " || firstName=="" && lastName==" " || lastName=="" && email==" "|| email==""){
error1 = "Вы не ввели свое имя Вы не ввели свое фамилию и емейл";
return true;
   } else if(firstName==" " || firstName=="" ){
     document.getElementById('1').innerHTML="Вы не ввели свое имя";
return error;
 
   } else if(lastName==" " || lastName==""){
     
form.preventDefault();
 document.getElementById('2').innerHTML="Вы не ввели свое фамилию";
return error;

 
   } else if(email==" " || email==""){
      document.getElementById('3').innerHTML="Вы не ввели свой емейл";
     
     return error;
     
   } 
  if(error1){
     alert(error1);
    } else if(error2){
      alert(error2);
    }else if(error3){
      alert(error3);
    }else if(error4){
     alert(error4);
    }
   
    return true;
   }

}
     

  
  


});