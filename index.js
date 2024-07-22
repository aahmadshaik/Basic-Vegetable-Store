document.addEventListener("DOMContentLoaded", function () {
  const onionSelect = document.getElementById("onion");
  const ladiesFingerSelect = document.getElementById("ladiesFinger");
  const drumsStickSelect = document.getElementById("drumsStick");
  const totalPayElement = document.getElementById("total-pay");
  const usernameInput = document.getElementById("username");
  const payButton = document.getElementById("pay-button");
  const thankYouMessage = document.getElementById("thank-you-message");

  function calculateTotal() {
    const onionPrice = parseInt(onionSelect.value);
    const ladiesFingerPrice = parseInt(ladiesFingerSelect.value);
    const drumsStickPrice = parseInt(drumsStickSelect.value);

    const total = onionPrice + ladiesFingerPrice + drumsStickPrice;
    totalPayElement.textContent = total;
  }

  onionSelect.addEventListener("change", calculateTotal);
  ladiesFingerSelect.addEventListener("change", calculateTotal);
  drumsStickSelect.addEventListener("change", calculateTotal);

  payButton.addEventListener("click", function () {
    const username = usernameInput.value;
    const totalAmount = totalPayElement.textContent;
    if (username && totalAmount > 0) {
      thankYouMessage.textContent = `Thank you, ${username}, for shopping with us! Your total amount is ${totalAmount}.`;
    } else {
      alert("Please enter your name and select weights for all vegetables.");
    }
  });
});
