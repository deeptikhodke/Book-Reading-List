document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.querySelector('.add-btn');
    const bookInput = document.querySelector('.book-input');
    const bookList = document.querySelector('.list ul');
    const alertInfo = document.querySelector('.alert-info');
    const popup = document.querySelector('.popup');
    const popupInput = document.querySelector('.popup-input');
    const acceptBtn = document.querySelector('.popup-btn.accept');
    const cancelBtn = document.querySelector('.popup-btn.cancel');
    let editBook;
  
    addBtn.addEventListener('click', addBook);
    bookList.addEventListener('click', modifyBook);
    acceptBtn.addEventListener('click', acceptEdit);
    cancelBtn.addEventListener('click', cancelEdit);
  
    function addBook() {
      if (bookInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = bookInput.value.trim();
        li.innerHTML += `
          <div class="tools">
            <button class="edit">EDIT</button>
            <button class="complete"><i class="fas fa-check"></i></button>
            <button class="delete"><i class="fas fa-times"></i></button>
          </div>
        `;
        bookList.appendChild(li);
        bookInput.value = ''; // Clear the input after adding book
        alertInfo.style.display = 'none';
      }
    }
  
    function modifyBook(e) {
      if (e.target.classList.contains('complete')) {
        e.target.closest('li').classList.toggle('completed');
      } else if (e.target.classList.contains('edit')) {
        editBook = e.target.closest('li');
        popupInput.value = editBook.firstChild.textContent.trim();
        popup.style.display = 'block';
      } else if (e.target.classList.contains('delete')) {
        const deletedBook = e.target.closest('li');
        deletedBook.remove();
        if (bookList.children.length === 0) {
          alertInfo.style.display = 'block';
        }
      }
    }
  
    function acceptEdit() {
      if (popupInput.value.trim() !== '') {
        editBook.firstChild.textContent = popupInput.value.trim();
        popup.style.display = 'none';
      }
    }
  
    function cancelEdit() {
      popup.style.display = 'none';
    }
  });
  
  
  
  
  