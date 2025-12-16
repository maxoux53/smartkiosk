import { type JSX } from "react";
import Category from "../../../../components/management/admin/Category";
//import { useParams } from "react-router-dom";
import type { category } from "../../../../type";

export default function EditCategory(): JSX.Element {
    //const params = useParams();

    const category: category | null = null; // voir plus tard avec la requête à l'api avec l'id

    return (
        <main>
            {category ?
                <Category
                    data={category}
                    actionButton={() => console.log("Modification BDD")}
                />
            :   <></>}
        </main>
    );
}
