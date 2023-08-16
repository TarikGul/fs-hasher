import crypto from 'crypto';
import type fs from 'fs';

export const sha2DigestStream = (
	buff: fs.ReadStream,
	format: string,
	encoding: 'base64' | 'hex'
): Promise<unknown> => {
	return new Promise((resolve, reject) => {
		const hash = crypto.createHash(format);
		buff.on('error', (err) => {
			reject(err);
		});
		buff.on('end', () => {
			resolve(hash.digest(encoding));
		});
		buff.pipe(hash);
	});
};
