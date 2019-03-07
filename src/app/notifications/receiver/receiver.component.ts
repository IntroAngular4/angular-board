import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationsStoreService } from '../notifications-store.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styles: []
})
export class ReceiverComponent implements OnInit {
  public notes$: Observable<any[]>;

  constructor(private notificationsStore: NotificationsStoreService) {}

  ngOnInit() {
    this.notes$ = this.notificationsStore.select$();
  }
}
