import 'jest-preset-angular/setup-jest';
import { getTestBed } from '@angular/core/testing';

getTestBed().configureTestingModule({ teardown: { destroyAfterEach: false } });
