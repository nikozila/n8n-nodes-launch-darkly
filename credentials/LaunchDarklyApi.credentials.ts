import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class LaunchDarklyApi implements ICredentialType {
	name = 'launchDarklyApi';
	displayName = 'Launch Darkly API';
	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			default: '',
		},
	];
}
