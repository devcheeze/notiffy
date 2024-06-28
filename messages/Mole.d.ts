import { MoleParamsInterface } from '../interfaces';
import { DirectionCenterType } from '../types';
import '../styles/common.css';
import '../styles/mole.css';
export declare const handleCountLength: (nodeCount: NodeListOf<HTMLElement>, direction: DirectionCenterType) => number;
export declare const Mole: {
    warning: (params: MoleParamsInterface) => Promise<void>;
    error: (params: MoleParamsInterface) => Promise<void>;
    success: (params: MoleParamsInterface) => Promise<void>;
    info: (params: MoleParamsInterface) => Promise<void>;
};
