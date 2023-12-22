// const list = document.querySelector('#book-list ul');

// // delete books
// list.addEventListener('click', (e) => {
//   if(e.target.className == 'delete'){
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   }
// });



const list = document.querySelector('#book-list ul');

//delete books
list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
});

const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    
    //create elements
    const li = document.createElement('li'); //not input inside the dom yet, only created
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //append to Document
    li.appendChild(bookName); //order does matter here
    li.appendChild(deleteBtn);

    //append the list to the unorderd list (ul) in the dom
    list.appendChild(li) //the ul was selected using queryselected and asigned to list

    //add textcontent to the bookName & deletebutton
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    deleteBtn.className = 'delete'
})