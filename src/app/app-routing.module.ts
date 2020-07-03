import {HomeComponent} from './home/home.component';
import {SobreComponent} from './sobre/sobre.component';
import {Routes} from '@angular/router';
import {PlanoCarreiraVagasComponent} from './plano-carreira-vagas/plano-carreira-vagas.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'plano-carreira-vagas', component: PlanoCarreiraVagasComponent}
];
