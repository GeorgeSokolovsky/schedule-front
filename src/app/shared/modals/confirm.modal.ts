import { Component, Input, ViewChild } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Modal } from 'ngx-modal';

@Component({
  selector: 'confirm',
  templateUrl: './confirm.modal.html'
})
export class ConfirmComponent {
  public result: Subject<boolean> = new Subject();
  public question: string;

  @ViewChild('modal') public modal: Modal;

  public show(question: string): Observable<boolean> {
    this.question = question;
    this.modal.open();

    return this.result.asObservable().first();
  }

  public onAgree(): void {
    this.modal.close();

    this.result.next(true);
  }

  public onDisagree(): void {
    this.modal.close();

    this.result.next(false);
  }
}
