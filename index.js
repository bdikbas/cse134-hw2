let counter = 0;

document.getElementById("increment").addEventListener("click", () => {
    
    if(counter > 0x0b00)
    {
        console.log("your program stinks");
        alert("your program stinks")
    }
    else
    {
        counter += 0xab;
    }
});