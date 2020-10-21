import React, { Component, ReactNode, FC } from 'react';
import { Drawer, List, ListItem } from '@material-ui/core';
import DashboardRounded from '@material-ui/icons/DashboardRounded';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';
import Transform from '@material-ui/icons/Transform';
import Fingerprint from '@material-ui/icons/Fingerprint';
import { routes } from 'utils/routes';
import { NavLink } from 'react-router-dom';
import { i18n } from 'utils/lib/i18n';

interface IListItem {
  icons: ReactNode;
  translationKey: string;
  link: string;
}

const RenderListItem: FC<IListItem> = ({ icons, translationKey, link }) => {
  return (
    <div key={translationKey}>
      <ListItem className="list-item" button>
        <NavLink
          exact
          to={link}
          className="list-group-item"
          activeClassName="selected"
        >
          <span className="icons">{icons}</span>
          <p className="name">{translationKey}</p>
        </NavLink>
      </ListItem>
    </div>
  );
};

export class Sidebar extends Component<{}> {
  public render(): ReactNode {
    const dash = <DashboardRounded />;
    const list = <FormatListBulleted />;
    const styleguide = <Transform />;
    const finger = <Fingerprint />;

    return (
      <>
        <Drawer className="sidebar" variant="permanent">
          <List>
            <RenderListItem
              icons={dash}
              translationKey={i18n.t('sidebar.home')}
              link={routes.home}
            />
            <RenderListItem
              icons={list}
              translationKey={i18n.t('sidebar.listing')}
              link={routes.employee}
            />
            <RenderListItem
              icons={styleguide}
              translationKey={i18n.t('sidebar.styleguide')}
              link={routes.styleguide}
            />
            <RenderListItem
              icons={finger}
              translationKey={i18n.t('sidebar.algorithm')}
              link={routes.algorithm}
            />
          </List>
        </Drawer>
      </>
    );
  }
}
