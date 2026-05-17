declare module "react" {
  export const StrictMode: any;
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useMemo<T>(factory: () => T, deps?: any[]): T;
  export function useRef<T>(initialValue: T | null): { current: T | null };
  export function useState<T>(initialValue: T): [T, (value: T | ((previous: T) => T)) => void];
  const React: { StrictMode: any };
  export default React;
}

declare module "react-dom/client" {
  export function createRoot(element: Element): {
    render(children: any): void;
  };
}

declare module "react/jsx-runtime" {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare namespace JSX {
  interface IntrinsicAttributes {
    key?: string | number;
  }

  interface IntrinsicElements {
    [elementName: string]: any;
  }
}
