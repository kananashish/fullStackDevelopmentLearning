let input = document.querySelector('#input-box');
let buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = 'Error';
                clearScreen();
            }  
        }
        else if(e.target.innerHTML === 'AC') {
            string = '';
            input.value = string;
        }
        else if(e.target.innerHTML === 'DEL') {
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

function clearScreen() {
    string = '0';
    setTimeout(() => {
        input.value = string;
    },2000)
}