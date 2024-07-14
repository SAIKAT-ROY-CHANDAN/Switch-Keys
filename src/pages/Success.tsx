

const Success = () => {
    return (
        <div className="flex translate-y-56 justify-center items-center">
            <div className="bg-white shadow-md w-[28rem] rounded-lg p-8 border">
                <div className="flex flex-col justify-center items-center gap-y-4">
                    <p className="text-3xl font-medium">Place Order Successful</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20 text-green-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Success