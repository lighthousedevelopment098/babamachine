import React from 'react';
import { useTranslation } from 'react-i18next';

const MyPage = () => {
  const { t } = useTranslation(); // Hook to access the translation function

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{t('my_page')}</h1> {/* Translated title */}
      <p className="mt-2 text-lg">{t('my_page_description')}</p> {/* Translated description */}
    </div>
  );
};

export default MyPage;
