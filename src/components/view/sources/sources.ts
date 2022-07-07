import './sources.css';

export interface SourceRs{
    status: string;
    source: Array<SourceItems>;
}
export interface SourceItems{
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
class Sources {
    draw(data : Array<SourceItems>){
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;

            (sourceClone.querySelector('.source__item-name') as HTMLTemplateElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLTemplateElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources')  as HTMLTemplateElement).append(fragment);
    }
}

export default Sources;
