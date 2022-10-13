var imparare = 'Sto imparando JavaScript';

document.getElementById('maiuscola').innerHTML = imparare.toUpperCase();
document.getElementById('minuscola').innerHTML = imparare.toLowerCase();
document.getElementById('strArray').innerHTML = imparare.split('');
document.getElementById('estraiCaratteri').innerHTML = `${imparare.trim().charAt(2)}${imparare.trim().charAt(1)}${imparare.trim().charAt(14)}${imparare.trim().charAt(18)}`;
document.getElementById('concatena').innerHTML = imparare.concat(' JS');
document.getElementById('estraiStringa').innerHTML = imparare.slice(5, 9);

//---------------------------------------------

const nomi = ['Giovanni','Carla','Pietro','Mirtilla'];

document.getElementById('array').innerHTML = nomi;
document.getElementById('lunghezza').innerHTML = nomi.length;
document.getElementById('elemento').innerHTML = nomi[2];
document.getElementById('ultimo').innerHTML = nomi[3];
nomi[2] = 'Massimo';
document.getElementById('modificato').innerHTML = nomi;

//---------------------------------------------

const anni = [21,32,35,4,12];

document.getElementById('eta1').innerHTML += `${anni[0]} anni`;
document.getElementById('eta2').innerHTML += `${anni[1]} anni`;
document.getElementById('eta3').innerHTML += `${anni[2]} anni`;
document.getElementById('eta4').innerHTML += `${anni[3]} anni`;
document.getElementById('eta5').innerHTML += `${anni[4]} anni`;
document.getElementById('arrayEta').innerHTML += anni;

//---------------------------------------------

const animali = ['coniglio','cane','gatto','criceto'];
document.getElementById('intero').innerHTML = animali;

animali.push('leone');
document.getElementById('aggiunto').innerHTML = animali;

animali.pop()
document.getElementById('estratto').innerHTML = animali;

document.getElementById('verifica1').innerHTML = animali.includes('coniglio');

document.getElementById('verifica2').innerHTML = animali.includes('giraffa');