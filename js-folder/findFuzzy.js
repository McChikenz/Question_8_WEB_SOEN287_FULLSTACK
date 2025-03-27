function validateForm() {
    let form = document.forms["fuzzyForm"];
    
    if(form == "") {
        alert("Please enter a value");
        return false;
    }
}