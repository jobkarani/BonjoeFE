// form data to whatsapp
function whatsapp(){
    var firstname = document.getElementById("first-name").value;
    var lastname = document.getElementById("last-name").value;
    var emailinput = document.getElementById("email-input").value;
    var Phone = document.getElementById("phone-input").value;
    var Message = document.getElementById("message-textarea").value;
  
    var url = "https://wa.me/254724087213?text="
    +"* First Name : * " + firstname + "%0a"
    +"* Last Name : * " + lastname + "%0a"
    +"* Email : * " + emailinput + "%0a"
    +"* Phone : * " + Phone + "%0a"
    +"* Message : * " + Message + "%0a"
  
    window.open(url, '_blank').focus;
  
  }
