let samplearray = Array.from(Array(1000), (x, index) => index + 1);

const settings = {
   actualPageIdx: 9,
   entriesOnPage: 50
};

const paginateArray = (dataEntries, settings) => {
   if (typeof (settings.actualPageIdx) == "number" && typeof (settings.entriesOnPage) == "number") {
      if (settings.actualPageIdx >= 1 && settings.entriesOnPage >= 1 && Number.isInteger(settings.entriesOnPage) && Number.isInteger(settings.actualPageIdx)) {
         if (Array.isArray(dataEntries)) {
            if (settings.actualPageIdx * settings.entriesOnPage <= dataEntries.length) {
               entriesOnSelectedPage = dataEntries.slice(((settings.actualPageIdx - 1) * settings.entriesOnPage), (settings.actualPageIdx) * (settings.entriesOnPage));
               return entriesOnSelectedPage;
            }
            else {
               console.log("nie ma takiej strony");
               return 0;
            }
         }
         else {
            console.log("Zły format danych. " + typeof (dataEntries));
            return 0;
         }
      }
      else {
         console.log("Liczba elementów na stronie oraz aktualna strona musi być liczbą całkowitą dodatnią.");
         return 0;
      }
   }
   else {
      console.log("Liczba elementów na stronie oraz aktualna strona musi być liczbą");
      return 0;
   }
}

console.log(paginateArray(samplearray, settings));
