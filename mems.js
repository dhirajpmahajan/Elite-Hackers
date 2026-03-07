// =============================
// PARTICIPANT SIGNUP
// =============================

function registerParticipant(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

fetch("http://localhost:3000/register",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name:name,
email:email,
password:password
})

})

.then(res=>res.json())

.then(data=>{

if(data.success){

alert("Registration Successful");

window.location.href="participant-login.html";

}

else{

alert("Registration Failed");

}

})

.catch(err=>console.log(err));

}



// =============================
// PARTICIPANT LOGIN
// =============================

function loginParticipant(){

let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

fetch("http://localhost:3000/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
email:email,
password:password
})

})

.then(res=>res.json())

.then(data=>{

if(data.success){

alert("Login Successful");

window.location.href="dashboard.html";

}

else{

alert("Invalid Email or Password");

}

})

.catch(err=>console.log(err));

}



// =============================
// ORGANIZER SIGNUP
// =============================

function registerOrganizer(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

fetch("http://localhost:3000/organizer-register",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name:name,
email:email,
password:password
})

})

.then(res=>res.json())

.then(data=>{

if(data.success){

alert("Organizer Registered");

window.location.href="organizer-login.html";

}

else{

alert("Registration Failed");

}

})

.catch(err=>console.log(err));

}



// =============================
// ORGANIZER LOGIN
// =============================

function loginOrganizer(){

let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

fetch("http://localhost:3000/organizer-login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
email:email,
password:password
})

})

.then(res=>res.json())

.then(data=>{

if(data.success){

alert("Login Successful");

window.location.href="admin.html";

}

else{

alert("Invalid login");

}

})

.catch(err=>console.log(err));

}