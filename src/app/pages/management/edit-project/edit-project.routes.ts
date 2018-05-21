import { Route } from '@angular/router';
import { EditProjectComponent } from './edit-project.component';
import { AuthGuard } from '../../../biosys-core/services/auth.guard';

export const EditProjectRoutes: Route[] = [
    {
        path: 'management/projects/create-project',
        component: EditProjectComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
    },
    {
        path: 'management/projects/edit-project/:id',
        component: EditProjectComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
    }
];
