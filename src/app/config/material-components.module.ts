import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCommonModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';

const materialModules = [
  BrowserAnimationsModule,
  MatButtonModule,
  MatListModule,
  MatInputModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCommonModule,
  LayoutModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialComponentsModule {
}
