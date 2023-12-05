import { searchResult, type SearchResult } from "../../../global/store/search";
import { searchModalState } from "../../../global/store/searchModal"

export const showSearchDetails = () => {
  let result: SearchResult | undefined;
  searchResult.subscribe(data => {
    if(data) {
      result = data;
    }
  })
  if(!result) return;
  searchModalState.set({
    title: "Detalle de búsqueda",
    result
  });
}