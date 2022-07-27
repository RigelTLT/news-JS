import AppLoader from './appLoader';
import { Callback, INewItems, ISourceItems } from '../../types/index';
class AppController extends AppLoader {
    public getSources(callback: Callback<ISourceItems | void>) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: MouseEvent, callback: Callback<INewItems | void>) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (typeof sourceId === 'string') {
                    if (newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                }
                return;
            }
            target = target.parentNode as HTMLTemplateElement;
        }
    }
}

export default AppController;
