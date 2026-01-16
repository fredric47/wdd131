const input1 = document.querySelector('#favchap');
const button1 = document.querySelector('button');
const list1 = document.querySelector('#list'); //reference unorderd list element


button1.addEventListener('keydown', (event))

button1.addEventListener('click', function(){
    if (input1.value.trim() !== '')
    {
        const list = document.createElement('li');
        list.append(input1.value);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        
        list.append(deleteButton);
        list1.append(list);

        deleteButton.addEventListener('click', function () {
            list1.removeChild(list);
            input1.focus();
        })
        input1.value = '';
        input1.focus();
    }
    else {
        //input1.value = 'Fred was here :)'
        alert('Enter proper info')
    }
});