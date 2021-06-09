import React, { useState, createContext, useContext } from 'react'

/**
 * Create SearchValueContext
 * Context to use theme on the app
 */
export const SearchValueContext = createContext()

/**
 * provider to manage search value
 * @param {props} props
 */
export const SearchValueProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState(null)

  return (
    <SearchValueContext.Provider value={[searchValue, setSearchValue]}>
      {children}
    </SearchValueContext.Provider>
  )
}

/**
 * Hook to get and update search value
 */
export const useSearchValue = () => {
  const searchValueManager = useContext(SearchValueContext)
  return searchValueManager || [{}]
}
