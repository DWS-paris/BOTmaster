import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

// Importer les composants
import { HalComponent } from './hal.component'

@NgModule({
  exports: [ HalComponent ],
  declarations: [ HalComponent ],
  imports: [ CommonModule ]
})

export class HalModule { }