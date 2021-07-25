// Form do index html
document.getElementById("button").addEventListener("click", 

function(event){
    event.preventDefault()
    alert("Usuário salvo no localStorage")

    let salvarNome = document.getElementById("nome")
    let salvarEmail = document.getElementById("email")

    const handleInputNome = salvarNome.value;
    const handleInputEmail = salvarEmail.value;

    localStorage.setItem("Nome", handleInputNome)
    localStorage.setItem("Email", handleInputEmail)
           
            console.log("Salvo")
})


    

  
   
