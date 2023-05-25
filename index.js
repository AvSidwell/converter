let result = document.getElementById('result');
//let input = document.getElementById('degrees');
let degrees = document.getElementById('degrees')
//degrees = parseFloat(degrees);

function calculation() {
    //eval works better (changing strings to numbers)
 degrees = eval(degrees.value);
 
    // result = (degrees -32 Math.pow(height / 100, 2)).toFixed(1);
    // document.getElementById("result").innerHTML = (degrees - 32) / 1.8;

    document.getElementById("result").innerHTML = (degrees - 32) / 1.8 +  ' °C';
}