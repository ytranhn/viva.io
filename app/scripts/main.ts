import { HttpRequest } from './services/http';

const http = new HttpRequest();
http.get('https://api.github.com/users?per_page=5').subscribe((a) => {
	console.log(a);
});
