import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  text1: string = 'ERROR';
  color: string = 'red';

  form: FormGroup = this.fb.group(
    {
      name: ['', Validators.required]
    }
  );

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  InvalidField(field: string): boolean{
    return this.form.get(field).invalid || false;
  }

  ChangeError(){
    this.text1 = Math.random().toString();
  }

  ChangeColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

}
