/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "../components/ui/animated-modal";
import { Edit } from "./svgs";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useUpdateProductMutation } from "@/redux/features/dashboardActions/dashboardActionsApi";
import { toast } from "sonner";


const UpdateModal = ({ item }: any) => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            title: item.title,
            description: item.desc,
            price: item.price,
            quantity: item.quantity,
            brand: item.brand,
            link: item.image
        }
    });

    const [updateProduct] = useUpdateProductMutation()

    const onSubmit = async (data: any) => {
        data.price = Number(data.price);
        data.quantity = Number(data.quantity);
        console.log(data);
        try {
            const res = await updateProduct({ id: item._id, data }).unwrap();
            console.log(res);
            if (res?.success) {
                toast.success('Product Updated Successfully')
            }
        } catch (error: any) {
            console.log(error);
            toast.error(error?.message || 'Failed to update Product')
        }
    };

    return (
        <div className="flex items-center justify-center">
            <Modal>
                <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                    <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                        <Edit />
                    </span>
                    <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                        <Edit />
                    </div>
                </ModalTrigger>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ModalContent className="w-3/4 mx-auto">
                            <div className="mb-4">
                                <Label htmlFor="title">Name</Label>
                                <Input
                                    id="title"
                                    placeholder=""
                                    type="text"
                                    {...register('title', { required: 'Name is required' })}
                                />
                            </div>
                            <div className="mb-4">
                                <Label htmlFor="name">Description</Label>
                                <Textarea
                                    placeholder="Type your message here."
                                    {...register('description', { required: 'Description is required' })}
                                />
                            </div>
                            <div className="flex flex-col md:flex-row space-y-2 justify-center md:space-y-0 md:space-x-2 mb-4">
                                <div>
                                    <Label htmlFor="price">Price</Label>
                                    <Input
                                        id="price"
                                        placeholder=""
                                        type="text"
                                        {...register('price', { required: 'Price is required' })}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="quantity">Quantity</Label>
                                    <Input id="quantity" placeholder="" type="text"  {...register('quantity', { required: 'Quantity is required' })} />
                                </div>
                                <div>
                                    <Label htmlFor="brand">Brand</Label>
                                    <Input
                                        id="brand"
                                        placeholder=""
                                        type="text"
                                        {...register('brand', { required: 'Brand is required' })}
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <Label htmlFor="link">Link</Label>
                                <Input
                                    id="link"
                                    placeholder=""
                                    type="text"
                                    {...register('link', { required: 'Link is required' })}
                                />
                            </div>
                        </ModalContent>
                        <ModalFooter className="gap-4">
                            <Button type='submit' className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                                Update
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default UpdateModal