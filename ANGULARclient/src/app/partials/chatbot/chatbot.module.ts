import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importer les composants
import { ChatbotComponent } from './chatbot.component';
import { RecastService } from '../../services/recast.service'

@NgModule({
  exports: [ ChatbotComponent ],
  declarations: [ ChatbotComponent ],
  imports: [ CommonModule, FormsModule ],
  providers: [ RecastService ]
})

export class ChatbotModule {}