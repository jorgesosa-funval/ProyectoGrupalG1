// crear lista inicial de chats en el localStorage
if(localStorage.getItem('chats') === null){
    const defaultChats = [ 
    {
        userId: 1,
        conversacion: [
            {
                fechaEnvio: "2023-10-27 09:30:00",
                mensaje: "Hola, ¿cómo estás?",
                remitente: "Juan Pérez",
            },
            {
                fechaEnvio: "2023-10-27 09:35:00",
                mensaje: "¡Hola! Estoy bien, ¿y tú?",
                remitente: "Miguel Salinas",
            },
            {
                fechaEnvio: "2023-10-27 09:40:00",
                mensaje: "Yo también estoy bien, ¿qué has estado haciendo?",
                remitente: "Juan Pérez",
            },
        ]
    },
    {
        userId: 2,
        conversacion: [
            {
                fechaEnvio: "2023-10-27 10:15:00",
                mensaje: "Hola María, ¿cómo te va?",
                remitente: "Miguel Salinas",
            },
            {
                fechaEnvio: "2023-10-27 10:20:00",
                mensaje: "Hola Miguel, todo bien. ¿Qué has estado haciendo?",
                remitente: "María García",
            },
            {
                fechaEnvio: "2023-10-27 10:25:00",
                mensaje: "Estuve trabajando en un proyecto, ¿y tú?",
                remitente: "Miguel Salinas",
            },
        ]
    },
    {
        userId: 3,
        conversacion: [
            {
                fechaEnvio: "2023-10-27 11:00:00",
                mensaje: "Hola Ana, ¿cómo te ha ido?",
                remitente: "Miguel Salinas",
            },
            {
                fechaEnvio: "2023-10-27 11:05:00",
                mensaje: "Hola Miguel, todo tranquilo por aquí. ¿Y tú?",
                remitente: "Ana Martínez",
            },
            {
                fechaEnvio: "2023-10-27 11:10:00",
                mensaje: "Estoy ocupado con el trabajo, pero todo va bien.",
                remitente: "Miguel Salinas",
            },
        ]
    },
    {
        userId: 4,
        conversacion: [
            {
                fechaEnvio: "2023-10-27 12:30:00",
                mensaje: "Hola Luis, ¿qué tal estás?",
                remitente: "Miguel Salinas",
            },
            {
                fechaEnvio: "2023-10-27 12:35:00",
                mensaje: "¡Hola Miguel! Bien, gracias. ¿Has oído hablar de la nueva película?",
                remitente: "Luis Sánchez",
            },
            {
                fechaEnvio: "2023-10-27 12:40:00",
                mensaje: "Sí, la vi anunciada. ¿Quieres verla juntos?",
                remitente: "Miguel Salinas",
            },
        ]
    },
    {
        userId: 5,
        conversacion: [
            {
                fechaEnvio: "2023-10-27 13:15:00",
                mensaje: "Hola Laura, ¿cómo estás?",
                remitente: "Miguel Salinas",
            },
            {
                fechaEnvio: "2023-10-27 13:20:00",
                mensaje: "¡Hola Miguel! Estoy bien, gracias. ¿Cómo va tu día?",
                remitente: "Laura López",
            },
            {
                fechaEnvio: "2023-10-27 13:25:00",
                mensaje: "Mi día va bien, ocupado en el trabajo. ¿El tuyo?",
                remitente: "Miguel Salinas",
            },
        ]
    },
    {
        userId: 6,
        conversacion: [
            {
                fechaEnvio: "2023-10-27 14:00:00",
                mensaje: "Hola David, ¿qué has estado haciendo?",
                remitente: "Miguel Salinas",
            },
            {
                fechaEnvio: "2023-10-27 14:05:00",
                mensaje: "Hola Miguel, estuve trabajando en mi proyecto. ¿Tú?",
                remitente: "David Gómez",
            },
            {
                fechaEnvio: "2023-10-27 14:10:00",
                mensaje: "Yo también ocupado con el trabajo. ¡Sigamos esforzándonos!",
                remitente: "Miguel Salinas",
            },
        ]
    },
    {
        userId: 7,
        conversacion: [
            {
                fechaEnvio: "2023-10-27 15:30:00",
                mensaje: "Hola Elena, ¿cómo te ha ido hoy?",
                remitente: "Miguel Salinas",
            },
            {
                fechaEnvio: "2023-10-27 15:35:00",
                mensaje: "Hola Miguel, hoy fue un día ocupado en la oficina. ¿El tuyo?",
                remitente: "Elena Torres",
            },
            {
                fechaEnvio: "2023-10-27 15:40:00",
                mensaje: "Lo mismo por aquí, mucho trabajo. ¡Ánimo!",
                remitente: "Miguel Salinas",
            },
        ]
    },
    {
        userId: 8,
        conversacion: [
            {
                fechaEnvio: "2023-10-27 16:15:00",
                mensaje: "Hola Sofía, ¿cómo te va?",
                remitente: "Miguel Salinas",
            },
            {
                fechaEnvio: "2023-10-27 16:20:00",
                mensaje: "¡Hola Miguel! Estoy bien, gracias. ¿Y tú?",
                remitente: "Sofía Ramírez",
            },
            {
                fechaEnvio: "2023-10-27 16:25:00",
                mensaje: "Todo va bien, gracias. ¿Qué planes tienes para el fin de semana?",
                remitente: "Miguel Salinas",
            },
        ]
    },
    {
        userId: 9,
        conversacion: [
            {
                fechaEnvio: "2023-10-27 17:00:00",
                mensaje: "Hola Pablo, ¿qué tal estás?",
                remitente: "Miguel Salinas",
            },
            {
                fechaEnvio: "2023-10-27 17:05:00",
                mensaje: "¡Hola Miguel! Estoy bien, gracias. ¿Cómo va todo contigo?",
                remitente: "Pablo Martín",
            },
            {
                fechaEnvio: "2023-10-27 17:10:00",
                mensaje: "Todo en orden, ocupado con el trabajo. ¿Y tú?",
                remitente: "Miguel Salinas",
            },
        ]
    },
    {
        userId: 10,
        conversacion: [
            {
                fechaEnvio: "2023-10-27 18:30:00",
                mensaje: "Hola Carmen, ¿cómo ha sido tu día?",
                remitente: "Miguel Salinas",
            },
            {
                fechaEnvio: "2023-10-27 18:35:00",
                mensaje: "Hola Miguel, bien, gracias. ¿El tuyo?",
                remitente: "Carmen Rodríguez",
            },
            {
                fechaEnvio: "2023-10-27 18:40:00",
                mensaje: "Ocupado, pero bien. ¿Tienes planes para el fin de semana?",
                remitente: "Miguel Salinas",
            },
        ]
    },
    {
        userId: 11,
        conversacion: [
            {
                fechaEnvio: "2023-10-27 19:15:00",
                mensaje: "Hola Diego, ¿cómo estás?",
                remitente: "Miguel Salinas",
            },
            {
                fechaEnvio: "2023-10-27 19:20:00",
                mensaje: "¡Hola Miguel! Todo bien por aquí. ¿Qué novedades hay?",
                remitente: "Diego Sánchez",
            },
            {
                fechaEnvio: "2023-10-27 19:25:00",
                mensaje: "Nada nuevo, solo trabajo y rutina. ¿Tú?",
                remitente: "Miguel Salinas",
            },
        ]
    },
    {
        userId: 12,
        conversacion: [
            {
                fechaEnvio: "2023-10-27 20:00:00",
                mensaje: "Hola Isabel, ¿cómo te ha ido hoy?",
                remitente: "Miguel Salinas",
            },
            {
                fechaEnvio: "2023-10-27 20:05:00",
                mensaje: "Hola Miguel, día ocupado, pero todo bien. ¿El tuyo?",
                remitente: "Isabel López",
            },
            {
                fechaEnvio: "2023-10-27 20:10:00",
                mensaje: "Lo mismo por aquí, mucho trabajo. ¡Ánimo!",
                remitente: "Miguel Salinas",
            },
        ]
    },]
    localStorage.setItem('chats', JSON.stringify(defaultChats))  
}

