import React from 'react';
import SearchBox from './components/SearchBox/index';
import './style.css';
import SearchResult from './components/SearchResults/index';

export default class Search extends React.Component {

  constructor(props){
    super(props);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.state = {
      isAtTop: false,
      userData: [],
      results: [],
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
	this.setState({userData: data})
      })
  }

  handleSearchClick(searchText){
    if(this.state.userData?.length){
      const searchTextMinus = searchText.toLowerCase();
      const filteredData = this.state.userData.filter((value) => (
	  value.name.toLowerCase().includes(searchTextMinus) || 
	  value.phone.toLowerCase().includes(searchTextMinus) ||
	  value.username.toLowerCase().includes(searchTextMinus) ||
	  value.email.toLowerCase().includes(searchTextMinus)
	)
      );
      this.setState({results: filteredData});
    }
    this.setState({isAtTop: true});
  }

  handleCloseClick(){
    this.setState({isAtTop: false});
    this.setState({results: []})
  }


  render(){

    const { handleSearchClick } = this;
    const { handleCloseClick } = this;
    const { isAtTop } = this.state;
    const { results } = this.state;

    return (
      <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
	<SearchBox onSearch={handleSearchClick} onClose={handleCloseClick} isSearching={isAtTop} />
	<SearchResult results={results} isSearching={isAtTop} />
      </div>
    );
  }
}
