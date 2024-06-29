import type { ClientSchema } from "@aws-amplify/backend";
import { a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
	User: a.model({
		lineUserId: a.string(),
		name: a.string(),
	}),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
	authorizationModes: {
		apiKeyAuthorizationMode: {
			expiresInDays: 30,
		},
		defaultAuthorizationMode: "oidc",
	},
	schema,
});
