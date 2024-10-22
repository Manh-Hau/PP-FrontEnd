"use client"

import React from 'react'
import styles from './page.module.css'
import work_1 from '../../../assets/image/activity-1/ac-1.1.jpg'
import work_2 from '../../../assets/image/activity-2/ac-2.2.jpg'
import work_3 from '../../../assets/image/activity-3/ac-3.3.jpg'
import work_4 from '../../../assets/image/activity-4/ac-4.3.jpg'
import work_5 from '../../../assets/image/work_2.jpg'
import { WorkBox } from '@/components/work-box'

function Activities() {

    const activities = [
        { imageSrc: work_5.src, title: "Triển lãm cá nhân Hoa Vàng Trên Cỏ Xanh", period: "2024", detail: 1 },
        { imageSrc: work_1.src, title: "Đấu tranh giá gây quỹ từ thiện chương trình Hoa Hậu Nam Vương Á Âu", period: "2019", detail: 2 },
        { imageSrc: work_2.src, title: "Giải nhất sáng tạo tác phẩm nghệ thuật về Đất nước con người Rumania", period: "2018", detail: 3 },
        { imageSrc: work_3.src, title: "Giải nhì hội thi trang trí nón lá kỉ niệm 1978 năm khởi nghĩa Hai Bà Trưng - 108 năm Quốc tế Phụ Nữ", period: "2018", detail: 4 },
        { imageSrc: work_4.src, title: "Tranh tường", period: "", detail: 5 },
    ];


    return (
        <div className={styles.activities_container}>
            <div className={styles.activities_header}>HOẠT ĐỘNG</div>
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