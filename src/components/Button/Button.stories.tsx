import Button from "./Button";

export default {
    title: "Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {},
};

export const Example = () => {
    return (
        <div className="flex items-center justify-center">
            <Button onClick={console.log("bruh")} text="Press me"/>
        </div>
    );
};
