"use client"
import React, { useState, useEffect, useRef } from 'react';
import styles from './page.module.css';

interface ContentItem {
  id: number;
  title: string;
  content: string;
  position: { top: string; left: string };
}



const contentItems: ContentItem[] = [
  {
    id: 1,
    title: "TIỂU SỬ",
    content: "Họa sĩ Phan Phú Yên\n Sinh năm 1996 tại tỉnh Phú Yên",
    position: { top: "20%", left: "30%" }
  },
  {
    id: 2,
    title: "",
    content: "2002 – 2014: Học tiểu học, Trung học, Trung học phổ thông tại Thị trấn La Hai, Huyện Đồng Xuân, Tỉnh Phú Yên\n 2014 – 2019: Học tại trường Đại học Kiến Trúc Thành phố Hồ Chí Minh",
    position: { top: "40%", left: "30%" }
  },
  {
    id: 3,
    title: "",
    content: "2019 - đến nay: Sống và làm việc tại Thành phố Hồ Chí Minh\n 09/11 – 15/11/2024: Triển lãm cá nhân – Hoa Vàng Trên Cỏ Xanh tại Hawaii Art Place, Thành phố Hồ Chí Minh.",
    position: { top: "60%", left: "30%" }
  }
];

function Bio() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = window.scrollY;
        const containerHeight = containerRef.current.offsetHeight;
        const isScrollingDown = scrollPosition > lastScrollPosition.current;

        contentItems.forEach((item) => {
          const itemPosition = containerHeight * parseFloat(item.position.top) / 100;
          const shouldBeVisible = scrollPosition > itemPosition - window.innerHeight / 2 &&
            scrollPosition < itemPosition + window.innerHeight / 2 &&
            scrollPosition > 0;

          if (shouldBeVisible && !visibleItems.includes(item.id) && isScrollingDown) {
            setVisibleItems(prev => [...prev, item.id]);
          } else if (!shouldBeVisible && visibleItems.includes(item.id)) {
            setVisibleItems(prev => prev.filter(id => id !== item.id));
          }
        });

        lastScrollPosition.current = scrollPosition;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleItems]);

  return (
    <div className={styles.bio_container} ref={containerRef}>
      {contentItems.map((item) => (
        <div
          key={item.id}
          className={`${styles.content_wrapper} ${visibleItems.includes(item.id) ? styles.show : ''}`}
          style={{ top: item.position.top }}
        >
          <h1 className={styles.bio_title}>{item.title}</h1>
          <div className={styles.bio_box}>
            {item.content.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                <div>{line}</div>
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Bio;