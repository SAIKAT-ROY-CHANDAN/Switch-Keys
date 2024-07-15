import ProductCard from "@/components/ProductCard"
import ProductPagination from "@/components/ProductPagination"
import RangeSlider from "@/components/RangeSlider"
import LoadingAnimation from "@/components/shared/LoadingAnimation"
import { SearchIcon } from "@/components/svgs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useGetProductsQuery } from "@/redux/api/baseApi"
import { TProducts } from "@/types"
import debounce from "lodash.debounce"
import { FormEvent, useEffect, useState } from "react"

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const { data, isLoading } = useGetProductsQuery({
    sort,
    search: debouncedSearch,
    minPrice: priceRange[0],
    maxPrice: priceRange[1],
    page: currentPage,
    limit: itemsPerPage,
  });

  const debouncedSetPriceRange = debounce((values: number[]) => {
    setPriceRange(values);
  }, 300);

  useEffect(() => {
    const handler = debounce(() => {
      setDebouncedSearch(search);
    }, 2000);
    handler();

    return () => {
      handler.cancel();
    }
  }, [search])

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    setDebouncedSearch(search)
  }

  const resetFilters = () => {
    setSearch('');
    setSort('');
    setPriceRange([0, 1000]);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = data?.pagination?.totalPages || 1;


  if (isLoading) {
    return <LoadingAnimation />
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
              <SearchIcon />
            </Button>
          </form>

        </div>
      </div>
      <div className="flex gap-4 ml-6">
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
        <RangeSlider priceRange={priceRange} setPriceRange={debouncedSetPriceRange} />
        <Button onClick={resetFilters}>Reset Filters</Button>
      </div>

      <div className="mt-10 mb-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center gap-y-5 2xl:gap-2 2xl:gap-y-8">
        {data?.data?.map((item: TProducts) => (
          <ProductCard key={item?._id} item={item} />
        ))}
      </div>
      <ProductPagination handlePageChange={handlePageChange} totalPages={totalPages} currentPage={currentPage} />
    </div >
  )
}

export default Products