import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ActivityAreaComponent } from './pages/activity-area/activity-area.component';
import { ManageNoteComponent } from './pages/manage-note/manage-note.component';
import { ViewNoteComponent } from './pages/view-note/view-note.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    TopBarComponent,
    SideBarComponent,
    ActivityAreaComponent,
    ManageNoteComponent,
    ViewNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
