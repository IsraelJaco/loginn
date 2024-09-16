//  Esta Função serve para fechar o Modal
 const btnFechar = document.querySelector('.btn__fechar')
//  Esta função serve para pegar dados do formulário
const pegarDados = () => {
    const nome = document.querySelector('.input__nome').value
    const email = document.querySelector('.input__email').value
    console.log(nome, email)
    let nomeValido= false
    let emailValido=false
    // Validar dados
    if(nome===""||nome===null||nome.length <3){
       document.querySelector('.erro__nome').textContent="O nome é obrigatorio e precisa no minimo tres letras"
    }else
    {
        nomeValido= true
        document.querySelector('.erro__nome').textContent=""  
    }
     
    const emailRegex=/^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/

    if (!emailRegex.test(email)){
        document.querySelector('.erro__email').textContent="O email é obrigatorio e precisa ser válido"
        }else{
            emailValido=true
           document.querySelector('.erro__email').textContent="" 
        }
   if (nomeValido && emailValido){
    const cadastro={
        nome:nome,
        email:email
    }
    console.log(cadastro)
    // Comando para limpar os dados dos campos do formulario
    document.querySelector("form").reset()
    return 'sucesso'
    }
    else{
        return'erro'
    }
   }

//  Esta função serve para mostrar a caixa de dialogo dentro do HTML

const mostrarModal = (statusRegister ) => {
    // formatação condicional da janela modal
    // const statusRegister = 'erro'
    if (statusRegister === 'sucesso') {
        document.querySelector('.modal__msg__erro').style.display = 'none'
        document.querySelector('.modal__msg__sucesso').style.display = 'block'
        btnFechar.classList.add('bg__sucesso')
        btnFechar.classList.remove('bg__erro')
    }
    if (statusRegister === 'erro') {
        document.querySelector('.modal__msg__sucesso').style.display = 'none'
        document.querySelector('.modal__msg__erro').style.display = 'block'
        btnFechar.classList.add('bg__erro')
        btnFechar.classList.remove('bg__sucesso')
    }
    document.querySelector('.modal__enviar').showModal()
}
// Esta parte do codigo ser para manipular o bão enviar 
// A intrução [é] vai ate ao HTML e Procura a classe .btn__Enviar e Adiciona o envento
// do Click esse (E) serve para previnir o evento pausar o evento do botão 
document.querySelector('.btn__enviar').addEventListener('click', (e) => {
    e.preventDefault()
    //pegar dados do formulário
    
    mostrarModal(pegarDados())
})
btnFechar.addEventListener('click', () => {
    document.querySelector('.modal__enviar').close()
})