import Home from './routes/home/home-component'
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component.jsx';
import SignIn from './routes/signin/signin.component.jsx';

const Shop = () => {
  return <div> I am the Shop</div>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='signIn' element={<SignIn />} />

      </Route>
    </Routes>
  );
};

export default App;