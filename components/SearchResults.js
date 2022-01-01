function SearchResults({results}) {
  return(
    <div>
   About{results.searchInformation?.formattedTotalResults}
    </div>

  )
}
export default SearchResults