document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();
    var name = document.querySelector("input[name='first-name']").value;
    var email = document.querySelector("input[name='email']").value;
    showDialog("Message sent","<p>Thank you for contacting us, " + name+ "! We will get back to you at " + email + " as soon as we can.</p>");
});