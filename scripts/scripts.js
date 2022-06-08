let token = "13ffed7e-d92a-4b6c-b8cc-9d4551c87fd0"

const api = new Api(token);

// Verifica se o número é válido
// Obs: não limita caso o usuário queira enviar em um formato inválido, apenas adiciona mensagem de erro
telefoneErro = "Informe um telefone com formato válido<br>Formatos válidos: (xx) 9xxxx-xxxx ou (xx) 3xxx-xxxx"
function regexTest(event){
    idtemp = telefoneValidoEdit
    if(event.id == "telefoneValido")
        idTemp = "telefoneValidoEdit"
    telefoneValido = document.getElementById(idTemp)

    var expressao = '^\\([0-9]{2}\\)(( 3[0-9]{3}-[0-9]{4})|( 9[0-9]{4}-[0-9]{4}))$';
    var regex = new RegExp(expressao)
    if(!regex.test(event.value))
        telefoneValido.innerHTML = telefoneErro
    else
        telefoneValido.innerHTML = ""
}

window.onload = () => {
    // Lista os contatos a cada vez que a página é recarregada
    api.get()

    // Adiciona um evento no botão de adicionar contato
    document.getElementById("addEmployeeModalForm").addEventListener('submit', api.post.bind(api))

    // Adiciona um evento em todos os botões de deletear
    let deleteBtn = document.getElementsByClassName("deleteBtn")
    Array.from(deleteBtn).forEach(element => {
        element.addEventListener("click", api.delete.bind(api))
    })

    // Adiciona um evento em todos os botões de editar
    let editBtn = document.getElementsByClassName("editBtn")
    Array.from(editBtn).forEach(element => {
        element.addEventListener("click", api.edit.bind(api))
    })

    document.getElementById("cancelAdd").addEventListener("click", api.cancel)
    document.getElementById("cancelEdit").addEventListener("click", api.cancel)
    document.getElementById("cancelDelete").addEventListener("click", api.cancel)
}
