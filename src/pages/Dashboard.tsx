import AddModal from "@/components/AddModal"
import AlertConfirmationDialog from "@/components/AlertConfirmationDialog"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import UpdateModal from "@/components/UpdateModal"
import { useGetProductsQuery } from "@/redux/api/baseApi"
import { TProducts } from "@/types"

const Dashboard = () => {
    const { data } = useGetProductsQuery({})
 ;

    return (
        <div className="w-3/4 mt-36 mx-auto bg-slate-100/30 rounded-lg p-5">
            <div className="w-full flex justify-end items-end">
                <AddModal />
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead></TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead className="text-center">Brand</TableHead>
                        <TableHead className="text-center">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.data?.map((item: TProducts) => (
                        <TableRow key={item._id}>
                            <TableCell className="font-medium w-[22%]">{item?.title}</TableCell>
                            <TableCell>
                                <img className="size-8 rounded-xl" src={item.image} alt="" />
                            </TableCell>
                            <TableCell>$ {item?.price}</TableCell>
                            <TableCell className="flex gap-4 justify-center">
                                <img className="size-6" src={item.brandImg} alt="" />
                                <h1>{item.brand}</h1>
                            </TableCell>
                            <TableCell className="">
                                <div className="flex gap-x-6 justify-center">
                                    <button>
                                        <UpdateModal item={item} />
                                    </button>
                                    <AlertConfirmationDialog id={item._id} />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default Dashboard