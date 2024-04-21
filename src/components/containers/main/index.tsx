import { propType } from "@interface";
import "./style.scss"

const index = ({children}:propType) => {
    return (
        <main className="basis-4/5">
            {children}
        </main>
    );
};

export default index;