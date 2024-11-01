import React from 'react';
import { useTranslation } from 'react-i18next';

const VendingMachine = () => {
  const { t } = useTranslation(); // Hook to access the translation function

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{t('vending_machine')}</h1> {/* Translated title */}
      <p className="mt-2 text-lg">{t('vending_machine_description')}</p> {/* Translated description */}
    </div>
  );
};

export default VendingMachine;
