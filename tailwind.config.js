module.exports = {
  purge: {
    enabled: true,
    content: [
      './templates/**/*.html.twig',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url('https://images.unsplash.com/photo-1464972377689-e7674c48d806?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2055&q=80')",
      },
      colors: {
        'pryg-yellow': '#F8BC28',
        'pryg-orange': '#e95b1d',
        'pryg-blue-v1':'#278EB3',
        'pryg-blue-v2': '#29414B',
        'pryg-gray-v1': '#637480',
        'pryg-white-v1': '#F9F9F9',
        'pryg-white-v2': '#F3F3F3',
      }
    },
  },
  variants: {
    extend: {
      borderStyle: ['responsive', 'hover'],
      borderWidth: ['responsive', 'hover'],
    },
  },
  plugins: [],
}
