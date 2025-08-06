import * as React from "react";
// import * as Redux from "react-redux";

/**
 * Sample hook
 */
export const useSampleHook = (): [boolean, () => void] => {
  // const dispatch = Redux.useDispatch();
  // prevent too many startMeasurement actions with the help of a flag
  const [someVar, setSomeVar] = React.useState(false);

  return [someVar, setSomeVar];
};
