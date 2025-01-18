/* eslint-disable prettier/prettier */
import React from 'react';

const UnderConstruction = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    fontFamily: 'Arial, sans-serif',
  };

  const imageStyle = {
    width: '200px',
    height: 'auto',
    marginBottom: '20px',
  };

  const textStyle = {
    fontSize: '1.5rem',
    color: '#495057',
  };

  const subTextStyle = {
    fontSize: '1rem',
    color: '#6c757d',
  };

  return (
    <div style={containerStyle}>
      <img
        src="https://via.placeholder.com/200x200?text=🚧"
        alt="Under Construction"
        style={imageStyle}
      />
      <h1 style={textStyle}>We're Working on It!</h1>
      <p style={subTextStyle}>
        This page is under construction. Please check back later.
      </p>
    </div>
  );
};

export default UnderConstruction;