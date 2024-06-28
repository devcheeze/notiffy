import { SlipParamsInterface } from '../interfaces';
import '../styles/common.css';
import '../styles/slip.css';
export declare const Slip: {
    warning: (params: SlipParamsInterface) => Promise<void>;
    error: (params: SlipParamsInterface) => Promise<void>;
    success: (params: SlipParamsInterface) => Promise<void>;
    info: (params: SlipParamsInterface) => Promise<void>;
};
