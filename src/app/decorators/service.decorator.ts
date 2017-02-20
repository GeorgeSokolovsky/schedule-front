import { Entity } from '../models/entity.model';

const REPOSITORY_DECORATOR_METADATA_KEY: string = 'Service_';

const reflect: any = (<any>window).Reflect;

/**
 * Описывает структуру сохраняемую в метаданные для сервиса относительно модели
 */
export interface ServiceDecoratorData {
  model: {new (data?: any): Entity};
  entityPath: string;
}

/**
 * Декоратор для Сервиса, сохраняет в метаданные информацию о моделях, с которыми работает
 *
 * @param {ServiceDecoratorData} data
 *
 * @return {(target:any)=>void} Конструктор для декоратора
 */
export function Service(data: ServiceDecoratorData): (target: any) => void {
  'use strict';
  return (target: any): void => {
    reflect.defineMetadata(REPOSITORY_DECORATOR_METADATA_KEY + target, data, target);
  };
}

/**
 * Возвращает все метаданные для сервиса
 *
 * @param {any} constructor - service
 *
 * @return {ServiceDecoratorData} service metadata
 */
export function getServiceMetadata({ constructor }: any): ServiceDecoratorData {
  'use strict';
  return reflect.getMetadata(REPOSITORY_DECORATOR_METADATA_KEY + constructor, constructor);
}
