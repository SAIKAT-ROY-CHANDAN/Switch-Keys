import ProductCard from "@/components/ProductCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useGetProductsQuery } from "@/redux/api/baseApi"
import { TProducts } from "@/types"
import debounce from "lodash.debounce"
import { FormEvent, useEffect, useState } from "react"

const Products = () => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const { data, isLoading } = useGetProductsQuery({ sort, search: debouncedSearch })

  useEffect(() => {
    const handler = debounce(() => {
      setDebouncedSearch(search);
    }, 3000);
    handler();

    return () => {
      handler.cancel();
    }
  }, [search])

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    setDebouncedSearch(search)
  }

  if (isLoading) {
    return (
      <h1>Loading.....</h1>
    )
  }

  return (
    <div className="md:mx-20 xl:mx-10 2xl:mx-20 mt-28">
      <div className="text-2xl font-bold">
        <div className="flex flex-col gap-y-4 sm:gap-y-0 sm:flex-row w-full sm:min-w-[70%] lg:min-w-[60%] xl:min-w-[50%] 2xl:min-w-[40%] justify-center max-w-sm mx-auto items-center space-x-2">
          <form onSubmit={handleSearchSubmit} className="flex gap-x-2 sm:w-full">
            <Input
              className="border"
              type="search"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button className="flex gap-x-1" type="submit">
              <span>Search</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 20" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </Button>
          </form>

          <Select onValueChange={(value) => setSort(value)}>
            <SelectTrigger className="w-[180px] mb-1">
              <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Price</SelectLabel>
                <SelectItem value="low to high">Low to high</SelectItem>
                <SelectItem value="high to low">High to low</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-10 mb-28 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center gap-y-5 2xl:gap-2 2xl:gap-y-8">
        {data?.data?.map((item: TProducts) => (
          <ProductCard key={item?._id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Products