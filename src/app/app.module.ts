import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortPipe } from './pipes/sort.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterBoxComponent } from './components/filter-box/filter-box.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DataHubComponent } from './routes/data-hub/data-hub.component';
import { DataHubRealtimeComponent } from './routes/data-hub-realtime/data-hub-realtime.component';
import { TodoComponent } from './routes/todo/todo.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { StringFormatterComponent } from './routes/string-formatter/string-formatter.component';
import { JsonObjectComponent } from './routes/string-formatter/components/json-object/json-object.component';
import { XmlObjectComponent } from './routes/string-formatter/components/xml-object/xml-object.component';
import { TruncatePipe } from './routes/string-formatter/pipe/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    FilterBoxComponent,
    ToolbarComponent,
    DataHubComponent,
    DataHubRealtimeComponent,
    TodoComponent,
    StringFormatterComponent,
    JsonObjectComponent,
    XmlObjectComponent,
    TruncatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
