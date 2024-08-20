"use client"
export default function CardWithContentBelowComponent({ title, color }: any) {

    return (
        <div className="flex flex-col align-middle">
            <div
                className="group w-[257.19px] h-[322.51px] bg-[url('https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center rounded-[50%] transition-all duration-500 hover:rounded-[20px]"
            >
            </div>
            <div className="text-center pt-4 font-semibold" style={{ color: color || "#000" }}>
                {title ? title : "Re-Imagined Spaces"}
            </div>
        </div>
    )
}
