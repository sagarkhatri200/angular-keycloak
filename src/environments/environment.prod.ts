import { KeycloakConfig } from 'keycloak-angular';

// Add here your keycloak setup infos
const keycloakConfig: KeycloakConfig = {
  url: 'http://keycloak.eberrysolutions.com/auth',
  realm: 'Prime',
  clientId: 'digital-sign-in'
};


export const environment = {
  production: true,
  keycloak: keycloakConfig,
};