import { type JSX } from "react";
import CategoryComponent from "../../../../components/management/admin/Category";

export default function Category(): JSX.Element {
    return (
        <CategoryComponent
            actionButton={() => console.log("Modification BDD")}
        />
    );
}
