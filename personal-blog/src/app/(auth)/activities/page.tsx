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
        { imageSrc: work_5.src, title: "Triển lãm tranh Hoa Vàng Trên Cỏ Xanh", period: "2024" },
        { imageSrc: work_1.src, title: "Đấu tranh giá gây quỹ từ thiện chương trình Hoa Hậu Nam Vương Á Châu", period: "2019" },
        { imageSrc: work_2.src, title: "Giải nhất sáng tạo tác phẩm nghệ thuật về Đất nước con người Rumania", period: "2018" },
        { imageSrc: work_3.src, title: "Giải nhì hội trang trí nón lá kỉ niệm 1978 năm khởi nghĩa Hai Bà Trưng - 108 năm Quốc tế Phụ Nũ", period: "2018" },
        { imageSrc: work_4.src, title: "Tranh tường", period: "" },
    ];


    return (
        // <div className={styles.activities_container}>
        //     <div className={styles.activities_header}>HOẠT ĐỘNG</div>
        //     <div className={styles.break}></div>
        //     <div className={styles.work_group}>
        //         <div className={styles.work_group_item}>
        //             <WorkBox
        //                 imageSrc={work.src}
        //                 title="1992-1998 HÌNH THỂ TỰ DO"
        //                 period="1992-1998" />
        //         </div>
        //         <div className={styles.work_group_item}>
        //             <WorkBox
        //                 imageSrc={work.src}
        //                 title="1992-1998 HÌNH THỂ TỰ DO"
        //                 period="1992-1998" />
        //         </div>
        //         <div className={styles.work_group_item}>
        //             <WorkBox
        //                 imageSrc={work.src}
        //                 title="1992-1998 HÌNH THỂ TỰ DO"
        //                 period="1992-1998" />
        //         </div>
        //         <div className={styles.work_group_item}>
        //             <WorkBox
        //                 imageSrc={work.src}
        //                 title="1992-1998 HÌNH THỂ TỰ DO"
        //                 period="1992-1998" />
        //         </div>
        //         <div className={styles.work_group_item}>
        //             <WorkBox
        //                 imageSrc={work.src}
        //                 title="1992-1998 HÌNH THỂ TỰ DO"
        //                 period="1992-1998" />
        //         </div>
        //         <div className={styles.work_group_item}>
        //             <WorkBox
        //                 imageSrc={work.src}
        //                 title="1992-1998 HÌNH THỂ TỰ DO"
        //                 period="1992-1998" />
        //         </div>
        //     </div>

        //     {/* <div className={styles.activities_content}>
        //         <img src={work.src} alt="image for exhibition" />
        //         <div className={styles.content_detail}>
        //             <h1>HOẠ SĨ PHAN PHÚ YÊN</h1>
        //             <h2>TRIỂN LÃM TRANH HOA VÀNG TRÊN CỎ XANH</h2>
        //             <p>Bảo tàng Mỹ Thuật Thành phố Hồ Chí Minh</p>
        //             <p>Cuộc triển lãm tranh Hoa Vàng Trên Cỏ Xanh là tất cả tình yêu thương, mong nhớ của người con xa xứ gửi về quê hương - Phú Yên. <br /> <br />
        //                 Đôi lời tản mạn:
        //                 "... Tôi nhớ sớm ngày sương mờ tháng Tư La Hai, chạy bộ lên cầu Mới, nhớ hàng cây hoa sữa trên dốc Quận nở ngát một góc thị trấn nhỏ, nhớ những chiều tháng chạp lành mạnh mưa phùn, tà áo dài, mái tóc đen đạp xe đến trường, lúc vội, lúc thơ thẩn ngắm cảnh quen ven đường. Nhớ con đường ruộng xóm Giữa, đi bộ thật chậm, ngắt nụ hoa dại, bẻ cành lá non, nhìn con bước vàng bay, "Con đường hội hoạ của tôi".
        //                 Bồi hồi khi nghĩ về. Êm đềm đến lạ.
        //                 Tất cả làm tôi Yêu. Tôi yêu quê hương núi sông, cỏ cây yên bình, con người nồng hậu.
        //                 Có những thứ sẽ mãi nhớ về sau, dù tôi đi đâu, làm gì ở một nơi phồn thịnh, xa hoa, hay một nơi tôi có thể an nhiên đọc sách, uống ly trà để quên đi tất cả. Thì La Hai - Phú Yên vẫn ở đó, nguyên vẹn trong tôi như ngày ấy. Là một phần kí ức trong tôi - chân thật."</p>
        //         </div>

        //     </div> */}
        // </div>
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
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Activities