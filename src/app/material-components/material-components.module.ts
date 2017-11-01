import {NgModule} from '@angular/core';
import {MatButtonModule, MatInputModule, MatListModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const materialModules = [
  BrowserAnimationsModule,
  MatButtonModule,
  MatListModule,
  MatInputModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialComponentsModule {
}
