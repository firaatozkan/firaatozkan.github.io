import React from "react";
import TypelessVector from './TypelessVector.tsx';

export interface BlogProps {
    id: String,
    title: String,
    summary: String
}

export const posts: {
    id: String,
    title: String,
    summary: String,
    component: React.FC
}[] = [
        {
            id: "Typeless Vector",
            title: "Typeless Vector",
            summary: "A humble type-erased vector implementation",
            component: TypelessVector
        }
    ];