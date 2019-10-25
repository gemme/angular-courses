import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-student',
  templateUrl: './data-student.component.html',
  styleUrls: ['./data-student.component.scss']
})
export class DataStudentComponent implements OnInit {

  studentId: number;
  studentData: any = {};
  form: FormGroup;
  isChanged: boolean;

  constructor(private studentService: StudentService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(({studentId}) => {
      console.log('activatedRoute', studentId);
      this.studentId = studentId;
    });
   }

  ngOnInit() {
    this.formInit();
    this.getStudentData();
  }

  formInit(){
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      website: new FormControl('', Validators.required),
    });
  }

  getStudentData(){
    this.studentService.getStudentData(this.studentId)
      .then(studentData => {
        this.studentData = studentData;
        this.form.patchValue(studentData);
      })
      .catch(err => console.error('error', err));

  }

  updateForm(){
    console.log('updateForm', this.form);
    if(this.form.valid){
      const data = this.form.getRawValue();
      console.log('form valido', data, this.form);
    }else{
      console.log('form invalido');
    }
  }

  clean() {
    this.form.patchValue(this.studentData);
  }
}
