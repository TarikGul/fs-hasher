import yargs from 'yargs';

import packageJSON from '../package.json';

export type CopyArgsv = LocalArgsType | Promise<LocalArgsType>;

export interface LocalArgsType {
	[x: string]: unknown;
	hash: string;
	encrypt: unknown;
	decrypt: unknown;
	file: string;
	key: unknown;
	createKey: unknown;
	length: number;
	h: string;
	e: unknown;
	d: unknown;
	f: string;
	k: unknown;
	c: unknown;
	l: number;
	_: (string | number)[];
	$0: string;
}

/**
 * NOTES: CLI COMMANDS
 *
 * -hash | -h SHA-256 SHA-512
 * -encrypt | -e
 * -decrypt | -d
 *
 * -f <file>
 * -k key
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
			],
		},
		encrypt: {
			alias: 'e',
			type: 'string',
		},
		decrypt: {
			alias: 'd',
			type: 'string',
		},
		file: {
			alias: 'f',
			type: 'string',
			demandOption: true,
		},
		key: {
			alias: 'k',
			type: 'string',
			demandOption: false,
		},
		createKey: {
			alias: 'c',
			type: 'string',
			demandOption: false,
		},
		length: {
			alias: 'l',
			type: 'number',
			demandOption: false,
		},
	}).argv as CopyArgsv;
};
