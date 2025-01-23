document.getElementById('iterativeButton').addEventListener('click', function() {
    const input = parseInt(document.getElementById('numberInput').value);
    if (isNaN(input) || input < 0) {
        document.getElementById('result').innerText = 'Please enter a valid positive integer.';
        return;
    }
    function factorialIterative(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    const result = factorialIterative(input);
    document.getElementById('result').innerText = `Factorial of ${input} (Iterative): ${result}`;
});

document.getElementById('recursiveButton').addEventListener('click', function() {
    const input = parseInt(document.getElementById('numberInput').value);
    if (isNaN(input) || input < 0) {
        document.getElementById('result').innerText = 'Please enter a valid positive integer.';
        return;
    }
    function factorialRecursive(n) {
        if (n === 0) return 1;
        return n * factorialRecursive(n - 1);
    }
    const result = factorialRecursive(input);
    document.getElementById('result').innerText = `Factorial of ${input} (Recursive): ${result}`;
});
