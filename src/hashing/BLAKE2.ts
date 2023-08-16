import type fs from 'fs';

import { baseDigestStream } from './util';

export const blake2DigestStream = (
	buff: fs.ReadStream,
	format: string,
	encoding: 'base64' | 'hex'
): Promise<unknown> => {
	return baseDigestStream(buff, format, encoding);
};
