import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer
export const Full_ROUTES: Routes = [
  {
    path: 'changelog',
    loadChildren: './changelog/changelog.module#ChangeLogModule'
  },
  {
    path: 'full-layout',
    loadChildren: './pages/full-layout-page/full-pages.module#FullPagesModule'
  },
  {
    path: 'tour-operators/profile',
    loadChildren: './tour-operators/tour-operators/tour-operators.module#TourOperatorsModule'
  },
  {
    path: 'auth/sign-up',
    loadChildren: './auth/auth/auth.module#AuthModule'
  },
  // {
  //   path: 'auth',
  //   loadChildren: './auth/auth/auth.module#AuthModule'
  // }

];