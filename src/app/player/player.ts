import { INflTeam } from "../nfl-team/nfl-team";

export interface IPlayer {
	"playerId": number,
	"born": string,
	"blanks": number,
	"college": string,
	"height": string,
	"img": string,
	"lineupPosition": string,
	"name": string,
	"points": number,
	"pointsPerStart": number,
	"pointsRatio": number,
	"position": string,
	"possiblePoints": number,
	"rank": number,
	"results": object,
	"slug": string,
	"starterPoints": number,
	"starts": number,
	"team": INflTeam,
	"teamName": string,
	"weight": number
}