"use client";

import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";
import styles from './app.module.css';

export default function Popup({
    title,
    open,
    children,
    setOpen,
    actionButton,
}: {
    title?: string;
    open: boolean;
    children: React.ReactNode;
    setOpen: (open: boolean) => void;
    actionButton?: React.ReactNode;
}) {
    return (
        <Dialog open={open} onClose={setOpen} className="relative z-[100]">
            <DialogBackdrop
                transition
                className={styles.backdrop}
            />

            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <DialogPanel
                        transition
                        className={styles.panel}
                    >
                        <div className={styles.content}>
                            <div className={styles.inner}>
                                <div className="flex-1">
                                    <DialogTitle
                                        as="h3"
                                        className={styles.title}
                                    >
                                        {title}
                                    </DialogTitle>
                                    {children}
                                </div>
                            </div>
                            <div className={styles.actionWrapper}>{actionButton}</div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
}