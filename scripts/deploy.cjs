const path = require('path');
const ghpages = require('gh-pages');

process.env.CACHE_DIR = path.resolve(__dirname, '..', '.gh-pages-cache');

ghpages.publish(
  path.resolve(__dirname, '..', 'dist'),
  {
    repo: 'https://github.com/ymmy1/ymmy1.github.io.git',
    branch: 'gh-pages',
    dotfiles: true,
  },
  (error) => {
    if (error) {
      console.error(error);
      process.exit(1);
    }

    console.log('Published');
  },
);
