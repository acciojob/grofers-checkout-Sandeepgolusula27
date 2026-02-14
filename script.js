const getSum = () => {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach(price => {
    total += parseFloat(price.textContent);
  });

  // Remove existing total row if already added
  const existingTotal = document.querySelector(".total-row");
  if (existingTotal) {
    existingTotal.remove();
  }

  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  newRow.classList.add("total-row");

  const newCell = document.createElement("td");
  newCell.colSpan = 2; // adjust if table has more columns
  newCell.textContent = "Total Price: " + total;

  newRow.appendChild(newCell);
  table.appendChild(newRow);
};


