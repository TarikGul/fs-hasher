import crypto from 'crypto';
import type fs from 'fs';

export interface ShakeOptions {
	outputLength: number;
}

export const shakeDigestStream = (
	buff: fs.ReadStream,
	format: string,
	encoding: 'base64' | 'hex',
	options: ShakeOptions
): Promise<unknown> => {
	return new Promise((resolve, reject) => {
		const hash = crypto.createHash(format, options);
		buff.on('error', (err) => {
			reject(err);
		});
		buff.on('end', () => {
			resolve(hash.digest(encoding));
		});
		buff.pipe(hash);
	});
};
