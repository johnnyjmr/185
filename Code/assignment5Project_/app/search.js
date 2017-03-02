/*Johnny Mendoza
 Andy Lila
 Friday February 17

 the code wil highlight the text from he search box
 */
document.getElementById('searchBox').addEventListener('keydown', function (event) {
    // A keyCode of 13 means that the ENTER key was pressed.
    // You don't need to do anything until ENTER is pressed.
    if (event.which === 13 || event.keyCode === 13) {

        // Get the text that the user entered.
        var searchText = this.value.toLowerCase();

        var menu = document.querySelectorAll('span, dd, dt, h1, h2, label')

        highlight(menu, searchText);


    }
});

function highlight(node, searchText) {

    for (i = 0; i < node.length; i++) {
        if (node[i].style.backgroundColor === 'yellow')
            node[i].style.backgroundColor = 'white';

        console.log(node[i].textContent);
        if (node[i].textContent.toLowerCase() === searchText.toLowerCase()) {
            console.log(node[i].tagName);
            node[i].style.backgroundColor='yellow';
        }


    }


}




