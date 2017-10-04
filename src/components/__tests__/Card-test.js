import React from 'react';
import Card from '../Card';
import { shallow } from 'enzyme';
import { HashRouter } from 'react-router-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('Renderizar sem quebrar', () => {
  shallow(
    <HashRouter>
      <Card />
    </HashRouter>
  );
});

it('Renderizar todas informações', () => {
  const card = shallow(
    <Card
      id={5345}
      thumb="/src_da_imagem"
      views={694}
      likes={44}
      name="jose"
    />
  );

  // name
  expect(card.find('.card__name').text()).toEqual('jose');
  // thumb
  expect(card.find('.card__img').find('img').props().src).toEqual('/src_da_imagem');
  // id
  expect(card.find('.card__anchor').props().to).toEqual('/detalhe/5345');
});