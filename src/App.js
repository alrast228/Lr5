import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useState } from "react";
import Greeting from './Greeting';
import Counter from './Counter';
import Form from './Form';
import Title from './Title';
import ItemList from './ItemList';
import ToggleText from './ToggleText';
import CharacterCounter from './CharacterCounter';
import EditableTitle from './EditableTitle';
import DayNightToggle from './DayNightToggle';
import ImageWithCaption from './ImageWithCaption';
import TodoList from './TodoList';

function App() {
  const tasks = [
    { text: 'Задача1', completed: false },
    { text: 'Задача2', completed: true },
    { text: 'Задача3', completed: false },
  ];

  const items = ['Элемент 1', 'Элемент 2', 'Элемент 3'];
  const [show, setShow]=useState(false);
  return (
    <div className="App">
      <Header />
      <p>Это ваше первое React-приложение.</p>
      <h2>Лабораторная работа №9.</h2>
      <p>1. Создайте компонент, который отображает приветствие с именем пользователя, передаваемым через props.</p>
      <Greeting name="Александра" />
      <p>2. Реализуйте компонент счётчика, который увеличивает значение при нажатии на кнопку. Используйте useState для хранения текущего значения счётчика.</p>
      <Counter />
      <p>3. Сделайте форму с текстовым полем и кнопкой отправки. Поле должно быть управляемым компонентом, который сохраняет введённое значение в состоянии.</p>
      <Form />
      <p>4. Реализуйте компонент, который принимает через props текст и отображает его в формате заголовка h1.</p>
      <Title text="вау, заголовок" />
      <p>5. Создайте компонент, который отображает список элементов, передаваемых через props, с использованием метода .map.</p>
      <ItemList items={items} />
      <p>6. Напишите компонент, который переключает отображение текста "Да" и "Нет" при нажатии на кнопку используйте состояние.</p>
      <ToggleText />
      <p>7. Реализуйте компонент, который отображает количество оставшихся символов в текстовом поле. Максимальная длина текста — 50 символов.</p>
      <CharacterCounter />
      <p>8. Сделайте компонент, который отображает заголовок, который можно редактировать. Заголовок должен быть управляемым компонентом.</p>
      <EditableTitle />
      <p>9. Создайте компонент, который отображает сообщение "День" или "Ночь" в зависимости от состояния компонента управление с кнопки.</p>
      <DayNightToggle />
      <p>10. Реализуйте компонент, который отображает картинку с подписью. Подпись должна передаваться через props.</p>
      <ImageWithCaption
        src="https://avatars.mds.yandex.net/i?id=2b433370da038b193d196466d308aba2_l-5234328-images-thumbs&n=13"
        caption="крутая подпись"
      />
      <h2>Индивидуальное задание:</h2>
      <p>3. Сделайте компонент списка задач todo list, где каждая задача передаётся через props и может быть отмечена как выполненная.</p>
      <TodoList tasks={tasks} />
      <Footer />

    </div>
  );
}

export default App;
