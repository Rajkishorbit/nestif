
 


  
 
function sendEmail(){
    alert("inside method");
    
     Email.send({
Host : "smtp.gmail.com",
Username : "dearraj1d@gmail.com",
Password : "9608501260",
To : 'rajkishorbit@gmail.com',
From : document.getElementById("email").value,
Subject : "New contact form Enquiry",
Body : "And this is the body"
}).then(
message => alert(message)
);
}