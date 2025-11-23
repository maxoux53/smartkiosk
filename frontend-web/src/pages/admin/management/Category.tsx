import { type JSX } from "react";
import CategoryComponent from "../../../components/admin/management/Category";
import { useLocation, type Location } from "react-router-dom";
import type { category } from "../../../type";

export default function Category(): JSX.Element {
    const location: Location = useLocation();

    const category: category = location.state?.category;

    return category ?
            <CategoryComponent
                data={category}
                actionButton={() => console.log("Modification BDD")}
            />
        :   <CategoryComponent actionButton={() => console.log("Ajout BDD")} />;
}
