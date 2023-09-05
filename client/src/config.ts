// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '...'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-bik573elk5m6pvs4.us.auth0.com',            // Auth0 domain
  clientId: '8ihuL6UPzAUTGf64Erp92B7z7onPmMAP',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
