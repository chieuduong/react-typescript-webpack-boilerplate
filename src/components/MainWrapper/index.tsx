import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import { TopBar } from 'components/TopBar';
import { Sidebar } from 'components/Sidebar';
import history from 'utils/history';
import navigate from 'utils/navigate';
import { helper } from 'utils/helper';
import { routes } from 'utils/routes';

export const MainWrapper: React.FC = (props: any) => {
  const { children } = props;

  useEffect(() => {
    if (!helper.authenticated()) {
      navigate(routes.login);
    }
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <TopBar />
      </header>
      <Router history={history}>
        <Sidebar />
        <div className="content-wrapper">{children}</div>
      </Router>
    </div>
  );
};
