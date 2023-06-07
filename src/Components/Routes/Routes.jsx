import { useRoutes } from 'react-router-dom';
import { PrivateZone } from '../../guards/PrivateZone';
import { Content } from '../Content/Content';
import Countries from '../Countries/Countries';
import NewCountries from '../Countries/NewCountries';
import { Profile } from '../Profile/Profile';
import { NotFound } from '../Content/NotFound';
import { PostHomeLayout } from '../PostComponent/PostHomeLayout';
import { PostSearchLayout } from '../PostComponent/PostSearchLayout';
import { CreatePostAI } from '../CreatePostNew/CreatePostAI';

export const Routes = () => {
  return useRoutes(
    [ 
      {
        element: <Content><PostHomeLayout /></Content>,
        path: '/'
      },
      {
        element: <Content><PostSearchLayout /></Content>,
        path: '/post/:postId'
      },
      {
        element: <PrivateZone><Content><Profile /></Content></PrivateZone>,
        path: '/profile'
      },
      {
        element: <PrivateZone><Content><Profile /></Content></PrivateZone>,
        path: '/profile/:userId'
      },
      {
        element: <Content><NewCountries /></Content>,
        path: '/countries'
      },
      {
          element: <PrivateZone><Content><CreatePostAI /></Content></PrivateZone>,
          path: '/createpostai'
      },
      {
        element: <PrivateZone><Content><NotFound /></Content></PrivateZone>,
        path: '*'
      },
    ]
  );

}