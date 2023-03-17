import { FC, useState } from "react";

/**
 * The Greet component props.
 */
interface GreetProps {
    /**
     * The name of the person
     */
    name?: string;
}

const Greet: FC<GreetProps> = (props) => {
    const { name } = props;
    const [text,setText] = useState("Hello World " + name)

    return (
        <div
            data-testid="custom-div"
            style={{ background: "tomato", color: "white" }}
        >
            {text}
            <button onClick={() => setText("Clicked")}>TEST</button>

        </div>
    );
};

export default Greet;
