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
    return feed;
  }

  export {getNews};

