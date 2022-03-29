import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { startLoading, stopLoading } from '../../services/common-service';

const UIInfiniteScroll = ({ fetchMore, Items }) => {
    const containerRef = useRef();

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        };

        const observer = new IntersectionObserver(async ([entry]) => {
            if (entry.isIntersecting) {
                observer.disconnect();
                startLoading();
                await fetchMore();
                stopLoading();
            }
        }, options);
        observer.observe(containerRef.current);

        return () => {
            observer.disconnect();
        };
    }, [Items]);

    return <div ref={containerRef} />;
};

UIInfiniteScroll.propTypes = {
    fetchMore: PropTypes.func,
    Items: PropTypes.array
};

export default UIInfiniteScroll;
