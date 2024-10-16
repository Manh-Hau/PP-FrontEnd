"use client"
import React, { useState, useEffect, useRef } from 'react';
import styles from './page.module.css';
import bio_1 from '../../../assets/image/bio_1.jpg';
import bio_2 from '../../../assets/image/bio_2.jpg';
import bio_3 from '../../../assets/image/bio_3.jpg';

interface ContentItem {
  id: number;
  title: string;
  content: string;
  position: { top: string; left: string };
}

const contentItems: ContentItem[] = [
  {
    id: 1,
    title: "TÓM TẮT VỀ TIỂU SỬ 1",
    content: "Hoạ sĩ Phan Phú Yên (1996)\nQuên quán: Phú Yên.\nTốt nghiệp đại học Kiến Trúc Tp.Hồ Chí Minh.",
    position: { top: "20%", left: "20%" }
  },
  {
    id: 2,
    title: "TÓM TẮT VỀ TIỂU SỬ 2",
    content: "Thông tin thêm về tiểu sử 2",
    position: { top: "40%", left: "60%" }
  },
  {
    id: 3,
    title: "TÓM TẮT VỀ TIỂU SỬ 3",
    content: "Thông tin thêm về tiểu sử 3",
    position: { top: "60%", left: "20%" }
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
          style={{ top: item.position.top, left: item.position.left }}
        >
          <h1 className={styles.bio_title}>{item.title}</h1>
          <div className={styles.bio_box}>
            {item.content.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
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