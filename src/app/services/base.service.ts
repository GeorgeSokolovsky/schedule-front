import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

import { Entity } from '../models/entity.model';
import { getServiceMetadata, ServiceDecoratorData } from '../decorators/service.decorator';

export class BaseService<T extends Entity> {
  // todo поменять, когда API будет доступно
  private static API_URL: string = 'http://localhost:3000/api/public/v1';

  public constructor(private httpInstance: Http) {
  }

  /**
   * Метод для создания экземпдяра модели
   *
   * @param {any} data
   *
   * @return {Observable<T>}
   */
  public create(data: any): Observable<T> {
    return this.httpInstance.post(this.constructUrl(), data)
      .map((response: Response) => new this.model(response.json()));
  }

  /**
   * Метод для получения модели по ее id
   *
   * @param {number] id
   *
   * @return {Observable<T>}
   */
  public read(id: number): Observable<T> {
    return this.httpInstance.get(`${this.constructUrl()}/${id}`)
      .map((response: Response) => new this.model(response.json()));
  }

  /**
   * Метод для обновления модели
   *
   * @param {T} model
   *
   * @return {Observable<T>}
   */
  public update(model: T): Observable<T> {
    return this.httpInstance.put(`${this.constructUrl()}/${model.id}`, model)
      .map((response: Response) => new this.model(response.json()));
  }

  /**
   * Метод для удаления модели
   *
   * @param {number} id
   *
   * @return {Observable<any>}
   */
  public remove(id: number): Observable<any> {
    return this.httpInstance.delete(`${this.constructUrl()}/${id}`)
      .map((response: Response) => response.json());
  }

  /**
   * Метод для получения списка моделей
   *
   * @return {Observable<Array<T>>}
   */
  public findAll(): Observable<Array<T>> {
    return this.httpInstance.get(this.constructUrl())
      .map((response: Response) => _.map(response.json(), (data: any) => new this.model(data)));
  }

  /**
   * Получает Конструктор модели из метаданных
   *
   * @return {new (data: any): T}
   */
  protected get model(): { new (data: any): T} {
    const reflectionData: ServiceDecoratorData = getServiceMetadata(this);

    if (_.isUndefined(reflectionData)) {
      throw Error('Нет метаданных для сервиса!');
    }

    return <any>reflectionData.model;
  }

  /**
   * Получает путь к моделям из метаданных
   *
   * @return {string}
   */
  protected getEntityPath(): string {
    const reflectionData: ServiceDecoratorData = getServiceMetadata(this);

    if (_.isUndefined(reflectionData)) {
      throw Error('Нет метаданных для сервиса!');
    }

    return reflectionData.entityPath;
  }

  /**
   * Утилитный метод для упрощения создания URL запроса
   *
   * @return {string}
   */
  private constructUrl(): string {
    return `${BaseService.API_URL}/${this.getEntityPath()}`;
  }
}
