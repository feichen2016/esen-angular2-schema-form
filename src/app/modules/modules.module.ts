import { NgModule } from '@angular/core';
import { routes } from './modules.routing';
// import { NgaModule } from '../theme/nga.module';
// import { AppTranslationModule } from '../app.translation.module';

import { ModulesComponent } from './modules.component';
import { EntityModule } from './entity.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    EntityModule,
    RouterModule.forChild(routes)],
  declarations: [ModulesComponent]
})
export class ModulesModule {
}
