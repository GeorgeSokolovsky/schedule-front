import { Entity } from './entity.model';

/**
 * Представляет сущность Предмет, по которому может проводиться ЦТ,
 * а также предмет, который может знать Инструктор
 *
 * @extends Entity
 */
export class Subject extends Entity {
  public name: string;
  public shortName: string;

  public constructor(params?: any) {
    super(params);
  }
}
