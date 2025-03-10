English | [中文](./README.zh-CN.md) | [日本語](./README.ja-JP.md) | [Русский](./README.ru.md)

https://github.com/user-attachments/assets/a50c100a-4561-4e06-b2d2-d48098659ec0

## Мы будем рады вашей поддержке!
<a href="https://trendshift.io/repositories/4112" target="_blank"><img src="https://trendshift.io/api/badge/repositories/4112" alt="nocobase%2Fnocobase | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

<a href="https://www.producthunt.com/posts/nocobase?embed=true&utm_source=badge-top-post-topic-badge&utm_medium=badge&utm_souce=badge-nocobase" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-topic-badge.svg?post_id=456520&theme=light&period=weekly&topic_id=267" alt="NocoBase - Scalability&#0045;first&#0044;&#0032;open&#0045;source&#0032;no&#0045;code&#0032;platform | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

## Примечания к выпуску

Наш [блог](https://www.nocobase.com/en/blog/timeline) регулярно обновляется примечаниями к выпуску и содержит еженедельную сводку.

## Что такое NocoBase

NocoBase — это масштабируемая платформа разработки без кода с открытым исходным кодом. Вместо того чтобы вкладывать годы времени и миллионы долларов в исследования и разработки, разверните NocoBase за несколько минут, и у вас будет частная, контролируемая и чрезвычайно масштабируемая платформа разработки без кода!

Главная страница: 
https://www.nocobase.com/  

Онлайн-демо: 
https://demo.nocobase.com/new

Документация: 
https://docs.nocobase.com/

Форум:  
https://forum.nocobase.com/

## Отличительные черты

### 1. На основе модели данных

Большинство продуктов без кода, управляемых формами, таблицами или процессами, создают структуры данных непосредственно в пользовательском интерфейсе, например, Airtable, где добавление нового столбца в таблицу является добавлением нового поля. Это имеет преимущество простоты использования, но недостаток ограниченности функциональности и гибкости для удовлетворения потребностей более сложных сценариев.

NocoBase принимает идею дизайна отделения структуры данных от пользовательского интерфейса, что позволяет вам создавать любое количество блоков (представлений данных) для коллекций данных с различным типом, стилями, содержимым и действиями в каждом блоке. Это позволяет сбалансировать простоту работы без кода с гибкостью собственной разработки.

![model](https://static-docs.nocobase.com/model.png)

### 2. Что видишь, то и получаешь
NocoBase позволяет разрабатывать сложные и отличительные бизнес-системы, но это не означает, что требуются сложные и специализированные операции. Одним щелчком мыши параметры конфигурации отображаются в интерфейсе использования, а администраторы с привилегиями конфигурации системы могут напрямую настраивать пользовательский интерфейс в режиме WYSIWYG.

![wysiwyg](https://static-docs.nocobase.com/wysiwyg.gif)

### 3. Все реализовано в виде плагинов.
NocoBase использует архитектуру плагинов, все новые функции могут быть реализованы путем разработки и установки плагинов, а расширение функций так же просто, как установка приложения на ваш телефон.

![plugins](https://static-docs.nocobase.com/plugins.png)

## Установка

NocoBase поддерживает три способа установки:

- <a target="_blank" href="https://docs.nocobase.com/welcome/getting-started/installation/docker-compose">Установка с помощью Docker (👍Рекомендуется)</a>

Подходит для сценариев без кода, не нужно писать код. При обновлении просто загрузите последний образ и перезагрузите.

- <a target="_blank" href="https://docs.nocobase.com/welcome/getting-started/installation/create-nocobase-app">Установка из CLI create-nocobase-app</a>

  Бизнес-код проекта полностью независим и поддерживает разработку с низким уровнем кода.

- <a target="_blank" href="https://docs.nocobase.com/welcome/getting-started/installation/git-clone">Установка из исходного кода Git</a>

  Если вы хотите опробовать последнюю невыпущенную версию или хотите принять участие в разработке, вам необходимо внести изменения и отладить исходный код, рекомендуется выбрать этот метод установки, который требует высокого уровня навыков разработки, а если код был обновлен, вы можете выполнить git pull для получения последнего кода.