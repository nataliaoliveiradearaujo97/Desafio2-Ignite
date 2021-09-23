import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { MoviesProvider } from './components/MoviesContext'; 

import './styles/global.scss';

export function App() {
  return (
    <MoviesProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </MoviesProvider>
  );
}