/* Obtener fecha actual */
export function currentDate() {
    const fecha = new Date()

    let year = fecha.getFullYear()
    let month = fecha.getMonth() + 1
    let day = fecha.getDate()
    let hour = fecha.getHours()
    let minute = fecha.getMinutes()
    let second = fecha.getSeconds()

    minute = minute < 10 ? "0" + minute : minute
    day = day < 10 ? "0" + day : day
    month = month < 10 ? "0" + month : month

    const formattedDate = year + '-' + month + '-' + day + " " + hour + ':' + minute + ':' + second
    return formattedDate;
}

/* iterar lista de usuarios y mostrarlos */
export function mostrarUsuario(usuarios, lista) {
    lista.innerHTML = ""
    for (let i = 0; i < usuarios.length; i++) {
        const name = usuarios[i].userName;
        const id = usuarios[i].userId;
        const usuario = document.createElement("li");
        const contenedorImagen = document.createElement("div");
        contenedorImagen.classList.add("user_container_img");
        usuario.id = id;
        const imagen = document.createElement("img");
        const nombre = document.createElement("h3");
        nombre.textContent = name;
        imagen.setAttribute("src", "https://robohash.org/" + (i + 1));

        lista.appendChild(usuario);
        usuario.append(contenedorImagen, nombre);
        contenedorImagen.appendChild(imagen);
    }
}

/* Mostrar la conversacion del usuario seleccionado */
export function conversationItem(element, conversations, id) {
    element.innerHTML = ""
    conversations.forEach(conversation => {
        const li = document.createElement("li")
        const message_body = document.createElement("div")
        const message_head = document.createElement("div")
        const contenedorImagen = document.createElement("div")
        const imagenUsuario = document.createElement("img")
        const fecha = document.createElement("span")
        const nombreUsuario = document.createElement("h4")
        const message = document.createElement("p")

        let reverse = conversation.remitente === "Miguel Salinas"
        li.classList.add("message_item", reverse && 'reverse')

        message_body.classList.add("message_body",)
        message_head.classList.add("message_head")
        contenedorImagen.classList.add("message_img_container")
        message.classList.add("message")

        imagenUsuario.src = reverse ? "https://robohash.org/200" : `https://robohash.org/${id} `
        imagenUsuario.alt = "user image"
        fecha.textContent = conversation.fechaEnvio
        nombreUsuario.textContent = reverse ? "Yo" : conversation.remitente
        message.textContent = conversation.mensaje

        contenedorImagen.appendChild(imagenUsuario);
        message_head.append(fecha, nombreUsuario)
        message_body.append(message_head, message)
        li.append(message_body, contenedorImagen)
        element.appendChild(li)
    })

}