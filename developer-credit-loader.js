
// Load developer credit into header and footer
fetch('credit.html')
  .then(response => response.text())
  .then(data => {
    const top = document.getElementById('credit-top-placeholder');
    const bottom = document.getElementById('credit-bottom-placeholder');
    if (top) top.innerHTML = data;
    if (bottom) bottom.innerHTML = data;
  });
