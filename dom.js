console.log(document.domain)
console.log(document.URL)

//console.log(document.title)

document.title= 123
console.log(document.head)
console.log(document.body)
console.log(document.doctype)
console.log(document.all[1])
console.log(document.getElementById("items"))
var item= document.getElementsByClassName("list-group")
console.log(item)

var tag_item= document.getElementsByTagName('li')
tag_item[3].textContent= "Hello Babe"
var x = document.createElement("LI")
x.textContent= "where is it"

console.log(x)