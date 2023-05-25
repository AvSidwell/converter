let result = document.getElementById('result');
//let input = document.getElementById('degrees');
let degreesInput = document.getElementById('degrees')
//degrees = parseFloat(degrees);

function calculation() {
    //eval works better (changing strings to numbers)
    degrees = eval(degreesInput.value);
    document.getElementById("result").innerHTML = (degrees - 32) / 1.8 + '°C';
    console.log(degrees.value);
}
let del = () => {
    document.getElementById("result").innerHTML = '';
    degreesInput.value = ''; 
}
//function ddel() {
  //  document.getElementById("degrees").innerHTML = '';
//}
//let ddel = () => {
  //  degrees.value = '';
//};