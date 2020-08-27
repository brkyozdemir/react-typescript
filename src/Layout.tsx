import React, { ChangeEvent } from 'react';
import './Layout.css';
import { useTranslation } from 'react-i18next';

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (e: React.ChangeEvent<HTMLInputElement>) => {
    i18n.changeLanguage(e.target.value)
    localStorage.rTlng = e.target.value;
  }

  return <div>
    <nav className="navbar">
      <div onChange={changeLanguage}>
        <input type="radio" value="en" name="language" checked={localStorage.rTlng === 'en' && true} /> <span className="lang_radio">{t('English')}</span>
        <input type="radio" value="tr" name="language" checked={localStorage.rTlng === 'tr' && true} /> <span className="lang_radio">{t('Turkish')}</span>
    </div>
    </nav>
    <main className="layout__flex">{children}</main>
  </div>
}


export default Layout;