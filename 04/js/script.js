$(() => {
    $("#send").click(() => {
      addMessage({name: "Axel", content: "Ost"})
    });
    getMessages()
});

function addMessage(message) {
  $("#messages").append(`<h4>${message.name}</h4><p>${message.content}</p>`);
}

function getMessages() {
    $.get("http://localhost:3000/meddelanden", (data) => {
        data.forEach(addMessage);
    });
}