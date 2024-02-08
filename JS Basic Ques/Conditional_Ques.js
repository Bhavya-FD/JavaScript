// Question31
function printLoop() {
    for (let i = 972; i >= 897; i--) {
        console.log(i);
    }
}

// Question32
function factorial(num) {
    if (num == 0 || num == 1) {
        return 1;
    }
    for (let i = 1; i <= 10; i++) {
        console.log(i*=i);
    }
}