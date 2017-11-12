import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactListItemComponent} from './contact/contact-list/contact-list-item/contact-list-item.component';
import {MaterialComponentsModule} from './config/material-components.module';
import {ContactService} from './contact/services/contact.service';
import {ContactDetailsComponent} from './contact/contact-details/contact-details.component';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {CovalentLayoutModule} from '@covalent/core';
import {caRoutes} from './config/route-config';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {ToolbarService} from './toolbar/toolbar.service';
import { SettingsComponent } from './settings/settings.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDetailsComponent,
    ToolbarComponent,
    SettingsComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(caRoutes),
    MaterialComponentsModule,
    FlexLayoutModule,
    FormsModule,
    CovalentLayoutModule
  ],
  providers: [ContactService, ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
