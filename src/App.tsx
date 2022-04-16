import { useReducer } from 'react';
import { Menu } from './Components/Menu/Menu';
import { RegistrationForm } from './Components/RegistrationForm';
import { appReducer, appStateInitialValue } from './Reducers/appReducer';


function App() {
  const [state, dispatch] = useReducer(appReducer, appStateInitialValue)
  return (
    <>
      <Menu appState={state} appDispatch={dispatch} />
      <RegistrationForm visible={state.registerWindow} appDispatch={dispatch} />
      <div className="land">
        <div className="content">
          <div className="header">
            <div className="headerimage" />
            <div className="headertext">
              <h1>React Project</h1>
              <h2>И переделанный на Sass кстати</h2>
            </div>
          </div>
          <div className="MessageContainer">
            <h1>Дорогой читатель,</h1>
            <p> За последнее время была предпринята попытка переписи всей верстки, добавления регистрации и меню на мой замечательный ресурс,
              но меню пока только в виде диалоговых окон без серверной поддержки(куча времени ушло на развертку этого ебанного говна на гитхабе, но теперь все на потоке).</p>
            <p> Хотелось бы услышать любой фидбек, что можно было бы подправить или добавить, готов рассматривать любые идеи, весь проджект чисто фо лулз на данный момент.</p>
            <p> В данную разработку вкладываю все свои скилзы на данный момент. Пишу без дополнительных графических фреймворков.</p>
            <div>

            </div>
            <p> С уважением, ♂Dungeon Master♂</p>

          </div>
          <div className="MessageContainer">
            <h1>Update 0.01</h1>
            <p>Предпринята попытка адаптивной верстки</p>
            <p>Теперь должно более читабельно выглядеть на телефоне</p>
            <p>Осталось разобраться с правильным масштабированием картинок</p>
            <p></p>

          </div>
        </div>
        <div className="HeadersMenu">
          <div className="HeadersMenuContainer">
            <h1>О чем пишут в качалке?</h1>
            <p>Замечательные сочинения, собранные по всему миру</p>
            <ul>
              <li>300$</li>
              <li>dungeon</li>
            </ul>
          </div>

        </div>
      </div>

    </>
  );
}

export default App;
