fetch("http://127.0.0.1:1235/users")
.then(response => response.json())
.then(data =>{
    output = ""
for(i=1;i<data.length;i++){
    output = output+`<tr>`
    output = output+`<td>${i}</td>`
    output = output+`<td>${data[i]['Mobile Name']}</td>`
    output = output+`<td>${data[i]['Brand']}</td>`
    output = output+`<td>${data[i]['Ram']}</td>`
    output = output+`<td>${data[i]['Price']} Rs</td>`
    output = output+`</tr>`
}

document.getElementById('tbody').innerHTML = output

})