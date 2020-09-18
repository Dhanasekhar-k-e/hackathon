
var x = document.getElementsByTagName("td")
var arr = String(x).split(' ')

for(var i = 0; i < x.length; i++){
    var button = document.createElement("button")
    button.innerHTML = "add to Revvsales"
    button.style="background-color:#66ffff;border-radius:5px;"
    if(x[i].innerHTML.indexOf(".docx") !== -1) {
        var link  = x[i].getElementsByTagName("a")
        for(var j = 0; j < link.length; j++){
            if(link[j].innerHTML.indexOf("View as HTML") !== -1){
                link[j+1].appendChild(button)
                console.log(link[j+1])
                break
            }
           break    
        }
        
        }
}
    
    
