let frase = `Sto imparando Javascript`; 

document.getElementById('maiuscola').innerHTML = frase.toUpperCase(); 
// con toUpperCase() facciamo in modo che la frase nella let "frase", venga stampata tutta in maiuscolo

document.getElementById('minuscola').innerHTML = frase.toLowerCase();
// con toLowerCase() facciamo in modo che la frase nella let "frase", venga stampata tutta in minuscolo

document.getElementById('strArray').innerHTML = frase.split('');
// con split('') vengono aggiunti dei separatori tra le lettere che compongono la frase, precisamente delle virgole.

document.getElementById('estraiCaratteri').innerHTML = `${frase.trim().charAt(2)}${frase.trim().charAt(1)}${frase.trim().charAt(14)}${frase.trim().charAt(18)}`;
// con ${frase.trim().charAt(2)} vengono contati i caratteri sempre partendo da 0. In base al numero scritto tra le parentesi () di charAt, viene stampata la lettera corrispondente per tutta la lunghezza della stringa. 

document.getElementById('concatena').innerHTML = frase.concat(' JS');
// con frase.concat(' JS') andiamo a dire che dopo la stringa presa da "frase", deve aggiungere (concatenare), quello che viene passato dentro le parentesi, ovvero "JS"

document.getElementById('estraiStringa').innerHTML = frase.slice(5, 9);
// con slice(5, 9) andiamo a dire al codice che vogliamo che venga stampato a video solo una parte della stringa, e precisamente quella racchiusa tra il n.5 ed il n.9, ed il frammento che viene fuori della frase è "mpar", ovvero dalla 5 lettera (ricordando di partire da zero), fino alla nona. 

// ---------------------------------------------------------------------------

const arrayNomi = ['Giovanni', 'Carla', 'Piero', 'Mirtilla']; 

document.getElementById('array').innerHTML = arrayNomi;
//viene stampato tutto l'array

document.getElementById('lunghezza').innerHTML = arrayNomi.length; 
//con length viene stampato il numero che indica la "lunghezza" (di quante voci è composto) in totale l'array preso in esame. 

document.getElementById('elemento').innerHTML = arrayNomi [2];
document.getElementById('ultimo').innerHTML = arrayNomi[3];
//partendo sempre da 0, con [] dopo arrayNomi, diciam che vogliamo visualizzare l'elemento che corrisponde al numero 2 (che è il terzo nella lista, in quanto la lista parte con il contare il primo elmento come 0). Stessa cosa per l'elemento di sotto. 

arrayNomi[2] = 'Massimo';
document.getElementById('modificato').innerHTML = arrayNomi;

//nel primo passaggio è stato sostitutio nella posizione n.2 (ovvero al 3), Piero con Massimo. Poi è stato ristampato compeltamente l'array. 

// ---------------------------------------------------------------------------

function eta() {
    return function() {
        const anni = [21,32,35,4,12];
        document.getElementById('eta1').innerHTML += `${anni[0]} anni`;
        document.getElementById('eta2').innerHTML += `${anni[1]} anni`;
        document.getElementById('eta3').innerHTML += `${anni[2]} anni`;
        document.getElementById('eta4').innerHTML += `${anni[3]} anni`;
        document.getElementById('eta5').innerHTML += `${anni[4]} anni`;
        document.getElementById('arrayEta').innerHTML += anni;
    }
}

let anniTotali = eta(); 
anniTotali();

//abbiamo creato un array dentro una funzione, usata come argomento di una funzione, e per ogni persona abbiamo stabilito l'età, andando poi a stampare l'età. 

// ---------------------------------------------------------------------------

const arrayAnimali = ['Coniglio', 'Cane', 'Gatto', 'Criceto']; 

document.getElementById('intero').innerHTML = arrayAnimali;
//viene stampato tutto l'array

arrayAnimali.push('leone');
document.getElementById('aggiunto').innerHTML = arrayAnimali;
//con push si va ad inserire, tra le parentesi, il valore che si vuole aggiungere all'array. 

arrayAnimali.pop('leone');
document.getElementById('estratto').innerHTML = arrayAnimali;
//con pop si rimuove l'ultimo elemento inserito nell'array

document.getElementById('verifica1').innerHTML = arrayAnimali.includes('Coniglio');
//fa una verifica sull'array. Se l'array contiene un elemento con il valore tra le parentesi è true, altrimenti è false. 
document.getElementById('verifica2').innerHTML = arrayAnimali.includes('Giraffa');
