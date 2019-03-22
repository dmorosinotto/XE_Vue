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
