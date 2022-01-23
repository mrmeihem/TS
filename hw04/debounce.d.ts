
declare module 'debounce' {
    export interface Options {
        leading: boolean,
        maxWait: number,
        trailing: boolean
    }
    export interface Debounce {
        (func: Debounce|null, wait?: number, options?: Options):Debounce
    }
    export function debounce(func: Debounce|null, wait?: number, options?: Options): Debounce;
}