import inject from 'gulp-inject';
import { src, dest } from 'gulp';

export const injectTask = () => {
	const target = src('./_dist/**.html');
	const sources = src(['./_dist/js/*.js', './_dist/css/*.css'], {
		read: false,
	});
	return target
		.pipe(inject(sources, { relative: true }))
		.pipe(dest('./_dist'));
};
