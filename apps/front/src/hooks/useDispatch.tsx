import { AppDispatch } from "@/baseStore/store";
import { useDispatch } from "react-redux";

export const useTypedDispatch: () => AppDispatch = useDispatch