Плагин для оповещающих всплывающих окон: Bolt-Chips
=====================

Подготовил: [Александр Зиновьев](http://uzinok.ru/)
-----------------------------------

Команды
-----------------------------------

* gulp - сборка проекта и запуск сервера

особенности
-----------------------------------

* препроцессор стилей less
* преобразовывает код ECMAScript 2015 и выше в совместимую версию JavaScript для более старых браузеров (babel).

перед установкой сборщика необходимо:
-----------------------------------

* [устнаовить node.js](https://nodejs.org/) используется пакет npm
* [глобально установить gulp](https://gulpjs.com/) для работы команд gulp
* [глобально установить browser-sync](https://browsersync.io/) для работы виртуального сервера

Создание чипса
-----------------------------------

```
const chips = new BoltChips({
  message: message,
  [cssClass: cssClass,
  delay: delay,
  role: role,
  ariaLive: ariaLive]
});
```

Методы и свойста сласса BoltChips
-----------------------------------

* `role` - роль (для скрин-ридера)
* `ariaLive` - важность (для скрин-ридера)
* `message` - сообщение чипса ('no message')
* `cssClass` - класс модификатор чипла ('bolt-chips--success')
* `delay` - время до удаления чипса в милисекундах (5000)
* `wrap` - блок для чисов
* `chips` - чипс
* `getChipsWrap()` - получение или создание блока для чипсов
* `createElem()` - создание блока для чипсов/чисов
* `isInit()` - запуск необходимых методов для создания/удаления чипсов
* `isClose()` - удаление чипса
* `monitorClick()` - слушает клик по чипсу, закрывает чипс