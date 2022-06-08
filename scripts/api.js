class ApiBase {
    constructor(token){
        this.token = token;
        this.url;
        this.contatos = [];
        this.httpRequest = new XMLHttpRequest();
        this.btn1;
        this.btn2;
    }

    // Cria uma url com o endereço básico, o token e, se houver, o id
    makeUrl(id){
        this.url = 'https://api.box3.work/api/Contato/' + this.token
        if(id)
            this.url += '/' + id
    }

    // Cria dois botões que são adicionados ao final de cada linha na tabela
    // Eles servem para editar e deletar um registro
    makeBtn(id){
        this.btn1 = '<a href="#editEmployeeModal" class="edit" data-toggle="modal"><i id="'+id+'" class="material-icons editBtn" data-toggle="tooltip" title="Edit">&#xE254;</i></a>'
        this.btn2 = '<a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i id="'+id+'" class="material-icons deleteBtn" data-toggle="tooltip" title="Delete">&#xE872;</i></a>'
    }

    // Monta e adiciona os registros de contato dentro da página html
    insereContatos(contatos){
        contatos.forEach(element => {
            const { id, nome, telefone, email, dataNascimento } = element
    
            let date = new Date(dataNascimento).toISOString().split('T')[0]
            date = date.split('-').reverse().join('/')
            let html = document.getElementById("tabela")
            let str = '<tr><td>'
            let tag = '</td><td>'
            this.makeBtn(id)
            str += id + tag + nome + tag + telefone + tag + email + tag + date + tag + this.btn1 + this.btn2 +'</td></tr>'
            html.innerHTML += str
        });
    }

    // Captura os dados passados para serem editados e requisita a alteração
    editContact(event){
        event.preventDefault()
        let id = this.target.id
        let nome = event.target[1].value
        let telefone = event.target[2].value
        let email = event.target[3].value
        let data = event.target[4].value
        api.request('PUT', id, [nome, telefone, email, data])
    }

    // Obtem os dados que chegam do evento de confirmação e realiza a requisição de deleção
    deleteContact(event){
        event.preventDefault()
        let id = this.target.id
        api.request('DELETE', id)
        window.location.reload()
    }

    // Remove todos os eventos colocados nos formulários e botões
    // Evita bugs como deletar dois objetos de uma vez após cancelar uma deleção
    cancel(){
        window.location.reload()
    }

    // Executa requisição http
    getExec(method){
        var contatosTemp

        this.httpRequest.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200)
                contatosTemp = JSON.parse(this.responseText) // Popula a variável contatosTemp com N contatos retornados da API
        }

        this.httpRequest.open(method, this.url, false)
        this.httpRequest.send()
        this.contatos = contatosTemp
        this.insereContatos(this.contatos)
    }

    postExec(method, args){
        let [nome, telefone, email, data] = args
        let date = new Date(data)
        this.makeUrl()
        this.httpRequest.open(method, this.url, false)
        this.httpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8")

        this.httpRequest.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200)
                window.location.reload()
        }
        
        this.httpRequest.send(JSON.stringify({
            "nome": nome,
            "telefone": telefone,
            "email": email,
            "ativo": true,
            "dataNascimento": date.toISOString()
        }))
    }

    putExec(id, method, args){
        let [nome, telefone, email, data] = args
        let date = new Date(data)
        this.makeUrl(id)
        this.httpRequest.open(method, this.url, false)
        this.httpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8")

        this.httpRequest.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200)
                window.location.reload()
        }
        
        this.httpRequest.send(JSON.stringify({
            "nome": nome,
            "telefone": telefone,
            "email": email,
            "ativo": true,
            "dataNascimento": date.toISOString()
        }))
    }

    deleteExec(method, id){
        this.makeUrl(id)
        this.httpRequest.open(method, this.url, false)
        this.httpRequest.send()
    }
}


class Api extends ApiBase {
    // Redireciona a requisição de todos os métodos do CRUD
    request(method, id, args){
        this.makeUrl(id)
        switch(method){
            case 'GET': this.getExec(method); break;

            case 'POST': this.postExec(method, args); break;

            case 'PUT': this.putExec(id, method, args); break;

            case 'DELETE': this.deleteExec(method, id); break;
        }
        
    }

    // CRUD
    // Create
    post(event){
        event.preventDefault()
        let nome = event.target[1].value
        let telefone = event.target[2].value
        let email = event.target[3].value
        let data = event.target[4].value
        this.request('POST', null, [nome, telefone, email, data])
    }

    // Read
    get(id){
        this.request('GET', id)
    }

    // Update
    edit(event){
        document.getElementById("editEmployeeModalForm").addEventListener("submit", this.editContact.bind(event))
    }

    // Delete
    delete(event){
        document.getElementById("form-delete").addEventListener("submit", this.deleteContact.bind(event))
    }
}



