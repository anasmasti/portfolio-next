import { useEffect, useRef } from "react";

export type VantaOptions = Record<string, unknown>;
type VantaEffect = {
  destroy?: () => void;
};
export type VantaModule =
  | ((options: VantaOptions) => VantaEffect)
  | { default?: (options: VantaOptions) => VantaEffect };
export type LoadEffect = () => Promise<VantaModule>;

export default function useVantaEffect(
  loadEffect: LoadEffect,
  elementRef: React.RefObject<HTMLElement | null>,
  options: VantaOptions
) {
  const effectRef = useRef<VantaEffect | null>(null);

  useEffect(() => {
    let isMounted = true;

    if (!elementRef?.current || typeof globalThis.window === "undefined") {
      return undefined;
    }

    if (effectRef.current) {
      effectRef.current.destroy?.();
      effectRef.current = null;
    }

    const initEffect = async () => {
      const module = await loadEffect();
      if (!isMounted || !elementRef.current) {
        return;
      }

      const effectFactory =
        typeof module === "function" ? module : module?.default;
      if (typeof effectFactory !== "function") {
        return;
      }

      effectRef.current = effectFactory({
        el: elementRef.current,
        ...options,
      });
    };

    initEffect();

    return () => {
      isMounted = false;
      if (effectRef.current) {
        effectRef.current.destroy?.();
        effectRef.current = null;
      }
    };
  }, [loadEffect, elementRef, options]);
}
