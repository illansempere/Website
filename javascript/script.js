function createCourseArray() { 
    const courseList = [
        course1 = {
            "code": "ACIT 1515 - Scripting for IT",
            "date": "Fall 2020"
        },
        course2 = {
            "code": "COMM 1116 - Business Communications",
            "date": "Fall 2020"
        },
        course3 = {
            "code": "ACIT 1620 - Web Fundamental Technologies",
            "date": "Fall 2020"
        }];
    
    return courseList
};


function findCourse(courseList) {
let number;
do{
    number = prompt("Enter your course code: ");
}
while (isNaN(Number(number)) || number.length !== 4);
    count = 0;
    for (let courses of courseList) {
        if (courses.code.includes(number)) {
            console.log(`Yes, I am taking the course: ${courses.code}`);
            document.getElementById(number).style.backgroundColor = "green";
            break;
        } 
        count += 1
        
        if (count === 3) {
            console.log(`No, I am not taking the course ACIT-${number}.`)
            var para = document.createElement("P");
            para.innerText = `ACIT-${number}`;
            document.body.appendChild(para)
            var para2 = document.createElement("P");
            para2.innerText = "Fall 2020";
            document.body.appendChild(para2)
            var para3 = document.createElement("P");
            para3.innerText = "N/A";
            document.body.appendChild(para3)
            break;
        }

    }

}

findCourse(createCourseArray());