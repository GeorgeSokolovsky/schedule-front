import * as _ from 'lodash';

/**
 * Базовый класс для всех классов предметной области
 */
export class Entity {
  public id: number;

  public constructor(params?: any) {
    _.forEach(params, (value: any, key: string) => {
      if (!_.isArray(value)) {
        (<any>this)[key] = value;
        return;
      }
    });
  }

  /**
   * Утилитный метод, который возвращает имя класса
   *
   * @return {string}
   */
  public getClassName(): string {
    return this.constructor.toString().match(/\w+/g)[1];
  }
}
