let users = [
    { surname: "Teszt", firstname: "Elek", age: 55 },
    { surname: "Gaz", firstname: "Ella", age: 37 },
    { surname: "Fa", firstname: "Jankó", age: 22 },
    { surname: "Bor", firstname: "Virág", age: 40 },
    { surname: "Bél", firstname: "Flóra", age: 51 },
    { surname: "Vaj", firstname: "Ákos", age: 47 },
    { surname: "Fél", firstname: "Áron", age: 25 },
    { surname: "Para", firstname: "Zita", age: 27 }
];

let tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
}

let createButtonGroup = parent => {
    let group = document.createElement("div");
    group.className = "btn-group";
    
    let btnInfo = document.createElement("button");
    btnInfo.className = "btn-info btn";
    btnInfo.innerHTML = '<i class="fa fa-refresh"></i>';

    let btnDanger = document.createElement("button");
    btnDanger.className = "btn-danger btn";
    btnDanger.innerHTML = '<i class="fa fa-trash"></i>';
}

for (let k in users) {
    let tr = document.createElement("tr");
   createTD(parseInt(k)+1, tr);
   for (let value of Object.values(users[k])){
   createTD(value, tr);
   }
   createButtonGroup(tr);
    tableBody.appendChild(tr);
}


/*
{surname: "Eleo", firstname: "Nóra", age: 30},
{surname: "Szem", firstname: "Eszter", age: 35},
{surname: "Jár", firstname: "Tas", age: 39},
{surname: "Eled", firstname: "Elek", age: 48},
{surname: "Vak", firstname: "Ond", age: 33},
{surname: "Tiszt", firstname: "Előd", age: 44},
{surname: "Meg", firstname: "Győző", age: 51},
{surname: "Utó", firstname: "Pista", age: 35},
{surname: "Hara", firstname: "Mia", age: 25},
{surname: "Mák", firstname: "Virág", age: 45}

*/

