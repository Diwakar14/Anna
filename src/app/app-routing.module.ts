import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataHubComponent } from './routes/data-hub/data-hub.component';
import { DataHubRealtimeComponent } from './routes/data-hub-realtime/data-hub-realtime.component';
import { TodoComponent } from './routes/todo/todo.component';
import { StringFormatterComponent } from './routes/string-formatter/string-formatter.component';

const routes: Routes = [
  {
    path: 'data-hub',
    component: DataHubComponent,
  },
  {
    path: 'data-hub-realtime',
    component: DataHubRealtimeComponent,
  },
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: 'string-formatter',
    component: StringFormatterComponent,
  },
  {
    path: 'paginator',
    loadChildren: () =>
      import('./routes/paginator/paginator.module').then(
        (m) => m.PaginatorModule
      ),
  },
  {
    path: '**',
    redirectTo: 'data-hub',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
