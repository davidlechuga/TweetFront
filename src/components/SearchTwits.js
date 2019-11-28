import React, {
    // useEffect,
    useState
} from "react";

import twitsService from '../config/services/twitsService';

const SearchTwits = () => {
    const [search, setSearch] = useState();
    const [ setDataTwits ] = useState();
   
    //funcion anonima se ejecuta asu misma cuando se llama a si misma
    const onClick =  async () => {
        try {
            const responseDataTwits = await twitsService.searchTwitsSimpleWord(search);
            console.log(responseDataTwits);
            if (responseDataTwits) {
                setDataTwits(responseDataTwits);
                }
        }
        catch(error) {
            console.log(error);
            
        }
        
    };

    const handleChange = (e) => {
        const { value } = e.target;
        setSearch(value);
    };
       

    return (
        <div className="search-container">
            <input 
                className="search-input"
                type="text"
                onChange={handleChange}
                name="search"
                value={search}
            />
            <button 
                className="search-btn" 
                type="submit" 
                onClick={onClick} 
            > SEARCH 
            
            </button>
        </div>
    )
};

export default SearchTwits;