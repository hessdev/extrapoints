import { IUser } from "../user/user";

export interface IInfo {
	title: string,
	rosterWeek: number,
	scoresWeek: number,
	lineupWeek: number,
	year: number,
	years: number[],
	draftYear: number,
	draftYears: number[],
	careerYears: number[],
	scheduleYear: number,
	now: Date,
	loggedIn: boolean,
	user: IUser
}