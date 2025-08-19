let balance = 2000;

function deposit() {
  let amount = parseInt(document.getElementById("amount").value);
  if (amount > 0) {
    balance += amount;
    document.getElementById("message").innerText = `✅ Deposited $${amount}`;
    updateBalance();
  } else {
    document.getElementById("message").innerText = "❌ Enter a valid amount";
  }
}

function withdraw() {
  let amount = parseInt(document.getElementById("amount").value);
  if (amount > 0 && amount <= balance) {
    balance -= amount;
    document.getElementById("message").innerText = `💰 Withdrew $${amount}`;
    updateBalance();
  } else if (amount > balance) {
    document.getElementById("message").innerText = "⚠️ Insufficient balance";
  } else {
    document.getElementById("message").innerText = "❌ Enter a valid amount";
  }
}

function checkBalance() {
  document.getElementById("message").innerText = `💵 Current Balance: $${balance}`;
}

function updateBalance() {
  document.getElementById("balance").innerText = `Current Balance: $${balance}`;
  document.getElementById("amount").value = "";
}
