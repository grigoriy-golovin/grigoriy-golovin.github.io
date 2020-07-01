(function () {
  'use strict';

  class AbstractView {
    constructor() {

    }

    render() {
      this._element = document.createElement(`div`);
      this._element.innerHTML = this.template;
    }

    bind() {}

    get template() {
      if (new.target === AbstractView) {
        throw new Error(
          `метод template у класса AbstractView является абстрактным,
        он должен быть переоределен у потомков класса`
        );
      }
    }

    get element() {
      if (this._element) {
        return this._element;
      }
      this.render();
      this.bind();
      return this._element;
    }
  }

  class IntroView extends AbstractView {
    constructor() {
      super();
    }

    bind() {
      this.element.querySelector(`.intro__asterisk`).onclick = (evt) => {
        evt.preventDefault();
        this.onClickStar();
      };
    }

    onClickStar() {}

    get template() {
      return `<section class="intro">
    <button class="intro__asterisk asterisk" type="button">
    <span class="visually-hidden">Продолжить</span>
    *
    </button>
    <p class="intro__motto">
      <sup>*</sup>
      Это не фото. Это рисунок маслом нидерландского художника-фотореалиста
      Tjalf Sparnaay.
    </p>
  </section>`;
    }
  }

  class IntroPresenter {
    constructor() {
      this.myIntro = new IntroView();
      this.myIntro.onClickStar = () => Application.start();
    }

    get element() {
      return this.myIntro.element;
    }
  }

  class GreetingView extends AbstractView {
    constructor() {
      super();
    }

    bind() {
      this.element.querySelector(`.greeting__continue`).onclick = (evt) => {
        evt.preventDefault();
        this.onClick();
      };
    }

    onClick() {}

    get template() {
      return  `<section class="greeting central--blur">
    <img class="greeting__logo" src="img/logo_ph-big.svg" width="201" height="89" alt="Pixel Hunter">
    <div class="greeting__asterisk asterisk"><span class="visually-hidden">Я просто красивая звёздочка</span>*</div>
    <div class="greeting__challenge">
      <h3 class="greeting__challenge-title">Лучшие художники-фотореалисты бросают тебе вызов!</h3>
      <p class="greeting__challenge-text">Правила игры просты:</p>
      <ul class="greeting__challenge-list">
        <li>Нужно отличить рисунок от фотографии и сделать выбор.</li>
        <li>Задача кажется тривиальной, но не думай, что все так просто.</li>
        <li>Фотореализм обманчив и коварен.</li>
        <li>Помни, главное — смотреть очень внимательно.</li>
      </ul>
    </div>
    <button class="greeting__continue" type="button">
      <span class="visually-hidden">Продолжить</span>
      <svg class="icon" width="64" height="64" viewBox="0 0 64 64" fill="#000000">
        <use xlink:href="img/sprite.svg#arrow-right"></use>
      </svg>
    </button>
  </section>`
    }
  }

  class RulesView extends AbstractView {
    constructor() {
      super();
    }

    bind() {
      this.element.querySelector(`.back`).onclick = (evt) => {
        evt.preventDefault();
        this.onClickBack();
      };
      const input = this.element.querySelector(`.rules__input`);
      const buttonGo =this.element.querySelector(`.rules__button`);

      input.oninput = () => {
        if (input.validity.valid) {
          buttonGo.removeAttribute(`disabled`);
        } else {
          buttonGo.setAttribute(`disabled`, `disabled`);
        }
      };

      buttonGo.onclick = (evt) => {
        evt.preventDefault();
        const name = input.value;
        this.onClickGo(name);
      };
    }

    onClickBack() {}
    onClickGo(name) {}

    get template() {
      return `<header class="header">
    <button class="back">
      <span class="visually-hidden">Вернуться к началу</span>
      <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
        <use xlink:href="img/sprite.svg#arrow-left"></use>
      </svg>
      <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
        <use xlink:href="img/sprite.svg#logo-small"></use>
      </svg>
    </button>
  </header>
  <section class="rules">
    <h2 class="rules__title">Правила</h2>
    <ul class="rules__description">
      <li>Угадай 10 раз для каждого изображения фото
        <img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото"> или рисунок
        <img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"></li>
      <li>Фотографиями или рисунками могут быть оба изображения.</li>
      <li>На каждую попытку отводится 30 секунд.</li>
      <li>Ошибиться можно не более 3 раз.</li>
    </ul>
    <p class="rules__ready">Готовы?</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя" required>
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </section>`;
    }
  }

  class RulesPresenter {
    constructor() {
      this.rules = new RulesView();
      this.rules.onClickBack = () => Application.showWelcome();

      this.rules.onClickGo = (name) => {
        Application.showGame(name);
      };
    }

    get element() {
      return this.rules.element;
    }
  }

  const main = document.querySelector(`#main`);

  const changeView = (screen) => {
    main.innerHTML = ``;
    main.append(screen);
  };

  const changeFierstInMain = (screen) => {
    main.children[0].firstChild.replaceWith(screen);
  };

  const resize = (frame, given) => {
    let mainCoeff;
    const heightCoeff = given.height / frame.height;
    const widthCorff = given.width / frame.width;

    if (widthCorff > heightCoeff) {
      mainCoeff = widthCorff;
    } else {
      mainCoeff = heightCoeff;
    }

    return {
      width: given.width / mainCoeff,
      height: given.height / mainCoeff,
    };
  };

  class GreetingPresenter {
    constructor() {
      this.myGreeting = new GreetingView();
      this.myGreeting.onClick = () => {
        this.rulesPresenter = new RulesPresenter();
        changeView(this.rulesPresenter.element);
      };
    }

    get element() {
      return this.myGreeting.element;
    }
  }

  class Game1View extends AbstractView {
    constructor(data, stats) {
      super();
      this.data = data;
      this.stats = stats;
      this.frame = {
        width: 468,
        height: 458,
      };

      this.givenArr = this.getGivenArr(this.data);
      this.resizeArr = this.givenArr.map((item) => resize(this.frame, item));
    }

    bind() {
      const form = this.element.querySelector(`.game__content`);
      form.onchange = (evt) => {
        if (form.checkValidity()) {
          let answers = [
            form.elements.question1.value,
            form.elements.question2.value,
          ];
          answers = answers.join();
          this.onAnswer(answers);
        }
      };
    }

    onAnswer(answers) {}

    getGivenArr(data) {
      return data.answers.map((item) => {
        return {
          width: item.image.width,
          height: item.image.height,
        };
      });
    }

    get template() {
      return `<section class="game">
    <p class="game__task">${this.data.question}</p>
    <form class="game__content">
      <div class="game__option">
        <img src=${this.data.answers[0].image.url} alt="Option 1" width="${this.resizeArr[0].width}" height="${this.resizeArr[0].height}">
        <label class="game__answer game__answer--photo">
          <input class="visually-hidden" name="question1" type="radio" value="photo" required>
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input class="visually-hidden" name="question1" type="radio" value="painting" required>
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src=${this.data.answers[1].image.url} alt="Option 2" width="${this.resizeArr[1].width}" height="${this.resizeArr[1].height}">
        <label class="game__answer  game__answer--photo">
          <input class="visually-hidden" name="question2" type="radio" value="photo" required>
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input class="visually-hidden" name="question2" type="radio" value="painting" required>
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <ul class="stats">
      <li class="stats__result stats__result--${this.stats[0]}"></li>
      <li class="stats__result stats__result--${this.stats[1]}"></li>
      <li class="stats__result stats__result--${this.stats[2]}"></li>
      <li class="stats__result stats__result--${this.stats[3]}"></li>
      <li class="stats__result stats__result--${this.stats[4]}"></li>
      <li class="stats__result stats__result--${this.stats[5]}"></li>
      <li class="stats__result stats__result--${this.stats[6]}"></li>
      <li class="stats__result stats__result--${this.stats[7]}"></li>
      <li class="stats__result stats__result--${this.stats[8]}"></li>
      <li class="stats__result stats__result--${this.stats[9]}"></li>
    </ul>
  </section>`;
    }
  }

  class Game1View$1 extends AbstractView {
    constructor(data, stats) {
      super();
      this.data = data;
      this.stats = stats;
      this.frame = {
        width: 705,
        height: 455,
      };

      this.givenArr = this.getGivenArr(this.data);
      this.resizeArr = this.givenArr.map((item) => resize(this.frame, item));
    }

    bind() {
      const form = this.element.querySelector(`.game__content`);

      form.onchange = () => {
        if (form.checkValidity()) {
          let answers = [form.elements.question1.value];
          answers = answers.join();
          this.onAnswer(answers);
        }
      };
    }

    onAnswer(answers) {}

    getGivenArr(data) {
      return data.answers.map((item) => {
        return {
          width: item.image.width,
          height: item.image.height,
        };
      });
    }

    get template() {
      return `<section class="game">
    <p class="game__task">${this.data.question}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src=${this.data.answers[0].image.url} alt="Option 1" width="${this.resizeArr[0].width}" height="${this.resizeArr[0].height}">
        <label class="game__answer  game__answer--photo">
          <input class="visually-hidden" name="question1" type="radio" value="photo" required>
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input class="visually-hidden" name="question1" type="radio" value="painting" required>
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <ul class="stats">
      <li class="stats__result stats__result--${this.stats[0]}"></li>
      <li class="stats__result stats__result--${this.stats[1]}"></li>
      <li class="stats__result stats__result--${this.stats[2]}"></li>
      <li class="stats__result stats__result--${this.stats[3]}"></li>
      <li class="stats__result stats__result--${this.stats[4]}"></li>
      <li class="stats__result stats__result--${this.stats[5]}"></li>
      <li class="stats__result stats__result--${this.stats[6]}"></li>
      <li class="stats__result stats__result--${this.stats[7]}"></li>
      <li class="stats__result stats__result--${this.stats[8]}"></li>
      <li class="stats__result stats__result--${this.stats[9]}"></li>
    </ul>
  </section>`;
    }
  }

  class Game1View$2 extends AbstractView {
    constructor(data, stats) {
      super();
      this.data = data;
      this.stats = stats;
      this.frame = {
        width: 304,
        height: 455,
      };

      this.givenArr = this.getGivenArr(this.data);
      this.resizeArr = this.givenArr.map((item) => resize(this.frame, item));
    }

    onAnswer(answer) {}

    getGivenArr(data) {
      return data.answers.map((item) => {
        return {
          width: item.image.width,
          height: item.image.height,
        };
      });
    }

    bind() {
      const form = this.element.querySelector(`.game__content`);

      form.onclick = (evt) => {
        // console.log(form);
        // const response = evt.path[0].alt;
        // const response = evt.target.alt;
        const divAnswer = evt.path[1];
        const answer = Array.from(form.children).indexOf(divAnswer);
        this.onAnswer(answer);
      };
    }

    get template() {
      return `<section class="game">
    <p class="game__task">${this.data.question}</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src=${this.data.answers[0].image.url} alt="Option 1" width="${this.resizeArr[0].width}" height="${this.resizeArr[0].height}">
      </div>
      <div class="game__option  game__option--selected">
        <img src=${this.data.answers[1].image.url} alt="Option 2" width="${this.resizeArr[1].width}" height="${this.resizeArr[1].height}">
      </div>
      <div class="game__option">
        <img src=${this.data.answers[2].image.url} alt="Option 3" width="${this.resizeArr[2].width}" height="${this.resizeArr[2].height}">
      </div>
    </form>
    <ul class="stats">
      <li class="stats__result stats__result--${this.stats[0]}"></li>
      <li class="stats__result stats__result--${this.stats[1]}"></li>
      <li class="stats__result stats__result--${this.stats[2]}"></li>
      <li class="stats__result stats__result--${this.stats[3]}"></li>
      <li class="stats__result stats__result--${this.stats[4]}"></li>
      <li class="stats__result stats__result--${this.stats[5]}"></li>
      <li class="stats__result stats__result--${this.stats[6]}"></li>
      <li class="stats__result stats__result--${this.stats[7]}"></li>
      <li class="stats__result stats__result--${this.stats[8]}"></li>
      <li class="stats__result stats__result--${this.stats[9]}"></li>
    </ul>
  </section>`;
    }
  }

  class HeaderView extends AbstractView {
    constructor(life, time) {
      super();
      this.life = life;
      this.time = time;
    }

    get template() {
      return `<header class="header">
    <button class="back">
      <span class="visually-hidden">Вернуться к началу</span>
      <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
        <use xlink:href="img/sprite.svg#arrow-left"></use>
      </svg>
      <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
        <use xlink:href="img/sprite.svg#logo-small"></use>
      </svg>
    </button>
    <div class="game__timer">${this.time}</div>
    <div class="game__lives">
      <img src=${this.life[0].src} class="game__heart" alt=${this.life[0].alt} width="31" height="27">
      <img src=${this.life[1].src} class="game__heart" alt=${this.life[1].alt} width="31" height="27">
      <img src=${this.life[2].src} class="game__heart" alt=${this.life[2].alt} width="31" height="27">
    </div>
  </header>`;
    }

    bind() {
      this.element.querySelector(`.back`).onclick = () => this.onBack();
    }

    onBack() {}
  }

  class GamePresenter {
    constructor(model) {
      this.model = model;

      this.gameTypeMap = {
        "two-of-two": Game1View,
        "tinder-like": Game1View$1,
        "one-of-three": Game1View$2,
      };

      this.createLevel();
    }

    get element() {
      return this.root;
    }


    doNextLevel(playerAnswer) {
      this.stopTimer();
      this.model.updatePlayerResponses(this.checkAnswer(playerAnswer));
      if (this.model.PlayerResponsesFull || this.model.isDied) {
        Application.post(this.model);
      } else {
        this.model.checkedNextLevel();
        this.showNextLevel();
      }
    }

    checkAnswer(playerAnswer) {
      const isTrue = this.model.trueAnswer === playerAnswer;
      if (!isTrue) {
        this.model.takeLife();
      }
      return {
        isCorrect: isTrue,
        timeSec: 30 - this.model.time,
      };
    }

    createLevel() {
      this.header = new HeaderView(this.model.life, this.model.time);
      this.gameView = new this.gameTypeMap[this.model.typeCurrentLeval](
        this.model.currentGameData,
        this.model.currentStats
      );
      this.root = document.createElement(`div`);
      this.root.append(this.header.element);
      this.root.append(this.gameView.element);
      this.header.onBack = () => {
        this.stopTimer();
        Application.showWelcome();
      };
      this.gameView.onAnswer = (playerAnswer) => this.doNextLevel(playerAnswer);
    }

    showNextLevel() {
      this.createLevel();
      changeView(this.element);
      this.startTimer();
    }

    startTimer() {
      this.model.restartTimer();
      this.runTimer();
    }

    updateHeader() {
      this.header = new HeaderView(this.model.life, this.model.time);
      changeFierstInMain(this.header.element);
      this.header.onBack = () => {
        this.stopTimer();
        Application.showWelcome();
      };
    }

    runTimer() {
      if (this.model.isTimeOver) {
        this.doNextLevel({isCorrect: false, timeSec: 30});
        return;
      }
      this._timer = setTimeout(() => {
        this.model.tick();
        this.updateHeader();
        this.runTimer();
      }, 1000);
    }

    stopTimer() {
      clearTimeout(this._timer);
    }
  }

  class StatView extends AbstractView {
    constructor(scoringData) {
      super();
      this.scoringData = scoringData;
      this.message = this.scoringData.isVictiry ? `Победа !` : `Вы проиграли )=`;
    }

    get template() {
      return `<header class="header">
    <button class="back">
      <span class="visually-hidden">Вернуться к началу</span>
      <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
        <use xlink:href="img/sprite.svg#arrow-left"></use>
      </svg>
      <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
        <use xlink:href="img/sprite.svg#logo-small"></use>
      </svg>
    </button>
  </header>
  <section class="result">
    <h2 class="result__title">${this.message}</h2>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          <ul class="stats">
            <li class="stats__result stats__result--${this.scoringData.currentStats[0]}"></li>
            <li class="stats__result stats__result--${this.scoringData.currentStats[1]}"></li>
            <li class="stats__result stats__result--${this.scoringData.currentStats[2]}"></li>
            <li class="stats__result stats__result--${this.scoringData.currentStats[3]}"></li>
            <li class="stats__result stats__result--${this.scoringData.currentStats[4]}"></li>
            <li class="stats__result stats__result--${this.scoringData.currentStats[5]}"></li>
            <li class="stats__result stats__result--${this.scoringData.currentStats[6]}"></li>
            <li class="stats__result stats__result--${this.scoringData.currentStats[7]}"></li>
            <li class="stats__result stats__result--${this.scoringData.currentStats[8]}"></li>
            <li class="stats__result stats__result--${this.scoringData.currentStats[9]}"></li>
          </ul>
        </td>
        <td class="result__points">× 100</td>
        <td class="result__total">${this.scoringData.baseResult}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${this.scoringData.speedNumber} <span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">× 50</td>
        <td class="result__total">${this.scoringData.speedBonus}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${this.scoringData.lifeInEnd} <span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">× 50</td>
        <td class="result__total">${this.scoringData.lifeBonus}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${this.scoringData.slowNumber} <span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">× 50</td>
        <td class="result__total">${this.scoringData.slowPenalty}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${this.scoringData.fullResult}</td>
      </tr>
    </table>
  </section>`;
    }

    bind() {
      this.element.querySelector(`.back`).onclick = (evt) => {
        evt.preventDefault();
        this.onClickBack();
      };
    }

    onClickBack() {}

  }


      // <table class="result__table">
      //   <tr>
      //     <td class="result__number">2.</td>
      //     <td>
      //       <ul class="stats">
      //         <li class="stats__result stats__result--wrong"></li>
      //         <li class="stats__result stats__result--slow"></li>
      //         <li class="stats__result stats__result--fast"></li>
      //         <li class="stats__result stats__result--correct"></li>
      //         <li class="stats__result stats__result--wrong"></li>
      //         <li class="stats__result stats__result--unknown"></li>
      //         <li class="stats__result stats__result--slow"></li>
      //         <li class="stats__result stats__result--wrong"></li>
      //         <li class="stats__result stats__result--fast"></li>
      //         <li class="stats__result stats__result--wrong"></li>
      //       </ul>
      //     </td>
      //     <td class="result__total"></td>
      //     <td class="result__total  result__total--final">fail</td>
      //   </tr>
      // </table>
      // <table class="result__table">
      //   <tr>
      //     <td class="result__number">3.</td>
      //     <td colspan="2">
      //       <ul class="stats">
      //         <li class="stats__result stats__result--wrong"></li>
      //         <li class="stats__result stats__result--slow"></li>
      //         <li class="stats__result stats__result--fast"></li>
      //         <li class="stats__result stats__result--correct"></li>
      //         <li class="stats__result stats__result--wrong"></li>
      //         <li class="stats__result stats__result--unknown"></li>
      //         <li class="stats__result stats__result--slow"></li>
      //         <li class="stats__result stats__result--unknown"></li>
      //         <li class="stats__result stats__result--fast"></li>
      //         <li class="stats__result stats__result--unknown"></li>
      //       </ul>
      //     </td>
      //     <td class="result__points">× 100</td>
      //     <td class="result__total">900</td>
      //   </tr>
      //   <tr>
      //     <td></td>
      //     <td class="result__extra">Бонус за жизни:</td>
      //     <td class="result__extra">2 <span class="stats__result stats__result--alive"></span></td>
      //     <td class="result__points">× 50</td>
      //     <td class="result__total">100</td>
      //   </tr>
      //   <tr>
      //     <td colspan="5" class="result__total  result__total--final">950</td>
      //   </tr>
      // </table>

  class OldStatView extends AbstractView {
    constructor(scoringData, namber) {
      super();
      this.scoringData = scoringData;
      this.namber = namber;
    }

    get template() {
      return `<table class="result__table">
      <tr>
        <td class="result__number">${this.namber}.</td>
        <td colspan="2">
          <ul class="stats">
            <li class="stats__result stats__result--${this.scoringData.currentStats[0]}"></li>
            <li class="stats__result stats__result--${this.scoringData.currentStats[1]}"></li>
            <li class="stats__result stats__result--${this.scoringData.currentStats[2]}"></li>
            <li class="stats__result stats__result--${this.scoringData.currentStats[3]}"></li>
            <li class="stats__result stats__result--${this.scoringData.currentStats[4]}"></li>
            <li class="stats__result stats__result--${this.scoringData.currentStats[5]}"></li>
            <li class="stats__result stats__result--${this.scoringData.currentStats[6]}"></li>
            <li class="stats__result stats__result--${this.scoringData.currentStats[7]}"></li>
            <li class="stats__result stats__result--${this.scoringData.currentStats[8]}"></li>
            <li class="stats__result stats__result--${this.scoringData.currentStats[9]}"></li>
       </ul>
        </td>
        <td class="result__points">× 100</td>
        <td class="result__total">${this.scoringData.baseResult}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${this.scoringData.lifeInEnd} <span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">× 50</td>
        <td class="result__total">${this.scoringData.lifeBonus}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${this.scoringData.fullResult}</td>
      </tr>
    </table>`;
    }
  }

  const INIT_STATE = {
    life: 3,
    level: 0,
  };

  const setDataQuestion = (data) => dataQuestion = data;

  let dataQuestion = [
    {
      "type": "two-of-two",
      "question": "Угадайте для каждого изображения фото или рисунок?",
      "answers": [
        {
          "image": {
            "url": "https://i.imgur.com/1KegWPz.jpg",
            "width": 1080,
            "height": 720
          },
          "type": "photo"
        },
        {
          "image": {
            "url": "https://k42.kn3.net/CF42609C8.jpg",
            "width": 505,
            "height": 700
          },
          "type": "painting"
        }
      ]
    },
    {
      "type": "tinder-like",
      "question": "Угадай, фото или рисунок?",
      "answers": [
        {
          "image": {
            "url": "https://i.imgur.com/DiHM5Zb.jpg",
            "width": 474,
            "height": 700
          },
          "type": "photo"
        }
      ]
    },
    {
      "type": "one-of-three",
      "question": "Найдите рисунок среди изображений",
      "answers": [
        {
          "image": {
            "url": "https://i.imgur.com/DiHM5Zb.jpg",
            "width": 474,
            "height": 700
          },
          "type": "photo"
        },
        {
          "image": {
            "url": "https://k32.kn3.net/5C7060EC5.jpg",
            "width": 933,
            "height": 700
          },
          "type": "painting"
        },
        {
          "image": {
            "url": "https://i.imgur.com/DKR1HtB.jpg",
            "width": 264,
            "height": 700
          },
          "type": "photo"
        }
      ]
    },
    {
      "type": "one-of-three",
      "question": "Найдите фото среди изображений",
      "answers": [
        {
          "image": {
            "url": "https://k42.kn3.net/D2F0370D6.jpg",
            "width": 468,
            "height": 354
          },
          "type": "painting"
        },
        {
          "image": {
            "url": "https://k32.kn3.net/5C7060EC5.jpg",
            "width": 933,
            "height": 700
          },
          "type": "painting"
        },
        {
          "image": {
            "url": "https://i.imgur.com/1KegWPz.jpg",
            "width": 1080,
            "height": 720
          },
          "type": "photo"
        }
      ]
    },
    {
      "type": "two-of-two",
      "question": "Угадайте для каждого изображения фото или рисунок?",
      "answers": [
        {
          "image": {
            "url": "https://i.imgur.com/DKR1HtB.jpg",
            "width": 264,
            "height": 700
          },
          "type": "photo"
        },
        {
          "image": {
            "url": "https://k32.kn3.net/5C7060EC5.jpg",
            "width": 933,
            "height": 700
          },
          "type": "painting"
        }
      ]
    },
    {
      "type": "tinder-like",
      "question": "Угадай, фото или рисунок?",
      "answers": [
        {
          "image": {
            "url": "https://i.imgur.com/1KegWPz.jpg",
            "width": 1080,
            "height": 720
          },
          "type": "photo"
        }
      ]
    },
    {
      "type": "one-of-three",
      "question": "Найдите рисунок среди изображений",
      "answers": [
        {
          "image": {
            "url": "https://i.imgur.com/DiHM5Zb.jpg",
            "width": 474,
            "height": 700
          },
          "type": "photo"
        },
        {
          "image": {
            "url": "https://k42.kn3.net/D2F0370D6.jpg",
            "width": 468,
            "height": 354
          },
          "type": "painting"
        },
        {
          "image": {
            "url": "https://i.imgur.com/DiHM5Zb.jpg",
            "width": 474,
            "height": 700
          },
          "type": "photo"
        }
      ]
    },
    {
      "type": "one-of-three",
      "question": "Найдите фото среди изображений",
      "answers": [
        {
          "image": {
            "url": "https://k32.kn3.net/5C7060EC5.jpg",
            "width": 933,
            "height": 700
          },
          "type": "painting"
        },
        {
          "image": {
            "url": "https://k42.kn3.net/D2F0370D6.jpg",
            "width": 468,
            "height": 354
          },
          "type": "painting"
        },
        {
          "image": {
            "url": "https://i.imgur.com/DiHM5Zb.jpg",
            "width": 474,
            "height": 700
          },
          "type": "photo"
        }
      ]
    },
    {
      "type": "two-of-two",
      "question": "Угадайте для каждого изображения фото или рисунок?",
      "answers": [
        {
          "image": {
            "url": "https://k32.kn3.net/5C7060EC5.jpg",
            "width": 933,
            "height": 700
          },
          "type": "photo"
        },
        {
          "image": {
            "url": "https://k42.kn3.net/CF42609C8.jpg",
            "width": 505,
            "height": 700
          },
          "type": "painting"
        }
      ]
    },
    {
      "type": "tinder-like",
      "question": "Угадай, фото или рисунок?",
      "answers": [
        {
          "image": {
            "url": "https://i.imgur.com/1KegWPz.jpg",
            "width": 1080,
            "height": 720
          },
          "type": "photo"
        }
      ]
    },
  ];

  class scoring {
    constructor(answers) {
      this.answers = answers;
      this.LIFE_IN_START = INIT_STATE.life;
      this.LEVELS_NUMBER = 10;
    }

    get isVictiry() {
      return !(
        this.answers.length !== this.LEVELS_NUMBER ||
        this.LEVELS_NUMBER - this.correctNumber > this.LIFE_IN_START ||
        this.answers === undefined
      )
    }

    get correctAnswers() {

      return this.answers.filter((item) => item.isCorrect);

    }

    get correctNumber() {
      return this.correctAnswers.length;
    }

    get baseResult() {
      if (!this.isVictiry) return 0;
      return this.correctNumber*100;
    }

    get speedNumber() {
      if (!this.isVictiry) return 0;
      return this.correctAnswers.reduce((sum, item) => {
        if (item.timeSec < 10) {
          return sum + 1;
        }
          return sum;
      }, 0);
    }

    get speedBonus() {
      return this.speedNumber*50;
    }

    get slowNumber() {
      if (!this.isVictiry) return 0;
      return this.correctAnswers.reduce((sum, item) => {
        if (item.timeSec > 20) {
          return sum - 1;
        }
          return sum;
      }, 0);
    }

    get slowPenalty() {
      return this.slowNumber*50;
    }

    get lifeInEnd() {
    if (!this.isVictiry) return 0;
      return this.LIFE_IN_START - (this.LEVELS_NUMBER - this.correctNumber);
    }

    get lifeBonus() {
      return this.lifeInEnd*50;
    }

    get fullResult() {
      if (!this.isVictiry) return `fail`;
      return this.baseResult + this.speedBonus + this.slowPenalty + this.lifeBonus;
    }

    get currentStats() {
      return this.answers
        .map((item) => {
          if (!item.isCorrect) {
            return "wrong";
          }
          if (item.timeSec < 10) {
            return "fast";
          }
          if (item.timeSec > 20) {
            return "slow";
          }
          return "correct";
        })
        .concat(new Array(10 - this.answers.length).fill("unknown"));
    }
  }


    // const balls = answers.reduce((sum, item) => {
    //   if (!item.isCorrect) {
    //     return sum;
    //   }
    //   if (item.timeSec < 10) {
    //     return sum + 150;
    //   }
    //   if (item.timeSec > 20) {
    //     return sum + 50;
    //   }
    //   return sum + 100;
    // }, 0);

    // const livesInEnd = lives - (10 - correctNumber);

    // const ballsFull = balls + livesInEnd * 50;

    // return ballsFull;

  class StatsPresenter {
    constructor(serverData) {
      this.serverData = serverData;
      this.scoringData = new scoring(this.serverData[0]);
      this.statView = new StatView(this.scoringData);
      this.statView.onClickBack = () => Application.showIntro();
      this.root = this.statView.element;
      this.container = this.root.querySelector(`.result`);
      this.addOldStat();

    }

    get element() {
      return this.root;
    }

    addOldStat() {
      for (let i = 1; i < this.serverData.length; i++) {
        const scoring$1 = new scoring(this.serverData[i]);
        this.oldStst = new OldStatView(scoring$1, i+1);
        this.container.append(this.oldStst.element);
      }
    }
  }

  class gameModel {
    constructor(name) {
      this.name = name;
      this.playerResponses = [];
      this.TIME_IN_START = 30;
      this._time = this.TIME_IN_START;
      this.restart();
    }

    get state() {
      return this._state;
    }

    get life() {
      if (this._state.life === 0) {
        return new Array(3).fill({
          src: `img/heart__empty.svg`,
          alt: `Missed Life`,
        });
      }
      return new Array(3 - this._state.life)
        .fill({
          src: `img/heart__empty.svg`,
          alt: `Missed Life`,
        })
        .concat(
          new Array(this._state.life).fill({
            src: "img/heart__full.svg",
            alt: "Life",
          })
        );
    }

    get currentLeval() {
      return this._state.level;
    }

    get typeCurrentLeval() {
      return dataQuestion[this.currentLeval].type;
    }

    get currentGameData() {
      return dataQuestion[this.currentLeval];
    }

    get currentStats() {
      return this.playerResponses
        .map((item) => {
          if (!item.isCorrect) {
            return "wrong";
          }
          if (item.timeSec < 10) {
            return "fast";
          }
          if (item.timeSec > 20) {
            return "slow";
          }
          return "correct";
        })
        .concat(new Array(10 - this.playerResponses.length).fill("unknown"));
    }

    get trueAnswer() {
      if (this.currentGameData.type === `one-of-three`) {
        if (
          this.currentGameData.answers
            .map((item) => item.type)
            .filter((it) => it === `photo`).length === 2
        ) {
          return this.currentGameData.answers.findIndex(
            (item) => item.type === `painting`
          );
        } else {
          return this.currentGameData.answers.findIndex(
            (item) => item.type === `photo`
          );
        }
      }
      return this.currentGameData.answers.map((item) => item.type).join();
    }

    get PlayerResponsesFull() {
      return this.playerResponses.length === 10;
    }

    get isTimeOver() {
      return this._time === 0;
    }

    get time() {
      return this._time;
    }

    get isDied() {
      return this._state.life <= 0;
    }

    restart() {
      this._state = Object.assign({}, INIT_STATE);
    }

    checkedNextLevel() {
      this._state.level++;
    }

    updatePlayerResponses(response) {
      this.playerResponses.push(response);
    }

    restartTimer() {
      this._time = this.TIME_IN_START;
    }

    tick() {
      this._time--;
    }

    takeLife() {
      this._state.life--;
    }
  }

  class Application {
    static showIntro() {
      const intro = new IntroPresenter();
      changeView(intro.element);
    }

    static start() {
      window
          .fetch(
              `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/questions`,
              {
                method: 'GET',
                mode: 'no-cors',
              }
          )
          .then((response) => {
            if (response.ok) {
              return response;
            } else {
              throw new Error(response.statys);
            }
          })
          .then((response) => response.json())
          .then((data) => setDataQuestion(data))
          .then((data) => console.log(data))
          .then(() => Application.showWelcome())
          .catch((error) => {
            console.error(`НЕ ПОЛУЧИЛОСЬ ПОЛУЧИТЬ ДАННЫЕ С СЕРВЕРА ОШИБКА:(${error}), ЗАПУСКАЮ ИГРУ С "МОКОВЫМИ" ДАННЫМИ`);
            Application.showWelcome();
          });
    }

    static showWelcome() {
      const welcome = new GreetingPresenter();
      changeView(welcome.element);
    }

    static showGame(userName) {
      const model = new gameModel(userName);
      const gamePresenter = new GamePresenter(model);
      changeView(gamePresenter.element);
      gamePresenter.startTimer();
    }

    static showStats(model) {
      const statistics = new StatsPresenter(model);
      changeView(statistics.element);
    }

    static post(model) {
      window
        .fetch(
            `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/stats/:57943689-:${model.name}`,
            {
              method: `POST`,
              headers: {
                "Content-Type": "application/json;charset=utf-8",
              },
              body: JSON.stringify(model.playerResponses),
            }
        )
        .then(() => Application.loader(model))
        .catch((error) => {
          console.error(`НЕ УДАЛОСЬ ОТПРАВИТЬ ДАННЫЕ НА СЕРВЕР, ОШИБКА: (${error}) ПЕРЕХОДИМ В БЕЗСЕРВЕРНЫЙ РЕЖИМ`);
          Application.showStats([model.playerResponses]);
        });
    }

    static loader(model) {
      window
        .fetch(
            `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/stats/:57943689-:${model.name}`
        )
        .then((response) => {
          if (response.ok) {
            return response;
          } else {
            throw new Error(response.statys);
          }
        })
        .then((response) => response.json())
        .then((data) => data.reverse())
        .then((data) => Application.showStats(data))
        .catch((error) => {
          console.error(`НЕ УДАЛОСЬ ПОЛУЧИТЬ ДАННЫЕ С СЕРВЕРА, ОШИБКА: (${error}) ПЕРЕХОДИМ В БЕЗСЕРВЕРНЫЙ РЕЖИМ`);
          Application.showStats(model.playerResponses);
        });
    }
  }

  Application.showIntro();

}());

//# sourceMappingURL=main.js.map
