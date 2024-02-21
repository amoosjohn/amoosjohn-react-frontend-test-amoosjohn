import React from "react";
import {Card} from "antd";
import { LiaTrophySolid } from "react-icons/lia";

const YouAreBrilliant = () => {
    return (<Card className={'card-style'}
                  title={<div><LiaTrophySolid className={'header-icon'}/> <span
                      className={'header-text'}>You are Brilliant!</span></div>}>
        <div className={'card-text'}>
            So you have completed the frontend challenge.
            <ul>
                <li>You are the one who we were looking for.</li>
                <li>Please create a Pull Request pointing to the development branch.</li>
                <li>If you have done everything correctly, Then we will reach you out soon. If you completed only a few
                    tasks then we might not.
                </li>
                <li>See you dear candidate! Congratulations on you career.</li>
            </ul>
        </div>
    </Card>);
}
export default YouAreBrilliant;