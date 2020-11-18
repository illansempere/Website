const courseList = [ 
    course1 = {
        "code": "ACIT 1515",
        "name": "Scripting for IT"
    },
    course2 = {
        "code": "COM 1116",
        "name": "Business Communications"
    },
    course3 = {
        "code": "ACIT 1620",
        "name": "Web Fundamental Technologies"
    }];

let number;
do{
    number = prompt("Enter your course code: ");
}
while (isNaN(Number(number)) || number.length !== 4);
    for (let courses of courseList) {
        if (number === courses.code.substring(5,9)) {
            console.log(`Yes I am taking the course: ${courses.code} - ${courses.name}`);
        } else {
            courseList.push(course4 = {"code": `"${number}"`, "name": "null"});
        }
    }
