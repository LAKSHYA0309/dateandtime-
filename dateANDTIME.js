function displayDateTime() {
    var dat = new Date();
    var datetime = document.getElementById("datetime");
    datetime.textContent = dat.toLocaleString();
}

// Call the function when the page loads
displayDateTime();
