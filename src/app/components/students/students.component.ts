import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  /* students: Array<any> = []; */

  constructor() { }

  ngOnInit() {
    /* this.getStudents()
      .then(students => {
        console.log('students', students);
        this.students = students
      })
      .catch(err => console.log('this is my error', err)); */
  }

/*   getStudents() {
    return this.studentService.getStudents();
  }
  getStudentData(studentId: number) {
    return this.studentService.getStudentData(studentId);
  } */
}
