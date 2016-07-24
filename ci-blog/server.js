import express from 'express';
import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.dev';

const compiler = webpack(config);
const app = express();

app.use(WebpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath,
	noInfo: true,
	hot: true,
	inline: true,
	stats: {
		colors: true
	}
}));

app.use(WebpackHotMiddleware(compiler));

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
  console.log('Visit http://localhost:' + app.get('port') + ' to run app');
});
