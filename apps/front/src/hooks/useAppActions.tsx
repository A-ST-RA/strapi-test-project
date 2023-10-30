import { bindActionCreators } from "@reduxjs/toolkit";
import { useTypedDispatch } from "./useDispatch";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useAppActions = (actions: any) => {
  const dispatch = useTypedDispatch();

  return bindActionCreators(actions, dispatch);
}