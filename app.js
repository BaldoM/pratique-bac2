
/*let a = document.createElement('a');
a.setAttribute('href', "#");
a.innerText = "CLIQUEZ MOI";
table.appendChild(a);
console.log(a);
*/


let table = document.querySelector('#table-mult');

for (let i = 1; i <= 12; i++) {
    let ul = document.createElement('ul');
    for (let j = 1; j <= 12; j++) {
        let li = document.createElement('li');
        li.innerText = i + ' X ' + j + ' = ' + (i * j);
        ul.appendChild(li);
    }
    table.appendChild(ul);
}


// Implémentation du coming soon


let soon = document.querySelector('#soon');
console.log(new Date(soon.getAttribute('data-date')));
let soon_content = soon.innerHTML;

let coming_soon = function () {
    let date_diff = new Date();
    soon.innerHTML = soon_content.replace("%S", date_diff.getSeconds().toString()).replace("%M", date_diff.getMinutes().toString()).replace("%H", date_diff.getHours().toString()).replace("%J", date_diff.getDate().toString());
}

setInterval(coming_soon, 1000);
