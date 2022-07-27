import News from './news/news';
import Sources from './sources/sources';
import { INewItems, ISourceItems } from '../../types/index';
export class AppView {
    private sources: Sources;
    private news: News;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: INewItems | void) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: ISourceItems | void) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
