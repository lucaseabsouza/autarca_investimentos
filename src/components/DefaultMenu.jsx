import React from "react";
import { Link } from 'react-router-dom'

export default function DefaultMenu() {
    return (
        <>
            <Link to={ "/carteira" }>Carteira</Link>
        </>
    )
}