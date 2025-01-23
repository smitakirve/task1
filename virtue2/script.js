// Function to calculate factorial iteratively
function factorialIterative(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Function to calculate factorial recursively
function factorialRecursive(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}

// Event listeners for buttons
document.getElementById('iterativeButton').addEventListener('click', function() {
    const number = parseInt(document.getElementById('numberInput').value);
    if (number >= 0) {
        const result = factorialIterative(number);
        document.getElementById('result').innerText = `Iterative: ${result}`;
    } else {
        alert('Please enter a valid positive integer.');
    }
});

document.getElementById('recursiveButton').addEventListener('click', function() {
    const number = parseInt(document.getElementById('numberInput').value);
    if (number >= 0) {
        const result = factorialRecursive(number);
        document.getElementById('result').innerText = `Recursive: ${result}`;
    } else {
        alert('Please enter a valid positive integer.');
    }
});
