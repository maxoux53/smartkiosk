import { type JSX } from "react";
import CategoryComponent from "../../../../components/admin/management/Category";

export default function Category(): JSX.Element {
    return (
        <CategoryComponent
            actionButton={() => console.log("Modification BDD")}
        />
    );
}
