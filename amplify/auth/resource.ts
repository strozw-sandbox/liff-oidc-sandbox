import { defineAuth, secret } from "@aws-amplify/backend";

const liffUrl = String(process.env.LIFF_URL ?? "https://localhost:3000");

export const auth = defineAuth({
	loginWith: {
		email: true,
		externalProviders: {
			callbackUrls: [`${liffUrl}/liff`],
			logoutUrls: [`${liffUrl}/logouted`],
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
					attributeMapping: {},
				},
			],
		},
	},
	multifactor: {
		mode: "OFF",
	},
	userAttributes: {},
});
