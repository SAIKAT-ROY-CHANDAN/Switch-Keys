/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { Add } from "../components/svgs/index";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "../components/ui/animated-modal";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { usePostNewProductsMutation } from "@/redux/features/dashboardActions/dashboardActionsApi";
import { toast } from "sonner";

const AddModal = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({});
    const [postNewProducts] = usePostNewProductsMutation()

    const onSubmit = async (data: any) => {
        data.price = Number(data.price);
        data.quantity = Number(data.quantity);
        console.log({data});

        try {
            const res = await postNewProducts({data}).unwrap();
            console.log(res);
            if (res?.success) {
                toast.success('Product Updated Successfully')
            }
        } catch (error: any) {
            console.log(error);
            toast.error(error?.message || 'Failed to update Product')
        }

        reset()
    };

    const getErrorMessage = (error: any) => {
        if (error) {
            return error.message;
        }
        return null;
    };


    return (
        <div className="flex items-center justify-center">
            <Modal>
                <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                    <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                        <Add />
                    </span>
                    <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                        Add
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
                                {errors.title && (
                                    <p className="text-def text-xs">{getErrorMessage(errors.title)}</p>
                                )}
                            </div>
                            <div className="mb-4">
                                <Label htmlFor="name">Description</Label>
                                <Textarea
                                    placeholder="Type your message here."
                                    {...register('desc', { required: 'Description is required' })}
                                />
                                {errors.desc && (
                                    <p className="text-def text-xs">{getErrorMessage(errors.desc)}</p>
                                )}
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
                                    {errors.price && (
                                        <p className="text-def text-xs">{getErrorMessage(errors.price)}</p>
                                    )}
                                </div>
                                <div>
                                    <Label htmlFor="quantity">Quantity</Label>
                                    <Input
                                        id="quantity"
                                        placeholder=""
                                        type="text"
                                        {...register('quantity', { required: 'Quantity is required' })}
                                    />
                                    {errors.quantity && (
                                        <p className="text-def text-xs">{getErrorMessage(errors.quantity)}</p>
                                    )}
                                </div>
                                <div>
                                    <Label htmlFor="brand">Brand</Label>
                                    <Input
                                        id="brand"
                                        placeholder=""
                                        type="text"
                                        {...register('brand', { required: 'Brand is required' })}
                                    />
                                    {errors.brand && (
                                        <p className="text-def text-xs">{getErrorMessage(errors.brand)}</p>
                                    )}
                                </div>
                            </div>
                            <div className="mb-4">
                                <Label htmlFor="image">Image Link</Label>
                                <Input
                                    id="image"
                                    placeholder=""
                                    type="text"
                                    {...register('image', { required: 'Link is required' })}
                                />
                                {errors.link && (
                                    <p className="text-def text-xs">{getErrorMessage(errors.link)}</p>
                                )}
                            </div>
                            <div className="mb-4">
                                <Label htmlFor="brandImg">Brand Image</Label>
                                <Input
                                    id="brandImg"
                                    placeholder=""
                                    type="text"
                                    {...register('brandImg', { required: 'Brand img is required' })}
                                />
                                {errors.brandImg && (
                                    <p className="text-def text-xs">{getErrorMessage(errors.brandImg)}</p>
                                )}
                            </div>
                        </ModalContent>
                        <ModalFooter className="gap-4">
                            <Button type='submit' className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                                Add <Add className="ml-2" />
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default AddModal