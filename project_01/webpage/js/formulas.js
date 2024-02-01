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
    knownVariablesValues.push($(`#v_${element}`).val());
  });
  let = knownVariablesUnits = [];

  knownVariables.forEach((element) => {
    knownVariablesUnits.push($(`#e_${element}`).val());
  });

  // Skickar det till servern för utrökning
  socket.emit("clientToServerDataTransfer", [
    knownVariables,
    search,
    knownVariablesValues,
    knownVariablesUnits,
  ]);
}

// Tar tillbaka resultatet
socket.on("serverToClientDataTransfer", (returnValue) => {
  // Skriver ut formelns värde
  $("output").html(`<p>${returnValue}</p>`);
});
