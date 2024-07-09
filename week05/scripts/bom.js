const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector(''); // you need to fill in the blank to reference the HTML element that is a unordered list element
const li = document.createElement('li');
const deleteButton = document.createElement('button');

li.textContent = input.value;
deleteButton.textContent = '❌';


button.addEventListener('click', function() {

    if(input.value.trim() !== ''){
        li.append(deleteButton);
        list.append(li);
    }
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
      });
    
      input.value = '';
      input.focus();
});