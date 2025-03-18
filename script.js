let string = "";
let results = "";
var result = document.getElementById("result");
var operation = document.getElementById("operation");
let buttons = document.querySelectorAll('.mainButton');
var Mode_change = document.getElementById("Mode_change");

Mode_change.onclick = function()
{
    document.body.classList.toggle("light");
}


Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        
        
        
        if((e.target.value=='C'))
        {
            
            string="";
            results="";
            result.innerText=results;
            operation.innerText=string
        }
        else{
            if(e.target.value=='=')
        {
            results = eval(string);
            result.innerText=results;
        }
        if(e.target.value=="C")
        {
            results="";
            string="";
            result.innerText=results;
            operation.innerText=string
        }
        if(e.target.value=="B")
        {
            string = string.slice(0,-1);
            operation.innerText=string
        }
        else{
            string = string+e.target.value;
            operation.innerText=string
        }
        }
        
        
    })
})