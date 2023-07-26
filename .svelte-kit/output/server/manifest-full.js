export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.4f3a698b.js","app":"_app/immutable/entry/app.306b9205.js","imports":["_app/immutable/entry/start.4f3a698b.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.cc443842.js","_app/immutable/entry/app.306b9205.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.8ef2fd87.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
