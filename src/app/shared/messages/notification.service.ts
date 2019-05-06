import { EventEmitter } from "@angular/core";

export class NotificationService {
  notifier = new EventEmitter<any>();

  notify(message: string) {
    this.notifier.emit(message);
  }
}