export {};

declare global {
    type rangesType = 'day' | 'week' | 'month' | 'year';

    interface HighsType {
        parameter: string;
        maxTime: number;
        maxEver: number;
        minTime: number;
        minEver: number;
    }

    interface DataType {
        t: string;
        v: number;
    }
}
