import type { Liff } from "@line/liff";
import { createContext, useContext } from "react";

export type LiffContextValue = Liff | null;

export const LiffContext = createContext<LiffContextValue>(null);

export const useLiff = (): Liff => {
	const liff = useContext(LiffContext);

	if (!liff) {
		throw new Error("LIFF is not initialized");
	}

	return liff;
};
