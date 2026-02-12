const input1 = document.querySelector('#favchap');
const button1 = document.querySelector('button');
const list1 = document.querySelector('#list'); //reference unorderd list element


// button1.addEventListener('keydown', (event))

button1.addEventListener('click', function(){
    if (input1.value.trim() !== '')
    {
        displayList(input1.value)
        chaptersArray.push(input1.value)
        setChapterList()
        input1.value = '';
        input1.focus();
    }
    else {
        alert('Enter proper info')
    }
});

function displayList(item) {
    const list = document.createElement('li');
    list.append(item.value);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';

    list.append(deleteButton);
    list1.append(list);

    deleteButton.addEventListener('click', function () {
        deleteChapter(deleteButton);
        list1.removeChild(list);
        item.focus();
    })
    item.value = '';
    item.focus();
};

function setChapterList() {
    localStorage.setItem('favBomChapter', JSON.stringify(chaptersArray))
};

function getChapterList() {
    return JSON.parse(localStorage.getItem('favBomChapter'));
    // const chaptersArray = [];
    // return chaptersArray;
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList()
};

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => displayList(chapter))
