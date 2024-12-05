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
