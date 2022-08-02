$(document).ready(function(){

    function validateName() {
        var name = document.forms["myForm"]["name"].value;
        var error1 = document.getElementById('nameError1');
        var error2 = document.getElementById('nameError2');
    
        var result = true;
    
        //check firt name length
        if (name.length < 2) {
            error1.style.visibility = 'visible';
            result = false;
        }else{
            error1.style.visibility = 'hidden';
           
        }
    
        //Check that only characters A-Za-z are used
        if (!onlyLetters(name)){
            error2.style.visibility = 'visible';
            result = false;
           
        }else{
            error2.style.visibility = 'hidden';
        }
    
        return result;
      }
    function validateEmail(){
        var email = document.forms["myForm"]["email"].value;
        var error1 = document.getElementById('emailError');
        var result = true;
        if(!validEmail(email)){
            error1.style.visibility = 'visible';
            result=false;
            return result;
        }else{
            error1.style.visibility = 'hidden';
          return result;
        }
    }
        
    function onlyLetters(str) {
        return /^[a-zA-Z\s]+$/.test(str);
    }

    function validEmail(str){
        return  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str);
    }
 
    /*AJAX POST Request to server */
    $("#myForm").submit(function(event) {

        /* stop form from submitting normally */
        event.preventDefault();
      
        /* validate form */
        var name = validateName();
        var email = validateEmail();
    
        if(!name || !email){
            // return false;
            console.log('ERRORS!');
        }else{
            console.log("AJAX SENT");
            var x =JSON.stringify($("#myForm").serializeArray());
            console.log(x);

            $.ajax(
                {
                    type: 'POST',
                    headers: { 'X-Master-Key': '$2b$10$b6.Egr7DQF6xe2b1jz4EOOi9um9q9eAG3Mb4sEgfRfLi0FOw4m88G', 
                    "Content-Type":"application/json" },
                    url: $(this).attr('to'),
                    data: x,
                    dataType: 'json',
                    success: function (textStatus, status) {
                        alert("Form Submission Sent Sucessfully");
                        console.log(textStatus);
                        console.log(status);
                        window.location.href ="success.html";
                    },
                    error: function(request, status, error) {
                        console.log(request);
                        alert(request.responseText);
                        console.log(error);
                        console.log(status);
                       
                    }
                });
          
        
      }
  });
});
