module.exports = {
  //pathPrefix: `/mygatsby`,
  siteMetadata: {
    title: 'ROSA LIN',
    author: 'vasrush',
    description: 'A Gatsby.js V2 Starter based on Landed by HTML5 UP',
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Works',
        link: '#',
        items: [
          {
            name: 'Product',
            link: '/left-sidebar',
          },
          {
            name: 'Graphic',
            link: '/right-sidebar',
          },
          {
            name: 'Exhibition',
            link: '/no-sidebar',

          },
          {
            name: 'Web',
            link: '/no-sidebar',

          },
          {
            name: 'THESIS PUBLICATION',
            link: '#',
            items: [
              {
                name: 'Option 1',
                link: '#',
              },
              {
                name: 'Option 2',
                link: '#',
              },
              {
                name: 'Option 3',
                link: '#',
              },
              {
                name: 'Option 4',
                link: '#',
              },
            ],
          },
        ],
      },
      {
        name: 'About Me',
        link: '/aboutme',
		},
    { 
      name: ' Contect ',
      cl: '#',
    link: '/elements',
    },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    'gatsby-plugin-offline',
  ],
}
