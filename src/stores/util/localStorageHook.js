// [DONE] Skapa en funktion som sparar data i localStorage
export function saveToLocalStorage(key, data) {
  // Omvandla "data" till en sträng och lägg i en variable
  const stringifiedData = JSON.stringify(data);
  localStorage.setItem(key, stringifiedData);
}

// [DONE] Skapa en funktion som hämtar datan från localStorage
export function getDataFromLocalStorage(key) {
  // Hämta datan från localStorage
  let returnedData = localStorage.getItem(key);

  // Omvandla den returnerade datan till en array
  returnedData = JSON.parse(returnedData);

  // Returnera den hämtade datan datan
  return returnedData || [];
}

// [DONE] Ersätt de lokala statet första gången en användare går in på sidan

// Kör spara funktionen när cart arrayen uppdateras (oavsett vad som uppdateras)

// input > [F] > output;
