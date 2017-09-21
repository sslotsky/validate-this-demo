import fs from 'fs';
import prompt from 'prompt';
import devConfig from './devConfig';
import prodConfig from './prodConfig';

const schema = {
  properties: {
    apiBase: {
      description: 'Enter base API URL',
      default: 'https://egg-ghost.herokuapp.com/v1'
    }
  }
};

prompt.get(schema,  (err, result) => {
  fs.writeFile('./webpack.config.js', devConfig(result.apiBase), err => {
    if (err) {
      console.log(err);
    }

    console.log(`Generated webpack.config.js for ${result.apiBase}`);
  });

  console.log('trying to write file!');
  fs.writeFile('./webpack.config.production.js', prodConfig(result.apiBase), err => {
    console.log('tried to write file!');
    if (err) {
      console.log(err);
    }

    console.log(`Generated webpack.production.config.js for ${result.apiBase}`);
  });
});
