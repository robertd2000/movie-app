import React, { useState } from "react"

interface SearchType {
    search:  (text: string) => void
}

export const Search: React.FC<SearchType> = ({search}) => {
    const [searchValue, setSearchValue] = useState('')

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    const clickJHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
        e.preventDefault()
        if (searchValue.length > 0) {
            search(searchValue)
        }
    }

    return (
        <form className="search">
            <input type="text" defaultValue={searchValue} onChange={inputHandler} />
            <input onClick={clickJHandler} type="submit" value="SEARCH" />
        </form>
    )
}