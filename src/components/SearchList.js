import React from 'react';

const SearchList = ( {items} ) => {
 
 return(
 
 <div>
   
      {
        Object.keys(items).map(key => (
          
          <div className="bg-light-yellow tc dii br3 pa3 ma4 grow bw2 shadow-5">

            {
              items[key].thumbnail && <a rel="noopener noreferrer" href={`https://en.wikipedia.org/?curid=${key}`} target="_blank">
                <img className="w-full max-w-xs m-auto" src={items[key].thumbnail.source} alt={items[key].title} />
              </a>
            }

            <div className="px-6 py-4 pa2">
              <div className="font-bold text-xl mb-2">
                <a className="link dim dark-red" rel="noopener noreferrer" href={`https://en.wikipedia.org/?curid=${key}`} target="_blank"> {items[key].title}
                </a>
              </div>
              <p className="text-gray-700 text-base mb-2">{items[key].extract}</p>
              <a className="link dim blue" rel="noopener noreferrer" href={`https://en.wikipedia.org/?curid=${key}`} target="_blank">
                Read More...
              </a>
            </div>
          </div>
        ))
      }
    </div>
    );
} 
  


export default SearchList