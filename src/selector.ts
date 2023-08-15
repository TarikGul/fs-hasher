import fs from 'fs';
import type { LocalArgsType } from './cli';
import { sha } from './hashing';

export const initSelector = async (args: LocalArgsType) => {
    const k = args.k || args.key;
    const f = args.f || args.file;
    const h = args.h || args.hash;
    const buff = fs.createReadStream(f);

    if (h) {
        if(h === 'SHA256') {
            const s  = await sha.sha2DigestStream(buff, 'sha256', 'base64');
            console.log(`${f}: ${s}`);
        }
        if(h === 'SHA512') {
            const s  = await sha.sha2DigestStream(buff, 'sha512', 'base64');
            console.log(`${f}: ${s}`);
        }
    }

    if (args.e || args.encrypt) {
        // Call encrypt
    }

    if (args.d || args.decrypt) {
        // Call decrypt
    }
}
