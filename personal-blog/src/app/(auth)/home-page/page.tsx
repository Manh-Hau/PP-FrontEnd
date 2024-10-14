import React from 'react'
import { Backdrop } from '../../../components/backdrop';
import { Collection } from '../../../components/collection';
import { Footer } from '../../../components/footer';
import { Header } from '../../../components/header';
import styles from "./page.module.css";

function HomePage() {
    return (
        <div>
            <Backdrop />
            <Collection />
            <Footer />
        </div>
    )
}

export default HomePage