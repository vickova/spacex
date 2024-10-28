'use client';

import React, { useEffect, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Link from "next/link";
import { useFormik } from "formik";

const getCapsules = async () => {
    const res = await fetch('https://api.spacexdata.com/v3/capsules');
    return res.json();
};

export const CapsuleLists = () => {
    const [capsules, setCapsules] = useState([]);
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        const fetchCapsules = async () => {
            const data = await getCapsules();
            setCapsules(data);
        };
        fetchCapsules();
    }, []);

    const actionBodyTemplate = (rowData) => {
        return (
            <Link href={`/${rowData.capsule_serial}`}>
            <button className="p-button p-component">
                Edit
            </button>
            </Link>
        );
    };



    // Ensure you don't have any logic that could cause differences in rendering
    return (
        <>
            <DataTable 
                value={capsules} 
                responsiveLayout="scroll" 
                paginator 
                emptyMessage="No data found" 
                paginatorTemplate="CurrentPageReport RowsPerPageDropDown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink" 
                rows={5} 
                tableStyle={{ minWidth: '50rem' }}
            >
                <Column field="capsule_id" sortable header="Capsule ID" />
                <Column field="status" sortable header="Status" />
                <Column field="original_launch" sortable header="Original Launch" />
                <Column field="landings" sortable header="Landing" />
                <Column field="type" sortable header="Type" />
                <Column header="Actions" body={actionBodyTemplate} />
            </DataTable>
            
            <div>
                {capsules.length === 0 && (
                    <p className="text-center">There are no capsules</p>
                )}
            </div>
        </>
    );
};
