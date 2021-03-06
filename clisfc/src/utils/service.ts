import axios from "axios";

// 204a define models: type + interface
type Nullable<T> = T | null;
type ISOString = string;

interface IArgument {
	Title: string;
	Abstract: string;
}

export interface IEvent extends IArgument {
	EventId: number;
	Location: string;
	EventDate: ISOString;
	Sessions: Array<
		IArgument & {
			StartTime: ISOString;
			EndTime: ISOString;
			SpeakerName: string;
			SpeakerPicture: string;
		}
	>;
}
export type EventOrNull = Nullable<IEvent>;

// 204b private helpers + local _cache
const _baseurl = "https://www.xedotnet.org/umbraco/api/EventApi";
function _safeGet<T>(url: string, def: T): Promise<T> {
	return axios
		.get<T>(url)
		.then(resp => resp.data)
		.catch(err => {
			console.error("HTTP GET", url, "ERROR", err);
			return def; //TODO: maybe log Error somewhere...
		});
}

let _cache: IEvent[] = [];

// 204c export function getAll / getById with handle logic for "_cache-first" win!
export async function getAll(force: boolean = false): Promise<IEvent[]> {
	if (force || !_cache || !_cache.length) {
		const url = `${_baseurl}/GetUpcaming`; //ignore cache and reload data
		return (_cache = await _safeGet(url, [] as IEvent[])); //store data in _cache before return it
	} else return Promise.resolve(_cache); //else return data from cache without doing new API request
}

export async function getById(eid: number | string): Promise<EventOrNull> {
	const found = _cache && _cache.find(e => e.EventId == eid); //TS infer IEvent | undefined!
	if (found) return Promise.resolve(found /* if found in cache return value without new req*/);
	else return _safeGet(_baseurl + "/Get/" + eid, null); //search online (single GET) + null if not found
}
