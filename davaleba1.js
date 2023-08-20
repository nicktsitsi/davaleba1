function categorizeAge() {
    const age = prompt("Please enter your age:");

    if (isNaN(age)) {
        console.log("Invalid input. Please enter a valid number for age.");
        return;
    }

    const numericAge = parseInt(age);

    if (numericAge < 18) {
        console.log("Minor");
    } else if (numericAge >= 18 && numericAge <= 64) {
        console.log("Adult");
    } else {
        console.log("Senior");
    }
}

categorizeAge();
