import { Component } from '@angular/core';
import { NotificationsService, SimpleNotificationsComponent } from 'angular2-notifications';

@Component({
  selector: 'documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  constructor( private notificationsService: NotificationsService ) {}

  public title: string = 'Проверка';
  public content: string = 'Проверка на примере (№)';
  public type: string = '';

  create() {
    switch (this.type) {
      case 'success':
        this.notificationsService.success(this.title, this.content);
        break;
      case 'alert':
        this.notificationsService.alert(this.title, this.content);
        break;
      case 'error':
        this.notificationsService.error(this.title, this.content);
        break;
      case 'info':
        this.notificationsService.info(this.title, this.content);
        break;
      case 'bare':
        this.notificationsService.bare(this.title, this.content);
        break;
    }
  }

  success(){
    this.notificationsService.success(this.title, this.content, this.type);
  }

  alert(){
    this.notificationsService.alert(this.title, this.content, this.type);
  }

  error(){
    this.notificationsService.error(this.title, this.content, this.type);
  }

  removeAll() { 
    this.notificationsService.remove();
  }
}