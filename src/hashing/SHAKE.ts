import type fs from 'fs';

import { baseDigestStream, ShakeOptions } from './util';

export const shakeDigestStream = (
	buff: fs.ReadStream,
	format: string,
	encoding: 'base64' | 'hex',
	options: ShakeOptions
): Promise<unknown> => {
	return baseDigestStream(buff, format, encoding, options);
};
