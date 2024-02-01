let socket = io();

// Hanterar input och output på sidan. Kallas när "Beräkna"-knappen trycks.
function main() {
  // Skapar en lista av alla kända storheter.
  let knownVariables = [...$("input[type=checkbox]:checked")].map((x) =>
    $(x).val()
  );

  // Sökta storheten
  const search = $("input[name=search]:checked").val();

  let = knownVariablesValues = [];

  knownVariables.forEach((element) => {
    knownVariablesValues.push($(`v_${element})`).val());
  });
  console.log(knownVariablesValues);

  // Skickar det till servern för utrökning
  socket.emit("clientToServerDataTransfer", [knownVariables, search]);
}

// Tar tillbaka resultatet
socket.on("serverToClientDataTransfer", (returnValue) => {
  // Skriver ut formelns värde
  $("output").text(returnValue);
});
