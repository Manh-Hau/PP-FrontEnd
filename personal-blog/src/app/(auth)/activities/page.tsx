"use client"

import React from 'react'
import styles from './page.module.css'
import work_1 from '../../../assets/image/activity-1/ac-1.1.jpg'
import work_2 from '../../../assets/image/activity-2/ac-2.2.jpg'
import work_3 from '../../../assets/image/activity-3/ac-3.3.jpg'
import work_4 from '../../../assets/image/activity-4/ac-4.3.jpg'
import work_5 from '../../../assets/image/work_2.jpg'
import { WorkBox } from '@/components/work-box'
import { useLanguage } from '@/provider/language-provider'

function Activities() {
    const { translations } = useLanguage()
    const activities = [
        { imageSrc: work_5.src, title: translations.activities.activity_1, period: "2024", detail: 1 },
        { imageSrc: work_1.src, title: translations.activities.activity_2, period: "2019", detail: 2 },
        { imageSrc: work_2.src, title: translations.activities.activity_3, period: "2018", detail: 3 },
        { imageSrc: work_3.src, title: translations.activities.activity_4, period: "2018", detail: 4 },
        { imageSrc: work_4.src, title: translations.activities.activity_5, period: "", detail: 5 },
    ];


    return (
        <div className={styles.activities_container}>
            <div className={styles.activities_header}>{translations.activities.header}</div>
            <div className={styles.break}></div>
            <div className={styles.work_group}>
                {activities.map((activity, index) => (
                    <div key={index} className={styles.work_group_item}>
                        <WorkBox
                            imageSrc={activity.imageSrc}
                            title={activity.title}
                            period={activity.period}
                            detail={activity.detail}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Activities