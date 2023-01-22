let enterButton = document.getElementById('enterButton');
let againButton = document.getElementById('againButton');
let output = document.getElementById('outputText');

let randomNumber = Math.ceil(Math.random()*100);

function checkNumber () {
    let input = document.getElementById('userInput').value; 
    if (input == randomNumber) {
        output.innerHTML = 'You guessed right! '+ ', '+ 'it was '+ randomNumber;
        output.style.color ='green';  

    } else if (input > randomNumber && input < 100 ) {
         output.innerHTML = 'You guessed too high(:'  
         output.style.color = 'yellow'

    } else if (input < randomNumber && input > 1) {
        output.innerHTML = 'You guessed to low(:'
        output.innerHTML.style = 'yellewgreen'

    } else if (input > 0) {
        output.innerHTML = 'Higher, it has to be between 1 and 100'
        output.innerHTML.style = 'red'

    } else if (isNaN(input)) {
        output.innerHTML = 'That is not a number!'
        output.innerHTML.style = 'red'

    } else {
        output.innerHTML = 'Low, it has to be between 1 and 100'
        output.innerHTML.style = 'red'
    }

}

 enterButton.addEventListener('click', checkNumber);
 againButton.addEventListener('click', function() {
    location.reload();
 })