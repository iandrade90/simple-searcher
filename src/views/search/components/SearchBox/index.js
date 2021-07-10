import React from 'react';
import './style.css';

export default class SearchBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {searchText: '',};

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleSearchClick(){
    this.setState({searchText: ''});
    this.props.onClose();
  }

  handleTextChange(event){
    this.setState({searchText: event.target.value});
  }

  render(){

    const { isSearching } = this.props;
    const { onSearch } = this.props;
    const { searchText } = this.state;
    const { handleTextChange } = this;
    const { handleSearchClick } = this;
    
    return (
      <div className='search-box'>
	<h2 className='search-box-title'>Buscador de Personal</h2>
	<div className='search-box-buttons-'>
	  <label>
	    <input value={searchText} onChange={handleTextChange} className='search-box-input' />
	  </label>
      
	  <button onClick={() => onSearch(searchText)} disabled={!searchText.length}>Buscar</button>
	  {isSearching && <button onClick={handleSearchClick} disabled={!searchText.length}>Cerrar</button>}
	</div>
      </div>
    );
  }
}
