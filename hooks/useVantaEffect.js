import { useEffect } from "react";

export default function useVantaEffect(effectFactory, elementRef, options) {
  useEffect(() => {
    if (!elementRef.current) {
      return undefined;
    }

    const vantaEffect = effectFactory({
      el: elementRef.current,
      ...options,
    });

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [effectFactory, elementRef, options]);
}
