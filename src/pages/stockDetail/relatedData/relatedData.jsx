import React from 'react';
// Import your preferred icons from react-icons, e.g., `import { AiOutlineInfoCircle } from 'react-icons/ai';`
import './relatedData.css'
const machineData = [
    {
        title: 'CAT 901C2 #YKY01616',
        serialNo: 'YKY01616',
        year: '2017年',
        hours: '760H',
        inspection: '車検不要車両',
        weightCapacity: '0.4',
        options: 'CAB/ﾋｰﾀｰ/ｽﾉｰﾀｲﾔ/ﾊﾞｹｯﾄ',
        notes: '※タイヤチェーン別売り￥30,000＋税になります。',
        price: '会員のみ / Member Only',
        image: 'https://www.machinelines.com/wp-content/uploads/2024/07/100_1413-10.jpg',
    },
    {
        title: 'KOMATSU WA150-5 #SB-W108-74533',
        serialNo: 'SB-W108-74533',
        year: '2007年',
        hours: '9,356H',
        inspection: '2025-09-20',
        weightCapacity: '1.5',
        options: 'WCAB/AC/走行ﾀﾞﾝﾊﾟｰ/ﾜﾝﾀｯﾁｶﾌﾟﾗ/ｽﾊﾟｲｸﾀｲﾔ/ﾊﾞｹｯﾄ/ﾏﾙﾁﾌﾞﾚｰﾄﾞ',
        price: '会員のみ / Member Only',
        image: 'https://www.machinelines.com/wp-content/uploads/2024/07/100_1370-9.jpg',
    },
    {
        title: 'KOMATSU WA150-5 #SB-W108-74533',
        serialNo: 'SB-W108-74533',
        year: '2007年',
        hours: '9,356H',
        inspection: '2025-09-20',
        weightCapacity: '1.5',
        options: 'WCAB/AC/走行ﾀﾞﾝﾊﾟｰ/ﾜﾝﾀｯﾁｶﾌﾟﾗ/ｽﾊﾟｲｸﾀｲﾔ/ﾊﾞｹｯﾄ/ﾏﾙﾁﾌﾞﾚｰﾄﾞ',
        price: '会員のみ / Member Only',
        image: 'https://www.machinelines.com/wp-content/uploads/2024/07/100_1370-9.jpg',
    },
    {
        title: 'KOMATSU WA150-5 #SB-W108-74533',
        serialNo: 'SB-W108-74533',
        year: '2007年',
        hours: '9,356H',
        inspection: '2025-09-20',
        weightCapacity: '1.5',
        options: 'WCAB/AC/走行ﾀﾞﾝﾊﾟｰ/ﾜﾝﾀｯﾁｶﾌﾟﾗ/ｽﾊﾟｲｸﾀｲﾔ/ﾊﾞｹｯﾄ/ﾏﾙﾁﾌﾞﾚｰﾄﾞ',
        price: '会員のみ / Member Only',
        image: 'https://www.machinelines.com/wp-content/uploads/2024/07/100_1370-9.jpg',
        link: 'https://www.machinelines.com/stock/wheel-loader/2407-0009'
    },
    // Add additional machine items here following the same structure
];

const RelatedMachines = () => {
    return (
        <section id="secRelative" className="content bg-gray02">
            <div className="inner">
                <h3 className="sec-title news-wrap">関連する機械 / Related machines</h3>
                <ul className="card-list archives">
                    {machineData.map((machine, index) => (
                        <li className="card-item" key={index}>
                            <a href={machine.link} target="_blank" rel="noopener noreferrer">
                                <figure className="img">
                                    <img
                                        src={machine.image}
                                        alt={machine.title}
                                        width="350"
                                        height="263"
                                        className="attachment-350x350 size-350x350 wp-post-image"
                                    />
                                </figure>
                                <div className="item-body">
                                    <h3 className="item-name">
                                        <span className="type-nm"></span> {machine.title}
                                    </h3>
                                    <dl className="item-info">
                                        <div>
                                            <dt>機番 / Serial No</dt>
                                            <dd>{machine.serialNo}</dd>
                                        </div>
                                        <div>
                                            <dt>年式 / Year</dt>
                                            <dd>{machine.year}</dd>
                                        </div>
                                        <div>
                                            <dt>稼働時間 / Hour</dt>
                                            <dd>{machine.hours}</dd>
                                        </div>
                                        <div>
                                            <dt>車検有無 / Car Inspection</dt>
                                            <dd>{machine.inspection}</dd>
                                        </div>
                                        <div>
                                            <dt>重量・容量 / kg・㎥</dt>
                                            <dd>{machine.weightCapacity}</dd>
                                        </div>
                                        <div>
                                            <dt>オプション / Option</dt>
                                            <dd>{machine.options}</dd>
                                        </div>
                                        {machine.notes && (
                                            <div>
                                                <dt>備考 / Notes</dt>
                                                <dd>{machine.notes}</dd>
                                            </div>
                                        )}
                                        <div>
                                            <dt>価格 / Price</dt>
                                            <dd>{machine.price}</dd>
                                        </div>
                                    </dl>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default RelatedMachines;
