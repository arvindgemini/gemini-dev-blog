export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e180812ac7aff8ba4ad0d6b',
                  title: 'Sanity Studio',
                  name: 'gemini-dev-blog-studio',
                  apiId: '8d000455-02ed-487d-9823-75b708da6359'
                },
                {
                  buildHookId: '5e1808128b7a737318a2eb7c',
                  title: 'Blog Website',
                  name: 'gemini-dev-blog',
                  apiId: '8ac7a36e-32fe-40b3-9787-5501275d14c4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arvindgemini/gemini-dev-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://gemini-dev-blog.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
