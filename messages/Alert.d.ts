import { AlertParamsInterface } from '../interfaces';
import '../styles/common.css';
import '../styles/alert.css';
export declare const Alert: {
    warning: (params: AlertParamsInterface) => Promise<void>;
    error: (params: AlertParamsInterface) => Promise<void>;
    success: (params: AlertParamsInterface) => Promise<void>;
    info: (params: AlertParamsInterface) => Promise<void>;
};
