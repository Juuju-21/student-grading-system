function calculateGrade() {
    let mark = document.getElementById("mark").value;
    let result = document.getElementById("result");

    if (mark >= 80) {
        result.innerHTML = "Grade: A";
    } else if (mark >= 70) {
        result.innerHTML = "Grade: B";
    } else if (mark >= 60) {
        result.innerHTML = "Grade: C";
    } else if (mark >= 50) {
        result.innerHTML = "Grade: D";
    } else if (mark >= 40) {
        result.innerHTML = "Grade: E";
    } else {
        result.innerHTML = "Grade: F";
    }
}