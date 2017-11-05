import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const materialModules = [
  BrowserAnimationsModule,
  MatButtonModule,
  MatListModule,
  MatInputModule,
  MatIconModule,
  MatMenuModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialComponentsModule {
}
