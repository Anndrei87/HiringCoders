//Form de clientes

document.getElementById("but").addEventListener("click",
function(event){
    event.preventDefault()
    alert("Dados do cliente salvo com sucesso")

    let salvarNome = document.getElementById("nome")
    let salvarEmail = document.getElementById("email")
    let salvarCep = document.getElementById("cep")
    let salvarTel = document.getElementById("cell")

    const handleInputNome = salvarNome.value;
    const handleInputEmail = salvarEmail.value;
    const handleInputTel = salvarTel.value;
    const handleInputCep = salvarCep.value;

    localStorage.setItem("Nome", handleInputNome)
    localStorage.setItem("Email", handleInputEmail)
    localStorage.setItem("CEP", handleInputCep)
    localStorage.setItem("Telefone", handleInputTel)
           
            console.log("Salvo")
})

        