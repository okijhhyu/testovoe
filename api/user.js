// we can get data from any DB
import Parser from 'rss-parser';


let parser = new Parser();

async function getNews() {
    let feed = (await parser.parseURL('https://news.rambler.ru/rss/world/')).items.concat((await parser.parseURL('https://www.mos.ru/rss')).items);
    feed = feed.sort((a, b) =>{
        if (new Date(`${a.pubDate}`) > new Date(`${b.pubDate}`)) {
            return -1
        }
        if (new Date(`${a.pubDate}`) < new Date(`${b.pubDate}`)) {
            return 1
        }
        return 0
    })
    const newsList = feed.map((item, i) => {
        const date = new Date(`${item.pubDate}`);
    
        const obj = {
            id: i,
            title: `${item.title}`,
            description: `${item.contentSnippet || ''}`,
            image: `${item.enclosure?.url}`,
            link: `${item.link}`,
            source: /rambler/.test(`${item.link}`) ? 'rambler' : 'mos',
            date: `${
                ('0' + date.getDate()).slice(-2) +
                '.' +
                ('0' + (date.getMonth() + 1)).slice(-2) +
                '.' +
                date.getFullYear()
            }`,
        };
    return obj;
    });
    const data =JSON.stringify(newsList)
    return newsList;
  }
  export {getNews};


