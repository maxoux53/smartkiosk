import { type JSX } from "react";
import CategoryComponent from "../../../../components/management/admin/Category";
//import { useParams } from "react-router-dom";
import type { category } from "../../../../type";

export default function Category(): JSX.Element {
    //const params = useParams();

    const category: category | null = null; // voir plus tard avec la requête à l'api avec l'id

    return (
        <main>
            {category ? (
                <CategoryComponent
                    data={category}
                    actionButton={() => console.log("Modification BDD")}
                />
            ) : (
                <></>
            )}
        </main>
    );
}

