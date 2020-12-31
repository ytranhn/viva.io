import { HTTP } from './services/http';

HTTP.get('https://api.github.com/users?per_page=5').subscribe((res) => {
	console.log(res);
});
