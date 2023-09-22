let largeTextArea = document.getElementById("largeTextArea");

function showAlert() {
    alert("Hello world!");
    largeTextArea.style.fontSize = "1.5em"; //Have to do 24pt, but converts to abt 1.5em
}

//When moo is clicked, everything is capitalized and Moo is added to the last word of each sentence
function mooFunc() {
    largeTextArea.value = largeTextArea.value.toUpperCase();

    let text = largeTextArea.value;

    //Step 1
    let parts = text.split(".");    //An array of split sentences

    /*Example 

        Input = "The fox jumps over the hill. It ran really fast."

        1). Split sentences -> 
                -The fox jumps over the hill.
                -It ran really fast.
        
        2). Split each sentence into words to find the last word
                -The fox jumps over the hill.
                    The
                    fox
                    jumps
                    etc...
                -It ran really fast.
                    It
                    ran
                    really
                    etc...
        3). Add "Moo" to end of each word in each sentence


    */

    //Loop through each sentence
    for (let i = 0; i < parts.length - 1; i++) {
        //Each sentence split into words -> Step 2
        let words = parts[i].split(" ");    //An array of split words of ONE sentence

        //Add "-Moo" to the last word -> Step 3
        if (words.length > 0) {
            words[words.length - 1] += "Moo";
        }

        //Join the words back together to form the modified sentence
        parts[i] = words.join(" ");
    }

    //Join the sentences back with periods and update the textarea
    largeTextArea.value = parts.join(".");
}


function changeFont(style) {
    alert("Changed the style!");

    if (style === "bold") {
        /*Using in line CSS to change style when fancy button is clicked*/
        largeTextArea.style.fontWeight = "bold";
        largeTextArea.style.color = "blue";
        largeTextArea.style.textDecoration = "underline";
    } else {
        largeTextArea.style.fontWeight = "normal"
        largeTextArea.style.color = "black";
        largeTextArea.style.textDecoration = "none";
    }
}

document.getElementById("biggerButton").addEventListener("click", showAlert);

document.getElementById("Moo").addEventListener("click", mooFunc);


