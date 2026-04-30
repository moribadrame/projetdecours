// Les fonctions 

function dir_bonjour(){
    document.write("Bonjour les gars" + "<br/>")
}

dir_bonjour()

function somme(a, b){
    document.write(a + b + "<br/>")
}
somme(10, 20)

function puissance(a, n){
    return a**n 
}

document.write(puissance(5, 2)+ "<br/>")