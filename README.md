<header>

<div align="center">
<img src="./assets/logo.svg" alt="logo" height="123">
<h1 align="center" style="color:#009fd6">Scriptogram</h1>

<div style="font-size:19px">
  Библиотека для интеграции с <a href="https://core.telegram.org/bots/api">Telegram Bot API</a>, написанная на TypeScript.<br>
  Описание типов и методов полностью переведено на русский.
<div>
</div>

</header>

<!-- ## Особенности

- Поддержка всех основных методов Telegram API.
- Простой и понятный интерфейс.
- Возможность расширения для дополнительных функций. -->

## Установка

Утановка библиотеки доступна через [npm](https://www.npmjs.com/package/scriptogram):

```bash
npm i scriptogram
```

## Примеры

В каталоге [examples](https://github.com/Avirtan/Scriptogram/tree/master/src/example) находятся примеры использования библиотеки.

##### Создание бота:

```typescript
// импорт класса бота
import { Scriptogram } from "scriptogram";

// создание экземпляра бота
const bot = new Scriptogram("token");

// логика работы бота
// ...

// запуск цикла обработки обновлений
bot.startUpdate();
```

`token` необходимо получить у [BotFather](https://t.me/BotFather).

##### Обработка команд (command handler):

```typescript
// на введенную пользователем комманду /hello бот ответит "Привет!"
bot.onCommand("/hello", async (update: IUpdate) => {
  // через метод sendMessage осуществляется отправка сообщения ботом
  await bot.MethodHandler.sendMessage({
    chat_id: update?.message?.from?.id!,
    text: "Привет!",
  });
});
```

##### Обработка сообщений и колбеков (update handler):

```typescript
// на сообщение или колбек бот ответит "Понятно"
bot.onUpdate(async (update: IUpdate) => {
  // логика обработки сообщений или колбеков
  // ...

  await bot.MethodHandler.sendMessage({
    chat_id: update?.message?.from?.id!,
    text: "Понятно",
  });
});
```

##### Промежуточная обработка (middleware):

```typescript
// выполняется до обработки команд, сообщений или колбеков
// например, чтобы проверить права доступа у пользователя
bot.use(async (update: IUpdate) => {
  if ("условие проверки") {
    await bot.MethodHandler.sendMessage({
      chat_id: update?.message?.from?.id!,
      text: "Доступ получен",
    });
    return false;
  }
  return true;
});
```

##### Обработчики событий (handlers)

Для работы с обработчиками событий необходимо реализовать класс обработчика, реализующий интерфейс `IHandler`.
Реализация обработчика сообщений - [пример](https://github.com/Avirtan/Scriptogram/blob/master/src/example/handlers/MessageHandler.ts).
Реализация обработчика клавиатуры - [пример](https://github.com/Avirtan/Scriptogram/blob/master/src/example/handlers/KeyboardHandler.ts).

После чего добавить обработчики в бота:

```typescript
bot.setHandler(new MessageHandler(state));
bot.setHandler(new KeyboardHandler());
```

##### Состояние (state)

Для работы с состоянием бота необходимо реализовать класс состояния ([пример](https://github.com/Avirtan/Scriptogram/blob/master/src/example/state.ts)), после чего добавить его в бота:

```typescript
// State - кастомный класс для работы с состоянием бота
var state = new State();
bot.setState(state);
```

<!-- ## Поддержка

Если возникли вопросы или проблемы, создайте issue в этом репозитории. -->

## Лицензия

Эта библиотека доступна по лицензии MIT. Файл [LICENSE](https://github.com/Avirtan/Scriptogram/blob/master/LICENSE) для подробностей.
