export type SortSetType = {
    sort: SortType;
    path: string;
};
export type SortType = 'warning' | 'error' | 'success' | 'info';
export type IDType = string | number | null;
export type TimeoutType = number | 'none';
export type DirectionType = 'left' | 'right';
export type DirectionCenterType = 'left' | 'center' | 'right';
