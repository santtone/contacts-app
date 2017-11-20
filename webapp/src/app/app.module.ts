import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import {CovalentCommonModule, CovalentLayoutModule} from '@covalent/core';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {ToolbarService} from './toolbar/toolbar.service';
import { SettingsComponent } from './settings/settings.component';

import {caRoutes} from './config/route-config';
import { ContactAddressPipe } from './contact/pipes/contact-address.pipe';
import { MapComponent } from './map/map.component';
import { MapLayoutCardComponent } from './map/map-layout-card/map-layout-card.component';
import { SafeUrlPipe } from './utils/safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDetailsComponent,
    ToolbarComponent,
    SettingsComponent,
    ContactAddressPipe,
    MapComponent,
    MapLayoutCardComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(caRoutes),
    MaterialComponentsModule,
    FlexLayoutModule,
    FormsModule,
    CovalentLayoutModule,
    CovalentCommonModule
  ],
  providers: [ContactService, ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
