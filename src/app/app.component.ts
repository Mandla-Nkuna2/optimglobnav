import { Component } from '@angular/core';

import { FormBuilder, FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export const _filter = (opt: any[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter((item) => item.name.toLowerCase().includes(filterValue));
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: any[] = [];

  projectsForm = this._formBuilder.group({
    searchInput: '',
  });

  projects!: Observable<any[]>;
  serverUrl = 'http://localhost:3000/projects';

  constructor(private http: HttpClient, private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.getData().then(() => {});
  }

  async getData() {
    this.http.get(this.serverUrl).subscribe((data: any) => {
      this.data = data;
      this.projects = this.projectsForm.get('searchInput')!.valueChanges.pipe(
        startWith(''),
        map((value) => this._filterGroup(value || ''))
      );
    });
  }

  private _filterGroup(value: string): any[] {
    if (value) {
      return this.data
        .map((project) => ({
          name: project.name,
          groups: _filter(project.groups, value),
        }))
        .filter((project) => project.groups.length > 0);
    }
    return this.data;
  }
}
