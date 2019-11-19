import AssistantV2 from 'ibm-watson/assistant/v2';
import { IamAuthenticator } from 'ibm-watson/auth';

const assistant = new AssistantV2({
    version: '2019-02-28',
    authenticator: new IamAuthenticator({
      apikey: 'hPgBEHAaotBsZYhmsDOEEg6v3DpWmVuSuwrC_uLek3Bb'
    }),
    url: 'https://gateway.watsonplatform.net/assistant/api'
});

export default assistant;