const class07Students = [];
function addStudentToClass(studentName) {
  if ( class07Students.length==6 && studentName.toLowerCase() != "queen" ){
    alert( "Cannot add more students to class 07");
  }
  else if (class07Students.includes(studentName) || studentName.length == 0 ){
    alert("The student name is already exist!! or The you did not enter a name.");
  }
  else {
    return class07Students.push(studentName);}
}

function getNumberOfStudents() {
    return class07Students.length;
}