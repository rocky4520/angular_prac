import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { SignalComponent } from './components/signal/signal.component';
import { UserComponent } from './components/user/user.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { AppComponent } from './app.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TdFormComponent } from './components/td-form/td-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { StudentComponent } from './components/student/student.component';
import { Student1Component } from './components/student/student1/student1.component';
import { Student2Component } from './components/student/student2/student2.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashBoard',
        pathMatch: 'full'
    },
    {
        path:'dashBoard',
        component:DashBoardComponent
    },
    // {
    //     path: 'admin',
    //     component:AdminComponent
    // },
    {
        path: 'admin',
        loadComponent: () => import('./components/admin/admin.component').then(c => c.AdminComponent)
    },
    {
        path:'dataBinding',
        component:DataBindingComponent
    },
    {
        path: 'ng-class',
        component:NgClassComponent
    },
    {
        path: 'ng-style',
        component:NgStyleComponent
    },
    {
        path: 'controlStatement',
        component:ControlStatementComponent
    },
    {
        path: 'signal',
        component:SignalComponent
    },
    {
        path: 'user',
        component:UserComponent
    },
    {
        path: 'ng-if',
        component:NgIfComponent
    },
    {
        path: 'ng-for',
        component:NgForComponent
    },
    {
        path: 'td-form',
        component:TdFormComponent
    },
    {
        path: 'reactive-form',
        component:ReactiveFormComponent
    },
    {
        path: 'student',
        component:StudentComponent,
        children: [
            {
                path: 'student1',
                component:Student1Component,
                children: [
                    {
                        path: 'student2',
                        component:Student2Component
                    }
                ]
            },
        ]
    },
    {
        path: '**',
        component:PageNotFoundComponent
    },
    
];
