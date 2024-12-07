function roller(){
    // Get the numeric value from the input field
    const num = parseInt(document.getElementById("num").value, 10);
    
    // Get the elements where the result and image will be displayed
    const result = document.getElementById("result");
    const image = document.getElementById("image");
    
    // Arrays to hold the dice roll values and the corresponding image HTML
    const values = [];
    const i_image = [];
    
    // Roll the dice and generate values and image HTML
    for(let i = 0; i < num; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        i_image.push(`<img src="image/${value}.png" alt="face ${value}">`);
    }
    
    // Display the dice values as text
    result.textContent = `Dice: ${values.join(', ')}`;
    
    // Set the innerHTML of the image container to the generated images
    image.innerHTML = i_image.join('  ');
}
