import React from 'react';
import { useTranslation } from 'react-i18next';

const Member = () => {
  const { t } = useTranslation(); // Hook to access the translation function

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{t('members_area')}</h1> {/* Translated title */}
      <p className="mt-2 text-lg">{t('member_description')}</p> {/* Translated description */}
    </div>
  );
};

export default Member;
