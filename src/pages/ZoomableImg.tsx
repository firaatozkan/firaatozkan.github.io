import React, { useState, useEffect } from 'react';

const ZoomableImage: React.FC = ({ imgSrc, defaultWidth = '100%', defaultHeight = '100%', zoomedWidth = '100%', zoomedHeight = '100%', inputScale = 1.0 }) => {

    const [isZoomed, setIsZoomed] = useState(false);
    const [scale, setScale] = useState(inputScale);

    const handleImageClick = () => {
        setIsZoomed(!isZoomed);
    };

    const adjustZoomScale = () => {
        if (window.innerWidth <= 768) {
            setScale(1.6 / inputScale);
        } else if (window.innerWidth <= 1024) {
            setScale(1.3 / inputScale);
        } else {
            setScale(1.0 / inputScale);
        }
    };

    useEffect(() => {
        adjustZoomScale();
        window.addEventListener('resize', adjustZoomScale);

        return () => {
            window.removeEventListener('resize', adjustZoomScale);
        };
    }, []);

    return (
        <>
            {isZoomed && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                    }}
                    onClick={handleImageClick}
                >
                    <img
                        src={imgSrc}
                        alt="Zoomable"
                        style={{
                            cursor: 'zoom-out',
                            width: '40%',
                            height: 'auto',
                            transform: `scale(${scale})`,
                            transition: 'transform 0.3s ease-in-out',
                        }}
                    />
                </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'center', cursor: 'zoom-in' }}>
                <img
                    src={imgSrc}
                    alt="Zoomable"
                    style={{
                        width: '40%',
                        height: 'auto',
                        transition: 'transform 0.3s ease-in-out',
                    }}
                    onClick={handleImageClick}
                />
            </div>
        </>
    );
};

export default ZoomableImage;
