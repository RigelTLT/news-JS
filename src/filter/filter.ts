export function addFilter() {
    const alhabet: string[] = [
        'All',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
    ];
    const main = document.querySelector('.filter') as HTMLElement;
    alhabet.forEach((element) => {
        const button = document.createElement('div');
        button.classList.add('filter__item');
        main.append(button);
        button.innerHTML = element;
        button.addEventListener('click', hideBlock);
    });
}
export function hideBlock(event: Event) {
    const block = document.querySelectorAll('.source__item');
    const source: string = (event.target as HTMLElement).innerText;
    block.forEach((element) => {
        (element as HTMLElement).style.display = 'block';
        if (source !== 'All') {
            let firstLetter: string | undefined = (element as HTMLElement).dataset.sourceId;
            if (typeof firstLetter === 'string') {
                firstLetter = firstLetter[0].toUpperCase();
                if (firstLetter !== source) {
                    (element as HTMLElement).style.display = 'none';
                }
            }
        }
    });
}
