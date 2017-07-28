export const MODULES_MENU = [
  {
    path: 'modules',
    children: [
      // {
      //   path: 'zuzhi',
      //   data: {
      //     menu: {
      //       title: '组织架构',
      //       icon: 'ion-document',
      //       selected: false,
      //       expanded: false,
      //       order: 0
      //     }
      //   }
      // },

      {
        path: 'organization',
        data: {
          menu: {
            title: '组织管理',
            icon: 'ion-navicon-round',
            selected: false,
            expanded: false,
            order: 0
          }
        },
        children: [
          {
            path: 'hrm-organization-list',
            data: {
              menu: {
                title: '公司管理',
                icon: 'ion-gear-a',
                selected: false,
                expanded: false,
                order: 0
              }
            },
          },
          {
            path: 'hrm-department-list',
            data: {
              menu: {
                title: '部门管理',
                icon: 'ion-gear-a',
                selected: false,
                expanded: false,
                order: 0
              }
            },
          },
          {
            path: 'hrm-place-list',
            data: {
              menu: {
                title: '地点管理',
                icon: 'ion-gear-a',
                selected: false,
                expanded: false,
                order: 0
              }
            },
          },
          {
            path: 'hrm-post-list',
            data: {
              menu: {
                title: '职务管理',
                icon: 'ion-gear-a',
                selected: false,
                expanded: false,
                order: 0
              }
            },
          },
          /*
          {
            path: 'hrm-structure-list',
            data: {
              menu: {
                title: '组织架构管理',
                icon: 'ion-gear-a',
                selected: false,
                expanded: false,
                order: 0
              }
            },
          }, */
          {
            path: 'hrm-position-list',
            data: {
              menu: {
                title: '职位管理',
                icon: 'ion-gear-a',
                selected: false,
                expanded: false,
                order: 0
              }
            },
          },
          {
            path: 'hrm-virtual-organization-list',
            data: {
              menu: {
                title: '虚拟组织管理',
                icon: 'ion-gear-a',
                selected: false,
                expanded: false,
                order: 0
              }
            },
          },
        ]
      },
      {
        path: 'competencyModel',
        data: {
          menu: {
            title: '能力素质模型',
            icon: 'ion-navicon-round',
            selected: false,
            expanded: false,
            order: 0
          }
        },
        children: [
          {
            path: 'hrm-ability-list',
            data: {
              menu: {
                title: '能力管理',
                icon: 'ion-gear-a',
                selected: false,
                expanded: false,
                order: 0
              }
            },
          },
          {
            path: 'hrm-skill-list',
            data: {
              menu: {
                title: '技能管理',
                icon: 'ion-gear-a',
                selected: false,
                expanded: false,
                order: 0
              }
            },
          },
        ]
      },
      {
        path: 'tagManagement',
        data: {
          menu: {
            title: '标签管理',
            icon: 'ion-navicon-round',
            selected: false,
            expanded: false,
            order: 0
          }
        },
        children: [
          {
            path: 'hrm-tag-list',
            data: {
              menu: {
                title: '企业标签',
                icon: 'ion-gear-a',
                selected: false,
                expanded: false,
                order: 0
              }
            },
          },
          {
            path: 'hrm-technological-tag-list',
            data: {
              menu: {
                title: '技能标签',
                icon: 'ion-gear-a',
                selected: false,
                expanded: false,
                order: 0
              }
            },
          },
        ]
      },
      {
        path: 'employee',
        data: {
          menu: {
            title: '员工管理',
            icon: 'ion-navicon-round',
            selected: false,
            expanded: false,
            order: 0
          }

        },
        children: [
          {
            path: 'employee-hrm',
            data: {
              menu: {
                title: '员工列表',
                icon: 'ion-gear-a',
                selected: false,
                expanded: false,
                order: 0
              }
            },
          },
          // {
          //   path: 'employee-hrm-create',
          //   data: {
          //     menu: {
          //       title: '新建员工',
          //       icon: 'ion-gear-a',
          //       selected: false,
          //       expanded: false,
          //       order: 0
          //     }
          //   },
          // }
           {
            path: 'employee-hrm-position',
            data: {
              menu: {
                title: '员工职务信息',
                icon: 'ion-gear-a',
                selected: false,
                expanded: false,
                order: 0
              }
            },
          },
          {
            path: 'employee-hrm-outline',
            data: {
              menu: {
                title: '员工概要列表',
                icon: 'ion-gear-a',
                selected: false,
                expanded: false,
                order: 0
              }
            },
          }
        ]
      },
      {
        path: 'account',
        data: {
          menu: {
            title: '账号管理',
            icon: 'ion-navicon-round',
            selected: false,
            expanded: false,
            order: 0
          }
        },
        children: [
          {
            path: 'hrm-account-list',
            data: {
              menu: {
                title: '账号列表',
                icon: 'ion-gear-a',
                selected: false,
                expanded: false,
                order: 0
              }
            },
          },
        ]
      },
      /*
      {
        path: "structure",
        data: {
          menu: {
            title: '组织架构管理',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 0
          }

        },
        children: [
          {
            path: 'hrm-structure-list',
            data: {
              menu: {
                title: '显示组织架构',
                icon: 'ion-gear-a',
                selected: false,
                expanded: false,
                order: 0
              }
            },
          }
        ]
      },*/
      {
        path: 'deploy',
        data: {
          menu: {
            title: '薪资计划管理',
            icon: 'ion-navicon-round',
            selected: false,
            expanded: false,
            order: 0
          }

        },
        children: [
          {
            path: 'hrm-deploy-list',
            data: {
              menu: {
                title: '薪资计划列表',
                icon: 'ion-gear-a',
                selected: false,
                expanded: false,
                order: 0
              }
            },
          },
          // {
          //   path: 'deploy-hrm-new',
          //   data: {
          //     menu: {
          //       title: '新建薪资',
          //       icon: 'ion-gear-a',
          //       selected: false,
          //       expanded: false,
          //       order: 0
          //     }
          //   },
          // }
        ]
      },
      {
        path: "task",
        data: {
          menu: {
            title: '人力管理',
            icon: 'ion-navicon-round',
            selected: false,
            expanded: false,
            order: 0
          }
        },
        children: [
          {
            path: 'hrm-task-list',
            data: {
              menu: {
                title: '入职任务列表',
                icon: 'ion-gear-a',
                selected: false,
                expanded: false,
                order: 0
              }
            },
          },
          {
            path: 'hrm-entry-process-list',
            data: {
              menu: {
                title: '入职模板列表',
                icon: 'ion-gear-a',
                selected: false,
                expanded: false,
                order: 0
              }
            },
          },
        ]
      }

    ]
  }
];
