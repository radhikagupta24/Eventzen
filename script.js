// function clearErrors(){

//     errors = document.getElementsByClassName('formerror');
//     for(let item of errors)
//     {
//         item.innerHTML = "";
//     }


// }
// function seterror(id, error){
//     //sets error inside tag of id 
//     element = document.getElementById(id);
//     element.getElementsByClassName('formerror')[0].innerHTML = error;

// }

const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function(){
    console.log("hii");
    validateForm();
})

function validateForm(){
    // var returnval = true;
    // clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.getElementById("username").value;
    if (name.length<5){
        // seterror("name","*name can't be blank!");
        alert("name can't be blank");
    }

    if (name.length == 0){
        alert("length of name can't be zero");
        // seterror("name", "*Length of name cannot be zero!");
        // returnval = false;
    
    }

    var email = document.getElementById("email1").value;
    if (email.length>15){
        // seterror("email", "*Email length is too long");
        alert("email length too long");
        // returnval = false;
    }

    var phone = document.getElementById("num").value;
    if (phone.length != 10){
        // seterror("phone", "*Phone number should be of 10 digits!");
        // returnval = false;
        alert("only 10 characters are allowed");
    }

}

