import News from './news/news';
import Sources from './sources/sources';
import{ INewItems, ISourceItems} from '../../types/index'
export class AppView {
    sources: Sources;
    news: News;
    constructor() { 
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data? : INewItems) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data? : ISourceItems) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
