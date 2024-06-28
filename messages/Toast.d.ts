import { ToastParamsInterface } from '../interfaces';
import '../styles/common.css';
import '../styles/toast.css';
export declare const Toast: {
    warning: (params: ToastParamsInterface) => Promise<void>;
    error: (params: ToastParamsInterface) => Promise<void>;
    success: (params: ToastParamsInterface) => Promise<void>;
    info: (params: ToastParamsInterface) => Promise<void>;
};
