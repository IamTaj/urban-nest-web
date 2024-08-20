
export default function CardWithContentOverImageComponent() {
    return (
        <div
            className="group relative w-[257.19px] h-[322.51px] bg-[url('https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center rounded-[50%] transition-all duration-500 hover:rounded-[20px] overflow-hidden"
        >
            <div className="absolute inset-0 flex items-center justify-center h-full text-white text-lg font-semibold bg-black bg-opacity-50 transform translate-y-[100%] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex gap-4 flex-col p-5">

                    <div className="title">
                        Card Title
                    </div>
                    <div className="font-thin text-[14px]">
                        {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    </div>
                </div>
            </div>
        </div>
    )
}
