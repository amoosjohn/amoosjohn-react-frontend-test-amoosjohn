import {useEffect, useState} from "react";

export const Counter = () => {
    let [remainingTime, setRemainingTime] = useState(60);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (remainingTime > 0) {
                setRemainingTime(prevTime => prevTime - 1);
            } else {
                clearInterval(intervalId);
            }
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <p>Remaining time: {remainingTime} seconds. This should update each second</p>
        </div>
    );
}
