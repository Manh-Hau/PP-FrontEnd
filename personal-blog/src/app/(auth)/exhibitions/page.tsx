import React from 'react'
import styles from './page.module.css'
import work from '../../assets/image/work_2.jpg'

function Exhibitions() {
    return (
        <div className={styles.exhibitions_container}>
            <div className={styles.exhibitions_header}>TRIỂN LÃM</div>
            <div className={styles.break}></div>
            <div className={styles.exhibitions_content}>
                <img src={work.src} alt="image for exhibition" />
                <div className={styles.content_detail}>
                    <h1>HOẠ SĨ PHAN PHÚ YÊN</h1>
                    <h2>TRIỂN LÃM TRANH HOA VÀNG TRÊN CỎ XANH</h2>
                    <p>Bảo tàng Mỹ Thuật Thành phố Hồ Chí Minh</p>
                    <p>Cuộc triển lãm tranh Hoa Vàng Trên Cỏ Xanh là tất cả tình yêu thương, mong nhớ của người con xa xứ gửi về quê hương - Phú Yên. <br /> <br />
                        Đôi lời tản mạn:
                        "... Tôi nhớ sớm ngày sương mờ tháng Tư La Hai, chạy bộ lên cầu Mới, nhớ hàng cây hoa sữa trên dốc Quận nở ngát một góc thị trấn nhỏ, nhớ những chiều tháng chạp lành mạnh mưa phùn, tà áo dài, mái tóc đen đạp xe đến trường, lúc vội, lúc thơ thẩn ngắm cảnh quen ven đường. Nhớ con đường ruộng xóm Giữa, đi bộ thật chậm, ngắt nụ hoa dại, bẻ cành lá non, nhìn con bước vàng bay, "Con đường hội hoạ của tôi".
                        Bồi hồi khi nghĩ về. Êm đềm đến lạ.
                        Tất cả làm tôi Yêu. Tôi yêu quê hương núi sông, cỏ cây yên bình, con người nồng hậu.
                        Có những thứ sẽ mãi nhớ về sau, dù tôi đi đâu, làm gì ở một nơi phồn thịnh, xa hoa, hay một nơi tôi có thể an nhiên đọc sách, uống ly trà để quên đi tất cả. Thì La Hai - Phú Yên vẫn ở đó, nguyên vẹn trong tôi như ngày ấy. Là một phần kí ức trong tôi - chân thật."</p>
                </div>

            </div>
        </div>
    )
}

export default Exhibitions