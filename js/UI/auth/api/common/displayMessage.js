export function displayMessage (container, messageType,message){
const parent = document.querySelector(container);

parent.innerHTML = `<div class= "alert alert-${messageType}" role="alert">${message}</div>`
}

