type StoreApi<T> = {
    state: T;
    setState: (val: Partial<T> | T | {
        _(_state: T): T | Partial<T>;
    }['_']) => void;
    getState: () => T;
    subscribe: (listener: (...args: unknown[]) => void) => () => void;
};
type CreateStore = <T>(createState: (get: StoreApi<T>['getState'], set: StoreApi<T>['setState']) => T) => StoreApi<T>;
export declare const createStore: CreateStore;
export declare const useStore: <T, U>(api: StoreApi<T>, selector?: ((state: T) => U) | undefined) => T | ((state: T) => U) | undefined extends (...args: any[]) => any ? Partial<T> : T;
export {};
