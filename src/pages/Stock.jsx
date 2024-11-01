import React from 'react';
import { useTranslation } from 'react-i18next';

const Stock = () => {
  const { t } = useTranslation(); // Hook to access the translation function

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{t('our_services')}</h1> 
      <p className="mt-2 text-lg">{t('service_description')}</p> {/* Translated description */}
      <ul className="mt-4 list-disc list-inside">
        <li>{t('service_1')}</li> 
        <li>{t('service_2')}</li> 
        <li>{t('service_3')}</li> 
      </ul>
    </div>
  );
};

export default Stock;
