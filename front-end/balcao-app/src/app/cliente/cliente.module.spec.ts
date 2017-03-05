/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import ClienteModule from './cliente.module';

describe('ClienteModule', () => {
  let clienteModule;

  beforeEach(() => {
    clienteModule = new ClienteModule();
  });

  it('should create an instance', () => {
    expect(clienteModule).toBeTruthy();
  })
});
