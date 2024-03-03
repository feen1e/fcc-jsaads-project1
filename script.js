const checkButton = document.querySelector("#check-btn");
const userInput = document.querySelector('#text-input');

function palindromeChecker() {
    const usersString = document.querySelector("#text-input").value;
    const resultText = document.querySelector("#result");
    resultText.style.margin = '2rem 0 1rem';
    resultText.style.padding = '1rem 0 0';
    if (!usersString) {
        resultText.innerHTML = "Please input text to check.";
    } else {
        const removedNonAlphanumeric = () => usersString.toLowerCase().match(/([^\u0000-\u007F]|[a-zA-Z0-9])+/g).join('');
        const isPalindrome = () => removedNonAlphanumeric() === removedNonAlphanumeric().split('').reverse().join('');
        if (isPalindrome()) {
            resultText.innerHTML = `<b>${usersString}</b> is a palindrome.`;
        } else {
            resultText.innerHTML = `<b>${usersString}</b> is not a palindrome.`;
        }
        document.querySelector('#text-input').value = "";
    }
}
// margin: 2rem 0 1rem;
//     padding: 1rem 0 0;
checkButton.addEventListener('click', () => {
    palindromeChecker();
});

userInput.addEventListener('keydown', (key) => {
    if (key.key === 'Enter') {
        palindromeChecker();
    }
})