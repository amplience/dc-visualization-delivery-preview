import * as settings from './settings.store';
const sparams = new URLSearchParams(window.location.search);
const vse = sparams.get('vse');
const id = sparams.get('id');
const hub = sparams.get('hub');
const locale = sparams.get('locale');
const format = sparams.get('format') ? sparams.get('format') : 'inlined';
const depth = sparams.get('depth') ? sparams.get('depth') : 'all';
settings.vse.set(vse);
settings.id.set(id);
settings.hub.set(hub);
settings.format.set(format);
settings.depth.set(depth);
settings.locale.set(locale);
export { vse, id, format, depth, locale, hub };
