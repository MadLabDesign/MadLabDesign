import { useRef, useEffect, useLayoutEffect, useState} from 'react';

const useWhyDidYouUpdate = (name: any, props: { [x: string]: any }) => {
  // Get a mutable ref object where we can store props ...
  // ... for comparison next time this hook runs.
  const previousProps = useRef<any>();

  useEffect(() => {
    if (previousProps.current) {
      // Get all keys from previous and current props
      const allKeys = Object.keys({ ...previousProps.current, ...props });
      // Use this object to keep track of changed props
      const changesObj = {};
      // Iterate through keys
      allKeys.forEach(key => {
        // If previous is different from current
        if (previousProps.current[key] !== props[key]) {
          // Add to changesObj
        }
      });

      // If changesObj not empty then output to console
      if (Object.keys(changesObj).length) {
        console.log('[why-did-you-update]', name, changesObj);
      }
    }

    // Finally update previousProps with current props for next hook call
    previousProps.current = props;
  });
};

export { useWhyDidYouUpdate };

/**
 * A hook to watch the resizing of a view to make changes to a ref.
 * Triggered once when the component loads.
 * Ideal for measuring width of components.
 * @param watchRef The ref to watch
 * @param update The update function to perform when resizing occurs.
 */
export const useOnResize = (
  watchRef: { current: any },
  _update: (arg0: any) => void,
) => {
  const update = () => {
    _update(watchRef.current);
  };
  useEffect(() => {
    update();
  });

  useLayoutEffect(() => {
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('resize', update);
    };
  }, [update]);
};

/**
 * A hook to watch the resizing of a view to make changes to anything.
 * @param update The update function to perform when resizing occurs.
 */
export const useOnResizeOnly = (update: {
  (this: Window, ev: UIEvent): any;
  (this: Window, ev: UIEvent): any;
}) => {
  useLayoutEffect(() => {
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('resize', update);
    };
  }, [update]);
};

/**
 * A hook to automatically limit the size of the text
 * @param initialState The initial text
 * @param maxChars The number of characters to limit
 * @returns [text, setText, remaining] the same as useState, but returns number of characters remaining
 */
export const useLimit = (initialState: any, maxChars: number) => {
  const [text, _setText] = useState((initialState = initialState));
  const setText = (text: string) => {
    if (text.length > maxChars) text = text.substring(0, maxChars);
    _setText(text);
  };
  const remaining = maxChars - (text ? text.length : 0);
  return [text, setText, remaining];
};
function useCallback(arg0: (watchRef: { current: any; }, _update: (arg0: any) => void) => void) {
  throw new Error('Function not implemented.');
}
