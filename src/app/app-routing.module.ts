import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadComponent } from './read/read.component';
import { WriteComponent } from './write/write.component';
import { AdminComponent } from './admin/admin.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppAuthGuard } from './KioskAuthGuard';
import { AdminAuthGuard } from './AdminAuthGuard';
import { InitComponent } from './init/init.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const routes: Routes = [
  { path: '', component: InitComponent},
  { path: 'unauthorized', component: UnauthorizedComponent},
  { path: 'welcome', component: WelcomeComponent , canActivate: [AppAuthGuard], data: { roles: ['KIOSK'] } },
  { path: 'admin', component: AdminComponent, canActivate: [AdminAuthGuard], data: { roles: ['ADMIN'] }  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
