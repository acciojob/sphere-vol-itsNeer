function volume_sphere() {
    //Write your code here
	let radius = document.getElementById("radius");
	let volume = (4/3) * Math.PI * Math.pow(radius.value, 3);
	if(radius.value < 0 || isNaN(radius.value)) {
		document.getElementById("volume").value = 'NaN';
		return;
	} else {
		document.getElementById("volume").value = volume.toFixed(4);
	}
	
} 

window.onload = document.getElementById('MyForm').onsubmit = (e) => {
	e.preventDefault();
	volume_sphere();
};