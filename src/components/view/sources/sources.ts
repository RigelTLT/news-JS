import './sources.css';

export interface ISourceRs{
    status: string;
    source: Array<ISourceItems>;
}
export interface ISourceItems{
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
class Sources {
    draw(data : Array<ISourceItems>){
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;

            (sourceClone.querySelector('.source__item-name') as HTMLTemplateElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLTemplateElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as HTMLTemplateElement).append(fragment);
    }
}

export default Sources;
