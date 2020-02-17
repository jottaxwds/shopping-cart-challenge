import { useState } from 'react';

/**
 * Toggle custom hook
 * @param {Boolean} initialState
 * @returns {Array} flag | toggle
 */
export const useToggle = initialState => {
  const [state, setState] = useState(initialState);
  return [state, () => setState(!state)];
};
