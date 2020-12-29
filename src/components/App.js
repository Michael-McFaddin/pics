import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = {images: [], };
  // async await syntax

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }, 
    });
    // console.log(term);
    // console.log(response.data.results)
    this.setState({ images: response.data.results });
  }

  // axios promise based syntax using .then

  // onSearchSubmit(term) {
  //   axios.get('https://api.unsplash.com/search/photos', {
  //     params: { query: term },
  //     headers: { 
  //       Authorization: `Client-ID ${clientId}`
  //     }
  //   })
  //   .then((response) => {
  //     console.log(response.data.results)
  //   })
  // }

  render () {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;