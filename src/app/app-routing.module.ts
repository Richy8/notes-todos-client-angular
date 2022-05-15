import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { ActivityAreaComponent } from './pages/activity-area/activity-area.component';
import { ManageNoteComponent } from './pages/manage-note/manage-note.component';
import { ViewNoteComponent } from './pages/view-note/view-note.component';

const routes: Routes = [
  {path: "", component:BaseLayoutComponent, children: [
    {path: "", redirectTo: 'today', pathMatch:'full'},
    {path: "today", component:ActivityAreaComponent},
    {path: "upcoming", component:ActivityAreaComponent},
    {path: "yesterday", component:ActivityAreaComponent},
    {path: "project", component:ActivityAreaComponent},
    {path: "manage-note", component:ManageNoteComponent},
    {path: "view-note", component:ViewNoteComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
