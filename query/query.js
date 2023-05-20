function clickme() {
    let name = document.getElementById("name").value 
    let email = document.getElementById("email").value
    let subject = document.getElementById("subject").value
    let query = document.getElementById("query").value
    let theme;

    if(document.getElementById('radio1').checked){
        theme = document.getElementById('radio1').value;
    } else if(document.getElementById('radio2').checked){
        theme = document.getElementById('radio2').value;
    } else if(document.getElementById('radio3').checked){
        theme = document.getElementById('radio3').value;
    } else if(document.getElementById('radio4').checked){
        theme = document.getElementById('radio4').value
    }
    
    if(name == "") {
        alert("Name field empty")
        return false
    }
    else if(email == "") {
        alert("Email is empty")
        return false
    }    
    else if(subject == ""){
        alert("Subject is empty")
        return false
    }
    else if(query == "") {
        alert("Query is empty")
        return false
    }
    else if(theme == null){
        alert("Theme is empty")
        return false
    }
    else {
        localStorage.setItem("name", name);
        localStorage.setItem("mail", email);
        localStorage.setItem("subject", subject);
        localStorage.setItem("theme", theme);
        localStorage.setItem("info", query);
    }
}

