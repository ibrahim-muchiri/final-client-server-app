import ThirdPartyEmailPassword from 'supertokens-node/recipe/thirdpartyemailpassword';
import Session from 'supertokens-node/recipe/session';
import Dashboard from 'supertokens-node/recipe/dashboard';

export const appInfo = {
  // Learn more about this on https://supertokens.com/docs/thirdpartypasswordless/appinfo
  appName: process.env.APP_NAME,
  apiDomain: process.env.API_DOMAIN,
  websiteDomain: process.env.WEBSITE_DOMAIN,
  apiBasePath: process.env.API_BASE_PATH,
  websiteBasePath: process.env.WEBSITE_BASE_PATH,
};

export const connectionUri = process.env.CONNECTION_URI;

export const recipeList = [
  ThirdPartyEmailPassword.init({
    providers: [
      // We have provided you with development keys which you can use for testing.
      // IMPORTANT: Please replace them with your own OAuth keys for production use.
      ThirdPartyEmailPassword.Google({
        clientId:process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET_ID,
      }),
    
      ThirdPartyEmailPassword.Apple({
        clientId: process.env.APPLE_CLIENT_ID,
        clientSecret: {
          keyId: process.env.APPLE_KEY_ID,
          privateKey:process.env.APPLE_PRIVATE_KEY,
          teamId: process.env.APPLE_TEAM_ID,
        },
      }),
    ],
  }),
  Session.init(),
  Dashboard.init(),
];
