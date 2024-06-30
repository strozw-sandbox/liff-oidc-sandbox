import type { ClientSchema } from "@aws-amplify/backend";
import { a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
	User: a
		.model({
			lineUserId: a.string(),
			name: a.string(),
		})
		.authorization((allow) => [
			allow.owner("oidc").identityClaim("user_id"),
			allow.authenticated("oidc"),
		]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
	authorizationModes: {
		apiKeyAuthorizationMode: {
			expiresInDays: 30,
		},
		defaultAuthorizationMode: "oidc",
		oidcAuthorizationMode: {
			oidcProviderName: "line-login",
			oidcIssuerUrl: "https://access.line.me",
			// clientId: '',
			tokenExpiryFromAuthInSeconds: 300,
			tokenExpireFromIssueInSeconds: 600,
		},
	},
	schema,
});
