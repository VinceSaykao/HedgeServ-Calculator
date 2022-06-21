import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { IntroComponent } from './components/intro/intro.component';

const routes: Routes = [
 { path: 'intro', redirectTo: '/intro', pathMatch: 'full' },
 { path: 'calculator', redirectTo: '/calculator', pathMatch: 'full' },
 { path: 'about', redirectTo: '/about', pathMatch: 'full' },
 { path: 'intro', component: IntroComponent },
 { path : 'calculator', component: CalculatorComponent},
 { path : 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
