/* tslint:disable ordered-imports */
import 'core-js/client/shim';
import 'rxjs';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';

import 'bootstrap';
import 'jquery';
import 'tether';
/* tslint:enable ordered-imports */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MainModule } from './main.module';

import 'bootstrap/dist/css/bootstrap.css';

platformBrowserDynamic().bootstrapModule(MainModule);
