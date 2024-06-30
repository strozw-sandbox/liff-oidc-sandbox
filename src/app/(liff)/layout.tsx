"use client";

import liff from "@line/liff";
import { type PropsWithChildren, useEffect, useState } from "react";
import { LiffContext, type LiffContextValue } from "./liff-context";

export default function LiffLayout({ children }: PropsWithChildren) {
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
					liff.login();
				}
			},
			(error) => () => {
				console.error(error);

				throw new Error("Liff initizalization is failed");
			},
		);
	}, [liffObject]);

	return (
		<LiffContext.Provider value={liffObject}>
			{liffObject?.isLoggedIn() ? children : "Liff App is initializing now..."}
		</LiffContext.Provider>
	);
}
