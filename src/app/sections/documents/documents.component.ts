import { Component } from '@angular/core';
import { NotificationsService, SimpleNotificationsComponent } from 'angular2-notifications';

@Component({
  selector: 'documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  constructor( private _service: NotificationsService ) {}

  public title: string = 'Проверка';
  public content: string = 'Проверка на примере (№)';
  public type: string = '';

  public options = {
    timeOut: 5000,
    lastOnBottom: true,
    clickToClose: true,
    maxLength: 0,
    maxStack: 7,
    showProgressBar: true,
    pauseOnHover: true,
    preventDuplicates: false,
    preventLastDuplicates: 'visible',
    rtl: false,
    animate: 'scale',
    position: ['right', 'bottom']
  };

  create() {
    switch (this.type) {
      case 'success':
        let a = this._service.success(this.title, this.content);
        break;
      case 'alert':
        this._service.alert(this.title, this.content);
        break;
      case 'error':
        this._service.error(this.title, this.content);
        break;
      case 'info':
        this._service.info(this.title, this.content);
        break;
      case 'bare':
        this._service.bare(this.title, this.content);
        break;
    }
  }

  success(){
    this._service.success(this.title, this.content, this.type);
  }

  alert(){
    this._service.alert(this.title, this.content, this.type);
  }

  error(){
    this._service.error(this.title, this.content, this.type);
  }

  removeAll() { 
    this._service.remove();
  }
}