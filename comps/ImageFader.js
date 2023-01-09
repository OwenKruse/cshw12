import { useEffect, useState } from 'react';
import Image from "next/image";
import styles from "../styles/Home.module.css";

function ImageFader(props) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((state) => {
                let nextIndex = state + 1;
                if (nextIndex >= props.images.length) {
                    nextIndex = 0;
                }
                return nextIndex;
            });
        }, props.interval);
        return () => clearInterval(interval);
    }, [props.images, props.interval]);

    return (
        <div>
            <Image src={props.images[currentImageIndex]} alt="" width={500} height={300} className={styles.image}/>
            <div>
                {props.images.map((image, index) => (
                    <span
                        key={image}
                        style={{
                            color: index === currentImageIndex ? 'white' : 'black',
                            cursor: 'pointer',
                        }}
                        onClick={() => setCurrentImageIndex(index)}
                    >
            {index + 1}
          </span>
                ))}
            </div>
        </div>
    );
}

export default ImageFader;