import {currentDate, mostrarUsuario, conversationItem} from './utilities.js';
const lista = document.querySelector("#user_list");
const chat_list = document.querySelector("#chat_list");
const send_message_container = document.querySelector("#send_message_container");
const inputMessage = document.querySelector("#inputMessage");
const sendButton = document.querySelector("#icono")
const buscador = document.querySelector("#buscador");
let selectUser = null;
const usuarios = [];

//obtine la lista dec chats desde el localStorage
const defaultChatList = JSON.parse(localStorage.getItem('chats'))


//Obtner lista de usuarios desde la lista de chats
defaultChatList.forEach(chat => {
    for (const data of chat.conversacion) {
        if (data.remitente != "Miguel Salinas") {
            usuarios.push({
                userId: chat.userId,
                userName: data.remitente
            });
            break;
        }

    }

})

// evento para filtrar o buscar usuarios
buscador.addEventListener("input", function () {
    const filteredUsers = usuarios.filter(user => user.userName.toLowerCase().includes(this.value.toLowerCase()));
    mostrarUsuario(filteredUsers, lista);
})

// evento para seleccionar usuario y mostrar conversacion
lista.addEventListener('click', (e) => {

    if (e.target != "ul") {
        send_message_container.classList.remove('hidden');
        let userId = e.target.closest('li').id
        selectUser = userId;
        
       /*  let result = []
        defaultChatList.forEach(chat => {

            if (chat.userId == userId) {
                result = chat.conversacion
            }

        }) */
        
        const result = defaultChatList.find(chat => chat.userId == userId).conversacion

        conversationItem(chat_list, result, userId)
    }
})

// evento para enviar un nuevo mensaje
sendButton.addEventListener("click", () => {
    if (inputMessage.value != '') {

        defaultChatList.forEach(chat => {

            if (chat.userId == selectUser) {
                chat.conversacion.push({
                    fechaEnvio: currentDate(),
                    mensaje: inputMessage.value,
                    remitente: "Miguel Salinas",
                })
                conversationItem(chat_list, chat.conversacion, selectUser)
                localStorage.setItem('chats', JSON.stringify(defaultChatList))  
            }

        })
        inputMessage.value = ''

    }
})


mostrarUsuario(usuarios, lista);