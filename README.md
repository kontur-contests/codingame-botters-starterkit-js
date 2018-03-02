# Botters of the Galaxy Contest JavaScript Starter Kit

## Исходный код

Исходный код находится в директории `src`. Файлы с тестами находятся в той же директории и называются `*.test.js`.

Основные файлы:

* [`State.js`](src/model/State.js) — класс с состоянием игры
* [`StateReader.js`](src/StateReader.js) — класс для чтения состояния игры. Логирует прочитанное состояние с помощью `printErr`
* [`Ai.js`](src/Ai.js) — ваш алгоритм бота
* [`Ai.test.js`](src/Ai.test.js) —  тесты на бота организованные так, чтобы было удобно копировать в него залогированное состояние из визуализатора

## Запуск

### Установка

Клонируйте репозиторий: `git clone https://github.com/skbkontur/codingame-botters-starterkit-cs.git`

Установите зависимости: `npm install`

### Сборка исходников для вставки на CodinGame

`npm run build` — собирает исходный код в файл `bundle.js`. и копирует его в буфер обмена для вставки на CodinGame.com.
Для копирования в буфер обмена используется специфичная для macOS утилита `pbcopy`.
На Windows откорректируйте в файле package.json строчку с параметром "build", чтобы получилось следующее:
    
    "build": "rollup -c rollup.config.js && clip < bundle.js",

`npm run watch` — непрерывно следит за изменениями исходного кода и запускает `npm run build`.


### Тестирование

`npm test` — собирает и запускает тесты.