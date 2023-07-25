'use client'

import { SearchManufacturer } from '@/components'
import { useState } from 'react'

export default function SearchBar() {
  const [menuFacturer, setMenuFacturer] = useState('')
  const handleSearch = () => {}
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={menuFacturer}
          setMenufacturer={setMenuFacturer}
        />
      </div>
    </form>
  )
}
