import { useContext } from "react";
import { Context } from "../Cont";

export function useTheme() {
    return useContext(Context)
}