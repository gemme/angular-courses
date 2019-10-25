import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  students: Array<any> = [];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudents()
      .then(students => {
        console.log('students', students);
        this.students = students
      })
      .catch(err => console.log('this is my error', err));
  }

  getStudents() {
    return this.studentService.getStudents();
  }
}
