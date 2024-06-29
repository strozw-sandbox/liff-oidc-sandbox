import { defineAuth } from "@aws-amplify/backend";

export const auth = defineAuth({
	loginWith: {
		email: true,
		externalProviders: {
			// ログイン後のリダイレクト先
			callbackUrls: ["https://localhost:3000"],
			// ログアウト後のリダイレクト先
			logoutUrls: ["https://localhost:3000/logouted"],
			oidc: [
				{
					name: "LINE",
					scopes: ["profile", "email", "openid"],
					clientId: secret("LINE_CHANNEL_ID"),
					clientSecret: secret("LINE_CHANNEL_SECRET"),
					issuerUrl: "https://access.line.me",
					endpoints: {
						token: "https://api.line.me/oauth2/v2.1/token",
						jwksUri: "https://api.line.me/oauth2/v2.1/verify",
						userInfo: "https://api.line.me/v2/profile",
						authorization: "https://access.line.me/oauth2/v2.1/authorize",
					},
					/**
					 * 必要があれば記述
					 */
					attributeMapping: {},
				},
			],
		},
	},
	multifactor: {
		mode: "OFF",
	},
	/**
	 * ユーザープールにカスタム属性を追加したい場合記述
	 */
	userAttributes: {},
});
