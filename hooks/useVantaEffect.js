import { useEffect, useRef } from "react";

export default function useVantaEffect(loadEffect, elementRef, options) {
  const effectRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    if (!elementRef?.current || typeof globalThis.window === "undefined") {
      return undefined;
    }

    if (effectRef.current) {
      effectRef.current.destroy();
      effectRef.current = null;
    }

    const initEffect = async () => {
      const module = await loadEffect();
      if (!isMounted || !elementRef.current) {
        return;
      }

      const effectFactory = module?.default || module;
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
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, [loadEffect, elementRef, options]);
}
