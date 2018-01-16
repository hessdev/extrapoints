import { IPlayer } from "../player/player";

export interface ITeam {
	"id": number,
	"divRecordVal": number,
	"division": string,
	"efficiency": number,
	"h2hIndex": string,
	"history": any[],
	"name": string,
	"owner": string,
	"players": IPlayer[],
	"pointsAgainst": number,
	"pointsAgainstDivision": number,
	"pointsByPosition": Object,
	"possiblePoints": number,
	"ptsIndex": string,
	"record": string,
	"recordVal": number,
	"roster": any[],
	"schedule": string,
	"shortName": string,
	"slug": string,
	"totalPoints": number,
	"totalPointsDivision": number,
	"weeks": any[]
}