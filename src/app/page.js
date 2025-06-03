import Faq from "./accordion/page";
import Flowbite_Default_alert from "./alert/page";
import ReactAvatarFlowbite from "./avatar/page";
import Flowbite_button from "./button/page";
import Button_Group_Flowbite from "./buttonGroup/page";
import React_card_flowbite from "./cardFlowbite/page";



export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-[10px]">

        <Faq/>
        <Flowbite_Default_alert/>
        <ReactAvatarFlowbite/>
        <Flowbite_button/>
        <Button_Group_Flowbite/>
        <React_card_flowbite/>
      </div>
    </>
  )
}
