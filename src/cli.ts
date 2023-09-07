import yargs from 'yargs';

import packageJSON from '../package.json';

export type CopyArgsv = LocalArgsType | Promise<LocalArgsType>;

export interface LocalArgsType {
	[x: string]: unknown;
	hash: string;
	file: string;
	length: number;
	h: string;
	f: string;
	l: number;
	_: (string | number)[];
	$0: string;
}

/**
 *
 */
export const initCLI = (): CopyArgsv => {
	return yargs.version(packageJSON.version).options({
		hash: {
			alias: 'h',
			type: 'string',
			choices: [
				'SHA224',
				'SHA256',
				'SHA384',
				'SHA512',
				'SHA3-224',
				'SHA3-256',
				'SHA3-384',
				'SHA3-512',
				'SHAKE128',
				'SHAKE256',
				'BLAKE2b512',
				'BLAKE2s256',
			],
		},
		file: {
			alias: 'f',
			type: 'string',
			demandOption: true,
		},
		length: {
			alias: 'l',
			type: 'number',
			demandOption: false,
		},
	}).argv as CopyArgsv;
};
