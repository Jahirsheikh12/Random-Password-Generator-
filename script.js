let input = document.getElementById('text-field');

let button = document.getElementById('btn');


let AllCharacter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()?:;<=>?{}'

let length = 15;


button.addEventListener('click', () => {
    let password = '';

    while (length > password.length){

        password += AllCharacter[Math.floor(Math.random() * AllCharacter.length)]
    }

    input.value = password;
})



function copyToClipboard(){
    input.select();

    input.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(input.value);

    alert("Copied the Text " +  input.value)

}
