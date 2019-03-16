var ghpages = require('gh-pages');

ghpages.publish('dist', {
    branch: 'master',
    repo: 'https://github.com/EugeneFenko/eugenefenko.github.io.git'
  }, function(err){
    if(err==undefined) {
      console.log('Success!')
    } 
    else console.log('Err: '+err)
  });