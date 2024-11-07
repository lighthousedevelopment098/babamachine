import React from 'react';
import './detailHeader.css'
const PageHeader = () => {
  return (
    <header id="page-header" className="snipcss-kr2oz">
      <div className="inner">
        <div className="title-wrap ">
          <p className="category">ホイルローダー / Wheel loader</p>
        </div>
        <div className="ziparchive flex justify-between">
          <h2 className="page-title">【2410-0036】 KOMATSU WA80-3 #11689</h2>

          <p className="btn-dl">
            <span style={{ fontSize: '0.41em' }}>
              写真DLは会員のみ<br />
              IMG DL Member Only
            </span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
