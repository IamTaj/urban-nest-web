import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CustomButton({ url, title, buttonStyles }: any) {
    return (
        <Link href={url}>
            <Button
                className={`relative h-[50px] w-max overflow-hidden px-9 bg-[#fdb314] text-white shadow-2xl transition-all !rounded-buttonRadius before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-custom before:transition-all before:duration-1000 before:!rounded-buttonRadius1 hover:text-white hover:before:w-[95%] hover:bg-customYellow ${buttonStyles}`}
            >
                <span className="relative z-10">{title}</span>
            </Button>
        </Link>
    );
}
