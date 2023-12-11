import { Input, InputProps } from "@chakra-ui/react"
import _ from "lodash"
import { ChangeEvent, forwardRef } from "react"

interface ISearchBar extends InputProps {
  onSearch?: (v: string) => void,
  debounceWait?: number
}

const handler = ({ debounceWait = 300, onSearch, ...rest }: ISearchBar, ref?: any) => {

  const handleInputChange = _.debounce((ev: ChangeEvent<HTMLInputElement>) => {
    onSearch?.(ev.target.value)
  }, debounceWait)

  return <Input
    variant={"searchbar"}
    onChange={handleInputChange}
    placeholder="Search Phlorium"
    my="auto"
    ref={ref}
    {...rest}
  />
}

export const SearchBar = forwardRef(handler)