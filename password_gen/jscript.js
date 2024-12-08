function generate(){

    const length = document.getElementById("num").value;
    const lower = document.getElementById("lower");
    const upper = document.getElementById("upper");
    const number = document.getElementById("number");
    const symbol = document.getElementById("symbol");
    const result = document.getElementById("result");

    const lowerchar = "abcdefghijklmnopqrstuvwxyz";
    const upperchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchar = "0123456789";
    const symbolchar = "-=`~!@#$%^&*()_+,.<>/?;:'";

    let allowchar = "";
    let password = "";

    allowchar += lower.checked ? lowerchar : "";
    allowchar += upper.checked ? upperchar : "";
    allowchar += number.checked ? numberchar: "";
    allowchar += symbol.checked ? symbolchar : "";

    if(length == 0) return `(Password lenght must be at least 1)`;
    if(allowchar.length === 0) return `(At least select one character set)`;

    for(let i=0; i<length; i++){
        const rand = Math.floor(Math.random()*allowchar.length);
        password += allowchar[rand];

    }

    result.textContent=password;
}