import type { ClientSchema } from "@aws-amplify/backend";
import { a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
	Todo: a
		.model({
			title: a.string(),
			isDone: a.boolean(),
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
			clientId: "client_id",
			tokenExpiryFromAuthInSeconds: 300,
			tokenExpireFromIssueInSeconds: 600,
		},
	},
	schema,
});
