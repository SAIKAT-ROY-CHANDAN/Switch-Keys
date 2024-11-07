import { usePostPaymentVerifiedOrderMutation } from '@/redux/api/baseApi';
import { useAppSelector } from '@/redux/hooks';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'sonner';

const Success = () => {
    const [paymentStatus, setPaymentStatus] = useState<'success' | 'failed' | null>(null);
    const { search } = useLocation();
    const sessionId = new URLSearchParams(search).get('session_id');
    const userInfo = useAppSelector((state) => state.auth.userInfo);
    const orders = useAppSelector((state) => state.totalPrice.counters);
    const [postPaymentVerifiedOrder] = usePostPaymentVerifiedOrderMutation();

    console.log(orders, userInfo);

    useEffect(() => {
        const verifyPayment = async () => {
            try {
                // const response = await fetch(`http://localhost:5000/api/order/verify-payment?session_id=${sessionId}`, {
                const response = await fetch(`https://switch-keys-as-server-4.vercel.app/api/order/verify-payment?session_id=${sessionId}`, {
                    method: 'GET',
                });
                const data = await response.json();

                console.log(data);

                if (data.success) {
                    setPaymentStatus('success');

                    const orderData = {
                        ...userInfo,
                        orders,
                    };
                    console.log(orderData);
                    try {
                        const result = await postPaymentVerifiedOrder(orderData).unwrap();
                        console.log(result)
                        toast.success("Order created successfully!");
                        console.log("Order creation result:", result);
                    } catch (error) {
                        console.error("Error creating order:", error);
                        toast.error("Failed to create order.");
                    }
                } else {
                    setPaymentStatus('failed');
                }
            } catch (error) {
                console.error('Error verifying payment:', error);
                setPaymentStatus('failed');
            }
        };

        if (sessionId) {
            verifyPayment();
        }
    }, [sessionId, postPaymentVerifiedOrder, userInfo, orders]);


    return (
        <div className="flex translate-y-56 justify-center items-center">
            <div className="bg-white shadow-md w-[28rem] rounded-lg p-8 border">
                <div className="flex flex-col justify-center items-center gap-y-4">
                    {paymentStatus === 'success' ? (
                        <>
                            <p className="text-3xl font-medium">Place Order Successful</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20 text-green-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </>
                    ) : (
                        <p className="text-3xl font-medium">Payment Failed</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Success;
