const form = document.querySelector('.calculator');
const displaxBox = document.querySelector('.displayBmi');
form.addEventListener('submit' , function(e) {
e.preventDefault();
const height = document.querySelector('#height').value;
const weight = document.querySelector('#weight').value;
if(height == '' || height < 0 || isNaN(height)) {
displaxBox.append(document.createTextNode('Please Enter A Valid height'));
} else if(weight == '' || weight < 0 || isNaN(weight)) {
displaxBox.append(document.createTextNode('Please Enter A Valid Weight'));
} else {
const heightInMeters = height/100;
const bmiIndex = (weight / (heightInMeters*heightInMeters)).toFixed(2);
displaxBox.append(document.createTextNode(bmiIndex));
}

})