function updateDisplay(value) {
    let display = document.querySelector('.display');
    if(display.innerText === 'Error') {
        display.innerText = value;
        return;
    }
    display.innerText = display.innerText === '0' ? value : display.innerText + value;
}
function calculate(){
    let display = document.querySelector('.display');
    try{
        let ans=eval(display.innerText);
        clearDisplay();
        updateDisplay(ans);
    }
    catch(err){
        clearDisplay();
        updateDisplay('Error');
    }
}
function clearDisplay(){
    document.querySelector('.display').innerText = '0';

}