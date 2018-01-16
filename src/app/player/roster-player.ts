import { INflTeam } from "../nfl-team/nfl-team";

export interface IRosterPlayer {
	playerId: number,
	name: string,
	gameEnd: Date,
	gameStart: Date,
	hasPlayed: boolean,
	isHome: boolean,
	img: string,
	position: string,
	lineupPosition: string,
	playerPosition: string,
	updated: Date,
	team: INflTeam,
	opponent: INflTeam
}