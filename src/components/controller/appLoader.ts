import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '597f38a29111457ab72a3d4095c3c629', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
