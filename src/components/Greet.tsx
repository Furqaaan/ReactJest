import { FC } from "react";

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
    return <div data-testid='custom-div'>Hello World {name}</div>;
};

export default Greet;
