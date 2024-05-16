
const form = document.getElementById('form-contact');
const newRow = document.getElementById('new-row');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    
    const newContactRow = document.createElement('div');
    newContactRow.classList.add('row');
    newContactRow.innerHTML = `
        <div class="col col-left">${name}</div>
        <div class="col col-right">${phone}</div>
    `;
    
    newRow.appendChild(newContactRow);
    
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
});