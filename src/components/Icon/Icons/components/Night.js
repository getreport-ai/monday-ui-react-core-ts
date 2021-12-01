/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Night = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M14.7363 3C14.7363 2.58579 14.4005 2.25 13.9863 2.25 13.5721 2.25 13.2363 2.58579 13.2363 3V3.75635H12.5625C12.1483 3.75635 11.8125 4.09213 11.8125 4.50635 11.8125 4.92056 12.1483 5.25635 12.5625 5.25635H13.2363V6.01176C13.2363 6.42598 13.5721 6.76176 13.9863 6.76176 14.4005 6.76176 14.7363 6.42598 14.7363 6.01176V5.25635H15.4072C15.8215 5.25635 16.1572 4.92056 16.1572 4.50635 16.1572 4.09213 15.8215 3.75635 15.4072 3.75635H14.7363V3zM16.3281 13.9883C16.3281 13.5741 15.9923 13.2383 15.5781 13.2383 15.1639 13.2383 14.8281 13.5741 14.8281 13.9883V14.7446H14.1543C13.7401 14.7446 13.4043 15.0804 13.4043 15.4946 13.4043 15.9088 13.7401 16.2446 14.1543 16.2446H14.8281V17C14.8281 17.4143 15.1639 17.75 15.5781 17.75 15.9923 17.75 16.3281 17.4143 16.3281 17V16.2446H16.999C17.4132 16.2446 17.749 15.9088 17.749 15.4946 17.749 15.0804 17.4132 14.7446 16.999 14.7446H16.3281V13.9883zM7.60209 5C7.93343 5.00116 8.20111 5.27067 8.2 5.602 8.2 5.60206 8.2 5.60212 8.2 5.60217 8.2 5.60317 8.2 5.60416 8.19999 5.60516 8.19572 6.90826 8.48339 7.82264 9.00216 8.41553 9.51092 8.99699 10.3299 9.36856 11.6148 9.40019 11.9437 9.40828 12.2047 9.67971 12.2 10.0087 12.1952 10.3376 11.9264 10.6014 11.5975 10.6 10.4275 10.595 9.64424 10.9332 9.1273 11.5129 8.59489 12.1101 8.26175 13.0556 8.19939 14.4273 8.18463 14.7519 7.91408 15.0058 7.58916 14.9999 7.26423 14.994 7.00304 14.7305 7.00003 14.4056 6.98803 13.1086 6.71696 12.1711 6.20684 11.5635 5.71499 10.9776 4.91472 10.5982 3.60083 10.6 3.2711 10.6005 3.00279 10.3348 3.00002 10.005 2.99725 9.67533 3.26106 9.40516 3.59074 9.40008 4.77369 9.38182 5.59126 9.06172 6.12173 8.49809 6.65727 7.92906 6.99529 7.01139 7.00001 5.598 7.00001 5.59794 7.00001 5.59789 7.00001 5.59783 7.00121 5.26649 7.27076 4.99885 7.60209 5zM7.59649 8.47109C7.43178 8.7856 7.23202 9.06929 6.99558 9.32052 6.74598 9.58572 6.46419 9.80558 6.15425 9.98384 6.52655 10.1952 6.85092 10.4644 7.12588 10.7919 7.32943 11.0343 7.4997 11.3016 7.64025 11.5901 7.8033 11.2676 7.99949 10.9747 8.23162 10.7144 8.48516 10.43 8.77328 10.1936 9.09338 10.0035 8.71486 9.7946 8.38234 9.52949 8.09906 9.20573 7.90324 8.98193 7.73646 8.73632 7.59649 8.47109z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Night.displayName = 'Night';
Night.propTypes = {
  size: PropTypes.string
}
export default Night;
/* tslint:enable */
/* eslint-enable */