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
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-146872812-1'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: [],
        config: {
          '/': {
            changefreq: 'monthly',
            priority: 1
          },
          '/contact': {
            changefreq: 'monthly',
            priority: 0.9
          },
          '/photography/**': {
            changefreq: 'monthly',
            priority: 0.8
          },
          '/darkroom/**': {
            changefreq: 'monthly',
            priority: 0.7
          },
          '/programming': {
            changefreq: 'monthly',
            priority: 0.6
          }
        }
      }
    }    
  ],
  transformers: {
    remark: {
      imageQuality: 90,
    }
  },
  siteUrl: 'http://joshuarainbow.co.uk/',
  pathPrefix: '/',  
}
