import Faq from "./accordion/page";
import Flowbite_Default_alert from "./alert/page";
import ReactAvatarFlowbite from "./avatar/page";
import Flowbite_button from "./button/page";
import Button_Group_Flowbite from "./buttonGroup/page";
import React_card_flowbite from "./cardFlowbite/page";
import Forms_flowbites from "./Components/Forms_flowbites";
import Modal_Flowbite from "./Components/Modal - Flowbite";
import React_Tabs from "./Components/React_Tabs";
import App_Sidebar from "./Components/Sidebar";
import App_Progress from "./progressBar/page";
import App_Rating from "./rating/page";
import App_Spinner from "./Spinner/page";



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
        <Forms_flowbites/>
        <Modal_Flowbite/>
        <React_Tabs/>
        <App_Sidebar/>
        <App_Rating/>
        <App_Progress/>
      </div>
    </>
  )
}
