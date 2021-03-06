import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';


const routes: Routes = [
    {
        path: 'welcome/:goHome',
        children: [
          {
            path: '',
            loadChildren: () =>
                import('./welcome/welcome.module').then(m => m.WelcomeModule)
          }
        ]
      },
    {
        path: 'register',
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./register/register.module').then(m => m.RegisterModule)
            }
        ]
    },
    {
        path: 'permissions/:type',
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./permissions-modal/permissions-modal.module').then(m => m.PermissionsPushModule)
            },
        ]
    },
    {
        path: 'no-access',
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./no-access/no-access.module').then(m => m.NoAccessModule)
            }
        ]
    },
    {
        path: 'update',
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./update/update.module').then(m => m.UpdateModule)
            }
        ]
    },
    {
        path: 'app',
        component: MainComponent,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./main/home/home.module').then(m => m.HomeModule)
                    }
                ]
            },
            {
                path: 'autotest/:questionnaire_id/:level/:question_id',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./main/autotest/autotest.module').then(m => m.AutotestModule)
                    }
                ]
            },
            {
                path: 'autotest/:questionnaire_id',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./main/autotest/autotest.module').then(m => m.AutotestModule)
                    }
                ]
            },
            {
                path: 'self-declaration-leave/:leaveReason',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./main/self-declaration-leave/self-declaration-leave.module').then(m => m.SelfDeclarationLeaveModule)
                    }
                ]
            },
            {
                path: 'request-leave-home',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./main/request-leave-home/request-leave-home.module').then(m => m.RequestLeaveHomeModule)
                    }
                ]
            },
            {
                path: 'leave-custom-reason-form/:leaveReason',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./main/leave-custom-reason-form/leave-custom-reason-form.module').then(m => m.LeaveCustomReasonFormModule)
                    }
                ]
            },
            {
                path: 'leave-request-result',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./main/leave-requet-result/leave-request-result.module').then(m => m.LeaveRequestResultModule)
                    }
                ]
            },
            {
                path: 'request-leave-home-confirmation-no-test',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./main/request-leave-home-confirmation-no-test/request-leave-home-confirmation-no-test.module')
                                .then(m => m.RequestLeaveHomeConfirmationNoTestModule)
                    }
                ]
            },
            {
                path: 'request-leave-home-confirmation-mandatory-quarentine',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./main/request-leave-home-confirmation-mandatory-quarentine/request-leave-home-confirmation-mandatory-quarentine.module')
                                .then(m => m.RequestLeaveHomeConfirmationMandatoryQuarentineModule)
                    }
                ]
            },
            {
                path: 'request-leave-home-confirmation-infected',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./main/request-leave-home-confirmation-infected/request-leave-home-confirmation-infected.module')
                                .then(m => m.RequestLeaveHomeConfirmationInfectedModule)
                    }
                ]
            },
            {
                path: 'contact-upload-request',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./main/contact-upload-request/contact-upload-request.module').then(m => m.ContactUploadRequestModule)
                    }
                ]
            },
            {
                path: 'contact-upload-thanks',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./main/contact-upload-thanks/contact-upload-thanks.module').then(m => m.ContactUploadThanksModule)
                    }
                ]
            },
            {
                path: 'my-info',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./main/patient-info/patient-info.module').then(m => m.PatientInfoModule)
                    }
                ]
            },
            {
                path: 'test-appointment/:appointment-type/confirm',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./main/test-appointment/confirm-test-appointment/confirm-test-appointment.module').then(m => m.ConfirmTestAppointmentModule)
                    }
                ]
            },
            {
                path: 'test-appointment/:appointment-type/request',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./main/test-appointment/request-test-appointment/request-test-appointment.module').then(m => m.RequestTestAppointmentModule)
                    }
                ]
            },
            {
                path: 'test-appointment/at-home/result',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./main/test-appointment/appointment-at-home/appointment-at-home.module').then(m => m.AppointmentAtHomeModule)
                    }
                ]
            },
            {
                path: 'test-appointment/at-health-center/result',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./main/test-appointment/appointment-health-center/appointment-health-center.module').then(m => m.AppointmentHealthCenterModule)
                    }
                ]
            },
            {
                path: 'test-appointment/appointment/result',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./main/test-appointment/appointment-appointment/appointment-appointment.module').then(m => m.AppointmentAppointmentModule)
                    }
                ]
            },


            {
                path: 'test-result/result/1',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./main/test-result/test-result-1/test-result-1.module').then(m => m.TestResult1Module)
                    }
                ]
            },
            {
                path: 'test-result/result/2',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./main/test-result/test-result-2/test-result-2.module').then(m => m.TestResult2Module)
                    }
                ]
            },
            {
                path: 'test-result/result/3',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./main/test-result/test-result-3/test-result-3.module').then(m => m.TestResult3Module)
                    }
                ]
            },
            {
                path: 'test-result/result/4',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./main/test-result/test-result-4/test-result-4.module').then(m => m.TestResult4Module)
                    }
                ]
            },
            {
                path: 'test-result/result/5',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./main/test-result/test-result-5/test-result-5.module').then(m => m.TestResult5Module)
                    }
                ]
            },

            {
                path: 'following-up-result/result/1',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./main/following-up-result/following-up-result-1/following-up-result-1.module').then(m => m.FollowingUpResult1Module)
                    }
                ]
            },
            {
                path: 'following-up-result/result/2',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./main/following-up-result/following-up-result-2/following-up-result-2.module').then(m => m.FollowingUpResult2Module)
                    }
                ]
            },

            {
                path: 'about',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./main/about/about.module').then(m => m.AboutModule)
                    }
                ]
            }
        ]
    },
    {
      path: '',
      redirectTo: '/register',
      pathMatch: 'full'
    }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
