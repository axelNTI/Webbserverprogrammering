let socket = io();

$(() => {
  $("#send").click(() => {
    postMessage({ name: $("#name").val(), message: $("#message").val() });
    $("#name").val("");
    $("#message").val("");
  });
  getMessages();
});

socket.on("message", addMessage);

function addMessage(message) {
  $("#messages").prepend(`<h4>${message.name}</h4><p>${message.message}</p>`);
}

function getMessages() {
  $.get("http://localhost:3000/meddelanden", (data) => {
    data.forEach(addMessage);
  });
}

function postMessage(message) {
  $.post("http://localhost:3000/meddelanden", message);
}
