import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import {
  AllCommunityModule as AllChartsCommunityModule,
  ModuleRegistry as ChartsModuleRegistry,
} from 'ag-charts-community';

ModuleRegistry.registerModules([AllCommunityModule]);
ChartsModuleRegistry.registerModules([AllChartsCommunityModule]);

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
