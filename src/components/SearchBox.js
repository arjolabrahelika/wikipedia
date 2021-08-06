import React from 'react';

const SearchBox = ({ searchChange}) =>{

    return(

    <div className='pa2 ' >
    <h1 className='f2'>Wikipedia Search App</h1>
    <form >
     <input 
     className='pa3 ba b--green bg-lightest-blue w-50 tc '
      type='text' 
      placeholder='Search what you need...' required
      onClick = {searchChange}
      />
      
      
      </form>
    </div>
    );
}


export default SearchBox ;