// import React from 'react';
// import './detailtext.css'
// const DetailTexts = () => {
//   const productInfo = [
//     { label: 'Maker', value: 'KOMATSU' },
//     { label: 'Type', value: 'WA80-3' },
//     { label: 'Serial No', value: '11689' },
//     { label: 'Year', value: '2003' },
//     { label: 'Hour', value: '4,248H' },
//     { label: 'Car Inspection', value: 'Unknown' },
//     { label: 'Weight/Capacity (kg·m³)', value: 'Unknown' },
//     { label: 'Mileage', value: 'Unknown' },
//     { label: 'Option', value: 'CAB/AC/Heater/Summer Tires/Bucket' },
//     { label: 'Stock Area', value: 'Ebetsu' },
//     { label: 'Notes', value: 'descriptoin' },
//   ];

//   const priceInfo = [
//     { label: 'Price', value: 'Member Only', link: '/login' },
//   ];

//   const contactInfo = [
//     { label: 'Quotation & Inquiry', formName: 'form1', link: '/contact', tel: '+81-11-875-1175' },
//     { label: 'Quotation & Inquiry (EN)', formName: 'form2', link: '/en/contact', tel: '+81-11-875-1175' },
//   ];

//   const links = [
//     { label: 'STOCK LIST', url: '/stocks' },
//   ];

//   return (
//     <div className="product-details container   flex flex-col items-center justify-between ">
//       <dl className="iteminfo-list">
//         {productInfo.map((info, index) => (
//           <div key={index}>
//             <dt>{info.label}</dt>
//             <dd>{info.value}</dd>
//           </div>
//         ))}
//       </dl>

//       <dl className="price">
//         {priceInfo.map((price, index) => (
//           <div key={index}>
//             <dt>{price.label}</dt>
//             <dd>
//               <a href={price.link}>{price.value}</a>
//             </dd>
//           </div>
//         ))}
//       </dl>

//       <ul className="contact">
//         {contactInfo.map((contact, index) => (
//           <li key={index}>
//             <div className="btn01">
//               <form action={contact.link} method="post" name={contact.formName}>
//                 <input type="hidden" name="select_title" value="KOMATSU WA80-3 #11689" />
//                 <input type="hidden" name="select_url" value="/stock/wheel-loader/2410-0036" />
//                 <a href="javascript:void(0)" onClick={() => document[contact.formName].submit()}>
//                   {contact.label}
//                 </a>
//               </form>
//             </div>
//             <p className="tel"><a href={`tel:${contact.tel}`}>{contact.tel}</a></p>
//           </li>
//         ))}
//       </ul>

//       <ul className=" flex justify-end items-end mt-3 md:mt-0">
//         {links.map((link, index) => (
//           <li key={index} className="btn-arrow left">
//             <a href={link.url}>{link.label}</a>
//           </li>
//         ))}
//       </ul>

//       <div className="qr-code mb-4">
//         <figure>
//           <img src="https://api.qrserver.com/v1/create-qr-code/?data=/stock/wheel-loader/2410-0036" alt="QR code for KOMATSU WA80-3 #11689" />
//         </figure>
//         <span>QR code on this page</span>
//       </div>
//     </div>
//   );
// };

// export default DetailTexts;





import React from 'react';
import './detailtext.css';

const DetailTexts = ({ product }) => {
   const language = 'en'
  const productInfo = [
    { label: 'Maker', value: product.manufacturer.name[language] },
    { label: 'Type', value: product.type[language] },
    { label: 'Serial No', value: product.serialNo[language] },
    { label: 'Year', value: product.year[language] },
    { label: 'Hour', value: product.hour[language] },
    { label: 'Car Inspection', value: product.carInspection[language] },
    { label: 'Weight/Capacity (kg·m³)', value: product.weightCapacity[language] },
    { label: 'Mileage', value: product.mileage[language] },
    { label: 'Option', value: product.option[language] },
    { label: 'Stock Area', value: product.stockArea[language] },
    { label: 'Notes', value: 'description' },
  ];

  const priceInfo = [
    { label: 'Price', value: `¥${product.price}`, link: '/login' },
  ];

  const contactInfo = [
    { label: 'Quotation & Inquiry', formName: 'form1', link: '/contact', tel: '+81-11-875-1175' },
    { label: 'Quotation & Inquiry (EN)', formName: 'form2', link: '/en/contact', tel: '+81-11-875-1175' },
  ];

  const links = [
    { label: 'STOCK LIST', url: '/stocks' },
  ];

  return (
    <div className="product-details container w-full  flex flex-col items-center justify-between"
    >
      <dl className="iteminfo-list text-center">
        {productInfo.map((info, index) => (
          <div key={index} >
            <dt>{info.label}</dt>
            <dd>{info.value}</dd>
          </div>
        ))}
      </dl>

      <dl className="price">
        {priceInfo.map((price, index) => (
          <div key={index}>
            <dt>{price.label}</dt>
            <dd>
              <a href={price.link}>{price.value}</a>
            </dd>
          </div>
        ))}
      </dl>

      <ul className="contact">
        {contactInfo.map((contact, index) => (
          <li key={index}>
            <div className="btn01">
              <form action={contact.link} method="post" name={contact.formName}>
                <input type="hidden" name="select_title" value={product.title.en} />
                <input type="hidden" name="select_url" value={`/stock/${product._id}`} />
                <a href="javascript:void(0)" onClick={() => document[contact.formName].submit()}>
                  {contact.label}
                </a>
              </form>
            </div>
            <p className="tel"><a href={`tel:${contact.tel}`}>{contact.tel}</a></p>
          </li>
        ))}
      </ul>

      <ul className="flex justify-end items-end mt-3 md:mt-0">
        {links.map((link, index) => (
          <li key={index} className="btn-arrow left">
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>

      <div className="qr-code mb-4">
        <figure>
          <img src={`https://api.qrserver.com/v1/create-qr-code/?data=/stock/${product._id}`} alt={`QR code for ${product.title.en}`} />
        </figure>
        <span>QR code on this page</span>
      </div>
    </div>
  );
};

export default DetailTexts;
