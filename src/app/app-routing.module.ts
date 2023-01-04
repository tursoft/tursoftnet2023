import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Notfound404Component } from './pages/notfound404/notfound404.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project/project.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'project/:id', component: ProjectComponent },
  { path: 'education/:id', component: EducationComponent },
  { path: 'experience/:id', component: ExperienceComponent },
  { path: '404', component: Notfound404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
