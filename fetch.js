function gomb(){
    var keres =document.getElementById("kereseszo").value
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'cf004b13camsh20135cfc43f9e76p1bc254jsn8087a48cccc2',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q='+keres, options)
    .then(response => response.json())
    .then(response => kiir(response))
    .catch(err => console.error(err));

}
function kiir(response){
var db=1


if (response.d.length == 0) {
document.getElementById("talalat").innerHTML="Nincs találat"
}
else{
console.log(response)
for (const elem of response.d) {
    console.log(elem.l)
    var div= document.createElement("div")
    document.getElementById("talalat").appendChild(div)
    div.style.border="1px solid blue"
    var kep= document.createElement("img")
    div.appendChild(kep)
    kep.src= elem.i.imageUrl
    kep.style.width ="200px"
    var p1= document.createElement("p")
    div.appendChild(p1)
    p1.innerHTML =+db+". Találat: "+ elem.l
    db++
    var p2= document.createElement("p")
    div.appendChild(p2)
    p2.innerHTML=elem.s
    var p3= document.createElement("p")
    div.appendChild(p3)
    p3.innerHTML=" Értékelés: "+elem.rank
    var p4= document.createElement("p")
    div.appendChild(p4)
    if (typeof elem.y == "undefined"){
    p4.innerHTML=" Év: Nincs adat"
    }
    else{
    p4.innerHTML=" Év: "+elem.y
    }
    div.style.textAlign= "center"
    p1.style.fontSize="30px"
    p2.style.fontSize="15px"
    p3.style.fontStyle="italic"
    div.style.marginBottom ="20px"
    div.style.marginTop="20px"
    
}
}
}