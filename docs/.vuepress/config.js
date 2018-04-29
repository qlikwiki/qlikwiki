module.exports = {
    title: 'Qlik.Wiki  ',
    description: 'My documentation for Qlik products',

    themeConfig: {
      // Assumes GitHub. Can also be a full GitLab url.
      repo: 'qlikwiki/qlikwiki',
      // Customising the header label
      // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
      repoLabel: 'GitHub',
  
      // Optional options for generating "Edit this page" link
  
      // if your docs are in a different repo from your main project:
      docsRepo: 'vuejs/vuepress',
      // if your docs are not at the root of the repo:
      docsDir: 'docs',
      // if your docs are in a specific branch (defaults to 'master'):
      docsBranch: 'master',
      // defaults to true, set to false to disable
      editLinks: true,
      // custom text for edit link. Defaults to "Edit this page"
      editLinkText: 'Help us improve this page!'
    },

    ga: 'UA-118349142-1'



  }