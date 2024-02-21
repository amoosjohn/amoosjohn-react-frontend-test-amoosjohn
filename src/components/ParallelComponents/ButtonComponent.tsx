import {Button} from "antd";
import React from "react";

interface getButtonProps {
    handleOnClick: () => void;
}
const ButtonComponent = ({handleOnClick}: getButtonProps)=>{
    return <Button size={'small'} type={'primary'} onClick={handleOnClick}>This</Button>
}
export default ButtonComponent;