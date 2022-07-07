import News from './news/news';
import Sources from './sources/sources';
import ISourceItems from './sources/sources'
import INewList from './news/news'

export class AppView {
    sources: Sources;
    news: News;
    constructor() { 
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data? : INewList) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data? : {sources: ISourceItems;}) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
