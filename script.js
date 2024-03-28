function sortAscending() {
  let inputArray = document
    .getElementById("arrays")
    .value.split(",")
    .map((item) => Number(item.trim()));
  let sortedArray = inputArray.sort((a, b) => a - b);
  document.getElementById("sortedOutput").textContent =
    "{" + sortedArray.toString() + "}";
}

function sortDescending() {
  let inputArray = document
    .getElementById("arrays")
    .value.split(",")
    .map((item) => Number(item.trim()));
  let sortedArray = inputArray.sort((a, b) => b - a);
  document.getElementById("sortedOutput").textContent =
    "{" + sortedArray.toString() + "}";
}
