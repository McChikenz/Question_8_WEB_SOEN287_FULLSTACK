function validateFormAdoptionForm() {
    const form = document.forms["adoptionForm"];

    let formData={};

        for (let i = 0; i < form.length; i++) {
            let field = form.elements[i];
           if(field.name){
               formData[field.name] = field.value;
               if(formData[field.name] == "" ){
    
                   alert("Please fill (" + field.name + ") missing field");
                   return false;
               }
           }
        }
    

    


}


function validateFormFindFuzzy() {
    const form = document.forms["findFuzzyForm"];
    let formData={};

    for (let i = 0; i < form.length; i++) {
        let field = form.elements[i];
       if(field.name){
           formData[field.name] = field.value;
           if(formData[field.name] == "" ){

               alert("Please fill (" + field.name + ") missing field");
               return false;
           }
       }
    }

}