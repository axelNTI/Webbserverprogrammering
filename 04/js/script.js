$(() => {
  $("#send").click(() => {
    postMessage({ name: $("#name").val(), message: $("#message").val() });
  });
  getMessages();
});

function addMessage(message) {
  $("#messages").append(`<h4>${message.name}</h4><p>${message.message}</p>`);
}

function getMessages() {
  $.get("http://localhost:3000/meddelanden", (data) => {
    data.forEach(addMessage);
  });
}

function postMessage(message) {
  $.post("http://localhost:3000/meddelanden", message);
}
