console.log("PayFlow Demo");

function generateReceipt() {
  const id = "PF-" + Date.now();
  localStorage.setItem("receipt", id);
}
