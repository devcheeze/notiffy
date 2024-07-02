export type SortSetType = {
    sort: SortType;
    icon: {
        standard: string;
        outlined: string;
        shield: string;
        unadorned: string;
    };
};
export type SortType = 'warning' | 'error' | 'success' | 'info';
export type IDType = string | number | null;
export type TimeoutType = number | 'none';
export type IconType = 'standard' | 'outlined' | 'shield' | 'unadorned' | 'none';
export type DirectionType = 'left' | 'right';
export type DirectionCenterType = 'left' | 'center' | 'right';
