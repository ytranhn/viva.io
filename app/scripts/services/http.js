import { of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, catchError } from 'rxjs/operators';

class HttpClient {
	/**
	 * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
	 * @param initOptions: {
		* @see method: // *GET, POST, PUT, DELETE, etc.
		* @see mode: // no-cors, *cors, same-origin
		* @see cache: // *default, no-cache, reload, force-cache, only-if-cached
		* @see credentials: // include, *same-origin, omit
		* @see headers:Content-Type: 'application/x-www-form-urlencoded', 'application/json'
		* @see redirect: // manual, *follow, error
		* @see referrerPolicy: // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		* @see body: // JSON.stringify(data)
		* @see data: {
			name: "Vũ Hoàng Sơn",
			age: 27,
			...
		}
		* }
		* @returns equest options
		*/
	static setRequestOption(method, initOptions = {}) {
		const defaultOptions = {
			method: method.toLowerCase(),
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
			},
			redirect: 'follow',
			referrerPolicy: 'no-referrer',
			body: {},
		};
		const options = { ...defaultOptions, ...initOptions };
		if (method.toLowerCase() === 'get' || method.toLowerCase() === 'head') {
			delete options.body;
		}
		return options;
	}

	static request(method, url, options = {}) {
		const initOptions = HttpClient.setRequestOption(method, options);
		return fromFetch(url, initOptions).pipe(
			switchMap((response) => {
				if (response.ok) {
					// OK return data
					return response.json();
				} else {
					// Server is returning a status requiring the client to try something else.
					return of({
						error: true,
						message: `Error ${response.status}`,
						status: response.status,
					});
				}
			}),
			catchError((err) => {
				// Network or other error, handle appropriately
				console.error(err);
				return of({
					error: true,
					message: err.message,
					status: err.status,
				});
			}),
		);
	}
}

export class HTTP {
	static get(url, options = {}) {
		return HttpClient.request('get', url, options);
	}
	static post(url, options = {}) {
		return HttpClient.request('post', url, options);
	}
	static put(url, options = {}) {
		return HttpClient.request('put', url, options);
	}
	static request(method, url, options = {}) {
		return HttpClient.request(method, url, options);
	}
}
