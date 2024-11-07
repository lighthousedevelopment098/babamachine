import React from 'react';
import './header.css';

const MemberHeader = ({ title }) => {
  return (
    <header id="page-headers">
      <div className="inner">
        <h2 className="page-title">{title}</h2>
      </div>
    </header>
  );
};

export default MemberHeader;
