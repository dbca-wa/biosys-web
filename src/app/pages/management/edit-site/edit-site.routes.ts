import { Route } from '@angular/router';
import { EditSiteComponent } from './edit-site.component';
import { AuthGuard } from '../../../biosys-core/services/auth.guard';

export const EditSiteRoutes: Route[] = [
    {
        path: 'management/projects/edit-project/:projId/create-site',
        component: EditSiteComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
    },
    {
        path: 'management/projects/edit-project/:projId/edit-site/:id',
        component: EditSiteComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
    }
];
