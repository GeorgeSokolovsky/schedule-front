import { Entity } from './entity.model';
import { Subject } from './subject.model';

/**
 * Представляет сущность одного дня в рамках ЦТ
 *
 * @extends Entity
 */
export class Testing extends Entity {
  private subject: Subject;
  private date: Date;

  public constructor(params?: any) {
    super(params);
  }
}
