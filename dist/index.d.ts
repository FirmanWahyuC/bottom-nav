export interface Path {
    name?: string;
    path?: string;
    params?: {
        [k in string]: string;
    };
    query?: {
        [k in string]: string;
    };
}
export interface Child {
    id: number | string;
    icon?: string;
    title?: string;
    badge?: number | string;
    path?: Path | string;
}
export interface GrowOption {
    id: number | string;
    icon?: string;
    title?: string;
    color?: string;
    selected?: boolean;
    path?: Path | string;
}
export interface GrowProps {
    modelValue: number | string | null;
    options: GrowOption[];
    color?: string;
    replaceRoute?: boolean;
}
