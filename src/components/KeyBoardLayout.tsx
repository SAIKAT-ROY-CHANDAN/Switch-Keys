import { cards } from "@/constants/layoutDemoData"
import { LayoutGrid } from "./ui/layout-grid"

const KeyBoardLayout = () => {

  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  )
}

export default KeyBoardLayout