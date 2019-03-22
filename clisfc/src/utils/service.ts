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
