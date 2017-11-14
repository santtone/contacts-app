import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCommonModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatSidenavModule,
  MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';

const materialModules = [
  MatButtonModule,
  MatListModule,
  MatInputModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCommonModule,
  MatSlideToggleModule,
  LayoutModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialComponentsModule {
}
