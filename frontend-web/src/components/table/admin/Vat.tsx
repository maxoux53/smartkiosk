import { useMemo, type JSX } from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

import Edit from "../../table/Edit";
import { type vat } from "../../../type";
import { connect } from "../../../API/connect";
import { useModal } from "../../../contexts/ModalContext";

export default function Vat(): JSX.Element {
    const {setTitle, setMessage, openModal} = useModal();
    const navigate = useNavigate();

    const add = () => {
        navigate("vat/add");
    };

    const edit = (row: vat) => {
        navigate(`vat/edit/${row.type}`);
    };

    const remove = async (row: vat) => {
            try {
                await connect(`/interact/vat/${row.type}`, "DELETE");
            } catch(e) {
                setTitle("Erreur");
                setMessage(String(e));
                openModal();
            }
        };

    const vats: Promise<Array<vat>> = useMemo(
        async () => {
            try {
                return await connect("/interact/vat/", "GET");
            } catch (e){
                setTitle("Erreur");
                setMessage(String(e));
                openModal();
                return [];
            }
        },
        []
    );

    const columns = useMemo<ColumnDef<vat>[]>(
        () => [
            {
                accessorKey: "type",
                header: "Type"
            },
            {
                accessorKey: "rate",
                header: "Taux (%)"
            }
        ],
        []
    );

    return (
        <>
            <Edit
                columns={columns}
                data={vats}
                add={add}
                edit={edit}
                remove={remove}
            ></Edit>
        </>
    );
}
