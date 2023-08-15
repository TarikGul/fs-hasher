import yargs, { Argv } from 'yargs';

import packageJSON from '../package.json';

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
export const initCLI = () => {
    return yargs.version(packageJSON.version).options({
        hash: {
            alias: 'h'
        },
        encrypt: {
            alias: 'e'
        },
        decrypt: {
            alias: 'd'
        },
        file: {
            alias: 'f'
        },
        key: {
            alias: 'k'
        }
    }).argv
}
