function checkOnclickEvent() {

}

var list = document.getElementById('list'),
    button = document.getElementById('addElem');

button.addEventListener('click', function() {
    var element = document.createElement('li');
    element.innerHTML = 'item '+ element.getElementsByTagName("li").length;
    list.appendChild(element);
      
});