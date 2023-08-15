import { initCLI } from './cli';
import { initSelector } from './selector';

const main = async () => {
    const args = await initCLI();

    await initSelector(args);
}

main();
