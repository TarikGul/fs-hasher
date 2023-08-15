import { initCLI } from './cli';

const main = async () => {
    const args = initCLI();

    console.log(args)
}

main();
