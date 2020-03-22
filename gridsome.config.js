// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Joshua Rainbow',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: '**/**/gallery.md',
        baseDir: './content/photography/',
        typeName: 'Photography',
        route: '/photography/:category/:title',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: '**/guide.md',
        baseDir: './content/darkroom/',
        typeName: 'Darkroom',
        route: '/darkroom/:title',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: '*.md',
        baseDir: './content/programming/',
        typeName: 'Programming'
      }
    },
  ],
  transformers: {
    remark: {
      imageQuality: 90,
    }
  },
  siteUrl: 'http://joshuarainbow.co.uk/',
  pathPrefix: '/',  
}
