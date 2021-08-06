import React, {Component} from 'react';
import SearchList from '../components/SearchList.js'
import Scroll from '../components/Scroll.js'
import SearchBox from '../components/SearchBox'
import  './App.css'
import axios from 'axios'


class App extends Component{
    constructor(){
        super()
       this.state = {
        data: [],
        searchfield: '',
        error:''
        
       } 
    }

    

    onSearchChange = (event) =>{

    event.preventDefault()
    this.setState({searchfield : event.target.value })
  
    const {searchfield} = this.state
    
    if(searchfield){
    
        const url = `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts|pageimages&pithumbsize=400&origin=*&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${searchfield}`
        axios.get(url)
        .then( response =>  this.setState({ data: response.data.query.pages}))
        .catch(err=> this.setState({error :'Not Found'}))
        
        this.setState({error:''})
    }
}

    render(){
      const { data, error} = this.state;
      
     <SearchBox searchChange={this.onSearchChange}/>

     return error ?
     (
     <div className='tc'>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
           <h1>{error}</h1>   
        </Scroll>
     </div> )

    :(<div className='tc'>
         <SearchBox searchChange={this.onSearchChange}/>
         <Scroll>
             < SearchList items={data} />
          </Scroll>
     </div>
  
);

    
        
    }
   
}
export default App