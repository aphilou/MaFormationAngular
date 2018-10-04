import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

const url = 'https://gist.githubusercontent.com/SiamKreative/f1074ed95507e69d08a0/raw/bbf2c9dbb156eef1cebf37c8846331f3f3493fa6/french-regions-departments.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  beforeSubmit: boolean = true;
  firstname: string = '';
  email = '';
  region: string = undefined;
  age: number;
  regions: string[];
  departments: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(url).delay(2000).subscribe({
      next: data => {
        this.regions = Object.keys(data['regions']);
        const depts = Object.keys(data['departments']);
        const tr = n => n === '2a' ? 20.5 : n === '2b' ? 20.6 : +n;
        this.departments = depts.map(n => ({
          name: data['departments'][n].name,
          id: n
        })).sort((a, b) => Math.sign(tr(a.id) - tr(b.id)));
        console.log('this.departments', this.departments);
      },
      error: err => console.log('error', err),
    });
  }


  onSubmit(f: NgForm) {
    console.log('submiting the form');
    this.firstname = '';
    this.email = '';
    this.region = '';
    this.departments = null;
    this.age = undefined;
    this.beforeSubmit = false;
    f.reset();
  }

  checkValidity(f) {
    console.log('checkValidity for f', f);
    return f.invalid;
  }

  goBack() {
    this.beforeSubmit = true;
  }

}
