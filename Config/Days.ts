export enum WeekEndDays {
    Saturday = 'SA',
    Sunday = 'SU',
}
export enum WorkDays {
    Monday = 'MO',
    Tuesday = 'TU',
    WednesDay = 'W',
    Thursday = 'TH',
    Friday = 'FR',
}
export const Days =  { ...WeekEndDays, ...WorkDays };

type ReverseMap<T> = T[keyof T];
export type T_weekEndDays = ReverseMap<typeof WeekEndDays>;
export type T_workDays = ReverseMap<typeof WorkDays>;
export type T_Days = T_workDays | T_weekEndDays;

