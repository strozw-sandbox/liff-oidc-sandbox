"use client";

import liff from "@line/liff";
import { useEffect, useState } from "react";
import { LiffContext, type LiffContextValue } from "./liff-context";

export default function LiffLayout() {
	const [liffObject, setLiffObject] = useState<LiffContextValue>(null);

	useEffect(() => {
		if (liffObject) {
			return;
		}

		liff.init(
			{ liffId: process.env.NEXT_PUBLIC_LIFF_ID ?? "" },
			() => {
				setLiffObject(liff);

				if (!liff.isLoggedIn()) {
					liff.login({
						redirectUri: "/setup",
					});
				}
			},
			(error) => () => {
				console.error(error);

				throw new Error("Liff initizalization is failed");
			},
		);
	}, [liffObject]);

	return <LiffContext.Provider value={liffObject}></LiffContext.Provider>;
}
