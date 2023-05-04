const txtElement = ['SHOLEH RODHI PUTRA SISWANTORO'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

	if(count == txtElement.length){
		count = 0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.ketik').textContent = words;

	setTimeout(ngetik, 500);

})();