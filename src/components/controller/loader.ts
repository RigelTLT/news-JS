import { IOptions, Callback } from '../../types/index';
class Loader {
    private baseLink: string;
    private options: IOptions;
    constructor(baseLink: string, options: IOptions) {
        this.baseLink = baseLink;
        this.options = options;
        this.errorHandler.bind(this);
    }

    public getResp(
        { endpoint, options = {} }: { endpoint: string; options?: IOptions },
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    protected errorHandler(res: Response) {
        if (!res.ok) {
            enum ResStatus {
                One = 401,
                Two,
                Three,
                Thou,
            }
            if (res.status === ResStatus.One || res.status === ResStatus.Thou)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    public makeUrl(options: IOptions, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    public load(method: string, endpoint: string, callback: Callback<void>, options: IOptions) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
