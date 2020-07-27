const searchBooks = document.forms['search-books'].querySelector('input');
const bookList = document.querySelector('#book-list ul');
const bookForm = document.forms['add-book'];
const hideBooks = document.querySelector('#hide');
const bookRead = document.querySelectorAll('.book-complete');
const tabs = document.querySelector('.tabs')
const panels = document.querySelectorAll('.panel')
// console.log(panels)

//delete Function
bookList.addEventListener('click', function(e) {
  if (e.target.matches('.delete')) {
    deleteBooks(e.target);
  } else if (e.target.matches('.book-complete')) {
    completeRead(e.target);
  }
});

//tabbed panels
tabs.addEventListener('click', ev => {
  if (ev.target.matches('li')) {
    const targetP = document.querySelector(ev.target.dataset.target)
    panels.forEach((panel) => {
      if (panel === targetP) {
        panel.classList.add('active')
      } else {
        panel.classList.remove('active')
      }
    })
  }
})

//tabs color
tabs.addEventListener('click', ev => {
  let tab = tabs.querySelectorAll('li')
  if (ev.target.matches('li')) {
    tab.forEach((item) => {
      if (ev.target === item) {
        item.classList.add('active')
      } else {
        item.classList.remove('active')
      }
    });
  }
});

//Book search
searchBooks.addEventListener('keyup', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const books = bookList.querySelectorAll('li');
  books.forEach((book) => {
    const title = book.querySelector('.name').textContent;
    if (title.toLowerCase().includes(searchTerm)) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
});

//hide All books
hideBooks.addEventListener('change', (ev) => {
  if (hideBooks.checked) {
    bookList.style.display = 'none';
  } else {
    bookList.style.display = 'initial';
  }
});

//delete books
function deleteBooks(ev) {
  const li = ev.parentElement;
  bookList.removeChild(li);
}

//complete read books
function completeRead(ev) {
  ev.addEventListener('change', () => {
    let title = ev.parentElement.querySelector('.name');
    if (ev.checked) {
      title.style.textDecoration = 'line-through';
      title.style.color = 'red';
    } else {
      title.style.textDecoration = 'initial';
      title.style.color = 'initial';
    }
  });
}

// add Book Function
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let text = e.target.title.value;
  let newLI = createAndAppendElement('li', bookList, null, null, undefined);
  let checkBox = createAndAppendElement('input', newLI, null, 'book-complete', (e) => {
    e.setAttribute('type', 'checkbox');
  });
  createAndAppendElement('label', newLI, null, null, (e) => {
    e.htmlFor = checkBox.className;
  });
  createAndAppendElement('span', newLI, null, 'name', (e) => {
    e.textContent = text;
  });
  createAndAppendElement('span', newLI, null, 'delete', (e) => {
    e.textContent = 'delete';
  });
  e.target.title.value = '';
});

//helper append function to doc
function createAndAppendElement(tag, parent, id, className, callback) {
  const element = document.createElement(tag);
  parent.append(element);
  if (id !== null) {
    element.id = id;
  }
  if (className !== null) {
    element.className = className;
  }
  if (callback !== undefined) {
    callback(element);
  }
  return element;
}
