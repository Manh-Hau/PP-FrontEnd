import React from 'react'
import { Backdrop } from '../../../components/backdrop';
import { Collection } from '../../../components/collection';
import styles from "./page.module.css";

function HomePage() {
    return (
        <div>
            <Backdrop />
            <Collection />
        </div>
    )
}

export default HomePage