export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Pages',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'Login'
              }
            }
          },
          {
            path: ['/register'],
            data: {
              menu: {
                title: 'Register'
              }
            }
          }
        ]
      },
      {
        path: 'editors',
        data: {
          menu: {
            title: 'Paper Editor',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'ckeditor',
            data: {
              menu: {
                title: 'CKEditor',
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Courses',
            url: 'http://google.com',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank'
          }
        }
      },
      {
       path: 'forms-main-component',
        data: {
          menu: {
            title: 'PKA Forms',
            icon: 'ion-android-exit',
            selected: false,
            expanded: false,
            order: 1000,
          }
        }
      }
    ]
  }
];
