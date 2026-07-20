function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}


let student1 = new Student();
let student2 = new Student();
let student3 = new Student();


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (!this.marks) {
        return 0;
    }

    this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
  
  if (!this.marks || this.marks.length === 0) {
    return 0
  }

  return this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;

  this.excluded = reason;
}
