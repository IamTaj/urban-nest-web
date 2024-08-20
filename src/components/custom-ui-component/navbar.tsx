import React from "react"
import { Button } from "../ui/button"
import RotatingText from "./rotatingtext-component"
import { URBANNEST } from "@/lib/constants"
import Link from "next/link"
import CustomButton from "./hoc/CustomButtonHOC"

export default function Navbar() {
  const session = {}
  return (
    <nav className="p-4 md:p-6 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">

        <RotatingText
          text={"Urban Nest"}
          image={URBANNEST}
          imageStyles={"!w-[30px]"}
        />
        <div className="w-max bg-slate-500">Search For Property</div>
        {!session ? (
          // (
          //   <>
          //     <span className="mr-4">Welcome, {name || user?.email} !</span>
          //     <Button
          //       className="w-full md:w-auto bg-customPurple hover:bg-purple-400"
          //       onClick={() => signOut({ callbackUrl: "/" })}>
          //       Logout
          //     </Button>
          //   </>
          // )
          <></>
        ) : (
          <>
            {/* <Link href={"/sign-in"}>
              <Button className="relative h-[50px] w-max overflow-hidden px-9 bg-[#fdb314] text-white shadow-2xl transition-all !rounded-buttonRadius before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-custom before:transition-all before:duration-1000 before:!rounded-buttonRadius1 hover:text-white hover:before:w-[95%] hover:bg-customYellow">
                <span className="relative z-10">Book your stay</span>
              </Button>
            </Link> */}
            <CustomButton url={"/sign-in"} title={"Register"} gradientWidth={"20%"} />
          </>
        )}
      </div>
    </nav>
  )
}
