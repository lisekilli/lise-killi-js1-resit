var p = document.getElementsByTagName('p');
for (var i = p.length; i-- ;) {
    p[i].parentNode.appendChild(p[i]);
}