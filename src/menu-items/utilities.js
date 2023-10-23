// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined,
  SettingOutlined,
  TeamOutlined,
  AppstoreOutlined
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
  SettingOutlined,
  TeamOutlined,
  AppstoreOutlined
};

const utilities = {
  id: 'utilities',
  title: 'GYM management',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Centers',
      type: 'item',
      url: '/center',
      icon: icons.AppstoreOutlined
    },
    {
      id: 'util-color',
      title: 'Users',
      type: 'item',
      url: '/users',
      icon: icons.TeamOutlined
    },
    {
      id: 'util-shadow',
      title: 'Settings',
      type: 'item',
      url: '/settings',
      icon: icons.SettingOutlined
    }
  ]
};

export default utilities;
