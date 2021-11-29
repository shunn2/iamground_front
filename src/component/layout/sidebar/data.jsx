import { Description, Person, Dashboard, Cloud, Settings, NotificationsActive, DocumentScanner, Dvr, Visibility } from '@mui/icons-material'
import React from 'react'

const sidebarData = [
  {
    link: '/',
    text: 'Dashboard',
    icon: <Dashboard />,
  },
  {
    link: '/scan',
    text: 'Scanning',
    icon: <DocumentScanner />,
  },
  {
    link: null,
    text: 'Monitoring',
    icon: <Dvr />,
    children: [
      {
        link: '/monitoring/log',
        text: 'Log',
        icon: <Description />,
      },
      {
        link: '/monitoring/user',
        text: 'User',
        icon: <Person />,
      },
    ],
  },
  {
    link: '/visualization',
    text: 'Visualization',
    icon: <Visibility />,
  },
  {
    link: null,
    text: 'Asset',
    icon: <Cloud />,
    children: [
      {
        link: '/cloud',
        text: 'Cloud',
        icon: <Description />,
      },
      {
        link: '/organization',
        text: 'Organization',
        icon: <Person />,
      },
    ],
  },
  {
    link: '/notification',
    text: 'Notification',
    icon: <NotificationsActive />,
  },
  {
    link: '/setting',
    text: 'Setting',
    icon: <Settings />,
  },
]

export default sidebarData
