import fs from 'fs';

import type { LocalArgsType } from './cli';
import { sha2, sha3 } from './hashing';

export const initSelector = async (args: LocalArgsType) => {
	// const k = args.k || args.key;
	const f = args.f || args.file;
	const h = args.h || args.hash;
	const buff = fs.createReadStream(f);

	if (h) {
		if (h === 'SHA224') {
			const s = await sha2.sha2DigestStream(buff, 'sha224', 'base64');
			console.log(`${f}: ${s}`);
		}
		if (h === 'SHA256') {
			const s = await sha2.sha2DigestStream(buff, 'sha256', 'base64');
			console.log(`${f}: ${s}`);
		}
		if (h === 'SHA384') {
			const s = await sha2.sha2DigestStream(buff, 'sha384', 'base64');
			console.log(`${f}: ${s}`);
		}
		if (h === 'SHA512') {
			const s = await sha2.sha2DigestStream(buff, 'sha512', 'base64');
			console.log(`${f}: ${s}`);
		}
		if (h === 'SHA3-224') {
			const s = await sha3.sha3DigestStream(buff, 'sha3-224', 'base64');
			console.log(`${f}: ${s}`);
		}
		if (h === 'SHA3-256') {
			const s = await sha3.sha3DigestStream(buff, 'sha3-256', 'base64');
			console.log(`${f}: ${s}`);
		}
		if (h === 'SHA3-384') {
			const s = await sha3.sha3DigestStream(buff, 'sha-384', 'base64');
			console.log(`${f}: ${s}`);
		}
		if (h === 'SHA3-512') {
			const s = await sha3.sha3DigestStream(buff, 'sha-512', 'base64');
			console.log(`${f}: ${s}`);
		}
	}

	if (args.e || args.encrypt) {
		// Call encrypt
	}

	if (args.d || args.decrypt) {
		// Call decrypt
	}
};
