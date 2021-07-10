import React from 'react';
import SearchResultItems from './SearchResultItems';

export default class SearchResult extends React.Component {
  render(){

    const { results } = this.props;
    const { isSearching } = this.props;

    return(
      <div style={{ width: "100%", padding: "0rem 2rem 0rem 2rem" }}>
	{!results?.length && isSearching && <p>No existen resultados</p>}
	{results?.map((value) =>
	  <SearchResultItems key={value.id} {...value} />
	)}
      </div>
    );
  }
}
