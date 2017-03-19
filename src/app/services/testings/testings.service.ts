import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { BaseService } from '../base.service';
import { Service } from '../../decorators/service.decorator';
import { Testing } from '../../models/testing.model';

@Injectable()
@Service({
  model: Testing,
  entityPath: 'testing'
})
export class TestingService extends BaseService<Testing> {
  public constructor(private http: Http) {
    super(http);
  }
}