import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotificationsRoutingModule } from './notifications-routing.module';
import { ReceiverComponent } from './receiver/receiver.component';
import { SenderComponent } from './sender/sender.component';

@NgModule({
  declarations: [SenderComponent, ReceiverComponent],
  imports: [CommonModule, NotificationsRoutingModule, FormsModule]
})
export class NotificationsModule {}
