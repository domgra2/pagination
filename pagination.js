let samplearray = Array.from(Array(1000), (x,index) => index+1);

const settings = {
 actualPageIdx: 9, 
 entriesOnPage: 50
};

const paginateArray = (dataEntries, settings) => {
entriesOnSelectedPage = dataEntries.slice(((settings.actualPageIdx-1)*settings.entriesOnPage),(settings.actualPageIdx)*(settings.entriesOnPage));

return entriesOnSelectedPage;

}
console.log(paginateArray(samplearray,settings));