"use client";

import { useRouter } from "next/router";
import { useState } from "react";

const Searchbar = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const router = useRouter();

    const onSearch = (event: React.FormEvent) => {
        event.preventDefault();

        const encodedsearchQuery = encodeURI(searchQuery)
        router.push(`/search?q=${encodedsearchQuery}`)
        console.log("Search Query:", encodedsearchQuery)
    };
    return ( 
        <form onSubmit={onSearch}>
            <input
                value = {searchQuery}
                onChange={(event)=> setSearchQuery(event.target.value)} 
                type="text" 
                id="search" 
                name="search" 
                placeholder="Search" 
                className="search"
            />
        </form> 
    );

}
 
export default Searchbar;