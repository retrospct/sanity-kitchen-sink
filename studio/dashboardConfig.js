export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60ece3a18d51124b0e73a402',
                  title: 'Sanity Studio',
                  name: 'retro-portfolio-studio',
                  apiId: '71645b13-8784-4d33-bda0-124712474a3f'
                },
                {
                  buildHookId: '60ece3a123905d52465baa3c',
                  title: 'Blog Website',
                  name: 'retro-portfolio',
                  apiId: '30dadb02-6223-4bc2-93c4-d77103949091'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/retrospct/retro-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://retro-portfolio.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
