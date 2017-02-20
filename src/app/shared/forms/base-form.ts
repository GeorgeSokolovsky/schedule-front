import { FormGroup } from '@angular/forms';
import * as _ from 'lodash';

/**
 * Класс предок для всех форм, содержит вспомогательные методы, а также сам экземпляр формы
 */
export class BaseForm {
  protected form: FormGroup;

  /**
   * Заполняет форму соответственно переданному объекту
   *
   * @param {any} source
   */
  public fillFromObject(source: any) {
    if (!_.isObject(source)) {
      return;
    }

    _.forEach(source, (value: any, key: string) => {
      this.form.controls[key].setValue(value);
    });
  }
}
