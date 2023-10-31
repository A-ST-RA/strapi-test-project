import { bindActionCreators } from "@reduxjs/toolkit";
import { useTypedDispatch } from "./useDispatch";
import authSlice from "@/domain/auth/slice";
import { useMemo } from "react";
import { extraAuthActions } from "@/domain/auth";

const actions = {
  ...authSlice.actions,
  ...extraAuthActions
};

export const useAppActions = () => {
  const dispatch = useTypedDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
}