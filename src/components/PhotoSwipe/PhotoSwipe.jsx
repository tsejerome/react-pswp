/** @jsx jsx */
import React, { useRef, useEffect, useState } from 'react';
import { jsx, Global } from '@emotion/core';
import PropTypes from 'prop-types';
import PSWP from '../../photoswipe/dist/photoswipe';
import photoSwipeUIDefault from '../../photoswipe/dist/photoswipe-ui-default';
import PhotoSwipeWrapper from '../PhotoSwipeWrapper';

import styles from './PhotoSwipe.styles.jsx';

import '../../photoswipe/dist/photoswipe.css';

const PhotoSwipe = ({
  children,
  container,
  index,
  open,
  onIndexChange,
  onOpenChange,
  leftArrow,
  rightArrow,
  options = {},
  theme,
}) => {
  debugger;
  const pswp = useRef(null);
  const wrapper = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(index);

  const settings = {
    bgOpacity: 1,
    showHideOpacity: true,
    history: false,
    preload: [1, 1],
    ...options,
  };

  // PhotoSwipe trigger method
  const openGallery = i => {
    pswp.current = new PSWP(wrapper.current, photoSwipeUIDefault, container, {
      ...settings,
      index: i,
    });
    pswp.current.init();

    pswp.current.listen('close', () => onOpenChange(false));
    pswp.current.listen('beforeChange', () =>
      setCurrentIndex(pswp.current ? pswp.current.getCurrentIndex() : 0),
    );
    pswp.current.listen('destroy', () => {
      pswp.current = null;
    });
  };

  // Go to slide #
  const goTo = i => {
    pswp.current.goTo(i);
  };

  useEffect(() => {
    if (open) openGallery();

    return () => {
      pswp.current = null;
    };
  }, []);

  useEffect(() => {
    if (open && pswp.current === null) openGallery(index);
    if (pswp.current !== null && index !== pswp.current.getCurrentIndex()) {
      goTo(index);
    }
  }, [index, open]);

  useEffect(() => {
    onIndexChange(currentIndex);
  }, [currentIndex]);

  return (
    <>
      <Global styles={styles(theme)} />
      <PhotoSwipeWrapper
        leftArrow={leftArrow}
        rightArrow={rightArrow}
        setRef={wrapper}
      >
        {children}
      </PhotoSwipeWrapper>
    </>
  );
};

PhotoSwipe.propTypes = {
  children: PropTypes.element,
  container: PropTypes.array.isRequired,
  index: PropTypes.number,
  onIndexChange: PropTypes.func,
  onOpenChange: PropTypes.func,
  leftArrow: PropTypes.element,
  rightArrow: PropTypes.element,
  onOpenChange: PropTypes.func,
  open: PropTypes.bool,
  theme: PropTypes.object,
  options: PropTypes.object,
};

PhotoSwipe.defaultProps = {
  index: 0,
  onIndexChange: i => console.log(i),
  onOpenChange: o => console.log(o),
  open: false,
  options: {},
};

export default PhotoSwipe;
