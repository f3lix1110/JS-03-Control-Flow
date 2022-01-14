//PARTE 1

// Challenge
    const fecha = new Date();       //Obtener fecha del dia actual
    var day = fecha.getDate();    //llamamos a la funcion getdate para obetener el numero
    var hour = fecha.getHours();  //de la misma manera obtenemos la hora del dia


function businessHours(dayNumber, hourNumber){

    console.log("Day: "+dayNumber+" Hour: "+hourNumber);

    if(hourNumber>=6&&hourNumber<=18){
            console.log(true+" -> Aprobado Horario Laboral");
    }else{
        console.log(false);
    }

}

businessHours(day, hour);
console.log("-----------------------------------------------------------------------");

//PARTE 2
function getDayNumber(janFirstDayNumber, yearDayNumber){

    var yearDayNumber = parseInt(prompt("Ingresa un numero del 1 al 365: "));

    if(yearDayNumber>0&&yearDayNumber<=365){
        janFirstDayNumber=yearDayNumber%7;23

        switch(janFirstDayNumber){

        case 0: console.log("Lunes");break;

        case 1: console.log("Martes");break;

        case 2: console.log("Miercoles");break;

        case 3: console.log("Jueves");break;
            
        case 4: console.log("Viernes");break;
            
        case 5: console.log("Sabado");break;
            
        case 6: console.log("Domingo");break;

        default: console.log("ERROR");break;
        }
    
    }else{console.log("El dia debe ser menor a 365");}
}

getDayNumber();
console.log("-----------------------------------------------------------------------");

//PARTE 3
function getComercialHour(time){

    var yearDayNumber = parseInt(prompt("Ingresa un numero del 1 al 365: "));
    
    if(yearDayNumber>0&&yearDayNumber<=365){
        janFirstDayNumber=yearDayNumber%7;23

        if(janFirstDayNumber<5){        //ya que 5 y 6 serian sabado y domingo
            
            var hourNumber = 13;
            if(hourNumber>=9&&hourNumber<=18){
                console.log(true+" -> Aprobado Horario Laboral");
            }else{
                console.log(false);
                console.log("Hour: "+time+" 'no estas en horario laboral!'");
            }
        }else{
            console.log("day: "+janFirstDayNumber+" 'no estas en horario laboral!'");
        }
        
        
    
    }else{console.log("El dia debe ser menor a 365");}

}

getComercialHour(hour);
console.log("-----------------------------------------------------------------------");

