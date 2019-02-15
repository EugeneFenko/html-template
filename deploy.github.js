var ghpages = require('gh-pages');

ghpages.publish('dist', {
    branch: 'master',
    repo: 'https://github.com/EugeneFenko/eugenefenko.github.io.git'
  }, function(err){
    console.log('Err: '+err)
  });