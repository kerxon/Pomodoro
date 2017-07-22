import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { MdButtonModule, MdToolbarModule, MdCardModule, MdGridListModule } from '@angular/material';
import { MdProgressSpinnerModule, MdInputModule, MdIconModule, MdTabsModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';
import { ProgressComponent } from './components/progress/progress.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TaskComponent } from './components/task/task.component';

import { AppService } from './app.service';
import { DataService } from './services/data.service';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'tasks', component: TaskListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ProgressComponent,
    TaskListComponent,
    DashboardComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdCardModule,
    MdGridListModule,
    MdProgressSpinnerModule,
    MdInputModule,
    FormsModule,
    MdIconModule,
    FlexLayoutModule,
    HttpModule,
    MdTabsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppService, DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
