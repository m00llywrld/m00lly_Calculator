const calculator = document.querySelector('.calculator');
const result = document.querySelector('#result');

calculator.addEventListener('click', function(event) {
    if(!event.target.classList.contains('key')) return;
    const value = event.target.innerText;
    switch(value){
        case 'C':
            result.innerText = ''
            break;
        case '=':
            result.innerText = eval(result.innerText).toFixed(1);
            break;
            default:     result.innerText += value;
    }
});