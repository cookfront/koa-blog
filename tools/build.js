import webpack from 'webpack';
import config from '../webpack.config.prod';
import {chalkError, chalkSuccess, chalkWarning, chalkProcessing} from './chalkConfig';

// this assures React is built in prod mode and that the Babel dev config doesn't apply.
process.env.NODE_ENV = 'production';

console.log(chalkProcessing('Generating minified bundle for production via Webpack. This will take a moment...'));

webpack(config).run((error, stats) => {
	if (error) {
		console.log(chalkError(error));
		return 1;
	}

	const jsonStats = stats.toJson();

	if (jsonStats.hasErrors) {
		return jsonStats.errors.map(error => console.log(chalkError(error)));
	}

	if (jsonStats.hasWarning) {
		console.log(chalkWarning('Webpack generated the following warnings: '));
		jsonStats.warnings.map(warning => console.log(chalkWarning(warning)));
	}

	console.log(`Webpack stats: ${stats}`);

	console.log(chalkSuccess('Your app is compiled in production mode in /build. It\'s ready to roll!'));

	return 0;
});