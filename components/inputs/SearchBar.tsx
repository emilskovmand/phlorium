import { Input, InputProps } from "@chakra-ui/react"
import _ from "lodash"
import { ChangeEvent } from "react"

interface ISearchBar extends InputProps {
  onSearch?: (v: string) => void,
  debounceWait?: number
}

export const SearchBar = ({ debounceWait = 300, onSearch, ...rest }: ISearchBar) => {

  const handleInputChange = _.debounce((ev: ChangeEvent<HTMLInputElement>) => {
    onSearch?.(ev.target.value)
  }, debounceWait)

  return <Input
    variant={"searchbar"}
    onChange={handleInputChange}
    placeholder="Search Phlorium"
    my="auto"
    {...rest}
  />
}