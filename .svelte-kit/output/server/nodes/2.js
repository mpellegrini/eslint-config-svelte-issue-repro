

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.c6383788.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.8ef2fd87.js"];
export const stylesheets = [];
export const fonts = [];
