import { IDType, TimeoutType, IconType, DirectionType, DirectionCenterType } from '../types';
export interface ToastParamsInterface {
    id?: IDType;
    text: string;
    timeout?: TimeoutType;
    icon?: IconType;
    fill?: boolean;
}
export interface SlipParamsInterface {
    id?: IDType;
    text: string;
    timeout?: TimeoutType;
    icon?: IconType;
    fill?: boolean;
    direction?: DirectionType;
}
export interface MoleParamsInterface {
    id?: IDType;
    text: string;
    timeout?: TimeoutType;
    icon?: IconType;
    fill?: boolean;
    direction?: DirectionCenterType;
}
export interface AlertParamsInterface {
    id?: IDType;
    text: string;
    title?: string | null;
    timeout?: TimeoutType;
    icon?: IconType;
    fill?: boolean;
    overlay?: string;
}
