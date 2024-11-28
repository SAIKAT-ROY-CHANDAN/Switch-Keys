/* eslint-disable @typescript-eslint/no-explicit-any */
import { BottomGradient, LabelInputContainer } from "./svgs";
import { Input } from "./ui/acc-input";
import { Label } from "./ui/label";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userInfoSchema } from "@/validation/zodValidation";
import { toast } from "sonner";
// import { usePostOrderMutation } from "@/redux/api/baseApi";
import { setUserInfo } from "@/redux/features/authSlice";


const Delivery = () => {
  const total = useAppSelector((state) => state.totalPrice.totalPrice);
  const orders = useAppSelector((state) => state.totalPrice.counters);
  // const [postOrder] = usePostOrderMutation()
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userInfoSchema),
  });


  const handleUserInfoSubmit = async (data: any) => {

    try {
      const orderData = {
        ...data,
        orders
      }

      dispatch(setUserInfo({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone,
        address: data.address,
      }));

      // const res = await postOrder(orderData).unwrap();
      console.log(orderData);

      // if (res?.success) {
      //   window.location.href = res.clientSecret.url;
      // } else {
      //   toast.error("Failed to get payment URL.");
      // }

    } catch (error: any) {
      console.log(error);
      toast.error(error?.message || 'Failed to place Order');
    }
  };

  const getErrorMessage = (error: any) => {
    if (error) {
      return error.message;
    }
    return null;
  };



  return (
    <div className="max-w-2xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 bg-white dark:bg-black">
      <h2 className="font-bold inline-flex justify-between w-full text-xl text-neutral-800 dark:text-neutral-200">
        Delivery
      </h2>
      <form className="my-8" onSubmit={handleSubmit(handleUserInfoSubmit)}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="" type="text" {...register("firstname")} />
            {errors.firstname && (
              <p className="text-def text-xs">{getErrorMessage(errors.firstname)}</p>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="" type="text" {...register("lastname")} />
            {errors.lastname && (
              <p className="text-def text-xs">{getErrorMessage(errors.lastname)}</p>
            )}
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="" type="email" {...register("email")} />
          {errors.email && (
            <p className="text-def text-xs">{getErrorMessage(errors.email)}</p>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" placeholder="" type="phone" {...register("phone")} />
          {errors.phone && (
            <p className="text-def text-xs">{getErrorMessage(errors.phone)}</p>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="address">Address</Label>
          <Input id="address" placeholder="" type="text" {...register("address")} />
          {errors.address && (
            <p className="text-def text-xs">{getErrorMessage(errors.address)}</p>
          )}
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Place Order ${total.toFixed(2)}
          <BottomGradient />
        </button>
      </form>
    </div>
  )
}

export default Delivery