let string = "";
let buttons = document.querySelectorAll(".buttons");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click", (event)=>{
        if(event.target.innerHTML == '='){
            if(string.includes("%")){
                string = string.replace("%", "*");
                string = eval(string);
                let num = parseInt(string);
                num = num / 100;
                string = num.toString();
                document.querySelector('input').value = string;
            }else{
                string = eval(string);
                document.querySelector('input').value = string;
            }
        }
        else if(event.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string;
        }
        
        else if(event.target.innerHTML == 'DEL'){
            string = string.slice(0, string.length-1);
            document.querySelector('input').value = string;
        }
        else {
            console.log(event.target)
            string = string + event.target.innerHTML
            document.querySelector('input').value = string;
        }
    })
})
// Block alphabets and symbols from being typed in input box
document.querySelector('input').addEventListener('keypress', (event) => {
    // Allow only digits (0-9), decimal point (.), and operators (+, -, *, /, %)
    const allowedKeys = '0123456789+-*/%=.'; 
    if (!allowedKeys.includes(event.key)) {
        event.preventDefault(); // Prevent the input from being added
    }
});