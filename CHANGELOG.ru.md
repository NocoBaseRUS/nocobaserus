# Журнал изменений

Все существенные изменения в этом проекте будут задокументированы в этом файле.

Формат основан на [Вести журнал изменений](https://keepachangelog.com/en/1.0.0/)
и этот проект придерживается [Семантического Версионирования](https://semver.org/spec/v2.0.0.html).

## [v1.5.25](https://github.com/nocobase/nocobase/compare/v1.5.24...v1.5.25) - 2025-03-09

### 🐛 Исправления ошибок

- **[Server]** Неправильный кэш браузера после запуска `yarn start` команда ([#6394](https://github.com/nocobase/nocobase/pull/6394)) by @gchust

- **[Рабочий процесс: Утверждение]** Избегайте неправильного запроса конфигурации назначенных лиц для всех пользователей by @mytharcher

- **[WeCom]** исправить ссылку на приглашение входа и ошибку входа в dingtalk by @chenzhizdt

## [v1.5.24](https://github.com/nocobase/nocobase/compare/v1.5.23...v1.5.24) - 2025-03-07

### 🎉 Новые возможности

- **[Визуализация данных]** Поддержка сортировки NULL в запросах диаграмм ([#6383](https://github.com/nocobase/nocobase/pull/6383)) by @2013xile

### 🚀 Улучшения

- **[Workflow]** Разрешить пропуск для запуска рабочего процесса сбора данных в событии базы данных ([#6379](https://github.com/nocobase/nocobase pull/6379)) by @mytharcher

### 🐛 Исправления ошибок

- **[Действие: Импорт записей Pro]** Используйте дополнительную опцию, чтобы определить, следует ли запускать рабочий процесс или нет by @mytharcher

- **[Действие: Экспорт записей Pro]** действие pro export отсутствует сортировка параметров by @katherinehhh

## [v1.5.23](https://github.com/nocobase/nocobase/compare/v1.5.22...v1.5.23) - 2025-03-06

### 🐛 Bug Fixes

- **[client]**
  - проблема, связанная с часовым поясом, приводящая к уменьшению на один час времени в окне выбора даты ([#6359](https://github.com/nocobase/nocobase/pull/6359)) by @katherinehhh

  - отсутствует настройка сортировки для унаследованных полей коллекции ([#6372](https://github.com/nocobase/nocobase/pull/6372)) by @katherinehhh

## [v1.5.22](https://github.com/nocobase/nocobase/compare/v1.5.21...v1.5.22) - 2025-03-06

### 🚀 Улучшения

- **[client]** Добавить обработку задержки для кнопок ([#6351](https://github.com/nocobase/nocobase/pull/6351)) by @Cyx649312038

### 🐛 Исправления ошибок

- **[database]** Исправлена ​​ошибка при извлечении записей коллекции отношений, если исходный ключ в полях отношений представляет собой числовую строку. ([#6360](https://github.com/nocobase/nocobase/pull/6360)) by @2013xile

## [v1.5.21](https://github.com/nocobase/nocobase/compare/v1.5.20...v1.5.21) - 2025-03-05

### 🚀 Улучшения

- **[Workflow]** Результат задания отложенной загрузки для лучшей производительности ([#6344](https://github.com/nocobase/nocobase/pull/6344)) by @mytharcher

- **[Рабочий процесс: Агрегатный узел]** Добавить округление для агрегированных чисел на основе типа double ([#6358](https://github.com/nocobase/nocobase/pull/6358)) by @mytharcher

### 🐛 Исправления ошибок

- **[client]**
  - Компоненты подчиненной формы не выравниваются с основной формой, когда метка скрыта ([#6357](https://github.com/nocobase/nocobase/pull/6357)) by @katherinehhh

  - Блок ассоциации не отображается во всплывающем окне при наследовании коллекции. ([#6303](https://github.com/nocobase/nocobase/pull/6303)) by @katherinehhh

  - Исправлена ​​ошибка, возникающая при создании коллекции файлов. ([#6363](https://github.com/nocobase/nocobase/pull/6363)) by @mytharcher

- **[Workflow]** Исправление acl для получения работы ([#6352](https://github.com/nocobase/nocobase/pull/6352)) by @mytharcher

## [v1.5.20](https://github.com/nocobase/nocobase/compare/v1.5.19...v1.5.20) - 2025-03-03

### 🐛 Исправления ошибок

- **[client]** Страницы с пользовательским favicon кратковременно отображают favicon NocoBase во время загрузки. ([#6337](https://github.com/nocobase/nocobase/pull/6337)) by @zhangzhonghe

- **[Блок: Карта]** Настройки конфигурации для поля карты отсутствуют/не видны ([#6336](https://github.com/nocobase/nocobase/pull/6336)) by @zhangzhonghe

- **[Пользовательский бренд]** Страницы с пользовательским favicon кратковременно отображают favicon NocoBase во время загрузки. by @zhangzhonghe

- **[Печать шаблонов]** Восстановление из локальной сети не удалось, когда были включены плагины action template print и backup manager by @gchust

## [v1.5.19](https://github.com/nocobase/nocobase/compare/v1.5.18...v1.5.19) - 2025-03-01

### 🐛 Исправления ошибок

- **[client]** Кнопка добавления нового появляется при наведении на поле ассоциации в режиме только для чтения ([#6322](https://github.com/nocobase/nocobase/pull/6322)) by @katherinehhh

- **[Действие: Импорт записей Pro]** удалить опцию «добавить блок» в настройках кнопки экспорта вложений by @katherinehhh

- **[Действие: Экспорт записей Pro]** Кнопка импорта блока ассоциаций. Обнаружение дубликатов записей. В раскрывающемся списке полей отсутствуют данные. by @katherinehhh

## [v1.5.18](https://github.com/nocobase/nocobase/compare/v1.5.17...v1.5.18) - 2025-02-27

### 🐛 Исправления ошибок

- **[Блок: Панель действий]** Недопустимая настройка высоты панели действий. ([#6321](https://github.com/nocobase/nocobase/pull/6321)) by @zhangzhonghe

## [v1.5.17](https://github.com/nocobase/nocobase/compare/v1.5.16...v1.5.17) - 2025-02-27

### 🐛 Исправления ошибок

- **[client]**
  - ошибка при создании блока комментариев без сбора комментариев ([#6309](https://github.com/nocobase/nocobase/pull/6309)) by @katherinehhh

  - Ошибка возникает при нажатии на узел блока дерева ([#6314](https://github.com/nocobase/nocobase/pull/6314)) by @zhangzhonghe

  - После нажатия на левое меню подстраница закрывается с ошибкой ([#6305](https://github.com/nocobase/nocobase/pull/6305)) by @zhangzhonghe

  - Не очищайте значение поля, если значение выражения пустое ([#6300](https://github.com/nocobase/nocobase/pull/6300)) by @zhangzhonghe

- **[Поле коллекции: Последовательность]** Исправьте, что поле последовательности не отключается в режиме только для чтения ([#6274](https://github.com/nocobase/nocobase/pull/6274)) by @mytharcher

- **[Файловый менеджер]** Исправьте миграцию для унаследованной коллекции ([#6310](https://github.com/nocobase/nocobase/pull/6310)) by @mytharcher

- **[Контроль доступа]** Неправильные записи данных при использовании полей «многие ко многим» в качестве области действия данных в разрешениях на сбор данных ([#6304](https://github.com/nocobase/nocobase/pull/6304)) by @2013xile

- **[Блок: Kanban]** Неправильная фильтрация данных во всплывающем блоке Kanban с использованием переменных всплывающих записей ([#6290](https://github.com/nocobase/nocobase/pull/6290)) by @katherinehhh

- **[Блок: Дерево]** Ошибка возникает при щелчке на узле блока дерева by @zhangzhonghe

## [v1.5.16](https://github.com/nocobase/nocobase/compare/v1.5.15...v1.5.16) - 2025-02-26

### 🚀 Улучшения
- **[Менеджер резервного копирования]** Позволяет восстанавливать резервную копию приложения, даже если в нем отсутствуют некоторые плагины by @gchust

### 🐛 Исправления ошибок

- **[client]** Компонент текстового поля не может быть полностью очищен ([#6287](https://github.com/nocobase/nocobase/pull/6287)) by @katherinehhh

- **[Файловый менеджер]**
  - Исправьте миграцию и добавьте тестовые случаи ([#6288](https://github.com/nocobase/nocobase/pull/6288)) by @mytharcher

  - Исправьте `path` тип столбца коллекции файлов ([#6294](https://github.com/nocobase/nocobase/pull/6294)) by @mytharcher

  - Исправьте миграцию и добавьте тестовые случаи ([#6288](https://github.com/nocobase/nocobase/pull/6288)) by @mytharcher

## [v1.5.15](https://github.com/nocobase/nocobase/compare/v1.5.14...v1.5.15) - 2025-02-25

### 🚀 Улучшения

- **[Файловый менеджер]**
  - Увеличьте длину URL до 1024 ([#6275](https://github.com/nocobase/nocobase/pull/6275)) by @mytharcher

  - Имена файлов при загрузке будут меняться с произвольного на оригинальное имя со случайным суффиксом. ([#6217](https://github.com/nocobase/nocobase/pull/6217)) by @chenos

- **[Блок: Панель действий]** Оптимизируйте мобильные стили ([#6270](https://github.com/nocobase/nocobase/pull/6270)) by @zhangzhonghe

### 🐛 Исправления ошибок

- **[cli]** Улучшение внутренней логики команды обновления nocobase. ([#6280](https://github.com/nocobase/nocobase/pull/6280)) by @chenos

## [v1.5.14](https://github.com/nocobase/nocobase/compare/v1.5.13...v1.5.14) - 2025-02-24

### 🐛 Исправления ошибок

- **[Менеджер резервного копирования]** Значок удаления в диалоговом окне восстановления из локальной операции не работает by @gchust

## [v1.5.13](https://github.com/nocobase/nocobase/compare/v1.5.12...v1.5.13) - 2025-02-22

### 🐛 Исправления ошибок

- **[client]** Исправьте пропуск загрузки файлов по одному ([#6260](https://github.com/nocobase/nocobase/pull/6260)) by @mytharcher

- **[Рабочий процесс: Предварительное событие]** Исправьте сообщение об ошибке, не отображаемое в узле сообщений ответа by @mytharcher

## [v1.5.12](https://github.com/nocobase/nocobase/compare/v1.5.11...v1.5.12) - 2025-02-21

### 🚀 Улучшения

- **[Workflow]** Скрыть идентификатор узла в карточке узла на холсте рабочего процесса ([#6251](https://github.com/nocobase/nocobase/pull/6251)) by @mytharcher

### 🐛 Bug Fixes

- **[Файловый менеджер]** Обновите версию AWS SDK, чтобы исправить ошибку загрузки в MinIO. ([#6253](https://github.com/nocobase/nocobase/pull/6253)) by @mytharcher

## [v1.5.11](https://github.com/nocobase/nocobase/compare/v1.5.10...v1.5.11) - 2025-02-20

### 🎉 Новые функции

- **[Workflow]** Поддержка расширения группы инструкций в рабочем процессе. ([#6237](https://github.com/nocobase/nocobase/pull/6237)) by @mytharcher
Ссылка: [Расширяет группу узлов.](https://docs.nocobase.com/handbook/workflow/development/api#registerinstructiongroup)
### 🐛 Исправления ошибок

- **[client]**
  - Проблема с всплывающим окном действия ассоциации в мобильной версии. ([#6235](https://github.com/nocobase/nocobase/pull/6235)) by @katherinehhh

  - Несоответствие формата выбора в поле фильтра формы. ([#6234](https://github.com/nocobase/nocobase/pull/6234)) by @katherinehhh

  - Отображать компонент `<Variable.TextArea />` корректно в режиме отключения. ([#6197](https://github.com/nocobase/nocobase/pull/6197)) by @mytharcher

  - Исправить проблему с отсутствующими файлами после загрузки. ([#6247](https://github.com/nocobase/nocobase/pull/6247)) by @mytharcher

- **[Workflow]**
  - Исправить детали стиля в канвасе рабочего процесса. ([#6240](https://github.com/nocobase/nocobase/pull/6240)) by @mytharcher

  - Добавить возможность запуска рабочего процесса при смене пароля. ([#6248](https://github.com/nocobase/nocobase/pull/6248)) by @mytharcher

## [v1.5.10](https://github.com/nocobase/nocobase/compare/v1.5.9...v1.5.10) - 2025-02-17

### 🚀 Улучшения

- **[Поле коллекции: Markdown(Vditor)]** Использование локальных ресурсов для CDN Vditor ([#6229](https://github.com/nocobase/nocobase/pull/6229)) by @chenos

### 🐛 Исправления ошибок

- **[Рабочий процесс: Узел цикла]** Исправить преждевременный выход из цикла, когда узел находится в состоянии ожидания. ([#6236](https://github.com/nocobase/nocobase/pull/6236)) by @mytharcher

## [v1.5.9](https://github.com/nocobase/nocobase/compare/v1.5.8...v1.5.9) - 2025-02-17

### 🐛 Исправления ошибок

- **[client]**
  - проблема с горизонтальной полосой прокрутки на странице ([#6232](https://github.com/nocobase/nocobase/pull/6232)) by @katherinehhh

  - При закрытии подстраницы запускается несколько запросов данных блоков. ([#6233](https://github.com/nocobase/nocobase/pull/6233)) by @zhangzhonghe

  - Отсутствует уникальный ключ для подменю полей ассоциации в интерфейсе. ([#6230](https://github.com/nocobase/nocobase/pull/6230)) by @gchust

- **[Визуализация данных]** Ошибка фильтрации возникает, когда имя источника данных содержит дефис. `-` ([#6231](https://github.com/nocobase/nocobase/pull/6231)) by @2013xile

## [v1.5.8](https://github.com/nocobase/nocobase/compare/v1.5.7...v1.5.8) - 2025-02-16

### 🐛 Исправления ошибок

- **[client]**
  - Не удается открыть всплывающее окно ссылки на поле во встроенной странице. ([#6222](https://github.com/nocobase/nocobase/pull/6222)) by @gchust

  - В форме редактирования отображаемое значение поля ассоциации не изменяется при обновлении связанного поля. ([#6210](https://github.com/nocobase/nocobase/pull/6210)) by @Cyx649312038

- **[Mobile]** Данные мобильного меню неполные в таблице настройки разрешений. ([#6219](https://github.com/nocobase/nocobase/pull/6219)) by @zhangzhonghe

## [v1.5.7](https://github.com/nocobase/nocobase/compare/v1.5.6...v1.5.7) - 2025-02-13

### 🚀 Улучшения

- **[Уведомление: Сообщение внутри приложения]** Убрать вывод ошибок в консоль для повторных попыток подключения SSE. ([#6205](https://github.com/nocobase/nocobase/pull/6205)) by @sheldon66

### 🐛 Исправления ошибок

- **[client]**
  - отсутствует настройка перетаскивания в модальном окне быстрого создания операции с реляционными данными ([#6201](https://github.com/nocobase/nocobase/pull/6201)) by @katherinehhh

  - проблема с форматированием чисел высокой точности, которое не применяется ([#6202](https://github.com/nocobase/nocobase/pull/6202)) by @katherinehhh

  - Исправлена проблема, при которой очистка поля ассоциации в форме не приводит к фактическому удалению значения поля при отправке формы. ([#5540](https://github.com/nocobase/nocobase/pull/5540)) by @zhangzhonghe

  - Блок не обновляется после отправки формы. ([#6206](https://github.com/nocobase/nocobase/pull/6206)) by @zhangzhonghe

  - значение связанного поля сохраняется при отправке после сброса поля связи ([#6207](https://github.com/nocobase/nocobase/pull/6207)) by @katherinehhh

  - действие обновления отображается для строк без разрешения на обновление в таблице ([#6204](https://github.com/nocobase/nocobase/pull/6204)) by @katherinehhh

- **[Поле коллекции: Сортировка]** Исправить проблему, при которой тип поля сортировки не зарегистрирован во внешнем источнике данных. ([#6212](https://github.com/nocobase/nocobase/pull/6212)) by @mytharcher

- **[Authentication]** Проблема аутентификации WebSocket ([#6209](https://github.com/nocobase/nocobase/pull/6209)) by @2013xile

- **[Поле коллекции: Вложение (URL)]** Исправить устаревший URL-адрес запроса в хуке by @mytharcher

## [v1.5.6](https://github.com/nocobase/nocobase/compare/v1.5.5...v1.5.6) - 2025-02-12

### 🐛 Исправления ошибок

- **[client]**
  - Блок не обновляется после навигации по странице ([#6200](https://github.com/nocobase/nocobase/pull/6200)) by @zhangzhonghe

  - Блок формы не отображается при добавлении формы создания через действие во всплывающем окне в строке таблицы. ([#6190](https://github.com/nocobase/nocobase/pull/6190)) by @katherinehhh

  - настройка высоты блока таблицы не применяется, когда данных нет([#6192](https://github.com/nocobase/nocobase/pull/6192)) by @katherinehhh

- **[Действие: Пользовательский запрос]**
  - Неверное значение переменной «Текущая запись» в кнопке пользовательского запроса ([#6196](https://github.com/nocobase/nocobase/pull/6196)) by @zhangzhonghe

  - Совместимость кнопки пользовательского запроса с устаревшими переменными ([#6194](https://github.com/nocobase/nocobase/pull/6194)) by @zhangzhonghe

- **[Визуализация данных]** Блоки диаграмм не отображаются при добавлении во всплывающие окна панели действий ([#6198](https://github.com/nocobase/nocobase/pull/6198)) by @2013xile

## [v1.5.5](https://github.com/nocobase/nocobase/compare/v1.5.4...v1.5.5) - 2025-02-11

### 🚀 Улучшения

- **[Уведомление: Сообщение внутри приложения]** Добавить тест для получения заголовка и временной метки последнего сообщения в каналах внутри приложения. ([#6189](https://github.com/nocobase/nocobase/pull/6189)) by @sheldon66

## [v1.5.4](https://github.com/nocobase/nocobase/compare/v1.5.3...v1.5.4) - 2025-02-10

### 🚀 Улучшения

- **[Workflow]** Добавить индикатор загрузки для действия дублирования. ([#6179](https://github.com/nocobase/nocobase/pull/6179)) by @mytharcher

### 🐛 Исправления ошибок

- **[client]**
  - Исправить ошибку, возникающую в настройках поля создания узла. ([#6187](https://github.com/nocobase/nocobase/pull/6187)) by @mytharcher

  - Опция конфигурации «Разрешить множественный выбор» для полей ассоциации не отображается в фильтрующих формах. ([#6174](https://github.com/nocobase/nocobase/pull/6174)) by @zhangzhonghe

  - Поле остается скрытым после того, как было скрыто по правилам связывания. ([#6182](https://github.com/nocobase/nocobase/pull/6182)) by @zhangzhonghe

- **[utils]** оптимизировать логику чтения storage/plugins ([#6186](https://github.com/nocobase/nocobase/pull/6186)) by @chenos

- **[Уведомление: Сообщение внутри приложения]** Исправление: Добавить фильтр пользователей к подзапросам временной метки и заголовка сообщений в API списка каналов, чтобы обеспечить изоляцию данных. ([#6185](https://github.com/nocobase/nocobase/pull/6185)) by @deepure

- **[Менеджер резервного копирования]** Файлы не были скопированы из резервной копии в папку загрузок во время восстановления в режиме с допустимыми ошибками. by @gchust

## [v1.5.3](https://github.com/nocobase/nocobase/compare/v1.5.2...v1.5.3) - 2025-02-07

### 🐛 Исправления ошибок

- **[client]**
  - Всплывающее окно, открываемое при клике на поле belongsToArray, получает некорректные данные. ([#6173](https://github.com/nocobase/nocobase/pull/6173)) by @zhangzhonghe

  - Оператор поля времени установлен как "между" в форме фильтра, но компонент не изменился на выбор диапазона времени. ([#6170](https://github.com/nocobase/nocobase/pull/6170)) by @katherinehhh

  - Всплывающая форма редактирования в блоках канбан и календарь не показывала "Несохраненные изменения". ([#6172](https://github.com/nocobase/nocobase/pull/6172)) by @katherinehhh

## [v1.5.2](https://github.com/nocobase/nocobase/compare/v1.5.1...v1.5.2) - 2025-02-06

### 🚀 Улучшения

- **[Mobile]** Скрыть заголовок страницы мобильной конфигурации, если нет разрешения на конфигурацию. ([#6171](https://github.com/nocobase/nocobase/pull/6171)) by @zhangzhonghe

### 🐛 Исправления ошибок

- **[Рабочий процесс: узел уведомления]** Гарантировано, что уведомления отправляются корректно, когда ввод пользователя содержит синтаксис, похожий на Handlebars. ([#6164](https://github.com/nocobase/nocobase/pull/6164)) by @sheldon66

- **[Рабочий процесс: Ручной узел]** Исправить неразобранные значения формы при отправке через кнопку терминала. ([#6160](https://github.com/nocobase/nocobase/pull/6160)) by @mytharcher

## [v1.5.1](https://github.com/nocobase/nocobase/compare/v1.5.0...v1.5.1) - 2025-02-06

### 🐛 Исправления ошибок

- **[client]**
  - Неверный перевод заголовка для `Sub-form(Popover)` ([#6159](https://github.com/nocobase/nocobase/pull/6159)) by @gchust

  - Когда поле вложенной формы установлено как «Скрыто (зарезервированное значение)», переменные значений по умолчанию не работают должным образом. ([#6165](https://github.com/nocobase/nocobase/pull/6165)) by @zhangzhonghe

## [v1.5.0](https://github.com/nocobase/nocobase/compare/v1.4.34...v1.5.0) - 2025-02-05

## Оптимизации ядра

### Включение ссылок в полях однострочного текста

Режим открытия поддерживает выдвижную панель, диалоговое окно и страницу.

![20250207212903](https://static-docs.nocobase.com/20250207212903.png)

### Блок ассоциации поддерживает действия связывания/отвязки.

Теперь вы можете выполнять действия по связыванию и отвязке непосредственно в блоке ассоциации.

![20250207211837](https://static-docs.nocobase.com/20250207211837.png)

### Отладка рабочего процесса

Теперь вы можете напрямую запускать рабочие процессы во время настройки для их отладки.

<video width="100%" controls>
      <source src="https://static-docs.nocobase.com/20250207213343_rec_.mp4" type="video/mp4">
</video>

### Улучшено мобильное взаимодействие для компонентов даты

Улучшен опыт взаимодействия с компонентами, связанными с датами, на мобильных устройствах.

![0084553986f6b3de21ca62f22d09a91a.png](https://static-docs.nocobase.com/0084553986f6b3de21ca62f22d09a91a.png)

### Оптимизация производительности фронтенда

* Оптимизирована скорость загрузки начального экрана.
* Изменён инструмент сборки фронтенда на **rspack**.
* Уменьшен размер пакета входных файлов для различных плагинов.
* Улучшена производительность отрисовки больших таблиц данных.
* Уменьшено подтормаживание при переходах меню.
* Внедрен метод загрузки по требованию с использованием новых библиотек `lazy` и `useLazy`.

Ниже приведено краткое введение в использование `lazy` и `useLazy`:

```ts
import { lazy, useLazy } from '@nocobase/client';

// Экспорт одного компонента:
const { RolesManagement } = lazy(() => import('./RolesManagement'), 'RolesManagement');

// Экспорт нескольких компонентов:
const { AuthLayout, SignInPage, SignUpPage } = lazy(() => import('./pages'), 'AuthLayout', 'SignInPage', 'SignUpPage');

// Экспорт компонента по умолчанию:
const ThemeList = lazy(() => import('./components/ThemeList'));

// Вернуть хук:
const useReactToPrint = useLazy<typeof import('react-to-print').useReactToPrint>(
  () => import('react-to-print'),
  'useReactToPrint',
);
  
// Вернуть библиотеку:
const parseExpression = useLazy<typeof import('cron-parser').parseExpression>(
  () => import('cron-parser'),
  'parseExpression',
);
```

---

## Новые плагины

### Импорт Pro

Поддерживает асинхронные операции импорта, выполняемые в отдельном потоке. Эта функция позволяет импортировать большие объемы данных с улучшенной производительностью.

![20250119221221](https://static-docs.nocobase.com/20250119221221.png)

Ссылка: [Import Pro](https://docs.nocobase.com/handbook/action-import-pro)

### Экспорт Pro

Возможность асинхронного выполнения операций экспорта в отдельном потоке, что поддерживает экспорт данных большого объема, а также экспорт вложений.

![20250119221237](https://static-docs.nocobase.com/20250119221237.png)

Ссылка: [Export Pro](https://docs.nocobase.com/handbook/action-export-pro)

### Печать шаблонов

Плагин Template Print позволяет редактировать файлы шаблонов с использованием Word, Excel или PowerPoint (поддерживаются форматы `.docx`, `.xlsx` и `.pptx`). Устанавливая заполнители и логические структуры внутри шаблона, вы можете динамически генерировать файлы в предопределенных форматах, таких как `.docx`, `.xlsx`, `.pptx`, а также `.pdf`. Эта функциональность широко применима для создания различных бизнес-документов, включая коммерческие предложения, счета, контракты и многое другое.

**Основные функции**

* **Поддержка множества форматов**: Совместимость с шаблонами Word, Excel и PowerPoint для удовлетворения различных потребностей в создании документов.  
* **Динамическое заполнение данных**: Автоматически заполняет содержимое документа на основе определённых заполнителей и логики.  
* **Гибкое управление шаблонами**: Легко добавляйте, редактируйте, удаляйте и категоризируйте шаблоны для удобства обслуживания и использования.  
* **Расширенный синтаксис шаблонов**: Поддерживает базовую замену, доступ к массивам, циклы, условный вывод и другие возможности синтаксиса для создания сложных документов.  
* **Поддержка форматирования**: Предоставляет условные выводы, форматирование дат, чисел и многое другое для повышения ясности и профессионализма документов.  
* **Эффективные варианты вывода**: Поддержка прямой генерации PDF для удобного обмена и печати.

![20250119221258](https://static-docs.nocobase.com/20250119221258.png)

Ссылка: [Template Print](https://docs.nocobase.com/handbook/action-template-print)

### Аудит логов

Этот плагин записывает и отслеживает действия пользователей, а также историю операций с ресурсами в системе.

![20250119221319](https://static-docs.nocobase.com/20250119221319.png)

Ссылка: [Audit Logger](https://docs.nocobase.com/handbook/audit-logger)

### Рабочий процесс: Подпроцесс

Эта функция позволяет одному рабочему процессу вызывать другой процесс. Вы можете использовать переменные текущего рабочего процесса в качестве входных данных для подпроцесса, а затем использовать выходные данные подпроцесса как переменные в последующих узлах.

![20250119221334](https://static-docs.nocobase.com/20250119221334.png)

Ссылка: [Workflow: Subflow](https://docs.nocobase.com/handbook/workflow-subflow)

### Менеджер электронной почты

Интегрируйте свои учетные записи электронной почты Google или Microsoft в NocoBase для отправки, получения, просмотра и управления письмами. Кроме того, электронные письма могут быть встроены непосредственно на страницы.

![20250119221346](https://static-docs.nocobase.com/20250119221346.png)

Ссылка: [Email Manager](https://docs.nocobase.com/handbook/email-manager/usage-admin)

### Хранилище файлов: S3 (Pro)

Поддерживает типы файлового хранилища, совместимые с протоколом S3, включая Amazon S3, Alibaba Cloud OSS, Tencent Cloud COS, MinIO и другие. Этот плагин также поддерживает прямую загрузку файлов и закрытый доступ.

![20250119221404](https://static-docs.nocobase.com/20250119221404.png)

Ссылка: [Хранилище файлов: S3 (Pro)](https://docs.nocobase.com/handbook/file-manager/storage/s3-pro)

## [v1.4.34](https://github.com/nocobase/nocobase/compare/v1.4.33...v1.4.34) - 2025-02-02

### 🐛 Исправления ошибок

- **[client]** Невозможно отправить при выборе данных ([#6148](https://github.com/nocobase/nocobase/pull/6148)) by @zhangzhonghe

## [v1.4.33](https://github.com/nocobase/nocobase/compare/v1.4.32...v1.4.33) - 2025-01-28

### 🐛 Исправления ошибок

- **[Аутентификация: OIDC]** Установить политику `same-site` для cookie состояния в значение `lax` by @2013xile

## [v1.4.32](https://github.com/nocobase/nocobase/compare/v1.4.31...v1.4.32) - 2025-01-27

### 🐛 Исправления ошибок

- **[actions]** Исправить действие "переместить" для запуска рабочего процесса ([#6144](https://github.com/nocobase/nocobase/pull/6144)) by @mytharcher

## [v1.4.31](https://github.com/nocobase/nocobase/compare/v1.4.30...v1.4.31) - 2025-01-26

### 🚀 Улучшения

- **[client]** оптимизировать компонент фильтра в форме фильтрации для соответствия настройкам фильтруемости ([#6110](https://github.com/nocobase/nocobase/pull/6110)) by @katherinehhh

- **[Файловый менеджер]** Разрешить удаление файлов при удалении записи файла (вложения) ([#6127](https://github.com/nocobase/nocobase/pull/6127)) by @mytharcher

### 🐛 Исправления ошибок

- **[database]**
  - исправить фильтрацию по полю UUID ([#6138](https://github.com/nocobase/nocobase/pull/6138)) by @chareice

  - Исправить обновление коллекции без первичных ключей ([#6124](https://github.com/nocobase/nocobase/pull/6124)) by @chareice

- **[client]**
  - Страница управления источниками данных выдает ошибку ([#6141](https://github.com/nocobase/nocobase/pull/6141)) by @zhangzhonghe

  - Когда условия правила связывания включают ассоциативные поля, которые не отображаются, правило связывания для кнопки становится неэффективным ([#6140](https://github.com/nocobase/nocobase/pull/6140)) by @zhangzhonghe

  - Исправить неправильное отображение переменных в форме быстрого добавления для поля ассоциации ([#6119](https://github.com/nocobase/nocobase/pull/6119)) by @katherinehhh

  - Содержимое не отображается во всплывающем окне быстрого добавления ([#6123](https://github.com/nocobase/nocobase/pull/6123)) by @zhangzhonghe

  - Исправить проблему, при которой блоки поля ассоциации не запрашивают данные ([#6125](https://github.com/nocobase/nocobase/pull/6125)) by @zhangzhonghe

  - Исправить правила связывания в подтаблицах/вложенных формах, влияющие на блоки во всплывающих окнах полей ассоциации ([#5543](https://github.com/nocobase/nocobase/pull/5543)) by @katherinehhh

- **[Поле коллекции: административные деления Китая]** исправить права доступа ACL для chinaRegion ([#6137](https://github.com/nocobase/nocobase/pull/6137)) by @chareice

- **[Workflow]** Исправить неправильно сгенерированный SQL запрос ([#6128](https://github.com/nocobase/nocobase/pull/6128)) by @mytharcher

- **[Поле коллекции: Многие ко многим (массив)]** Исправить проблему, при которой обновление полей "многие ко многим (массив)" в подформе не работает ([#6136](https://github.com/nocobase/nocobase/pull/6136)) by @2013xile

- **[Mobile]** Исправить проблему, когда выпадающий список в режиме "только чтение" кликабелен, а также проблему переполнения текста на мобильных устройствах ([#6130](https://github.com/nocobase/nocobase/pull/6130)) by @katherinehhh

## [v1.4.30](https://github.com/nocobase/nocobase/compare/v1.4.29...v1.4.30) - 2025-01-23

### 🐛 Исправления ошибок

- **[client]** Исправлена проблема отображения "N/A" для полей ассоциации в таблице. ([#6109](https://github.com/nocobase/nocobase/pull/6109)) by @zhangzhonghe

- **[Коллекция: Дерево]** Запретить установку узла древовидной коллекции в качестве его собственного родителя ([#6122](https://github.com/nocobase/nocobase/pull/6122)) by @2013xile

- **[Рабочий процесс: Узел HTTP-запроса]** Исправить зависание запроса узла в цикле ([#6120](https://github.com/nocobase/nocobase/pull/6120)) by @mytharcher

- **[Рабочий процесс: тестовый набор]** Исправить тестовые случаи макета источника данных, зависящие от ACL ([#6116](https://github.com/nocobase/nocobase/pull/6116)) by @mytharcher

- **[Менеджер резервного копирования]** Исправлена проблема, при которой некоторые файлы резервных копий не могли быть правильно извлечены и восстановлены by @gchust

## [v1.4.29](https://github.com/nocobase/nocobase/compare/v1.4.28...v1.4.29) - 2025-01-21

### 🎉 Новые функции

- **[Блок: Панель действий]** Добавлена возможность настраивать количество иконок в ряду для мобильной панели действий ([#6106](https://github.com/nocobase/nocobase/pull/6106)) by @katherinehhh

## [v1.4.28](https://github.com/nocobase/nocobase/compare/v1.4.27...v1.4.28) - 2025-01-21

### 🐛 Исправления ошибок

- **[client]** Значение по умолчанию для поля ассоциации не было обновлено ([#6103](https://github.com/nocobase/nocobase/pull/6103)) by @chenos

- **[Действие: Пакетное редактирование]** Удалить шаблон данных формы из настроек формы действия пакетного редактирования ([#6098](https://github.com/nocobase/nocobase/pull/6098)) by @katherinehhh

- **[Verification]** Исправить возможность редактирования ID провайдера ([#6097](https://github.com/nocobase/nocobase/pull/6097)) by @mytharcher

## [v1.4.27](https://github.com/nocobase/nocobase/compare/v1.4.26...v1.4.27) - 2025-01-18

### 🐛 Исправления ошибок

- **[client]** Исправлена проблема, когда данные блока пусты во всплывающем окне на встроенной странице ([#6086](https://github.com/nocobase/nocobase/pull/6086)) by @zhangzhonghe

- **[Workflow]** Исправить проблему, при которой отправка не обрабатывается на этапе подготовки ([#6087](https://github.com/nocobase/nocobase/pull/6087)) by @mytharcher

## [v1.4.26](https://github.com/nocobase/nocobase/compare/v1.4.25...v1.4.26) - 2025-01-16

### 🚀 Улучшения

- **[client]** Позволяет добавлять описания для SQL-коллекций. ([#6081](https://github.com/nocobase/nocobase/pull/6081)) by @2013xile

- **[resourcer]** Разрешить пустой объект в качестве значений в действии. ([#6070](https://github.com/nocobase/nocobase/pull/6070)) by @mytharcher

### 🐛 Исправления ошибок

- **[Localization]** Избегать API-запроса при попытке удалить пустой перевод ([#6078](https://github.com/nocobase/nocobase/pull/6078)) by @2013xile

## [v1.4.25](https://github.com/nocobase/nocobase/compare/v1.4.24...v1.4.25) - 2025-01-15

### 🚀 Улучшения

- **[client]** Улучшить расширяемость файлового хранилища. ([#6071](https://github.com/nocobase/nocobase/pull/6071)) by @chenos

- **[Workflow]** Исправить компонент повторяющегося поля в конфигурации расписания.([#6067](https://github.com/nocobase/nocobase/pull/6067)) by @mytharcher

### 🐛 Исправления ошибок

- **[Mobile]** Исправлена проблема с кнопками в нижней части экрана, которые перекрываются на мобильных устройствах ([#6068](https://github.com/nocobase/nocobase/pull/6068)) by @zhangzhonghe

- **[Рабочий процесс: Событие пользовательского действия]** Исправить контекст для HTTP-коллекции by @mytharcher

- **[Менеджер резервного копирования]** Исправлена возможная ошибка резервного копирования, когда плагин collection-fdw не включен. by @gchust

- **[Departments]** Исправлена проблема, при которой событие пользовательского действия не могло быть вызвано для коллекции "департаменты" by @mytharcher

## [v1.4.24](https://github.com/nocobase/nocobase/compare/v1.4.23...v1.4.24) - 2025-01-14

### 🚀 Улучшения

- **[client]** Компонент datePicker с доступом только для чтения ([#6061](https://github.com/nocobase/nocobase/pull/6061)) by @Cyx649312038

### 🐛 Исправления ошибок

- **[client]**
  - Исправлена проблема с некорректной загрузкой полей ассоциации во всплывающем окне в блоке таблицы ([#6060](https://github.com/nocobase/nocobase/pull/6060)) by @katherinehhh

  - Исправлена проблема со стилем в подтаблице в блоке деталей ([#6049](https://github.com/nocobase/nocobase/pull/6049)) by @katherinehhh

  - Исправлена проблема форматирования числового поля в режиме readPretty, влияющая на режим редактирования ([#6050](https://github.com/nocobase/nocobase/pull/6050)) by @katherinehhh

  - Исправлена проблема со стилем заголовка таблицы в ant-table ([#6052](https://github.com/nocobase/nocobase/pull/6052)) by @katherinehhh

- **[database]** Исправлена проблема при инициализации поля сортировки с использованием первичного ключа.([#6059](https://github.com/nocobase/nocobase/pull/6059)) by @chareice

- **[Визуализация данных]** Удалить предложение `LIMIT` при использовании агрегатных функций без указания измерений в запросах диаграмм. ([#6062](https://github.com/nocobase/nocobase/pull/6062)) by @2013xile

- **[Менеджер резервного копирования]** Исправлена ошибка загрузки резервной копии для пользователей, вошедших только в подприложение. by @gchust

## [v1.4.23](https://github.com/nocobase/nocobase/compare/v1.4.22...v1.4.23) - 2025-01-13

### 🐛 Исправления ошибок

- **[client]** Исправлена проблема, при которой фиксированный столбец действий работает некорректно в таблицах ([#6048](https://github.com/nocobase/nocobase/pull/6048)) by @zhangzhonghe

- **[Users]** Отключить автозаполнение браузера при установке паролей для пользователей в управлении пользователями ([#6041](https://github.com/nocobase/nocobase/pull/6041)) by @2013xile

- **[Workflow]** Исправлена проблема, при которой событие планировщика на основе поля даты не запускается после старта приложения ([#6042](https://github.com/nocobase/nocobase/pull/6042)) by @mytharcher

## [v1.4.22](https://github.com/nocobase/nocobase/compare/v1.4.21...v1.4.22) - 2025-01-10

### 🚀 Улучшения

- **[evaluators]** Обновление версии библиотеки formula.js до 4.4.9([#6037](https://github.com/nocobase/nocobase/pull/6037)) by @mytharcher

- **[Workflow]** Исправить API логгера плагина рабочего процесса ([#6036](https://github.com/nocobase/nocobase/pull/6036)) by @mytharcher

### 🐛 Исправления ошибок

- **[Workflow]** Добавить защитную логику для предотвращения повторного срабатывания ([#6022](https://github.com/nocobase/nocobase/pull/6022)) by @mytharcher

## [v1.4.21](https://github.com/nocobase/nocobase/compare/v1.4.20...v1.4.21) - 2025-01-10

### 🚀 Улучшения

- **[client]** Добавлена поддержка правил связывания в блоке деталей для скрытия (с зарезервированным значением) ([#6031](https://github.com/nocobase/nocobase/pull/6031)) by @katherinehhh

### 🐛 Исправления ошибок

- **[client]**
  - Исправлена проблема с отсутствующим путем public в адресах файлов иконок ([#6034](https://github.com/nocobase/nocobase/pull/6034)) by @chenos

  - Исправлена проблема, при которой правила связывания формы не работают, если они зависят от значений полей из подтаблиц ([#5876](https://github.com/nocobase/nocobase/pull/5876)) by @zhangzhonghe

  - Исправлена проблема с некорректным полем переменной "Текущая запись" в подданных. ([#6030](https://github.com/nocobase/nocobase/pull/6030)) by @zhangzhonghe

- **[Менеджер резервного копирования]** Исправлена ошибка загрузки резервной копии, когда переменная окружения API_BASE_PATH не равна /api by @gchust

## [v1.4.20](https://github.com/nocobase/nocobase/compare/v1.4.19...v1.4.20) - 2025-01-09

### 🎉 Новые функции

- **[client]** Добавлен метод app.getHref() ([#6019](https://github.com/nocobase/nocobase/pull/6019)) by @chenos

### 🚀 Улучшения
- **[client]**
  - Добавлена возможность сортировки рабочих процессов при привязке к кнопке действия. ([#6017](https://github.com/nocobase/nocobase/pull/6017)) by @mytharcher

  - Изменены ссылки на документацию для оценщиков (evaluators) на сайт документации. ([#6021](https://github.com/nocobase/nocobase/pull/6021)) by @mytharcher

  - Добавлена поддержка maxTagCount: 'responsive' в компоненте выпадающего списка с множественным выбором. ([#6007](https://github.com/nocobase/nocobase/pull/6007)) by @katherinehhh

  - Установлено значение времени окончания по умолчанию для компонента временного диапазона в блоке фильтра на 23:59:59. ([#6012](https://github.com/nocobase/nocobase/pull/6012)) by @katherinehhh

- **[Действие: Пакетное редактирование]** Рефакторинг кнопки отправки формы пакетного редактирования: удаление присвоения полей и правила связывания. ([#6008](https://github.com/nocobase/nocobase/pull/6008)) by @katherinehhh

### 🐛 Bug Fixes

- **[client]**
  - Исправлена проблема, при которой проверка на обязательное поле не работала после удаления данных в редакторе форматированного текста. ([#6006](https://github.com/nocobase/nocobase/pull/6006)) by @katherinehhh

  - Исправлена проблема смещения, когда кнопки в столбце действий скрыты. ([#6014](https://github.com/nocobase/nocobase/pull/6014)) by @katherinehhh

  - Исправлена проблема с кнопкой "Создать коллекции" при нажатии на вкладку "Коллекции" на странице REST API. ([#5992](https://github.com/nocobase/nocobase/pull/5992)) by @katherinehhh

  - Исправлена проблема, при которой targetKey не мог выбрать поле NanoID в отношениях "один-ко-многим". ([#5999](https://github.com/nocobase/nocobase/pull/5999)) by @katherinehhh

  - Исправлен стиль кнопки настроек в компактной теме. ([#6001](https://github.com/nocobase/nocobase/pull/6001)) by @katherinehhh

  - Исправлен стиль компонента списка ([#5998](https://github.com/nocobase/nocobase/pull/5998)) by @mytharcher

  - Исправлена проблема, при которой заголовки, включенные в клиентские запросы, перезаписывались. ([#6009](https://github.com/nocobase/nocobase/pull/6009)) by @2013xile

  - Исправлена проблема, при которой foreignKey, targetKey и sourceKey теперь поддерживают фильтрацию по китайским символам. ([#5997](https://github.com/nocobase/nocobase/pull/5997)) by @katherinehhh

- **[Действие: Импорт записей]** исправлена проблема импорта для связей "принадлежит многим", которые используют разные целевые ключи (target key) ([#6024](https://github.com/nocobase/nocobase/pull/6024)) by @chareice

- **[Блок: Карта]** Исправлена проблема, при которой поле карты в блоке деталей должно отображаться как блок карты ([#6010](https://github.com/nocobase/nocobase/pull/6010)) by @katherinehhh

- **[Встраивание NocoBase]** Токен для встраивания конфликтует с авторизацией by @chenos

## [v1.4.19](https://github.com/nocobase/nocobase/compare/v1.4.18...v1.4.19) - 2025-01-06

### 🐛 Исправления ошибок

- **[client]** Исправлена проблема, при которой в форме/действии фильтрации не отображается выбор времени в компоненте выбора диапазона дат, когда установлен параметр showTime ([#5994](https://github.com/nocobase/nocobase/pull/5994)) by @katherinehhh

## [v1.4.18](https://github.com/nocobase/nocobase/compare/v1.4.17...v1.4.18) - 2025-01-06

### 🚀 Улучшения

- **[Рабочий процесс: тестовый набор]** Исправлена точность полей даты в тестовой коллекции ([#5983](https://github.com/nocobase/nocobase/pull/5983)) by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - Исправлена проблема с полосой прокрутки при установке полной высоты для блока данных на подстранице ([#5989](https://github.com/nocobase/nocobase/pull/5989)) by @katherinehhh

  - Исправлена проблема выравнивания при скрытии кнопок в столбце действий ([#5987](https://github.com/nocobase/nocobase/pull/5987)) by @katherinehhh

  - Исправлена проблема с пакетным удалением системных и общих полей в менеджере коллекций ([#5988](https://github.com/nocobase/nocobase/pull/5988)) by @katherinehhh

  - Исправлена проблема, при которой переменная «URL search params» не работает на мобильной странице ([#5968](https://github.com/nocobase/nocobase/pull/5968)) by @Cyx649312038

- **[Server]** Исправлена потенциальная ошибка аварийного завершения работы приложения во время восстановления резервной копии ([#5981](https://github.com/nocobase/nocobase/pull/5981)) by @gchust

- **[Mobile]** Исправлена проблема, когда кнопки в нижней части экрана перекрываются на мобильных устройствах ([#5991](https://github.com/nocobase/nocobase/pull/5991)) by @zhangzhonghe

- **[Визуализация данных]** Исправлена проблема, при которой «текущие переменные всплывающего окна», используемые в диаграммах на подстраницах, становились пустыми после обновления страницы ([#5984](https://github.com/nocobase/nocobase/pull/5984)) by @2013xile

- **[Блок: Kanban]** Исправлена проблема, при которой поля родительской коллекции не загружались в канбане ([#5985](https://github.com/nocobase/nocobase/pull/5985)) by @katherinehhh

## [v1.4.17](https://github.com/nocobase/nocobase/compare/v1.4.16...v1.4.17) - 2024-12-31

### 🎉 Новые функции

- **[client]** Добавлена поддержка использования переменной «Выбранные записи таблицы» в полях массива m2m (многие-ко-многим) ([#5974](https://github.com/nocobase/nocobase/pull/5974)) by @2013xile

### 🚀 Улучшения

- **[undefined]** Включить плагин темы по умолчанию ([#5957](https://github.com/nocobase/nocobase/pull/5957)) by @zhangzhonghe

- **[Источник данных: Основной]** Добавлена проверка на конфликт имен, чтобы предотвратить создание коллекций с именами, совпадающими с системными коллекциями. ([#5962](https://github.com/nocobase/nocobase/pull/5962)) by @chareice

- **[Workflow]** Избегать неправильного использования переменных диапазона дат в большинстве мест, за исключением компонента фильтра ([#5954](https://github.com/nocobase/nocobase/pull/5954)) by @mytharcher

### 🐛 Исправления ошибок

- **[database]**
  - Исправлена проблема в действии destroy, где filterByTk с параметром фильтра не мог удалить данные. ([#5976](https://github.com/nocobase/nocobase/pull/5976)) by @chareice

  - Методы firstOrCreate и updateOrCreate репозитория теряют контекст. ([#5973](https://github.com/nocobase/nocobase/pull/5973)) by @chenos

- **[client]**
  - Исправлена проблема при добавлении поля связи «один-к-одному» в форму ([#5975](https://github.com/nocobase/nocobase/pull/5975)) by @katherinehhh

  - Исправлена проблема с назначением полей в подтаблице при повторном выборе данных после удаления ([#5958](https://github.com/nocobase/nocobase/pull/5958)) by @katherinehhh

  - Исправлена ошибка блока таблицы, вызванная данными, содержащими поля с именем 'children' ([#5951](https://github.com/nocobase/nocobase/pull/5951)) by @zhangzhonghe

- **[Источник данных: Основной]** Исправлены проблемы с поддержкой устаревших версий для поля unixTimestamp. ([#5967](https://github.com/nocobase/nocobase/pull/5967)) by @chareice

- **[Workflow]** Исправлена ошибка, возникающая в блоке подданных при настройке интерфейса ручного узла ([#5953](https://github.com/nocobase/nocobase/pull/5953)) by @mytharcher

## [v1.4.16](https://github.com/nocobase/nocobase/compare/v1.4.15...v1.4.16) - 2024-12-26

### 🐛 Исправления ошибок

- **[client]** Исправлена проблема с преобразованием точности поля UnixTimestamp ([#5931](https://github.com/nocobase/nocobase/pull/5931)) by @chenos

- **[Действие: Дублировать запись]** Исправлена проблема, при которой поле связи o2o (один-к-одному) не отображает настроенное поле целевой коллекции в блоках деталей и форм. ([#5921](https://github.com/nocobase/nocobase/pull/5921)) by @katherinehhh

- **[Менеджер резервного копирования]** Исправлена ошибка резервного копирования, когда версия mysqldump ниже 8. by @gchust

## [v1.4.15](https://github.com/nocobase/nocobase/compare/v1.4.14...v1.4.15) - 2024-12-24

### 🐛 Исправления ошибок

- **[Server]** Коллекции не создавались автоматически при включении плагина ([#5939](https://github.com/nocobase/nocobase/pull/5939)) by @chenos

- **[client]** Исправлена проблема, при которой поиск по полю свойства в правилах связывания не соответствует правильным данным ([#5925](https://github.com/nocobase/nocobase/pull/5925)) by @katherinehhh

- **[Workflow]**
  - Исправлена проблема с триггером расписания для поля даты без часового пояса ([#5938](https://github.com/nocobase/nocobase/pull/5938)) by @mytharcher

  - Исправлен перевод переменной диапазона дат ([#5919](https://github.com/nocobase/nocobase/pull/5919)) by @mytharcher

## [v1.4.14](https://github.com/nocobase/nocobase/compare/v1.4.13...v1.4.14) - 2024-12-21

### 🐛 Исправления ошибок

- **[Визуализация данных]** Исправлена ошибка при фильтрации с использованием вложенных связей «многие-ко-многим» в запросе диаграммы. ([#5917](https://github.com/nocobase/nocobase/pull/5917)) by @2013xile

- **[Рабочий процесс: Узел агрегации]** Исправлены некорректные результаты агрегации, вызванные транзакцией. ([#5916](https://github.com/nocobase/nocobase/pull/5916)) by @mytharcher

## [v1.4.13](https://github.com/nocobase/nocobase/compare/v1.4.12...v1.4.13) - 2024-12-19

### 🚀 Улучшения

- **[Коллекция: SQL]** Запрещено использование опасных ключевых слов и функций в SQL. ([#5913](https://github.com/nocobase/nocobase/pull/5913)) by @2013xile

- **[Редактор темы]** Оптимизирована валидация API для редактирования профиля пользователя и обновления пароля. ([#5912](https://github.com/nocobase/nocobase/pull/5912)) by @2013xile

### 🐛 Исправления ошибок

- **[Источник данных: Основной]** Исправлены проблемы с загрузкой внешних ключей. ([#5903](https://github.com/nocobase/nocobase/pull/5903)) by @chareice

- **[Коллекция: SQL]** Исправлена проблема, при которой поля исчезают после обновления SQL-коллекции. ([#5909](https://github.com/nocobase/nocobase/pull/5909)) by @chareice

- **[Менеджер резервного копирования]** Исправлена проблема, при которой восстановление резервной копии не работает в Windows. by @gchust

## [v1.4.11](https://github.com/nocobase/nocobase/compare/v1.4.10...v1.4.11) - 2024-12-18

### 🚀 Улучшения

- **[client]** Добавить поддержку параметра конфигурации «Обрезать переполненный контент» для большего количества компонентов. ([#5888](https://github.com/nocobase/nocobase/pull/5888)) by @zhangzhonghe

- **[database]** добавлены методы firstOrCreate и updateOrCreate в репозиторий связей ([#5894](https://github.com/nocobase/nocobase/pull/5894)) by @chareice

### 🐛 Исправления ошибок

- **[client]**
  - Исправлена проблема с отсутствующим параметром x-data-source в шаблоне дублирующего запроса для блока внешнего источника данных. ([#5882](https://github.com/nocobase/nocobase/pull/5882)) by @katherinehhh

  - Исправлена проблема с горизонтальной полосой прокрутки в таблице внутри плагина. ([#5899](https://github.com/nocobase/nocobase/pull/5899)) by @katherinehhh

  - Исправлена проблема, при которой в выпадающих списках полей ассоциации иногда появляются лишние варианты "N/A". ([#5878](https://github.com/nocobase/nocobase/pull/5878)) by @zhangzhonghe

  - Исправлена проблема с созданием представлений в PostgreSQL, устранена ошибка при выборе представлений между схемами. ([#5881](https://github.com/nocobase/nocobase/pull/5881)) by @katherinehhh

  - Исправлена проблема со стилями групп в блоках форм, когда макет установлен как горизонтальный. ([#5884](https://github.com/nocobase/nocobase/pull/5884)) by @katherinehhh

- **[Users]**
  - Исправлена проблема, при которой форма не сбрасывается после добавления или редактирования пользователя в управлении пользователями. ([#5875](https://github.com/nocobase/nocobase/pull/5875)) by @2013xile

  - Исправлена проблема, при которой настройки пагинации сбрасываются после редактирования и отправки профилей пользователей в управлении пользователями вследствие переключения страницы или изменения размера страницы. ([#5893](https://github.com/nocobase/nocobase/pull/5893)) by @2013xile

- **[Менеджер источников данных]** Исправлена проблема фильтрации в коллекции внешнего источника данных. ([#5890](https://github.com/nocobase/nocobase/pull/5890)) by @chareice

- **[Публичные формы]** Исправлена проблема, при которой переключение глобальной темы влияет на тему страницы предварительного просмотра публичной формы. ([#5883](https://github.com/nocobase/nocobase/pull/5883)) by @katherinehhh

## [v1.4.10](https://github.com/nocobase/nocobase/compare/v1.4.9...v1.4.10) - 2024-12-12

### 🎉 Новые функции

- **[Действие: Пользовательский запрос]** Добавлена поддержка использования переменной «Текущая форма» в кнопках пользовательского запроса. ([#5871](https://github.com/nocobase/nocobase/pull/5871)) by @zhangzhonghe

### 🚀 Улучшения

- **[Визуализация данных]** Добавлена возможность использования внешних ключей в конфигурации запросов диаграмм. ([#5869](https://github.com/nocobase/nocobase/pull/5869)) by @2013xile

### 🐛 Исправления ошибок

- **[client]** Исправлена проблема, при которой селектор таблицы файлов не отображается в не конфигурационном режиме при использовании выбора файлов. ([#5874](https://github.com/nocobase/nocobase/pull/5874)) by @katherinehhh

- **[Управление доступом]** Исправлены проблемы, связанные с репликацией записей после настройки разрешений. ([#5839](https://github.com/nocobase/nocobase/pull/5839)) by @chareice

- **[Workflow]** Исправлена проблема с тайм-аутом транзакции при автоматическом удалении выполнения. ([#5870](https://github.com/nocobase/nocobase/pull/5870)) by @mytharcher

## [v1.4.9](https://github.com/nocobase/nocobase/compare/v1.4.8...v1.4.9) - 2024-12-12

### 🐛 Исправления ошибок

- **[sdk]** Удалить локаль по умолчанию ([#5867](https://github.com/nocobase/nocobase/pull/5867)) by @chenos

- **[client]**
  - Исправлена проблема, при которой переменные вложенных полей ассоциации в области данных имеют пустые значения. ([#5866](https://github.com/nocobase/nocobase/pull/5866)) by @zhangzhonghe

  - Исправлена проблема появления полосы прокрутки при меньшем количестве столбцов с фиксированным правым столбцом ([#5864](https://github.com/nocobase/nocobase/pull/5864)) by @katherinehhh

  - Исправлена проблема с неправильным стилем позиции компонента `FilterItem`. ([#5851](https://github.com/nocobase/nocobase/pull/5851)) by @mytharcher

- **[Менеджер резервного копирования]** Исправлена ошибка загрузки резервной копии для подприложений с пользовательским доменом. by @gchust

## [v1.4.8](https://github.com/nocobase/nocobase/compare/v1.4.7...v1.4.8) - 2024-12-10

### 🐛 Исправления ошибок

- **[client]**
  - Исправлена проблема с шаблоном данных в форме фильтрации, настроенной в селекторе записей поля ассоциации. ([#5837](https://github.com/nocobase/nocobase/pull/5837)) by @katherinehhh

  - Исправлена проблема, при которой шаблоны строк Markdown не загружают данные ассоциации (внешний источник данных). ([#5791](https://github.com/nocobase/nocobase/pull/5791)) by @katherinehhh

- **[Синхронизация пользовательских данных]** Пропускать неподдерживаемые типы данных во время синхронизации вместо того, чтобы вызывать ошибку. ([#5835](https://github.com/nocobase/nocobase/pull/5835)) by @chenzhizdt

- **[Менеджер резервного копирования]**
  - Исправлено медленное появление окна загрузки для больших файлов резервных копий. by @gchust

  - Исправлена проблема, при которой восстановление резервной копии подприложения вызывает перезапуск всех приложений. by @gchust

## [v1.4.7](https://github.com/nocobase/nocobase/compare/v1.4.6...v1.4.7) - 2024-12-09

### 🐛 Исправления ошибок

- **[Mobile]** Исправлена проблема отображения цвета фона на мобильных устройствах. ([#5809](https://github.com/nocobase/nocobase/pull/5809)) by @katherinehhh

## [v1.4.6](https://github.com/nocobase/nocobase/compare/v1.4.5...v1.4.6) - 2024-12-08

### 🐛 Исправления ошибок

- **[Действие: Импорт записей]** исправлена проблема импорта данных с таблицами в ассоциациях ([#5833](https://github.com/nocobase/nocobase/pull/5833)) by @chareice

- **[Управление доступом]** Исправлена проблема использования полей для запроса связей в ACL. ([#5832](https://github.com/nocobase/nocobase/pull/5832)) by @chareice

## [v1.4.5](https://github.com/nocobase/nocobase/compare/v1.4.4...v1.4.5) - 2024-12-08

### 🐛 Исправления ошибок

- **[Управление доступом]** Обновить страницу, если роль пользователя некорректна. ([#5821](https://github.com/nocobase/nocobase/pull/5821)) by @chenos

## [v1.4.4](https://github.com/nocobase/nocobase/compare/v1.4.3...v1.4.4) - 2024-12-08

### 🐛 Исправления ошибок

- **[client]**
  - Исправлена проблема, при которой поля внешнего источника данных не отображаются в блоке таблицы. ([#5825](https://github.com/nocobase/nocobase/pull/5825)) by @katherinehhh

  - Исправлена проблема отображения унаследованных полей в конфигурации формы.([#5822](https://github.com/nocobase/nocobase/pull/5822)) by @katherinehhh

  - Исправлена проблема, при которой унаследованные поля не отображаются в списке полей и их нельзя переопределить. ([#5800](https://github.com/nocobase/nocobase/pull/5800)) by @katherinehhh

- **[Визуализация данных]** Исправлена проблема форматирования полей даты с учетом часового пояса в MySQL. ([#5829](https://github.com/nocobase/nocobase/pull/5829)) by @2013xile

- **[Workflow]**
  - Исправлена проблема транзакций между источниками данных, вызывающая ошибку событий коллекции. ([#5818](https://github.com/nocobase/nocobase/pull/5818)) by @mytharcher

  - Исправлена проблема отсутствия типа даты в конфигурации расписания на основе поля даты.([#5816](https://github.com/nocobase/nocobase/pull/5816)) by @mytharcher

- **[Поле коллекции: Многие ко многим (массив)]** Исправлена проблема, при которой обновление полей m2m (многие-ко-многим) массива в коллекции с одной связью не применяется. ([#5820](https://github.com/nocobase/nocobase/pull/5820)) by @2013xile

- **[Calendar]**
  - Исправлена ошибка при клике на пустую дату в календаре. ([#5803](https://github.com/nocobase/nocobase/pull/5803)) by @katherinehhh

  - Исправлена проблема, при которой закрытие всплывающего окна, открытого через «Блок календаря», приводит к закрытию всех всплывающих окон. ([#5793](https://github.com/nocobase/nocobase/pull/5793)) by @zhangzhonghe

- **[Публичные формы]** Исправлен неправильный путь сканирования QR-кода в публичной форме подприложения. ([#5799](https://github.com/nocobase/nocobase/pull/5799)) by @katherinehhh

## [v1.4.3](https://github.com/nocobase/nocobase/compare/v1.4.2...v1.4.3) - 2024-12-05

### 🚀 Улучшения

- **[test]** Разрешить вход с использованием имени роли в тестовых случаях. ([#5794](https://github.com/nocobase/nocobase/pull/5794)) by @mytharcher

- **[Уведомление: Сообщение внутри приложения]** обновлены заголовки для детальных URL в формах сообщений внутри приложения и файлах локализации ([#5742](https://github.com/nocobase/nocobase/pull/5742)) by @sheldon66

### 🐛 Исправления ошибок

- **[client]**
  - Исправлена проблема, при которой токен не очищается после того, как пользователь без роли сталкивается с ошибкой входа и нажимает кнопку «Войти с другой учетной записью». ([#5790](https://github.com/nocobase/nocobase/pull/5790)) by @2013xile

  - Потеря заголовков запроса при автоматических запросах ([#5795](https://github.com/nocobase/nocobase/pull/5795)) by @chenos

  - Пустая страница, когда у пользователя нет роли ([#5797](https://github.com/nocobase/nocobase/pull/5797)) by @chenos

  - Исправлена проблема с полосой прокрутки в подтаблице с размером "маленький" в компактной теме.([#5796](https://github.com/nocobase/nocobase/pull/5796)) by @katherinehhh

## [v1.4.2](https://github.com/nocobase/nocobase/compare/v1.4.1...v1.4.2) - 2024-12-04

### 🐛 Исправления ошибок

- **[Workflow]** Исправлена проблема исчезновения тега асинхронного рабочего процесса в таблице рабочих процессов. ([#5787](https://github.com/nocobase/nocobase/pull/5787)) by @mytharcher

## [v1.4.1](https://github.com/nocobase/nocobase/compare/v1.4.0...v1.4.1) - 2024-12-04

### 🚀 Улучшения

- **[cli]** оптимизирована команда pkg ([#5785](https://github.com/nocobase/nocobase/pull/5785)) by @chenos

### 🐛 Исправления ошибок

- **[Mobile]** Исправлена проблема отсутствия поля ввода даты в операции фильтрации на мобильных устройствах. ([#5786](https://github.com/nocobase/nocobase/pull/5786)) by @katherinehhh

## [v1.4.0](https://github.com/nocobase/nocobase/compare/v1.3.53...v1.4.0) - 2024-12-03

## 🎉 Основные новые функции

### Упростить процесс добавления и обновления плагинов

![20241201170853](https://static-docs.nocobase.com/20241201170853.png)

* Список плагинов теперь считывается напрямую из локального каталога.  
* Объединены процессы добавления и обновления плагинов.  
* Интерфейс поддерживает пакетную активацию плагинов.  
* Упрощен процесс загрузки и обновления коммерческих плагинов.

Справочная документация:

* [Примечания к выпуску / Упрощение процесса добавления и обновления плагинов](https://www.nocobase.com/en/blog/simplify-the-process-of-adding-and-updating-plugins)

### Уведомление

![20241201171806](https://static-docs.nocobase.com/20241201171806.png)

* **Уведомление: Сообщение внутри приложения**
  Оно позволяет пользователям получать уведомления о сообщениях в реальном времени внутри приложения NocoBase;
* **Уведомление: Электронная почта**
  Используется для отправки уведомлений по электронной почте с помощью встроенного транспорта SMTP. Подробнее;
* **Уведомление: WeCom**
  Отправляет уведомления через канал WeCom.

Справочная документация:

* [Управление уведомлениями](https://docs.nocobase.com/handbook/notification-manager)

### Синхронизация пользовательских данных

![20241201172843](https://static-docs.nocobase.com/20241201172843.png)

Справочная документация:

* [Синхронизация пользовательских данных](https://docs.nocobase.com/handbook/user-data-sync)

### Менеджер резервного копирования

![20241201170237](https://static-docs.nocobase.com/20241201170237.png)

Справочная документация:

* [Менеджер резервного копирования](https://docs.nocobase.com/handbook/backups)

### Публичные формы

Внешнее распространение публичных форм для сбора информации от анонимных пользователей.

![20241201165614](https://static-docs.nocobase.com/20241201165614.png)

Справочная документация:

* [Публичные формы](https://docs.nocobase.com/handbook/public-forms)

### Источник данных: KingbaseES

Использование базы данных KingbaseES в качестве источника данных, либо как основной базы данных, либо как внешней базы данных.

![20241024121815](https://static-docs.nocobase.com/20241024121815.png)

Справочная документация:

* [Источник данных — KingbaseES](https://docs.nocobase.com/handbook/data-source-kingbase)

### Источник данных: Внешний Oracle

Использование внешних баз данных Oracle в качестве источника данных.

![628abc5eb797e6b903d4b548f773a13b.png](https://static-docs.nocobase.com/628abc5eb797e6b903d4b548f773a13b.png)

Справочная документация:

* [Внешний источник данных — Oracle](https://docs.nocobase.com/handbook/data-source-external-oracle)

### Поле коллекции: Вложения (URL)

Supports URL-based attachments.

![e8772bec3d4b1771c1b21d087c9a4185.png](https://static-docs.nocobase.com/e8772bec3d4b1771c1b21d087c9a4185.png)

Справочная документация:

* [Поле таблицы данных: Вложения (URL)](https://docs.nocobase.com/handbook/field-attachment-url)

### Компонент поля: Маска

![20241201165938](https://static-docs.nocobase.com/20241201165938.png)

Справочная документация:

* [Компонент поля: Маска](https://docs.nocobase.com/handbook/field-component-mask)

### Рабочий процесс: JavaScript

Узлы JavaScript позволяют пользователям выполнять JavaScript внутри рабочего процесса. Скрипт может использовать переменные из узлов, находящихся выше по потоку, в качестве параметров, а возвращаемое значение скрипта может быть использовано в узлах ниже по потоку.

![20241202203655](https://static-docs.nocobase.com/20241202203655.png)

Справочная документация:

* [Рабочий процесс — JavaScript](https://docs.nocobase.com/handbook/workflow-javascript)

### Визуализация данных: ECharts

Добавлен ECharts, поддерживающий воронкообразные, радиальные и другие типы диаграмм, а также предоставляющий более удобные для пользователя настройки.

![Визуализация-данных-echarts](https://static-docs.nocobase.com/202410091022965.png)

Справочная документация:

* [Визуализация-данных-echarts](https://docs.nocobase.com/handbook/data-visualization-echarts)

### Блок: Многошаговая форма

![a503e153e8d714b9ca56f512142aeef1.png](https://static-docs.nocobase.com/a503e153e8d714b9ca56f512142aeef1.png)

Справочная документация:

* [Многошаговая форма](https://docs.nocobase.com/handbook/block-multi-step-from)

### Блок: Панель действий

Предназначен для размещения различных быстрых действий, в настоящее время поддерживает:

* Ссылка  
* Сканирование QR-кода  
* Всплывающее окно  
* Пользовательский запрос

Поддерживает как сеточный, так и списковый макеты.

![9942e6741e99195713f9e2981b02f228.png](https://static-docs.nocobase.com/9942e6741e99195713f9e2981b02f228.png)

Справочная документация:

* [Панель действий](https://docs.nocobase.com/handbook/block-action-panel)

## [v1.3.55](https://github.com/nocobase/nocobase/compare/v1.3.54...v1.3.55) - 2024-12-03

### 🚀 Улучшения

- **[client]** Использовать иконки с более точным значением для инициализаторов блоков. ([#5757](https://github.com/nocobase/nocobase/pull/5757)) by @mytharcher

### 🐛 Исправления ошибок

- **[client]**
  - Исправлены E2E-тесты с учетом измененных иконок. ([#5768](https://github.com/nocobase/nocobase/pull/5768)) by @mytharcher

  - Исправить поле выбора, чтобы оно отображалось пустым, когда данные отсутствуют. ([#5762](https://github.com/nocobase/nocobase/pull/5762)) by @katherinehhh

- **[database]** Исправить обновление значений ассоциаций hasOne/belongsTo без внешнего ключа. ([#5754](https://github.com/nocobase/nocobase/pull/5754)) by @chareice

- **[Менеджер источников данных]** Исправить неправильное отображение ключа источника.([#5771](https://github.com/nocobase/nocobase/pull/5771)) by @katherinehhh

- **[Рабочий процесс: Пользовательское событие действия]**
  - Разрешить всем ролям запуск пользовательского события действия во внешних источниках данных. by @mytharcher

  - Исправить основной источник данных по умолчанию by @mytharcher

  - Исправить ошибку источника данных, когда совпадений нет by @mytharcher

  - Исправить срабатывание пользовательского действия, которое не запускается при ассоциации by @mytharcher

## [v1.3.53](https://github.com/nocobase/nocobase/compare/v1.3.52...v1.3.53) - 2024-11-28

### 🚀 Улучшения

- **[client]**
  - экспорт основного хука([#5702](https://github.com/nocobase/nocobase/pull/5702)) by @mytharcher

  - плагин поля "регионы Китая" удален из встроенных плагинов ([#5693](https://github.com/nocobase/nocobase/pull/5693)) by @katherinehhh

- **[Рабочий процесс: Событие перед действием]** удалить предупреждение в журнале в интерцепторе запросов by @mytharcher

### 🐛 Исправления ошибок

- **[cli]** Демон-режим не удаляет файлы сокетов (.sock) ([#5750](https://github.com/nocobase/nocobase/pull/5750)) by @chenos

- **[client]**
  - Исправлена проблема, при которой поля ассоциации влияют друг на друга, если несколько полей ассоциации имеют одну и ту же целевую коллекцию. ([#5744](https://github.com/nocobase/nocobase/pull/5744)) by @katherinehhh

  - Исправлена проблема с выравниванием чекбоксов в подтаблице. ([#5735](https://github.com/nocobase/nocobase/pull/5735)) by @katherinehhh

  - Исправлена проблема отображения поля внешнего ключа в селекторе данных ([#5734](https://github.com/nocobase/nocobase/pull/5734)) by @katherinehhh

  - Исправлена настройка feedbackLayout для улучшения сообщений валидации в подтаблице ([#5700](https://github.com/nocobase/nocobase/pull/5700)) by @katherinehhh

- **[Server]** Загрузка плагинов в порядке зависимостей ([#5706](https://github.com/nocobase/nocobase/pull/5706)) by @chenos

- **[Блок: Карта]** Fix error when changing zoom levels in Google Maps ([#5722](https://github.com/nocobase/nocobase/pull/5722)) by @katherinehhh

- **[Источник данных: Основной]** Исправлена проблема вывода имени поля в коллекции представления.([#5729](https://github.com/nocobase/nocobase/pull/5729)) by @chareice

- **[Файловый менеджер]** когда endpoint не пустой, forcePathStyle устанавливается в true ([#5712](https://github.com/nocobase/nocobase/pull/5712)) by @chenos

## [v1.3.52](https://github.com/nocobase/nocobase/compare/v1.3.51...v1.3.52) - 2024-11-21

### 🚀 Улучшения

- **[Workflow]**
  - удалить ограничение на количество страниц в узле запроса ([#5694](https://github.com/nocobase/nocobase/pull/5694)) by @mytharcher

  - изменить так, чтобы выполнения не удалялись при удалении рабочего процесса ([#5666](https://github.com/nocobase/nocobase/pull/5666)) by @mytharcher

- **[Источник данных: REST API]** Оптимизировать текстовые описания плагина REST API by @katherinehhh

## [v1.3.51](https://github.com/nocobase/nocobase/compare/v1.3.50-beta...v1.3.51) - 2024-11-19

### 🐛 Исправления ошибок

- **[client]**
  - Исправлена проверка разрешений поля, которая не зависит от контекста поля ассоциации ([#5672](https://github.com/nocobase/nocobase/pull/5672)) by @katherinehhh

  - Исправлена проблема сохранения правил связывания, при которой пустые значения изменяются на статическое пустое значение. ([#5667](https://github.com/nocobase/nocobase/pull/5667)) by @katherinehhh

- **[Поле коллекции: Многие ко многим (массив)]** Исправлена проблема, при которой получение записей в ассоциативной коллекции с полями «многие ко многим (массив)» вызывает ошибку. ([#5661](https://github.com/nocobase/nocobase/pull/5661)) by @2013xile

- **[Блок: Gantt]** Исправлена проблема, при которой шаблон блока Гантта некорректно вызывает календарь при добавлении ([#5673](https://github.com/nocobase/nocobase/pull/5673)) by @katherinehhh

- **[Визуализация данных]** Исправлена проблема, при которой преобразования данных не применяются к подсказкам во двуосевых диаграммах ([#5649](https://github.com/nocobase/nocobase/pull/5649)) by @2013xile

## [v1.3.50-beta](https://github.com/nocobase/nocobase/compare/v1.3.49-beta...v1.3.50-beta) - 2024-11-14

### 🐛 Исправления ошибок

- **[client]** Исправлена проблема, из-за которой заголовок правила связывания не очищался во время редактирования. ([#5644](https://github.com/nocobase/nocobase/pull/5644)) by @katherinehhh

- **[Comments]** Исправлена проблема, при которой настройка области данных не работала в блоке комментариев by @katherinehhh

## [v1.3.49-beta](https://github.com/nocobase/nocobase/compare/v1.3.48-beta...v1.3.49-beta) - 2024-11-13

### 🚀 Улучшения

- **[client]** добавлена поддержка полей один-к-одному и многие-ко-многим (массив) для использования коллекции файлов ([#5637](https://github.com/nocobase/nocobase/pull/5637)) by @mytharcher

- **[evaluators]** использовать Formula.js в качестве оценщика по умолчанию в узле вычислений ([#5626](https://github.com/nocobase/nocobase/pull/5626)) by @mytharcher

### 🐛 Исправления ошибок

- **[client]** Исправлена проблема сброса, при которой заголовок кнопки фильтра возвращается к значению по умолчанию. ([#5635](https://github.com/nocobase/nocobase/pull/5635)) by @katherinehhh

- **[Действие: Импорт записей]** Исправлена проблема, при которой данные отношений «многие-ко-многим» не могут быть импортированы через поле идентификатора (id) ([#5623](https://github.com/nocobase/nocobase/pull/5623)) by @chareice

## [v1.3.48-beta](https://github.com/nocobase/nocobase/compare/v1.3.47-beta...v1.3.48-beta) - 2024-11-11

### 🚀 Улучшения

- **[client]** добавлена поддержка скрытия элементов меню ([#5624](https://github.com/nocobase/nocobase/pull/5624)) by @chenos

- **[Server]** add  DB_SQL_BENCHMARK  environment variable ([#5615](https://github.com/nocobase/nocobase/pull/5615)) by @chareice

### 🐛 Исправления ошибок

- **[client]** добавлена поддержка коллекции файлов в качестве цели для ассоциации «один-ко-многим» ([#5619](https://github.com/nocobase/nocobase/pull/5619)) by @mytharcher

- **[Действие: Импорт записей]** Исправлена проблема, при которой данные отношений «многие-ко-многим» не могут быть импортированы через поле идентификатора (id) ([#5623](https://github.com/nocobase/nocobase/pull/5623)) by @chareice

## [v1.3.47-beta](https://github.com/nocobase/nocobase/compare/v1.3.46-beta...v1.3.47-beta) - 2024-11-08

### 🚀 Улучшения

- **[Authentication]** Оптимизировать сообщения об ошибках для входа и регистрации ([#5612](https://github.com/nocobase/nocobase/pull/5612)) by @2013xile

### 🐛 Исправления ошибок

- **[client]**
  - Исправлена проблема с значениями по умолчанию в подтаблице ([#5607](https://github.com/nocobase/nocobase/pull/5607)) by @zhangzhonghe

  - Исправлена проблема с поддержкой нечеткого поиска для полей ассоциации с текстовым полем заголовка ([#5611](https://github.com/nocobase/nocobase/pull/5611)) by @katherinehhh

- **[Authentication]** Исправлена проблема, при которой пользователи не могут изменить пароль при входе с использованием аутентификатора, отличного от пароля. ([#5609](https://github.com/nocobase/nocobase/pull/5609)) by @2013xile

## [v1.3.45-beta](https://github.com/nocobase/nocobase/compare/v1.3.44-beta...v1.3.45-beta) - 2024-11-06

### 🐛 Исправления ошибок

- **[client]** разрешение для поля таблицы ассоциации в таблице основывается на разрешении соответствующего поля ассоциации ([#5569](https://github.com/nocobase/nocobase/pull/5569)) by @katherinehhh

- **[Действие: Экспорт записей]** Исправлен экспорт с поддержкой i18n (интернационализации). ([#5591](https://github.com/nocobase/nocobase/pull/5591)) by @chareice

- **[Действие: Импорт записей]** исправлена проблема с импортом для связи "принадлежит" (belongs to) ([#5417](https://github.com/nocobase/nocobase/pull/5417)) by @chareice

## [v1.3.44-beta](https://github.com/nocobase/nocobase/compare/v1.3.43-beta...v1.3.44-beta) - 2024-11-05

### 🎉 Новые функции

- **[Аутентификация: OIDC]** Добавлена опция "включить инициируемый RP выход из системы". by @2013xile

### 🐛 Исправления ошибок

- **[client]** Исправлена проблема фильтрации при установке поля одиночного выбора как поля заголовка в выборе ассоциации ([#5581](https://github.com/nocobase/nocobase/pull/5581)) by @katherinehhh

## [v1.3.43-beta](https://github.com/nocobase/nocobase/compare/v1.3.42-beta...v1.3.43-beta) - 2024-11-05

### 🚀 Улучшения

- **[client]** точность числовых значений может быть настроена до 8 знаков ([#5552](https://github.com/nocobase/nocobase/pull/5552)) by @chenos

### 🐛 Исправления ошибок

- **[client]** Исправлена проблема, из-за которой стиль связывания не обновлялся в форме. ([#5539](https://github.com/nocobase/nocobase/pull/5539)) by @sheldon66

- **[Аутентификация: API-ключи]** Исправлен путь URL для страницы настроек API-ключей. ([#5562](https://github.com/nocobase/nocobase/pull/5562)) by @2013xile

- **[Mobile]** Исправлена проблема, при которой предпросмотр изображений перекрывался страницей. ([#5535](https://github.com/nocobase/nocobase/pull/5535)) by @zhangzhonghe

- **[Блок: Карта]** решена проблема отображения карты в подданных и некорректного отображения значений для пустых полей ([#5526](https://github.com/nocobase/nocobase/pull/5526)) by @katherinehhh

- **[Коллекция: Дерево]** Исправлены ошибки при обновлении коллекции пути. ([#5551](https://github.com/nocobase/nocobase/pull/5551)) by @2013xile

## [v1.3.42-beta](https://github.com/nocobase/nocobase/compare/v1.3.41-beta...v1.3.42-beta) - 2024-10-28

### 🐛 Исправления ошибок

- **[Коллекция: Дерево]** Исправлена проблема, при которой пути узлов не обновляются при отмене связи с дочерними элементами. ([#5522](https://github.com/nocobase/nocobase/pull/5522)) by @2013xile

## [v1.3.41-beta](https://github.com/nocobase/nocobase/compare/v1.3.40-beta...v1.3.41-beta) - 2024-10-27

### 🚀 Улучшения

- **[Управление доступом]** Оптимизировать производительность для больших таблиц в ACL (управление доступом). ([#5496](https://github.com/nocobase/nocobase/pull/5496)) by @chareice

## [v1.3.40-beta](https://github.com/nocobase/nocobase/compare/v1.3.39-beta...v1.3.40-beta) - 2024-10-25

### 🎉 Новые функции

- **[Аутентификация: OIDC]** Добавлена опция для разрешения пропуска проверки SSL by @2013xile

### 🚀 Улучшения

- **[client]** отображать отключенный неотмеченный чекбокс для невыбранных полей ([#5503](https://github.com/nocobase/nocobase/pull/5503)) by @katherinehhh

### 🐛 Исправления ошибок

- **[database]** Исправлена проблема, при которой операторы строк "содержит" и "не содержит" неправильно обрабатывают значения `null`. ([#5509](https://github.com/nocobase/nocobase/pull/5509)) by @2013xile

- **[client]** Исправлено правило связывания для корректной обработки переменных параметров URL. ([#5504](https://github.com/nocobase/nocobase/pull/5504)) by @katherinehhh

- **[Блок: Карта]** Исправлена проблема, при которой некоторые карты отображались некорректно при наличии нескольких карт из-за множественных вызовов метода `load` в AMap. ([#5490](https://github.com/nocobase/nocobase/pull/5490)) by @Cyx649312038

## [v1.3.39-beta](https://github.com/nocobase/nocobase/compare/v1.3.38-beta...v1.3.39-beta) - 2024-10-24

### 🐛 Исправления ошибок

- **[client]** Исправлена проблема, при которой блоки фильтрации не могут быть добавлены во всплывающем окне. ([#5502](https://github.com/nocobase/nocobase/pull/5502)) by @zhangzhonghe

## [v1.3.38-beta](https://github.com/nocobase/nocobase/compare/v1.3.37-beta...v1.3.38-beta) - 2024-10-24

### 🐛 Исправления ошибок

- **[client]**
  - проблема с пагинацией в блоке списка с коллекцией простой пагинации([#5500](https://github.com/nocobase/nocobase/pull/5500)) by @katherinehhh

  - В режиме без конфигурации отображать только текущую коллекцию в форме редактирования. ([#5499](https://github.com/nocobase/nocobase/pull/5499)) by @katherinehhh

- **[Рабочий процесс: Узел HTTP-запроса]** исправлена проблема появления специального пробела при вставке содержимого в текстовую область переменной ([#5497](https://github.com/nocobase/nocobase/pull/5497)) by @mytharcher

- **[Departments]** Исправлена проблема с неправильной проверкой разрешений внешнего источника данных в рамках роли отдела. by @2013xile

## [v1.3.37-beta](https://github.com/nocobase/nocobase/compare/v1.3.36-beta...v1.3.37-beta) - 2024-10-23

### 🚀 Улучшения

- **[client]** Настроить подсказку в панели конфигурации привязки рабочего процесса к кнопке ([#5494](https://github.com/nocobase/nocobase/pull/5494)) by @mytharcher

### 🐛 Исправления ошибок

- **[Файловый менеджер]** исправлена загрузка и удаление записи файла в блоке ассоциации ([#5493](https://github.com/nocobase/nocobase/pull/5493)) by @mytharcher

## [v1.3.36-beta](https://github.com/nocobase/nocobase/compare/v1.3.35-beta...v1.3.36-beta) - 2024-10-22

### 🐛 Исправления ошибок

- **[Коллекция: Дерево]** Исправлена проблема, при которой коллекция пути для дерева наследования не создается автоматически ([#5486](https://github.com/nocobase/nocobase/pull/5486)) by @2013xile

- **[Calendar]** отображать панель пагинации с данными в таблице ([#5480](https://github.com/nocobase/nocobase/pull/5480)) by @katherinehhh

- **[Файловый менеджер]** исправлена проблема, при которой файл не может быть загружен из-за правила хука. ([#5460](https://github.com/nocobase/nocobase/pull/5460)) by @mytharcher

- **[Поле коллекции: Формула]** Исправлена проблема с некорректным вычислением формулы во вложенной многоуровневой подтаблице. ([#5469](https://github.com/nocobase/nocobase/pull/5469)) by @gu-zhichao

## [v1.3.35-beta](https://github.com/nocobase/nocobase/compare/v1.3.34-beta...v1.3.35-beta) - 2024-10-21

### 🚀 Улучшения

- **[Рабочий процесс: узел почтовой рассылки]** добавлен placeholder (заполнитель) для узла почтовой рассылки ([#5470](https://github.com/nocobase/nocobase/pull/5470)) by @mytharcher

## [v1.3.34-beta](https://github.com/nocobase/nocobase/compare/v1.3.33-beta...v1.3.34-beta) - 2024-10-21

### 🎉 Новые функции

- **[test]** Поля ассоциации в формах фильтрации поддерживают настройку возможности множественного выбора. ([#5451](https://github.com/nocobase/nocobase/pull/5451)) by @zhangzhonghe

- **[client]** Добавлена переменная с именем "Родительский объект". ([#5449](https://github.com/nocobase/nocobase/pull/5449)) by @zhangzhonghe
Ссылка: [Родительский объект](https://docs.nocobase.com/handbook/ui/variables#parent-object)

### 🐛 Исправления ошибок

- **[client]**
  - Исправлена проблема, при которой переменные параметров поиска в URL не разбирались. ([#5454](https://github.com/nocobase/nocobase/pull/5454)) by @zhangzhonghe

  - Исправлена ошибка очистки данных при выборе ассоциативных данных с областью видимости в вложенных подтаблицах. ([#5441](https://github.com/nocobase/nocobase/pull/5441)) by @katherinehhh

  - исправлена проблема с цветом фона выбранной строки таблицы ([#5445](https://github.com/nocobase/nocobase/pull/5445)) by @mytharcher

- **[Блок: Карта]** удалена настройка уровня масштабирования для полей карты в столбце таблицы ([#5457](https://github.com/nocobase/nocobase/pull/5457)) by @katherinehhh

- **[Файловый менеджер]** исправлена проблема вызова хука правила хранения для полей read-pretty ([#5447](https://github.com/nocobase/nocobase/pull/5447)) by @mytharcher

- **[Источник данных: Основной]** исправлена ошибка в e2e-тестах из-за изменений в компоненте ([#5437](https://github.com/nocobase/nocobase/pull/5437)) by @mytharcher

## [v1.3.33-beta](https://github.com/nocobase/nocobase/compare/v1.3.32-beta...v1.3.33-beta) - 2024-10-16

### 🚀 Улучшения

- **[Workflow]** добавлены подсказки, связанные с полями ассоциации, в пакетный режим узла обновления ([#5426](https://github.com/nocobase/nocobase/pull/5426)) by @mytharcher

### 🐛 Исправления ошибок

- **[client]**
  - исправлена проблема, при которой панель редактирования профиля перекрывается подстраницей ([#5409](https://github.com/nocobase/nocobase/pull/5409)) by @zhangzhonghe

  - Переменные узла рабочего процесса не отображают поля унаследованных коллекций ([#5415](https://github.com/nocobase/nocobase/pull/5415)) by @chenos

  - пагинация не сбрасывается после очистки данных фильтра в блоке фильтрации таблицы ([#5411](https://github.com/nocobase/nocobase/pull/5411)) by @katherinehhh

- **[Файловый менеджер]** удалено ограничение в 20 элементов при загрузке хранилищ в конфигурации коллекции файловых шаблонов ([#5430](https://github.com/nocobase/nocobase/pull/5430)) by @mytharcher

- **[Действие: Дублировать запись]** Исправлена проблема, при которой всплывающее окно пакетного редактирования не отображает содержимое.t ([#5412](https://github.com/nocobase/nocobase/pull/5412)) by @zhangzhonghe

- **[Визуализация данных]** Исправлена проблема, при которой значения по умолчанию не отображаются в блоке фильтра диаграммы. ([#5405](https://github.com/nocobase/nocobase/pull/5405)) by @zhangzhonghe

## [v1.3.32-beta](https://github.com/nocobase/nocobase/compare/v1.3.31-beta...v1.3.32-beta) - 2024-10-13

### 🐛 Исправления ошибок

- **[client]** обязательное реляционное поле все равно вызывает ошибку валидации после выбора значения с переменной в области данных ([#5399](https://github.com/nocobase/nocobase/pull/5399)) by @katherinehhh

## [v1.3.31-beta](https://github.com/nocobase/nocobase/compare/v1.3.30-beta...v1.3.31-beta) - 2024-10-11

### 🐛 Исправления ошибок

- **[client]** Исправлена проблема, при которой использование поля chinaRegion в форме фильтрации не позволяет правильно отфильтровать значения. ([#5390](https://github.com/nocobase/nocobase/pull/5390)) by @zhangzhonghe

- **[Действие: Импорт записей]** исправлена ошибка импорта с файлом WPS ([#5397](https://github.com/nocobase/nocobase/pull/5397)) by @chareice

## [v1.3.30-beta](https://github.com/nocobase/nocobase/compare/v1.3.29-beta...v1.3.30-beta) - 2024-10-11

### 🐛 Исправления ошибок

- **[client]**
  - Исправлена ошибка отображения, возникающая при показе полей связи коллекции файлов на мобильных устройствах. ([#5387](https://github.com/nocobase/nocobase/pull/5387)) by @zhangzhonghe

  - Исправлена проблема, при которой меню "Создать блок" не загружает дополнительные коллекции данных. ([#5388](https://github.com/nocobase/nocobase/pull/5388)) by @zhangzhonghe

- **[Рабочий процесс: Пользовательское событие действия]**
  - Исправлена проблема, при которой пользовательское событие рабочего процесса не перенаправляло после успешной отправки. by @katherinehhh

  - Исправлена проблема, при которой пользовательское событие рабочего процесса не перенаправляло после успешной отправки. by @katherinehhh

## [v1.3.29-beta](https://github.com/nocobase/nocobase/compare/v1.3.28-beta...v1.3.29-beta) - 2024-10-10

### 🚀 Улучшения

- **[client]** Переменные даты также не запрещены в форме создания. ([#5376](https://github.com/nocobase/nocobase/pull/5376)) by @zhangzhonghe

### 🐛 Исправления ошибок

- **[Рабочий процесс: Узел SQL]** исправлена ошибка, возникающая при отсутствии результата при вызове хранимой процедуры в SQL-инструкции ([#5385](https://github.com/nocobase/nocobase/pull/5385)) by @mytharcher

- **[Workflow]** исправлена проблема, при которой триггер расписания на основе поля даты вызывал сбой приложения, также добавлена поддержка других источников данных ([#5364](https://github.com/nocobase/nocobase/pull/5364)) by @mytharcher

## [v1.3.28-beta](https://github.com/nocobase/nocobase/compare/v1.3.27-beta...v1.3.28-beta) - 2024-10-09

### 🚀 Улучшения

- **[client]** Сохранять CDN-ссылки как локальные ресурсы, чтобы предотвратить запрос внешних ресурсов при развертывании в интрасети. ([#5375](https://github.com/nocobase/nocobase/pull/5375)) by @zhangzhonghe

### 🐛 Исправления ошибок

- **[client]**
  - Исправлена проблема, при которой всплывающие окна, открытые на странице конфигурации "Пользователи и разрешения", перекрываются другими всплывающими окнами. ([#5373](https://github.com/nocobase/nocobase/pull/5373)) by @zhangzhonghe

  - Исправлена проблема, при которой после удаления вкладки на подстранице изменения не вступают в силу после повторного открытия. ([#5362](https://github.com/nocobase/nocobase/pull/5362)) by @zhangzhonghe

  - Исправлена проблема, при которой поля ассоциации унаследованных коллекций не могут корректно использовать переменные. ([#5346](https://github.com/nocobase/nocobase/pull/5346)) by @zhangzhonghe

  - Исправлена проблема взаимного влияния полей текущей и ассоциированной коллекции в конфигурации. ([#5343](https://github.com/nocobase/nocobase/pull/5343)) by @katherinehhh

- **[Действие: Импорт записей]** исправлена проблема с некорректными результатами при импорте больших дат ([#5356](https://github.com/nocobase/nocobase/pull/5356)) by @chareice

- **[Workflow]** исправлена проблема переключения компонента поля ассоциации в назначенных полях, вызывавшая сбой страницы при создании/обновлении узла ([#5366](https://github.com/nocobase/nocobase/pull/5366)) by @mytharcher

- **[Блок: Gantt]** Исправлена проблема, при которой открытие всплывающего окна в блоке Ганта и его последующее закрытие приводит к закрытию подстраницы.([#5370](https://github.com/nocobase/nocobase/pull/5370)) by @zhangzhonghe

## [v1.3.27-beta](https://github.com/nocobase/nocobase/compare/v1.3.26-beta...v1.3.27-beta) - 2024-09-30

### 🐛 Исправления ошибок

- **[client]** Исправлена переменная "Выбранные записи таблицы". ([#5337](https://github.com/nocobase/nocobase/pull/5337)) by @zhangzhonghe

- **[Рабочий процесс: Пользовательское событие действия]** исправлена проблема, при которой пользовательское событие не срабатывает в блоке ассоциации by @mytharcher

## [v1.3.26-beta](https://github.com/nocobase/nocobase/compare/v1.3.25-beta...v1.3.26-beta) - 2024-09-29

### 🚀 Улучшения

- **[client]** Скрыть полосы прокрутки на мобильных устройствах([#5339](https://github.com/nocobase/nocobase/pull/5339)) by @zhangzhonghe

### 🐛 Исправления ошибок

- **[client]**
  - Исправлена проблема, при которой невозможно открыть подстраницы во встроенных страницах. ([#5335](https://github.com/nocobase/nocobase/pull/5335)) by @zhangzhonghe

  - Исправлена проблема, при которой всплывающие окна перекрываются. ([#5338](https://github.com/nocobase/nocobase/pull/5338)) by @zhangzhonghe

  - Исправлена проблема с аномальным стилем при создании блоков с шаблонами данных на мобильных подстраницах. ([#5340](https://github.com/nocobase/nocobase/pull/5340)) by @zhangzhonghe

  - Исправлена проблема, при которой данные блока страницы не обновляются при закрытии подстраницы через меню страницы. ([#5331](https://github.com/nocobase/nocobase/pull/5331)) by @zhangzhonghe

- **[Действие: Экспорт записей]** исправлена проблема с форматом экспорта для полей десятичного типа ([#5316](https://github.com/nocobase/nocobase/pull/5316)) by @chareice

- **[Блок: Kanban]** Исправлена проблема, при которой всплывающее окно не открывалось после нажатия на карточку канбана во встроенной странице. ([#5326](https://github.com/nocobase/nocobase/pull/5326)) by @zhangzhonghe

## [v1.3.25-beta](https://github.com/nocobase/nocobase/compare/v1.3.24-beta...v1.3.25-beta) - 2024-09-25

### 🚀 Улучшения

- **[client]** обновлены и улучшены японские переводы в файлах ja_JP ([#5292](https://github.com/nocobase/nocobase/pull/5292)) by @Albert-mah

- **[Workflow]** добавлена обработка ошибок для незарегистрированных типов узлов ([#5319](https://github.com/nocobase/nocobase/pull/5319)) by @mytharcher

### 🐛 Исправления ошибок

- **[client]** Исправлена проблема, при которой не отображаются все поля в переменных. ([#5310](https://github.com/nocobase/nocobase/pull/5310)) by @zhangzhonghe

- **[Workflow]** исправлена проблема, при которой несуществующее поле в триггере коллекции вызывает ошибку ([#5318](https://github.com/nocobase/nocobase/pull/5318)) by @mytharcher

- **[Действие: Экспорт записей]** Исправлена проблема, при которой поля из связанных таблиц не обрабатываются интерфейсом полей. ([#5296](https://github.com/nocobase/nocobase/pull/5296)) by @gchust

## [v1.3.24-beta](https://github.com/nocobase/nocobase/compare/v1.3.23-beta...v1.3.24-beta) - 2024-09-23

### 🐛 Исправления ошибок

- **[client]**
  - в markdown возникает ошибка при использовании `#each` в handlebars ([#5305](https://github.com/nocobase/nocobase/pull/5305)) by @katherinehhh

  - Исправлена проблема, при которой коллекция из внешнего источника данных не поддерживает сортировку по столбцам таблицы. ([#5293](https://github.com/nocobase/nocobase/pull/5293)) by @katherinehhh

- **[Визуализация данных]** Исправлены проблемы со стилями блоков диаграмм при использовании тем в режиме темной темы. ([#5302](https://github.com/nocobase/nocobase/pull/5302)) by @2013xile

## [v1.3.23-beta](https://github.com/nocobase/nocobase/compare/v1.3.22-beta...v1.3.23-beta) - 2024-09-19

### 🚀 Улучшения

- **[Users]** Оптимизировать производительность отрисовки таблицы управления пользователями. ([#5276](https://github.com/nocobase/nocobase/pull/5276)) by @2013xile

- **[Departments]** Оптимизировать производительность отрисовки таблицы пользователей в управлении отделами. by @2013xile

### 🐛 Исправления ошибок

- **[client]**
  - Исправлена некорректная `rowKey` в таблице `Общие разрешения действий` на странице "Пользователи и разрешения". ([#5287](https://github.com/nocobase/nocobase/pull/5287)) by @gchust

  - Исправлена проблема, при которой установка переменной даты для поля даты в форме фильтрации приводит к некорректным результатам фильтрации. ([#5257](https://github.com/nocobase/nocobase/pull/5257)) by @zhangzhonghe

  - проблема с шириной столбца при scroll.y, когда в таблице нет данных ([#5256](https://github.com/nocobase/nocobase/pull/5256)) by @katherinehhh

  - Исправлена проблема появления пустых строк в начале блока таблицы.([#5284](https://github.com/nocobase/nocobase/pull/5284)) by @zhangzhonghe

- **[create-nocobase-app]** Исправлена проблема, при которой всплывающее окно для настройки правил последовательности не содержало кнопки отправки при добавлении нового поля последовательности. ([#5281](https://github.com/nocobase/nocobase/pull/5281)) by @zhangzhonghe

- **[database]** импорт с полем флажка (чекбокса) ([#4992](https://github.com/nocobase/nocobase/pull/4992)) by @chareice

- **[evaluators]** Исправлена ошибка, вызванная типом `Matrix` из библиотеки mathjs.([#5270](https://github.com/nocobase/nocobase/pull/5270)) by @mytharcher

- **[Calendar]** Невозможно выбрать опцию для удаления всплывающего окна расписания. ([#5274](https://github.com/nocobase/nocobase/pull/5274)) by @katherinehhh

- **[Действие: Экспорт записей]** Исправлена проблема отсутствия контекста запроса при генерации таблицы данных в действии экспорта. ([#5286](https://github.com/nocobase/nocobase/pull/5286)) by @gchust

## [v1.3.22-beta](https://github.com/nocobase/nocobase/compare/v1.3.21-beta...v1.3.22-beta) - 2024-09-12

### 🎉 Новые функции

- **[Действие: Пользовательский запрос]** Добавлена поддержка переменных API-токенов в конфигурации "Кнопка пользовательского запроса". ([#5263](https://github.com/nocobase/nocobase/pull/5263)) by @zhangzhonghe
Reference: [Custom request](https://docs.nocobase.com/handbook/action-custom-request)

### 🚀 Улучшения

- **[Поле коллекции: Markdown (Vditor)]** Добавлена поддержка Vidtor при выборе полей в интерфейсе для внешних источников данных. ([#5246](https://github.com/nocobase/nocobase/pull/5246)) by @katherinehhh

### 🐛 Исправления ошибок

- **[Calendar]** проблема, при которой блок календаря не отображается корректно, когда дата окончания переходит на следующий месяц ([#5239](https://github.com/nocobase/nocobase/pull/5239)) by @katherinehhh

## [v1.3.21-beta](https://github.com/nocobase/nocobase/compare/v1.3.20-beta...v1.3.21-beta) - 2024-09-10

### 🐛 Исправления ошибок

- **[client]** Исправлена ошибка при использовании правил связывания (NocoBase установлен через create-nocobase-app). ([#5249](https://github.com/nocobase/nocobase/pull/5249)) by @zhangzhonghe

## [v1.3.20-beta](https://github.com/nocobase/nocobase/compare/v1.3.19-beta...v1.3.20-beta) - 2024-09-10

### 🚀 Улучшения

- **[client]** Добавлена поддержка отображения полей ассоциации более глубокого уровня в блоках данных. ([#5243](https://github.com/nocobase/nocobase/pull/5243)) by @zhangzhonghe

### 🐛 Исправления ошибок

- **[client]**
  - Изменения в меню не применяются в реальном времени. ([#5207](https://github.com/nocobase/nocobase/pull/5207)) by @katherinehhh

  - Добавлена поддержка предварительной загрузки полей ассоциации в шаблонах Handlebars.([#5236](https://github.com/nocobase/nocobase/pull/5236)) by @katherinehhh

- **[Визуализация данных]** Исправлена проблема с некорректным контекстом источника данных при наличии нескольких источников данных. ([#5237](https://github.com/nocobase/nocobase/pull/5237)) by @2013xile

## [v1.3.19-beta](https://github.com/nocobase/nocobase/compare/v1.3.18-beta...v1.3.19-beta) - 2024-09-08

### 🐛 Исправления ошибок

- **[client]** Исправлена проблема с аномалиями URL, вызванными использованием всплывающих окон вместе с кнопками ссылок. ([#5219](https://github.com/nocobase/nocobase/pull/5219)) by @zhangzhonghe

## [v1.3.18-beta](https://github.com/nocobase/nocobase/compare/v1.3.17-beta...v1.3.18-beta) - 2024-09-08

### 🐛 Исправления ошибок

- **[Поле коллекции: Многие ко многим (массив)]** Исправьте ошибку при удалении коллекции, содержащей массивные поля m2m. ([#5231](https://github.com/nocobase/nocobase/pull/5231)) by @2013xile

## [v1.3.17-beta](https://github.com/nocobase/nocobase/compare/v1.3.16-beta...v1.3.17-beta) - 2024-09-07

### 🎉 Новые функции

- **[client]** Поддержка настройки правил связывания в подформах и вложенных формах. ([#5159](https://github.com/nocobase/nocobase/pull/5159)) by @zhangzhonghe

### 🚀 Улучшения

- **[client]**
  - время по умолчанию для отображения — 00:00:00 ([#5226](https://github.com/nocobase/nocobase/pull/5226)) by @chenos

  - плагины также могут быть включены, даже если версия зависимости плагина не совпадает ([#5225](https://github.com/nocobase/nocobase/pull/5225)) by @chenos

- **[Server]** предоставлять более удобные для пользователя сообщения об ошибках на уровне приложения ([#5220](https://github.com/nocobase/nocobase/pull/5220)) by @chenos

### 🐛 Исправления ошибок

- **[client]** Исправить ошибку «Maximum call stack size exceeded», возникающую в блоке деталей. ([#5228](https://github.com/nocobase/nocobase/pull/5228)) by @zhangzhonghe

- **[Поле коллекции: Многие ко многим (массив)]** Исправлена ошибка, при которой поле типа `uid` устанавливалось в качестве целевого ключа для поля «многие ко многим» (массив). ([#5229](https://github.com/nocobase/nocobase/pull/5229)) by @2013xile

- **[Схема интерфейса: хранение]** Исправлена проблема, при которой роли участников при нажатии на кнопку выдавали ошибку отсутствия прав доступа. ([#5206](https://github.com/nocobase/nocobase/pull/5206)) by @zhangzhonghe

- **[Workflow]** Исправлена проблема, при которой в столбце типа триггера отображался неверный текст после создания нового рабочего процесса. ([#5222](https://github.com/nocobase/nocobase/pull/5222)) by @mytharcher

- **[Users]** Удалена проверка формата телефона при редактировании телефонов пользователей в управлении пользователями. ([#5221](https://github.com/nocobase/nocobase/pull/5221)) by @2013xile

## [v1.3.16-beta](https://github.com/nocobase/nocobase/compare/v1.3.15-beta...v1.3.16-beta) - 2024-09-06

### 🚀 Улучшения

- **[client]**
  - Добавлен заполнитель, когда у пользователя есть права на настройку интерфейса, но нет прав на просмотр коллекции. ([#5208](https://github.com/nocobase/nocobase/pull/5208)) by @katherinehhh

  - Отображать заголовок системы, когда логотип отсутствует. ([#5175](https://github.com/nocobase/nocobase/pull/5175)) by @maoyutofu

- **[Authentication]** поддержка переноса строки в заголовке системы ([#5211](https://github.com/nocobase/nocobase/pull/5211)) by @chenos

- **[Рабочий процесс: узел SQL]** Изменить структуру данных результата узла SQL так, чтобы она содержала только данные. ([#5189](https://github.com/nocobase/nocobase/pull/5189)) by @mytharcher
Ссылка: [SQL-операция] (https://docs.nocobase.com/handbook/workflow/nodes/sql)
- **[Управление доступом]** Сделать панель вкладки «Права» на странице конфигурации «Пользователи и права» расширяемой. ([#5216](https://github.com/nocobase/nocobase/pull/5216)) by @zhangzhonghe
Ссылка: [Руководство по разработке](https://docs.nocobase.com/handbook/acl#development-guide)
- **[Действие: Массовое редактирование]** Массовое обновление и массовое редактирование, изменить «Все» на «Вся коллекция». ([#5200](https://github.com/nocobase/nocobase/pull/5200)) by @katherinehhh

### 🐛 Исправления ошибок

- **[client]**
  - Ошибка отображения компонента при переключении типов назначения в правилах связывания. ([#5180](https://github.com/nocobase/nocobase/pull/5180)) by @katherinehhh

  - Исправлена проблема, при которой использование переменных в области данных вызывало ошибку. ([#5195](https://github.com/nocobase/nocobase/pull/5195)) by @zhangzhonghe

  - Проблема с пользовательским запросом refreshDataBlockRequest ([#5188](https://github.com/nocobase/nocobase/pull/5188)) by @katherinehhh

- **[Визуализация данных]** Исправлена проблема получения неверного значения при агрегации полей выбора. ([#5214](https://github.com/nocobase/nocobase/pull/5214)) by @2013xile

- **[Менеджер источников данных]** Исправлен неверный `rowKey` таблицы источников данных на странице «Пользователи и права». ([#5215](https://github.com/nocobase/nocobase/pull/5215)) by @gchust

- **[Рабочий процесс: узел HTTP-запроса]** Исправлена ошибка, возникающая при использовании нестроковой переменной в параметрах запроса. ([#5204](https://github.com/nocobase/nocobase/pull/5204)) by @mytharcher

- **[Поле коллекции: Формула]** исправить тест службы для поля формулы ([#5197](https://github.com/nocobase/nocobase/pull/5197)) by @katherinehhh

- **[Резервное копирование и восстановление приложения (устарело)]** исправить ошибки в тестовых случаях ([#5201](https://github.com/nocobase/nocobase/pull/5201)) by @chenos

- **[Data source: REST API]**
  - имя коллекции должно быть отключено в коллекции rest-api by @katherinehhh

  - Улучшение локализации REST API by @katherinehhh

## [v1.3.15-beta](https://github.com/nocobase/nocobase/compare/v1.3.14-beta...v1.3.15-beta) - 2024-09-04

### 🐛 Исправления ошибок

- **[Workflow]** Исправлена проблема с отсутствующими полями в переменных рабочего процесса. ([#5187](https://github.com/nocobase/nocobase/pull/5187)) by @mytharcher

- **[Поле коллекции: Markdown (Vditor)]** проблема с markdown (Vditor) ([#5176](https://github.com/nocobase/nocobase/pull/5176)) by @katherinehhh

## [v1.3.14-beta](https://github.com/nocobase/nocobase/compare/v1.3.13-beta...v1.3.14-beta) - 2024-09-03

### 🎉 Новые функции

- **[client]** Add support for many-to-many association fields. ([#5178](https://github.com/nocobase/nocobase/pull/5178)) by @zhangzhonghe

### 🚀 Улучшения

- **[Действие: Пользовательский запрос]** удалить правило связывания для пользовательского запроса в форме создания ([#5179](https://github.com/nocobase/nocobase/pull/5179)) by @katherinehhh

### 🐛 Исправления ошибок

- **[Поле коллекции: Формула]** адаптация поля формулы для поля времени ([#5168](https://github.com/nocobase/nocobase/pull/5168)) by @katherinehhh

## [v1.3.13-beta](https://github.com/nocobase/nocobase/compare/v1.3.12-beta...v1.3.13-beta) - 2024-09-03

### 🐛 Исправления ошибок

- **[Действие: Экспорт записей]** Исправлен неправильный экспорт реляционных данных ([#5170](https://github.com/nocobase/nocobase/pull/5170)) by @chareice

## [v1.3.12-beta](https://github.com/nocobase/nocobase/compare/v1.3.11-beta...v1.3.12-beta) - 2024-09-01

### Объединено

- fix(mobile): fix permission [`#5163`](https://github.com/nocobase/nocobase/pull/5163)

### Коммиты

- действие(версии): 😊 публикация v1.3.12-beta [`774c296`](https://github.com/nocobase/nocobase/commit/774c2961d47aa17d1a9da7a595bb070f34aee11b)
- действие: обновить список изменений [`7f9a116`](https://github.com/nocobase/nocobase/commit/7f9a11698f3126257529ce4a91670239900f2ec3)
- действие: обновить e2e тесты[`49db3e4`](https://github.com/nocobase/nocobase/commit/49db3e490821cd59aaba2f58ed2bb78051a86ad9)

## [v1.3.11-beta](https://github.com/nocobase/nocobase/compare/v1.3.10-beta...v1.3.11-beta) - 2024-08-31

### Коммиты

- действие(версии): 😊 публикация v1.3.11-beta [`517e199`](https://github.com/nocobase/nocobase/commit/517e199ed7a8e7dc81a06c50389ef41b6891b133)
- действие: обновить список изменений [`373f517`](https://github.com/nocobase/nocobase/commit/373f51773b772886cc8db3cb50184562113c62eb)

## [v1.3.10-beta](https://github.com/nocobase/nocobase/compare/v1.3.9-beta...v1.3.10-beta) - 2024-08-31

### Объединено

- исправление: проблема с областью данных выбранной связи в подтаблице [`#5160`](https://github.com/nocobase/nocobase/pull/5160)
- исправление: проблема в селекторе данных — в других блоках должен отображаться Markdown, а не «Добавить текст» [`#5161`](https://github.com/nocobase/nocobase/pull/5161)
- исправление(data-vi): проблема с разбором переменных в блоке фильтрации [`#5157`](https://github.com/nocobase/nocobase/pull/5157)
- исправление(data-vi): преобразование значений десятичных полей из типа строка в число [`#5155`](https://github.com/nocobase/nocobase/pull/5155)

### Коммиты

- действие(версии): 😊 публикация v1.3.10-beta [`5afac9c`](https://github.com/nocobase/nocobase/commit/5afac9cf82c78db4a7ee8ddb01a60597939ac82d)
- действие: обновить список изменений [`6fceac1`](https://github.com/nocobase/nocobase/commit/6fceac15827a10b6fba65e98314c37f3f9e697ba)
- действие: обновить комментарий [`6e45780`](https://github.com/nocobase/nocobase/commit/6e4578056556c1c60ac721ff990a81ed37339074)

## [v1.3.9-beta](https://github.com/nocobase/nocobase/compare/v1.3.8-beta...v1.3.9-beta) - 2024-08-29

### Объединено

- исправление(мобильная версия): не должно быть принудительного перенаправления на мобильную страницу [`#5152`](https://github.com/nocobase/nocobase/pull/5152)
- chore: support year data type in mysql [`#5123`](https://github.com/nocobase/nocobase/pull/5123)

### Коммиты

- действие(версии): 😊 публикация v1.3.9-beta [`bf5011f`](https://github.com/nocobase/nocobase/commit/bf5011f75a7a9b26db7fef7aa4be28d7e4e077b4)
- действие: обновить список изменений [`b2fc646`](https://github.com/nocobase/nocobase/commit/b2fc646e5aa64d2ade03ce6fca78753cfddc26ec)

## [v1.3.8-beta](https://github.com/nocobase/nocobase/compare/v1.3.7-beta...v1.3.8-beta) - 2024-08-29

### Коммиты

- действие(версии): 😊 публикация v1.3.8-beta [`39d021a`](https://github.com/nocobase/nocobase/commit/39d021a9aa29bef9cf15d4af546060fc4b1dbd10)
- действие: обновить список изменений [`9f66c14`](https://github.com/nocobase/nocobase/commit/9f66c14968639d90b399d087eefac7a0c4ea4383)

## [v1.3.7-beta](https://github.com/nocobase/nocobase/compare/v1.3.6-beta...v1.3.7-beta) - 2024-08-29

### Объединено

- исправление: добавлена поддержка Handlebars для текста [`#5150`](https://github.com/nocobase/nocobase/pull/5150)

### Коммиты

- действие(версии): 😊 публикация v1.3.7-beta [`f429d13`](https://github.com/nocobase/nocobase/commit/f429d1326433e7f290e552ca91548d21b5af92e4)
- действие: обновить список изменений [`b41e477`](https://github.com/nocobase/nocobase/commit/b41e47757ec0d1f7b0af917e25ff5b4a436042aa)

## [v1.3.6-beta](https://github.com/nocobase/nocobase/compare/v1.3.5-beta...v1.3.6-beta) - 2024-08-29

### Объединено

- исправление: связь с областью данных выбора ассоциации должна поддерживать форму редактирования [`#5149`](https://github.com/nocobase/nocobase/pull/5149)

### Коммиты

- действие(версии): 😊 публикация v1.3.6-beta [`39c7ce4`](https://github.com/nocobase/nocobase/commit/39c7ce4741801819b98970b95c1663915a8c3bff)
- действие: обновить список изменений [`cfbc2a6`](https://github.com/nocobase/nocobase/commit/cfbc2a6c15a5dfb8c0684051df1cf01499ff30ac)

## [v1.3.5-beta](https://github.com/nocobase/nocobase/compare/v1.3.4-beta...v1.3.5-beta) - 2024-08-28

### Объединено

- исправление: связь с областью данных выбора ассоциации должна поддерживаться во вложенной форме [`#5146`](https://github.com/nocobase/nocobase/pull/5146)
- исправление(мобильная версия): решена проблема с перенаправлением [`#5145`](https://github.com/nocobase/nocobase/pull/5145)
- функция(плагин-рабочий процесс): разрешить удаление выполнения в списке [`#5135`](https://github.com/nocobase/nocobase/pull/5135)
- исправление(значение по умолчанию): игнорировать значения переменных, которые не соответствуют текущему полю [`#5122`](https://github.com/nocobase/nocobase/pull/5122)
- действие(зависимости-для-разработки): обновление eslint-plugin-jest-dom с версии 5.1.0 до 5.4.0 [`#5138`](https://github.com/nocobase/nocobase/pull/5138)
- действие(зависимости): обновление @ant-design/pro-layout с версии 7.17.16 до 7.19.12 [`#5137`](https://github.com/nocobase/nocobase/pull/5137)
- исправление(шаблон): исправлена ошибка при отправке блока формы [`#5133`](https://github.com/nocobase/nocobase/pull/5133)
- функция: добавлена поддержка открытия через URL [`#5098`](https://github.com/nocobase/nocobase/pull/5098)
- исправление(релиз): ошибка дешифровки токена иногда происходила [`#5143`](https://github.com/nocobase/nocobase/pull/5143)

### Коммиты

- действие(версии): 😊 публикация v1.3.5-beta [`35e8f89`](https://github.com/nocobase/nocobase/commit/35e8f89c75800a612db27485c96196555f922273)
- Откатить "действие(зависимости): обновление @ant-design/pro-layout с версии 7.17.16 до 7.19.12" (#5137)" [`3f461ad`](https://github.com/nocobase/nocobase/commit/3f461ad8f079b4c2cf5975c1e26271f55021e08a)
- исправление(релиз): CI образа Pro [`e45d450`](https://github.com/nocobase/nocobase/commit/e45d45015792138e7378741bdaf488de714b365d)

## [v1.3.4-beta](https://github.com/nocobase/nocobase/compare/v1.3.3-beta...v1.3.4-beta) - 2024-08-27

### Объединено

- рефакторинг: установить remainsTheSame как значение по умолчанию для редактирования поля в действии массового редактирования [`#5124`](https://github.com/nocobase/nocobase/pull/5124)

### Коммиты

- действие(версии): 😊 публикация v1.3.4-beta [`a011748`](https://github.com/nocobase/nocobase/commit/a0117480e037e48a23f59921110003047a1a174b)
- действие: обновить список изменений [`3403e8d`](https://github.com/nocobase/nocobase/commit/3403e8d76684950d6962a6110a4440eb95856a35)

## [v1.3.3-beta](https://github.com/nocobase/nocobase/compare/v1.3.2-beta...v1.3.3-beta) - 2024-08-27

### Объединено

- исправление: использовать встроенный файл логотипа [`#5032`](https://github.com/nocobase/nocobase/pull/5032)
- действие: оптимизировать CI сборки образа Pro [`#5140`](https://github.com/nocobase/nocobase/pull/5140)

### Коммиты

- действие(версии): 😊 публикация v1.3.3-beta [`9dffefb`](https://github.com/nocobase/nocobase/commit/9dffefb90a662789f9c4e12d2a088a73363c89db)
- действие: обновить список изменений [`7c28f4d`](https://github.com/nocobase/nocobase/commit/7c28f4d06690d6b36701f773a933287c0a395a6d)
- исправление(релиз): удалить continue-on-error для шага сборки [`5a41ab0`](https://github.com/nocobase/nocobase/commit/5a41ab063c8eea8bb0240cc6baf5d485b4fe9f84)

## [v1.3.2-beta](https://github.com/nocobase/nocobase/compare/v1.3.1-beta...v1.3.2-beta) - 2024-08-26

### Коммиты

- действие(версии): 😊 публикация v1.3.2-beta [`dcadaa6`](https://github.com/nocobase/nocobase/commit/dcadaa666583b3fdc8e7caa6befd37ad442f56e6)
- действие(релиз): оптимизировать рабочий процесс релиза [`6987d46`](https://github.com/nocobase/nocobase/commit/6987d46b3eb5d928f7fc3e1d3226578913b68820)
- действие: обновить список изменений [`388b0e2`](https://github.com/nocobase/nocobase/commit/388b0e2a8869862c86cc365ae5f347b74a372e7e)

## [v1.3.1-beta](https://github.com/nocobase/nocobase/compare/v1.3.0-beta...v1.3.1-beta) - 2024-08-26

### Объединено

- функция(публикация): публикация репозиториев Pro [`#5129`](https://github.com/nocobase/nocobase/pull/5129)
- исправление(дерево): отсутствующая схема коллекции [`#5131`](https://github.com/nocobase/nocobase/pull/5131)
- исправление(cli): добавлена поддержка обновления до следующей версии [`#5130`](https://github.com/nocobase/nocobase/pull/5130)
- исправление(клиент): исправлены имена полей для входных переменных [`#5128`](https://github.com/nocobase/nocobase/pull/5128)
- исправление: невозможно получить доступ к 'ActionPage' до инициализации [`#5125`](https://github.com/nocobase/nocobase/pull/5125)

### Комиты

- действие(версии): 😊 публикация v1.3.1-beta [`4aff92a`](https://github.com/nocobase/nocobase/commit/4aff92ad3bf338a8f798b3cc7460b32316f83d65)
- действие: обновить список изменений [`4515f02`](https://github.com/nocobase/nocobase/commit/4515f0220f2b5854d5b3abbbdab8d116ba818669)
- исправление: отсутствующая схема [`c4b8195`](https://github.com/nocobase/nocobase/commit/c4b819528a15f3f7294ce4027ea64342742881f3)

## [v1.3.0-beta](https://github.com/nocobase/nocobase/compare/v1.2.39-alpha...v1.3.0-beta) - 2024-08-25

### Объединено

- функция(плагин-рабочий-процесс-почта): добавлены переменные [`#5120`](https://github.com/nocobase/nocobase/pull/5120)
- функция(клиент): добавлен API постоянных свойств для входных переменных [`#5116`](https://github.com/nocobase/nocobase/pull/5116)
- исправление(data-vi): добавлены настройки размера для круговой диаграммы, гистограммы и dualAxes (двойных осей) [`#5113`](https://github.com/nocobase/nocobase/pull/5113)
- исправление(мобильная версия): предотвращение сбоев [`#5109`](https://github.com/nocobase/nocobase/pull/5109)
- исправление(переменная): устранена ошибка при отправке блока шаблона [`#5103`](https://github.com/nocobase/nocobase/pull/5103)
- функция: добавлена возможность фильтровать дочерние узлы в блоках древовидных таблиц [`#5096`](https://github.com/nocobase/nocobase/pull/5096)
- функция: добавлена возможность установки distinct для мер запроса [`#5091`](https://github.com/nocobase/nocobase/pull/5091)
- функция(канбан): добавлена поддержка открытия через URL [`#5083`](https://github.com/nocobase/nocobase/pull/5083)
- функция: создание записи файла по пути [`#5088`](https://github.com/nocobase/nocobase/pull/5088)
- рефакторинг: обновлен китайский перевод для "Стиль" [`#5078`](https://github.com/nocobase/nocobase/pull/5078)
- исправление: устранена проблема с переключением вкладок [`#5081`](https://github.com/nocobase/nocobase/pull/5081)
- исправление(канбан): исправлен componentType на 'Kanban' [`#5080`](https://github.com/nocobase/nocobase/pull/5080)
- рефакторинг: движок рендеринга markdown [`#5079`](https://github.com/nocobase/nocobase/pull/5079)
- исправление(embed): устранена проблема, при которой переключение вкладок не работает [`#5074`](https://github.com/nocobase/nocobase/pull/5074)
- рефакторинг: поле даты и времени теперь поддерживает часовой пояс, defaultToCurrentTime и onUpdateToCurrentTime [`#5012`](https://github.com/nocobase/nocobase/pull/5012)
- функция(data-vi): добавлена возможность установки ссылки для статистической диаграммы [`#5073`](https://github.com/nocobase/nocobase/pull/5073)
- рефакторинг(plugin-workflow): добавлена группа узлов расчета [`#5035`](https://github.com/nocobase/nocobase/pull/5035)
- исправление(мобильная версия): исправлена настройка "Edit link" (Редактировать ссылку) [`#5068`](https://github.com/nocobase/nocobase/pull/5068)
- исправление: рендеринг HTML в блоке markdown [`#5064`](https://github.com/nocobase/nocobase/pull/5064)
- исправление: блоки gridCard не могут перелистывать страницы при использовании API источников данных [`#5066`](https://github.com/nocobase/nocobase/pull/5066)
- исправление(шаблон): обновление родительских данных при нажатии кнопки отправки в блоке связанного шаблона [`#5057`](https://github.com/nocobase/nocobase/pull/5057)
- исправление: рендеринг HTML в блоке markdown [`#5062`](https://github.com/nocobase/nocobase/pull/5062)
- исправление(m2m-array): проверка коллизии именования [`#5059`](https://github.com/nocobase/nocobase/pull/5059)
- стиль: улучшение стиля панели настройки полей столбца таблицы [`#5055`](https://github.com/nocobase/nocobase/pull/5055)
- исправление(наследование): исправлена кнопка "Добавить новое" для наследуемых коллекций [`#5049`](https://github.com/nocobase/nocobase/pull/5049)
- функция(клиент): добавлены параметры разбора для входных переменных [`#5043`](https://github.com/nocobase/nocobase/pull/5043)
- исправление(iframe): исправлена работа всплывающего окна с блоком Iframe [`#5039`](https://github.com/nocobase/nocobase/pull/5039)
- исправление(plugin-workflow-aggregate): ограничение агрегации только для работы с источником данных базы данных (db) [`#5033`](https://github.com/nocobase/nocobase/pull/5033)
- исправление: исправлена ошибка с расширением кэша коллекции [`#5031`](https://github.com/nocobase/nocobase/pull/5031)
- функция: поле шифрования [`#4975`](https://github.com/nocobase/nocobase/pull/4975)
- исправление: мобильная авторизация [`#5015`](https://github.com/nocobase/nocobase/pull/5015)
- исправление(клиент): отображение оригинального компонента ввода поля после очистки переменной [`#5028`](https://github.com/nocobase/nocobase/pull/5028)
- функция: поддержка добавления блока настроек в мобильной версии [`#5025`](https://github.com/nocobase/nocobase/pull/5025)
- стиль: улучшение стиля действий [`#5018`](https://github.com/nocobase/nocobase/pull/5018)
- исправление: ошибка [`#5009`](https://github.com/nocobase/nocobase/pull/5009)
- функция: адаптация десктопных блоков для мобильных устройств [`#4945`](https://github.com/nocobase/nocobase/pull/4945)
- исправление(CI): продолжить при ошибке [`#4999`](https://github.com/nocobase/nocobase/pull/4999)
- исправление: блок markdown должен поддерживать синтаксис markdown [`#5003`](https://github.com/nocobase/nocobase/pull/5003)
- исправление: отключение действия для сохранения цвета шрифта при наведении курсора мыши (#4988) [`#5000`](https://github.com/nocobase/nocobase/pull/5000)
- исправление: отключение действия для сохранения цвета шрифта при наведении курсора мыши (#4988) [`#4998`](https://github.com/nocobase/nocobase/pull/4998)
- рефакторинг: поддержка динамического компонента поля [`#4932`](https://github.com/nocobase/nocobase/pull/4932)
- функция: ошибка мобильного модального окна [`#4976`](https://github.com/nocobase/nocobase/pull/4976)
- исправление(T-4927): ошибка производительности таблицы [`#4978`](https://github.com/nocobase/nocobase/pull/4978)
- рефакторинг: блоки и действия для ПК совместимы с мобильными устройствами [`#4935`](https://github.com/nocobase/nocobase/pull/4935)
- функция: markdown и iframe html поддерживают Handlebars в качестве движка рендеринга[`#4946`](https://github.com/nocobase/nocobase/pull/4946)
- исправление(data-vi): проблема, при которой настройка фиксированной высоты не имеет эффекта [`#4960`](https://github.com/nocobase/nocobase/pull/4960)
- исправление(клиент): исправлен тип значения входной переменной [`#4955`](https://github.com/nocobase/nocobase/pull/4955)
- исправление: удаление токена темы [`#4947`](https://github.com/nocobase/nocobase/pull/4947)
- исправление: игнорировать Pro [`#4928`](https://github.com/nocobase/nocobase/pull/4928)
- исправление: предотвращение изменения URL при клике на ненастроенные поля ассоциации[`#4919`](https://github.com/nocobase/nocobase/pull/4919)
- функция(data-vi): оптимизация настроек стиля для блоков диаграмм [`#4940`](https://github.com/nocobase/nocobase/pull/4940)
- действие: пропустить супервизор приложения [`#4937`](https://github.com/nocobase/nocobase/pull/4937)
- исправление: ошибка стиля в мобильной версии[`#4934`](https://github.com/nocobase/nocobase/pull/4934)
- исправление: CI сборки образа [`#4929`](https://github.com/nocobase/nocobase/pull/4929)
- функция: плагин мобильной версии v2 [`#4777`](https://github.com/nocobase/nocobase/pull/4777)
- рефакторинг(тест): изменение аргументов конструктора мокового кластера [`#4917`](https://github.com/nocobase/nocobase/pull/4917)
- исправление: исправлена проблема с правилами связывания пользовательских запросов [`#4913`](https://github.com/nocobase/nocobase/pull/4913)
- рефакторинг(сервер): упрощение API для публикации синхронизированных сообщений [`#4912`](https://github.com/nocobase/nocobase/pull/4912)
- действие: API источника данных [`#4588`](https://github.com/nocobase/nocobase/pull/4588)
- функция(сервер): добавлен режим кластера для запуска приложения [`#4895`](https://github.com/nocobase/nocobase/pull/4895)
- Откат "исправление(клиент): имя подприложения (#4886)" [`#4887`](https://github.com/nocobase/nocobase/pull/4887)
- исправление(клиент): имя подприложения [`#4886`](https://github.com/nocobase/nocobase/pull/4886)
- рефакторинг: оптимизация рабочего процесса e2e тестирования [`#4883`](https://github.com/nocobase/nocobase/pull/4883)
- рефакторинг(клиент): добавлена возможность явного выбора нулевого значения во входной переменной [`#4869`](https://github.com/nocobase/nocobase/pull/4869)
- действие: CI для следующего релиза [`#4861`](https://github.com/nocobase/nocobase/pull/4861)
- тест: добавлен локатор для рабочего процесса утверждения, чтобы включить кнопку отзыва [`#4859`](https://github.com/nocobase/nocobase/pull/4859)
- рефакторинг(сервер): синхронизация менеджера и CI [`#4858`](https://github.com/nocobase/nocobase/pull/4858)
- исправление(таблица): исправлена проблема стилизации с фиксированными колонками [`#4857`](https://github.com/nocobase/nocobase/pull/4857)
- функция(база данных): новый тип поля «многие ко многим» (массив) [`#4708`](https://github.com/nocobase/nocobase/pull/4708)
- функция(сервер): добавлен sync-manager (менеджер синхронизации) [`#4780`](https://github.com/nocobase/nocobase/pull/4780)
- действие(роутер): отключена стратегия замены при закрытии всплывающих окон или подстраниц [`#4838`](https://github.com/nocobase/nocobase/pull/4838)
- исправление(менеджер плагинов): исправлена проблема с невозможностью прокрутки на странице управления плагинами [`#4837`](https://github.com/nocobase/nocobase/pull/4837)
- исправление: скорректирован отступ кнопки "Добавить блок" в сеточном макете [`#4820`](https://github.com/nocobase/nocobase/pull/4820)
- исправление: базовая ссылка (ref) [`#4829`](https://github.com/nocobase/nocobase/pull/4829)
- функция: открытие подстраниц внутри главной страницы [`#4797`](https://github.com/nocobase/nocobase/pull/4797)
- функция(клиент): добавлен параметр `disabled` в свойства SchemaSettingsItem [`#4817`](https://github.com/nocobase/nocobase/pull/4817)
- исправление(всплывающие окна): исправлено значение для filterByTk [`#4792`](https://github.com/nocobase/nocobase/pull/4792)
- рефакторинг: добавлен sourceId в URL всплывающего окна [`#4788`](https://github.com/nocobase/nocobase/pull/4788)
- Слияние ветки 'main' в 'next' [`#4791`](https://github.com/nocobase/nocobase/pull/4791)
- функция(клиент): добавлена поддержка стиля связывания в таблицах и формах [`#4467`](https://github.com/nocobase/nocobase/pull/4467)
- функция: добавлена возможность прямого открытия диалогового окна через URL и поддержка режима страницы[`#4706`](https://github.com/nocobase/nocobase/pull/4706)
- рефакторинг: переписан интерфейс сканера кода. [`#4677`](https://github.com/nocobase/nocobase/pull/4677)
- функция(plugin-workflow): добавлены параметры диапазона дат в системные переменные [`#4728`](https://github.com/nocobase/nocobase/pull/4728)

### Комиты

- Откат "рефакторинг: поле даты и времени поддерживает часовой пояс, defaultToCurrentTime и onUpdateToCurrentTime (#5012)" [`ded5f26`](https://github.com/nocobase/nocobase/commit/ded5f26c09afed11d27652933ac8550375b3a34d)
- исправление: удаление схемы [`f696c67`](https://github.com/nocobase/nocobase/commit/f696c67b5e5f47ce344e2691d970ec74f451d183)
- действие(версии): 😊 публикация v1.3.0-beta [`dea6a58`](https://github.com/nocobase/nocobase/commit/dea6a58878acaf9220f7cf13868adc8cdf38f780)

## [v1.2.39-alpha](https://github.com/nocobase/nocobase/compare/v1.2.38-alpha...v1.2.39-alpha) - 2024-08-25

### Объединено

- исправление: часовой пояс по умолчанию установлен на системный часовой пояс [`#5121`](https://github.com/nocobase/nocobase/pull/5121)
- исправление(plugin-workflow-parallel): исправлена пропущенная транзакция, вызывающая взаимоблокировку в MySQL [`#5118`](https://github.com/nocobase/nocobase/pull/5118)
- исправление: правила связывания действий не работают корректно в древовидной таблице [`#5107`](https://github.com/nocobase/nocobase/pull/5107)
- исправление(data-vi): добавлена возможность сопоставления целочисленного значения перечисления [`#5115`](https://github.com/nocobase/nocobase/pull/5115)
- исправление: тест markdown [`#5117`](https://github.com/nocobase/nocobase/pull/5117)
- действие(зависимости): обновление tsconfig-paths с версии 3.15.0 до 4.2.0 [`#5051`](https://github.com/nocobase/nocobase/pull/5051)
- исправление: сбой отображения демо markdown [`#5114`](https://github.com/nocobase/nocobase/pull/5114)
- исправление(фильтр): не должен фильтровать ноль [`#5106`](https://github.com/nocobase/nocobase/pull/5106)
- стиль: улучшение стиля панели действий блока фильтра формы [`#5108`](https://github.com/nocobase/nocobase/pull/5108)
- рефакторинг: описание для режима простой пагинации [`#5110`](https://github.com/nocobase/nocobase/pull/5110)

### Коммиты

- действие(версии): 😊 публикация v1.2.39-alpha [`9e30752`](https://github.com/nocobase/nocobase/commit/9e3075218ade26c156b583af8d7166fd630c4d17)
- действие: обновить список изменений [`2b34f3b`](https://github.com/nocobase/nocobase/commit/2b34f3b6bd09d9d8a83a23c6e701cee748460ad4)
- Обновить README.zh-CN.md [`75c7fd6`](https://github.com/nocobase/nocobase/commit/75c7fd67964d74d291c2f97efa0c458113b7870b)

## [v1.2.38-alpha](https://github.com/nocobase/nocobase/compare/v1.2.37-alpha...v1.2.38-alpha) - 2024-08-22

### Объединено

- исправление: проблема, при которой данные не могли быть отправлены после удаления строки с обязательным полем во вложенной форме [`#5101`](https://github.com/nocobase/nocobase/pull/5101)
- рефакторинг: коллекция поддерживает simplePaginate (простую пагинацию) [`#5099`](https://github.com/nocobase/nocobase/pull/5099)
- исправление: назначение поля кнопки только для обновления видимых полей [`#5104`](https://github.com/nocobase/nocobase/pull/5104)
- исправление(клиент): исправлено предварительное отображение загружаемого изображения [`#5102`](https://github.com/nocobase/nocobase/pull/5102)
- исправление: ошибка расчета индекса столбца в блоке таблицы [`#5100`](https://github.com/nocobase/nocobase/pull/5100)
- действие: оптимизировать перевод [`#5092`](https://github.com/nocobase/nocobase/pull/5092)

### Коммиты

- действие(версии): 😊 публикация v1.2.38-alpha [`ce19841`](https://github.com/nocobase/nocobase/commit/ce198410f9e49a842ca91bccf8100c2602f7acfe)
- действие: обновить список изменений [`8d29a6e`](https://github.com/nocobase/nocobase/commit/8d29a6ee81436301bb03bcf39ead38ba084477bb)

## [v1.2.37-alpha](https://github.com/nocobase/nocobase/compare/v1.2.36-alpha...v1.2.37-alpha) - 2024-08-21

### Объединено

- рефакторинг: добавлена поддержка простой пагинации (simple Paginate) [`#5093`](https://github.com/nocobase/nocobase/pull/5093)
- исправление: ошибка при изменении порядка правил связывания [`#5086`](https://github.com/nocobase/nocobase/pull/5086)

### Коммиты

- действие(версии): 😊 публикация v1.2.37-alpha [`5b65985`](https://github.com/nocobase/nocobase/commit/5b65985c1431febd1fde55954e4c490545f908eb)
- действие: обновить список изменений [`a1552b5`](https://github.com/nocobase/nocobase/commit/a1552b50c4782186a844cb24b168a5857fc7eaf7)

## [v1.2.36-alpha](https://github.com/nocobase/nocobase/compare/v1.2.35-alpha...v1.2.36-alpha) - 2024-08-19

### Объединено

- Добавить README на японском языке [`#4971`](https://github.com/nocobase/nocobase/pull/4971)
- исправление: версия mysql2 [`#5082`](https://github.com/nocobase/nocobase/pull/5082)
- исправление: сортировка данных блока таблицы (Table) [`#5071`](https://github.com/nocobase/nocobase/pull/5071)
- исправление: выбранные данные в подтаблице перезаписываются значениями по умолчанию [`#5075`](https://github.com/nocobase/nocobase/pull/5075)

### Коммиты

- действие(версии): 😊 публикация v1.2.36-alpha [`271a829`](https://github.com/nocobase/nocobase/commit/271a82944ea1fd88ff0f32ce1ff4084a614d693e)
- действие: обновить список изменений [`84ca0eb`](https://github.com/nocobase/nocobase/commit/84ca0eb29609d1575874e2392bbe319bad82bf7c)
- Обновить README.ja-JP.md [`d5b8f1f`](https://github.com/nocobase/nocobase/commit/d5b8f1fe22fdfa5dcae556c7b4b69c7fdeb3494f)

## [v1.2.35-alpha](https://github.com/nocobase/nocobase/compare/v1.2.34-alpha...v1.2.35-alpha) - 2024-08-16

### Объединено

- исправление: отображение статуса источника данных [`#5069`](https://github.com/nocobase/nocobase/pull/5069)
- действие: обновление версии mysql2 [`#5070`](https://github.com/nocobase/nocobase/pull/5070)
- исправление: улучшение стиля панели действий формы фильтрации [`#5054`](https://github.com/nocobase/nocobase/pull/5054)
- исправление: заключение имени таблицы в кавычки в интерфейсе запросов MySQL [`#5065`](https://github.com/nocobase/nocobase/pull/5065)
- исправление: коллекция с первичным ключом, отличным от ID, вызывает ошибку при использовании диаграммы Ганта (gantt) [`#5061`](https://github.com/nocobase/nocobase/pull/5061)
- исправление: увеличение лимита размера загружаемых файлов для поля markdown-vditor [`#5063`](https://github.com/nocobase/nocobase/pull/5063)
- исправление(data-vi): опечатка в зависимости [`#5060`](https://github.com/nocobase/nocobase/pull/5060)
- действие(зависимости): обновление @babel/plugin-transform-modules-amd с версии 7.22.5 до 7.24.7 [`#5052`](https://github.com/nocobase/nocobase/pull/5052)
- действие(зависимости): обновление xpipe с версии 1.0.5 до 1.0.7 [`#5050`](https://github.com/nocobase/nocobase/pull/5050)
- действие(зависимости): обновление tsup с версии 7.2.0 до 8.2.4 [`#5046`](https://github.com/nocobase/nocobase/pull/5046)
- исправление(наследование): исправлен заголовок для блока ассоциации подколлекции наследования [`#5048`](https://github.com/nocobase/nocobase/pull/5048)
- исправление: загрузка родительского поля в наследуемой коллекции [`#5044`](https://github.com/nocobase/nocobase/pull/5044)
- исправление: отключение кнопок редактирования и удаления для всех записей и собственной записи в конфигурации области данных [`#5041`](https://github.com/nocobase/nocobase/pull/5041)
- исправление(Свертывание): исправлена проблема с неэффективностью настроек области данных [`#4914`](https://github.com/nocobase/nocobase/pull/4914)
- исправление(Таблица): не должно возникать ошибки при открытии всплывающего окна по клику на многоуровневое поле [`#5038`](https://github.com/nocobase/nocobase/pull/5038)
- исправление(правила связывания): исправлена ошибка, возникающая, когда условие содержит поле ассоциации [`#5037`](https://github.com/nocobase/nocobase/pull/5037)
- исправление(клиент): отсутствующий параметр сортировки [`#5034`](https://github.com/nocobase/nocobase/pull/5034)
- исправление(база данных): пропуск таблицы, если она не существует [`#5023`](https://github.com/nocobase/nocobase/pull/5023)
- исправление(переменная): поле chinaRegions не должно быть подменю [`#5030`](https://github.com/nocobase/nocobase/pull/5030)
- стиль: кнопка быстрого добавления для поля ассоциации в форме, компактный стиль темы без адаптации [`#5024`](https://github.com/nocobase/nocobase/pull/5024)
- исправление: исправлены ошибки значений внешнего ключа [`#5027`](https://github.com/nocobase/nocobase/pull/5027)
- исправление: фильтрация полей ассоциации по типу поля источника в SQL-коллекции и коллекции представления [`#5014`](https://github.com/nocobase/nocobase/pull/5014)
- исправление: параметр allowMultiple не должен появляться на полях ассоциации, доступных только для чтения [`#5017`](https://github.com/nocobase/nocobase/pull/5017)

### Коммиты

- chore(versions): 😊 publish v1.2.35-alpha [`39bc571`](https://github.com/nocobase/nocobase/commit/39bc5717881454cb1bf210673418e1be49f45614)
- действие: обновить список изменений [`d37c71a`](https://github.com/nocobase/nocobase/commit/d37c71aaed459a1364a2b04bd478f529472a5ae0)
- Обновить LICENSE.txt [`28c2fff`](https://github.com/nocobase/nocobase/commit/28c2fff0e48ed135322839ae9f27d1740a351902)

## [v1.2.34-alpha](https://github.com/nocobase/nocobase/compare/v1.2.33-alpha...v1.2.34-alpha) - 2024-08-08

### Объединено

- исправление(plugin-workflow): исправлен ключ события в режиме расписания для поля даты[`#5010`](https://github.com/nocobase/nocobase/pull/5010)
- исправление: директория резервных файлов для подприложений [`#4985`](https://github.com/nocobase/nocobase/pull/4985)

### Коммиты

- действие(версии): 😊 публикация v1.2.34-alpha [`0fd0f94`](https://github.com/nocobase/nocobase/commit/0fd0f9406babc3f99570d369e55468d3502ea5f7)
- действие: обновить список изменений [`c25be38`](https://github.com/nocobase/nocobase/commit/c25be38e4573275c6078d3fcb72da8e62a986479)

## [v1.2.33-alpha](https://github.com/nocobase/nocobase/compare/v1.2.32-alpha...v1.2.33-alpha) - 2024-08-07

### Объединено

- функция: поддержка динамического компонента поля [`#5006`](https://github.com/nocobase/nocobase/pull/5006)
- исправление: правило валидации "обязательно" с обрезкой пробелов (trim) [`#5004`](https://github.com/nocobase/nocobase/pull/5004)
- исправление: проблема проверки прав ACL для действия "Удалить событие" [`#5002`](https://github.com/nocobase/nocobase/pull/5002)

### Коммиты

- действие(версии): 😊 публикация v1.2.33-alpha [`cfccf93`](https://github.com/nocobase/nocobase/commit/cfccf93f9c2f88dde2d00f55cc857fca7588a507)
- действие: обновить список изменений [`0bfcfad`](https://github.com/nocobase/nocobase/commit/0bfcfadc4d17f4746fa1f6f36779347e3fa92ffe)

## [v1.2.32-alpha](https://github.com/nocobase/nocobase/compare/v1.2.31-alpha...v1.2.32-alpha) - 2024-08-06

### Коммиты

- действие(версии): 😊 публикация v1.2.32-alpha [`e3d3de0`](https://github.com/nocobase/nocobase/commit/e3d3de0386cd490e00993b39f78bc9d254a94614)
- действие: обновить список изменений [`95b5d12`](https://github.com/nocobase/nocobase/commit/95b5d12a2ea189862b06facb1a22046faed51b38)

## [v1.2.31-alpha](https://github.com/nocobase/nocobase/compare/v1.2.30-alpha...v1.2.31-alpha) - 2024-08-06

### Коммиты

- действие(версии): 😊 публикация v1.2.31-alpha [`1a00e03`](https://github.com/nocobase/nocobase/commit/1a00e031e4f8291ec42e545820c5193d252f6a87)
- действие: обновить список изменений [`71b94b6`](https://github.com/nocobase/nocobase/commit/71b94b6bc130cc4756f84af37cbc69e0ffcad85f)

## [v1.2.30-alpha](https://github.com/nocobase/nocobase/compare/v1.2.29-alpha...v1.2.30-alpha) - 2024-08-06

### Объединено

- исправление: невозможно очистить поле региона Китая [`#4991`](https://github.com/nocobase/nocobase/pull/4991)
- исправление(T-4927): ошибка производительности таблицы [`#4978`](https://github.com/nocobase/nocobase/pull/4978)
- исправление: отключение действия для сохранения цвета шрифта при наведении курсора мыши [`#4988`](https://github.com/nocobase/nocobase/pull/4988)
- исправление: проблема с оценкой разрешений поля в ACLCollectionFieldProvider [`#4989`](https://github.com/nocobase/nocobase/pull/4989)
- исправление(plugin-workflow-manual): исправлено присвоение значения поля для всех кнопок действий ручного узла [`#4983`](https://github.com/nocobase/nocobase/pull/4983)
- исправление(plugin-workflow): исправлен триггер коллекции в асинхронном режиме после фиксации транзакции [`#4994`](https://github.com/nocobase/nocobase/pull/4994)

### Коммиты

- исправление: ручной релиз [`f8bc360`](https://github.com/nocobase/nocobase/commit/f8bc36066e32c713854c4a597cca6cdfed47049e)
- действие(версии): 😊 публикация v1.2.30-alpha [`e0b36fb`](https://github.com/nocobase/nocobase/commit/e0b36fbeeb0894e37c1b2e0a327ace4377167ef2)
- действие(версии): 😊 публикация v1.3.0-alpha [`ca87866`](https://github.com/nocobase/nocobase/commit/ca8786695936bed2cd4b670ed4a505fc250a282d)

## [v1.2.29-alpha](https://github.com/nocobase/nocobase/compare/v1.2.28-alpha...v1.2.29-alpha) - 2024-08-05

### Объединено

- действие: оптимизировать текст для режима загрузки данных [`#4918`](https://github.com/nocobase/nocobase/pull/4918)
- исправление: правило связывания действий [`#4980`](https://github.com/nocobase/nocobase/pull/4980)
- действие(экспорт): сообщение об ошибке, когда поле не найдено [`#4890`](https://github.com/nocobase/nocobase/pull/4890)
- рефакторинг: фильтрация опций FilterTargetKeys на основе titleUsable [`#4981`](https://github.com/nocobase/nocobase/pull/4981)
- исправление(plugin-workflow-manual): исправлен статус отключения в нажатой кнопке ручного задания (manual todo) [`#4982`](https://github.com/nocobase/nocobase/pull/4982)
- рефакторинг: установка поля как обязательного во вложенной таблице должна отображать индикатор обязательности в заголовке столбца [`#4972`](https://github.com/nocobase/nocobase/pull/4972)
- исправление: включение переменных даты в формы фильтрации [`#4916`](https://github.com/nocobase/nocobase/pull/4916)
- исправление: обязательное ограничение становится недействительным после установки правил валидации для полей формы [`#4977`](https://github.com/nocobase/nocobase/pull/4977)

### Коммиты

- действие(версии): 😊 публикация v1.2.29-alpha [`769d2b9`](https://github.com/nocobase/nocobase/commit/769d2b9365c67135690348fdcaa85691272d0616)
- действие: обновить список изменений [`b081790`](https://github.com/nocobase/nocobase/commit/b081790f81d73ad1344a23fbcd375c70c3c2ef91)

## [v1.2.28-alpha](https://github.com/nocobase/nocobase/compare/v1.2.27-alpha...v1.2.28-alpha) - 2024-08-01

### Объединено

- исправление: менеджер коллекций поддерживает настройку filterTargetKey [`#4968`](https://github.com/nocobase/nocobase/pull/4968)
- действие(экспорт): формат числового поля [`#4974`](https://github.com/nocobase/nocobase/pull/4974)
- исправление(acl): получение allowedAction, когда условие пусто [`#4973`](https://github.com/nocobase/nocobase/pull/4973)
- исправление(plugin-workflow): исправлена валидация формулы для выражения [`#4957`](https://github.com/nocobase/nocobase/pull/4957)

### Коммиты

- действие(версии): 😊 публикация v1.2.28-alpha [`40b3901`](https://github.com/nocobase/nocobase/commit/40b390111823c1420d15f4bf0d3e054ebeb73585)
- действие: обновить список изменений [`f7db3bd`](https://github.com/nocobase/nocobase/commit/f7db3bd291912e32cdac906eeabb2681caf70a92)

## [v1.2.27-alpha](https://github.com/nocobase/nocobase/compare/v1.2.26-alpha...v1.2.27-alpha) - 2024-07-30

### Объединено

- исправление: строка даты в фильтре не должна быть в формате UTC [`#4967`](https://github.com/nocobase/nocobase/pull/4967)
- исправление(plugin-workflow): исправлена проблема, при которой роль администратора с правами плагина рабочего процесса не могла удалять выполнения [`#4961`](https://github.com/nocobase/nocobase/pull/4961)
- исправление: улучшение i18n (интернационализации) `tStr()` [`#4966`](https://github.com/nocobase/nocobase/pull/4966)

### Коммиты

- действие(версии): 😊 публикация v1.2.27-alpha [`eafbd1f`](https://github.com/nocobase/nocobase/commit/eafbd1fe97db1727046dcf3d6e23086734157014)
- действие: обновить список изменений [`80182dc`](https://github.com/nocobase/nocobase/commit/80182dc156608084f890a5c2f6363bc746c193bd)

## [v1.2.26-alpha](https://github.com/nocobase/nocobase/compare/v1.2.25-alpha...v1.2.26-alpha) - 2024-07-30

### Объединено

- исправление: удаление i18n fallbackNS (пространства имен для отката) [`#4964`](https://github.com/nocobase/nocobase/pull/4964)
- исправление(plugin-workflow): исправлена кнопка действия удаления для привязки рабочего процесса предварительного действия [`#4963`](https://github.com/nocobase/nocobase/pull/4963)
- исправление: утилиты плагина i18n (интернационализации) [`#4962`](https://github.com/nocobase/nocobase/pull/4962)
- исправление: добавлен язык в шаблон плагина [`#4943`](https://github.com/nocobase/nocobase/pull/4943)
- действие: обновление playwright до версии 1.45.3 [`#4954`](https://github.com/nocobase/nocobase/pull/4954)
- тест: пользовательское действие \e2e [`#4956`](https://github.com/nocobase/nocobase/pull/4956)
- исправление: создание нескольких автоинкрементных полей в MySQL [`#4951`](https://github.com/nocobase/nocobase/pull/4951)

### Коммиты

- действие(версии): 😊 публикация v1.2.26-alpha [`0983e86`](https://github.com/nocobase/nocobase/commit/0983e86740db4af398902bca16991b535fe9e42a)
- действие: обновить список изменений [`3413bd5`](https://github.com/nocobase/nocobase/commit/3413bd57e89867d76a815ed4b237a1e8b1a96f49)

## [v1.2.25-alpha](https://github.com/nocobase/nocobase/compare/v1.2.24-alpha...v1.2.25-alpha) - 2024-07-27

### Объединено

- исправление(plugin-workflow): скрыть конфигурацию условий в событии уничтожения коллекции [`#4952`](https://github.com/nocobase/nocobase/pull/4952)
- исправление(plugin-workflow): исправлено событие расписания для поля даты [`#4953`](https://github.com/nocobase/nocobase/pull/4953)
- рефакторинг(клиент): разрешить выбор отображения нулевого варианта в виде тега в режиме "read pretty", если это настроено [`#4950`](https://github.com/nocobase/nocobase/pull/4950)
- исправление: немедленное очищение значения по умолчанию после удаления поля [`#4915`](https://github.com/nocobase/nocobase/pull/4915)
- исправление: значение по умолчанию для autoGenId должно быть false при добавлении коллекции [`#4942`](https://github.com/nocobase/nocobase/pull/4942)
- рефакторинг: миграция DataBlockCollector в DataBlockProvider [`#4938`](https://github.com/nocobase/nocobase/pull/4938)
- исправление(действие-импорт): импорт с полями createdBy и updatedBy [`#4939`](https://github.com/nocobase/nocobase/pull/4939)

### Коммиты

- действие(версии): 😊 публикация v1.2.25-alpha [`306035c`](https://github.com/nocobase/nocobase/commit/306035c607d2d8d22b540e5653cd9095abf906f0)
- действие: обновить список изменений [`b2f82a2`](https://github.com/nocobase/nocobase/commit/b2f82a26dfc113db7a8bad9e2c21ddcad4d71a0b)
- Обновить LICENSE.txt [`027d54d`](https://github.com/nocobase/nocobase/commit/027d54dc8785a01c0af0d7e7a33aedb0af166e4e)

## [v1.2.24-alpha](https://github.com/nocobase/nocobase/compare/v1.2.23-alpha...v1.2.24-alpha) - 2024-07-23

### Объединено

- исправление(вложенная таблица): обеспечить обновление значений поля формулы в реальном времени [`#4930`](https://github.com/nocobase/nocobase/pull/4930)
- исправление: обязательное условие не применяется при изменении поля с "скрытого" на "видимое" и установке его как обязательного [`#4927`](https://github.com/nocobase/nocobase/pull/4927)
- исправление(plugin-workflow): исправлена ошибка условия "или" в триггере коллекции [`#4925`](https://github.com/nocobase/nocobase/pull/4925)

### Коммиты

- chore(versions): 😊 publish v1.2.24-alpha [`73d6905`](https://github.com/nocobase/nocobase/commit/73d6905f3b8893c6cf9cb2d838cbcf69c5d814fa)
- chore: update changelog [`c07084c`](https://github.com/nocobase/nocobase/commit/c07084ca22dd795ab30a3653da9438e01656430d)
- Revert "fix(subTable): ensure real-time update of formula field values" [`747910f`](https://github.com/nocobase/nocobase/commit/747910f48254c94683d60fa4a3f8520c6b879c18)

## [v1.2.23-alpha](https://github.com/nocobase/nocobase/compare/v1.2.22-alpha...v1.2.23-alpha) - 2024-07-22

### Объединено

- рефакторинг: преобразование полей коллекции в элементы инициализатора [`#4900`](https://github.com/nocobase/nocobase/pull/4900)
- исправление(переменная): устранена ошибка контекста с переменной "текущий объект" [`#4901`](https://github.com/nocobase/nocobase/pull/4901)
- функция(ссылка): добавлен параметр "Открыть в новом окне" [`#4898`](https://github.com/nocobase/nocobase/pull/4898)
- рефакторинг: настройка поля markdown для использования компонента ввода при фильтрации [`#4899`](https://github.com/nocobase/nocobase/pull/4899)

### Коммиты

- действие(версии): 😊 публикация v1.2.23-alpha [`bbbc349`](https://github.com/nocobase/nocobase/commit/bbbc349008ad18b5fa2b8159aaa663db40fa8750)  
- Обновить LICENSE.txt [`a226d98`](https://github.com/nocobase/nocobase/commit/a226d986b27043f1f07447303d9571e92c263d9e)  
- действие: добавить перевод [`b634774`](https://github.com/nocobase/nocobase/commit/b634774feca4d53ff76e788fa86dc9eb228b2f29)

## [v1.2.22-alpha](https://github.com/nocobase/nocobase/compare/v1.2.21-alpha...v1.2.22-alpha) - 2024-07-18

### Объединено

- исправление: исключение при удалении объекта с полями формулы во вложенной форме [`#4897`](https://github.com/nocobase/nocobase/pull/4897)  
- действие: API внешнего источника данных [`#4782`](https://github.com/nocobase/nocobase/pull/4782)  
- исправление: область данных поля ассоциации не должна сохраняться при переключении с выпадающего списка на каскадер [`#4893`](https://github.com/nocobase/nocobase/pull/4893)  
- исправление: проблемы со стилем изображений в поле форматированного текста [`#4892`](https://github.com/nocobase/nocobase/pull/4892)  
- исправление: устранена проблема с неэффективными настройками оператора поля формы фильтра [`#4891`](https://github.com/nocobase/nocobase/pull/4891)

### Коммиты

- действие(версии): 😊 публикация v1.2.22-alpha [`645ccaf`](https://github.com/nocobase/nocobase/commit/645ccaf3dedcfae445bfbf3bdbe1cd4378dd3513)  
- действие: обновить список изменений [`95eaab2`](https://github.com/nocobase/nocobase/commit/95eaab20f1db545efa20ba121e2ca3b139a7fd80)

## [v1.2.21-alpha](https://github.com/nocobase/nocobase/compare/v1.2.20-alpha...v1.2.21-alpha) - 2024-07-17

### Объединено

- функция: добавлена настройка "Очистить значение по умолчанию" для действия сброса [`#4889`](https://github.com/nocobase/nocobase/pull/4889)

### Коммиты

- действие(версии): 😊 публикация v1.2.21-alpha [`235a689`](https://github.com/nocobase/nocobase/commit/235a6897e5dbc290108cb1d42ec6a9df838a9773)  
- действие: обновить список изменений [`9dc7136`](https://github.com/nocobase/nocobase/commit/9dc713637a19e26dd1da3671142a59f3d0b9bca0)  

---

## [v1.2.20-alpha](https://github.com/nocobase/nocobase/compare/v1.2.19-alpha...v1.2.20-alpha) - 2024-07-16

### Объединено

- рефакторинг: настройка фильтра форматированного текста для использования компонента Input [`#4888`](https://github.com/nocobase/nocobase/pull/4888)

### Коммиты

- действие(версии): 😊 публикация v1.2.20-alpha [`d086e93`](https://github.com/nocobase/nocobase/commit/d086e937a2ea641869e4d8f081380990b8565eaf)  
- действие: автоматическое слияние [`32b8bf6`](https://github.com/nocobase/nocobase/commit/32b8bf6cdf5f42554390d787a9131186e8885cd6)  
- действие: обновить список изменений [`b5c2107`](https://github.com/nocobase/nocobase/commit/b5c21078c4559800392bd9c1ebf5d355633beb7d)  

---

## [v1.2.19-alpha](https://github.com/nocobase/nocobase/compare/v1.2.18-alpha...v1.2.19-alpha) - 2024-07-16

### Коммиты

- действие(версии): 😊 публикация v1.2.19-alpha [`c56b873`](https://github.com/nocobase/nocobase/commit/c56b873f42944d5c330734822c9746d51103fcfb)  
- действие: обновить CI релиза [`393b6bb`](https://github.com/nocobase/nocobase/commit/393b6bb27ed8d58653033874da976b065eb93f66)  
- действие: обновить список изменений [`bef2a3f`](https://github.com/nocobase/nocobase/commit/bef2a3ffe1ec16ac1663729b180e4de4562d57c1)  

---

## [v1.2.18-alpha](https://github.com/nocobase/nocobase/compare/v1.2.17-alpha...v1.2.18-alpha) - 2024-07-16

### Коммиты

- действие(версии): 😊 публикация v1.2.18-alpha [`f69d552`](https://github.com/nocobase/nocobase/commit/f69d5526f1c101de685e8a7e788609b9bb187fc7)  
- действие: обновить CI релиза [`31c5489`](https://github.com/nocobase/nocobase/commit/31c54896fb420c246adcadea557cc0b56aeb02d5)  
- действие: обновить список изменений [`2c0721b`](https://github.com/nocobase/nocobase/commit/2c0721b18222cffa170688176ec3798509f095ec)  

---

## [v1.2.17-alpha](https://github.com/nocobase/nocobase/compare/v1.2.16-alpha...v1.2.17-alpha) - 2024-07-16

### Объединено

- исправление: ошибка параметра dataSourceKey для внешних источников данных в списке областей данных ACL [`#4882`](https://github.com/nocobase/nocobase/pull/4882)  
- действие: очистка прослушивателя после завершения транзакции [`#4879`](https://github.com/nocobase/nocobase/pull/4879)  
- действие(импорт): отчет об ошибках Sequelize [`#4878`](https://github.com/nocobase/nocobase/pull/4878)  
- исправление: создание нескольких автоинкрементных полей в MySQL [`#4839`](https://github.com/nocobase/nocobase/pull/4839)  
- исправление: значения по умолчанию для полей не должны очищаться после отправки [`#4877`](https://github.com/nocobase/nocobase/pull/4877)  
- исправление(форма): решена проблема с отображением содержимого полей ассоциации из-за шаблонов ссылок [`#4876`](https://github.com/nocobase/nocobase/pull/4876)  
- исправление: проблема с обновлением в реальном времени области данных поля ассоциации во вложенной таблице [`#4872`](https://github.com/nocobase/nocobase/pull/4872)  
- исправление: useImportStartAction [`#4875`](https://github.com/nocobase/nocobase/pull/4875)

### Коммиты

- действие(версии): 😊 публикация v1.2.17-alpha [`c65c7f7`](https://github.com/nocobase/nocobase/commit/c65c7f708ecdb48740c0043ebcd615ae6201cca5)  
- действие: обновить список изменений [`b3efafc`](https://github.com/nocobase/nocobase/commit/b3efafc1b73fab1047618f8db6fe0099d1d9724a)  
- Обновить bug_report.md [`596aa81`](https://github.com/nocobase/nocobase/commit/596aa81faba08149b7e074e949f189679e2c1735)  

---

## [v1.2.16-alpha](https://github.com/nocobase/nocobase/compare/v1.2.15-alpha...v1.2.16-alpha) - 2024-07-12

### Объединено

- исправление: проблема с некорректным открытием URL в iframe [`#4873`](https://github.com/nocobase/nocobase/pull/4873)

### Коммиты

- действие(версии): 😊 публикация v1.2.16-alpha [`a64015d`](https://github.com/nocobase/nocobase/commit/a64015d1cb8f4926652de19e1ebe1175776e8b33)  
- действие: обновить .env.example [`df4abfd`](https://github.com/nocobase/nocobase/commit/df4abfdfb79b26e52ab07ed13cbf5f9b82775db4)  
- действие: обновить список изменений [`a7b0c36`](https://github.com/nocobase/nocobase/commit/a7b0c36af1fffe658513ca87b5af1498bf8e1449)  

---

## [v1.2.15-alpha](https://github.com/nocobase/nocobase/compare/v1.2.14-alpha...v1.2.15-alpha) - 2024-07-11

### Объединено

- исправление: закрытие выбора инициализатора [`#4865`](https://github.com/nocobase/nocobase/pull/4865)  
- исправление(data-vi): проблема с правами доступа при использовании внешних источников данных в плагине data-vi [`#4864`](https://github.com/nocobase/nocobase/pull/4864)

### Коммиты

- Откат "исправление: пропустить сервер MySQL" [`30cdd25`](https://github.com/nocobase/nocobase/commit/30cdd25b0cea7fa37b15df2b34ff9d3aa98db406)  
- исправление: пропустить сервер MySQL [`f6bc113`](https://github.com/nocobase/nocobase/commit/f6bc113ba78122ce7da3c36d63e8b1c87ecd3f51)  
- действие(версии): 😊 публикация v1.2.15-alpha [`11fdb51`](https://github.com/nocobase/nocobase/commit/11fdb5131c32b19825c0bb6a661ae89b357f4524)  

---

## [v1.2.14-alpha](https://github.com/nocobase/nocobase/compare/v1.2.13-alpha...v1.2.14-alpha) - 2024-07-11

### Объединено

- исправление(Safari): решена проблема с неперезагрузкой страницы меню в Safari [`#4835`](https://github.com/nocobase/nocobase/pull/4835)  
- действие(bot): оптимизация содержания комментариев [`#4856`](https://github.com/nocobase/nocobase/pull/4856)  
- действие: fetch-depth=0 [`#4854`](https://github.com/nocobase/nocobase/pull/4854)

### Коммиты

- действие(версии): 😊 публикация v1.2.14-alpha [`4e53736`](https://github.com/nocobase/nocobase/commit/4e537360dd8c5eaf15dbea254cffd24ea5e3f244)  
- действие: обновить CI релиза [`b564221`](https://github.com/nocobase/nocobase/commit/b56422139f2590a68f95df80e3dd30866f2e8c1f)  
- действие: обновить список изменений [`a89a95c`](https://github.com/nocobase/nocobase/commit/a89a95cfbc84f1d462c7824351f984b6c6cbab7a)  

---

## [v1.2.13-alpha](https://github.com/nocobase/nocobase/compare/v1.2.12-alpha...v1.2.13-alpha) - 2024-07-10

### Объединено

- функция(Меню): добавлена поддержка установки параметров поиска и использования переменных в ссылках [`#4855`](https://github.com/nocobase/nocobase/pull/4855)  
- исправление(шаблон): ограничение блочных шаблонов соответствующими типами блоков [`#4842`](https://github.com/nocobase/nocobase/pull/4842)  
- функция(переменная): добавлена новая переменная «API token» [`#4850`](https://github.com/nocobase/nocobase/pull/4850)  
- исправление: неэффективные условные проверки для полей флажков как правила связывания в поле ассоциации m2o [`#4849`](https://github.com/nocobase/nocobase/pull/4849)  
- исправление(клиент): исправлено время вывода в date-picker в режиме только даты [`#4778`](https://github.com/nocobase/nocobase/pull/4778)  
- исправление: проблема с зависанием страницы при скрытии полей формулы через правила связывания [`#4846`](https://github.com/nocobase/nocobase/pull/4846)  
- исправление(ci): исправлена ошибка скрипта CI для Pro [`#4845`](https://github.com/nocobase/nocobase/pull/4845)  
- действие(источник данных): интернационализация ошибки зависимости поля [`#4843`](https://github.com/nocobase/nocobase/pull/4843)  
- исправление(действие-экспорт): экспорт с пользовательским заголовком поля [`#4825`](https://github.com/nocobase/nocobase/pull/4825)  
- действие: отключить индексацию поисковыми системами [`#4841`](https://github.com/nocobase/nocobase/pull/4841)  
- действие(источник данных): выброс ошибки при уничтожении поля, если оно используется полем ассоциации [`#4833`](https://github.com/nocobase/nocobase/pull/4833)  
- исправление: корректировка отступа кнопки "Добавить блок" в сетке [`#4820`](https://github.com/nocobase/nocobase/pull/4820)  
- действие: сообщение о взаимоисключающих задачах импорта и экспорта [`#4834`](https://github.com/nocobase/nocobase/pull/4834)  
- действие(CI): синхронизация изменений из ветки next [`#4832`](https://github.com/nocobase/nocobase/pull/4832)  
- действие(CI): добавлена задача для E2E тестирования workflow-approval [`#4831`](https://github.com/nocobase/nocobase/pull/4831)  
- действие(plugin-workflow): предоставление всей ошибки в результат узла [`#4799`](https://github.com/nocobase/nocobase/pull/4799)

### Коммиты

- действие(версии): 😊 публикация v1.2.13-alpha [`3b02b0c`](https://github.com/nocobase/nocobase/commit/3b02b0c992786293ee2892c50b42b788adff49e8)  
- действие: обновить список изменений [`4c63f81`](https://github.com/nocobase/nocobase/commit/4c63f815e0f3ace2cdbc76591c003810771c048c)  
- Обновить pull_request_template.md [`8792cbf`](https://github.com/nocobase/nocobase/commit/8792cbf61c73e731c6bd002714f3ceba9b0c8d9d)  

---

## [v1.2.12-alpha](https://github.com/nocobase/nocobase/compare/v1.2.11-alpha...v1.2.12-alpha) - 2024-07-05

### Объединено

- стиль: переполнение списка блоков по оси Y [`#4822`](https://github.com/nocobase/nocobase/pull/4822)  
- исправление: filterTargetKey для внешнего источника данных не определен в действии фильтра [`#4815`](https://github.com/nocobase/nocobase/pull/4815)  
- исправление(база данных): не следует добавлять поле при ошибке привязки [`#4804`](https://github.com/nocobase/nocobase/pull/4804)  
- функция: хук beforeAddDataSource [`#4810`](https://github.com/nocobase/nocobase/pull/4810)  
- исправление: значение ключа цели пустое [`#4796`](https://github.com/nocobase/nocobase/pull/4796)  
- действие(ci): освобождение базы данных после завершения [`#4819`](https://github.com/nocobase/nocobase/pull/4819)  
- исправление: ошибка [`#4816`](https://github.com/nocobase/nocobase/pull/4816)  
- действие: добавить разрешения на импорт/экспорт для администратора и участника [`#4809`](https://github.com/nocobase/nocobase/pull/4809)  
- действие: добавить разрешения на импорт/экспорт для участника [`#4808`](https://github.com/nocobase/nocobase/pull/4808)  
- исправление: проверка ACL для вложенной формы [`#4806`](https://github.com/nocobase/nocobase/pull/4806)  
- исправление: ошибка расчета версии при создании миграции [`#4805`](https://github.com/nocobase/nocobase/pull/4805)  
- действие(e2e): оптимизация таймаута для предотвращения потери отчетов [`#4798`](https://github.com/nocobase/nocobase/pull/4798)  
- исправление: уменьшение высоты таблицы при больших данных на полной высоте [`#4787`](https://github.com/nocobase/nocobase/pull/4787)  
- исправление: неверное выделение связанных полей ассоциации [`#4794`](https://github.com/nocobase/nocobase/pull/4794)  
- стиль: улучшение стиля списка блоков [`#4785`](https://github.com/nocobase/nocobase/pull/4785)  
- исправление: внешний источник данных не перезагружается при обновлении поля заголовка [`#4786`](https://github.com/nocobase/nocobase/pull/4786)  
- тест: E2E тестирование рабочего процесса утверждений [`#4781`](https://github.com/nocobase/nocobase/pull/4781)  
- рефакторинг: переписан интерфейс сканера кода [`#4677`](https://github.com/nocobase/nocobase/pull/4677)  
- рефакторинг(plugin-workflow): добавлена опция отложенного запуска для асинхронного триггера рабочего процесса [`#4772`](https://github.com/nocobase/nocobase/pull/4772)

### Коммиты

- действие(версии): 😊 публикация v1.2.12-alpha [`415eb52`](https://github.com/nocobase/nocobase/commit/415eb52cef1e8b7431132513d91746566f55e8f8)  
- действие: обновить шаблон запроса на изменение [`9d48dbd`](https://github.com/nocobase/nocobase/commit/9d48dbdcaa5c99804946b438c83499266f6456fd)  
- действие: обновить package.json [`3da0fcf`](https://github.com/nocobase/nocobase/commit/3da0fcf3dd9af4d79e1de6af4e91b5fc622eb5ae)  

---

## [v1.2.11-alpha](https://github.com/nocobase/nocobase/compare/v1.2.10-alpha...v1.2.11-alpha) - 2024-06-28

### Объединено

- исправление(область данных): избежание циклического вызова одного и того же API [`#4773`](https://github.com/nocobase/nocobase/pull/4773)  
- функция(клиент): добавлена строка поиска и улучшен UX всплывающего окна выбора в компоненте icon-picker [`#4609`](https://github.com/nocobase/nocobase/pull/4609)  
- функция(менеджер источников данных): оптимизация конфигурации filterTargetKey [`#4766`](https://github.com/nocobase/nocobase/pull/4766)

### Коммиты

- действие(версии): 😊 публикация v1.2.11-alpha [`a2039c2`](https://github.com/nocobase/nocobase/commit/a2039c2f0d13b3628b7fc945e388ca9aaeab7ca1)  
- действие: обновить список изменений [`7459da6`](https://github.com/nocobase/nocobase/commit/7459da6aab1db7fcf71f7e5f042267e48689517e)  

---

## [v1.2.10-alpha](https://github.com/nocobase/nocobase/compare/v1.2.9-alpha...v1.2.10-alpha) - 2024-06-27

### Объединено

- исправление(i18n): неверные пространства имен плагинов [`#4771`](https://github.com/nocobase/nocobase/pull/4771)  
- исправление(plugin-workflow-mailer): исправлен payload в синхронном режиме [`#4765`](https://github.com/nocobase/nocobase/pull/4765)  
- функция(plugin-workflow): добавлен столбец режима для отображения синхронизации [`#4767`](https://github.com/nocobase/nocobase/pull/4767)

### Коммиты

- действие(версии): 😊 публикация v1.2.10-alpha [`734aa1a`](https://github.com/nocobase/nocobase/commit/734aa1a007f67e2f699687eddc8c508bcf3816b5)  
- действие: обновить список изменений [`5448795`](https://github.com/nocobase/nocobase/commit/54487959f7ba09df6448e69a815c0deda13dde97)  
- действие(e2e): сделать E2E тесты более стабильными [`405a6ee`](https://github.com/nocobase/nocobase/commit/405a6eef8110e9a01c72905d3fb33ba4ba8b8a8e)

## [v1.2.9-alpha](https://github.com/nocobase/nocobase/compare/v1.2.8-alpha...v1.2.9-alpha) - 2024-06-27

### Объединено

- test(plugin-workflow): проверка на дублирование запускающих событий [`#4762`](https://github.com/nocobase/nocobase/pull/4762)
- fix: отсутствие данных при первой загрузке в компоненте поля каскадной ассоциации внутри блока шаблона [`#4758`](https://github.com/nocobase/nocobase/pull/4758)
- fix: полная высота [`#4759`](https://github.com/nocobase/nocobase/pull/4759)
- fix: экспорт компонента фильтра [`#4757`](https://github.com/nocobase/nocobase/pull/4757)
- fix(plugin-workflow): исправление сбоя интерфейса при неизвестном типе триггера или узла [`#4761`](https://github.com/nocobase/nocobase/pull/4761)
- fix(l10n): ошибка при первом включении плагина локализации [`#4760`](https://github.com/nocobase/nocobase/pull/4760)
- fix: ошибка при переопределении поля сортировки [`#4752`](https://github.com/nocobase/nocobase/pull/4752)
- fix(pm): анализ имени пакета [`#4756`](https://github.com/nocobase/nocobase/pull/4756)
- feat(l10n): возможность использования ресурсов плагина локализации в бэкенде [`#4751`](https://github.com/nocobase/nocobase/pull/4751)
- feat(variable): добавлена новая переменная "Запись родительского всплывающего окна" [`#4748`](https://github.com/nocobase/nocobase/pull/4748)
- chore(deps): обновление i18next-http-backend с версии 2.4.2 до 2.5.2 [`#4743`](https://github.com/nocobase/nocobase/pull/4743)
- fix: стиль чекбокса не выровнен при выборе таблицы [`#4718`](https://github.com/nocobase/nocobase/pull/4718)

### Коммиты

- chore(versions): 😊 публикация v1.2.9-alpha [`4a50647`](https://github.com/nocobase/nocobase/commit/4a506472100b9f7a49f9b403119a63562a7d5c41)
- chore: обновление журнала изменений [`ce25df2`](https://github.com/nocobase/nocobase/commit/ce25df23ada3f072e2461525a87bb4fe4e196c93)
- fix(pm): поиск по ключевым словам [`1e44973`](https://github.com/nocobase/nocobase/commit/1e4497339a0ed33bb26a5af0c45b1fb695add9cb)

## [v1.2.8-alpha](https://github.com/nocobase/nocobase/compare/v1.2.7-alpha...v1.2.8-alpha) - 2024-06-25

### Объединено

- fix: отсутствие опции множественного выбора для полей связи "многие-ко-многим" в подтаблице [`#4742`](https://github.com/nocobase/nocobase/pull/4742)
- chore: обновление зависимостей [`#4747`](https://github.com/nocobase/nocobase/pull/4747)
- fix: исправление ошибки [`#4744`](https://github.com/nocobase/nocobase/pull/4744)
- fix: корректировка содержимого печати [`#4746`](https://github.com/nocobase/nocobase/pull/4746)
- fix: двойная прокрутка на мобильных устройствах вызывает проблемы с прокруткой [`#4745`](https://github.com/nocobase/nocobase/pull/4745)
- fix: компонент тегов должен поддерживать активацию ссылок [`#4741`](https://github.com/nocobase/nocobase/pull/4741)
- fix: очистка кэша списка плагинов [`#4739`](https://github.com/nocobase/nocobase/pull/4739)
- fix(backup-restore): дамп с коллекцией, имена которой являются зарезервированными словами в MySQL [`#4734`](https://github.com/nocobase/nocobase/pull/4734)
- refactor: поля целочисленного типа с выбранным параметром "Primary" автоматически активируют "Auto increment" [`#4313`](https://github.com/nocobase/nocobase/pull/4313)

### Коммиты

- chore(versions): 😊 публикация v1.2.8-alpha [`3a8867e`](https://github.com/nocobase/nocobase/commit/3a8867eaef30cbcf119faf8505d8e0e9297f3eed)
- chore: обновление журнала изменений [`2eb7811`](https://github.com/nocobase/nocobase/commit/2eb781112b611bb68bf19558d47e877f02d03e0f)
- chore: обновление ссылки [`e69d33a`](https://github.com/nocobase/nocobase/commit/e69d33a09caa387230a5415f5351c93abbc4b6fe)

## [v1.2.7-alpha](https://github.com/nocobase/nocobase/compare/v1.2.6-alpha...v1.2.7-alpha) - 2024-06-24

### Объединено

- fix: проблема парсинга переменных в действии ссылки с переменными в путях [`#4732`](https://github.com/nocobase/nocobase/pull/4732)
- fix(client): исправление подсказки размера по умолчанию для компонента загрузки [`#4731`](https://github.com/nocobase/nocobase/pull/4731)
- fix(plugin-workflow): исправление дублирования синхронного рабочего процесса [`#4727`](https://github.com/nocobase/nocobase/pull/4727)
- chore(data-vi): удаление `addMigrations` [`#4713`](https://github.com/nocobase/nocobase/pull/4713)
- fix(plugin-workflow): добавление индикатора загрузки при добавлении узла [`#4726`](https://github.com/nocobase/nocobase/pull/4726)
- fix(plugin-workflow): исправление доступности редактирования полей в узле создания/обновления [`#4724`](https://github.com/nocobase/nocobase/pull/4724)
- fix: оптимизация описания шаблона блока [`#4721`](https://github.com/nocobase/nocobase/pull/4721)
- fix: высота подформы/подтаблицы равна высоте формы, когда высота формы задана [`#4717`](https://github.com/nocobase/nocobase/pull/4717)
- fix(client): исправление неопределенного контекста [`#4719`](https://github.com/nocobase/nocobase/pull/4719)
- fix(grid): стиль сетки [`#4715`](https://github.com/nocobase/nocobase/pull/4715)

### Коммиты

- chore(versions): 😊 публикация v1.2.7-alpha [`9276413`](https://github.com/nocobase/nocobase/commit/927641349f02d4419a0b22219586608f103df2ae)
- chore: синхронизация cnpm [`8725492`](https://github.com/nocobase/nocobase/commit/87254928b610b441974f44fd2c853ef9e7fb9634)
- fix(vditor): ошибка языка [`e2a22d4`](https://github.com/nocobase/nocobase/commit/e2a22d4c2691f4809a8e5809cafc7118b0ebe522)

## [v1.2.6-alpha](https://github.com/nocobase/nocobase/compare/v1.2.5-alpha...v1.2.6-alpha) - 2024-06-20

### Объединено

- fix(plugin-workflow): исправление предупреждения клиента [`#4709`](https://github.com/nocobase/nocobase/pull/4709)
- fix(plugin-workflow): исправление ошибки "undefined" для триггера действия [`#4710`](https://github.com/nocobase/nocobase/pull/4710)

### Коммиты

- chore(versions): 😊 публикация v1.2.6-alpha [`504f8d1`](https://github.com/nocobase/nocobase/commit/504f8d107c308484702467bddf6d543768bbceea)
- chore: обновление журнала изменений [`b525362`](https://github.com/nocobase/nocobase/commit/b525362751182a87b0ad0403d1a0b288fc70755a)

## [v1.2.5-alpha](https://github.com/nocobase/nocobase/compare/v1.2.4-alpha...v1.2.5-alpha) - 2024-06-19

### Объединено

- fix(plugin-fm): исправление правила создания миниатюр [`#4707`](https://github.com/nocobase/nocobase/pull/4707)
- fix(plugin-workflow): исправление ключа локализации в хранилище [`#4704`](https://github.com/nocobase/nocobase/pull/4704)
- fix: поле выбора, установленное как заголовок [`#4703`](https://github.com/nocobase/nocobase/pull/4703)
- fix: автоматическое обновление списка после закрытия модального окна, следующего за операцией добавления [`#4699`](https://github.com/nocobase/nocobase/pull/4699)
- fix(backup-restore): имя сниппета [`#4700`](https://github.com/nocobase/nocobase/pull/4700)
- fix(client): исправление стиля индикатора прогресса загрузки [`#4698`](https://github.com/nocobase/nocobase/pull/4698)
- fix(variable): устранение проблемы с некорректным sourceKey при отложенной загрузке переменных [`#4691`](https://github.com/nocobase/nocobase/pull/4691)
- refactor: отключена возможность перетаскивания строк в подтаблице [`#4696`](https://github.com/nocobase/nocobase/pull/4696)
- fix: расчет высоты для вкладок на всю высоту в блоках инициации и утверждения [`#4686`](https://github.com/nocobase/nocobase/pull/4686)
- chore(data-source-main): сообщение об ошибке существования имени поля [`#4689`](https://github.com/nocobase/nocobase/pull/4689)
- chore(database): поддержка типа mediumtext [`#4697`](https://github.com/nocobase/nocobase/pull/4697)
- fix(database): поиск модели в хуках [`#4694`](https://github.com/nocobase/nocobase/pull/4694)
- feat(plugin-field-sequence): возможность настройки формата даты [`#4685`](https://github.com/nocobase/nocobase/pull/4685)
- refactor(plugin-workflow-dc): перемещение шаблона коллекции в плагин и удаление поля сортировки [`#4682`](https://github.com/nocobase/nocobase/pull/4682)
- refactor: блок рабочего процесса и блок шаблона поддерживают установку высоты блока [`#4678`](https://github.com/nocobase/nocobase/pull/4678)
- fix: восстановление высоты поля после удаления описания в форме [`#4679`](https://github.com/nocobase/nocobase/pull/4679)

### Коммиты

- chore(versions): 😊 публикация v1.2.5-alpha [`9968eda`](https://github.com/nocobase/nocobase/commit/9968eda02b5836af34f118f38826590cf0f60b04)
- chore: добавлен скрипт синхронизации cnpm [`ac472ef`](https://github.com/nocobase/nocobase/commit/ac472efd23367a3ecac995c565e4d801fec6319c)
- chore: обновление журнала изменений [`6a751b5`](https://github.com/nocobase/nocobase/commit/6a751b596fcfffd9b1224cf59818ccf7c4f27627)

## [v1.2.4-alpha](https://github.com/nocobase/nocobase/compare/v1.2.3-alpha...v1.2.4-alpha) - 2024-06-17

### Объединено

- fix: иконка модального окна действия и закрытие меню Initializer при клике [`#4664`](https://github.com/nocobase/nocobase/pull/4664)
- fix(data-vi): пользовательские условия фильтрации не применяются [`#4671`](https://github.com/nocobase/nocobase/pull/4671)
- fix: стиль actionBar в блоке диаграмм [`#4666`](https://github.com/nocobase/nocobase/pull/4666)
- feat(data-vi): возможность использования json5 в конфигурации JSON диаграмм [`#4668`](https://github.com/nocobase/nocobase/pull/4668)
- fix(duplicate): устранение ошибки при клике [`#4658`](https://github.com/nocobase/nocobase/pull/4658)
- style: блок списка [`#4665`](https://github.com/nocobase/nocobase/pull/4665)
- chore(action-import): проверка поля ассоциации и значения поля выбора [`#4643`](https://github.com/nocobase/nocobase/pull/4643)
- fix: высота блока формы/деталей/фильтра [`#4652`](https://github.com/nocobase/nocobase/pull/4652)
- chore(test): пропуск тестов, связанных с WebSocket, которые вызывают зависание vitest [`#4644`](https://github.com/nocobase/nocobase/pull/4644)
- fix(plugin-workflow): исправление некорректной реакции схемы [`#4661`](https://github.com/nocobase/nocobase/pull/4661)
- Update ja_JP.json [`#4650`](https://github.com/nocobase/nocobase/pull/4650)
- fix(logger): исправление проблемы, при которой файлы логов рабочего процесса не выводятся [`#4657`](https://github.com/nocobase/nocobase/pull/4657)
- fix(plugin-fm): добавление миграции для исправления нового добавленного устаревшего поля вложения [`#4649`](https://github.com/nocobase/nocobase/pull/4649)
- fix(plugin-fm): установка недействительности при незавершенной загрузке во избежание отправки [`#4653`](https://github.com/nocobase/nocobase/pull/4653)
- fix: клиентский тест [`#4648`](https://github.com/nocobase/nocobase/pull/4648)

### Коммиты

- chore(versions): 😊 публикация v1.2.4-alpha [`9de4853`](https://github.com/nocobase/nocobase/commit/9de485303051750250d04135cdb9346fbd649742)
- chore: обновление журнала изменений [`92cf3d7`](https://github.com/nocobase/nocobase/commit/92cf3d750e6589d80e4e344396d6148e9d2a4917)
- fix(mock-collections): синтаксическая ошибка около "-" [`6c431ca`](https://github.com/nocobase/nocobase/commit/6c431caec42abab960fddb0bd80d0d78a937b325)

## [v1.2.3-alpha](https://github.com/nocobase/nocobase/compare/v1.2.2-alpha...v1.2.3-alpha) - 2024-06-13

### Объединено

- style(client): улучшение стиля сетки [`#4647`](https://github.com/nocobase/nocobase/pull/4647)
- refactor(plugin-workflow): добавление карточного макета для назначаемых полей [`#4642`](https://github.com/nocobase/nocobase/pull/4642)
- style: улучшение стиля блока markdown [`#4639`](https://github.com/nocobase/nocobase/pull/4639)

### Коммиты

- chore(versions): 😊 публикация v1.2.3-alpha [`deacbf2`](https://github.com/nocobase/nocobase/commit/deacbf25e9b057c59b4f5c84d353ba18676b3b9e)
- chore: обновление журнала изменений [`b2775fa`](https://github.com/nocobase/nocobase/commit/b2775fa6cb5ea94e51f0da2ffcf0770fd7d42bc8)

## [v1.2.2-alpha](https://github.com/nocobase/nocobase/compare/v1.2.1-alpha...v1.2.2-alpha) - 2024-06-12

### Объединено

- feat: поддержка встраивания QR-кода в markdown и сканирования на мобильных устройствах [`#4638`](https://github.com/nocobase/nocobase/pull/4638)
- refactor(plugin-workflow): использование назначаемых полей для значений узлов создания/обновления [`#4546`](https://github.com/nocobase/nocobase/pull/4546)
- fix(plugin-workflow-request): исправление теста [`#4634`](https://github.com/nocobase/nocobase/pull/4634)
- fix: расчет высоты блока [`#4629`](https://github.com/nocobase/nocobase/pull/4629)

### Коммиты

- chore(versions): 😊 публикация v1.2.2-alpha [`e45bdb7`](https://github.com/nocobase/nocobase/commit/e45bdb7d2f44437e7ef1f6862c6f72fad5649104)
- chore: обновление журнала изменений [`20f85cd`](https://github.com/nocobase/nocobase/commit/20f85cd6e5bb276add156610958c8a693e979937)

## [v1.2.1-alpha](https://github.com/nocobase/nocobase/compare/v1.2.0-alpha...v1.2.1-alpha) - 2024-06-12

### Объединено

- chore(action-import): пропуск сброса последовательности, если не импортируется автоинкрементное первичное поле [`#4631`](https://github.com/nocobase/nocobase/pull/4631)

### Коммиты

- chore(versions): 😊 публикация v1.2.1-alpha [`0d6ebe1`](https://github.com/nocobase/nocobase/commit/0d6ebe16cf7e6c4ff8e3cb3578927f2315588aa4)
- chore: обновление журнала изменений [`93d3313`](https://github.com/nocobase/nocobase/commit/93d33131e60ebd8c3e88df074622e46565b0d31a)
- fix: использование dataSource.collectionManager.getCollection [`75f5098`](https://github.com/nocobase/nocobase/commit/75f5098dedb4fdf636c1c568ba118c59fbb751ae)

## [v1.2.0-alpha](https://github.com/nocobase/nocobase/compare/v1.1.0-alpha.0...v1.2.0-alpha) - 2024-06-12

### Объединено

- chore: обновление CI для релиза [`#4632`](https://github.com/nocobase/nocobase/pull/4632)

### Коммиты

- chore(versions): 😊 публикация v1.2.0-alpha [`7963417`](https://github.com/nocobase/nocobase/commit/79634179a4ad17b3a3c1eeec6ac2a63c362ea047)

## [v1.1.0-alpha.0](https://github.com/nocobase/nocobase/compare/v1.0.1-alpha.3...v1.1.0-alpha.0) - 2024-06-12

### Объединено

- fix(filter-form): исправление автоматического запуска действия фильтрации без значения по умолчанию [`#4627`](https://github.com/nocobase/nocobase/pull/4627)
- fix: зависание страницы при работе с формулой в подтаблице после добавления, выбора и удаления записи [`#4613`](https://github.com/nocobase/nocobase/pull/4613)
- feat: блок рабочего стола [`#4555`](https://github.com/nocobase/nocobase/pull/4555)

### Коммиты

- chore(versions): 😊 публикация v1.1.0-alpha.0 [`b6bf12a`](https://github.com/nocobase/nocobase/commit/b6bf12af2292bcf306bc9de7006b7c57ad89a712)
- chore: обновление CI для релиза [`ae80da7`](https://github.com/nocobase/nocobase/commit/ae80da775419dcc0720c8c5af2996a5173c9948c)
- chore: обновление журнала изменений [`431df8e`](https://github.com/nocobase/nocobase/commit/431df8ec98593f337baaa24d7c06f55a0ba1cb33)

## [v1.0.1-alpha.3](https://github.com/nocobase/nocobase/compare/v1.0.1-alpha.2...v1.0.1-alpha.3) - 2024-06-11

### Объединено

- fix(auth): перевод страницы входа в систему [`#4624`](https://github.com/nocobase/nocobase/pull/4624)
- fix: импорт данных с полем ассоциации [`#4623`](https://github.com/nocobase/nocobase/pull/4623)
- feat: дерево блоков [`#4566`](https://github.com/nocobase/nocobase/pull/4566)
- chore(deps-dev): обновление multer-aliyun-oss с версии 2.1.1 до 2.1.3 [`#4614`](https://github.com/nocobase/nocobase/pull/4614)

### Коммиты

- chore(versions): 😊 публикация v1.0.1-alpha.3 [`c7060ae`](https://github.com/nocobase/nocobase/commit/c7060aecebaed492296092efc37193c43eb073e9)
- chore: обновление журнала изменений [`1dc8b20`](https://github.com/nocobase/nocobase/commit/1dc8b20f08f7d16143de3ab4d9a8dd71af47e303)
- Update README.zh-CN.md [`c413b3e`](https://github.com/nocobase/nocobase/commit/c413b3eba50a006f829235e1a37775c422717183)

## [v1.0.1-alpha.2](https://github.com/nocobase/nocobase/compare/v1.0.1-alpha.1...v1.0.1-alpha.2) - 2024-06-11

### Объединено

- feat(filter-form): автоматический запуск действия фильтрации при наличии значений по умолчанию [`#4622`](https://github.com/nocobase/nocobase/pull/4622)
- fix: отсутствие высоты в блоке истории карты [`#4621`](https://github.com/nocobase/nocobase/pull/4621)
- fix: проблема высоты блока таблицы с минимальными данными [`#4617`](https://github.com/nocobase/nocobase/pull/4617)
- fix(preset): исправление версии плагина plugin-workflow-mailer [`#4619`](https://github.com/nocobase/nocobase/pull/4619)
- fix(auth): возможность установки перевода заголовка типа авторизации с серверной стороны [`#4616`](https://github.com/nocobase/nocobase/pull/4616)
- fix(export): кнопка экспорта остается в состоянии загрузки после отмены [`#4615`](https://github.com/nocobase/nocobase/pull/4615)
- feat(tree-block): поддержка фильтрации дочерних узлов [`#4603`](https://github.com/nocobase/nocobase/pull/4603)
- fix(client): исправление переноса текста во входных переменных [`#4605`](https://github.com/nocobase/nocobase/pull/4605)
- refactor(plugin-workflow): изменение получения переменных из полей коллекции [`#4567`](https://github.com/nocobase/nocobase/pull/4567)
- fix: удаление обертки сетки [`#4612`](https://github.com/nocobase/nocobase/pull/4612)
- feat(client): разрешение использования JSON5 в поле ввода формы типа JSONTextArea [`#4600`](https://github.com/nocobase/nocobase/pull/4600)
- fix: iframe теряет высоту при установке по умолчанию [`#4602`](https://github.com/nocobase/nocobase/pull/4602)
- feat(plugin-workflow-smtp-mailer): новый плагин для отправки электронной почты в рабочем процессе [`#4584`](https://github.com/nocobase/nocobase/pull/4584)
- chore: исправление опечатки [`#4589`](https://github.com/nocobase/nocobase/pull/4589)

### Коммиты

- chore(versions): 😊 публикация v1.0.1-alpha.2 [`092f3af`](https://github.com/nocobase/nocobase/commit/092f3afab132ef9dbfc2d7228ca4c14b505f383a)
- chore: обновление журнала изменений [`6bc8a09`](https://github.com/nocobase/nocobase/commit/6bc8a093ad4ded9ac56b62279e6f6f715796191f)

## [v1.0.1-alpha.1](https://github.com/nocobase/nocobase/compare/v1.0.0-alpha.17...v1.0.1-alpha.1) - 2024-06-07

### Объединено

- fix: проблемы со стилями gridCard в мобильном клиенте [`#4599`](https://github.com/nocobase/nocobase/pull/4599)
- fix: проблемы со стилями gridCard в мобильном клиенте [`#4593`](https://github.com/nocobase/nocobase/pull/4593)
- fix(variable): следует удалять через поле коллекции [`#4590`](https://github.com/nocobase/nocobase/pull/4590)
- feat(data-vi): поддержка использования параметров URL и переменных текущей роли [`#4586`](https://github.com/nocobase/nocobase/pull/4586)
- refactor(variable): поддержка установки значения по умолчанию [`#4583`](https://github.com/nocobase/nocobase/pull/4583)
- fix: проблемы совместимости с исторической канбан-доской и блоком iframe [`#4587`](https://github.com/nocobase/nocobase/pull/4587)
- fix(linkage-rules): устранение проблемы с недопустимыми выражениями [`#4580`](https://github.com/nocobase/nocobase/pull/4580)
- fix(map): сброс amap [`#4574`](https://github.com/nocobase/nocobase/pull/4574)
- feat: поддержка предпросмотра URL [`#4559`](https://github.com/nocobase/nocobase/pull/4559)
- fix: исправление ошибки преобразования точности Unix-времени в readPretty [`#4569`](https://github.com/nocobase/nocobase/pull/4569)
- feat(plugin-workflow): возможность выбора любого пути переменной в условном узле [`#4571`](https://github.com/nocobase/nocobase/pull/4571)
- fix(client): исправление свойств действия [`#4568`](https://github.com/nocobase/nocobase/pull/4568)
- refactor: экспорт и импорт плагинов [`#4468`](https://github.com/nocobase/nocobase/pull/4468)
- fix: проблемы со стилями при перетаскивании полей в блоках деталей/формы/списка [`#4558`](https://github.com/nocobase/nocobase/pull/4558)
- chore(e2e): повышение стабильности e2e-тестов [`#4565`](https://github.com/nocobase/nocobase/pull/4565)
- fix: страница регистрации не найдена для новой базовой аутентификации [`#4556`](https://github.com/nocobase/nocobase/pull/4556)
- fix(l10n): пространство имен i18n для заголовка страницы [`#4557`](https://github.com/nocobase/nocobase/pull/4557)
- feat: поддержка переменных в iframe [`#4512`](https://github.com/nocobase/nocobase/pull/4512)
- fix(client): исправление загрузки логотипа в системных настройках [`#4564`](https://github.com/nocobase/nocobase/pull/4564)
- fix(plugin-fm): исправление проверки выбора компонента вложений [`#4563`](https://github.com/nocobase/nocobase/pull/4563)
- fix(client): исправление предупреждающих свойств [`#4562`](https://github.com/nocobase/nocobase/pull/4562)
- fix(plugin-fm): исправление сбоя страницы при ошибке 413 в локальной разработке [`#4560`](https://github.com/nocobase/nocobase/pull/4560)
- fix defaultImage в constants.ts для Google Maps [`#4483`](https://github.com/nocobase/nocobase/pull/4483)
- refactor(FormV2): добавление компонента FormWithDataTemplates [`#4551`](https://github.com/nocobase/nocobase/pull/4551)
- feat(client): добавлена новая переменная "URL search params" и поддержка действия ссылки [`#4506`](https://github.com/nocobase/nocobase/pull/4506)
- feat: блок данных поддерживает установку высоты блока [`#4441`](https://github.com/nocobase/nocobase/pull/4441)
- chore(deps): обновление @typescript-eslint/parser с версии 6.14.0 до 6.21.0 [`#4548`](https://github.com/nocobase/nocobase/pull/4548)
- feat(logger): поддержка сбора отладочной информации при сбое рендеринга [`#4524`](https://github.com/nocobase/nocobase/pull/4524)
- fix: ошибки фильтрации данных и значения поля формулы после выбора записи в подтаблице [`#4547`](https://github.com/nocobase/nocobase/pull/4547)
- fix: показ каскадного выбора при отсутствии данных в форме редактирования [`#4543`](https://github.com/nocobase/nocobase/pull/4543)
- fix(plugin-workflow): исправление переполнения выпадающего списка версий рабочего процесса [`#4542`](https://github.com/nocobase/nocobase/pull/4542)
- test(block-templates): добавлены тестовые случаи [`#4540`](https://github.com/nocobase/nocobase/pull/4540)
- feat(client): настройка панели инструментов для действий таблицы [`#4538`](https://github.com/nocobase/nocobase/pull/4538)
- chore(deps): обновление sanitize-html с версии 2.10.0 до 2.13.0 [`#4505`](https://github.com/nocobase/nocobase/pull/4505)
- fix(client): исправление стиля шаблона данных [`#4536`](https://github.com/nocobase/nocobase/pull/4536)
- fix(plugin-fm): исправление ошибки пути cos [`#4537`](https://github.com/nocobase/nocobase/pull/4537)
- fix: предотвращение удаления всего поля связи при удалении последнего столбца в подтаблице [`#4518`](https://github.com/nocobase/nocobase/pull/4518)
- fix(plugin-fm): исправление ошибки удаления файла cos [`#4529`](https://github.com/nocobase/nocobase/pull/4529)
- fix: границы таблицы [`#4534`](https://github.com/nocobase/nocobase/pull/4534)
- fix(client): исправление проблемы, когда добавление шаблонов блоков во всплывающем окне не отображается [`#4531`](https://github.com/nocobase/nocobase/pull/4531)
- Fix/initializer improve [`#4533`](https://github.com/nocobase/nocobase/pull/4533)
- fix(i18n): исправление пространства имен i18n для заголовков коллекций [`#4530`](https://github.com/nocobase/nocobase/pull/4530)
- fix(plugin-map): добавлена опция "Установить уровень масштабирования по умолчанию" для полей карты [`#4527`](https://github.com/nocobase/nocobase/pull/4527)
- fix: отключение компонента каскадного выбора для поля связи в подтаблице [`#4517`](https://github.com/nocobase/nocobase/pull/4517)
- fix: влияние включения поля связи на состояния полей блока [`#4528`](https://github.com/nocobase/nocobase/pull/4528)
- fix(utils): исправление json-templates [`#4525`](https://github.com/nocobase/nocobase/pull/4525)
- fix(client): исправление глубокого выбора связи в компоненте AppendsTreeSelect [`#4526`](https://github.com/nocobase/nocobase/pull/4526)
- fix: ошибка перетаскивания таблицы [`#4511`](https://github.com/nocobase/nocobase/pull/4511)
- fix(client): исправление проблемы, где установка значений по умолчанию с использованием переменных... [`#4521`](https://github.com/nocobase/nocobase/pull/4521)
- fix(plugin-workflow-manual): исправление неверного интерфейса пользовательского поля формы в ручном узле [`#4520`](https://github.com/nocobase/nocobase/pull/4520)
- fix(plugin-workflow): исправление ACL запуска рабочего процесса [`#4522`](https://github.com/nocobase/nocobase/pull/4522)
- fix(plugin-workflow-request): исправление локализации [`#4519`](https://github.com/nocobase/nocobase/pull/4519)
- fix: отсутствие настроек linkageRules при отправке формы обновления [`#4515`](https://github.com/nocobase/nocobase/pull/4515)
- chore: добавление заголовка группы в настройки действий элементов таблицы [`#4516`](https://github.com/nocobase/nocobase/pull/4516)
- fix(client): исправление стиля Variable.TextArea [`#4513`](https://github.com/nocobase/nocobase/pull/4513)
- fix(acl): использование роли по умолчанию, если `x-role` не принадлежит текущему пользователю [`#4507`](https://github.com/nocobase/nocobase/pull/4507)
- feat(plugin-fm): правила стали настраиваемыми [`#4118`](https://github.com/nocobase/nocobase/pull/4118)
- fix(data-vi): компонент поля невидим при установке значения по умолчанию для поля фильтра [`#4509`](https://github.com/nocobase/nocobase/pull/4509)
- feat(client): улучшение обработки ошибок для различных компонентов при их перехвате [`#4459`](https://github.com/nocobase/nocobase/pull/4459)
- refactor: удаление всех проверок isForeignKey на стороне клиента [`#4499`](https://github.com/nocobase/nocobase/pull/4499)
- fix: событие после обновления в репозитории одиночной связи [`#4503`](https://github.com/nocobase/nocobase/pull/4503)
- chore(auth): изменение ограничения длины имени пользователя на 1-50 символов [`#4502`](https://github.com/nocobase/nocobase/pull/4502)
- fix: поддержка allowAddNew в подтаблице [`#4498`](https://github.com/nocobase/nocobase/pull/4498)

### Коммиты

- chore: обновление журнала изменений [`b70528a`](https://github.com/nocobase/nocobase/commit/b70528a4ca6f479b5d6e8111db95a2f4a5ce72e8)
- chore(versions): 😊 публикация v1.0.1-alpha.1 [`9218319`](https://github.com/nocobase/nocobase/commit/9218319d02fb41523eae42417eedee58a77204de)
- Revert "chore: make e2e tests more stable" [`2dfa7a2`](https://github.com/nocobase/nocobase/commit/2dfa7a2625761f6bf0c64585f6e3438175f7a88a)

## [v1.0.0-alpha.17](https://github.com/nocobase/nocobase/compare/v1.0.0-alpha.16...v1.0.0-alpha.17) - 2024-05-27

### Объединено

- fix: оптимизация переменной области данных в конфигурации разрешений [`#4484`](https://github.com/nocobase/nocobase/pull/4484)
- refactor: отмена присваивания в правиле связывания формы при выборе нескольких полей [`#4492`](https://github.com/nocobase/nocobase/pull/4492)

### Коммиты

- chore(versions): 😊 публикация v1.0.0-alpha.17 [`53eb054`](https://github.com/nocobase/nocobase/commit/53eb054848d599e624f1cc8bd4f76fddd315797f)
- Update README.md [`3851d49`](https://github.com/nocobase/nocobase/commit/3851d4946909d91ca293488843f25737901a419a)
- chore: обновление журнала изменений [`8d7bc1f`](https://github.com/nocobase/nocobase/commit/8d7bc1ffdbe703f6b181feb7da739b1f9d6745a1)

## [v1.0.0-alpha.16](https://github.com/nocobase/nocobase/compare/v1.0.0-alpha.15...v1.0.0-alpha.16) - 2024-05-27

### Объединено

- fix: проблема отображения числового поля в правиле связывания формы [`#4482`](https://github.com/nocobase/nocobase/pull/4482)
- fix: действие экспорта без фильтра области данных [`#4476`](https://github.com/nocobase/nocobase/pull/4476)
- chore: сообщение об ошибке запуска приложения [`#4477`](https://github.com/nocobase/nocobase/pull/4477)
- fix(subTable): предотвращение установки значения по умолчанию для размонтированных полей [`#4475`](https://github.com/nocobase/nocobase/pull/4475)
- fix: разрешения коллекции вложений [`#4470`](https://github.com/nocobase/nocobase/pull/4470)
- fix(database): индекс внешнего ключа в таблицах с подчеркиванием [`#4473`](https://github.com/nocobase/nocobase/pull/4473)
- fix: отсутствие контекста приложения в модальном окне [`#4457`](https://github.com/nocobase/nocobase/pull/4457)
- chore: предотвращение ошибочных операций с датами переменных [`#4452`](https://github.com/nocobase/nocobase/pull/4452)
- fix(plugin): устранение ошибки, вызванной дублированием пользовательского запроса [`#4458`](https://github.com/nocobase/nocobase/pull/4458)
- fix: verdaccio/verdaccio:5 [`#4448`](https://github.com/nocobase/nocobase/pull/4448)
- fix(core): поддержка выбора первого уровня переменных как значения по умолчанию [`#4439`](https://github.com/nocobase/nocobase/pull/4439)
- fix: ошибка дефекта правила связывания действия строки таблицы [`#4436`](https://github.com/nocobase/nocobase/pull/4436)
- fix(plugin-workflow): исправление ошибки переменной в условном узле [`#4437`](https://github.com/nocobase/nocobase/pull/4437)
- fix(plugin-workflow): исправление пустого значения в значениях связи при создании и обновлении узлов [`#4433`](https://github.com/nocobase/nocobase/pull/4433)
- fix: ошибка удаления запроса данных после фильтрации связывания блоков [`#4434`](https://github.com/nocobase/nocobase/pull/4434)
- docs(client): имена SchemaInitializer должны начинаться со строчной буквы [`#4432`](https://github.com/nocobase/nocobase/pull/4432)

### Коммиты

- chore(versions): 😊 публикация v1.0.0-alpha.16 [`2e7744f`](https://github.com/nocobase/nocobase/commit/2e7744f85cffa297bb91c7c41e232fdcf3973e8d)
- fix(client): удаление уведомления "вы офлайн" [`1e230ec`](https://github.com/nocobase/nocobase/commit/1e230ecbc239d36192ada128e56632e4d7697345)
- chore: обновление журнала изменений [`121b6a8`](https://github.com/nocobase/nocobase/commit/121b6a8f4eaa2a1c68937bf9ab9f9bdad320f1d3)

## [v1.0.0-alpha.15](https://github.com/nocobase/nocobase/compare/v1.0.0-alpha.14...v1.0.0-alpha.15) - 2024-05-21

### Объединено

- refactor: значение точности поля UnixTimestamp по умолчанию — секунды [`#4418`](https://github.com/nocobase/nocobase/pull/4418)
- refactor: настройка заголовка в менеджере коллекций [`#4419`](https://github.com/nocobase/nocobase/pull/4419)
- feat(logger): добавлен `dailyRotateFile` в транспорт по умолчанию и уровень `trace` [`#4429`](https://github.com/nocobase/nocobase/pull/4429)
- fix: исправление useCurrentFormVariable [`#4428`](https://github.com/nocobase/nocobase/pull/4428)
- feat(plugin-workflow-request): разрешено использование переменных ответа [`#4414`](https://github.com/nocobase/nocobase/pull/4414)
- refactor(plugin-workflow): настройка множественного выбора в узле запроса [`#4412`](https://github.com/nocobase/nocobase/pull/4412)
- fix(filter-form): исправление недействительного оператора в шаблонах блоков [`#4390`](https://github.com/nocobase/nocobase/pull/4390)
- fix: пользовательский запрос действия должен поддерживать настройку правила связывания [`#4410`](https://github.com/nocobase/nocobase/pull/4410)
- fix: исправление опечатки в целевом объекте ссылки [`#4416`](https://github.com/nocobase/nocobase/pull/4416)
- fix: изменение ссылки на лицензию [`#4415`](https://github.com/nocobase/nocobase/pull/4415)
- chore: миграция для исправления параметров древовидных полей [`#4369`](https://github.com/nocobase/nocobase/pull/4369)
- fix: ошибка неоднозначности имени столбца в операторе массива [`#4401`](https://github.com/nocobase/nocobase/pull/4401)
- fix: фильтрация значений с пустыми значениями [`#4319`](https://github.com/nocobase/nocobase/pull/4319)
- fix(data-vi): преобразование значений полей множественного выбора в метки [`#4398`](https://github.com/nocobase/nocobase/pull/4398)
- feat: добавлен process.env.API_CLIENT_STORAGE_PREFIX [`#4395`](https://github.com/nocobase/nocobase/pull/4395)
- fix: наследуемое поле должно быть доступно для установки как заголовок [`#4394`](https://github.com/nocobase/nocobase/pull/4394)
- fix: дублирование элементов при обновлении ассоциаций [`#4393`](https://github.com/nocobase/nocobase/pull/4393)
- fix(data-vi): пользовательская подсказка для круговой диаграммы не работает [`#4392`](https://github.com/nocobase/nocobase/pull/4392)
- fix(theme-editor): интервал полей формы не должен зависеть от token.marginBlock [`#4374`](https://github.com/nocobase/nocobase/pull/4374)
- fix(plugin-workflow-request): исправление зависания запроса при недопустимом значении заголовка [`#4376`](https://github.com/nocobase/nocobase/pull/4376)
- fix(logger): поток логов должен быть закрыт после уничтожения приложения [`#4380`](https://github.com/nocobase/nocobase/pull/4380)
- fix(plugin-workflow-action-trigger): исправление подсказки [`#4383`](https://github.com/nocobase/nocobase/pull/4383)
- chore: тестирование на Windows [`#4375`](https://github.com/nocobase/nocobase/pull/4375)
- fix: промежуточное ПО шаблона данных в источнике данных [`#4378`](https://github.com/nocobase/nocobase/pull/4378)
- chore: разделение SQL-коллекции [`#3650`](https://github.com/nocobase/nocobase/pull/3650)
- refactor: древовидная коллекция поддерживает presetFieldsDisabledIncludes [`#4371`](https://github.com/nocobase/nocobase/pull/4371)
- fix(data-vi): следует использовать локальный часовой пояс при форматировании даты [`#4366`](https://github.com/nocobase/nocobase/pull/4366)
- chore: установка main как зарезервированного символа для имени приложения [`#4370`](https://github.com/nocobase/nocobase/pull/4370)
- refactor: объединение и упрощение действий [`#4336`](https://github.com/nocobase/nocobase/pull/4336)
- fix: потеря точности в поле bigint при чтении [`#4360`](https://github.com/nocobase/nocobase/pull/4360)

### Коммиты

- chore: обновление yarn.lock [`a698de2`](https://github.com/nocobase/nocobase/commit/a698de26e0ab56c86ce0891b603aa47b500111c2)
- chore(versions): 😊 публикация v1.0.0-alpha.15 [`4f3a3c0`](https://github.com/nocobase/nocobase/commit/4f3a3c0931d25fb5e4e4d0ee3d65564ac662a891)
- Update bug_report.md [`0626b83`](https://github.com/nocobase/nocobase/commit/0626b8301dfa7c874aa4e9514513be891c275e36)

## [v1.0.0-alpha.14](https://github.com/nocobase/nocobase/compare/v1.0.0-alpha.13...v1.0.0-alpha.14) - 2024-05-16

### Объединено

- fix: исправление require resolve [`#4356`](https://github.com/nocobase/nocobase/pull/4356)
- fix: после установки заголовка коллекции данные должны обновляться [`#4358`](https://github.com/nocobase/nocobase/pull/4358)
- fix(plugin-workflow-request): исправление переполнения полей значений [`#4354`](https://github.com/nocobase/nocobase/pull/4354)
- chore(deps): обновление tsx с версии 4.6.2 до 4.10.2 [`#4339`](https://github.com/nocobase/nocobase/pull/4339)
- chore(deps): обновление @formily/path с версии 2.3.0 до 2.3.1 [`#4338`](https://github.com/nocobase/nocobase/pull/4338)
- fix: столбец таблицы должен поддерживать пустые ячейки [`#4350`](https://github.com/nocobase/nocobase/pull/4350)
- fix(plugin-workflow): исправление подсказки привязки на основе типа события [`#4349`](https://github.com/nocobase/nocobase/pull/4349)

### Коммиты

- chore(versions): 😊 публикация v1.0.0-alpha.14 [`0399272`](https://github.com/nocobase/nocobase/commit/039927266461777149392f71f54859768fb40030)
- Revert "chore(deps): bump tsx from 4.6.2 to 4.10.2 (#4339)" [`5fa77df`](https://github.com/nocobase/nocobase/commit/5fa77df58af62fa41493e2aacdbb824fe97c4c99)
- chore: обновление журнала изменений [`410af77`](https://github.com/nocobase/nocobase/commit/410af77f0ce9dbe22d05cdf90e8caf91c89cafb4)

## [v1.0.0-alpha.13](https://github.com/nocobase/nocobase/compare/v1.0.0-alpha.12...v1.0.0-alpha.13) - 2024-05-14

### Объединено

- feat: запись последнего просмотра в супервизоре [`#4345`](https://github.com/nocobase/nocobase/pull/4345)
- fix: исправление демо-бага [`#4348`](https://github.com/nocobase/nocobase/pull/4348)
- chore: замена имени сниппета [`#4346`](https://github.com/nocobase/nocobase/pull/4346)
- chore(deps-dev): обновление rc-tree-select с версии 5.5.5 до 5.20.0 [`#4340`](https://github.com/nocobase/nocobase/pull/4340)
- chore(deps): обновление markdown-it и @types/markdown-it [`#4343`](https://github.com/nocobase/nocobase/pull/4343)
- refactor: улучшение добавления лицензии [`#4326`](https://github.com/nocobase/nocobase/pull/4326)
- fix(plugin-workflow-request): исправление ignoreFail в синхронном режиме [`#4334`](https://github.com/nocobase/nocobase/pull/4334)
- fix: ошибка блока может быть удалена [`#4329`](https://github.com/nocobase/nocobase/pull/4329)
- fix: создание канбан-блока вызывает ошибку [`#4332`](https://github.com/nocobase/nocobase/pull/4332)
- fix(logger): путь загрузки [`#4327`](https://github.com/nocobase/nocobase/pull/4327)
- fix(logger): список файлов логов по имени приложения [`#4325`](https://github.com/nocobase/nocobase/pull/4325)

### Коммиты

- chore(versions): 😊 публикация v1.0.0-alpha.13 [`3e7d85b`](https://github.com/nocobase/nocobase/commit/3e7d85b8fac8989a959fe63b8a3c28e8a1a8ba49)
- fix: перезапуск приложения после обновления плагина [`91c24ef`](https://github.com/nocobase/nocobase/commit/91c24efd0ba6fdd5bc0fc55f7fc8a22411059820)
- chore(CI): выполнение задач при изменении yarn.lock [`325a415`](https://github.com/nocobase/nocobase/commit/325a415a99ddff4e71ee35e14936144bc6749494)

## [v1.0.0-alpha.12](https://github.com/nocobase/nocobase/compare/v1.0.0-alpha.11...v1.0.0-alpha.12) - 2024-05-13

### Объединено

- fix: коллекция поддерживает настройку поля заголовка [`#4322`](https://github.com/nocobase/nocobase/pull/4322)
- fix: создание поля древовидной коллекции [`#4321`](https://github.com/nocobase/nocobase/pull/4321)
- feat: стратегия со списком ресурсов [`#4312`](https://github.com/nocobase/nocobase/pull/4312)
- chore: тестирование e2e CI [`#4314`](https://github.com/nocobase/nocobase/pull/4314)
- test: e2e тест [`#4316`](https://github.com/nocobase/nocobase/pull/4316)

### Коммиты

- chore(versions): 😊 публикация v1.0.0-alpha.12 [`52a893f`](https://github.com/nocobase/nocobase/commit/52a893f98981aabe14f46b2ab05fe71873bd2a90)
- chore: обновление журнала изменений [`e7ac08d`](https://github.com/nocobase/nocobase/commit/e7ac08da8d4ed1b2752aee7dd03575bcc6b6100a)
- chore(CI): пропуск комментариев в основной ветке [`819ac79`](https://github.com/nocobase/nocobase/commit/819ac79f1a7335bf37c9caba3e818b75e0bfbdb9)

## [v1.0.0-alpha.11](https://github.com/nocobase/nocobase/compare/v1.0.0-alpha.10...v1.0.0-alpha.11) - 2024-05-11

### Объединено

- fix(plugin-workflow-aggregate): исправление выбора поля ассоциации [`#4315`](https://github.com/nocobase/nocobase/pull/4315)

### Коммиты

- chore(versions): 😊 публикация v1.0.0-alpha.11 [`fcd368c`](https://github.com/nocobase/nocobase/commit/fcd368cee36a25e150e5b79553dec14ee2db6cf1)
- chore: обновление журнала изменений [`d86591b`](https://github.com/nocobase/nocobase/commit/d86591b2022d953aea3209b726622549139b1353)

## [v1.0.0-alpha.10](https://github.com/nocobase/nocobase/compare/v1.0.0-alpha.9...v1.0.0-alpha.10) - 2024-05-11

### Объединено

- perf(e2e): сокращение времени выполнения e2e [`#4280`](https://github.com/nocobase/nocobase/pull/4280)
- fix: параметр fireImmediately в правиле связывания должен быть true [`#4303`](https://github.com/nocobase/nocobase/pull/4303)
- refactor: экспорт AuthenticatorsContextProvider и добавление client.d.ts [`#4311`](https://github.com/nocobase/nocobase/pull/4311)
- test: оптимизация calculationNode e2e [`#4310`](https://github.com/nocobase/nocobase/pull/4310)
- fix: поддержка admin.xx статики [`#4304`](https://github.com/nocobase/nocobase/pull/4304)

### Коммиты

- chore(versions): 😊 публикация v1.0.0-alpha.10 [`814d5cb`](https://github.com/nocobase/nocobase/commit/814d5cb2d2b259bfaf0a9e24fe531513a954410f)
- chore: обновление журнала изменений [`f2db121`](https://github.com/nocobase/nocobase/commit/f2db1218b02585da252831c8a572e2b4f2903f9e)
- Update README.md [`5fb0081`](https://github.com/nocobase/nocobase/commit/5fb0081236578f07c73bf921059b9a5f209c8a22)

## [v1.0.0-alpha.9](https://github.com/nocobase/nocobase/compare/v1.0.0-alpha.8...v1.0.0-alpha.9) - 2024-05-09

### Объединено

- chore: CI для релиза [`#4306`](https://github.com/nocobase/nocobase/pull/4306)

### Коммиты

- chore(versions): 😊 публикация v1.0.0-alpha.9 [`9ecdf9b`](https://github.com/nocobase/nocobase/commit/9ecdf9bc086a66b0418de25f9009e67b1f21f069)

## [v1.0.0-alpha.8](https://github.com/nocobase/nocobase/compare/v1.0.0-alpha.7...v1.0.0-alpha.8) - 2024-05-09

### Объединено

- chore: CI для релиза [`#4305`](https://github.com/nocobase/nocobase/pull/4305)
- chore: CI для релиза [`#4302`](https://github.com/nocobase/nocobase/pull/4302)
- chore: оптимизация таймаута для e2e [`#4276`](https://github.com/nocobase/nocobase/pull/4276)
- feat(plugin-workflow-request): поддержка типа "application/x-www-form-urlencoded" [`#4296`](https://github.com/nocobase/nocobase/pull/4296)

### Коммиты

- chore: обновление журнала изменений [`556dfcd`](https://github.com/nocobase/nocobase/commit/556dfcd0e342f390142257cfe80a9e7ce3cee0ad)
- chore(versions): 😊 публикация v1.0.0-alpha.8 [`d57ebbd`](https://github.com/nocobase/nocobase/commit/d57ebbdb44cb7b93c8723838031ddb071f578dd1)
- chore: обновление CI для релиза [`58c3c0f`](https://github.com/nocobase/nocobase/commit/58c3c0fc6a84521464f58a3a8fac13c2ceae40a0)

## [v1.0.0-alpha.7](https://github.com/nocobase/nocobase/compare/v1.0.0-alpha.6...v1.0.0-alpha.7) - 2024-05-09

### Объединено

- chore: CI для релиза [`#4293`](https://github.com/nocobase/nocobase/pull/4293)
- fix(plugin-workflow-custom-action-trigger): исправление локализации [`#4298`](https://github.com/nocobase/nocobase/pull/4298)
- style: улучшение стиля дочерних действий [`#4289`](https://github.com/nocobase/nocobase/pull/4289)
- fix: ошибка настройки области данных в разрешениях действий [`#4301`](https://github.com/nocobase/nocobase/pull/4301)
- test conditionNode e2e [`#4295`](https://github.com/nocobase/nocobase/pull/4295)
- fix: исправление бага [`#4300`](https://github.com/nocobase/nocobase/pull/4300)
- fix: поле ассоциативной коллекции не должно поддерживать сортировку [`#4288`](https://github.com/nocobase/nocobase/pull/4288)
- Fix/doc multi lang change [`#4299`](https://github.com/nocobase/nocobase/pull/4299)
- feat(client): добавление скрытой опции интерфейса [`#4279`](https://github.com/nocobase/nocobase/pull/4279)
- feat: столбец таблицы поддерживает фиксацию справа или слева [`#4260`](https://github.com/nocobase/nocobase/pull/4260)
- fix: поле коллекции поддерживает x-use-component-props [`#4264`](https://github.com/nocobase/nocobase/pull/4264)
- fix: обновление демо-документации [`#4262`](https://github.com/nocobase/nocobase/pull/4262)
- refactor(plugin-workflow): миграция триггера прямого действия в триггер пользовательского действия [`#4253`](https://github.com/nocobase/nocobase/pull/4253)
- feat: поддержка мобильного блока iframe и свойств панели инструментов [`#4292`](https://github.com/nocobase/nocobase/pull/4292)
- fix: отсутствие свойств панели инструментов [`#4291`](https://github.com/nocobase/nocobase/pull/4291)
- fix: actionSchemaToolbar поддерживает x-toolbar-props [`#4286`](https://github.com/nocobase/nocobase/pull/4286)
- refactor: внешний источник данных, создание только основной коллекции [`#4287`](https://github.com/nocobase/nocobase/pull/4287)
- feat: добавление блоков Gantt и Kanban в всплывающих окнах/выдвижных панелях [`#4277`](https://github.com/nocobase/nocobase/pull/4277)
- fix: ошибка "Maximum call stack size exceeded" при выборе ассоциации в подтаблице [`#4278`](https://github.com/nocobase/nocobase/pull/4278)

### Коммиты

- chore(versions): 😊 публикация v1.0.0-alpha.7 [`24590cd`](https://github.com/nocobase/nocobase/commit/24590cdd74cf6f34dfecedcdda4b8e78dbdd1152)
- fix(Server): парсинг имени плагина [`61338ee`](https://github.com/nocobase/nocobase/commit/61338eedb78fbdf3457ffddd9666297e048acaf6)
- chore: обновление журнала изменений [`8ae7d48`](https://github.com/nocobase/nocobase/commit/8ae7d481bfdcd5254327377aef477160bb5c31dd)

## [v1.0.0-alpha.6](https://github.com/nocobase/nocobase/compare/v1.0.0-alpha.5...v1.0.0-alpha.6) - 2024-05-07

### Объединено

- feat: блок деталей поддерживает правило связывания [`#4221`](https://github.com/nocobase/nocobase/pull/4221)
- fix: массовое удаление полей коллекции не должно закрывать модальное окно [`#4263`](https://github.com/nocobase/nocobase/pull/4263)

### Коммиты

- chore(versions): 😊 публикация v1.0.0-alpha.6 [`a2d8870`](https://github.com/nocobase/nocobase/commit/a2d8870fdfecdec6c835d1a0aa367dcdc52c0029)
- chore: добавление generate-npmignore.sh [`140a3a4`](https://github.com/nocobase/nocobase/commit/140a3a421ff5dd6a7a59638c01fafda6b92cae38)
- chore: обновление журнала изменений [`080fc78`](https://github.com/nocobase/nocobase/commit/080fc78c1a744d47e010b3bbe5840446775800e4)

## [v1.0.0-alpha.5](https://github.com/nocobase/nocobase/compare/v1.0.0-alpha.4...v1.0.0-alpha.5) - 2024-05-07

### Объединено

- feat(database): добавление параметров сортировки по умолчанию в запрос [`#4231`](https://github.com/nocobase/nocobase/pull/4231)
- fix: переключение поля даты правила связывания с выражения на константное значение отображает "Invalid Date" [`#4251`](https://github.com/nocobase/nocobase/pull/4251)
- fix: поля коллекции должны обновляться после редактирования при синхронизации из базы данных [`#4224`](https://github.com/nocobase/nocobase/pull/4224)

### Коммиты

- chore(versions): 😊 публикация v1.0.0-alpha.5 [`3c3e68a`](https://github.com/nocobase/nocobase/commit/3c3e68acdc2a7696d17637ca1d19705ba16a23f6)
- chore: обновление журнала изменений [`a5a270d`](https://github.com/nocobase/nocobase/commit/a5a270d64190814373df10f55c3ae7457f6d62a5)

## [v1.0.0-alpha.4](https://github.com/nocobase/nocobase/compare/v1.0.0-alpha.3...v1.0.0-alpha.4) - 2024-05-02

### Объединено

- fix(plugin-workflow-request): исправление лога ответа [`#4249`](https://github.com/nocobase/nocobase/pull/4249)
- fix(plugin-workflow): исправление опечатки в e2e [`#4247`](https://github.com/nocobase/nocobase/pull/4247)
- fix(plugin-workflow): исправление дублирования запуска события расписания в нескольких приложениях [`#4201`](https://github.com/nocobase/nocobase/pull/4201)
- fix(client): исправление ошибки в компоненте переменных [`#4248`](https://github.com/nocobase/nocobase/pull/4248)
- client components [`#4216`](https://github.com/nocobase/nocobase/pull/4216)
- fix(logger): проблема кэширования логов шлюза и обновление winston [`#4250`](https://github.com/nocobase/nocobase/pull/4250)

### Коммиты

- chore(versions): 😊 публикация v1.0.0-alpha.4 [`7d24e11`](https://github.com/nocobase/nocobase/commit/7d24e11229ef1fd0c5ea797407125bdab4c4a032)
- chore: обновление журнала изменений [`6fbe77d`](https://github.com/nocobase/nocobase/commit/6fbe77d10c758f47288c5321cbff34c1b51c2d10)

## [v1.0.0-alpha.3](https://github.com/nocobase/nocobase/compare/v1.0.0-alpha.2...v1.0.0-alpha.3) - 2024-04-30

### Объединено

- chore: добавление информации об авторских правах в заголовок файла [`#4028`](https://github.com/nocobase/nocobase/pull/4028)
- fix: обновление подприложения [`#4246`](https://github.com/nocobase/nocobase/pull/4246)
- refactor: выделение в SetTheCountOfColumnsDisplayedInARow [`#4211`](https://github.com/nocobase/nocobase/pull/4211)
- refactor: поддержка подтаблиц и поддеталей для древовидной коллекции [`#4225`](https://github.com/nocobase/nocobase/pull/4225)
- chore: обновление vitest [`#4232`](https://github.com/nocobase/nocobase/pull/4232)
- fix: восстановление резервной копии до версии 1.0 [`#4228`](https://github.com/nocobase/nocobase/pull/4228)
- chore: сообщение об ошибке при восстановлении резервной копии [`#4218`](https://github.com/nocobase/nocobase/pull/4218)
- fix: улучшение прокси статических файлов плагина [`#4227`](https://github.com/nocobase/nocobase/pull/4227)
- fix: ошибка порядка сборки [`#4223`](https://github.com/nocobase/nocobase/pull/4223)
- fix: отсутствие параметра pageSize при настройке сортировки для столбца [`#4219`](https://github.com/nocobase/nocobase/pull/4219)

### Коммиты

- chore(versions): 😊 публикация v1.0.0-alpha.3 [`2ba022a`](https://github.com/nocobase/nocobase/commit/2ba022ac1f7cdd564852604e58dbf9ca1e3f8349)
- chore: обновление журнала изменений [`f366c39`](https://github.com/nocobase/nocobase/commit/f366c39fda34c5717429a415d442d30967ead929)

## [v1.0.0-alpha.2](https://github.com/nocobase/nocobase/compare/v1.0.0-alpha.1...v1.0.0-alpha.2) - 2024-04-29

### Объединено

- fix: исправление ошибки iframe [`#4217`](https://github.com/nocobase/nocobase/pull/4217)

### Коммиты

- chore(versions): 😊 публикация v1.0.0-alpha.2 [`b7fb765`](https://github.com/nocobase/nocobase/commit/b7fb765fca2fe94919d5390c2254abc297ca7995)
- Update README.md [`edf4ece`](https://github.com/nocobase/nocobase/commit/edf4ece1efa5d3bc02f5b41fa11a5e2e20737bd5)
- fix(pm): парсинг имени [`c5b803a`](https://github.com/nocobase/nocobase/commit/c5b803a75008eb1b7ea885d7f53d0800a443e41f)

## [v1.0.0-alpha.1](https://github.com/nocobase/nocobase/compare/v0.21.0-alpha.16...v1.0.0-alpha.1) - 2024-04-29

### Объединено

- chore(versions): 😊 публикация v1.0.0-alpha.1 [`#4186`](https://github.com/nocobase/nocobase/pull/4186)

### Коммиты

- chore: обновление журнала изменений [`a29fcfd`](https://github.com/nocobase/nocobase/commit/a29fcfd028798b37b014d6bff24d7980e3e6228d)

## [v0.21.0-alpha.16](https://github.com/nocobase/nocobase/compare/v0.21.0-alpha.15...v0.21.0-alpha.16) - 2024-04-28

### Объединено

- feat(plugin-workflow): обновление списка после синхронизации [`#4177`](https://github.com/nocobase/nocobase/pull/4177)
- feat(plugin-workflow): отображение ключа рабочего процесса как подсказки в заголовке [`#4178`](https://github.com/nocobase/nocobase/pull/4178)
- test(plugin-workflow): добавление тестовых случаев [`#4199`](https://github.com/nocobase/nocobase/pull/4199)
- chore: заголовок кэширования API [`#4203`](https://github.com/nocobase/nocobase/pull/4203)
- feat: загрузка vditor из локальных зависимостей [`#4190`](https://github.com/nocobase/nocobase/pull/4190)
- test: тест разделителя числового поля [`#4204`](https://github.com/nocobase/nocobase/pull/4204)
- fix: числовое поле должно поддерживать настройку разделителя [`#4197`](https://github.com/nocobase/nocobase/pull/4197)
- fix(plugin-workflow): улучшение опыта использования [`#4195`](https://github.com/nocobase/nocobase/pull/4195)
- chore: оптимизация формулировок предупреждений для импорта и экспорта [`#4196`](https://github.com/nocobase/nocobase/pull/4196)
- refactor: менеджер коллекций внешнего источника данных [`#4193`](https://github.com/nocobase/nocobase/pull/4193)
- fix: ошибка переменной окружения [`#4191`](https://github.com/nocobase/nocobase/pull/4191)
- fix: пустой оператор с полем ассоциации [`#4189`](https://github.com/nocobase/nocobase/pull/4189)
- chore: добавление e2e-тестов [`#4184`](https://github.com/nocobase/nocobase/pull/4184)
- fix: версия vditor [`#4183`](https://github.com/nocobase/nocobase/pull/4183)
- refactor: улучшение локализации шаблона данных формы [`#4188`](https://github.com/nocobase/nocobase/pull/4188)
- test: добавление автоматизированных тестов [`#4098`](https://github.com/nocobase/nocobase/pull/4098)
- chore: экземпляр логгера источника данных [`#4181`](https://github.com/nocobase/nocobase/pull/4181)
- chore: получение экземпляра базы данных в репозитории отношений [`#4179`](https://github.com/nocobase/nocobase/pull/4179)
- chore: добавление e2e-тестов для переменных [`#4152`](https://github.com/nocobase/nocobase/pull/4152)
- chore: сообщение отладки коллекции [`#4176`](https://github.com/nocobase/nocobase/pull/4176)
- chore: unsupportedFields в представлении коллекции [`#4155`](https://github.com/nocobase/nocobase/pull/4155)
- feat: добавление плагина plugin-field-markdown-vditor [`#4065`](https://github.com/nocobase/nocobase/pull/4065)
- fix: ошибка ACL действия формы массового редактирования [`#4166`](https://github.com/nocobase/nocobase/pull/4166)
- fix: автоматическое создание внешнего ключа UUID в поле связи [`#4160`](https://github.com/nocobase/nocobase/pull/4160)
- fix(plugin-fm): исправление запутанного подсказки ограничения размера [`#4153`](https://github.com/nocobase/nocobase/pull/4153)
- fix(users): улучшение users:updateProfile [`#4162`](https://github.com/nocobase/nocobase/pull/4162)
- fix(client): получение URL API [`#4161`](https://github.com/nocobase/nocobase/pull/4161)
- feat: удаление plugin-ui-routes-storage [`#4140`](https://github.com/nocobase/nocobase/pull/4140)
- fix: фиксация версии cytoscape [`#4158`](https://github.com/nocobase/nocobase/pull/4158)
- refactor: шаблон коллекции поддерживает presetFieldsDisabled [`#4159`](https://github.com/nocobase/nocobase/pull/4159)
- fix: схема сетки [`#4157`](https://github.com/nocobase/nocobase/pull/4157)
- client unit test [`#4150`](https://github.com/nocobase/nocobase/pull/4150)
- fix: обновление связи "принадлежит многим", где целевой ключ не является первичным ключом [`#4146`](https://github.com/nocobase/nocobase/pull/4146)
- refactor: улучшение локализации шаблона данных формы [`#4148`](https://github.com/nocobase/nocobase/pull/4148)
- fix(database): имя столбца в массивном поле [`#4110`](https://github.com/nocobase/nocobase/pull/4110)
- test: e2e-тест обновления при действии [`#4147`](https://github.com/nocobase/nocobase/pull/4147)
- fix(custom-request): поддержка конфигурации типа контента [`#4144`](https://github.com/nocobase/nocobase/pull/4144)
- chore: прекращение поддержки переменной текущей записи в форме [`#4063`](https://github.com/nocobase/nocobase/pull/4063)
- feat(Theme): добавление токенов [`#4137`](https://github.com/nocobase/nocobase/pull/4137)
- fix(client): исправление предупреждений [`#4143`](https://github.com/nocobase/nocobase/pull/4143)
- style: улучшение стиля tableActionColumn [`#4138`](https://github.com/nocobase/nocobase/pull/4138)
- fix: улучшение стиля actionBar [`#4123`](https://github.com/nocobase/nocobase/pull/4123)
- chore: предупреждающее сообщение при конфликте onDelete [`#4141`](https://github.com/nocobase/nocobase/pull/4141)
- fix(plugin-workflow-manual): разрешить передачу узла без исполнителя [`#4139`](https://github.com/nocobase/nocobase/pull/4139)

### Коммиты

- chore(versions): 😊 публикация v0.21.0-alpha.16 [`fdd3ca6`](https://github.com/nocobase/nocobase/commit/fdd3ca614e2b016744a47cfb5c6a9d59e996fd76)
- chore: повышение стабильности e2e [`8524bea`](https://github.com/nocobase/nocobase/commit/8524beae6796333cd96f6d0536937ef869f66b2b)
- chore: повышение стабильности e2e [`08f6872`](https://github.com/nocobase/nocobase/commit/08f68720bf2677604befd55f662f2a8c039057d4)

## [v0.21.0-alpha.15](https://github.com/nocobase/nocobase/compare/v0.21.0-alpha.14...v0.21.0-alpha.15) - 2024-04-23

### Объединено

- chore: API менеджера источников данных [`#4124`](https://github.com/nocobase/nocobase/pull/4124)
- fix(plugin-workflow-manual): исправление ошибки парсинга исполнителей [`#4125`](https://github.com/nocobase/nocobase/pull/4125)

### Коммиты

- chore(versions): 😊 публикация v0.21.0-alpha.15 [`05504b5`](https://github.com/nocobase/nocobase/commit/05504b5678e3e442a104ca34430ae7c7242c57ef)
- chore: обновление журнала изменений [`ac30ccc`](https://github.com/nocobase/nocobase/commit/ac30ccc63e94947267b1be51a1e7326e6d3faf6a)
- fix(ui-schema-storage): разрешить uiSchemas:getParentJsonSchema [`4b51a43`](https://github.com/nocobase/nocobase/commit/4b51a43786d694cf8da649f404428a847728895a)

## [v0.21.0-alpha.14](https://github.com/nocobase/nocobase/compare/v0.21.0-alpha.13...v0.21.0-alpha.14) - 2024-04-22

### Объединено

- fix: загрузка поля связи в коллекции [`#4122`](https://github.com/nocobase/nocobase/pull/4122)
- perf: удаление всех анимаций Skeleton [`#4113`](https://github.com/nocobase/nocobase/pull/4113)
- test: добавление e2e [`#4121`](https://github.com/nocobase/nocobase/pull/4121)
- chore(data-vi): настройка API [`#4116`](https://github.com/nocobase/nocobase/pull/4116)
- fix: триггер scheduleEventTrigger [`#4114`](https://github.com/nocobase/nocobase/pull/4114)
- feat(plugin-workflow): добавление проверки для периодической отправки [`#4119`](https://github.com/nocobase/nocobase/pull/4119)

### Коммиты

- chore(versions): 😊 публикация v0.21.0-alpha.14 [`7e4ad0d`](https://github.com/nocobase/nocobase/commit/7e4ad0daae8b69559f8ad6fe286c7603efbc4ccc)
- chore: обновление журнала изменений [`e25d155`](https://github.com/nocobase/nocobase/commit/e25d15518e8f5ebce8705c531c198344669d94d4)
- chore: добавление устаревшего комментария для CompatibleSchemaInitializer [`451bcca`](https://github.com/nocobase/nocobase/commit/451bcca06f4c0b61630c7f4f6a5aba0194984560)

## [v0.21.0-alpha.13](https://github.com/nocobase/nocobase/compare/v0.21.0-alpha.12...v0.21.0-alpha.13) - 2024-04-21

### Объединено

- feat: добавление filterOtherRecordsCollection для DataBlockInitializer [`#4117`](https://github.com/nocobase/nocobase/pull/4117)
- refactor: оптимизация CollectionField [`#4111`](https://github.com/nocobase/nocobase/pull/4111)
- fix: улучшение миграции поля сортировки [`#4112`](https://github.com/nocobase/nocobase/pull/4112)

### Коммиты

- chore(versions): 😊 публикация v0.21.0-alpha.13 [`9b20b04`](https://github.com/nocobase/nocobase/commit/9b20b04e9811b347a974c647c0dc28e8caf1da5c)
- feat(database): улучшение текстового поля [`c26e43a`](https://github.com/nocobase/nocobase/commit/c26e43a34f7e7d2aca620f2163a5b433711fa281)
- chore: обновление журнала изменений [`52893e2`](https://github.com/nocobase/nocobase/commit/52893e213e3ca14760e8481a209293b9165bcfdc)

## [v0.21.0-alpha.12](https://github.com/nocobase/nocobase/compare/v0.21.0-alpha.11...v0.21.0-alpha.12) - 2024-04-19

### Объединено

- fix: компонент поля [`#4102`](https://github.com/nocobase/nocobase/pull/4102)
- fix: поддержка режима добавления для выбора связи [`#4108`](https://github.com/nocobase/nocobase/pull/4108)
- fix: опция цели createdBy & updatedBy [`#4109`](https://github.com/nocobase/nocobase/pull/4109)
- fix(linkage-rule): поддержка пустого условия в правилах связывания [`#4103`](https://github.com/nocobase/nocobase/pull/4103)
- fix: добавление SanitizedCollectionProvider [`#4100`](https://github.com/nocobase/nocobase/pull/4100)
- fix: ошибка цели древовидной коллекции [`#4105`](https://github.com/nocobase/nocobase/pull/4105)
- fix: добавление ClearCollectionFieldContext [`#4101`](https://github.com/nocobase/nocobase/pull/4101)
- feat: улучшение блока формы [`#4099`](https://github.com/nocobase/nocobase/pull/4099)
- chore: миграция параметров сортировки в поле сортировки [`#4011`](https://github.com/nocobase/nocobase/pull/4011)
- feat: поддержка параметра сортировки в appends [`#4056`](https://github.com/nocobase/nocobase/pull/4056)
- feat(data-vi): круговая диаграмма теперь принимает отрицательные числа, исправление T-4075 [`#4094`](https://github.com/nocobase/nocobase/pull/4094)
- fix(data-vi): число становится строкой после преобразования точности [`#4092`](https://github.com/nocobase/nocobase/pull/4092)
- fix: кодирование параметров URL [`#4055`](https://github.com/nocobase/nocobase/pull/4055)
- test(plugin-workflow): добавлен тестовый случай для дублирования запуска рабочего процесса по расписанию [`#3817`](https://github.com/nocobase/nocobase/pull/3817)
- perf(LinkageRules): решение проблем с задержками [`#4090`](https://github.com/nocobase/nocobase/pull/4090)
- fix(subTable): не должно отображаться "Разрешить добавление новых данных" [`#4086`](https://github.com/nocobase/nocobase/pull/4086)
- fix: отсутствующие поля [`#4083`](https://github.com/nocobase/nocobase/pull/4083)
- fix: ошибка пагинации при выборе таблицы [`#4078`](https://github.com/nocobase/nocobase/pull/4078)
- fix: сброс страницы при установке области данных блока [`#4081`](https://github.com/nocobase/nocobase/pull/4081)

### Коммиты

- chore(versions): 😊 публикация v0.21.0-alpha.12 [`a8eb2b7`](https://github.com/nocobase/nocobase/commit/a8eb2b719c0de798d141ebc8db349e24ff0f89f0)
- chore: обновление журнала изменений [`57242c1`](https://github.com/nocobase/nocobase/commit/57242c1ce608fbe0ae15611f3f791d06dbdcbc90)
- fix: удаление sock-файлов перед запуском nocobase [`3445001`](https://github.com/nocobase/nocobase/commit/3445001540ec05b3cc2ffeb542debc2683582c37)

## [v0.21.0-alpha.11](https://github.com/nocobase/nocobase/compare/v0.21.0-alpha.10...v0.21.0-alpha.11) - 2024-04-17

### Объединено

- fix: список ролей для пользовательского запроса [`#4074`](https://github.com/nocobase/nocobase/pull/4074)
- fix: парсинг ISO-недели [`#4068`](https://github.com/nocobase/nocobase/pull/4068)
- fix(sourceId): предотвращение ошибок [`#4077`](https://github.com/nocobase/nocobase/pull/4077)
- fix(sql-collection): невозможность выбора интерфейса при настройке полей [`#4079`](https://github.com/nocobase/nocobase/pull/4079)
- fix: загрузка с исходным полем [`#4075`](https://github.com/nocobase/nocobase/pull/4075)
- fix: удаление правил связывания операций не применяется в реальном времени [`#4058`](https://github.com/nocobase/nocobase/pull/4058)
- fix(core): исправление ошибки округления в оценщике формул [`#4070`](https://github.com/nocobase/nocobase/pull/4070)
- test: добавление e2e для режима загрузки данных [`#4069`](https://github.com/nocobase/nocobase/pull/4069)
- fix(filterForm): избежание дублирования имен [`#4071`](https://github.com/nocobase/nocobase/pull/4071)
- chore: оптимизация заголовка блока [`#4040`](https://github.com/nocobase/nocobase/pull/4040)
- fix: синхронизация значения по умолчанию в представлении [`#4067`](https://github.com/nocobase/nocobase/pull/4067)
- fix(defaultValue): исправление исчезновения значений по умолчанию после обновления страницы [`#4066`](https://github.com/nocobase/nocobase/pull/4066)
- refactor: блок диаграммы Ганта [`#4059`](https://github.com/nocobase/nocobase/pull/4059)
- fix: большое поле подтаблицы должно поддерживать переменное значение по умолчанию [`#4062`](https://github.com/nocobase/nocobase/pull/4062)
- chore(Theme): установка размера шрифта по умолчанию для темы Compact на 16 [`#4064`](https://github.com/nocobase/nocobase/pull/4064)
- test: добавление e2e для действий [`#4053`](https://github.com/nocobase/nocobase/pull/4053)

### Коммиты

- chore(versions): 😊 публикация v0.21.0-alpha.11 [`438a059`](https://github.com/nocobase/nocobase/commit/438a059c7b742cb9922b61f8ecdd7f6357a575fb)
- fix: ошибка getCurrentTimezone [`fa8e890`](https://github.com/nocobase/nocobase/commit/fa8e89067940d0373bf34d4d3f833bd88ffa77f5)
- chore: обновление журнала изменений [`68bc73b`](https://github.com/nocobase/nocobase/commit/68bc73b9877668f2da2c3669314233c3cb1e15ea)

## [v0.21.0-alpha.10](https://github.com/nocobase/nocobase/compare/v0.21.0-alpha.9...v0.21.0-alpha.10) - 2024-04-16

### Объединено

- chore: настройка предупреждений импорта и экспорта [`#4060`](https://github.com/nocobase/nocobase/pull/4060)

### Коммиты

- chore(versions): 😊 публикация v0.21.0-alpha.10 [`d76d657`](https://github.com/nocobase/nocobase/commit/d76d65762214aa0854eef348300a0ff802eea940)
- chore: обновление журнала изменений [`04f3daa`](https://github.com/nocobase/nocobase/commit/04f3daa5bac874d52d60b4e8864b8dc8c57d1470)

## [v0.21.0-alpha.9](https://github.com/nocobase/nocobase/compare/v0.21.0-alpha.8...v0.21.0-alpha.9) - 2024-04-16

### Объединено

- fix(variable): отсутствующие переменные и некорректные переводы [`#4054`](https://github.com/nocobase/nocobase/pull/4054)
- test: добавление модульных тестов бэкенда [`#4000`](https://github.com/nocobase/nocobase/pull/4000)
- fix: улучшение элемента карточки [`#4036`](https://github.com/nocobase/nocobase/pull/4036)

### Коммиты

- chore(versions): 😊 публикация v0.21.0-alpha.9 [`64e12bb`](https://github.com/nocobase/nocobase/commit/64e12bb08bbca58490cdfe4c552b2423654803c0)
- chore: обновление журнала изменений [`7d516bd`](https://github.com/nocobase/nocobase/commit/7d516bdc76b87853bb70ee11f76bed99f7a7e834)

## [v0.21.0-alpha.8](https://github.com/nocobase/nocobase/compare/v0.21.0-alpha.7...v0.21.0-alpha.8) - 2024-04-16

### Объединено

- chore(acl): отключение регистрации действий для полей связи [`#4014`](https://github.com/nocobase/nocobase/pull/4014)
- fix(variable): исправление ошибок переменной родительской записи в области данных [`#4039`](https://github.com/nocobase/nocobase/pull/4039)
- test(e2e): добавление проверок значений полей [`#4034`](https://github.com/nocobase/nocobase/pull/4034)
- feat(Variable): добавление новой переменной [`#4025`](https://github.com/nocobase/nocobase/pull/4025)
- feat: запуск e2e с профессиональными плагинами [`#3890`](https://github.com/nocobase/nocobase/pull/3890)
- fix: исправление бага [`#4038`](https://github.com/nocobase/nocobase/pull/4038)
- fix: оператор массива с полем в camelCase [`#4032`](https://github.com/nocobase/nocobase/pull/4032)

### Коммиты

- chore(versions): 😊 публикация v0.21.0-alpha.8 [`8c779b4`](https://github.com/nocobase/nocobase/commit/8c779b4cf6f6d3da4699cddb0c5d76ca3cb05135)
- feat: добавление в дополнительные блоки [`fe4be82`](https://github.com/nocobase/nocobase/commit/fe4be822b9c7ea081d33a83bce0ae3902acaa596)
- chore: обновление журнала изменений [`db32005`](https://github.com/nocobase/nocobase/commit/db3200516dabe80175b0e6f1fa1659babdcf5a87)

## [v0.21.0-alpha.7](https://github.com/nocobase/nocobase/compare/v0.21.0-alpha.6...v0.21.0-alpha.7) - 2024-04-13

### Объединено

- fix: scopeKeyOptions должен быть получен в реальном времени [`#4029`](https://github.com/nocobase/nocobase/pull/4029)
- fix(addText): следует использовать FormItemSchemaToolbar вместо BlockSchema… [`#3963`](https://github.com/nocobase/nocobase/pull/3963)
- feat: однократная регистрация хука в менеджере источников данных [`#4024`](https://github.com/nocobase/nocobase/pull/4024)
- fix: сниппеты [`#4030`](https://github.com/nocobase/nocobase/pull/4030)
- fix: ошибка при запуске vitest в одиночном режиме [`#4031`](https://github.com/nocobase/nocobase/pull/4031)
- feat(data-vi): улучшение пользовательского опыта (см. pull request) [`#4013`](https://github.com/nocobase/nocobase/pull/4013)
- test: добавление модульного теста для frontend [`#3991`](https://github.com/nocobase/nocobase/pull/3991)
- feat: поддержка опции "Others" во всплывающем окне [`#4015`](https://github.com/nocobase/nocobase/pull/4015)
- fix(collection-manager): отсутствие обновления после переопределения поля [`#4022`](https://github.com/nocobase/nocobase/pull/4022)
- chore: добавление предупреждений при экспорте и импорте [`#4027`](https://github.com/nocobase/nocobase/pull/4027)
- refactor: поддержка сортировки для полей, сгруппированных по источникам данных [`#4023`](https://github.com/nocobase/nocobase/pull/4023)
- fix(plugin-acl): сниппет pm.acl.roles [`#4026`](https://github.com/nocobase/nocobase/pull/4026)
- test: e2e-тест блока имени ассоциации [`#4021`](https://github.com/nocobase/nocobase/pull/4021)
- fix: получение URL API [`#4020`](https://github.com/nocobase/nocobase/pull/4020)
- fix(Sub-details): кнопка инициализатора не отображается, если значение поля пустое [`#4019`](https://github.com/nocobase/nocobase/pull/4019)
- fix: инициализатор использует useAassociationName [`#4018`](https://github.com/nocobase/nocobase/pull/4018)
- fix(auth): ошибка входа через CAS при развертывании в подкаталоге [`#4017`](https://github.com/nocobase/nocobase/pull/4017)
- fix(TreeTable): ошибка добавления дочернего элемента [`#4008`](https://github.com/nocobase/nocobase/pull/4008)
- fix: удаление активного поля не должно очищать значение [`#4012`](https://github.com/nocobase/nocobase/pull/4012)
- fix(plugin-acl): сниппет ролей источника данных [`#4016`](https://github.com/nocobase/nocobase/pull/4016)
- fix: после выбора всех, массовое обновление сообщает о невыбранных данных [`#4010`](https://github.com/nocobase/nocobase/pull/4010)
- refactor: таблица древовидной структуры не включена по умолчанию [`#4001`](https://github.com/nocobase/nocobase/pull/4001)
- feat(plugin-workflow-action-trigger): поддержка действий ассоциации для триггера [`#4007`](https://github.com/nocobase/nocobase/pull/4007)
- Update application.ts [`#4006`](https://github.com/nocobase/nocobase/pull/4006)
- fix: настройка поля тегов [`#4009`](https://github.com/nocobase/nocobase/pull/4009)
- fix(users): удаление проверки телефона из-за некорректной проверки иностранных номеров [`#4005`](https://github.com/nocobase/nocobase/pull/4005)
- fix: проверка прав доступа для действия блока ассоциации завершилась ошибкой [`#3994`](https://github.com/nocobase/nocobase/pull/3994)
- refactor: поля для сортировки таблиц не могут выбирать поля с scopekey [`#3984`](https://github.com/nocobase/nocobase/pull/3984)
- fix(Form): недопустимая parentRecord [`#3998`](https://github.com/nocobase/nocobase/pull/3998)
- fix(plugin-workflow): настройка локализации [`#3993`](https://github.com/nocobase/nocobase/pull/3993)
- fix: подтаблица поддерживает настройку allowSelectExistingRecord [`#4004`](https://github.com/nocobase/nocobase/pull/4004)
- fix(auth): страница регистрации не найдена при прямом переходе по URL [`#4002`](https://github.com/nocobase/nocobase/pull/4002)
- chore(database): установка значения NULL, если поле уникально и значение — пустая строка [`#3997`](https://github.com/nocobase/nocobase/pull/3997)
- chore(gateway): сообщение об ошибке с указанием причины [`#3999`](https://github.com/nocobase/nocobase/pull/3999)
- chore(error-handler): отображение сообщения о причине ошибки [`#3996`](https://github.com/nocobase/nocobase/pull/3996)
- fix: восстановление с именем таблицы в camelCase [`#3995`](https://github.com/nocobase/nocobase/pull/3995)
- refactor(plugin-workflow): настройка комментариев [`#3990`](https://github.com/nocobase/nocobase/pull/3990)
- fix: сворачивание и расширение диаграммы Ганта [`#3982`](https://github.com/nocobase/nocobase/pull/3982)
- fix(BulkForm): обязательное поле при переключении на "Изменено на" [`#3965`](https://github.com/nocobase/nocobase/pull/3965)
- fix: перемещение действия [`#3985`](https://github.com/nocobase/nocobase/pull/3985)
- refactor: поле сортировки не должно иметь defaultValue [`#3986`](https://github.com/nocobase/nocobase/pull/3986)
- chore: обновление имен классов плагинов [`#3981`](https://github.com/nocobase/nocobase/pull/3981)
- feat(plugin-workflow-sync): добавление синхронизации при включении multi-app-share-collection [`#3969`](https://github.com/nocobase/nocobase/pull/3969)
- fix(localization): некорректная локализация при первом входе [`#3968`](https://github.com/nocobase/nocobase/pull/3968)
- chore: настройка и добавление комментариев к API [`#3951`](https://github.com/nocobase/nocobase/pull/3951)
- refactor: конфигурация параметров выбора [`#3964`](https://github.com/nocobase/nocobase/pull/3964)
- fix(GridCard): настройка количества столбцов, отображаемых в строке [`#3960`](https://github.com/nocobase/nocobase/pull/3960)
- refactor: только числовые поля формул поддерживают форматирование [`#3962`](https://github.com/nocobase/nocobase/pull/3962)
- chore(plugin-workflow): добавление комментариев [`#3959`](https://github.com/nocobase/nocobase/pull/3959)
- chore: удаление устаревших плагинов формул [`#3939`](https://github.com/nocobase/nocobase/pull/3939)

### Коммиты

- chore(versions): 😊 публикация v0.21.0-alpha.7 [`d66c2ba`](https://github.com/nocobase/nocobase/commit/d66c2baa53a0670ff01dc7d8609f314518b46534)
- chore: обновление документации редактора тем [`71366e3`](https://github.com/nocobase/nocobase/commit/71366e3dea46d6d2af92bde4eca4dedd72800fed)
- test: исправление e2e [`3dcbdf3`](https://github.com/nocobase/nocobase/commit/3dcbdf35922ea770deb7227e4a1e8b06a3cb3296)

## [v0.21.0-alpha.6](https://github.com/nocobase/nocobase/compare/v0.21.0-alpha.5...v0.21.0-alpha.6) - 2024-04-07

### Объединено

- fix(LinkageRules): изменения должны вступать в силу немедленно [`#3958`](https://github.com/nocobase/nocobase/pull/3958)
- fix(Picker): должно отображаться "Разрешить добавление новых данных" [`#3957`](https://github.com/nocobase/nocobase/pull/3957)
- fix(connect-data-blocks): должно немедленно отображаться в выпадающем меню [`#3953`](https://github.com/nocobase/nocobase/pull/3953)
- fix: изменение заголовка левого меню [`#3956`](https://github.com/nocobase/nocobase/pull/3956)
- fix: ошибка провайдера списка шаблонов [`#3950`](https://github.com/nocobase/nocobase/pull/3950)
- refactor: автозаполнение nanoid и uuid [`#3955`](https://github.com/nocobase/nocobase/pull/3955)
- feat: getParentJsonSchema в репозитории UI-схем [`#3690`](https://github.com/nocobase/nocobase/pull/3690)
- fix: сохранение значений полей uuid и nano id с проверкой sequelize [`#3952`](https://github.com/nocobase/nocobase/pull/3952)

### Коммиты

- chore(versions): 😊 публикация v0.21.0-alpha.6 [`6017c01`](https://github.com/nocobase/nocobase/commit/6017c01f0218c33ef4cbbb3bddc3d8cd45fe4c62)
- chore: обновление журнала изменений [`06a9d00`](https://github.com/nocobase/nocobase/commit/06a9d008e3fb96197eac1dae6c8f1b50d2736e35)
- chore: сообщение об ошибке, если коллекция не найдена [`0bb421a`](https://github.com/nocobase/nocobase/commit/0bb421ac4056fa2845b8df1e761108efe8c4ade9)

## [v0.21.0-alpha.5](https://github.com/nocobase/nocobase/compare/v0.21.0-alpha.4...v0.21.0-alpha.5) - 2024-04-07

### Объединено

- fix: throughCollection поддерживает нечеткий поиск [`#3949`](https://github.com/nocobase/nocobase/pull/3949)

### Коммиты

- chore(versions): 😊 публикация v0.21.0-alpha.5 [`b63a685`](https://github.com/nocobase/nocobase/commit/b63a685f84765671154f84e9dca65dc729992a09)
- chore: обновление журнала изменений [`47dffe5`](https://github.com/nocobase/nocobase/commit/47dffe55b54e0c16b0cbc30415c3438f5b9fc977)
- feat: обновление формата лицензии [`62fcc01`](https://github.com/nocobase/nocobase/commit/62fcc01eb38607ee1cdbff446bc0e7376c4476c3)

## [v0.21.0-alpha.4](https://github.com/nocobase/nocobase/compare/v0.21.0-alpha.3...v0.21.0-alpha.4) - 2024-04-07

### Объединено

- fix: getSourceKeyByAssocation [`#3947`](https://github.com/nocobase/nocobase/pull/3947)
- fix(RichText): унификация стиля [`#3946`](https://github.com/nocobase/nocobase/pull/3946)
- fix(connectDataBlocks): добавление FilterBlockProvider в Grid [`#3944`](https://github.com/nocobase/nocobase/pull/3944)
- chore: добавление appVersion в Schema [`#3936`](https://github.com/nocobase/nocobase/pull/3936)
- fix: collectionFieldInterfaceSelect [`#3945`](https://github.com/nocobase/nocobase/pull/3945)
- fix: исправление sourceId шаблонов [`#3941`](https://github.com/nocobase/nocobase/pull/3941)
- fix(collection manager): поддержка настройки индекса для primarykey, nanoid и uuid [`#3943`](https://github.com/nocobase/nocobase/pull/3943)
- fix(plugin-formula-field): исправление контекста компонента [`#3937`](https://github.com/nocobase/nocobase/pull/3937)

### Коммиты

- chore(versions): 😊 публикация v0.21.0-alpha.4 [`3171339`](https://github.com/nocobase/nocobase/commit/31713390b57543d0825aa1bb81a8d191fa39f7f5)
- chore: обновление журнала изменений [`4132100`](https://github.com/nocobase/nocobase/commit/41321004cab7c42f6c1b4454596507ce50ea061e)

## [v0.21.0-alpha.3](https://github.com/nocobase/nocobase/compare/v0.21.0-alpha.2...v0.21.0-alpha.3) - 2024-04-06

### Объединено

- fix: доступные типы для nanoid [`#3942`](https://github.com/nocobase/nocobase/pull/3942)
- fix: автоматическая генерация значений по умолчанию [`#3940`](https://github.com/nocobase/nocobase/pull/3940)
- fix: ошибка вычисления поля формулы [`#3938`](https://github.com/nocobase/nocobase/pull/3938)
- fix: поле формулы поддерживает форматирование [`#3928`](https://github.com/nocobase/nocobase/pull/3928)
- refactor: унификация именования инициализатора вкладок [`#3932`](https://github.com/nocobase/nocobase/pull/3932)
- fix: добавление zIndex к стилю Lightbox overlay [`#3934`](https://github.com/nocobase/nocobase/pull/3934)
- fix(Table): исправление проблемы с отображением содержимого поля связи [`#3930`](https://github.com/nocobase/nocobase/pull/3930)
- fix(evaluators): исправление ошибки flatten массива [`#3931`](https://github.com/nocobase/nocobase/pull/3931)
- refactor: поддержка filterTargetKey для представлений основного источника данных [`#3818`](https://github.com/nocobase/nocobase/pull/3818)
- fix: ошибка вычисления поля формулы [`#3929`](https://github.com/nocobase/nocobase/pull/3929)
- fix: загрузка представления коллекции с принадлежностью ассоциации и исходными параметрами [`#3912`](https://github.com/nocobase/nocobase/pull/3912)
- fix: предупреждение о несохраненных изменениях не должно появляться при закрытии модального окна без изменений [`#3920`](https://github.com/nocobase/nocobase/pull/3920)
- fix(Collapse): исправление ошибки для chinaRegions [`#3925`](https://github.com/nocobase/nocobase/pull/3925)
- fix: формат отображения чисел [`#3924`](https://github.com/nocobase/nocobase/pull/3924)
- fix(defaultValue): значение по умолчанию должно применяться немедленно [`#3923`](https://github.com/nocobase/nocobase/pull/3923)
- feat: поддержка конфигурации refreshDataBlockRequest для действий [`#3882`](https://github.com/nocobase/nocobase/pull/3882)
- refactor: formBlockProvider & detailBlockProvider [`#3898`](https://github.com/nocobase/nocobase/pull/3898)
- feat(data-vi): возможность добавления диаграмм для мобильного клиента [`#3922`](https://github.com/nocobase/nocobase/pull/3922)

### Коммиты

- chore(versions): 😊 публикация v0.21.0-alpha.3 [`d2b8086`](https://github.com/nocobase/nocobase/commit/d2b808671bf36cc345ef80a95a86e42e16a19836)
- chore: обновление журнала изменений [`231f4c7`](https://github.com/nocobase/nocobase/commit/231f4c7cd4f6f9375f440d9f146a0f155aec4b13)

## [v0.21.0-alpha.2](https://github.com/nocobase/nocobase/compare/v0.21.0-alpha.1...v0.21.0-alpha.2) - 2024-04-03

### Объединено

- chore: добавление комментариев к API [`#3919`](https://github.com/nocobase/nocobase/pull/3919)
- fix: исправление Pagination [`#3921`](https://github.com/nocobase/nocobase/pull/3921)
- test(plugin-error-handler): middleware [`#3909`](https://github.com/nocobase/nocobase/pull/3909)
- fix: обновление плагина [`#3895`](https://github.com/nocobase/nocobase/pull/3895)
- fix: пагинация блока диаграммы Ганта [`#3918`](https://github.com/nocobase/nocobase/pull/3918)
- fix: source id равен null [`#3917`](https://github.com/nocobase/nocobase/pull/3917)
- fix(Table): исправление Pagination [`#3916`](https://github.com/nocobase/nocobase/pull/3916)
- fix: получение корректного sourceId [`#3897`](https://github.com/nocobase/nocobase/pull/3897)
- fix(DataScope): исправление проблемы с отсутствием немедленного эффекта после сохранения [`#3910`](https://github.com/nocobase/nocobase/pull/3910)
- fix: initialValue для параметров поля выбора [`#3911`](https://github.com/nocobase/nocobase/pull/3911)
- fix: клик по внешней ссылке [`#3908`](https://github.com/nocobase/nocobase/pull/3908)
- fix(inputNumber): потеря точности в inputNumber [`#3902`](https://github.com/nocobase/nocobase/pull/3902)
- feat(plugin-workflow-action-trigger): добавление глобальных событий действий [`#3883`](https://github.com/nocobase/nocobase/pull/3883)
- docs: добавление комментария к API [`#3868`](https://github.com/nocobase/nocobase/pull/3868)
- fix: ошибка конфигурации vitest [`#3907`](https://github.com/nocobase/nocobase/pull/3907)
- fix: ошибка фиксированной таблицы [`#3901`](https://github.com/nocobase/nocobase/pull/3901)
- fix: ошибка undefined при выводе данных [`#3905`](https://github.com/nocobase/nocobase/pull/3905)
- fix: ошибка ленивой отрисовки [`#3886`](https://github.com/nocobase/nocobase/pull/3886)
- fix: отсутствующие параметры сортировки [`#3906`](https://github.com/nocobase/nocobase/pull/3906)
- refactor: изменение useProps на x-use-component-props [`#3853`](https://github.com/nocobase/nocobase/pull/3853)
- fix(withDynamicSchemaProps): изменение глубокого слияния на поверхностное [`#3899`](https://github.com/nocobase/nocobase/pull/3899)
- fix: добавление кнопки печати в блок истории, ошибка при нажатии [`#3900`](https://github.com/nocobase/nocobase/pull/3900)
- fix: ошибка tar [`#3891`](https://github.com/nocobase/nocobase/pull/3891)
- chore: возврат bigInt как строкового типа [`#3887`](https://github.com/nocobase/nocobase/pull/3887)
- feat(data-vi): область данных для полей фильтра диаграмм [`#3894`](https://github.com/nocobase/nocobase/pull/3894)
- feat: настройка меню добавления нового [`#3884`](https://github.com/nocobase/nocobase/pull/3884)
- fix(plugin-custom-request): исправление диалогового окна кнопки редактирования [`#3893`](https://github.com/nocobase/nocobase/pull/3893)
- fix: отсутствие fieldNames при настройке области данных [`#3892`](https://github.com/nocobase/nocobase/pull/3892)
- fix: ошибка проверки зависимостей при добавлении плагина в режим разработки [`#3848`](https://github.com/nocobase/nocobase/pull/3848)
- fix: вкладки рабочего процесса не существуют [`#3889`](https://github.com/nocobase/nocobase/pull/3889)
- fix: поддержка области данных связанных полей [`#3888`](https://github.com/nocobase/nocobase/pull/3888)
- fix: templateBlockProvider поддерживает добавление связанных полей [`#3866`](https://github.com/nocobase/nocobase/pull/3866)
- chore: API основного источника данных [`#3880`](https://github.com/nocobase/nocobase/pull/3880)
- feat: запуск vitest с покрытием [`#3802`](https://github.com/nocobase/nocobase/pull/3802)
- fix: избежание дублирования ключей меню [`#3885`](https://github.com/nocobase/nocobase/pull/3885)
- fix(data-vi): аномальное отображение двойной оси диаграммы [`#3881`](https://github.com/nocobase/nocobase/pull/3881)
- fix: отказ от обновления при пустом фильтре [`#3777`](https://github.com/nocobase/nocobase/pull/3777)
- chore: обновление поля с атрибутом первичного ключа [`#3852`](https://github.com/nocobase/nocobase/pull/3852)
- refactor: поддержка uuid и nanoid для конфигурации значений по умолчанию [`#3830`](https://github.com/nocobase/nocobase/pull/3830)
- feat: производительность таблицы [`#3791`](https://github.com/nocobase/nocobase/pull/3791)
- fix: setFormValueChanged undefined [`#3879`](https://github.com/nocobase/nocobase/pull/3879)
- fix(client): исправление diabled в динамическом компоненте фильтра [`#3874`](https://github.com/nocobase/nocobase/pull/3874)
- fix(plugin-workflow-parallel): исправление локализации [`#3876`](https://github.com/nocobase/nocobase/pull/3876)
- fix(formula-field): установка изменения значения формы для поля формулы [`#3873`](https://github.com/nocobase/nocobase/pull/3873)
- fix: отображение блока formBlockProvider [`#3877`](https://github.com/nocobase/nocobase/pull/3877)
- refactor(plugin-workflow): изменение на [`#3871`](https://github.com/nocobase/nocobase/pull/3871)
- fix: аномальное отображение модального окна карточки канбан [`#3863`](https://github.com/nocobase/nocobase/pull/3863)
- fix: filterTargetKey поддерживает только представление коллекции [`#3872`](https://github.com/nocobase/nocobase/pull/3872)

### Коммиты

- chore(versions): 😊 публикация v0.21.0-alpha.2 [`d173aef`](https://github.com/nocobase/nocobase/commit/d173aef69b7182b33e0d05621bf8fc32f95b29a4)
- feat: обновление соглашений [`e2763b3`](https://github.com/nocobase/nocobase/commit/e2763b332286affb7cfd9c6a9fb90d656226e3fb)
- chore: обновление конфигурации vitest [`85f33ce`](https://github.com/nocobase/nocobase/commit/85f33cedbeedd21a5086d7940768b093f9dab4e8)

## [v0.21.0-alpha.1](https://github.com/nocobase/nocobase/compare/v0.20.0-alpha.17...v0.21.0-alpha.1) - 2024-03-29

### Объединено

- fix: запрос родительской ассоциации [`#3865`](https://github.com/nocobase/nocobase/pull/3865)
- test: добавление модульного теста для parseHTML [`#3870`](https://github.com/nocobase/nocobase/pull/3870)
- fix(data-vi): ошибка при фильтрации диаграммы с ассоциациями [`#3867`](https://github.com/nocobase/nocobase/pull/3867)
- fix: настройки таблицы получают collectionField [`#3837`](https://github.com/nocobase/nocobase/pull/3837)
- refactor(plugin-workflow): добавление проверки транзакций из источника данных [`#3857`](https://github.com/nocobase/nocobase/pull/3857)
- fix(data-vi): ошибка размера диаграммы при изменении типа диаграммы [`#3859`](https://github.com/nocobase/nocobase/pull/3859)
- fix(Server): команды не загружались должным образом в Windows [`#3858`](https://github.com/nocobase/nocobase/pull/3858)
- fix(LinkageRules): должны работать корректно после сохранения блока как шаблона [`#3855`](https://github.com/nocobase/nocobase/pull/3855)
- test: e2e-тест основного источника данных [`#3816`](https://github.com/nocobase/nocobase/pull/3816)
- fix: улучшение стиля удаления поля [`#3820`](https://github.com/nocobase/nocobase/pull/3820)
- chore: удаление опции add-attach из действия массового обновления [`#3854`](https://github.com/nocobase/nocobase/pull/3854)
- refactor: роль по умолчанию и хранилище полей по умолчанию [`#3844`](https://github.com/nocobase/nocobase/pull/3844)
- refactor: fireImmediately для правила связывания [`#3847`](https://github.com/nocobase/nocobase/pull/3847)
- fix: ошибка при нажатии кнопки печати для блока деталей [`#3845`](https://github.com/nocobase/nocobase/pull/3845)
- fix(data-vi): высота холста продолжает увеличиваться при фильтрации/сбросе [`#3849`](https://github.com/nocobase/nocobase/pull/3849)
- создание unit-теста для приложения nocobase [`#3833`](https://github.com/nocobase/nocobase/pull/3833)
- refactor(DataBlock): блок деталей [`#3776`](https://github.com/nocobase/nocobase/pull/3776)
- fix: улучшение внутреннего метода клиента (T-3711, T-3712, T-3713) [`#3839`](https://github.com/nocobase/nocobase/pull/3839)
- refactor(DataBlock): блок сетки карточек [`#3781`](https://github.com/nocobase/nocobase/pull/3781)
- refactor(DataBlock): форма фильтра [`#3785`](https://github.com/nocobase/nocobase/pull/3785)
- fix: улучшение менеджера приложений [`#3841`](https://github.com/nocobase/nocobase/pull/3841)
- refactor(DataBlock): канбан, диаграмма Ганта, карта и календарь [`#3792`](https://github.com/nocobase/nocobase/pull/3792)
- refactor(DataBlock): блок сворачивания фильтров [`#3786`](https://github.com/nocobase/nocobase/pull/3786)
- refactor(DataBlock): селектор таблиц [`#3784`](https://github.com/nocobase/nocobase/pull/3784)
- refactor(DataBlock): блок списка [`#3779`](https://github.com/nocobase/nocobase/pull/3779)
- refactor(DataBlock): блок формы [`#3771`](https://github.com/nocobase/nocobase/pull/3771)
- fix(client): отключение события onSubmit по умолчанию для формы [`#3834`](https://github.com/nocobase/nocobase/pull/3834)
- fix(data-vi): мерцание диаграмм [`#3836`](https://github.com/nocobase/nocobase/pull/3836)
- fix: acl e2e завершился ошибкой [`#3835`](https://github.com/nocobase/nocobase/pull/3835)
- chore: разрешения меню и настройки плагинов [`#3822`](https://github.com/nocobase/nocobase/pull/3822)
- fix: e2e завершился ошибкой [`#3828`](https://github.com/nocobase/nocobase/pull/3828)
- fix: отсутствующая иконка кнопки [`#3832`](https://github.com/nocobase/nocobase/pull/3832)
- refactor: иконка действия [`#3831`](https://github.com/nocobase/nocobase/pull/3831)
- Оптимизация инструментов сборки [`#3824`](https://github.com/nocobase/nocobase/pull/3824)
- оптимизация ci [`#3825`](https://github.com/nocobase/nocobase/pull/3825)

### Коммиты

- chore(versions): 😊 публикация v0.21.0-alpha.1 [`6e20ab1`](https://github.com/nocobase/nocobase/commit/6e20ab1a77303cf27debc2b851ab44bc90f107a6)
- feat: обновление конфигурации Docker [`f2d4188`](https://github.com/nocobase/nocobase/commit/f2d4188ccf5137bf75700832052dac8292e1da12)
- chore: обновление журнала изменений [`dd0538a`](https://github.com/nocobase/nocobase/commit/dd0538ae048353266f99f52fbd9f6a9de420c572)

## [v0.20.0-alpha.17](https://github.com/nocobase/nocobase/compare/v0.20.0-alpha.16...v0.20.0-alpha.17) - 2024-03-26

### Объединено

- feat: поддержка форматирования отображения для поля ввода чисел [`#3815`](https://github.com/nocobase/nocobase/pull/3815)
- fix(Table): исправление некорректной пагинации [`#3821`](https://github.com/nocobase/nocobase/pull/3821)
- chore: добавление tsdoc [`#3788`](https://github.com/nocobase/nocobase/pull/3788)
- chore(test): исправление типа агента [`#3819`](https://github.com/nocobase/nocobase/pull/3819)
- fix: встраиваемый плагин требует изменения хуков и e2e [`#3727`](https://github.com/nocobase/nocobase/pull/3727)
- fix(associationBlock): исправление блоков ассоциации для родительской коллекции [`#3813`](https://github.com/nocobase/nocobase/pull/3813)
- fix(plugin-workflow-manual): исправление миграции схемы [`#3814`](https://github.com/nocobase/nocobase/pull/3814)
- refactor(DataBlock): блок таблиц [`#3748`](https://github.com/nocobase/nocobase/pull/3748)
- fix(Details): шаблон блока [`#3807`](https://github.com/nocobase/nocobase/pull/3807)
- chore: каскадное удаление может заменить действие установки NULL [`#3812`](https://github.com/nocobase/nocobase/pull/3812)
- feat(data-vi): поддержка нескольких источников данных [`#3743`](https://github.com/nocobase/nocobase/pull/3743)
- feat(plugin-workflow): поддержка нескольких источников данных в рабочем процессе [`#3739`](https://github.com/nocobase/nocobase/pull/3739)
- chore: добавление опций для соответствия и игнорирования тестовых файлов в e2e и p-test командах [`#3811`](https://github.com/nocobase/nocobase/pull/3811)
- chore: поля шаблона коллекции файлов должны быть отключены [`#3810`](https://github.com/nocobase/nocobase/pull/3810)
- fix(plugin-workflow): удаление строкового шаблона в вычислении условий [`#3688`](https://github.com/nocobase/nocobase/pull/3688)
- fix: обновление имени коллекции при обновлении [`#3797`](https://github.com/nocobase/nocobase/pull/3797)
- fix: перезагрузка при нажатии на обновление источника данных [`#3804`](https://github.com/nocobase/nocobase/pull/3804)
- fix: ключевые слова менеджера плагинов [`#3809`](https://github.com/nocobase/nocobase/pull/3809)
- fix: действия расширения и добавления должны поддерживать перетаскивание и сортировку [`#3808`](https://github.com/nocobase/nocobase/pull/3808)
- fix: создание промежуточного ПО для вложений [`#3794`](https://github.com/nocobase/nocobase/pull/3794)
- fix: useExpressionScope [`#3805`](https://github.com/nocobase/nocobase/pull/3805)
- chore: установка действия по умолчанию для ссылки ассоциации при удалении на "без действия" [`#3722`](https://github.com/nocobase/nocobase/pull/3722)
- fix: разрешения полей — все поля должны отображаться [`#3799`](https://github.com/nocobase/nocobase/pull/3799)

### Коммиты

- chore(versions): 😊 публикация v0.20.0-alpha.17 [`3398222`](https://github.com/nocobase/nocobase/commit/339822241f2f641656f64107318b793d63d0b2c9)
- fix: описание [`0dc0d32`](https://github.com/nocobase/nocobase/commit/0dc0d329f80c268672bd80fc6cb0190c3cef964d)
- chore: обновление журнала изменений [`35a6514`](https://github.com/nocobase/nocobase/commit/35a6514993bede12b952ce13641f7258fe6c76d2)

## [v0.20.0-alpha.16](https://github.com/nocobase/nocobase/compare/v0.20.0-alpha.15...v0.20.0-alpha.16) - 2024-03-23

### Объединено

- refactor: представление коллекции поддерживает конфигурацию filterTargetKey [`#3767`](https://github.com/nocobase/nocobase/pull/3767)
- fix: скрытие дочернего элемента, когда useVisible() равно false [`#3803`](https://github.com/nocobase/nocobase/pull/3803)
- fix(client): исправление ошибки дизайнера действий в пользовательской форме [`#3801`](https://github.com/nocobase/nocobase/pull/3801)
- fix: через коллекцию поддерживается поиск [`#3800`](https://github.com/nocobase/nocobase/pull/3800)
- fix(subTable): исправление настройки правила сортировки [`#3795`](https://github.com/nocobase/nocobase/pull/3795)
- fix: загрузка источника данных при сбое загрузки [`#3793`](https://github.com/nocobase/nocobase/pull/3793)
- fix(acl): статус загрузки меню ролей [`#3787`](https://github.com/nocobase/nocobase/pull/3787)
- fix(acl): ошибка при добавлении пользователей к ролям [`#3783`](https://github.com/nocobase/nocobase/pull/3783)
- fix: фильтр не позволяет передавать пустые объекты [`#3780`](https://github.com/nocobase/nocobase/pull/3780)
- fix(acl): список меню ролей отображает только одну страницу [`#3775`](https://github.com/nocobase/nocobase/pull/3775)
- feat(plugin-user): добавлен метод модели desensitize() для фильтрации скрытых полей [`#3768`](https://github.com/nocobase/nocobase/pull/3768)
- fix(plugin-file-manager): исправление локализации хранилища в заголовке таблицы файлов [`#3769`](https://github.com/nocobase/nocobase/pull/3769)
- fix: первый символ, введенный во внешний ключ, не отображается [`#3770`](https://github.com/nocobase/nocobase/pull/3770)

### Коммиты

- chore(versions): 😊 публикация v0.20.0-alpha.16 [`71ec7ec`](https://github.com/nocobase/nocobase/commit/71ec7ece6a65fa00acd590ebb4a6de828fe01655)
- chore: обновление журнала изменений [`170d601`](https://github.com/nocobase/nocobase/commit/170d60158666efd1c75f7d273ddcf529d5ed3c88)
- fix: ручной e2e [`556152d`](https://github.com/nocobase/nocobase/commit/556152d7c22ce0e871d3ac244539db84f52c2fe7)

## [v0.20.0-alpha.15](https://github.com/nocobase/nocobase/compare/v0.20.0-alpha.14...v0.20.0-alpha.15) - 2024-03-20

### Объединено

- fix(auth): ошибка аутентификации SSO при развертывании с подпапкой [`#3764`](https://github.com/nocobase/nocobase/pull/3764)
- chore: загрузка ролей после запуска [`#3763`](https://github.com/nocobase/nocobase/pull/3763)
- fix: uuid и nanoid должны быть отключены при редактировании [`#3762`](https://github.com/nocobase/nocobase/pull/3762)
- fix(logger): вывод информации о причине ошибки [`#3760`](https://github.com/nocobase/nocobase/pull/3760)
- fix: поле uuid [`#3736`](https://github.com/nocobase/nocobase/pull/3736)
- feat: действие отмены связи [`#3759`](https://github.com/nocobase/nocobase/pull/3759)
- chore: слияние параметров базы данных подприложения [`#3640`](https://github.com/nocobase/nocobase/pull/3640)
- fix(acl): ошибка фильтрации пользователей при добавлении их к ролям [`#3754`](https://github.com/nocobase/nocobase/pull/3754)
- fix: статус остановки приложения [`#3723`](https://github.com/nocobase/nocobase/pull/3723)
- fix: исправление исчезновения коллекций при поиске [`#3750`](https://github.com/nocobase/nocobase/pull/3750)
- fix: конфигурация openSize для действия таблицы действует немедленно только для одной строки [`#3752`](https://github.com/nocobase/nocobase/pull/3752)

### Коммиты

- test: добавление e2e для отмены связи [`8e322ae`](https://github.com/nocobase/nocobase/commit/8e322ae1517e0cea5eac289bb5641b85d4997002)
- chore(versions): 😊 публикация v0.20.0-alpha.15 [`bef9c8a`](https://github.com/nocobase/nocobase/commit/bef9c8ab7b54b0400dfd25c9ec85a141448125a2)
- chore: обновление yarn.lock [`3da340c`](https://github.com/nocobase/nocobase/commit/3da340c88d3a689e22e20dae798a1b51ed0405f7)

## [v0.20.0-alpha.14](https://github.com/nocobase/nocobase/compare/v0.20.0-alpha.13...v0.20.0-alpha.14) - 2024-03-18

### Объединено

- refactor: поле URL поддерживает текстовый тип как availableTypes [`#3751`](https://github.com/nocobase/nocobase/pull/3751)
- chore: системный логгер с выводом стека ошибок [`#3747`](https://github.com/nocobase/nocobase/pull/3747)
- chore: адаптация к плагину plugin-custom-brand [`#3740`](https://github.com/nocobase/nocobase/pull/3740)
- fix(data-vi): исправление ошибки всплывающей подсказки круговой диаграммы [`#3745`](https://github.com/nocobase/nocobase/pull/3745)

### Коммиты

- chore(versions): 😊 публикация v0.20.0-alpha.14 [`c75d38b`](https://github.com/nocobase/nocobase/commit/c75d38bb05b8d1924d35c1ad1b175f7801d9c3b5)
- fix(field-interface): вложенный фильтруемый интерфейс [`3b61968`](https://github.com/nocobase/nocobase/commit/3b619682ee91426a1f091d2043a3aa876446bacc)
- chore: обновление журнала изменений [`84f0808`](https://github.com/nocobase/nocobase/commit/84f080846ce459e5ba1bb8fa4074057beb40fb07)

## [v0.20.0-alpha.13](https://github.com/nocobase/nocobase/compare/v0.20.0-alpha.12...v0.20.0-alpha.13) - 2024-03-17

### Объединено

- fix: коллекции undefined в useCollectionState [`#3741`](https://github.com/nocobase/nocobase/pull/3741)
- test(acl): e2e-тест для разрешений действий столбцов [`#3738`](https://github.com/nocobase/nocobase/pull/3738)
- refactor: улучшение стиля colDivider при перетаскивании [`#3709`](https://github.com/nocobase/nocobase/pull/3709)
- fix(data-vi): ошибка преобразования полей ассоциации [`#3737`](https://github.com/nocobase/nocobase/pull/3737)
- fix(acl): некорректное определение разрешений действий [`#3735`](https://github.com/nocobase/nocobase/pull/3735)

### Коммиты

- chore(versions): 😊 публикация v0.20.0-alpha.13 [`db9ff33`](https://github.com/nocobase/nocobase/commit/db9ff337e5e69a5462be8474caea1eaf59ff9342)
- fix: команда консоли [`820352f`](https://github.com/nocobase/nocobase/commit/820352f280abd61ae43c5f29b37db889388ba044)
- chore: обновление журнала изменений [`6f74230`](https://github.com/nocobase/nocobase/commit/6f7423037a5c7ccb5d442549a22b81453430d971)

## [v0.20.0-alpha.12](https://github.com/nocobase/nocobase/compare/v0.20.0-alpha.11...v0.20.0-alpha.12) - 2024-03-16

### Объединено

- fix: совместимость с @ant-design/plots 2.x [`#3734`](https://github.com/nocobase/nocobase/pull/3734)

### Коммиты

- chore(versions): 😊 публикация v0.20.0-alpha.12 [`c1be864`](https://github.com/nocobase/nocobase/commit/c1be86412440c617771d079ded95f64aca3fa155)
- fix: ошибка yarn dev [`c191f14`](https://github.com/nocobase/nocobase/commit/c191f149f96def2672fc50d4d042ca976c863ebc)
- chore: обновление журнала изменений [`8278262`](https://github.com/nocobase/nocobase/commit/8278262728387fbd3963a0286ed09b2219eb7739)

## [v0.20.0-alpha.11](https://github.com/nocobase/nocobase/compare/v0.20.0-alpha.10...v0.20.0-alpha.11) - 2024-03-16

### Объединено

- feat: поддержка развертывания в подкаталоге [`#3731`](https://github.com/nocobase/nocobase/pull/3731)
- fix(variables): исправление переменных для селектора таблиц [`#3725`](https://github.com/nocobase/nocobase/pull/3725)
- fixing timezone header when it is negative value [`#3732`](https://github.com/nocobase/nocobase/pull/3732)
- fix(data-source): внешний ключ [`#3707`](https://github.com/nocobase/nocobase/pull/3707)
- feat: добавление фильтра источника данных [`#3724`](https://github.com/nocobase/nocobase/pull/3724)
- fix(Table): исправление исчезновения содержимого после выбора строки [`#3726`](https://github.com/nocobase/nocobase/pull/3726)
- refactor: установка имени в качестве заголовка по умолчанию для представления коллекции, если заголовок отсутствует [`#3719`](https://github.com/nocobase/nocobase/pull/3719)
- refactor: добавление блоков единообразным способом [`#3668`](https://github.com/nocobase/nocobase/pull/3668)
- feat: поддержка режима загрузки данных [`#3712`](https://github.com/nocobase/nocobase/pull/3712)
- fix: шаблон блока [`#3714`](https://github.com/nocobase/nocobase/pull/3714)
- refactor(SchemaInitializers): унификация стиля именования [`#3604`](https://github.com/nocobase/nocobase/pull/3604)
- fix: удаление env из кнопки удаления коллекции [`#3682`](https://github.com/nocobase/nocobase/pull/3682)
- fix(data-vi): обновление версии antv [`#3710`](https://github.com/nocobase/nocobase/pull/3710)

### Коммиты

- chore(versions): 😊 публикация v0.20.0-alpha.11 [`15ef818`](https://github.com/nocobase/nocobase/commit/15ef81854e4f900ed53e5229d66d1c016d71b8e7)
- chore: обновление реестра в yarn.lock [`e877e3b`](https://github.com/nocobase/nocobase/commit/e877e3b5d9c1543c74a55b41eb57f69f15ff9847)
- chore: обновление журнала изменений [`42448ec`](https://github.com/nocobase/nocobase/commit/42448ecddb1afe455cced9c4a8b6ca78586a060f)

## [v0.20.0-alpha.10](https://github.com/nocobase/nocobase/compare/v0.20.0-alpha.9...v0.20.0-alpha.10) - 2024-03-13

### Объединено

- fix(client): size undefined в nanoid [`#3708`](https://github.com/nocobase/nocobase/pull/3708)
- refactor(radio): radio поддерживает несколько типов полей [`#3706`](https://github.com/nocobase/nocobase/pull/3706)
- fix: получение асинхронной JSON-схемы [`#3705`](https://github.com/nocobase/nocobase/pull/3705)
- fix: выбор имен полей [`#3704`](https://github.com/nocobase/nocobase/pull/3704)
- fix: конфигурация поля Kanban взаимодействует с другими блоками [`#3689`](https://github.com/nocobase/nocobase/pull/3689)
- fix: radio [`#3701`](https://github.com/nocobase/nocobase/pull/3701)
- feat: добавление интерфейсов uuid, nanoid и unitTimestamp [`#3684`](https://github.com/nocobase/nocobase/pull/3684)
- fix(plugin-workflow): исправление дублирования триггера события расписания [`#3692`](https://github.com/nocobase/nocobase/pull/3692)
- refactor(client): добавление компонента для поддержки выбора источника данных [`#3691`](https://github.com/nocobase/nocobase/pull/3691)
- fix(Form): создание вместо обновления при нажатии на отправку [`#3687`](https://github.com/nocobase/nocobase/pull/3687)
- fix: некорректные параметры запроса пагинации при пакетном удалении последней страницы [`#3670`](https://github.com/nocobase/nocobase/pull/3670)

### Коммиты

- chore(versions): 😊 публикация v0.20.0-alpha.10 [`40a2294`](https://github.com/nocobase/nocobase/commit/40a22943b91455734a255b6598178391d7887999)
- chore: обновление журнала изменений [`a8e37f6`](https://github.com/nocobase/nocobase/commit/a8e37f6224a5a03f90164a2848ad2e9a250bebae)
- fix: добавление внешних зависимостей [`24b52c9`](https://github.com/nocobase/nocobase/commit/24b52c98d18f11083e97f584b8e23749846052f0)

## [v0.20.0-alpha.9](https://github.com/nocobase/nocobase/compare/v0.20.0-alpha.8...v0.20.0-alpha.9) - 2024-03-12

### Объединено

- refactor: добавление дочернего элемента в наследование древовидной коллекции [`#3676`](https://github.com/nocobase/nocobase/pull/3676)
- fix: обновление источника данных при добавлении поля (T-3253) [`#3645`](https://github.com/nocobase/nocobase/pull/3645)
- chore: экранирование символа подчеркивания в запросе include [`#3681`](https://github.com/nocobase/nocobase/pull/3681)
- fix: обновление приложения после восстановления [`#3680`](https://github.com/nocobase/nocobase/pull/3680)
- fix: поле связи представления коллекции должно быть select для внешнего ключа [`#3671`](https://github.com/nocobase/nocobase/pull/3671)
- fix: ACL должен возвращать true, если ресурс разрешен [`#3675`](https://github.com/nocobase/nocobase/pull/3675)
- fix: инициализация значения области видимости, когда все данные имеют значение null [`#3674`](https://github.com/nocobase/nocobase/pull/3674)
- fix: ошибка кэширования наследования [`#3669`](https://github.com/nocobase/nocobase/pull/3669)

### Коммиты

- chore(versions): 😊 публикация v0.20.0-alpha.9 [`2e7da6e`](https://github.com/nocobase/nocobase/commit/2e7da6e29bc75def06f59d8d3bb991e7e238c64b)
- fix: ошибка пагинации в resourcer коллекций ролей [`023096b`](https://github.com/nocobase/nocobase/commit/023096b1a9ea6ccae364c81ba93ca32b077ccecc)
- chore: обновление журнала изменений [`56fd24e`](https://github.com/nocobase/nocobase/commit/56fd24ef4b30717e12b2c0574d4df92210bac81c)

## [v0.20.0-alpha.8](https://github.com/nocobase/nocobase/compare/v0.20.0-alpha.7...v0.20.0-alpha.8) - 2024-03-11

### Объединено

- chore: перемещение сниппетов диспетчера коллекций в источник данных [`#3666`](https://github.com/nocobase/nocobase/pull/3666)
- fix(Form): сохранение значения по умолчанию поля после отправки формы [`#3665`](https://github.com/nocobase/nocobase/pull/3665)
- chore: тест [`#3664`](https://github.com/nocobase/nocobase/pull/3664)
- fix(auth): проблема с валидацией службы CAS [`#3661`](https://github.com/nocobase/nocobase/pull/3661)
- fix: вывод полей PostgreSQL [`#3663`](https://github.com/nocobase/nocobase/pull/3663)
- fix(plugin-workflow-action-trigger): исправление загрузки appends [`#3659`](https://github.com/nocobase/nocobase/pull/3659)
- fix(plugin-workflow): исправление миграции [`#3654`](https://github.com/nocobase/nocobase/pull/3654)

### Коммиты

- chore(versions): 😊 публикация v0.20.0-alpha.8 [`6fd06a2`](https://github.com/nocobase/nocobase/commit/6fd06a28c838808623026d97a944db113f041a96)
- chore: обновление yarn.lock [`eae5a87`](https://github.com/nocobase/nocobase/commit/eae5a87ebd4ba5b58d2fa64aeaf316dacc37ed89)
- chore: обновление журнала изменений [`02dcb75`](https://github.com/nocobase/nocobase/commit/02dcb752cb5c5763da0db297eaec69b3fc879ce4)

## [v0.20.0-alpha.7](https://github.com/nocobase/nocobase/compare/v0.20.0-alpha.6...v0.20.0-alpha.7) - 2024-03-08

### Объединено

- fix: отсутствует интерфейс представления коллекции [`#3658`](https://github.com/nocobase/nocobase/pull/3658)
- fix: ошибка getCollection [`#3656`](https://github.com/nocobase/nocobase/pull/3656)

### Коммиты

- chore(versions): 😊 публикация v0.20.0-alpha.7 [`63d1a8d`](https://github.com/nocobase/nocobase/commit/63d1a8d90ca30056f7dd48bc012c30590b727cb8)
- chore: обновление журнала изменений [`12ba7cd`](https://github.com/nocobase/nocobase/commit/12ba7cd9d0c48dc7b7048ebb73bb93be79e41ac8)
- chore(ci): изменение ветки образа pro [`8dbae24`](https://github.com/nocobase/nocobase/commit/8dbae24489a8f2dcb3fd055a89225454394501e7)

## [v0.20.0-alpha.6](https://github.com/nocobase/nocobase/compare/v0.20.0-alpha.5...v0.20.0-alpha.6) - 2024-03-08

### Объединено

- fix: анализ поля ассоциации в ACL [`#3655`](https://github.com/nocobase/nocobase/pull/3655)
- chore: обновление имени меню плагина локализации [`#3653`](https://github.com/nocobase/nocobase/pull/3653)
- chore(pm): установка плагина sms-auth как локального, закрытие T-3323 [`#3652`](https://github.com/nocobase/nocobase/pull/3652)
- fix(cascadeSelect): cascadeSelect не отображает данные в форме редактирования [`#3649`](https://github.com/nocobase/nocobase/pull/3649)
- fix(db): область видимости в упреждающей загрузке и исправление ACL: проблема сброса фильтра [`#3636`](https://github.com/nocobase/nocobase/pull/3636)
- fix: формат dateTime, настроенный в таблице, недействителен [`#3630`](https://github.com/nocobase/nocobase/pull/3630)
- fix: обновление разрешений роли источника данных [`#3643`](https://github.com/nocobase/nocobase/pull/3643)
- style: flexWrap в actionBar [`#3635`](https://github.com/nocobase/nocobase/pull/3635)
- fix: добавление displayName [`#3628`](https://github.com/nocobase/nocobase/pull/3628)
- fix(customRequestAction): не должно поддерживать установку иконок и цветов [`#3632`](https://github.com/nocobase/nocobase/pull/3632)
- fix(workflow-action-trigger): изменение названия плагина [`#3631`](https://github.com/nocobase/nocobase/pull/3631)
- fix: отсутствуют данные позиций коллекции графа [`#3627`](https://github.com/nocobase/nocobase/pull/3627)
- fix(ActionLink): исправление стиля при наведении [`#3629`](https://github.com/nocobase/nocobase/pull/3629)
- feat(plugin-workflow-form-trigger): добавление кнопки триггера во все панели действий для одной записи [`#3563`](https://github.com/nocobase/nocobase/pull/3563)
- fix: переполнение текста в боковом меню [`#3626`](https://github.com/nocobase/nocobase/pull/3626)
- fix(acl-plugin-setting): проверка разрешений плагинов для сниппетов [`#3622`](https://github.com/nocobase/nocobase/pull/3622)
- fix(subTable): исправление изменения заголовка поля [`#3625`](https://github.com/nocobase/nocobase/pull/3625)
- fix: исправление стиля при наведении для подтаблицы [`#3623`](https://github.com/nocobase/nocobase/pull/3623)

### Коммиты

- chore(versions): 😊 публикация v0.20.0-alpha.6 [`8b4821e`](https://github.com/nocobase/nocobase/commit/8b4821e2df39958f7befa9aa0abd203cd162bace)
- chore: обновление yarn.lock [`1088756`](https://github.com/nocobase/nocobase/commit/108875600c4baf9824246c43bcbdd858876e5fd1)
- chore: обновление журнала изменений [`f9a10de`](https://github.com/nocobase/nocobase/commit/f9a10de9811b7a35b13f67d9007051487321e993)

## [v0.20.0-alpha.5](https://github.com/nocobase/nocobase/compare/v0.20.0-alpha.4...v0.20.0-alpha.5) - 2024-03-06

### Объединено

- fix(save-record): различие между созданием и обновлением на основе record.isNew [`#3620`](https://github.com/nocobase/nocobase/pull/3620)
- fix(plugin-workflow): исправление логики повторения расписания [`#3612`](https://github.com/nocobase/nocobase/pull/3612)
- refactor: useFormItemInitializerFields [`#3621`](https://github.com/nocobase/nocobase/pull/3621)
- fix: коллекция без filterTargetKey не должна иметь возможность добавления блока [`#3614`](https://github.com/nocobase/nocobase/pull/3614)
- fix(kanban): исправление блока [`#3619`](https://github.com/nocobase/nocobase/pull/3619)
- fix: следует отображать настройки после удаления поля [`#3606`](https://github.com/nocobase/nocobase/pull/3606)
- fix: имя роли неверно в конфигурации роли [`#3618`](https://github.com/nocobase/nocobase/pull/3618)
- fix: bulkEditFormItemSettings коллекция undefined [`#3616`](https://github.com/nocobase/nocobase/pull/3616)
- fix: календарь не может изменить вид на неделю [`#3602`](https://github.com/nocobase/nocobase/pull/3602)
- fix(Table): исправление ошибки Fixed Block [`#3601`](https://github.com/nocobase/nocobase/pull/3601)
- chore: удаление источника данных [`#3610`](https://github.com/nocobase/nocobase/pull/3610)
- test: тест ACL [`#3609`](https://github.com/nocobase/nocobase/pull/3609)
- fix: отсутствует источник данных [`#3608`](https://github.com/nocobase/nocobase/pull/3608)
- fix: запрос родительского блока данных с источником данных [`#3605`](https://github.com/nocobase/nocobase/pull/3605)
- fix: удаление временной документации [`#3603`](https://github.com/nocobase/nocobase/pull/3603)

### Коммиты

- chore(versions): 😊 публикация v0.20.0-alpha.5 [`0fc382d`](https://github.com/nocobase/nocobase/commit/0fc382d298aac59908186dca692dbf75660005e7)
- fix(select): в fieldNames отсутствует параметр value [`e82179f`](https://github.com/nocobase/nocobase/commit/e82179ff61aab97e3c5ec47e06af861e45e7a390)
- chore(ci): сборка образа pro [`4716c13`](https://github.com/nocobase/nocobase/commit/4716c13d81c216eddf23def86c4bafc22c7d14f7)

## [v0.20.0-alpha.4](https://github.com/nocobase/nocobase/compare/v0.20.0-alpha.3...v0.20.0-alpha.4) - 2024-03-05

### Коммиты

- fix: обновление package.json плагина [`e377f3a`](https://github.com/nocobase/nocobase/commit/e377f3a57cba24c3c91d9960fa9b9baea276cd33)
- chore(versions): 😊 публикация v0.20.0-alpha.4 [`e7cc6cc`](https://github.com/nocobase/nocobase/commit/e7cc6cca545e3162fb84f238e7df081f08843890)
- chore(data-source-manager): улучшение перевода [`9bd0f4f`](https://github.com/nocobase/nocobase/commit/9bd0f4faff70e46a7f3e242b79e486cb2209f8ee)

## [v0.20.0-alpha.3](https://github.com/nocobase/nocobase/compare/v0.20.0-alpha.2...v0.20.0-alpha.3) - 2024-03-04

### Объединено

- fix: ошибка create-nocobase-app + yarn dev [`#3599`](https://github.com/nocobase/nocobase/pull/3599)
- fix: ассоциация chinaRegions fieldName [`#3600`](https://github.com/nocobase/nocobase/pull/3600)
- fix: скрытое поле с правилом связывания должно очищать значение [`#3576`](https://github.com/nocobase/nocobase/pull/3576)
- fix(client): исправление ошибки в измененном API [`#3598`](https://github.com/nocobase/nocobase/pull/3598)
- style(TableColumn): исправление стиля при наведении мыши [`#3597`](https://github.com/nocobase/nocobase/pull/3597)

### Коммиты

- chore(versions): 😊 публикация v0.20.0-alpha.3 [`ff9acd6`](https://github.com/nocobase/nocobase/commit/ff9acd6d699a10470a83be53735e90e277f20620)
- chore: обновление журнала изменений [`a70e87f`](https://github.com/nocobase/nocobase/commit/a70e87f0d514b26e26fe51308e0eadbb95d86fe7)
- fix: удаление резервного файла [`56d4d24`](https://github.com/nocobase/nocobase/commit/56d4d240a1d63a1222bf14a04674f0e4c5f6e50c)

## [v0.20.0-alpha.2](https://github.com/nocobase/nocobase/compare/v0.20.0-alpha.1...v0.20.0-alpha.2) - 2024-03-03

### Коммиты

- chore(versions): 😊 публикация v0.20.0-alpha.2 [`32b15cb`](https://github.com/nocobase/nocobase/commit/32b15cb1089b95d4f2f5088a0ac81ed72d925b99)
- chore: обновление журнала изменений [`eda9a37`](https://github.com/nocobase/nocobase/commit/eda9a37e997c08744e9f648466412b620ccc98cd)
- fix: импорт [`e5a380f`](https://github.com/nocobase/nocobase/commit/e5a380ff394b6f1c2b8b77ad7505e78321c3f471)

## [v0.20.0-alpha.1](https://github.com/nocobase/nocobase/compare/v0.19.0-alpha.10...v0.20.0-alpha.1) - 2024-03-03

### Объединено

- feat: поддержка нескольких источников данных [`#3418`](https://github.com/nocobase/nocobase/pull/3418)

### Коммиты

- chore(versions): 😊 публикация v0.20.0-alpha.1 [`29e10f3`](https://github.com/nocobase/nocobase/commit/29e10f365fc51e2f9838320cbc1d672dd390a1ef)

## [v0.19.0-alpha.10](https://github.com/nocobase/nocobase/compare/v0.19.0-alpha.9...v0.19.0-alpha.10) - 2024-03-13

### Объединено

- fix: получение асинхронной JSON-схемы [`#3705`](https://github.com/nocobase/nocobase/pull/3705)
- fix(plugin-workflow): исправление отключения статического триггера расписания [`#3595`](https://github.com/nocobase/nocobase/pull/3595)
- fix(plugin-workflow): исправление интервала чисел больше 32-битного целого [`#3592`](https://github.com/nocobase/nocobase/pull/3592)
- fix: ошибка настроек плагина авторизации [`#3585`](https://github.com/nocobase/nocobase/pull/3585)
- fix: поле формулы должно вызывать onchange при изменении значения [`#3573`](https://github.com/nocobase/nocobase/pull/3573)
- fix(LinkageRules): исправление правил связывания с вложенными условиями [`#3578`](https://github.com/nocobase/nocobase/pull/3578)

### Коммиты

- chore(versions): 😊 публикация v0.19.0-alpha.10 [`7a74b10`](https://github.com/nocobase/nocobase/commit/7a74b101f42acdb3d0833214e70cea132b1156e2)
- chore: обновление журнала изменений [`866eccc`](https://github.com/nocobase/nocobase/commit/866eccc60770fa2d2b42138e7083d78730d82de8)

## [v0.19.0-alpha.9](https://github.com/nocobase/nocobase/compare/v0.19.0-alpha.8...v0.19.0-alpha.9) - 2024-02-28

### Объединено

- fix: действие загрузки [`#3577`](https://github.com/nocobase/nocobase/pull/3577)
- fix: отсутствует dataSource в select readPretty [`#3574`](https://github.com/nocobase/nocobase/pull/3574)
- fix: ключ схемы действий должен быть uid [`#3570`](https://github.com/nocobase/nocobase/pull/3570)
- fix: формат даты и времени поддерживает предварительный просмотр [`#3572`](https://github.com/nocobase/nocobase/pull/3572)
- refactor(plugin-workflow): рефакторинг реализации триггера расписания [`#3562`](https://github.com/nocobase/nocobase/pull/3562)
- refactor: размер диалогового окна по умолчанию должен быть средним [`#3569`](https://github.com/nocobase/nocobase/pull/3569)
- style: улучшение стиля менеджера плагинов [`#3568`](https://github.com/nocobase/nocobase/pull/3568)
- feat(Help): переключение на китайскую страницу при использовании китайского языка [`#3567`](https://github.com/nocobase/nocobase/pull/3567)
- refactor: fixedBlockDesignerItem [`#3550`](https://github.com/nocobase/nocobase/pull/3550)
- fix: ленивая загрузка принадлежности к ассоциации [`#3559`](https://github.com/nocobase/nocobase/pull/3559)
- style: установка размера кнопки с иконкой [`#3560`](https://github.com/nocobase/nocobase/pull/3560)
- chore: исправление e2e [`#3557`](https://github.com/nocobase/nocobase/pull/3557)
- feat: настройка меню в правом верхнем углу страницы [`#3548`](https://github.com/nocobase/nocobase/pull/3548)
- chore: оптимизация описания плагина [`#3552`](https://github.com/nocobase/nocobase/pull/3552)
- chore: обновление описаний плагинов [`#3556`](https://github.com/nocobase/nocobase/pull/3556)
- docs(plugin-workflow): корректировка описания плагина [`#3553`](https://github.com/nocobase/nocobase/pull/3553)
- docs(plugin-snapshot-field): корректировка описания [`#3551`](https://github.com/nocobase/nocobase/pull/3551)
- feat(core): добавление строкового шаблонизатора в оценщики [`#3546`](https://github.com/nocobase/nocobase/pull/3546)
- docs(plugin-workflow-loop): исправление описания [`#3549`](https://github.com/nocobase/nocobase/pull/3549)
- chore: обновление названий и описаний плагинов [`#3547`](https://github.com/nocobase/nocobase/pull/3547)
- refactor: поле формулы не должно вызывать изменение значения формы [`#3518`](https://github.com/nocobase/nocobase/pull/3518)
- chore: ограничение диалекта восстановления [`#3534`](https://github.com/nocobase/nocobase/pull/3534)
- fix(client): исправление значения фильтра по умолчанию [`#3544`](https://github.com/nocobase/nocobase/pull/3544)
- refactor: поддержка iframe-блока в RecordFormBlockInitializers [`#3541`](https://github.com/nocobase/nocobase/pull/3541)

### Коммиты

- chore(versions): 😊 публикация v0.19.0-alpha.9 [`9520b24`](https://github.com/nocobase/nocobase/commit/9520b2431e370eaa0ef41f3f416d3a7bf5a2e047)
- chore: обновление журнала изменений [`90cdef8`](https://github.com/nocobase/nocobase/commit/90cdef866266efde7807e1affb18726beddab0bd)
- test: исправление e2e [`3a0f942`](https://github.com/nocobase/nocobase/commit/3a0f942270d320afccc756d126c66111cba02778)

## [v0.19.0-alpha.8](https://github.com/nocobase/nocobase/compare/v0.19.0-alpha.7...v0.19.0-alpha.8) - 2024-02-21

### Объединено

- fix(LinkageRules): исправление appends [`#3537`](https://github.com/nocobase/nocobase/pull/3537)
- fix(LinkageRules): избежание изменения наблюдаемого объекта [`#3538`](https://github.com/nocobase/nocobase/pull/3538)
- fix: при первом нажатии на назначение поля не отображается конфигурация поля [`#3484`](https://github.com/nocobase/nocobase/pull/3484)
- refactor: отображение заголовка [`#3535`](https://github.com/nocobase/nocobase/pull/3535)

### Коммиты

- chore(versions): 😊 публикация v0.19.0-alpha.8 [`a736847`](https://github.com/nocobase/nocobase/commit/a736847a0fc4dc510b34668f0051e1e3997d59c6)
- chore: обновление журнала изменений [`5e2b0c3`](https://github.com/nocobase/nocobase/commit/5e2b0c3a8de8126b54332f210cee30a0f4eb9ddf)

## [v0.19.0-alpha.7](https://github.com/nocobase/nocobase/compare/v0.19.0-alpha.6...v0.19.0-alpha.7) - 2024-02-20

### Объединено

- chore: обновление Dockerfile [`#3503`](https://github.com/nocobase/nocobase/pull/3503)
- chore: оптимизация переменных окружения [`#3528`](https://github.com/nocobase/nocobase/pull/3528)
- fix(bi): проблема разбора переменных даты [`#3520`](https://github.com/nocobase/nocobase/pull/3520)
- refactor(Linkage): оптимизация разбора переменных выражений [`#3519`](https://github.com/nocobase/nocobase/pull/3519)
- fix(core): рефакторинг evaluate для поддержки дефисов в ключевом пути [`#3517`](https://github.com/nocobase/nocobase/pull/3517)
- chore: карта типов полей [`#3516`](https://github.com/nocobase/nocobase/pull/3516)
- fix: блок деталей не должен поддерживать pageSizeChanger [`#3515`](https://github.com/nocobase/nocobase/pull/3515)
- fix: локализация полей [`#3511`](https://github.com/nocobase/nocobase/pull/3511)
- fix(subTable): очистка значений формы после отправки [`#3508`](https://github.com/nocobase/nocobase/pull/3508)
- style(PinnedPluginList): исправление цвета фона при наведении [`#3501`](https://github.com/nocobase/nocobase/pull/3501)
- docs(plugin-workflow): исправление ключевого слова [`#3498`](https://github.com/nocobase/nocobase/pull/3498)

### Коммиты

- chore(versions): 😊 публикация v0.19.0-alpha.7 [`8cb1942`](https://github.com/nocobase/nocobase/commit/8cb19429268de80335e6aa9206fc504f1bb0bff1)
- chore(ci): использование параллелизма [`e93563c`](https://github.com/nocobase/nocobase/commit/e93563cfb70e3aaed7c54993d87ab50ece2855d2)
- chore: обновление журнала изменений [`86ff9dd`](https://github.com/nocobase/nocobase/commit/86ff9dde40cc68e6cbdefbb854b17e5b06c99072)

## [v0.19.0-alpha.6](https://github.com/nocobase/nocobase/compare/v0.19.0-alpha.5...v0.19.0-alpha.6) - 2024-02-07

### Объединено

- fix: загрузка коллекций плагинов [`#3499`](https://github.com/nocobase/nocobase/pull/3499)
- fix: подтаблица не должна поддерживать столбец действий [`#3497`](https://github.com/nocobase/nocobase/pull/3497)
- fix: пароль не может быть пустым [`#3491`](https://github.com/nocobase/nocobase/pull/3491)
- refactor: ключевые слова менеджера плагинов [`#3490`](https://github.com/nocobase/nocobase/pull/3490)
- fix(plugin-workflow-form-trigger): исправление локализации [`#3488`](https://github.com/nocobase/nocobase/pull/3488)
- fix: исправление T-3012 [`#3489`](https://github.com/nocobase/nocobase/pull/3489)
- fix(plugin-workflow): исправление ревизии с новыми свойствами [`#3487`](https://github.com/nocobase/nocobase/pull/3487)
- style(lang): добавление zh-tw [`#3446`](https://github.com/nocobase/nocobase/pull/3446)
- fix: макет иконок настроек плагинов [`#3478`](https://github.com/nocobase/nocobase/pull/3478)
- fix(Server): исправление сообщений в data-wrapping [`#3485`](https://github.com/nocobase/nocobase/pull/3485)
- style: исправление цвета кнопки "еще" и стиля полосы прокрутки [`#3486`](https://github.com/nocobase/nocobase/pull/3486)
- fix(plugin-workflow): исправление параметров процессора для передачи любого контекста [`#3483`](https://github.com/nocobase/nocobase/pull/3483)
- refactor(plugin-workflow): оптимизация подсказки при привязке рабочего процесса [`#3480`](https://github.com/nocobase/nocobase/pull/3480)
- refactor: оптимизация менеджера плагинов и поддержка ключевых слов [`#3467`](https://github.com/nocobase/nocobase/pull/3467)
- refactor(plugin-workflow): поддержка любого контекста в процессоре как параметров [`#3473`](https://github.com/nocobase/nocobase/pull/3473)
- test: параллельный узел ветвления e2e [`#3471`](https://github.com/nocobase/nocobase/pull/3471)
- fix(defaultValue): не следует использовать defaultValue в блоках фильтра [`#3472`](https://github.com/nocobase/nocobase/pull/3472)
- fix: поле вложений, установленное как одиночное, не отображает повторно загруженные вложения после удаления [`#3469`](https://github.com/nocobase/nocobase/pull/3469)

### Коммиты

- chore(versions): 😊 публикация v0.19.0-alpha.6 [`d8bbdc9`](https://github.com/nocobase/nocobase/commit/d8bbdc96482899bc6d9f3993c9ef8cb2c38c7a52)
- feat: обновление package.json [`c0988d9`](https://github.com/nocobase/nocobase/commit/c0988d9fc68b3728e4d5ec4450bf88e1797eb51a)
- chore: обновление журнала изменений [`5fa4305`](https://github.com/nocobase/nocobase/commit/5fa430585c8139d252b82f9e9aefcd12fffabb87)

## [v0.19.0-alpha.5](https://github.com/nocobase/nocobase/compare/v0.19.0-alpha.4...v0.19.0-alpha.5) - 2024-01-30

### Объединено

- refactor: удаление SharedFilterProvider [`#3424`](https://github.com/nocobase/nocobase/pull/3424)
- fix(client): исправление состояния IME текстового поля переменных в Edge [`#3458`](https://github.com/nocobase/nocobase/pull/3458)
- fix(CascadeSelect): изменение значения при удалении [`#3440`](https://github.com/nocobase/nocobase/pull/3440)
- fix: блок фильтра не может подключиться к блоку шаблона [`#3457`](https://github.com/nocobase/nocobase/pull/3457)
- refactor: установка changeTo как значение по умолчанию для массового редактирования [`#3455`](https://github.com/nocobase/nocobase/pull/3455)
- fix: загрузка SQL-коллекции с полем источника [`#3456`](https://github.com/nocobase/nocobase/pull/3456)
- test: e2e-тестирование ручного узла рабочего процесса [`#3451`](https://github.com/nocobase/nocobase/pull/3451)
- fix(plugin-workflow): исправление логики завершения при успехе [`#3453`](https://github.com/nocobase/nocobase/pull/3453)
- style: исправление стиля переполнения текста в боковом меню [`#3450`](https://github.com/nocobase/nocobase/pull/3450)
- feat: поддержка добавления блоков фильтров для блоков отношений [`#3436`](https://github.com/nocobase/nocobase/pull/3436)
- fix(plugin-workflow): исправление циклического запуска коллекции [`#3448`](https://github.com/nocobase/nocobase/pull/3448)
- fix: исправление CI для pro [`#3447`](https://github.com/nocobase/nocobase/pull/3447)
- fix(plugin-workflow): исправление SQL-транзакций и локализации [`#3444`](https://github.com/nocobase/nocobase/pull/3444)

### Коммиты

- chore: обновление журнала изменений [`538033a`](https://github.com/nocobase/nocobase/commit/538033a4340b65ee5b142d22ab5bee630c5b0505)
- feat: обновление журнала изменений [`0558169`](https://github.com/nocobase/nocobase/commit/05581694c7672601c94e54a06c807d5611dd5a31)
- chore(versions): 😊 публикация v0.19.0-alpha.5 [`8765208`](https://github.com/nocobase/nocobase/commit/87652080166248708f918401a92a4afec8e42bc9)

## [v0.19.0-alpha.4](https://github.com/nocobase/nocobase/compare/v0.19.0-alpha.3...v0.19.0-alpha.4) - 2024-01-26

### Объединено

- fix(client): исправление локализации cron при наличии DOM и DOW [`#3442`](https://github.com/nocobase/nocobase/pull/3442)
- fix(plugin-workflow): исправление транзакции триггера синхронизации коллекции [`#3437`](https://github.com/nocobase/nocobase/pull/3437)
- fix: пропуск миграции, если она существует [`#3439`](https://github.com/nocobase/nocobase/pull/3439)
- feat(core): добавление обработки сообщений при успехе [`#3435`](https://github.com/nocobase/nocobase/pull/3435)
- refactor(plugin-workflow): добавление опции синхронизации для триггера [`#3383`](https://github.com/nocobase/nocobase/pull/3383)
- feat: добавление корейского перевода [`#3428`](https://github.com/nocobase/nocobase/pull/3428)
- fix: загрузка данных ассоциации подданных в деталях [`#3432`](https://github.com/nocobase/nocobase/pull/3432)
- feat(plugin-workflow): добавление действия отмены выполнения [`#3425`](https://github.com/nocobase/nocobase/pull/3425)
- fix: изменение описания выхода [`#3430`](https://github.com/nocobase/nocobase/pull/3430)
- fix: удаление пакета tree-kill из core/cli [`#3429`](https://github.com/nocobase/nocobase/pull/3429)
- fix: e2e-тест не завершается успешно [`#3427`](https://github.com/nocobase/nocobase/pull/3427)
- refactor: режим конфигурации, кнопки без разрешений должны отображаться, но быть неактивными [`#3421`](https://github.com/nocobase/nocobase/pull/3421)
- refactor: разрешения должны проходить без установки действия x-acl [`#3410`](https://github.com/nocobase/nocobase/pull/3410)
- test: ошибка версии MySQL [`#3412`](https://github.com/nocobase/nocobase/pull/3412)
- fix: удаление и повторная загрузка вложений не отображаются [`#3405`](https://github.com/nocobase/nocobase/pull/3405)
- refactor: родительская коллекция наследования поддерживает активацию дочерней коллекции в действии добавления нового [`#3398`](https://github.com/nocobase/nocobase/pull/3398)
- feat: улучшение процесса менеджера плагинов [`#3386`](https://github.com/nocobase/nocobase/pull/3386)
- Fix/plugin workflow migration [`#3404`](https://github.com/nocobase/nocobase/pull/3404)
- fix: переменные & итерация некорректны в селекторе записей [`#3399`](https://github.com/nocobase/nocobase/pull/3399)
- fix(plugin-workflow-manual): исправление блока значений в блоке задач [`#3400`](https://github.com/nocobase/nocobase/pull/3400)
- fix: поле ассоциации в подтаблице должно поддерживать активацию ссылки при readOnly или readPretty [`#3390`](https://github.com/nocobase/nocobase/pull/3390)
- refactor: локальный перевод [`#3396`](https://github.com/nocobase/nocobase/pull/3396)
- fix: исправление T-2916 [`#3393`](https://github.com/nocobase/nocobase/pull/3393)
- refactor(sub-table): подтаблица поддерживает выбор существующих записей [`#3311`](https://github.com/nocobase/nocobase/pull/3311)
- fix(auth): URL перенаправления после успешного входа через SSO [`#3387`](https://github.com/nocobase/nocobase/pull/3387)
- fix(custom-request): проблемы с разрешениями [`#3306`](https://github.com/nocobase/nocobase/pull/3306)
- feat: поддержка переменной окружения WS_PATH [`#3384`](https://github.com/nocobase/nocobase/pull/3384)
- fix: параметры сортировки столбцов таблицы должны поддерживать отмену сортировки [`#3372`](https://github.com/nocobase/nocobase/pull/3372)
- fix: исправление T-2909 [`#3373`](https://github.com/nocobase/nocobase/pull/3373)
- fix: ошибка автоматической раскладки графа коллекции [`#3370`](https://github.com/nocobase/nocobase/pull/3370)
- test: тест селектора коллекций [`#3371`](https://github.com/nocobase/nocobase/pull/3371)
- fix(TableSelectorProvider): разбор параметра фильтра [`#3366`](https://github.com/nocobase/nocobase/pull/3366)
- Revert "test: collection selector test" [`#3369`](https://github.com/nocobase/nocobase/pull/3369)
- test: collection selector test [`#3368`](https://github.com/nocobase/nocobase/pull/3368)
- refactor: локальное улучшение [`#3367`](https://github.com/nocobase/nocobase/pull/3367)
- feat(oidc): добавление расширенных опций [`#3364`](https://github.com/nocobase/nocobase/pull/3364)
- fix: useDesigner Designer должен иметь панель инструментов по умолчанию [`#3365`](https://github.com/nocobase/nocobase/pull/3365)
- fix: правила связывания поддерживают вычисление и присваивание многоуровневых ассоциативных значений [`#3359`](https://github.com/nocobase/nocobase/pull/3359)
- fix: правило связывания поддерживает только действие с контекстной записью [`#3355`](https://github.com/nocobase/nocobase/pull/3355)
- fix(header): предотвращение влияния на цвета других меню [`#3357`](https://github.com/nocobase/nocobase/pull/3357)
- fix: случайные данные в вычислительном узле даже при ошибке [`#3346`](https://github.com/nocobase/nocobase/pull/3346)
- fix(theme): исправление цвета меню заголовка [`#3354`](https://github.com/nocobase/nocobase/pull/3354)
- fix: дамп с SQL-коллекцией [`#3350`](https://github.com/nocobase/nocobase/pull/3350)

### Коммиты

- chore(versions): 😊 публикация v0.19.0-alpha.4 [`65020f6`](https://github.com/nocobase/nocobase/commit/65020f69d473a1932e0310986872d9aa23591f46)
- test(e2e): увеличение количества повторных попыток для подверженных ошибкам тестов [`f466e6e`](https://github.com/nocobase/nocobase/commit/f466e6ec954cf1a6849b546599c42968bbf9d5a3)
- Revert "fix(theme): исправление цвета меню заголовка (#3354)" [`3a06893`](https://github.com/nocobase/nocobase/commit/3a0689346350b94a5804d09edd9d5b703c162a02)

## [v0.19.0-alpha.3](https://github.com/nocobase/nocobase/compare/v0.19.0-alpha.2...v0.19.0-alpha.3) - 2024-01-09

### Объединено

- fix: e2e ci [`#3349`](https://github.com/nocobase/nocobase/pull/3349)
- fix: ошибка обновления поля коллекции [`#3352`](https://github.com/nocobase/nocobase/pull/3352)
- fix: очистка сборки [`#3351`](https://github.com/nocobase/nocobase/pull/3351)
- fix: добавление диапазона данных в выпадающий список формы фильтра [`#3321`](https://github.com/nocobase/nocobase/pull/3321)

### Коммиты

- chore(versions): 😊 публикация v0.19.0-alpha.3 [`38c1981`](https://github.com/nocobase/nocobase/commit/38c19818d361a5a17386b7a66d6aab73baf731b7)
- chore: обновление журнала изменений [`c1149d7`](https://github.com/nocobase/nocobase/commit/c1149d75f149f6caffe122527b5344a43391afc3)
- fix(client): скрытие свойства gmt [`f2de05b`](https://github.com/nocobase/nocobase/commit/f2de05bea022e8478f93b7ac211404135ebffb52)

## [v0.19.0-alpha.2](https://github.com/nocobase/nocobase/compare/v0.19.0-alpha.1...v0.19.0-alpha.2) - 2024-01-09

### Коммиты

- chore(versions): 😊 публикация v0.19.0-alpha.2 [`2070f20`](https://github.com/nocobase/nocobase/commit/2070f2046dde40d0a6ae29316515754cf1222fc9)
- chore: обновление журнала изменений [`1802ca6`](https://github.com/nocobase/nocobase/commit/1802ca648cf8b792a9235d2280969ef9ca6ca940)
- fix: ошибка создания файла сокета на Windows [`6567013`](https://github.com/nocobase/nocobase/commit/6567013440ab0ecad5b253b26448e1f9201bd9d5)

## [v0.19.0-alpha.1](https://github.com/nocobase/nocobase/compare/v0.18.0-alpha.9...v0.19.0-alpha.1) - 2024-01-08

### Объединено

- refactor: оптимизация командной строки [`#3339`](https://github.com/nocobase/nocobase/pull/3339)
- feat: резервное копирование и восстановление приложения [`#3268`](https://github.com/nocobase/nocobase/pull/3268)
- fix: ошибки параллелизма e2e рабочего процесса [`#3345`](https://github.com/nocobase/nocobase/pull/3345)
- test: e2e агрегатного узла рабочего процесса [`#3342`](https://github.com/nocobase/nocobase/pull/3342)
- test: e2e SQL-узла рабочего процесса [`#3341`](https://github.com/nocobase/nocobase/pull/3341)
- fix(z-index): предотвращение перекрытия всплывающих окон, обновление antd до v5.12.8 [`#3337`](https://github.com/nocobase/nocobase/pull/3337)
- refactor(plugin-workflow): добавление заголовка триггера для рабочего процесса, отличного от заголовка [`#3333`](https://github.com/nocobase/nocobase/pull/3333)
- fix(database): не удается найти модуль 'node-fetch' [`#3335`](https://github.com/nocobase/nocobase/pull/3335)
- chore(e2e): повышение стабильности режима параллелизма [`#3294`](https://github.com/nocobase/nocobase/pull/3294)
- fix(plugin-workflow-manual): корректировка локализации и столбца [`#3331`](https://github.com/nocobase/nocobase/pull/3331)
- feat: добавление пропсов onChange в SchemaComponent [`#3292`](https://github.com/nocobase/nocobase/pull/3292)
- fix: исправление T-2879 [`#3330`](https://github.com/nocobase/nocobase/pull/3330)
- refactor: всплывающая подсказка Gantt при наведении [`#3328`](https://github.com/nocobase/nocobase/pull/3328)
- refactor: представление коллекции должно исключать rawTitle при синхронизации из базы данных [`#3327`](https://github.com/nocobase/nocobase/pull/3327)
- fix: представление коллекции должно исключать rawTitle при синхронизации из базы данных [`#3326`](https://github.com/nocobase/nocobase/pull/3326)
- refactor(client): передача пропсов в список antd [`#3319`](https://github.com/nocobase/nocobase/pull/3319)
- perf(bi): оптимизация производительности блока фильтра диаграммы [`#3316`](https://github.com/nocobase/nocobase/pull/3316)
- fix: ошибка вложений при открытии модального окна предварительного просмотра в таблице [`#3318`](https://github.com/nocobase/nocobase/pull/3318)
- refactor(client): корректировка стиля элемента списка и исправление предупреждения [`#3315`](https://github.com/nocobase/nocobase/pull/3315)
- fix: z-index antd [`#3313`](https://github.com/nocobase/nocobase/pull/3313)
- fix: в среде разработки загружаются все плагины локально [`#3309`](https://github.com/nocobase/nocobase/pull/3309)
- fix(plugin-workflow): корректировка локализации [`#3308`](https://github.com/nocobase/nocobase/pull/3308)

### Коммиты

- chore(versions): 😊 публикация v0.19.0-alpha.1 [`c39d339`](https://github.com/nocobase/nocobase/commit/c39d3398ae637a1052f7c8d2d1aff7e6168bebf2)
- fix: e2e с сборкой [`fd4809d`](https://github.com/nocobase/nocobase/commit/fd4809d8ad4d09075864ed0fd0e6d15f687ca52b)
- chore: обновление журнала изменений [`d84d109`](https://github.com/nocobase/nocobase/commit/d84d10996cad67ca506a29b0887de84d2a97aeb8)

## [v0.18.0-alpha.9](https://github.com/nocobase/nocobase/compare/v0.18.0-alpha.8...v0.18.0-alpha.9) - 2024-01-03

### Объединено

- chore(plugin-workflow): добавление примера метрики [`#3305`](https://github.com/nocobase/nocobase/pull/3305)
- chore(vscode): добавление аргумента inspect для подключения к порту отладки [`#3307`](https://github.com/nocobase/nocobase/pull/3307)
- fix(client): блок деталей должен поддерживать сохранение как шаблон блока [`#3303`](https://github.com/nocobase/nocobase/pull/3303)
- feat(plugin-workflow-request): разрешить использование переменной в URL [`#3304`](https://github.com/nocobase/nocobase/pull/3304)
- fix: настройка формата даты должна поддерживать подтаблицу/блок таблицы [`#3297`](https://github.com/nocobase/nocobase/pull/3297)
- fix: селектор записей должен поддерживать настройку размера всплывающего окна [`#3299`](https://github.com/nocobase/nocobase/pull/3299)
- feat: телеметрия [`#3279`](https://github.com/nocobase/nocobase/pull/3279)
- chore(logger): добавление URL в сообщение журнала запросов [`#3296`](https://github.com/nocobase/nocobase/pull/3296)
- fix(defaultValue): исправление неразобранного значения по умолчанию в подтаблице формы редактирования [`#3289`](https://github.com/nocobase/nocobase/pull/3289)
- fix: previewFields [`#3293`](https://github.com/nocobase/nocobase/pull/3293)
- chore(logger): улучшение формата [`#3290`](https://github.com/nocobase/nocobase/pull/3290)
- fix: представление коллекции должно устанавливать значение заголовка при синхронизации из базы данных [`#3287`](https://github.com/nocobase/nocobase/pull/3287)
- fix: удаление кэша require [`#3288`](https://github.com/nocobase/nocobase/pull/3288)

### Коммиты

- chore(versions): 😊 публикация v0.18.0-alpha.9 [`004998a`](https://github.com/nocobase/nocobase/commit/004998a80af105af8669e17e189aa1f67d688200)
- chore: обновление журнала изменений [`32dd641`](https://github.com/nocobase/nocobase/commit/32dd64190b15dc6453628769b877c9f9683d3e35)
- fix(ui-schema-storage): дублирование пустой схемы [`5de28cd`](https://github.com/nocobase/nocobase/commit/5de28cd4c4525a72f8e78ce5696b39a3a9a0c65e)

## [v0.18.0-alpha.8](https://github.com/nocobase/nocobase/compare/v0.18.0-alpha.4...v0.18.0-alpha.8) - 2023-12-29

### Коммиты

- chore(versions): 😊 публикация v0.18.0-alpha.8 [`8bac8da`](https://github.com/nocobase/nocobase/commit/8bac8dac71feb545132917abaf7d0c014a9d9722)

## [v0.18.0-alpha.4](https://github.com/nocobase/nocobase/compare/v0.18.0-alpha.3...v0.18.0-alpha.4) - 2023-12-29

### Объединено

- refactor: отображение кнопки отправки в селекторе записей в зависимости от типа ассоциации [`#3283`](https://github.com/nocobase/nocobase/pull/3283)
- fix: использование параметра `appends` для загрузки данных ассоциации [`#3282`](https://github.com/nocobase/nocobase/pull/3282)

### Коммиты

- fix: добавление LICENSE [`6816ade`](https://github.com/nocobase/nocobase/commit/6816aded874e1a6ecefb2fee7d724f79ffa3536c)
- chore(versions): 😊 публикация v0.18.0-alpha.4 [`0882c0c`](https://github.com/nocobase/nocobase/commit/0882c0c4185373027b37987cbd16550f3f228f2e)
- chore: обновление журнала изменений [`0c12fbc`](https://github.com/nocobase/nocobase/commit/0c12fbce29b2af0ba849db8cd4601728cc36c0be)

## [v0.18.0-alpha.3](https://github.com/nocobase/nocobase/compare/v0.18.0-alpha.2...v0.18.0-alpha.3) - 2023-12-29

### Объединено

- refactor(plugin-workflow): корректировка некоторых API и пакетов [`#3281`](https://github.com/nocobase/nocobase/pull/3281)
- test(e2e): тестирование ACL (управление доступом) [`#3249`](https://github.com/nocobase/nocobase/pull/3249)
- test(e2e): добавление тестов для менеджера коллекций [`#3253`](https://github.com/nocobase/nocobase/pull/3253)
- test: рабочий процесс e2e [`#3261`](https://github.com/nocobase/nocobase/pull/3261)
- fix: ошибка создания блока ассоциации во внутреннем просмотрщике [`#3274`](https://github.com/nocobase/nocobase/pull/3274)
- fix: z-index должен иметь одинаковое значение [`#3278`](https://github.com/nocobase/nocobase/pull/3278)
- style: улучшение стиля полей менеджера коллекций [`#3276`](https://github.com/nocobase/nocobase/pull/3276)
- fix: загрузка модуля [`#3277`](https://github.com/nocobase/nocobase/pull/3277)
- chore: оптимизация конфигурации jsdom и vitest [`#3269`](https://github.com/nocobase/nocobase/pull/3269)
- refactor(logger): улучшение формата логгера [`#2664`](https://github.com/nocobase/nocobase/pull/2664)
- refactor(plugin-workflow): рефакторинг API [`#3267`](https://github.com/nocobase/nocobase/pull/3267)
- fix: селектор записей отображает неверные данные, если поле имеет значение по умолчанию в коллекции [`#3266`](https://github.com/nocobase/nocobase/pull/3266)
- fix: useParseDefaultValue [`#3264`](https://github.com/nocobase/nocobase/pull/3264)
- refactor: локальные улучшения [`#3265`](https://github.com/nocobase/nocobase/pull/3265)
- fix(plugin-workflow): защита от нереализованных типов триггеров [`#3263`](https://github.com/nocobase/nocobase/pull/3263)

### Коммиты

- chore(versions): 😊 публикация v0.18.0-alpha.3 [`501e3f1`](https://github.com/nocobase/nocobase/commit/501e3f1db23fccca5181ec59c932429ccf86c691)
- chore: обновление журнала изменений [`28759aa`](https://github.com/nocobase/nocobase/commit/28759aac074cbced9b9f56c520ab67f7f6c1da9c)
- feat: добавление метода `plugin.t()` [`95a5cab`](https://github.com/nocobase/nocobase/commit/95a5cab44ce74c2ca1aaade3cbfc218272adbe1e)

## [v0.18.0-alpha.2](https://github.com/nocobase/nocobase/compare/v0.18.0-alpha.1...v0.18.0-alpha.2) - 2023-12-25

### Объединено

- fix(database): принадлежность ассоциации только в дереве упреждающей загрузки [`#3259`](https://github.com/nocobase/nocobase/pull/3259)
- fix(plugin-workflow): очередь выполнения отключенного блока рабочего процесса [`#3256`](https://github.com/nocobase/nocobase/pull/3256)
- fix: исправление CLI для tsx [`#3254`](https://github.com/nocobase/nocobase/pull/3254)
- feat(plugin-workflow): добавление контроля пробелов в RadioWithTooltip [`#3252`](https://github.com/nocobase/nocobase/pull/3252)
- feat(plugin-calendar): добавление плагина календаря [`#3109`](https://github.com/nocobase/nocobase/pull/3109)
- fix(plugin-workflow-dynamic-calculation): исправление пропущенного компонента [`#3247`](https://github.com/nocobase/nocobase/pull/3247)
- refactor(client): разрешение фиксированного макета таблицы и класса ссылок действий [`#3246`](https://github.com/nocobase/nocobase/pull/3246)
- feat: операторы `$anyof` и `$noneOf` должны поддерживать не массивные значения [`#3244`](https://github.com/nocobase/nocobase/pull/3244)

### Коммиты

- chore(versions): 😊 публикация v0.18.0-alpha.2 [`e8f481a`](https://github.com/nocobase/nocobase/commit/e8f481ae6803f62e777bb82c7d533e3ff0eadc7b)
- chore: обновление журнала изменений [`c492977`](https://github.com/nocobase/nocobase/commit/c492977233d4e90ae9ffc00bfcb3be436fe55562)
- fix: некорректная версия tsx на Windows [`e4c9765`](https://github.com/nocobase/nocobase/commit/e4c97651bf873890e8a44480a65d26f9fa8735f6)

## [v0.18.0-alpha.1](https://github.com/nocobase/nocobase/compare/v0.17.0-alpha.7...v0.18.0-alpha.1) - 2023-12-21

### Объединено

- refactor: создание надежной системы тестирования [`#3179`](https://github.com/nocobase/nocobase/pull/3179)
- refactor(auth): перемещение клиента аутентификации из ядра в плагин и рефакторинг API клиента аутентификации [`#3215`](https://github.com/nocobase/nocobase/pull/3215)
- fix(drawer): исправление z-index [`#3242`](https://github.com/nocobase/nocobase/pull/3242)
- fix: ошибка дублирования значения в подтаблице при настройке области данных в выборе ассоциации [`#3239`](https://github.com/nocobase/nocobase/pull/3239)
- refactor(plugin-audit-log): удаление ненужной обертки функции [`#3237`](https://github.com/nocobase/nocobase/pull/3237)
- perf: удаление ленивой загрузки полей ассоциации [`#3222`](https://github.com/nocobase/nocobase/pull/3222)
- feat(acl): поддержка переменной "текущая роль" и фильтрации коллекций [`#3181`](https://github.com/nocobase/nocobase/pull/3181)
- refactor(plugin-workflow): добавление логов и try/catch для подготовки [`#3236`](https://github.com/nocobase/nocobase/pull/3236)
- chore: удаление поля из базы данных [`#3233`](https://github.com/nocobase/nocobase/pull/3233)
- fix(kanban): данные канбана на странице должны быть изолированы [`#3232`](https://github.com/nocobase/nocobase/pull/3232)
- fix(filter): исправление оператора `$in` [`#3235`](https://github.com/nocobase/nocobase/pull/3235)
- fix(localization): совместимость с именами пакетов плагинов как пространствами имен [`#3234`](https://github.com/nocobase/nocobase/pull/3234)
- fix: настройка добавления записи через `cusomeizeCreateFormBlockInitializers` [`#3230`](https://github.com/nocobase/nocobase/pull/3230)
- fix: обновление ассоциаций в репозитории "belongs to many" [`#3229`](https://github.com/nocobase/nocobase/pull/3229)
- fix: исправление переключения роли и стиля ввода [`#3226`](https://github.com/nocobase/nocobase/pull/3226)
- fix: tsx должен загружаться с помощью `--import`, а не `--loader` [`#3225`](https://github.com/nocobase/nocobase/pull/3225)
- feat: добавление вторичного подтверждения для прямого выполнения [`#3161`](https://github.com/nocobase/nocobase/pull/3161)
- fix(graph-collection-manager): отсутствие контекста приложения [`#3224`](https://github.com/nocobase/nocobase/pull/3224)
- fix(variable): локальные переменные не должны влиять на глобальные переменные [`#3214`](https://github.com/nocobase/nocobase/pull/3214)
- chore: обновление antd до v5.12.2 [`#3185`](https://github.com/nocobase/nocobase/pull/3185)
- feat(mobile-client): обновление текста кнопки предварительного просмотра [`#3189`](https://github.com/nocobase/nocobase/pull/3189)
- feat(ui-schema): nocobase-admin-menu и nocobase-mobile-container [`#3213`](https://github.com/nocobase/nocobase/pull/3213)
- feat: kanban, gantt, массовое редактирование, массовое обновление, дублирование и печать действия теперь являются плагинами [`#3019`](https://github.com/nocobase/nocobase/pull/3019)
- fix(core): невозможность добавления блока записи на новой вкладке в Drawer [`#3196`](https://github.com/nocobase/nocobase/pull/3196)
- fix(acl): оптимизация обработки ошибок, если у пользователя нет ролей [`#3190`](https://github.com/nocobase/nocobase/pull/3190)

### Коммиты

- chore(versions): 😊 публикация v0.18.0-alpha.1 [`95e6a32`](https://github.com/nocobase/nocobase/commit/95e6a3264762944038e0c53674404a9756d5b926)
- fix(e2e): изменение значения adminSchemaUid [`1eee7f5`](https://github.com/nocobase/nocobase/commit/1eee7f5f4ea1865af876ffc7e785ba3caf0b9027)
- chore: обновление журнала изменений [`7d2fe69`](https://github.com/nocobase/nocobase/commit/7d2fe699443cda69bb6691eacf2e1610dd1fce90)

## [v0.17.0-alpha.7](https://github.com/nocobase/nocobase/compare/v0.17.0-alpha.6...v0.17.0-alpha.7) - 2023-12-15

### Объединено

- fix: обновление зависимой версии cache-manager [`#3195`](https://github.com/nocobase/nocobase/pull/3195)
- fix: исправление T-2749 [`#3194`](https://github.com/nocobase/nocobase/pull/3194)
- feat(plugin-workflow-form): добавление имени роли в контекст триггера формы [`#3182`](https://github.com/nocobase/nocobase/pull/3182)
- feat: ручной выпуск [`#3184`](https://github.com/nocobase/nocobase/pull/3184)

### Коммиты

- chore(versions): 😊 публикация v0.17.0-alpha.7 [`d6dbc97`](https://github.com/nocobase/nocobase/commit/d6dbc970a5b74cde236d860286d387aa4373662c)
- chore: обновление журнала изменений [`22ea9d9`](https://github.com/nocobase/nocobase/commit/22ea9d95500023a4e1993839221d95ab036b7618)
- chore(database): обновление области прослушивания событий в коллекции [`f6fdec1`](https://github.com/nocobase/nocobase/commit/f6fdec1226c60754251179cf0393401db6964b62)

## [v0.17.0-alpha.6](https://github.com/nocobase/nocobase/compare/v0.17.0-alpha.5...v0.17.0-alpha.6) - 2023-12-13

### Объединено

- fix: загрузка плагинов dev в create-app [`#3183`](https://github.com/nocobase/nocobase/pull/3183)
- fix: обновление yarn.lock [`#3180`](https://github.com/nocobase/nocobase/pull/3180)
- test(e2e): добавление тестов для клиента [`#3144`](https://github.com/nocobase/nocobase/pull/3144)
- fix(plugin-workflow-manual): исправление компонента конфигурации схемы [`#3172`](https://github.com/nocobase/nocobase/pull/3172)
- fix: использование node:18-bullseye [`#3178`](https://github.com/nocobase/nocobase/pull/3178)

### Коммиты

- chore(versions): 😊 публикация v0.17.0-alpha.6 [`a702762`](https://github.com/nocobase/nocobase/commit/a702762ccabeeb1253d54cbce32dc55b4218ccf8)
- chore: обновление журнала изменений [`e9e2e73`](https://github.com/nocobase/nocobase/commit/e9e2e73efe0c2dbd17a7f0764393e1d15774e0c2)

## [v0.17.0-alpha.5](https://github.com/nocobase/nocobase/compare/v0.17.0-alpha.4...v0.17.0-alpha.5) - 2023-12-12

### Объединено

- perf(Server): оптимизация производительности API [`#3079`](https://github.com/nocobase/nocobase/pull/3079)
- chore: интерфейс запросов [`#3177`](https://github.com/nocobase/nocobase/pull/3177)

### Коммиты

- chore(versions): 😊 публикация v0.17.0-alpha.5 [`3530135`](https://github.com/nocobase/nocobase/commit/35301358de824690ef4ede2a38a02e618b4c8bce)
- chore: обновление журнала изменений [`7b74e99`](https://github.com/nocobase/nocobase/commit/7b74e999c9f13ed374f27cc3ce577b1e08471a77)
- chore: карта типов полей [`2c37910`](https://github.com/nocobase/nocobase/commit/2c379108948b0129db393791ef5dfab115b20b13)

## [v0.17.0-alpha.4](https://github.com/nocobase/nocobase/compare/v0.17.0-alpha.3...v0.17.0-alpha.4) - 2023-12-12

### Объединено

- fix(theme-editor): ошибка "Нет разрешения" при обновлении темы по умолчанию системы [`#3171`](https://github.com/nocobase/nocobase/pull/3171)
- fix: загрузка удаленного плагина в режиме разработки [`#3175`](https://github.com/nocobase/nocobase/pull/3175)
- fix: взаимное влияние значений подформ (всплывающее окно) в подтаблице [`#3164`](https://github.com/nocobase/nocobase/pull/3164)
- fix(plugin-workflow-manual): исправление инициализатора [`#3170`](https://github.com/nocobase/nocobase/pull/3170)
- feat(variable): добавление текущей роли [`#3167`](https://github.com/nocobase/nocobase/pull/3167)
- fix: версия плагина не обновляется после обновления [`#3166`](https://github.com/nocobase/nocobase/pull/3166)
- fix: скрытие подменю [`#3168`](https://github.com/nocobase/nocobase/pull/3168)
- fix(bi): ошибка импорта [`#3165`](https://github.com/nocobase/nocobase/pull/3165)
- refactor(plugin-workflow): разделение функций рабочего процесса на плагины [`#3115`](https://github.com/nocobase/nocobase/pull/3115)
- fix(bi): локализация [`#3159`](https://github.com/nocobase/nocobase/pull/3159)
- fix: значение по умолчанию не работает в подтаблице [`#3155`](https://github.com/nocobase/nocobase/pull/3155)
- fix(plugin-workflow): исправление локализации узла уничтожения [`#3150`](https://github.com/nocobase/nocobase/pull/3150)
- fix(lm): обновление текстов после обновления коллекции [`#3151`](https://github.com/nocobase/nocobase/pull/3151)

### Коммиты

- chore(versions): 😊 публикация v0.17.0-alpha.4 [`cf9ccfe`](https://github.com/nocobase/nocobase/commit/cf9ccfe4f9a5152590965efba0b663edc803229a)
- chore: обновление журнала изменений [`32b9541`](https://github.com/nocobase/nocobase/commit/32b95414beab5150672ebba4e9f238c2a35b1158)
- fix(mock-collections): уникальность моков [`efb6580`](https://github.com/nocobase/nocobase/commit/efb6580eaf08d009b9822f470c403cca313f8259)

## [v0.17.0-alpha.3](https://github.com/nocobase/nocobase/compare/v0.17.0-alpha.2...v0.17.0-alpha.3) - 2023-12-06

### Объединено

- fix: удаление корневой документации [`#3145`](https://github.com/nocobase/nocobase/pull/3145)
- fix(lm): неправильная версия миграции [`#3148`](https://github.com/nocobase/nocobase/pull/3148)
- fix(lm): резервирование i18n пространств имен для плагинов, чтобы избежать конфликтов [`#3121`](https://github.com/nocobase/nocobase/pull/3121)

### Коммиты

- chore(versions): 😊 публикация v0.17.0-alpha.3 [`eef101c`](https://github.com/nocobase/nocobase/commit/eef101c1778c540c43ef8a13b2c35b844e8cd49e)
- chore: обновление журнала изменений [`b44a985`](https://github.com/nocobase/nocobase/commit/b44a9851a1456e8daa43205eaaa08676c702f00f)

## [v0.17.0-alpha.2](https://github.com/nocobase/nocobase/compare/v0.17.0-alpha.1...v0.17.0-alpha.2) - 2023-12-06

### Объединено

- fix: настройки схемы действий по умолчанию [`#3146`](https://github.com/nocobase/nocobase/pull/3146)
- feat(bi): блок фильтра для диаграмм [`#2851`](https://github.com/nocobase/nocobase/pull/2851)
- fix: проверка правила uid [`#3140`](https://github.com/nocobase/nocobase/pull/3140)
- refactor: шаблон коллекции поддерживает настройку forbidDeletion [`#3139`](https://github.com/nocobase/nocobase/pull/3139)
- fix: ошибка высоты меню [`#3137`](https://github.com/nocobase/nocobase/pull/3137)
- fix: высота меню 50vh [`#3135`](https://github.com/nocobase/nocobase/pull/3135)
- refactor: правило проверки uid [`#3134`](https://github.com/nocobase/nocobase/pull/3134)

### Коммиты

- chore(versions): 😊 публикация v0.17.0-alpha.2 [`36fd488`](https://github.com/nocobase/nocobase/commit/36fd4881b26b99fe33b5bacdf7b502aa62d2ffb5)
- fix: загрузка поля при отсутствии исходной коллекции [`95bec22`](https://github.com/nocobase/nocobase/commit/95bec2278ff2f53dfb1307e47bc8aca90d5a606a)
- chore: обновление журнала изменений [`34e026c`](https://github.com/nocobase/nocobase/commit/34e026cec5742c1a1347f2969a03446fa98c44c3)

## [v0.17.0-alpha.1](https://github.com/nocobase/nocobase/compare/v0.16.0-alpha.6...v0.17.0-alpha.1) - 2023-12-04

### Объединено

- refactor: новый инициализатор схемы и настройки схемы [`#2802`](https://github.com/nocobase/nocobase/pull/2802)

### Коммиты

- chore(versions): 😊 публикация v0.17.0-alpha.1 [`1757a96`](https://github.com/nocobase/nocobase/commit/1757a96b51c7bb17f607b61467ab867e5add6567)
- chore: обновление журнала изменений [`69abfc9`](https://github.com/nocobase/nocobase/commit/69abfc98327b36bbc6b7e225294835bb457518d6)

## [v0.16.0-alpha.6](https://github.com/nocobase/nocobase/compare/v0.16.0-alpha.5...v0.16.0-alpha.6) - 2023-12-04

### Объединено

- fix: поле ассоциации должно поддерживать JSON-поле как поле заголовка [`#3129`](https://github.com/nocobase/nocobase/pull/3129)
- fix(client): разрешить регистронезависимый запрос [`#3127`](https://github.com/nocobase/nocobase/pull/3127)
- fix(plugin-workflow): исправление логики поиска узла условной ветви (исправление #3082) [`#3128`](https://github.com/nocobase/nocobase/pull/3128)
- refactor: URL и последовательность поддерживают availableType как строку [`#3126`](https://github.com/nocobase/nocobase/pull/3126)
- refactor: представление коллекции поддерживает JSON-поле [`#3125`](https://github.com/nocobase/nocobase/pull/3125)
- chore(users): удаление устаревшего кода [`#3122`](https://github.com/nocobase/nocobase/pull/3122)
- refactor: шаблон коллекции поддерживает configureActions [`#3123`](https://github.com/nocobase/nocobase/pull/3123)
- fix: onTemplateSuccess undefined [`#3119`](https://github.com/nocobase/nocobase/pull/3119)

### Исправлено

- fix(plugin-workflow): исправление логики поиска узла условной ветви (исправление #3082) (#3128) [`#3082`](https://github.com/nocobase/nocobase/issues/3082)

### Коммиты

- chore(versions): 😊 публикация v0.16.0-alpha.6 [`9d64430`](https://github.com/nocobase/nocobase/commit/9d644304c10be0f8404f2f3370a43d2dc00e8aed)
- chore: обновление журнала изменений [`06ba3bf`](https://github.com/nocobase/nocobase/commit/06ba3bffcbdf1fd44f5b7b17fb83314a91d96a40)
- feat: улучшение мок-записей [`bfeaf45`](https://github.com/nocobase/nocobase/commit/bfeaf456b9d821f2fdb54ecd797da8d476d5f87a)

## [v0.16.0-alpha.5](https://github.com/nocobase/nocobase/compare/v0.16.0-alpha.4...v0.16.0-alpha.5) - 2023-11-30

### Объединено

- fix(pm): ошибка создания плагина [`#3117`](https://github.com/nocobase/nocobase/pull/3117)
- fix: неопределенные параметры полей [`#3116`](https://github.com/nocobase/nocobase/pull/3116)
- refactor: поле карты поддерживает подключение как поле удаленной таблицы [`#3114`](https://github.com/nocobase/nocobase/pull/3114)
- fix(linkageRules): исправление автозапуска [`#3105`](https://github.com/nocobase/nocobase/pull/3105)
- chore: синхронизация коллекции после установки полей коллекции [`#3112`](https://github.com/nocobase/nocobase/pull/3112)
- fix(client): корректировка сообщения об ошибке [`#3108`](https://github.com/nocobase/nocobase/pull/3108)
- fix(plugin-workflow): исправление анализа переменных события формы [`#3106`](https://github.com/nocobase/nocobase/pull/3106)
- chore: первичный ключ представления [`#3107`](https://github.com/nocobase/nocobase/pull/3107)
- fix: запрос к коллекции представления с первичным ключом [`#3104`](https://github.com/nocobase/nocobase/pull/3104)
- fix: отсутствие параметров данных ассоциации appends [`#3103`](https://github.com/nocobase/nocobase/pull/3103)
- fix(plugin-api-doc): сбой неглавного приложения [`#3100`](https://github.com/nocobase/nocobase/pull/3100)
- fix(linkageRules): предотвращение бесконечного цикла [`#3095`](https://github.com/nocobase/nocobase/pull/3095)
- fix(bi): исправление T-2643 [`#3101`](https://github.com/nocobase/nocobase/pull/3101)
- chore: кэширование результатов эффективных сниппетов в ACL-роли [`#3102`](https://github.com/nocobase/nocobase/pull/3102)
- feat(database): поддержка поиска с фильтром и where [`#3097`](https://github.com/nocobase/nocobase/pull/3097)
- fix(plugin-workflow): исправление триггера расписания [`#3096`](https://github.com/nocobase/nocobase/pull/3096)
- fix: типы создателя тестовой базы данных [`#3094`](https://github.com/nocobase/nocobase/pull/3094)
- test: загрузка через коллекцию с первичными ключами [`#3093`](https://github.com/nocobase/nocobase/pull/3093)

### Коммиты

- chore(versions): 😊 публикация v0.16.0-alpha.5 [`8977420`](https://github.com/nocobase/nocobase/commit/8977420eecb3f17140f7d55a73d8aebbb5aed7a4)
- chore: обновление журнала изменений [`f4df696`](https://github.com/nocobase/nocobase/commit/f4df696bfa9fe4fb49509273058afe094b90ccee)
- fix(cli): небезопасная команда оболочки, созданная из входных данных библиотеки [`5ebd5d5`](https://github.com/nocobase/nocobase/commit/5ebd5d5c625742d65ad8c113336dfca4c14eb1f5)

## [v0.16.0-alpha.4](https://github.com/nocobase/nocobase/compare/v0.16.0-alpha.3...v0.16.0-alpha.4) - 2023-11-24

### Объединено

### Объединено

- refactor: избегание ошибок [`#3091`](https://github.com/nocobase/nocobase/pull/3091)
- fix: предотвращение бесконечного цикла [`#3089`](https://github.com/nocobase/nocobase/pull/3089)
- refactor: интерфейс импорта getOptions [`#3088`](https://github.com/nocobase/nocobase/pull/3088)
- fix: проблема создания SQL-коллекции [`#3087`](https://github.com/nocobase/nocobase/pull/3087)
- refactor(plugin-workflow): отображение заголовка вручную в Drawer [`#3085`](https://github.com/nocobase/nocobase/pull/3085)
- fix: загрузка данных ассоциации в подформе [`#3083`](https://github.com/nocobase/nocobase/pull/3083)
- fix: ошибка рендеринга JSON-поля в представлении коллекции [`#3077`](https://github.com/nocobase/nocobase/pull/3077)
- fix: поле ассоциации m2o должно поддерживать настройку шаблона [`#3074`](https://github.com/nocobase/nocobase/pull/3074)
- fix: исчезновение подформы [`#3073`](https://github.com/nocobase/nocobase/pull/3073)
- fix(plugin-mobile-client): исчезновение содержимого страницы при отключении вкладки [`#3059`](https://github.com/nocobase/nocobase/pull/3059)
- fix(client): исправление стиля ввода переменной при отключении [`#3071`](https://github.com/nocobase/nocobase/pull/3071)
- fix: проблема производительности обновления унаследованной коллекции [`#3070`](https://github.com/nocobase/nocobase/pull/3070)
- fix(linkage): предотвращение бесконечного цикла [`#3069`](https://github.com/nocobase/nocobase/pull/3069)
- fix: добавление i18n ресурсов после загрузки Server-приложения [`#3068`](https://github.com/nocobase/nocobase/pull/3068)
- fix: правило связывания в наборе действий одновременно отключает и включает [`#3065`](https://github.com/nocobase/nocobase/pull/3065)

### Коммиты

- chore(versions): 😊 публикация v0.16.0-alpha.4 [`ffb300d`](https://github.com/nocobase/nocobase/commit/ffb300d357b2a8d1e63fcab1ba44cbf9a205999f)
- chore: обновление журнала изменений [`3a0a0d1`](https://github.com/nocobase/nocobase/commit/3a0a0d13e9d079b9755a93151dd019978382562e)
- fix: путь плагинов разработки [`992f2d4`](https://github.com/nocobase/nocobase/commit/992f2d442de0f04d0c87bb2b07fb46d704df10a7)

## [v0.16.0-alpha.3](https://github.com/nocobase/nocobase/compare/v0.16.0-alpha.1...v0.16.0-alpha.3) - 2023-11-20

### Объединено

- feat: node &gt;= 18 [`#3066`](https://github.com/nocobase/nocobase/pull/3066)

### Коммиты

- chore(versions): 😊 публикация v0.16.0-alpha.3 [`cba9679`](https://github.com/nocobase/nocobase/commit/cba967933e4b7ccf91b306230e6ea5be5a3e1c7b)
- chore: обновление журнала изменений [`408ee49`](https://github.com/nocobase/nocobase/commit/408ee49a58f6cbc4a2c0c1719f73a5517ac8906c)

## [v0.16.0-alpha.1](https://github.com/nocobase/nocobase/compare/v0.15.0-alpha.4...v0.16.0-alpha.1) - 2023-11-20

### Объединено

- refactor(cache): улучшение кэширования [`#3004`](https://github.com/nocobase/nocobase/pull/3004)
- fix: базовый URL локального хранилища [`#3063`](https://github.com/nocobase/nocobase/pull/3063)
- feat: отображение определения таблицы [`#3061`](https://github.com/nocobase/nocobase/pull/3061)
- feat: поддержка MariaDB [`#3052`](https://github.com/nocobase/nocobase/pull/3052)
- fix(plugin-workflow): небольшие исправления клиента [`#3062`](https://github.com/nocobase/nocobase/pull/3062)
- chore: вывод представления [`#3060`](https://github.com/nocobase/nocobase/pull/3060)
- fix: сортировка по ассоциативной коллекции [`#3058`](https://github.com/nocobase/nocobase/pull/3058)

### Коммиты

- chore(versions): 😊 публикация v0.16.0-alpha.1 [`91053b3`](https://github.com/nocobase/nocobase/commit/91053b31efc1038b710deebc874dab4ac5d797f3)
- chore: обновление журнала изменений [`635dcfd`](https://github.com/nocobase/nocobase/commit/635dcfdbd5873479d1e191faacf956c5f9f25411)

## [v0.15.0-alpha.4](https://github.com/nocobase/nocobase/compare/v0.15.0-alpha.3...v0.15.0-alpha.4) - 2023-11-18

### Объединено

- fix(calendar): невозможность переключения недели в режиме недели [`#3057`](https://github.com/nocobase/nocobase/pull/3057)
- feat(e2e): добавление mockCollections [`#3054`](https://github.com/nocobase/nocobase/pull/3054)
- fix: блок таблицы ассоциации перезаписывается значениями по умолчанию в действии popover [`#3056`](https://github.com/nocobase/nocobase/pull/3056)
- feat: регистрация логики синхронизации коллекции [`#3055`](https://github.com/nocobase/nocobase/pull/3055)
- fix: tableoid должен указывать на целевую коллекцию в конфигурации области данных поля ассоциации [`#3053`](https://github.com/nocobase/nocobase/pull/3053)

### Коммиты

- chore(versions): 😊 публикация v0.15.0-alpha.4 [`ef1b9db`](https://github.com/nocobase/nocobase/commit/ef1b9db2a991eef61e03407439e52458ec2d1b3d)
- chore: обновление журнала изменений [`54caf05`](https://github.com/nocobase/nocobase/commit/54caf05ba48bbb1acf8fe5c56ba2a8614d714faa)
- fix: импорт @nocobase/utils/client [`4a26b9b`](https://github.com/nocobase/nocobase/commit/4a26b9b20853961fc9ec7035dbab5e61f5ca60fa)

## [v0.15.0-alpha.3](https://github.com/nocobase/nocobase/compare/v0.15.0-alpha.2...v0.15.0-alpha.3) - 2023-11-16

### Объединено

- feat: команды e2e [`#3042`](https://github.com/nocobase/nocobase/pull/3042)
- Revert "chore: скрытие опции правила связывания в некоторых кнопках (#3046)" [`#3051`](https://github.com/nocobase/nocobase/pull/3051)
- chore: скрытие опции правила связывания в некоторых кнопках [`#3046`](https://github.com/nocobase/nocobase/pull/3046)
- feat: фабрика коллекций [`#3047`](https://github.com/nocobase/nocobase/pull/3047)
- fix: параметры фильтра блока ассоциации [`#3039`](https://github.com/nocobase/nocobase/pull/3039)
- fix(plugin-fm): исправление ошибки в логах [`#3038`](https://github.com/nocobase/nocobase/pull/3038)
- refactor: findSchema должен исключать AssociationField.Viewer [`#3037`](https://github.com/nocobase/nocobase/pull/3037)
- fix: исправление отображения полей ассоциации с подформой [`#3036`](https://github.com/nocobase/nocobase/pull/3036)
- test: оптимизация команды [`#3030`](https://github.com/nocobase/nocobase/pull/3030)
- fix: поле вложений в поле ассоциации m2m вызывает ошибку при установке required [`#3031`](https://github.com/nocobase/nocobase/pull/3031)

### Коммиты

- chore(versions): 😊 публикация v0.15.0-alpha.3 [`60112aa`](https://github.com/nocobase/nocobase/commit/60112aae62801a98969ebafe6af082f005555328)
- chore: обновление журнала изменений [`13be8d0`](https://github.com/nocobase/nocobase/commit/13be8d012f69367f141dfa0bf6193c7f909aa2cd)

## [v0.15.0-alpha.2](https://github.com/nocobase/nocobase/compare/v0.15.0-alpha.1...v0.15.0-alpha.2) - 2023-11-13

### Объединено

- fix: ошибка ref в таблице antd [`#3029`](https://github.com/nocobase/nocobase/pull/3029)
- fix: улучшение кода настроек плагина [`#3028`](https://github.com/nocobase/nocobase/pull/3028)
- fix: Component в настройках плагина является необязательным, удаление isBookmark [`#3027`](https://github.com/nocobase/nocobase/pull/3027)
- fix(plugin-workflow): исправление отображения заголовка рабочего процесса в конфигурации привязки рабочего процесса [`#3026`](https://github.com/nocobase/nocobase/pull/3026)

### Коммиты

- chore(versions): 😊 публикация v0.15.0-alpha.2 [`b597aec`](https://github.com/nocobase/nocobase/commit/b597aec1dc15d6c7709e2621961f7c2e793d5a61)
- chore: обновление журнала изменений [`9dae34a`](https://github.com/nocobase/nocobase/commit/9dae34a613b5da2e138873d398f9727ae28ff705)

## [v0.15.0-alpha.1](https://github.com/nocobase/nocobase/compare/v0.14.0-alpha.8...v0.15.0-alpha.1) - 2023-11-13

### Объединено

- refactor: менеджер настроек плагинов [`#2712`](https://github.com/nocobase/nocobase/pull/2712)
- fix: исправление регулярного выражения для переменной [`#3024`](https://github.com/nocobase/nocobase/pull/3024)
- fix: загрузка данных ассоциации в подформе [`#3020`](https://github.com/nocobase/nocobase/pull/3020)
- fix: ошибка добавления поля ассоциации в блок ссылок [`#2998`](https://github.com/nocobase/nocobase/pull/2998)
- fix: корректная загрузка связанных данных при первом рендере [`#3016`](https://github.com/nocobase/nocobase/pull/3016)
- feat: плагин mock-collections [`#2988`](https://github.com/nocobase/nocobase/pull/2988)
- Update pull_request_template.md [`#3013`](https://github.com/nocobase/nocobase/pull/3013)
- fix: ленивая загрузка данных ассоциации в подформе [`#3012`](https://github.com/nocobase/nocobase/pull/3012)
- fix(import): удаление запятых из чисел [`#3011`](https://github.com/nocobase/nocobase/pull/3011)
- fix(static-Server): directoryListing: false [`#3010`](https://github.com/nocobase/nocobase/pull/3010)
- fix(theme): цвет текста правой части заголовка страницы [`#3008`](https://github.com/nocobase/nocobase/pull/3008)
- fix: ошибка проектирования меню при пустом заголовке [`#2999`](https://github.com/nocobase/nocobase/pull/2999)
- fix(plugin-workflow): добавление пропущенного компонента [`#3007`](https://github.com/nocobase/nocobase/pull/3007)
- fix: блок деталей без данных [`#3003`](https://github.com/nocobase/nocobase/pull/3003)
- refactor(plugin-workflow): разрешение использования функции для значений при создании узла [`#3002`](https://github.com/nocobase/nocobase/pull/3002)
- fix(plugin-workflow): исправление логики закрытия конфигурационного ящика [`#3001`](https://github.com/nocobase/nocobase/pull/3001)
- chore: добавление aria-label для таблицы рабочих процессов [`#2995`](https://github.com/nocobase/nocobase/pull/2995)
- fix: элемент выбора не может быть выбран в блоках подключенных данных [`#2993`](https://github.com/nocobase/nocobase/pull/2993)
- chore: оптимизация сообщения об ошибке [`#2992`](https://github.com/nocobase/nocobase/pull/2992)
- refactor(plugin-workflow): изменение на функцию [`#2991`](https://github.com/nocobase/nocobase/pull/2991)
- fix(plugin-workflow): исправление переменной области цикла [`#2989`](https://github.com/nocobase/nocobase/pull/2989)
- chore: оптимизация сообщения об ошибке [`#2985`](https://github.com/nocobase/nocobase/pull/2985)
- fix(formula-field): поле формулы не выполняет реальное вычисление и поддерживает подформы [`#2983`](https://github.com/nocobase/nocobase/pull/2983)
- fix: выбор ассоциации не должен очищаться после настройки области данных [`#2984`](https://github.com/nocobase/nocobase/pull/2984)
- fix(plugin-workflow): исправление значений формы узла при закрытии [`#2978`](https://github.com/nocobase/nocobase/pull/2978)
- fix: кнопка деталей не обновляется при обновлении записи [`#2977`](https://github.com/nocobase/nocobase/pull/2977)
- fix: исправление CI документации [`#2976`](https://github.com/nocobase/nocobase/pull/2976)
- fix: предотвращение бесконечного цикла [`#2974`](https://github.com/nocobase/nocobase/pull/2974)
- feat: удаление таблицы с каскадным вариантом [`#2973`](https://github.com/nocobase/nocobase/pull/2973)
- fix: документация клиента [`#2965`](https://github.com/nocobase/nocobase/pull/2965)
- fix(variable): совместимость $date [`#2971`](https://github.com/nocobase/nocobase/pull/2971)
- fix: добавление дочернего действия должно исключать данные детей [`#2969`](https://github.com/nocobase/nocobase/pull/2969)
- chore: уничтожение коллекции в плагине общей коллекции [`#2968`](https://github.com/nocobase/nocobase/pull/2968)
- fix: ошибка приложения [`#2958`](https://github.com/nocobase/nocobase/pull/2958)
- perf: предотвращение задержек или заиканий страницы [`#2964`](https://github.com/nocobase/nocobase/pull/2964)
- fix: компонент процентного поля должен поддерживать десятичную точку [`#2966`](https://github.com/nocobase/nocobase/pull/2966)
- refactor: удаление ненужного кода [`#2961`](https://github.com/nocobase/nocobase/pull/2961)
- test: тестирование пользовательского интерфейса клиента [`#2736`](https://github.com/nocobase/nocobase/pull/2736)
- fix: действие импорта не должно быть видимым, если коллекция представления не редактируема [`#2957`](https://github.com/nocobase/nocobase/pull/2957)
- refactor(plugin-workflow): добавление экспорта для клиента [`#2960`](https://github.com/nocobase/nocobase/pull/2960)
- fix(plugin-workflow): исправление стиля холста [`#2959`](https://github.com/nocobase/nocobase/pull/2959)
- fix(plugin-workflow): исправление переменных и изменений формы [`#2955`](https://github.com/nocobase/nocobase/pull/2955)
- test(custom-request): обновление тестового случая для избежания сбоев [`#2954`](https://github.com/nocobase/nocobase/pull/2954)
- fix: создание коллекции вызывает ошибку [`#2953`](https://github.com/nocobase/nocobase/pull/2953)
- fix: целевая коллекция, указанная tableoid, неверна [`#2952`](https://github.com/nocobase/nocobase/pull/2952)
- feat(plugin-workflow): добавление масштабирования для холста рабочего процесса [`#2951`](https://github.com/nocobase/nocobase/pull/2951)
- feat(map-plugin): поддержка соединения каждой точки в линию [`#2216`](https://github.com/nocobase/nocobase/pull/2216)
- fix(calendar): некорректные данные следующего месяца [`#2942`](https://github.com/nocobase/nocobase/pull/2942)
- fix(custom-request): parsed не работает, если значение переменной имеет тип o2m [`#2926`](https://github.com/nocobase/nocobase/pull/2926)
- fix: улучшение параметров локального хранилища [`#2943`](https://github.com/nocobase/nocobase/pull/2943)

### Коммиты

- chore(versions): 😊 публикация v0.15.0-alpha.1 [`29457cb`](https://github.com/nocobase/nocobase/commit/29457cb2bc4e795ec21fa25566fda37b7e36cd9a)
- chore: обновление журнала изменений [`3b2ad2f`](https://github.com/nocobase/nocobase/commit/3b2ad2fa9fd2d07c029a008076012498e1a4d6db)
- исправление: переменная окружения APPEND_PRESET_LOCAL_PLUGINS [`5c93750`](https://github.com/nocobase/nocobase/commit/5c937500b7ca62ec4c096c5a697f703d9d419097)

## [v0.14.0-alpha.8](https://github.com/nocobase/nocobase/compare/v0.14.0-alpha.7...v0.14.0-alpha.8) - 2023-11-01

### Объединено

- fix(e2e): APP_BASE_URL [`#2938`](https://github.com/nocobase/nocobase/pull/2938)
- refactor(variable): переименование [`#2937`](https://github.com/nocobase/nocobase/pull/2937)
- fix(plugin-workflow): корректировка стилей [`#2934`](https://github.com/nocobase/nocobase/pull/2934)
- fix: ошибка миграции темы [`#2929`](https://github.com/nocobase/nocobase/pull/2929)
- refactor(plugin-workflow): добавлено свойство end к ветке [`#2928`](https://github.com/nocobase/nocobase/pull/2928)
- fix(plugin-workflow): исправлена миграция [`#2927`](https://github.com/nocobase/nocobase/pull/2927)
- fix: быстрый старт приложения [`#2921`](https://github.com/nocobase/nocobase/pull/2921)
- chore(theme-editor): добавлена миграция [`#2367`](https://github.com/nocobase/nocobase/pull/2367)
- feat(e2e): добавлен тест test.pgOnly [`#2923`](https://github.com/nocobase/nocobase/pull/2923)
- chore: оптимизация локаторов [`#2833`](https://github.com/nocobase/nocobase/pull/2833)
- chore(e2e): база postgres в CI для запуска e2e [`#2924`](https://github.com/nocobase/nocobase/pull/2924)
- refactor(plugin-workflow): корректировка стилей веток [`#2922`](https://github.com/nocobase/nocobase/pull/2922)
- feat: бенчмарк фреймворка [`#2915`](https://github.com/nocobase/nocobase/pull/2915)
- refactor: сброс значений формы после действия создания [`#2905`](https://github.com/nocobase/nocobase/pull/2905)
- chore: обновление @formily/antd-v5 [`#2920`](https://github.com/nocobase/nocobase/pull/2920)
- fix(core): печать не работает при наличии подформ или поддеталей [`#2852`](https://github.com/nocobase/nocobase/pull/2852)
- fix: блок ассоциации не был связан после добавления данных [`#2907`](https://github.com/nocobase/nocobase/pull/2907)
- feat: plugin-disable-pm-add-online [`#2918`](https://github.com/nocobase/nocobase/pull/2918)
- fix: ошибка при создании действия post с пустым значением [`#2916`](https://github.com/nocobase/nocobase/pull/2916)
- fix: удаленные плагины больше не добавляются при обновлении [`#2917`](https://github.com/nocobase/nocobase/pull/2917)
- refactor(plugin-workflow): изменение использования ключа узла для переменных [`#2909`](https://github.com/nocobase/nocobase/pull/2909)
- fix: исчезновение опции fixed-block [`#2914`](https://github.com/nocobase/nocobase/pull/2914)
- fix: правила связывания вызывают аномальное отображение поля [`#2913`](https://github.com/nocobase/nocobase/pull/2913)
- fix: useRecord [`#2911`](https://github.com/nocobase/nocobase/pull/2911)
- fix: useValuesFromRecord с cloneDeep [`#2902`](https://github.com/nocobase/nocobase/pull/2902)
- fix: исправление приложения в состоянии инициализации [`#2908`](https://github.com/nocobase/nocobase/pull/2908)
- fix: ошибка отображения заголовка cascadeSelect [`#2904`](https://github.com/nocobase/nocobase/pull/2904)
- fix: foreignKey undefined в поле ассоциации [`#2903`](https://github.com/nocobase/nocobase/pull/2903)
- fix: переполнение памяти в правилах связывания [`#2899`](https://github.com/nocobase/nocobase/pull/2899)
- fix: удаление поиска по packageName [`#2901`](https://github.com/nocobase/nocobase/pull/2901)
### Объединено

- refactor(plugin-workflow): добавлена проверка isAvailable для добавления узла [`#2898`](https://github.com/nocobase/nocobase/pull/2898)
- fix: селектор fileManager должен быть радио, если не разрешено множественное выбор [`#2884`](https://github.com/nocobase/nocobase/pull/2884)
- fix(plugin-workflow): исправлена работа планировщика workflow в обычных мульти-приложениях [`#2896`](https://github.com/nocobase/nocobase/pull/2896)
- chore: предоставление опции auth manager в приложении [`#2894`](https://github.com/nocobase/nocobase/pull/2894)
- fix(plugin-workflow): исправлено переполнение стека при циклической ассоциации [`#2892`](https://github.com/nocobase/nocobase/pull/2892)
- chore: создание базы данных подприложения с контекстом [`#2891`](https://github.com/nocobase/nocobase/pull/2891)
- refactor(plugin-workflow): добавлено свойство для определения типа workflow, запускаемого на UI [`#2890`](https://github.com/nocobase/nocobase/pull/2890)
- fix(variable): совместимость со старыми именами переменных [`#2889`](https://github.com/nocobase/nocobase/pull/2889)
- fix: исчезновение данных подформы [`#2888`](https://github.com/nocobase/nocobase/pull/2888)
- fix(variable): исправлен currentObject [`#2887`](https://github.com/nocobase/nocobase/pull/2887)
- refactor: очистка связей в assocation select file [`#2885`](https://github.com/nocobase/nocobase/pull/2885)
- fix(plugin-custom-request): улучшен стиль кнопки X и afterSuccess не работает при включенном manualClose [`#2882`](https://github.com/nocobase/nocobase/pull/2882)
- fix(variable): все поля currentForm и currentObject сделаны необязательными [`#2878`](https://github.com/nocobase/nocobase/pull/2878)
- fix(plugin-workflow): исправлен язык [`#2881`](https://github.com/nocobase/nocobase/pull/2881)
- fix: состояния без UI должны отображать только соответствующий блок коллекции [`#2879`](https://github.com/nocobase/nocobase/pull/2879)
- fix: ошибка рендеринга assocition select в режиме создания [`#2880`](https://github.com/nocobase/nocobase/pull/2880)
- fix: связь действий не работает в блоке деталей [`#2875`](https://github.com/nocobase/nocobase/pull/2875)
- fix: record picker не обновлял список после добавления данных [`#2877`](https://github.com/nocobase/nocobase/pull/2877)
- fix: неправильный рендеринг поля select в блоке ассоциаций [`#2876`](https://github.com/nocobase/nocobase/pull/2876)
- feat(variable): добавлена текущая родительская запись [`#2857`](https://github.com/nocobase/nocobase/pull/2857)
- fix(plugin-custom-request): переменные не работают в блоке формы [`#2873`](https://github.com/nocobase/nocobase/pull/2873)
- fix: удаленное имя плагина [`#2872`](https://github.com/nocobase/nocobase/pull/2872)
- feat(database): добавлена опция sync false [`#2864`](https://github.com/nocobase/nocobase/pull/2864)
- fix(client): исправлена ошибка setRange в textarea переменной [`#2862`](https://github.com/nocobase/nocobase/pull/2862)
- fix: после успешной отправки не удалось настроить redirectTo [`#2867`](https://github.com/nocobase/nocobase/pull/2867)
- fix: поле m2o ассоциации не должно разрешать подтаблицу как компонент поля [`#2865`](https://github.com/nocobase/nocobase/pull/2865)
- fix(plugin-sequence): избегание недопустимых значений из `ArrayTable.useRecord()` [`#2859`](https://github.com/nocobase/nocobase/pull/2859)
- fix: поле в блоке деталей не должно позволять настраивать значение по умолчанию [`#2858`](https://github.com/nocobase/nocobase/pull/2858)
- chore: кэширование yarn в CI [`#2853`](https://github.com/nocobase/nocobase/pull/2853)
- feat(ci): параллельный запуск тестов бэкенда [`#2815`](https://github.com/nocobase/nocobase/pull/2815)
- feat(custom-request): улучшена кнопка X переменной [`#2829`](https://github.com/nocobase/nocobase/pull/2829)
- docs(plugin-api-keys): добавлено предупреждение для API_KEY env [`#2847`](https://github.com/nocobase/nocobase/pull/2847)
- refactor(client): добавлены экспорты [`#2846`](https://github.com/nocobase/nocobase/pull/2846)
- fix(variable): должен быть currentObject в подблоках [`#2823`](https://github.com/nocobase/nocobase/pull/2823)
- fix: отменены правила связывания [`#2821`](https://github.com/nocobase/nocobase/pull/2821)
- fix: не следует отображать currentRecord в форме создания блока [`#2814`](https://github.com/nocobase/nocobase/pull/2814)
- fix(plugin-workflow): исправлен язык [`#2844`](https://github.com/nocobase/nocobase/pull/2844)
- fix: исправлена ошибка codesandbox [`#2842`](https://github.com/nocobase/nocobase/pull/2842)
- revert: лог ассоциативного поля [`#2840`](https://github.com/nocobase/nocobase/pull/2840)
- fix: поле ассоциации в assign field должно устанавливать заголовок как конфигурацию поля коллекции [`#2839`](https://github.com/nocobase/nocobase/pull/2839)
- fix: источник версии [`#2836`](https://github.com/nocobase/nocobase/pull/2836)
- fix(plugin-workflow): исправлен порядок действий в списке workflow [`#2835`](https://github.com/nocobase/nocobase/pull/2835)
- fix(file-manager): улучшена логика инициализации [`#2834`](https://github.com/nocobase/nocobase/pull/2834)
- feat: поддержка фильтрации блоков в ящике выбора записей [`#2828`](https://github.com/nocobase/nocobase/pull/2828)
- fix: удаленный плагин [`#2831`](https://github.com/nocobase/nocobase/pull/2831)
- fix: исправлен автоматически закрывающийся диалог [`#2825`](https://github.com/nocobase/nocobase/pull/2825)
- feat(auth): добавлен глобальный провайдер токена авторизации [`#2824`](https://github.com/nocobase/nocobase/pull/2824)
- feat(file-manager): поддержка настройки правил миниатюр [`#2810`](https://github.com/nocobase/nocobase/pull/2810)
- feat(client): добавлен disabled для переключателя инициализатора и undeletable для настроек действия [`#2820`](https://github.com/nocobase/nocobase/pull/2820)
- refactor(plugin-workflow): изменен интерфейс и клиентский API [`#2817`](https://github.com/nocobase/nocobase/pull/2817)
- fix(client): исправлено предупреждение компонента действия [`#2818`](https://github.com/nocobase/nocobase/pull/2818)
- fix: множественный выбор должен назначаться null после очистки значения [`#2822`](https://github.com/nocobase/nocobase/pull/2822)
- feat(plugin-custom-request): улучшена поддержка custom-request [`#2536`](https://github.com/nocobase/nocobase/pull/2536)
- fix: cascadeselect выдает ошибку в поле ассоциации m2m [`#2819`](https://github.com/nocobase/nocobase/pull/2819)
- fix(plugin-workflow): игнорирование выполнений в очереди, если workflow был удален [`#2808`](https://github.com/nocobase/nocobase/pull/2808)
### Объединено

- fix: модальное окно assign field не открывается [`#2807`](https://github.com/nocobase/nocobase/pull/2807)
- fix(auth): проблемы SSO [`#2733`](https://github.com/nocobase/nocobase/pull/2733)
- fix: ошибка области данных с недопустимыми переменными [`#2811`](https://github.com/nocobase/nocobase/pull/2811)
- style: макет формы для модального окна действия импорта [`#2809`](https://github.com/nocobase/nocobase/pull/2809)
- fix: параметры должны очищаться при изменении области данных [`#2800`](https://github.com/nocobase/nocobase/pull/2800)
- test: подтверждение работоспособности тестов e2e [`#2799`](https://github.com/nocobase/nocobase/pull/2799)
- fix: отображаемое поле ввода должно соответствовать типу поля [`#2805`](https://github.com/nocobase/nocobase/pull/2805)
- fix(bi): запрос с `limit` [`#2803`](https://github.com/nocobase/nocobase/pull/2803)
- fix: record picker не может выбрать данные при редактировании [`#2798`](https://github.com/nocobase/nocobase/pull/2798)
- feat: добавлена функция измерения выполнения [`#2801`](https://github.com/nocobase/nocobase/pull/2801)
- chore(bi): завершено API диаграмм [`#2771`](https://github.com/nocobase/nocobase/pull/2771)
- fix: исправлен неправильный способ определения типа формы [`#2787`](https://github.com/nocobase/nocobase/pull/2787)
- fix: ошибка [`#2797`](https://github.com/nocobase/nocobase/pull/2797)
- fix: не следует показывать загрузку, если children пуст в меню [`#2796`](https://github.com/nocobase/nocobase/pull/2796)
- fix: следует сохранять операторы [`#2794`](https://github.com/nocobase/nocobase/pull/2794)
- fix(client): исправлено undefined метода поля на кнопке [`#2795`](https://github.com/nocobase/nocobase/pull/2795)
- fix: связь области данных в поле ассоциации [`#2786`](https://github.com/nocobase/nocobase/pull/2786)
- chore(e2e): удаление ключа collectionName [`#2783`](https://github.com/nocobase/nocobase/pull/2783)
- fix(client): исправлен рендеринг, вызывающий ошибку диапазона [`#2785`](https://github.com/nocobase/nocobase/pull/2785)
- chore(collection-manager): выброс ошибки, если значение foreignKey совпадает с otherKey [`#2780`](https://github.com/nocobase/nocobase/pull/2780)
- fix: недопустимое значение процента [`#2782`](https://github.com/nocobase/nocobase/pull/2782)
- fix: значение процента должно делиться на 100 [`#2781`](https://github.com/nocobase/nocobase/pull/2781)
- Revert "fix(client): исправлен повторный рендеринг, вызывающий ошибку диапазона (#2770)" [`#2779`](https://github.com/nocobase/nocobase/pull/2779)
- refactor(e2e): поддержка пакетного создания коллекций [`#2778`](https://github.com/nocobase/nocobase/pull/2778)
- fix: история полей с обратным полем [`#2776`](https://github.com/nocobase/nocobase/pull/2776)
- fix: следует разрешить установку значения по умолчанию в блоке формы отношений [`#2777`](https://github.com/nocobase/nocobase/pull/2777)
- fix(plugin-workflow): исправлена проверка типа toJSON [`#2772`](https://github.com/nocobase/nocobase/pull/2772)
- fix: создание коллекций с несколькими записями [`#2753`](https://github.com/nocobase/nocobase/pull/2753)
- fix(client): исправлен повторный рендеринг, вызывающий ошибку диапазона [`#2770`](https://github.com/nocobase/nocobase/pull/2770)
- fix(default): следует разрешать установку значения по умолчанию в блоке формы отношений [`#2774`](https://github.com/nocobase/nocobase/pull/2774)
- fix(percent): процент не принимал значение 0 [`#2769`](https://github.com/nocobase/nocobase/pull/2769)
- refactor(duplicate action): ошибка дублирования полей при изменении режима дублирования и поддержка отмены выбора всех [`#2768`](https://github.com/nocobase/nocobase/pull/2768)
- feat(gateway): расширение селектора приложения как middleware [`#2761`](https://github.com/nocobase/nocobase/pull/2761)
- fix(expression): следует сбросить lastIndex регулярного выражения [`#2767`](https://github.com/nocobase/nocobase/pull/2767)
- refactor(plugin-workflow): добавлен новый статус для сценариев 'требуется повторная попытка' [`#2765`](https://github.com/nocobase/nocobase/pull/2765)
- fix(variable): не должен возвращать undefined при парсинге 0 [`#2766`](https://github.com/nocobase/nocobase/pull/2766)
- fix(variable): не следует отключать параметры в выражении [`#2764`](https://github.com/nocobase/nocobase/pull/2764)
- fix(subtable): не должен иметь значение по умолчанию и исправлен ключ таблицы [`#2763`](https://github.com/nocobase/nocobase/pull/2763)
- style: исправлен PageHeader [`#2760`](https://github.com/nocobase/nocobase/pull/2760)
- fix(graph-collection-manager): графическая коллекция не может открыть модальное окно редактирования [`#2759`](https://github.com/nocobase/nocobase/pull/2759)
- test(e2e): добавлен тест для проверки строки таблицы [`#2757`](https://github.com/nocobase/nocobase/pull/2757)
- style: улучшение стиля блока списка [`#2755`](https://github.com/nocobase/nocobase/pull/2755)

### Коммиты

- Удалена директория docs/tr-TR [`3fe6265`](https://github.com/nocobase/nocobase/commit/3fe6265269c7640a726d337c33adbfc75279022e)
- test: подтверждение работоспособности тестов e2e [`ef1b07e`](https://github.com/nocobase/nocobase/commit/ef1b07e6a300ece0a1b1edfce14a5d59f9875e4c)
- Revert "fix(default): следует разрешать установку значения по умолчанию в блоке формы отношений (#2774)" [`88807b3`](https://github.com/nocobase/nocobase/commit/88807b3cdf384ec2e99bffcfb7d69adcb77ff84d)

## [v0.14.0-alpha.7](https://github.com/nocobase/nocobase/compare/v0.14.0-alpha.6...v0.14.0-alpha.7) - 2023-10-07

### Объединено

- feat(variable): ленивая загрузка полей ассоциации [`#2382`](https://github.com/nocobase/nocobase/pull/2382)
- chore(e2e): обеспечение стабильности [`#2751`](https://github.com/nocobase/nocobase/pull/2751)
- fix(plugin-workflow): исправлены данные контекста триггера формы [`#2749`](https://github.com/nocobase/nocobase/pull/2749)
- refactor(auth): переключение OIDC, SAML авторизации с всплывающего окна на редирект [`#2737`](https://github.com/nocobase/nocobase/pull/2737)
- chore(database): очистка недопустимых ассоциаций в модели коллекции при сбое установки поля [`#2720`](https://github.com/nocobase/nocobase/pull/2720)
- feat: поддержка e2e [`#2624`](https://github.com/nocobase/nocobase/pull/2624)
- feat(application): cron job в приложении [`#2730`](https://github.com/nocobase/nocobase/pull/2730)
- refactor(bi): улучшено API фронтенда диаграмм [`#2721`](https://github.com/nocobase/nocobase/pull/2721)
- chore(multi-app-manager): добавлен обработчик обновления для подприложения [`#2728`](https://github.com/nocobase/nocobase/pull/2728)
- fix(association-field): подтаблица не может перемещаться [`#2727`](https://github.com/nocobase/nocobase/pull/2727)
- fix(plugin-workflow): исправлены назначенные и переменные агрегации [`#2725`](https://github.com/nocobase/nocobase/pull/2725)
- refactor: поле ассоциации файлов должно по умолчанию использовать поле предпросмотра как поле заголовка [`#2718`](https://github.com/nocobase/nocobase/pull/2718)
- refactor: поддержка jsonb в коллекции представлений [`#2719`](https://github.com/nocobase/nocobase/pull/2719)
- perf: улучшен UX SchemaInitializer [`#2666`](https://github.com/nocobase/nocobase/pull/2666)
- fix: fileManager не закрывал ящик после выбора файлов [`#2716`](https://github.com/nocobase/nocobase/pull/2716)
- fix: блок ассоциации не должен закрывать ящик после удаления данных [`#2717`](https://github.com/nocobase/nocobase/pull/2717)
- fix: правило связывания действий не работает в древовидной коллекции [`#2713`](https://github.com/nocobase/nocobase/pull/2713)
- fix: useAssociationNames [`#2714`](https://github.com/nocobase/nocobase/pull/2714)
- refactor: поле вложения поддерживает конфигурацию размера [`#2552`](https://github.com/nocobase/nocobase/pull/2552)
- feat: поддержка каскадного выбора для поля древовидной коллекции [`#2514`](https://github.com/nocobase/nocobase/pull/2514)
- feat(database): рекурсивное добавление родителя дерева [`#2573`](https://github.com/nocobase/nocobase/pull/2573)
- feat: поддержка загрузки принадлежности к ассоциации с коллекцией без первичного ключа [`#2529`](https://github.com/nocobase/nocobase/pull/2529)
- fix(gateway): не следует обновляться при запуске приложения из состояния восстановления после ошибки [`#2711`](https://github.com/nocobase/nocobase/pull/2711)
- feat(db): добавлена SQL коллекция [`#2419`](https://github.com/nocobase/nocobase/pull/2419)
- fix: не удалось выбрать унаследованную коллекцию [`#2710`](https://github.com/nocobase/nocobase/pull/2710)
- fix: шаблон данных формы не очищал опции [`#2709`](https://github.com/nocobase/nocobase/pull/2709)
- fix: некорректное значение параметров tableoid в поле ассоциации в фильтре [`#2705`](https://github.com/nocobase/nocobase/pull/2705)
- fix: метод сохранения кнопки создания поля ассоциации не работает [`#2706`](https://github.com/nocobase/nocobase/pull/2706)
- fix: ошибка генерации tsconfig.paths.json [`#2708`](https://github.com/nocobase/nocobase/pull/2708)
- fix(plugin-workflow): исправлены типы экспорта [`#2707`](https://github.com/nocobase/nocobase/pull/2707)
- fix(plugin-workflow): исправлена ошибка параллелизма в цикле [`#2703`](https://github.com/nocobase/nocobase/pull/2703)

### Коммиты

- chore(versions): 😊 публикация v0.14.0-alpha.7 [`384cc1c`](https://github.com/nocobase/nocobase/commit/384cc1c56c4e78be6ba158b9c141c66c4149e9cd)
- Revert "refactor(auth): OIDC, SAML auth switch popup to redirectction (#2737)" [`301a85d`](https://github.com/nocobase/nocobase/commit/301a85d7671d42670ceba40d97de21283f9eb617)
- feat: обновление документации [`dd53633`](https://github.com/nocobase/nocobase/commit/dd536331a9853a509a51adcc41c7cfbfe68efcbd)

## [v0.14.0-alpha.6](https://github.com/nocobase/nocobase/compare/v0.14.0-alpha.4...v0.14.0-alpha.6) - 2023-09-22

### Объединено

- refactor(plugin-workflow): добавлены клиентские экспорты [`#2702`](https://github.com/nocobase/nocobase/pull/2702)
- refactor: поддержка добавления поля ассоциации m2o в коллекцию представлений [`#2422`](https://github.com/nocobase/nocobase/pull/2422)
- fix: исправлен оператор вызова для поля даты [`#2701`](https://github.com/nocobase/nocobase/pull/2701)
- fix: ошибка добавления поля ассоциации глубокого уровня [`#2700`](https://github.com/nocobase/nocobase/pull/2700)
- fix(cli): исправлен режим шаблонного файла [`#2697`](https://github.com/nocobase/nocobase/pull/2697)

### Коммиты

- chore(versions): 😊 публикация v0.14.0-alpha.5 [`3b0b648`](https://github.com/nocobase/nocobase/commit/3b0b6483c221ebec4c7c1992c8002f0e004ae738)
- chore(versions): 😊 публикация v0.14.0-alpha.6 [`8eb6344`](https://github.com/nocobase/nocobase/commit/8eb634459d1f0fd2e1d41f453912b1c62a236de3)
- chore(versions): 😊 публикация v0.14.0-alpha.5 [`bffa53a`](https://github.com/nocobase/nocobase/commit/bffa53a04e032ade25d794761a6cb8e3ff95f451)

## [v0.14.0-alpha.4](https://github.com/nocobase/nocobase/compare/v0.14.0-alpha.3...v0.14.0-alpha.4) - 2023-09-21

### Объединено

- fix: схема коллекции не существует [`#2669`](https://github.com/nocobase/nocobase/pull/2669)
- fix: параметры фильтрации в документации core [`#2695`](https://github.com/nocobase/nocobase/pull/2695)
- feat: добавлен testid [`#2434`](https://github.com/nocobase/nocobase/pull/2434)
- feat(database): поддержка чтения SSL-файла в конфигурации базы данных [`#2689`](https://github.com/nocobase/nocobase/pull/2689)
- test: корректный парсинг параметров команды [`#2688`](https://github.com/nocobase/nocobase/pull/2688)
- fix: ошибка сборки [`#2685`](https://github.com/nocobase/nocobase/pull/2685)
- feat(database): выполнение проверки данных перед операциями обновления/создания [`#2681`](https://github.com/nocobase/nocobase/pull/2681)
- fix: ошибка сборки [`#2683`](https://github.com/nocobase/nocobase/pull/2683)
- refactor: улучшение ACL блока ассоциаций [`#2682`](https://github.com/nocobase/nocobase/pull/2682)
- refactor: провайдер поля коллекции ACL [`#2679`](https://github.com/nocobase/nocobase/pull/2679)
- chore: тест [`#2677`](https://github.com/nocobase/nocobase/pull/2677)
- style: улучшение стиля form-item [`#2678`](https://github.com/nocobase/nocobase/pull/2678)
- fix(acl): ошибка проверки ACL для поля ассоциации [`#2675`](https://github.com/nocobase/nocobase/pull/2675)
- chore(command): установка обработчика команд через IPC-сервер или нет [`#2660`](https://github.com/nocobase/nocobase/pull/2660)
- fix(auth): роль пользователя не найдена [`#2674`](https://github.com/nocobase/nocobase/pull/2674)
- fix: поле ассоциации файлов не может быть установлено как компонент поля file manager [`#2672`](https://github.com/nocobase/nocobase/pull/2672)
- feat(database): откат подключения к базе данных [`#2668`](https://github.com/nocobase/nocobase/pull/2668)
- refactor(plugin-workflow): корректировка кода [`#2663`](https://github.com/nocobase/nocobase/pull/2663)
- fix(auth): проблема смены пароля базовой авторизации [`#2662`](https://github.com/nocobase/nocobase/pull/2662)
- fix: undefined группа интерфейсов [`#2656`](https://github.com/nocobase/nocobase/pull/2656)
- refactor: поле типа float в коллекции представлений поддерживает число и процент [`#2653`](https://github.com/nocobase/nocobase/pull/2653)
- fix: шаблон tsconfig paths [`#2652`](https://github.com/nocobase/nocobase/pull/2652)
- fix: улучшение сборки [`#2643`](https://github.com/nocobase/nocobase/pull/2643)
- fix(share-collection): синхронизация плагинов при установке подприложения [`#2650`](https://github.com/nocobase/nocobase/pull/2650)
- fix: исправлены переменные квартала [`#2648`](https://github.com/nocobase/nocobase/pull/2648)
- fix: filterable undefined [`#2646`](https://github.com/nocobase/nocobase/pull/2646)
- fix(cli): сброс параметров команды [`#2645`](https://github.com/nocobase/nocobase/pull/2645)

### Коммиты

- chore(versions): 😊 публикация v0.14.0-alpha.4 [`d20398f`](https://github.com/nocobase/nocobase/commit/d20398f73f80ffdc77a72ab53beb1cf1f247bc84)
- feat: обновление readme.md [`a484e89`](https://github.com/nocobase/nocobase/commit/a484e891aa55e0860e7221ce775f8d2c95a4e31d)
- fix: db.sync [`282645e`](https://github.com/nocobase/nocobase/commit/282645ed8b215713ca19a9f845d7b702e7434a96)

## [v0.14.0-alpha.3](https://github.com/nocobase/nocobase/compare/v0.14.0-alpha.2...v0.14.0-alpha.3) - 2023-09-13

### Объединено

- fix: символическая ссылка плагина с типом `dir` [`#2640`](https://github.com/nocobase/nocobase/pull/2640)
- style: улучшение стиля категории коллекции [`#2638`](https://github.com/nocobase/nocobase/pull/2638)
- style: улучшение стиля категории коллекции [`#2637`](https://github.com/nocobase/nocobase/pull/2637)
- chore: обновление таблицы belongs to many через, если это представление [`#2635`](https://github.com/nocobase/nocobase/pull/2635)

### Коммиты

- chore(versions): 😊 публикация v0.14.0-alpha.3 [`6058850`](https://github.com/nocobase/nocobase/commit/6058850db1d177bcacfebabdf0566e506021be53)
- feat: обновление документации [`3e87ad9`](https://github.com/nocobase/nocobase/commit/3e87ad9083d68883cc7472c60d8c944ba178c602)
- fix: удаление PluginManager.getPackageName [`de8fc80`](https://github.com/nocobase/nocobase/commit/de8fc8079a2d6eaa045a22328edb3acba374a164)

## [v0.14.0-alpha.2](https://github.com/nocobase/nocobase/compare/v0.14.0-alpha.1...v0.14.0-alpha.2) - 2023-09-13

### Коммиты

- chore(versions): 😊 публикация v0.14.0-alpha.2 [`3670d67`](https://github.com/nocobase/nocobase/commit/3670d670ac7f113e68345ac2a83ed6231aebda69)
- chore: обновление журнала изменений [`4271713`](https://github.com/nocobase/nocobase/commit/427171342f579e4352f026454ef679e9222dd3ee)
- fix: ошибка миграции [`1798170`](https://github.com/nocobase/nocobase/commit/1798170a9cee161a6d3b5270039fb4c325a2e0da)

## [v0.14.0-alpha.1](https://github.com/nocobase/nocobase/compare/v0.13.0-alpha.10...v0.14.0-alpha.1) - 2023-09-12

### Объединено

- feat: новый менеджер плагинов, поддерживает добавление плагинов через UI [`#2430`](https://github.com/nocobase/nocobase/pull/2430)
- fix(mobile-client-plugin): избежание ошибки основного поля [`#2625`](https://github.com/nocobase/nocobase/pull/2625)
- fix(plugin-workflow): исправлена переменная области видимости в цикле [`#2633`](https://github.com/nocobase/nocobase/pull/2633)
- fix: ошибка при создании действия при настройке режима сохранения filterKeys [`#2631`](https://github.com/nocobase/nocobase/pull/2631)
- fix(gateway): выброс ошибки при запуске из CLI [`#2627`](https://github.com/nocobase/nocobase/pull/2627)
- feat(plugin-workflow): поддержка переменных в midway path [`#2598`](https://github.com/nocobase/nocobase/pull/2598)
- feat(database): поддержка SSL-конфигурации базы данных [`#2620`](https://github.com/nocobase/nocobase/pull/2620)

### Коммиты

- chore(versions): 😊 публикация v0.14.0-alpha.1 [`117d4b8`](https://github.com/nocobase/nocobase/commit/117d4b81865f8939c4ff46d3d789ad8369a90ced)
- fix: ошибка: SQLITE_ERROR: no such table: authenticators [`adf11bf`](https://github.com/nocobase/nocobase/commit/adf11bf6243632ac9a9ff9919a0d8b7bb66d1530)
- fix: исходная ошибка: SQLITE_ERROR: no such column: options [`6cc88df`](https://github.com/nocobase/nocobase/commit/6cc88dfa2bf0d8aeed49d20094167db4a1f4c8c0)

## [v0.13.0-alpha.10](https://github.com/nocobase/nocobase/compare/v0.13.0-alpha.9...v0.13.0-alpha.10) - 2023-09-10

### Объединено

- chore: удаление интерфейса username [`#2621`](https://github.com/nocobase/nocobase/pull/2621)
- refactor: useFieldModeOptions [`#2612`](https://github.com/nocobase/nocobase/pull/2612)
- feat(bi): разрешить использование переменных в фильтре запроса [`#2609`](https://github.com/nocobase/nocobase/pull/2609)

### Коммиты

- chore(versions): 😊 публикация v0.13.0-alpha.10 [`fec17d5`](https://github.com/nocobase/nocobase/commit/fec17d5661e864392ef44defd1d8100da867a1b0)
- chore: добавление NOCOBASE_SYSTEM_SETTINGS в localStorage [`893b2d7`](https://github.com/nocobase/nocobase/commit/893b2d71bc66fb2285cfb13af07f98f5dba51638)

## [v0.13.0-alpha.9](https://github.com/nocobase/nocobase/compare/v0.13.0-alpha.8...v0.13.0-alpha.9) - 2023-09-07

### Объединено

- fix: ошибка package.json модуля core/client [`#2610`](https://github.com/nocobase/nocobase/pull/2610)

### Коммиты

- chore(versions): 😊 публикация v0.13.0-alpha.9 [`b655517`](https://github.com/nocobase/nocobase/commit/b655517a74bb5818693b7dd62074c93ecc2cdd08)

## [v0.13.0-alpha.8](https://github.com/nocobase/nocobase/compare/v0.13.0-alpha.7...v0.13.0-alpha.8) - 2023-09-07

### Объединено

- chore(antd): уменьшение длительности анимации [`#2602`](https://github.com/nocobase/nocobase/pull/2602)
- fix: перезагрузка окна после сбоя загрузки плагинов [`#2605`](https://github.com/nocobase/nocobase/pull/2605)
- fix: синхронизация коллекции ролей в общем плагине [`#2601`](https://github.com/nocobase/nocobase/pull/2601)
- fix: исправлено нерабочее сворачивание панелей при клике [`#2600`](https://github.com/nocobase/nocobase/pull/2600)
- feat(graph-collection-manager): отображение коллекций по запросу [`#2583`](https://github.com/nocobase/nocobase/pull/2583)
- fix(acl): парсинг параметров ACL для связанной коллекции [`#2594`](https://github.com/nocobase/nocobase/pull/2594)
- fix: проблема сниппета плагина [`#2593`](https://github.com/nocobase/nocobase/pull/2593)

### Коммиты

- chore(versions): 😊 публикация v0.13.0-alpha.8 [`17d4476`](https://github.com/nocobase/nocobase/commit/17d4476c1074079db1e9874127e62b3599c7ea8c)
- chore: обновление vitest до версии v0.34.3 [`4ead715`](https://github.com/nocobase/nocobase/commit/4ead7150f051786d5b7ede121981d47fbbf48199)

## [v0.13.0-alpha.7](https://github.com/nocobase/nocobase/compare/v0.13.0-alpha.6...v0.13.0-alpha.7) - 2023-09-05

### Объединено

- chore: увеличение лимита bodyParser [`#2591`](https://github.com/nocobase/nocobase/pull/2591)

### Коммиты

- chore(versions): 😊 публикация v0.13.0-alpha.7 [`97b4570`](https://github.com/nocobase/nocobase/commit/97b4570bd22d9e485ad7b2d3124b0d59725beabf)

## [v0.13.0-alpha.6](https://github.com/nocobase/nocobase/compare/v0.13.0-alpha.5...v0.13.0-alpha.6) - 2023-09-04

### Объединено

- fix: неопределенный ресурс [`#2589`](https://github.com/nocobase/nocobase/pull/2589)
- fix(RangePicker): исправлен недействительный ярлык [`#2586`](https://github.com/nocobase/nocobase/pull/2586)
- fix(auth): добавлено ограничение uid аутентификатора [`#2587`](https://github.com/nocobase/nocobase/pull/2587)

### Коммиты

- fix: установка yarn на Windows [`eb255df`](https://github.com/nocobase/nocobase/commit/eb255df35e215b4d5e945b9ee363ed61862b49cf)
- chore(versions): 😊 публикация v0.13.0-alpha.6 [`e5f5358`](https://github.com/nocobase/nocobase/commit/e5f5358be07b642c2614f71a45b85cc3f04e5b30)
- chore: оптимизация версий зависимостей [`88b2eb8`](https://github.com/nocobase/nocobase/commit/88b2eb8a5d4300147261446116c869c2b96a03f3)

## [v0.13.0-alpha.5](https://github.com/nocobase/nocobase/compare/v0.13.0-alpha.4...v0.13.0-alpha.5) - 2023-09-03

### Объединено

- refactor: инструменты сборки [`#2374`](https://github.com/nocobase/nocobase/pull/2374)
- feat(plugin-cas): поддержка аутентификатора CAS [`#2580`](https://github.com/nocobase/nocobase/pull/2580)
- fix: блок ассоциации выдает ошибку для поля связи toOne [`#2582`](https://github.com/nocobase/nocobase/pull/2582)
- feat(gateway): ответ CLI при выполнении команды nocobase [`#2563`](https://github.com/nocobase/nocobase/pull/2563)
- fix(collection-manager): лишние поля после установки полей коллекции [`#2575`](https://github.com/nocobase/nocobase/pull/2575)
- refactor: ограничение использования древовидной таблицы в селекторах данных [`#2581`](https://github.com/nocobase/nocobase/pull/2581)
- fix(plugin-fm): добавлена миграция для исправления UI-схемы вложений [`#2579`](https://github.com/nocobase/nocobase/pull/2579)
- fix(plugin-fm): исправлена опечатка в параметре поля вложений [`#2577`](https://github.com/nocobase/nocobase/pull/2577)
- fix(FilterDynamicComponent): предотвращение аварийного завершения [`#2566`](https://github.com/nocobase/nocobase/pull/2566)
- feat(api-keys): добавлена подсказка для ролей [`#2567`](https://github.com/nocobase/nocobase/pull/2567)
- fix: поле числа выдает ошибку при очистке данных [`#2561`](https://github.com/nocobase/nocobase/pull/2561)
- docs(plugin-workflow): исправлены документы Swagger [`#2565`](https://github.com/nocobase/nocobase/pull/2565)
- fix(acl): предоставление действия с таблицей без поля createdAt [`#2562`](https://github.com/nocobase/nocobase/pull/2562)
- refactor(collection-manager): коллекция и поля поддерживают конфигурацию описания [`#2554`](https://github.com/nocobase/nocobase/pull/2554)
- chore: установлен audit-logs как локальный плагин [`#2564`](https://github.com/nocobase/nocobase/pull/2564)
- style: улучшение стиля кнопки добавления в подтаблице [`#2508`](https://github.com/nocobase/nocobase/pull/2508)
- refactor: поля ассоциации в таблице не должны иметь настройки области данных [`#2509`](https://github.com/nocobase/nocobase/pull/2509)
- feat(plugin-workflow): добавлена кнопка фильтра для списка рабочих процессов [`#2555`](https://github.com/nocobase/nocobase/pull/2555)
- fix(plugin-workflow): исправлена ошибка удаления узла [`#2553`](https://github.com/nocobase/nocobase/pull/2553)
- fix: свойства, инициализированные в plugin.load, остаются пустыми в plugin.install [`#2544`](https://github.com/nocobase/nocobase/pull/2544)
- fix: список плагинов не обновляется после обновления [`#2545`](https://github.com/nocobase/nocobase/pull/2545)
- fix(theme-editor): исправлена недействительная активация [`#2539`](https://github.com/nocobase/nocobase/pull/2539)

### Коммиты

- chore(api-doc): документация API для представлений базы данных менеджера коллекций [`9288cb9`](https://github.com/nocobase/nocobase/commit/9288cb9338a11344586ac6374846dfc2708296d2)
- Revert "fix(RangePicker): исправлена недействительная ярлык (#2489)" [`8e42da2`](https://github.com/nocobase/nocobase/commit/8e42da2b01ed5f8f773d11f76f358363886f1f39)
- chore(versions): 😊 публикация v0.13.0-alpha.5 [`af34fe1`](https://github.com/nocobase/nocobase/commit/af34fe10ab1c00e271c6a387543639baf4aaedfb)

## [v0.13.0-alpha.4](https://github.com/nocobase/nocobase/compare/v0.13.0-alpha.3...v0.13.0-alpha.4) - 2023-08-27

### Объединено

- fix(RangePicker): исправлена недействительная ярлык [`#2489`](https://github.com/nocobase/nocobase/pull/2489)

### Коммиты

- chore(versions): 😊 публикация v0.13.0-alpha.4 [`0fd38a5`](https://github.com/nocobase/nocobase/commit/0fd38a5c56520063956b85facb30f5112699999c)
- fix: вставка записи после pm.add [`f5a4413`](https://github.com/nocobase/nocobase/commit/f5a4413a9a4f14479e1bc9b98660c867f46f3a31)

## [v0.13.0-alpha.3](https://github.com/nocobase/nocobase/compare/v0.13.0-alpha.2...v0.13.0-alpha.3) - 2023-08-26

### Объединено

- fix(themeEditor): следует разрешить использование всем ролям [`#2538`](https://github.com/nocobase/nocobase/pull/2538)
- fix(plugin-cm): исправлен жизненный цикл [`#2535`](https://github.com/nocobase/nocobase/pull/2535)

### Коммиты

- chore(versions): 😊 публикация v0.13.0-alpha.3 [`5278017`](https://github.com/nocobase/nocobase/commit/5278017fffcf437258a4d5e0d8f30bea6a42f672)
- fix: параметры фильтра Swagger [`3d9a6ef`](https://github.com/nocobase/nocobase/commit/3d9a6ef76f748012e765fc7737d60510f12a6d92)
- fix: xpipe.eq [`9364a44`](https://github.com/nocobase/nocobase/commit/9364a44681ed37eb48e16d42a25406a4350c0367)

## [v0.13.0-alpha.2](https://github.com/nocobase/nocobase/compare/v0.13.0-alpha.1...v0.13.0-alpha.2) - 2023-08-24

### Объединено

- refactor(plugin-workflow): скрытие неиспользуемой формы в ручном UI после завершения [`#2526`](https://github.com/nocobase/nocobase/pull/2526)
- style(plugin-workflow): корректировка стиля терминала на холсте рабочего процесса [`#2524`](https://github.com/nocobase/nocobase/pull/2524)

### Коммиты

- chore(versions): 😊 публикация v0.13.0-alpha.2 [`f4a1953`](https://github.com/nocobase/nocobase/commit/f4a1953980cb21d786fa9d140ec91bbb0ff1d412)
- chore: обновление журнала изменений [`a638442`](https://github.com/nocobase/nocobase/commit/a6384421b624c52a2af085abfa5767a3775024f2)
- fix(plugin-client): извлечение локализационных файлов antd [`cf77ca1`](https://github.com/nocobase/nocobase/commit/cf77ca17929ad64cd920d2adf1611a29b5ad8a0d)

## [v0.13.0-alpha.1](https://github.com/nocobase/nocobase/compare/v0.12.0-alpha.5...v0.13.0-alpha.1) - 2023-08-24

### Объединено

- feat: супервизор приложения [`#2353`](https://github.com/nocobase/nocobase/pull/2353)
- fix: инициализация поля сортировки [`#2520`](https://github.com/nocobase/nocobase/pull/2520)
- feat: плагин документации API [`#2255`](https://github.com/nocobase/nocobase/pull/2255)
- fix(plugin-workflow): исправлена дублированная обработка выполнений после условия [`#2517`](https://github.com/nocobase/nocobase/pull/2517)
- fix: проблема совместимости базовой аутентификации [`#2515`](https://github.com/nocobase/nocobase/pull/2515)
- fix(plugin-workflow): исправлены стили кнопок состояния [`#2516`](https://github.com/nocobase/nocobase/pull/2516)
- fix(plugin-fm): исправлена ошибка при добавлении поля вложения в форму с предопределенными значениями [`#2503`](https://github.com/nocobase/nocobase/pull/2503)
- fix(plugin-workflow): исправлен парсинг переменных области видимости цикла [`#2502`](https://github.com/nocobase/nocobase/pull/2502)
- feat(database): поддержка получения поля в режиме просмотра [`#2482`](https://github.com/nocobase/nocobase/pull/2482)
- refactor: фильтрация данных m2m через данные коллекции [`#2497`](https://github.com/nocobase/nocobase/pull/2497)
- refactor(graph-collection-manager): обновление antv-x6 до версии 2.x [`#2466`](https://github.com/nocobase/nocobase/pull/2466)
- fix: ошибка при редактировании коллекции представлений [`#2493`](https://github.com/nocobase/nocobase/pull/2493)
- fix: загрузка плагина в режиме разработки [`#2455`](https://github.com/nocobase/nocobase/pull/2455)
- fix(plugin-workflow): исправлена проверка типа переменной [`#2492`](https://github.com/nocobase/nocobase/pull/2492)
- chore: удалена опция "Значение по умолчанию" для поля последовательности [`#2488`](https://github.com/nocobase/nocobase/pull/2488)
- fix: ошибка значения tagcolor [`#2487`](https://github.com/nocobase/nocobase/pull/2487)
- feat(auth): поддержка входа по имени пользователя [`#2376`](https://github.com/nocobase/nocobase/pull/2376)
- fix: поле источника коллекции представлений [`#2483`](https://github.com/nocobase/nocobase/pull/2483)

### Коммиты

- chore(versions): 😊 публикация v0.13.0-alpha.1 [`6debb8d`](https://github.com/nocobase/nocobase/commit/6debb8d00b62e9df228e0e2a6e9df70d8ba587c8)
- chore: обновление журнала изменений [`b91a923`](https://github.com/nocobase/nocobase/commit/b91a923fe001552a0dd0323d3fed02c1f489f0e5)
- fix: блокировка цикла событий Swagger [`b063000`](https://github.com/nocobase/nocobase/commit/b0630005d923b495708547e913c90d4e8aa5bb59)

## [v0.12.0-alpha.5](https://github.com/nocobase/nocobase/compare/v0.12.0-alpha.4...v0.12.0-alpha.5) - 2023-08-18

### Объединено

- fix(sdk): `window is not defined` в Nuxt (#2479) [`#2481`](https://github.com/nocobase/nocobase/pull/2481)
- fix: исходные коллекции не обновляются при синхронизации в представлении коллекции [`#2480`](https://github.com/nocobase/nocobase/pull/2480)
- feat(plugin-workflow): добавлена пользовательская переменная в контекст триггера формы [`#2477`](https://github.com/nocobase/nocobase/pull/2477)
- fix: большое поле в подтаблице не отображает значение [`#2475`](https://github.com/nocobase/nocobase/pull/2475)
- fix: ошибка при перетаскивании и сортировке в древовидной таблице [`#2476`](https://github.com/nocobase/nocobase/pull/2476)
- fix: подсказка в последней строке подтаблицы скрыта [`#2467`](https://github.com/nocobase/nocobase/pull/2467)
- fix(plugin-workflow): исправлена ошибка данных триггера формы [`#2472`](https://github.com/nocobase/nocobase/pull/2472)
- fix: ошибка хука в `isTitleField` [`#2471`](https://github.com/nocobase/nocobase/pull/2471)
- fix(plugin-workflow): исправлена форма создания/редактирования рабочего процесса [`#2470`](https://github.com/nocobase/nocobase/pull/2470)
- fix(plugin-workflow): исправлен фильтр полей в узлах назначения значений [`#2469`](https://github.com/nocobase/nocobase/pull/2469)
- refactor: синхронизация полей представления, исходное поле поддерживает выбор поля унаследованной коллекции [`#2456`](https://github.com/nocobase/nocobase/pull/2456)
- fix(plugin-workflow): исправлена ширина компонента конфигурации расписания [`#2461`](https://github.com/nocobase/nocobase/pull/2461)
- refactor: подтаблица/подформа поддерживают поле формулы [`#2449`](https://github.com/nocobase/nocobase/pull/2449)
- refactor: значение fieldName для remoteSelect [`#2457`](https://github.com/nocobase/nocobase/pull/2457)
- chore(database): представление с хэшированным полем id [`#2458`](https://github.com/nocobase/nocobase/pull/2458)

### Коммиты

- chore(versions): 😊 публикация v0.12.0-alpha.5 [`d878749`](https://github.com/nocobase/nocobase/commit/d8787493db64624a5efdfc7132605aae7aa9610f)
- chore(eslint): игнорирование docker [`1977e00`](https://github.com/nocobase/nocobase/commit/1977e00414ee590d0d8783f2b6491d45afdbd545)

## [v0.12.0-alpha.4](https://github.com/nocobase/nocobase/compare/v0.12.0-alpha.3...v0.12.0-alpha.4) - 2023-08-15

### Объединено

- feat(plugin-workflow): добавлены сортировка и пагинация в параметры запроса узла [`#2453`](https://github.com/nocobase/nocobase/pull/2453)
- style: улучшение стиля ellipsisWithTooltip [`#2451`](https://github.com/nocobase/nocobase/pull/2451)
- refactor: добавлена иконка для нового действия init [`#2454`](https://github.com/nocobase/nocobase/pull/2454)
- fix(plugin-map): следует фильтровать пустые данные, закрыть T-1380 [`#2447`](https://github.com/nocobase/nocobase/pull/2447)
- fix: показывать/скрывать схему при включении/отключении TabBar, Tabs, Header [`#2428`](https://github.com/nocobase/nocobase/pull/2428)
- fix(client): исправлена высота кнопки выбора в текстовой области переменной [`#2450`](https://github.com/nocobase/nocobase/pull/2450)
- refactor: значение по умолчанию для конфигурации поля в подтаблице [`#2425`](https://github.com/nocobase/nocobase/pull/2425)
- fix(plugin-workflow): исправлено назначение значения вложения в узлах [`#2448`](https://github.com/nocobase/nocobase/pull/2448)
- fix(findSchema): взаимодействие между действиями операций таблицы и деталей [`#2446`](https://github.com/nocobase/nocobase/pull/2446)
- refactor: recordPicker => associationField [`#2444`](https://github.com/nocobase/nocobase/pull/2444)
- style: улучшение стиля выпадающего списка schemaSetting [`#2432`](https://github.com/nocobase/nocobase/pull/2432)
- refactor: буферизация имени файла вложения формы [`#2429`](https://github.com/nocobase/nocobase/pull/2429)
- fix(plugin-workflow): исправлен выбор ассоциации в узле агрегации [`#2438`](https://github.com/nocobase/nocobase/pull/2438)
- fix(plugin-workflow): добавлено редактирование включения обратно в форму рабочего процесса [`#2431`](https://github.com/nocobase/nocobase/pull/2431)
- fix(plugin-workflow): исправлен локаль [`#2427`](https://github.com/nocobase/nocobase/pull/2427)
- feat(map-plugin): блок карты поддерживает выбор полей карты из связанных таблиц [`#2214`](https://github.com/nocobase/nocobase/pull/2214)
- feat(plugin-workflow): возможность настройки автоматического удаления выполнений в истории [`#2423`](https://github.com/nocobase/nocobase/pull/2423)
- refactor(schema-template): наследование коллекции с использованием blockTemplate [`#2418`](https://github.com/nocobase/nocobase/pull/2418)
- fix(mobile-client): исправлены стили и отображается правильный URL мобильного приложения в подприложении [`#2414`](https://github.com/nocobase/nocobase/pull/2414)
- fix(plugin-workflow): корректировка стилей [`#2417`](https://github.com/nocobase/nocobase/pull/2417)
- feat(plugin-workflow): добавлен тип триггера формы [`#2347`](https://github.com/nocobase/nocobase/pull/2347)
- fix(data-template): titleField undefined [`#2398`](https://github.com/nocobase/nocobase/pull/2398)
- refactor: очистка модального окна карты getContainer [`#2410`](https://github.com/nocobase/nocobase/pull/2410)
- fix: useSyncFromForm поддерживает многоуровневые отношения [`#2413`](https://github.com/nocobase/nocobase/pull/2413)
- refactor: ограничение полей в пределах настроенной области данных в подтаблице [`#2394`](https://github.com/nocobase/nocobase/pull/2394)
- feat(plugin-workflow): добавлен выпадающий список выполнений для быстрой навигации [`#2404`](https://github.com/nocobase/nocobase/pull/2404)
- refactor(plugin-workflow): изменен API перезагрузки на синхронный и исправлено дублированное прослушивание [`#2403`](https://github.com/nocobase/nocobase/pull/2403)
- feat(plugin-workflow): добавлена кнопка очистки для удаления выполнений [`#2401`](https://github.com/nocobase/nocobase/pull/2401)
- feat(plugin-workflow): добавлено модальное окно для редактирования заголовка при дублировании рабочего процесса [`#2399`](https://github.com/nocobase/nocobase/pull/2399)
- refactor: не следует вызывать событие строки при клике в ящике [`#2400`](https://github.com/nocobase/nocobase/pull/2400)
- fix(database): обновление связи "принадлежит многим" с целевой коллекцией [`#2393`](https://github.com/nocobase/nocobase/pull/2393)
- refractor(remote-select): слияние области данных поля ассоциации с исходными условиями фильтра [`#2118`](https://github.com/nocobase/nocobase/pull/2118)
- fix(plugin-workflow): исправлен фильтр типа переменной для ручного выбора исполнителей [`#2396`](https://github.com/nocobase/nocobase/pull/2396)
- fix: params undefined [`#2397`](https://github.com/nocobase/nocobase/pull/2397)
- feat(plugin-workflow): добавлена перезагрузка для мульти-приложений [`#2391`](https://github.com/nocobase/nocobase/pull/2391)
- refactor: значение по умолчанию для встроенного поля не должно быть обязательным [`#2115`](https://github.com/nocobase/nocobase/pull/2115)
- feat(bi): улучшена визуализация дополнительных конфигураций [`#2386`](https://github.com/nocobase/nocobase/pull/2386)
- refactor: выбор записей таблицы ограничен использованием поля ассоциации [`#2338`](https://github.com/nocobase/nocobase/pull/2338)
- fix: useVariablesCtx [`#2390`](https://github.com/nocobase/nocobase/pull/2390)
- fix: пользовательское действие создания поддерживает древовидные данные для выбора данных таблицы [`#2328`](https://github.com/nocobase/nocobase/pull/2328)
- fix: нет элементов конфигурации поля для деталей поля ассоциации в подтаблице [`#2384`](https://github.com/nocobase/nocobase/pull/2384)
- fix: ресурс undefined [`#2372`](https://github.com/nocobase/nocobase/pull/2372)
- refactor: remoteSelect поддерживает не объектные значения [`#2375`](https://github.com/nocobase/nocobase/pull/2375)
- fix: копирование данных правила связи взаимно влияет [`#2333`](https://github.com/nocobase/nocobase/pull/2333)
- refactor: поле ассоциации поддерживает правила сортировки в подтаблице [`#2326`](https://github.com/nocobase/nocobase/pull/2326)
- feat(association-field): поле ассоциации поддерживает подформу (popover) [`#2373`](https://github.com/nocobase/nocobase/pull/2373)
- fix(markdown): исправлена ошибка отчета об ошибках стиля markdown [`#2380`](https://github.com/nocobase/nocobase/pull/2380)
- fix: currentObject не может загрузить данные [`#2385`](https://github.com/nocobase/nocobase/pull/2385)
- chore: изменен сервер отладки на yarn dev [`#2383`](https://github.com/nocobase/nocobase/pull/2383)
- feat: блоки ассоциаций поддерживают блоки `GridCard` и `List` [`#2356`](https://github.com/nocobase/nocobase/pull/2356)
- fix(plugin-mobile): неверная компоновка [`#2360`](https://github.com/nocobase/nocobase/pull/2360)

### Коммиты

- chore(versions): 😊 публикация v0.12.0-alpha.4 [`df85fb4`](https://github.com/nocobase/nocobase/commit/df85fb430a67c9f75e3cad5844e0a7d8c63064e3)
- fix: улучшение перевода [`15504c2`](https://github.com/nocobase/nocobase/commit/15504c2813a896cdc1b53cc85d7ec4d3a093c0e5)
- chore: игнорирование docker [`b34b731`](https://github.com/nocobase/nocobase/commit/b34b7319e999655454a5d298ef808d6bbc1ad04e)

## [v0.12.0-alpha.3](https://github.com/nocobase/nocobase/compare/v0.12.0-alpha.2...v0.12.0-alpha.3) - 2023-08-02

### Коммиты

- chore(versions): 😊 публикация v0.12.0-alpha.3 [`9251fe0`](https://github.com/nocobase/nocobase/commit/9251fe015f8ac58d42168637c29e887f6ee95348)
- chore: обновление docker-entrypoint.sh [`c33c325`](https://github.com/nocobase/nocobase/commit/c33c32566c924ef75c4a9c0cb7e1a6afdd93bfb4)

## [v0.12.0-alpha.2](https://github.com/nocobase/nocobase/compare/v0.12.0-alpha.1...v0.12.0-alpha.2) - 2023-08-02

### Коммиты

- chore(versions): 😊 публикация v0.12.0-alpha.2 [`6ae22ce`](https://github.com/nocobase/nocobase/commit/6ae22cea68da3bfe41cde33969f70384c737a55c)
- fix: chore: обновление журнала изменений [`524571e`](https://github.com/nocobase/nocobase/commit/524571e0fe2a6efa47759a5c500576d7e32fe3f0)
- fix: обновление Dockerfile [`f4d97a5`](https://github.com/nocobase/nocobase/commit/f4d97a50cbf436ca0d38ac2cba3f8134df606b72)

## [v0.12.0-alpha.1](https://github.com/nocobase/nocobase/compare/v0.11.1-alpha.5...v0.12.0-alpha.1) - 2023-08-02

### Объединено

- refactor!: сборка плагинов и загрузка плагинов [`#2253`](https://github.com/nocobase/nocobase/pull/2253)
- fix: модальное окно автоматически закрывается при настройке полей для деталей поля ассоциации в подтаблице [`#2371`](https://github.com/nocobase/nocobase/pull/2371)
- fix(default-value): не должно отображаться 'N/A', если выбрано обычное значение [`#2365`](https://github.com/nocobase/nocobase/pull/2365)
- fix(bi): проблема с разбором метки поля региона и файла [`#2366`](https://github.com/nocobase/nocobase/pull/2366)
- chore: обновление antd до версии 5.7.3 [`#2359`](https://github.com/nocobase/nocobase/pull/2359)
- fix(bi): неправильная отрисовка g2plot, когда поля содержат `.` [`#2363`](https://github.com/nocobase/nocobase/pull/2363)
- fix: ошибка appInfo в графической коллекции [`#2364`](https://github.com/nocobase/nocobase/pull/2364)
- refactor(association field): поле ассоциации поддерживает режим тегового поля [`#2251`](https://github.com/nocobase/nocobase/pull/2251)
- refactor: шаблоны данных формы и дублирующее действие поддерживают синхронизацию с полями формы [`#2314`](https://github.com/nocobase/nocobase/pull/2314)
- chore: только в dev-среде могут возникать ошибки [`#2355`](https://github.com/nocobase/nocobase/pull/2355)
- fix: унаследованное поле ассоциации не может получить данные деталей [`#2354`](https://github.com/nocobase/nocobase/pull/2354)
- refactor(plugin-workflow): изменение full-width на auto-width [`#2351`](https://github.com/nocobase/nocobase/pull/2351)
- Revert "feat(theme-editor): добавлена миграция (#2310)" [`#2352`](https://github.com/nocobase/nocobase/pull/2352)
- fix(locale): ошибка ACL в управлении локализацией [`#2350`](https://github.com/nocobase/nocobase/pull/2350)
- feat(theme-editor): добавлена миграция [`#2310`](https://github.com/nocobase/nocobase/pull/2310)
- feat: поддержка JSONB [`#2321`](https://github.com/nocobase/nocobase/pull/2321)
- fix(bi): разбор меток перечисления полей с псевдонимом [`#2349`](https://github.com/nocobase/nocobase/pull/2349)

### Коммиты

- chore(versions): 😊 публикация v0.12.0-alpha.1 [`93f2bc2`](https://github.com/nocobase/nocobase/commit/93f2bc2e6782dec1388208e6fd40905faa82f82d)

## [v0.11.1-alpha.5](https://github.com/nocobase/nocobase/compare/v0.11.1-alpha.4...v0.11.1-alpha.5) - 2023-07-29

### Объединено

- refactor(plugin-workflow): изменение строгого равенства и неравенства на нестрогое [`#2346`](https://github.com/nocobase/nocobase/pull/2346)

### Коммиты

- chore(versions): 😊 публикация v0.11.1-alpha.5 [`40c4aab`](https://github.com/nocobase/nocobase/commit/40c4aab50799d78ac3d7820d8fa5a732aa6f4723)
- fix: обновление yarn.lock [`656287e`](https://github.com/nocobase/nocobase/commit/656287e57be749eb00ec01189573a2088ed417df)
- refactor: повышение стабильности тестирования [`3c7b3f3`](https://github.com/nocobase/nocobase/commit/3c7b3f3caff5563d0f13b0076294a64e8e330f41)

## [v0.11.1-alpha.4](https://github.com/nocobase/nocobase/compare/v0.11.1-alpha.3...v0.11.1-alpha.4) - 2023-07-29

### Объединено

- refactor(plugin-workflow): разрешить присваивание системных значений в узлах создания и обновления [`#2345`](https://github.com/nocobase/nocobase/pull/2345)
- chore(database): слияние аргументов полей по пути [`#2331`](https://github.com/nocobase/nocobase/pull/2331)
- fix(theme-editor): предотвращение ошибок [`#2340`](https://github.com/nocobase/nocobase/pull/2340)
- refactor: обновление @testing-library/react до версии 14.x [`#2339`](https://github.com/nocobase/nocobase/pull/2339)
- test: представление коллекции как через модель [`#2336`](https://github.com/nocobase/nocobase/pull/2336)
- fix: данные провайдера записей подформы не соответствуют [`#2337`](https://github.com/nocobase/nocobase/pull/2337)
- fix(bi): проблема форматирования поля отношений и ссылки линейного графика [`#2332`](https://github.com/nocobase/nocobase/pull/2332)
- chore: tsx [`#2329`](https://github.com/nocobase/nocobase/pull/2329)
- chore: обновление jest [`#2323`](https://github.com/nocobase/nocobase/pull/2323)

### Коммиты

- chore(versions): 😊 публикация v0.11.1-alpha.4 [`b93f28a`](https://github.com/nocobase/nocobase/commit/b93f28a952fef20e99570ca6f19b3bf8192db465)
- fix: yarn run test [`d956c90`](https://github.com/nocobase/nocobase/commit/d956c90e91e303ae02e54f71498b92481eab0399)
- chore: обновление журнала изменений [`54f2405`](https://github.com/nocobase/nocobase/commit/54f240539c5cf82d31c689bf409bcb5656ded496)

## [v0.11.1-alpha.3](https://github.com/nocobase/nocobase/compare/v0.11.1-alpha.2...v0.11.1-alpha.3) - 2023-07-26

### Объединено

- fix(plugin-workflow): исправлено поле выражения в подформе [`#2324`](https://github.com/nocobase/nocobase/pull/2324)
- chore: улучшение FormProvider [`#2322`](https://github.com/nocobase/nocobase/pull/2322)
- fix: collectionField undefined [`#2320`](https://github.com/nocobase/nocobase/pull/2320)
- fix: следует использовать `filter` вместо `where` [`#2318`](https://github.com/nocobase/nocobase/pull/2318)
- fix(bi): проблема с dnd [`#2315`](https://github.com/nocobase/nocobase/pull/2315)
- feat(filter-block): поддержка внешнего ключа и наследования [`#2302`](https://github.com/nocobase/nocobase/pull/2302)
- chore: слияние сборки Docker [`#2317`](https://github.com/nocobase/nocobase/pull/2317)
- feat(locale): возможность управления локализационными ресурсами в основном пакете [`#2293`](https://github.com/nocobase/nocobase/pull/2293)
- fix(plugin-workflow): исправлены стили [`#2316`](https://github.com/nocobase/nocobase/pull/2316)
- Feat/translation fr_FR [`#2275`](https://github.com/nocobase/nocobase/pull/2275)
- feat: пользовательское действие поддерживает создание записи для любой коллекции [`#2264`](https://github.com/nocobase/nocobase/pull/2264)
- refactor: шаблон данных формы поддерживает конфигурацию области данных [`#2229`](https://github.com/nocobase/nocobase/pull/2229)
- chore: автоматическое исправление ошибок eslint при предварительном коммите [`#2304`](https://github.com/nocobase/nocobase/pull/2304)
- refactor: игнорирование ACL в подтаблице [`#2259`](https://github.com/nocobase/nocobase/pull/2259)
- refactor: поле даты UI поддерживает конфигурацию форматирования [`#2241`](https://github.com/nocobase/nocobase/pull/2241)
- fix(plugin-workflow): исправлена дублированная активация расписания в мульти-приложениях [`#2313`](https://github.com/nocobase/nocobase/pull/2313)
- refactor: оптимизация провайдера полей столбца таблицы [`#2312`](https://github.com/nocobase/nocobase/pull/2312)
- fix: исправлено undefined поле столбца таблицы [`#2311`](https://github.com/nocobase/nocobase/pull/2311)
- fix: поле столбца таблицы не активировалось [`#2309`](https://github.com/nocobase/nocobase/pull/2309)
- fix(default-value): исправлен тег в RemoteSelect [`#2306`](https://github.com/nocobase/nocobase/pull/2306)
- fix: модальное окно не отображается при клике на поле ассоциации в таблице [`#2292`](https://github.com/nocobase/nocobase/pull/2292)
- fix(database): пропуск удаления ссылки в представлении коллекции [`#2303`](https://github.com/nocobase/nocobase/pull/2303)

### Коммиты

- chore(versions): 😊 публикация v0.11.1-alpha.3 [`81819f0`](https://github.com/nocobase/nocobase/commit/81819f04e3bdd108a1a70038352545748552c2f9)
- chore: исправление предупреждений eslint [`986e241`](https://github.com/nocobase/nocobase/commit/986e2414d4b8eba2bd0cf3cf1932a74ff507271e)
- chore: исправление prettier [`30b0d9b`](https://github.com/nocobase/nocobase/commit/30b0d9b3f303a43eeb340482a567a50145437f27)

## [v0.11.1-alpha.2](https://github.com/nocobase/nocobase/compare/v0.11.1-alpha.1...v0.11.1-alpha.2) - 2023-07-23

### Коммиты

- chore(versions): 😊 публикация v0.11.1-alpha.2 [`c84476d`](https://github.com/nocobase/nocobase/commit/c84476d805bae897fea7a23cec38813dbe28cae0)
- chore(theme-editor): исправление зависимостей [`d0528cf`](https://github.com/nocobase/nocobase/commit/d0528cf1f273fd7e3efbe6eb58a247a20dbaffb1)
- chore(theme-editor): исправление зависимостей [`25decf0`](https://github.com/nocobase/nocobase/commit/25decf0aa9f6d37b972ba460a999558ecc25a819)

## [v0.11.1-alpha.1](https://github.com/nocobase/nocobase/compare/v0.11.0-alpha.1...v0.11.1-alpha.1) - 2023-07-22

### Объединено

- fix(plugin-workflow): коллекции рабочих процессов не должны отображаться в блоках [`#2290`](https://github.com/nocobase/nocobase/pull/2290)
- chore: удаление таблицы belongsToMany как зависимости коллекции [`#2289`](https://github.com/nocobase/nocobase/pull/2289)
- feat(database): обработка опции targetCollection в репозитории find [`#2175`](https://github.com/nocobase/nocobase/pull/2175)
- feat: добавлены встроенные темы [`#2284`](https://github.com/nocobase/nocobase/pull/2284)
- docs: добавлена документация для Theme Editor [`#2280`](https://github.com/nocobase/nocobase/pull/2280)
- fix: исправлена сортировка пользовательского меню [`#2288`](https://github.com/nocobase/nocobase/pull/2288)
- feat(theme-editor): поддержка настройки цвета заголовка и кнопки настроек [`#2263`](https://github.com/nocobase/nocobase/pull/2263)
- feat(plugin-workflow): добавлен SQL-узел [`#2276`](https://github.com/nocobase/nocobase/pull/2276)
- fix: выпадающие поля множественного выбора не отображаются как заголовки при наследовании коллекции [`#2257`](https://github.com/nocobase/nocobase/pull/2257)
- fix(bi): ошибка orderBy в MySQL [`#2283`](https://github.com/nocobase/nocobase/pull/2283)
- test: повышение стабильности тестирования [`#2277`](https://github.com/nocobase/nocobase/pull/2277)
- fix(bi): устранение избыточных запросов [`#2268`](https://github.com/nocobase/nocobase/pull/2268)
- fix(client): использование компонента как заголовка действия [`#2274`](https://github.com/nocobase/nocobase/pull/2274)
- fix(middleware): возврат переменной now [`#2267`](https://github.com/nocobase/nocobase/pull/2267)
- fix: сбой связи с текущей датой переменной [`#2272`](https://github.com/nocobase/nocobase/pull/2272)
- fix: исправление стиля вкладки страницы [`#2270`](https://github.com/nocobase/nocobase/pull/2270)
- fix: в поле выбора коллекции отсутствуют опции [`#2271`](https://github.com/nocobase/nocobase/pull/2271)
- refactor: добавлен плагин локализации [`#2261`](https://github.com/nocobase/nocobase/pull/2261)
- feat(plugin-workflow): кнопка ручной формы может быть настроена с предустановленными значениями [`#2225`](https://github.com/nocobase/nocobase/pull/2225)
- feat(plugin-workflow): изменение на неограниченную глубину предзагрузки ассоциаций в рабочем процессе [`#2142`](https://github.com/nocobase/nocobase/pull/2142)
- feat: управление локализацией [`#2210`](https://github.com/nocobase/nocobase/pull/2210)
- refactor: правила связывания поддерживают datetime [`#2260`](https://github.com/nocobase/nocobase/pull/2260)
- fix: ошибка поля коллекции представления при наследовании [`#2249`](https://github.com/nocobase/nocobase/pull/2249)
- fix: индикатор загрузки не исчез после сбоя отправки [`#2252`](https://github.com/nocobase/nocobase/pull/2252)
- feat: поддержка пользовательских тем [`#2228`](https://github.com/nocobase/nocobase/pull/2228)
- chore(plugin-workflow): исправление предупреждения хлебных крошек [`#2256`](https://github.com/nocobase/nocobase/pull/2256)
- fix(plugin-workflow): исправление ошибки узла запроса в цикле [`#2254`](https://github.com/nocobase/nocobase/pull/2254)
- feat(database): поддержка действий добавления, обновления и удаления для представления коллекции [`#2119`](https://github.com/nocobase/nocobase/pull/2119)
- refactor(client): изменение проверки isTitleField на свойство интерфейса titleUsable [`#2250`](https://github.com/nocobase/nocobase/pull/2250)
- fix: значение поля option в списке задач рабочего процесса [`#2246`](https://github.com/nocobase/nocobase/pull/2246)
- fix(plugin-workflow): исправление ошибки dispatch [`#2247`](https://github.com/nocobase/nocobase/pull/2247)
- fix: предотвращение сбоев при очистке значения DatePicker [`#2237`](https://github.com/nocobase/nocobase/pull/2237)
- fix: отсутствие запроса данных шаблона при дублировании [`#2240`](https://github.com/nocobase/nocobase/pull/2240)
- fix(plugin-workflow): исправление стиля кнопки задания [`#2243`](https://github.com/nocobase/nocobase/pull/2243)
- fix: предотвращение сбоев при удалении группового меню [`#2239`](https://github.com/nocobase/nocobase/pull/2239)
- fix: автоматический фокус в выпадающем меню [`#2234`](https://github.com/nocobase/nocobase/pull/2234)
- fix(plugin-fm): увеличение размера загрузки файла до 1 ГБ (как по умолчанию на стороне сервера) [`#2236`](https://github.com/nocobase/nocobase/pull/2236)
- fix: только одна полоса прокрутки в выпадающем меню [`#2231`](https://github.com/nocobase/nocobase/pull/2231)
- fix: неправильная реакция на необязательные поля в дочерней коллекции в таблице родительской коллекции [`#2207`](https://github.com/nocobase/nocobase/pull/2207)
- fix(core): исправление логики пакетного обновления запроса [`#2230`](https://github.com/nocobase/nocobase/pull/2230)
- fix: ограничение высоты подменю [`#2227`](https://github.com/nocobase/nocobase/pull/2227)
- fix(upload): исправление стиля вложения в таблице [`#2213`](https://github.com/nocobase/nocobase/pull/2213)

### Исправлено

- fix(plugin-fm): размер загрузки файла увеличен до 1 ГБ (как по умолчанию на стороне сервера) (#2236) [`#2215`](https://github.com/nocobase/nocobase/issues/2215)

### Коммиты

- chore(versions): 😊 публикация v0.11.1-alpha.1 [`e979194`](https://github.com/nocobase/nocobase/commit/e979194cf29debcc10d2e6765c96083793186331)
- fix(theme-editor): удаление db.sync [`fa2de8e`](https://github.com/nocobase/nocobase/commit/fa2de8e8060da00a85b381df0d7fbf9fca2793b3)
- fix(theme-editor): исправление цвета меню при выборе [`8c90436`](https://github.com/nocobase/nocobase/commit/8c904363ad055d6aaacfe67d9f74a9467e7c90b5)

## [v0.11.0-alpha.1](https://github.com/nocobase/nocobase/compare/v0.10.1-alpha.1...v0.11.0-alpha.1) - 2023-07-08

### Объединено

- refactor(client)!: обновление antd до версии 5 [`#2078`](https://github.com/nocobase/nocobase/pull/2078)
- fix(plugin-workflow): исправление переменной цикла [`#2211`](https://github.com/nocobase/nocobase/pull/2211)
- fix(db): исправление переменной `.now` [`#2209`](https://github.com/nocobase/nocobase/pull/2209)
- chore(plugin-workflow): корректировка типов [`#2206`](https://github.com/nocobase/nocobase/pull/2206)
- **Критическое изменение:** refactor(client)!: приложение, маршрутизация и плагины [`#2068`](https://github.com/nocobase/nocobase/pull/2068)
- fix(plugin-workflow): попытка избежать случайных дублированных выполнений [`#2196`](https://github.com/nocobase/nocobase/pull/2196)
- fix: поле ассоциации отображается как удаленное в подформе [`#2205`](https://github.com/nocobase/nocobase/pull/2205)
- refactor(client): абстракция RawTextArea для ввода переменных [`#2204`](https://github.com/nocobase/nocobase/pull/2204)
- fix: ошибка при открытии области данных [`#2202`](https://github.com/nocobase/nocobase/pull/2202)
- fix: переменная текущего объекта не может быть выбрана [`#2201`](https://github.com/nocobase/nocobase/pull/2201)

### Коммиты

- chore(versions): 😊 публикация v0.11.0-alpha.1 [`c0a5952`](https://github.com/nocobase/nocobase/commit/c0a59524ab55f42f3455656d632bb6be6ae36424)
- chore: обновление журнала изменений [`44adf53`](https://github.com/nocobase/nocobase/commit/44adf53c1105016beb850005199c73d9189347fb)

## [v0.10.1-alpha.1](https://github.com/nocobase/nocobase/compare/v0.10.0-alpha.5...v0.10.1-alpha.1) - 2023-07-07

### Объединено

- fix(client): исправлен компонент переменной для предварительной загрузки метки на основе значения [`#2200`](https://github.com/nocobase/nocobase/pull/2200)
- fix: добавление новой коллекции с отключенной связью [`#2198`](https://github.com/nocobase/nocobase/pull/2198)
- refactor: настройка значения по умолчанию для поля ассоциации поддерживает переменные [`#2138`](https://github.com/nocobase/nocobase/pull/2138)
- refactor: оптимизация производительности области данных поля ассоциации [`#2113`](https://github.com/nocobase/nocobase/pull/2113)
- refactor: дублирование поддерживает наследуемую коллекцию [`#2181`](https://github.com/nocobase/nocobase/pull/2181)
- fix: необязательные поля дочерней коллекции не отображаются корректно в родительской коллекции [`#2194`](https://github.com/nocobase/nocobase/pull/2194)
- fix(data-templates): исправлен пустой фильтр [`#2193`](https://github.com/nocobase/nocobase/pull/2193)
- feat(api-keys): поле срока действия поддерживает пользовательские опции [`#2186`](https://github.com/nocobase/nocobase/pull/2186)
- refactor(plugin-workflow): рефакторинг API опций переменных узлов [`#2192`](https://github.com/nocobase/nocobase/pull/2192)
- fix: ошибка при перезаписи поля коллекции [`#2189`](https://github.com/nocobase/nocobase/pull/2189)
- refactor: поддержка текущего объекта для дочерней коллекции [`#2188`](https://github.com/nocobase/nocobase/pull/2188)
- refactor(client): рефакторинг компонентов переменных и переменных в рабочем процессе [`#2157`](https://github.com/nocobase/nocobase/pull/2157)
- feat: поддержка черного списка токенов [`#2168`](https://github.com/nocobase/nocobase/pull/2168)
- fix: изменение времени ожидания CI [`#2187`](https://github.com/nocobase/nocobase/pull/2187)
- fix: невозможно открыть шаблон, если фильтр шаблона данных является пользовательской функцией [`#2183`](https://github.com/nocobase/nocobase/pull/2183)
- feat(collection-manager): поля tableOID и коллекции [`#2161`](https://github.com/nocobase/nocobase/pull/2161)
- fix(utils): исправлена логика проверки типов json-template [`#2177`](https://github.com/nocobase/nocobase/pull/2177)
- fix: ошибка при открытии, если область данных равна null [`#2178`](https://github.com/nocobase/nocobase/pull/2178)
- fix(plugin-workflow): исправлена область данных в блоке таблицы задач [`#2176`](https://github.com/nocobase/nocobase/pull/2176)
- fix: часовой пояс при showTime = false [`#2170`](https://github.com/nocobase/nocobase/pull/2170)
- chore(database): пропуск обновления ассоциации, если модель представления является через модель [`#2173`](https://github.com/nocobase/nocobase/pull/2173)
- test: добавлен атрибут data-testid [`#2167`](https://github.com/nocobase/nocobase/pull/2167)
- fix(plugin-workflow): исправлено действие отмены в конфигурации триггера [`#2166`](https://github.com/nocobase/nocobase/pull/2166)
- fix(utils): избегать использования значения по умолчанию для null в json-templates [`#2165`](https://github.com/nocobase/nocobase/pull/2165)
- fix(plugin-api-keys): использование currentRoles вместо получения ролей из roles:list [`#2163`](https://github.com/nocobase/nocobase/pull/2163)
- docs: обновлена документация, связанная с api-keys [`#2162`](https://github.com/nocobase/nocobase/pull/2162)
- feat: визуализация данных [`#2160`](https://github.com/nocobase/nocobase/pull/2160)
- refactor: оптимизация производительности застревания древовидной таблицы [`#2154`](https://github.com/nocobase/nocobase/pull/2154)
- feat(plugin-api-keys): поддержка fetch API через api-keys [`#2136`](https://github.com/nocobase/nocobase/pull/2136)
- feat(map-plugin): поддержка Google Maps [`#2027`](https://github.com/nocobase/nocobase/pull/2027)
- fix: исправлен баг инициализации, вызванный версией gulp-less [`#2153`](https://github.com/nocobase/nocobase/pull/2153)

### Коммиты

- chore(versions): 😊 публикация v0.10.1-alpha.1 [`15f0282`](https://github.com/nocobase/nocobase/commit/15f028295c1f788c16da7a0643f7feff41e08434)
- chore: обновление журнала изменений [`a96c4cd`](https://github.com/nocobase/nocobase/commit/a96c4cdd8410fcb1011b014f75b09c14f3960b88)
- fix(acl): добавлено поле roles.users [`7e0ac57`](https://github.com/nocobase/nocobase/commit/7e0ac57057d884583fe4fdbd89353ac30f408925)

## [v0.10.0-alpha.5](https://github.com/nocobase/nocobase/compare/v0.10.0-alpha.4...v0.10.0-alpha.5) - 2023-06-29

### Объединено

- fix(assigned field): ошибка проверки динамического значения при назначении поля [`#2117`](https://github.com/nocobase/nocobase/pull/2117)
- fix(upload): исправлено обновление статуса загрузки, если загрузка была успешной [`#2133`](https://github.com/nocobase/nocobase/pull/2133)
- fix: поля ассоциации нельзя настроить в таблице [`#2146`](https://github.com/nocobase/nocobase/pull/2146)
- feat: кэширование ошибок [`#2145`](https://github.com/nocobase/nocobase/pull/2145)
- fix(client): исправлен инициализатор поля в блоке деталей [`#2144`](https://github.com/nocobase/nocobase/pull/2144)
- fix: dropdownMatchSelectWidth=false [`#2143`](https://github.com/nocobase/nocobase/pull/2143)
- fix(doc): переход между каталогами одного уровня [`#2140`](https://github.com/nocobase/nocobase/pull/2140)
- refactor: следует использовать useDocumentTitle для изменения заголовка документа [`#2137`](https://github.com/nocobase/nocobase/pull/2137)
- Add *.pdf preview [`#2105`](https://github.com/nocobase/nocobase/pull/2105)
- fix: ошибка миграции вверх [`#2135`](https://github.com/nocobase/nocobase/pull/2135)

### Коммиты

- chore(versions): 😊 публикация v0.10.0-alpha.5 [`560c00c`](https://github.com/nocobase/nocobase/commit/560c00cc3eda9352f32dd33d234668673f835175)
- chore: обновление журнала изменений [`c32533e`](https://github.com/nocobase/nocobase/commit/c32533e1b8e660c827ddcb18b7c41cf4b15e90e5)

## [v0.10.0-alpha.4](https://github.com/nocobase/nocobase/compare/v0.10.0-alpha.3...v0.10.0-alpha.4) - 2023-06-27

### Объединено

- refactor: запрос данных при открытии выпадающего списка [`#2127`](https://github.com/nocobase/nocobase/pull/2127)
- fix: исправлено появление диалогового окна [`#2134`](https://github.com/nocobase/nocobase/pull/2134)
- fix(association-field): ошибка отправки после добавления данных в подформу для нескольких полей ассоциации [`#2065`](https://github.com/nocobase/nocobase/pull/2065)
- fix(sub-apps): исправлено некорректное отображение страницы при навигации в подприложениях [`#2126`](https://github.com/nocobase/nocobase/pull/2126)
- fix: блок tree gantt не отображается корректно [`#2123`](https://github.com/nocobase/nocobase/pull/2123)
- fix(plugin-workflow): изменение на использование formv2 для избежания проблем обновления значений [`#2124`](https://github.com/nocobase/nocobase/pull/2124)
- style: улучшение стиля блоков list и gridCard [`#2087`](https://github.com/nocobase/nocobase/pull/2087)
- fix: исправлено появление кнопки дизайнера [`#2120`](https://github.com/nocobase/nocobase/pull/2120)
- fix: исправлено исчезновение выпадающего меню [`#2109`](https://github.com/nocobase/nocobase/pull/2109)
- chore: исправлена опечатка [`#2108`](https://github.com/nocobase/nocobase/pull/2108)

### Коммиты

- chore(versions): 😊 публикация v0.10.0-alpha.4 [`f3f91bd`](https://github.com/nocobase/nocobase/commit/f3f91bd649c5c7c57ef3927d4ae47b5e5b1a9e74)
- chore: обновление журнала изменений [`ce79e4d`](https://github.com/nocobase/nocobase/commit/ce79e4dc5bc6584c74ec335b33216163a8f6deec)
- Revert "chore: обновление типов react" [`b2e7185`](https://github.com/nocobase/nocobase/commit/b2e71850f8f52b1c65c0c3783dbb48f64810c57b)

## [v0.10.0-alpha.3](https://github.com/nocobase/nocobase/compare/v0.10.0-alpha.2...v0.10.0-alpha.3) - 2023-06-25

### Объединено

- fix: удаление последнего поля из подтаблицы приводит к удалению всей таблицы [`#2077`](https://github.com/nocobase/nocobase/pull/2077)
- fix(sub-table): унаследованные поля нельзя редактировать в подтаблице [`#2106`](https://github.com/nocobase/nocobase/pull/2106)
- fix(input-number): изменение шага на 1 [`#2104`](https://github.com/nocobase/nocobase/pull/2104)
- fix: schema-uid-invalid [`#2107`](https://github.com/nocobase/nocobase/pull/2107)
- fix(plugin-workflow): исправлены логика ветвления и выхода [`#2103`](https://github.com/nocobase/nocobase/pull/2103)
- fix: ошибка создания CLI плагина [`#2102`](https://github.com/nocobase/nocobase/pull/2102)
- fix: параметры выбора [`#2101`](https://github.com/nocobase/nocobase/pull/2101)
- chore(deps): обновление formily с 2.2.24 до 2.2.26 [`#2088`](https://github.com/nocobase/nocobase/pull/2088)
- fix(sub-table): разрешена настройка "Отображение полей ассоциации" [`#2073`](https://github.com/nocobase/nocobase/pull/2073)
- style: улучшение стиля модального окна дочерней коллекции [`#2100`](https://github.com/nocobase/nocobase/pull/2100)
- feat: область данных поддерживает переменные для полей ассоциации [`#2049`](https://github.com/nocobase/nocobase/pull/2049)
- refactor: исправление предупреждений antd 4.x [`#1998`](https://github.com/nocobase/nocobase/pull/1998)
- fix(plugin-workflow): исправлен стиль кнопки задачи [`#2098`](https://github.com/nocobase/nocobase/pull/2098)
- fix(mobile-client): исправлено несколько ошибок и улучшения [`#2072`](https://github.com/nocobase/nocobase/pull/2072)
- fix(plugin-verification): исправлено дублирование установки [`#2097`](https://github.com/nocobase/nocobase/pull/2097)
- fix: неполный список полей для назначенных полей [`#2093`](https://github.com/nocobase/nocobase/pull/2093)
- fix: добавлен useAdminSchemaUid [`#2092`](https://github.com/nocobase/nocobase/pull/2092)
- refactor(db): добавлена пакетная логика обновления для повышения производительности [`#2070`](https://github.com/nocobase/nocobase/pull/2070)
- fix: невозможность загрузки данных из chinaRegion при первой настройке [`#2089`](https://github.com/nocobase/nocobase/pull/2089)
- refactor: миграция adminSchemaUid и mobileSchemaUid в системные настройки [`#2084`](https://github.com/nocobase/nocobase/pull/2084)
- fix(plugin-workflow): исправлена случайная ошибка на странице рабочего процесса [`#2086`](https://github.com/nocobase/nocobase/pull/2086)
- fix: стиль мобильной документации [`#2083`](https://github.com/nocobase/nocobase/pull/2083)

### Коммиты

- chore(versions): 😊 публикация v0.10.0-alpha.3 [`83bf8ea`](https://github.com/nocobase/nocobase/commit/83bf8ea3bbf7d5e2d2c8094d56844cec8560274f)
- chore: обновление журнала изменений [`cc37667`](https://github.com/nocobase/nocobase/commit/cc376673a931411435a8b4ffffa22dc4921fcbf8)
- feat: обновление документации [`5672ffc`](https://github.com/nocobase/nocobase/commit/5672ffc9fa4b7b311e97fbb59fce8c368369c9c7)

## [v0.10.0-alpha.2](https://github.com/nocobase/nocobase/compare/v0.9.4-alpha.2...v0.10.0-alpha.2) - 2023-06-20

### Объединено

- refactor: обновление `umi`, `react` и `react-router-dom` [`#1921`](https://github.com/nocobase/nocobase/pull/1921)
- fix(collection-manager): общий доступ к коллекции, когда COLLECTION_MANAGER_SCHEMA не установлен [`#2081`](https://github.com/nocobase/nocobase/pull/2081)
- fix(plugin-formula): исправление эффекта поля формулы и компонента read-pretty [`#2076`](https://github.com/nocobase/nocobase/pull/2076)
- fix: поле коллекции файлов должно по умолчанию отображаться как поле заголовка [`#2059`](https://github.com/nocobase/nocobase/pull/2059)
- fix(client): удаление некорректного onchange в компоненте json [`#2079`](https://github.com/nocobase/nocobase/pull/2079)
- fix(client): исправление ошибки onchange [`#2075`](https://github.com/nocobase/nocobase/pull/2075)
- fix(client): исправление локализации [`#2074`](https://github.com/nocobase/nocobase/pull/2074)
- fix(Varaible): исправление отключенной опции [`#2043`](https://github.com/nocobase/nocobase/pull/2043)
- fix: rowSelection undefined [`#2071`](https://github.com/nocobase/nocobase/pull/2071)
- fix: поле связи не может включить ссылку в столбце таблицы [`#2066`](https://github.com/nocobase/nocobase/pull/2066)
- refactor(plugin-workflow): миграция блока ручной коллекции [`#2064`](https://github.com/nocobase/nocobase/pull/2064)
- refactor(association-field): поддержка подтаблиц [`#1862`](https://github.com/nocobase/nocobase/pull/1862)
- fix: избежание ошибки [`#2060`](https://github.com/nocobase/nocobase/pull/2060)
- fix(Data-template): исправление невозможности раскрытия поля [`#2057`](https://github.com/nocobase/nocobase/pull/2057)
- feat(association field): быстрое добавление нового [`#1953`](https://github.com/nocobase/nocobase/pull/1953)
- fix: дублирование локализации действия [`#2052`](https://github.com/nocobase/nocobase/pull/2052)
- fix: исправление значения по умолчанию для необязательного поля [`#2053`](https://github.com/nocobase/nocobase/pull/2053)
- refactor: улучшение стиля блока списка и блока сетки [`#1988`](https://github.com/nocobase/nocobase/pull/1988)
- fix: блок исчезает при перетаскивании над его родителем [`#2048`](https://github.com/nocobase/nocobase/pull/2048)
- fix: производительность формы [`#2047`](https://github.com/nocobase/nocobase/pull/2047)
- fix: значение по умолчанию для множественного выбора не может быть установлено [`#2031`](https://github.com/nocobase/nocobase/pull/2031)
- fix: отображение на стороне ПК при мобильном доступе неполное [`#2039`](https://github.com/nocobase/nocobase/pull/2039)
- fix: включение вкладки и удаление страницы вкладки приводит к ошибке [`#2045`](https://github.com/nocobase/nocobase/pull/2045)
- refactor(PluginManager): удаление бесполезного кода [`#2022`](https://github.com/nocobase/nocobase/pull/2022)
- fix(mobile-client): некоторые ошибки mobile-client [`#2017`](https://github.com/nocobase/nocobase/pull/2017)
- fix: ошибка после удаления поля связи блока associationFilter [`#2038`](https://github.com/nocobase/nocobase/pull/2038)
- fix(association-field): значения по умолчанию для полей поля связи [`#2037`](https://github.com/nocobase/nocobase/pull/2037)
- chore(database): возврат пустых полей при неуказанных атрибутах [`#2034`](https://github.com/nocobase/nocobase/pull/2034)
- refactor: дочернее и родительское поле не связаны [`#2030`](https://github.com/nocobase/nocobase/pull/2030)
- fix(oidc): ошибки интеграции с logto [`#2032`](https://github.com/nocobase/nocobase/pull/2032)
- fix(data-template): фильтрация внешних ключей [`#2033`](https://github.com/nocobase/nocobase/pull/2033)
- fix(client): исправление обработки значений компонента ввода json [`#2028`](https://github.com/nocobase/nocobase/pull/2028)
- feat: фильтрация ID в подформах [`#2025`](https://github.com/nocobase/nocobase/pull/2025)
- fix(GridCard): количество столбцов не работает [`#2023`](https://github.com/nocobase/nocobase/pull/2023)
- feat: использование `ActionContextProvider` вместо `ActionContext.Provider` [`#2019`](https://github.com/nocobase/nocobase/pull/2019)
- fix: повторная вставка дублирующихся маршрутов [`#2018`](https://github.com/nocobase/nocobase/pull/2018)
- refactor(plugin-workflow): изменение API рендеринга конфигурации узла на компонент [`#2014`](https://github.com/nocobase/nocobase/pull/2014)
- chore(github-actions): разделение тестов для фронтенда и бэкенда [`#2013`](https://github.com/nocobase/nocobase/pull/2013)
- feat(plugin-mobile-client): поддержка клиентской части мобильного приложения [`#1879`](https://github.com/nocobase/nocobase/pull/1879)
- chore(database): добавление проверки атрибутов с жадной загрузкой [`#2010`](https://github.com/nocobase/nocobase/pull/2010)
- feat(auth): поддержка пользовательской аутентификации [`#2007`](https://github.com/nocobase/nocobase/pull/2007)
- feat(plugin-fm): добавление опции для удаления файла физически или нет [`#2005`](https://github.com/nocobase/nocobase/pull/2005)
- fix: жадная загрузка с вложенными связями [`#2002`](https://github.com/nocobase/nocobase/pull/2002)
- chore(acl): запись роли в ACL, если она существует в базе данных и не найдена [`#2001`](https://github.com/nocobase/nocobase/pull/2001)
- feat: действие дублирования [`#1973`](https://github.com/nocobase/nocobase/pull/1973)
- refactor(association-field): хук useAssociationNames [`#1956`](https://github.com/nocobase/nocobase/pull/1956)
- chore(collection-manager): не выбрасывать ошибку при удалении исходной коллекции [`#1999`](https://github.com/nocobase/nocobase/pull/1999)
- fix: assignedField не может выбрать dynamicValue [`#2000`](https://github.com/nocobase/nocobase/pull/2000)
- test: добавление тестов для клиента [`#1960`](https://github.com/nocobase/nocobase/pull/1960)
- fix: включение отображения заголовка [`#1995`](https://github.com/nocobase/nocobase/pull/1995)
- fix(plugin-formula): исправление компонента результата, вызывающего сбой страницы [`#1996`](https://github.com/nocobase/nocobase/pull/1996)
- feat(collection-manger): ленивая загрузка полей коллекции [`#1993`](https://github.com/nocobase/nocobase/pull/1993)
- fix: блок журналов аудита в редактируемом ящике может получать записи только этого [`#1917`](https://github.com/nocobase/nocobase/pull/1917)
- feat: обновление formily [`#1880`](https://github.com/nocobase/nocobase/pull/1880)
- refactor(plugin-fm): изменение API и разрешение выбора хранилища [`#1250`](https://github.com/nocobase/nocobase/pull/1250)
- fix: исправление недействительного значения по умолчанию в подформе [`#1989`](https://github.com/nocobase/nocobase/pull/1989)
- feat(database): добавление firstOrCreate и updateOrCreate в репозиторий [`#1943`](https://github.com/nocobase/nocobase/pull/1943)
- feat(database): добавление имени дочерней коллекции после жадной загрузки [`#1978`](https://github.com/nocobase/nocobase/pull/1978)
- fix(multip-app-manager): инициализация нескольких экземпляров Application при запуске подприложения [`#1986`](https://github.com/nocobase/nocobase/pull/1986)
- feat(plugin-workflow): ручные формы [`#1748`](https://github.com/nocobase/nocobase/pull/1748)
- fix(charts): ошибка undefined поля [`#1980`](https://github.com/nocobase/nocobase/pull/1980)
- chore(database): типы данных pg oid и name в представлении [`#1982`](https://github.com/nocobase/nocobase/pull/1982)
- feat: вывод поля связи belongs to в коллекции представления [`#1756`](https://github.com/nocobase/nocobase/pull/1756)
- fix: конфигурация treeCollection в детальном блоке [`#1975`](https://github.com/nocobase/nocobase/pull/1975)
- fix(database): отсутствующая ссылка при перезаписи родительского поля [`#1977`](https://github.com/nocobase/nocobase/pull/1977)
- fix(evaluators): исправление числового ключа в пути переменной [`#1976`](https://github.com/nocobase/nocobase/pull/1976)
- fix(association-field): form.get & set valuesIn field.path [`#1972`](https://github.com/nocobase/nocobase/pull/1972)
- fix: useCreateActionProps [`#1971`](https://github.com/nocobase/nocobase/pull/1971)
- fix(database): обновление значений связи с вложенными связями [`#1970`](https://github.com/nocobase/nocobase/pull/1970)
- fix: добавление унаследованных блоков в поля отношений при редактировании должно отображать только себя [`#1967`](https://github.com/nocobase/nocobase/pull/1967)
- fix(form-item): конфигурация области данных и правила сортировки должны отображаться только в поле связи [`#1964`](https://github.com/nocobase/nocobase/pull/1964)
- fix: выбор с цветовым тегом [`#1963`](https://github.com/nocobase/nocobase/pull/1963)
- fix: выбор toValue [`#1962`](https://github.com/nocobase/nocobase/pull/1962)
- fix: выбор null значения [`#1961`](https://github.com/nocobase/nocobase/pull/1961)
- refactor(sub-form): стиль подформы [`#1959`](https://github.com/nocobase/nocobase/pull/1959)
- fix(plugin-formula): исправление компонента read-pretty при использовании в поле связи [`#1957`](https://github.com/nocobase/nocobase/pull/1957)
- perf(data-scope): асинхронная загрузка данных переменных [`#1932`](https://github.com/nocobase/nocobase/pull/1932)
- fix: неопределенный режим [`#1950`](https://github.com/nocobase/nocobase/pull/1950)
- fix(grid-card, list): отображение заголовка работает только в текущем блоке [`#1942`](https://github.com/nocobase/nocobase/pull/1942)
- refactor(linkage-rule): правила связи поддерживают поля связи toMany [`#1924`](https://github.com/nocobase/nocobase/pull/1924)
- feat(plugin-manager): улучшенный опыт работы с менеджером плагинов [`#1927`](https://github.com/nocobase/nocobase/pull/1927)
- chore(database): сортировка связей многие-ко-многим по первичному ключу [`#1948`](https://github.com/nocobase/nocobase/pull/1948)
- test(audit-logs): изменения журнала аудита [`#1928`](https://github.com/nocobase/nocobase/pull/1928)
- fix: жадная загрузка belongsToMany с промежуточной таблицей [`#1946`](https://github.com/nocobase/nocobase/pull/1946)

### Коммиты

- chore(versions): 😊 публикация v0.10.0-alpha.2 [`0b06e2c`](https://github.com/nocobase/nocobase/commit/0b06e2cd6967ee355a76ce201a80338bee536c97)
- Revert "fix: блок журналов аудита в редактируемом ящике может получать записи только этого … (#1917)" [`a1872fa`](https://github.com/nocobase/nocobase/commit/a1872fa75beae8ae02774a8e4550a192518e7aa7)
- fix(association-field): показывать кнопку добавления новых данных при отсутствии данных [`261ca0d`](https://github.com/nocobase/nocobase/commit/261ca0dbbb5659841b31026dad33b799782a8511)

## [v0.9.4-alpha.2](https://github.com/nocobase/nocobase/compare/v0.9.4-alpha.1...v0.9.4-alpha.2) - 2023-05-26

### Объединено

- fix: разбор вложенных связей в filterParser [`#1941`](https://github.com/nocobase/nocobase/pull/1941)
- fix(association-field): разрешить отсоединение [`#1940`](https://github.com/nocobase/nocobase/pull/1940)
- fix(data-template): исправление ввода заголовка, предотвращающего правильное переключение данных [`#1937`](https://github.com/nocobase/nocobase/pull/1937)
- refactor: отображение загрузки в поле выбора связи при загрузке данных [`#1925`](https://github.com/nocobase/nocobase/pull/1925)
- fix(association-field): поддержка множественного выбора [`#1938`](https://github.com/nocobase/nocobase/pull/1938)
- feat(multi-app-manager): поддержка автозапуска [`#1931`](https://github.com/nocobase/nocobase/pull/1931)
- fix(client): исправление некоторых предупреждений [`#1934`](https://github.com/nocobase/nocobase/pull/1934)

### Коммиты

- chore(versions): 😊 публикация v0.9.4-alpha.2 [`d7f2146`](https://github.com/nocobase/nocobase/commit/d7f21460c68ba7415d7d46f93303ead706b6d8f9)
- fix(association-field): отображение поддеталей по умолчанию [`1e870cf`](https://github.com/nocobase/nocobase/commit/1e870cf5ef7770b3e71051b39983dbca7d496706)
- chore: обновление журнала изменений [`f2619b0`](https://github.com/nocobase/nocobase/commit/f2619b032597a0b65db7717cab418a6282a12651)

## [v0.9.4-alpha.1](https://github.com/nocobase/nocobase/compare/v0.9.3-alpha.1...v0.9.4-alpha.1) - 2023-05-25

### Объединено

- chore: загрузка коллекции представления, если источник не найден [`#1930`](https://github.com/nocobase/nocobase/pull/1930)
- feat(data-template): поддержка установки области данных и поля заголовка [`#1918`](https://github.com/nocobase/nocobase/pull/1918)
- feat(data-template): поддержка выбора полей на неограниченное количество уровней [`#1910`](https://github.com/nocobase/nocobase/pull/1910)
- chore: при использовании поля связи в режиме выбора размер открытия можно изменить [`#1926`](https://github.com/nocobase/nocobase/pull/1926)
- fix(ConfigurationTabs): избежание ошибки [`#1782`](https://github.com/nocobase/nocobase/pull/1782)
- fix: запрос данных tableField при добавлении дочернего действия [`#1876`](https://github.com/nocobase/nocobase/pull/1876)
- refactor: тестирование фронтенда с использованием vitest [`#1900`](https://github.com/nocobase/nocobase/pull/1900)
- fix: отключение кнопки всплывающего окна в add-modal [`#1808`](https://github.com/nocobase/nocobase/pull/1808)
- fix: добавление параметров ресурса ACL [`#1923`](https://github.com/nocobase/nocobase/pull/1923)
- chore: обновление защиты для массивов, содержащих null [`#1922`](https://github.com/nocobase/nocobase/pull/1922)
- refactor: инициализация при переключении компонентов полей [`#1915`](https://github.com/nocobase/nocobase/pull/1915)
- fix(association-field): связь данных возможна только при успешном создании новых данных [`#1884`](https://github.com/nocobase/nocobase/pull/1884)
- fix: жадная загрузка belongsToMany с пользовательским sourceKey [`#1913`](https://github.com/nocobase/nocobase/pull/1913)
- fix: скрытие заголовка подформы скрывает все вложенные заголовки [`#1904`](https://github.com/nocobase/nocobase/pull/1904)
- fix: updateAssociationValues [`#1903`](https://github.com/nocobase/nocobase/pull/1903)
- fix(plugin-formula): использование read-pretty компонента в результате [`#1911`](https://github.com/nocobase/nocobase/pull/1911)
- fix: невозможность установки значения по умолчанию при включении обязательного поля формы [`#1887`](https://github.com/nocobase/nocobase/pull/1887)
- fix(Data-template): исправление ошибки при удалении полей [`#1907`](https://github.com/nocobase/nocobase/pull/1907)
- feat(app): добавление кнопки очистки кэша [`#1909`](https://github.com/nocobase/nocobase/pull/1909)
- fix: жадная загрузка связи belongsToMany [`#1906`](https://github.com/nocobase/nocobase/pull/1906)
- feat: поддержка переменных полей to-multi [`#1680`](https://github.com/nocobase/nocobase/pull/1680)
- fix: добавление связи belongsTo с полями [`#1894`](https://github.com/nocobase/nocobase/pull/1894)
- fix: добавление связи belongsTo [`#1893`](https://github.com/nocobase/nocobase/pull/1893)
- fix: предварительная загрузка связанных данных [`#1847`](https://github.com/nocobase/nocobase/pull/1847)
- feat: поддержка ручного перезапуска приложения [`#1889`](https://github.com/nocobase/nocobase/pull/1889)
- Refactor/append fields [`#1883`](https://github.com/nocobase/nocobase/pull/1883)
- chore: парсер SQL для PostgreSQL [`#1890`](https://github.com/nocobase/nocobase/pull/1890)
- fix(plugin-workflow): исправление языка [`#1886`](https://github.com/nocobase/nocobase/pull/1886)
- fix: обязательное поле при установке правил сортировки [`#1885`](https://github.com/nocobase/nocobase/pull/1885)
- feat(plugin-workflow): добавление описания узла в выдвижной панели при редактировании узла [`#1882`](https://github.com/nocobase/nocobase/pull/1882)
- fix(plugin-workflow): исправление вызова API переменной в цикле [`#1877`](https://github.com/nocobase/nocobase/pull/1877)
- chore(github-template): очистка комментариев и форматирование [`#1878`](https://github.com/nocobase/nocobase/pull/1878)
- feat(association-field): значение по умолчанию для связи to-many [`#1873`](https://github.com/nocobase/nocobase/pull/1873)
- fix(plugin-workflow): исправление заголовка триггера при незагруженном workflow [`#1875`](https://github.com/nocobase/nocobase/pull/1875)
- feat(plugin-workflow): агрегация [`#1852`](https://github.com/nocobase/nocobase/pull/1852)
- Feat/translation es_ES [`#1801`](https://github.com/nocobase/nocobase/pull/1801)
- fix: данные не обновляются при изменении appends [`#1872`](https://github.com/nocobase/nocobase/pull/1872)
- fix: association select без опций при очистке фильтра [`#1866`](https://github.com/nocobase/nocobase/pull/1866)
- fix(acl): проблема с повторяющимся полем createdById [`#1871`](https://github.com/nocobase/nocobase/pull/1871)
- feat(client): разрешение поиска по заголовку в выборе коллекции [`#1869`](https://github.com/nocobase/nocobase/pull/1869)
- chore: пропуск получения автономного подприложения [`#1868`](https://github.com/nocobase/nocobase/pull/1868)
- fix(plugin-workflow): удаление бесполезной опции контекста [`#1867`](https://github.com/nocobase/nocobase/pull/1867)
- fix: фильтрация внешних ключей при наследовании полей [`#1864`](https://github.com/nocobase/nocobase/pull/1864)
- feat(plugin-workflow): цикл [`#1787`](https://github.com/nocobase/nocobase/pull/1787)
- fix: insertAdjacent не найден [`#1861`](https://github.com/nocobase/nocobase/pull/1861)
- refactor(add-new): поддержка кнопки редактирования для поля связи [`#1854`](https://github.com/nocobase/nocobase/pull/1854)
- feat: поддержка блоков List и Grid Card [`#1753`](https://github.com/nocobase/nocobase/pull/1753)
- fix: исправление отсутствия переключателя "Разрешить множественный выбор" для поля множественного выбора [`#1857`](https://github.com/nocobase/nocobase/pull/1857)
- fix: поле интерфейса вложений без appends [`#1856`](https://github.com/nocobase/nocobase/pull/1856)
- fix: ошибка действия при удалении поля [`#1849`](https://github.com/nocobase/nocobase/pull/1849)
- feat: поддержка запуска одного подприложения [`#1853`](https://github.com/nocobase/nocobase/pull/1853)
- fix: назначение поля с удаленным полем [`#1850`](https://github.com/nocobase/nocobase/pull/1850)
- fix: поле заголовка при назначении значений поля [`#1848`](https://github.com/nocobase/nocobase/pull/1848)
- fix: association appends [`#1842`](https://github.com/nocobase/nocobase/pull/1842)
- feat(plugin-workflow): добавление кнопки удаления на странице холста workflow [`#1844`](https://github.com/nocobase/nocobase/pull/1844)
- fix(block-provider): исправление фильтра getNesterAppends [`#1839`](https://github.com/nocobase/nocobase/pull/1839)
- feat: метод агрегации в репозитории [`#1829`](https://github.com/nocobase/nocobase/pull/1829)

### Коммиты

- feat(docs): обновление документации [`0b0a8d2`](https://github.com/nocobase/nocobase/commit/0b0a8d2be5f007c94c2050ddf28767100eba2ea8)
- chore(versions): 😊 публикация v0.9.4-alpha.1 [`9c94840`](https://github.com/nocobase/nocobase/commit/9c94840c6b8cafa7dfc37bb660a7269c2480f995)
- chore: обновление журнала изменений [`a6c7b41`](https://github.com/nocobase/nocobase/commit/a6c7b417dee9b45006b77459a29ebbdb8428dfc5)

## [v0.9.3-alpha.1](https://github.com/nocobase/nocobase/compare/v0.9.2-alpha.4...v0.9.3-alpha.1) - 2023-05-11

### Объединено

- refactor: поле связи [`#1838`](https://github.com/nocobase/nocobase/pull/1838)
- fix: дерево с опцией полей [`#1833`](https://github.com/nocobase/nocobase/pull/1833)
- fix(client): исправление состояния ime в текстовой области переменных [`#1832`](https://github.com/nocobase/nocobase/pull/1832)
- chore: не возвращать свойство children, если дочерние узлы пусты [`#1825`](https://github.com/nocobase/nocobase/pull/1825)
- fix: дерево с полем сортировки [`#1822`](https://github.com/nocobase/nocobase/pull/1822)
- fix(plugin-workflow): ширина меню выбора [`#1820`](https://github.com/nocobase/nocobase/pull/1820)
- fix: фильтр с appends [`#1819`](https://github.com/nocobase/nocobase/pull/1819)
- Fix/filter by array field [`#1813`](https://github.com/nocobase/nocobase/pull/1813)
- Fix/empty tree query [`#1814`](https://github.com/nocobase/nocobase/pull/1814)
- fix: наследование области связи [`#1806`](https://github.com/nocobase/nocobase/pull/1806)
- fix: обновление узла дерева [`#1812`](https://github.com/nocobase/nocobase/pull/1812)
- fix: список деревьев [`#1810`](https://github.com/nocobase/nocobase/pull/1810)
- test: фильтр вложенной связи [`#1802`](https://github.com/nocobase/nocobase/pull/1802)
- fix: проблема с кнопкой удаления в конфигурации таблицы [`#1764`](https://github.com/nocobase/nocobase/pull/1764)
- fix: исправление закрытия меню при перетаскивании [`#1772`](https://github.com/nocobase/nocobase/pull/1772)
- fix(linkage-rule): условное поле переменной позволяет выбирать поля связи to-many [`#1798`](https://github.com/nocobase/nocobase/pull/1798)
- chore: расчет продолжительности [`#1770`](https://github.com/nocobase/nocobase/pull/1770)
- fix: производительность дерева [`#1779`](https://github.com/nocobase/nocobase/pull/1779)
- fix: некорректное закрытие выдвижной панели после отправки [`#1775`](https://github.com/nocobase/nocobase/pull/1775)
- Fix/recreate association field [`#1789`](https://github.com/nocobase/nocobase/pull/1789)
- fix: удаление повторяющегося "Связывание блоков данных" [`#1763`](https://github.com/nocobase/nocobase/pull/1763)
- fix: ошибка открытия модального окна добавления для дочерних коллекций [`#1780`](https://github.com/nocobase/nocobase/pull/1780)
- fix(utils): исправление ошибки json-templates и перемещение в utils [`#1784`](https://github.com/nocobase/nocobase/pull/1784)
- fix(evaluators): исправление результата даты в переменной [`#1781`](https://github.com/nocobase/nocobase/pull/1781)
- fix: исправление дизайна кнопки действия редактирования [`#1755`](https://github.com/nocobase/nocobase/pull/1755)
- chore: разрешение переопределения значения по умолчанию для поля [`#1777`](https://github.com/nocobase/nocobase/pull/1777)

### Коммиты

- chore(versions): 😊 публикация v0.9.3-alpha.1 [`cf0a921`](https://github.com/nocobase/nocobase/commit/cf0a921f85e4eb783ce7d61a7d5f5f354078a7c1)
- chore: обновление журнала изменений [`daf2034`](https://github.com/nocobase/nocobase/commit/daf2034f8d6aa5857fc0802586668a35f0140b4a)
- chore: исправление ошибок линтера [`23ad507`](https://github.com/nocobase/nocobase/commit/23ad507261399b0be72b02e5399bf42ff9df48cb)

## [v0.9.2-alpha.4](https://github.com/nocobase/nocobase/compare/v0.9.2-alpha.3...v0.9.2-alpha.4) - 2023-04-26

### Объединено

- feat: аргументы узла в среде выполнения pm2 [`#1774`](https://github.com/nocobase/nocobase/pull/1774)
- fix: скрытие значения по умолчанию для выражения [`#1765`](https://github.com/nocobase/nocobase/pull/1765)
- fix(AssociationSelect): исправление неработающего x-read-pretty [`#1766`](https://github.com/nocobase/nocobase/pull/1766)
- fix: исправление фильтра поля конфигурации [`#1742`](https://github.com/nocobase/nocobase/pull/1742)
- fix(filter-block): исправление фильтрации полей связи [`#1758`](https://github.com/nocobase/nocobase/pull/1758)
- fix(variable-input): исправление стиля [`#1761`](https://github.com/nocobase/nocobase/pull/1761)
- chore: пропуск синхронизации переопределения значения по умолчанию поля [`#1762`](https://github.com/nocobase/nocobase/pull/1762)
- fix: исправление аномального действия перетаскивания и обновления в диаграмме Ганта [`#1760`](https://github.com/nocobase/nocobase/pull/1760)

### Коммиты

- chore(versions): 😊 публикация v0.9.2-alpha.4 [`923f6e7`](https://github.com/nocobase/nocobase/commit/923f6e788419991b8215110a5f2ffc7eba4d2d5f)
- docs: обновление журнала изменений [`2c75aa7`](https://github.com/nocobase/nocobase/commit/2c75aa723d61c4d07554aaa5c4abb8df7e102359)
- chore: очистка [`77a6cbf`](https://github.com/nocobase/nocobase/commit/77a6cbf7733ea55c0db761c5d23974a41563fbd3)

## [v0.9.2-alpha.3](https://github.com/nocobase/nocobase/compare/v0.9.2-alpha.2...v0.9.2-alpha.3) - 2023-04-25

### Объединено

- fix: eslint [`#1759`](https://github.com/nocobase/nocobase/pull/1759)
- feat: удаление поля коллекции с подсказками [`#1744`](https://github.com/nocobase/nocobase/pull/1744)
- chore: оптимизация проблемы белого экрана [`#1639`](https://github.com/nocobase/nocobase/pull/1639)
- fix: добавление подсказок для plugin-manage и designable-switch [`#1749`](https://github.com/nocobase/nocobase/pull/1749)
- chore: обновление Dockerfile [`#1754`](https://github.com/nocobase/nocobase/pull/1754)
- chore(comment): collectionOptions.duplicator [`#1752`](https://github.com/nocobase/nocobase/pull/1752)
- fix: пользовательский заголовок столбца, аналогично заголовку поля формы [`#1745`](https://github.com/nocobase/nocobase/pull/1745)
- feat: поддержка использования переменных для установки значения по умолчанию [`#1726`](https://github.com/nocobase/nocobase/pull/1726)
- fix(plugin-workflow): заголовки запросов и параметры должны поддерживать ввод [`#1750`](https://github.com/nocobase/nocobase/pull/1750)
- fix(client): исправление свойств инициализатора memo на основе antd@^4.24 [`#1746`](https://github.com/nocobase/nocobase/pull/1746)
- fix: улучшение отображения поля заголовка [`#1741`](https://github.com/nocobase/nocobase/pull/1741)
- fix: пакетное редактирование удаляет поля связанной таблицы [`#1743`](https://github.com/nocobase/nocobase/pull/1743)
- style: автоматическое сокращение содержимого ячейки таблицы на основе ширины [`#1646`](https://github.com/nocobase/nocobase/pull/1646)
- feat(collection-manager): поддержка установки поля заголовка [`#1729`](https://github.com/nocobase/nocobase/pull/1729)
- fix: область ACL поддерживает переменные [`#1660`](https://github.com/nocobase/nocobase/pull/1660)
- fix: исправление некорректного обновления условия фильтра (переключение "и", "или") [`#1737`](https://github.com/nocobase/nocobase/pull/1737)
- fix(plugin-workflow): исправление внешнего ключа в переменной [`#1740`](https://github.com/nocobase/nocobase/pull/1740)
- fix(plugin-formula): удаление опции showUnchecked [`#1730`](https://github.com/nocobase/nocobase/pull/1730)
- fix(plugin-workflow): исправление скрипта миграции вручную [`#1735`](https://github.com/nocobase/nocobase/pull/1735)
- fix: исправление опечатки [`#1731`](https://github.com/nocobase/nocobase/pull/1731)
- fix(FilterFormBlock): исправление невозможности фильтрации поля связи [`#1699`](https://github.com/nocobase/nocobase/pull/1699)
- feat: добавление линтинга для react-hooks [`#1728`](https://github.com/nocobase/nocobase/pull/1728)
- fix: отсутствие интервала после перетаскивания [`#1671`](https://github.com/nocobase/nocobase/pull/1671)
- fix: загрузка коллекции представления [`#1727`](https://github.com/nocobase/nocobase/pull/1727)

### Коммиты

- chore(versions): 😊 публикация v0.9.2-alpha.3 [`9756dd1`](https://github.com/nocobase/nocobase/commit/9756dd134b741dfcea4546f36182f64c56b87a52)
- fix(collection-manager): исправление макета таблицы [`683db5b`](https://github.com/nocobase/nocobase/commit/683db5b3ba3cfe83e5f5574075ebc1b657d42de1)
- refactor: исправление ошибок линтинга [`7b9bfa1`](https://github.com/nocobase/nocobase/commit/7b9bfa116ff625a06d7c575f51fefd7dfb6cf711)

## [v0.9.2-alpha.2](https://github.com/nocobase/nocobase/compare/v0.9.2-alpha.1...v0.9.2-alpha.2) - 2023-04-19

### Объединено

- fix: нажатие Enter для перезагрузки, когда фокус на Pagination [`#1720`](https://github.com/nocobase/nocobase/pull/1720)

### Коммиты

- chore(versions): 😊 публикация v0.9.2-alpha.2 [`3dfd5a1`](https://github.com/nocobase/nocobase/commit/3dfd5a1f7a3ff14606357f441f547f40fdaa1344)

## [v0.9.2-alpha.1](https://github.com/nocobase/nocobase/compare/v0.9.1-alpha.2...v0.9.2-alpha.1) - 2023-04-19

### Объединено

- refactor(plugin-workflow): изменение единичной формы на пользовательский блок формы [`#1707`](https://github.com/nocobase/nocobase/pull/1707)
- chore(ci): добавление конфигурации таймаута для задач [`#1725`](https://github.com/nocobase/nocobase/pull/1725)
- refactor(plugin-workflow): миграция пунктов меню в опции [`#1724`](https://github.com/nocobase/nocobase/pull/1724)
- fix(client): исправление ошибки при очистке значения ввода переменной [`#1723`](https://github.com/nocobase/nocobase/pull/1723)
- fix(record-picker): исправление проблемы пагинации таблицы [`#1718`](https://github.com/nocobase/nocobase/pull/1718)
- fix(map-plugin): некоторые данные некорректны [`#1717`](https://github.com/nocobase/nocobase/pull/1717)
- fix: область данных не влияет на диаграмму Ганта [`#1716`](https://github.com/nocobase/nocobase/pull/1716)
- fix: индикатор загрузки кнопки не исчезает при сбое отправки операции [`#1698`](https://github.com/nocobase/nocobase/pull/1698)
- fix(linkage rule): ошибка проверки условия множественного выбора [`#1715`](https://github.com/nocobase/nocobase/pull/1715)
- Fix/save данные промежуточной таблицы [`#1714`](https://github.com/nocobase/nocobase/pull/1714)
- feat: улучшение дизайна UI для действия связывания [`#1659`](https://github.com/nocobase/nocobase/pull/1659)
- feat(map): поддержка фильтрации других блоков [`#1691`](https://github.com/nocobase/nocobase/pull/1691)
- refactor: улучшение активации правила связывания [`#1700`](https://github.com/nocobase/nocobase/pull/1700)
- fix: аргумент find fields [`#1710`](https://github.com/nocobase/nocobase/pull/1710)
- feat(form-block): шаблоны данных [`#1704`](https://github.com/nocobase/nocobase/pull/1704)
- fix: ошибка проверки условия данных связи [`#1681`](https://github.com/nocobase/nocobase/pull/1681)
- fix(gantt): обновление проверки разрешений в блоке диаграммы Ганта [`#1701`](https://github.com/nocobase/nocobase/pull/1701)
- fix: clearFormGraph [`#1706`](https://github.com/nocobase/nocobase/pull/1706)
- fix(plugin-workflow): исправление компонента переменной тела запроса [`#1703`](https://github.com/nocobase/nocobase/pull/1703)
- fix(gantt): улучшение текста полосы задач [`#1696`](https://github.com/nocobase/nocobase/pull/1696)
- fix: длинный текст должен переноситься [`#1686`](https://github.com/nocobase/nocobase/pull/1686)
- fix: данные не отображаются при удалении последней страницы, если на ней только один элемент [`#1685`](https://github.com/nocobase/nocobase/pull/1685)
- fix: мета ACL с запросом связи [`#1695`](https://github.com/nocobase/nocobase/pull/1695)
- fix: заголовок правила связывания не может быть пустым [`#1688`](https://github.com/nocobase/nocobase/pull/1688)
- feat: улучшение UI менеджера плагинов [`#1650`](https://github.com/nocobase/nocobase/pull/1650)
- feat: блок диаграммы Ганта [`#1393`](https://github.com/nocobase/nocobase/pull/1393)
- fix(client): исправление потери фокуса постоянного ввода в переменной [`#1689`](https://github.com/nocobase/nocobase/pull/1689)
- feat(plugin-workflow): добавление специфического логгера для workflow [`#1677`](https://github.com/nocobase/nocobase/pull/1677)
- fix: удаление дизайнера [`#1684`](https://github.com/nocobase/nocobase/pull/1684)
- test: загрузка файла .env.test [`#1678`](https://github.com/nocobase/nocobase/pull/1678)
- fix: некорректный язык после выхода из системы [`#1679`](https://github.com/nocobase/nocobase/pull/1679)
- feat: оптимизация коллекции файлов [`#1666`](https://github.com/nocobase/nocobase/pull/1666)
- fix: производительность инициализации поля сортировки [`#1675`](https://github.com/nocobase/nocobase/pull/1675)
- fix(plugin-workflow): исправление полей коллекции со значением null [`#1674`](https://github.com/nocobase/nocobase/pull/1674)
- fix(client): исправление режима read pretty компонента переменной [`#1673`](https://github.com/nocobase/nocobase/pull/1673)
- fix: проблема UI компактной темы [`#1670`](https://github.com/nocobase/nocobase/pull/1670)
- fix: эффект активации правила связывания в форме [`#1669`](https://github.com/nocobase/nocobase/pull/1669)
- feat: шаблон сводки коллекции [`#1672`](https://github.com/nocobase/nocobase/pull/1672)
- feat: (plugin-workflow) динамическое выражение [`#1560`](https://github.com/nocobase/nocobase/pull/1560)
- chore: предупреждение поиска наследуемой коллекции [`#1663`](https://github.com/nocobase/nocobase/pull/1663)
- fix: исключение очистки конфигурации заголовка правила связывания [`#1665`](https://github.com/nocobase/nocobase/pull/1665)
- feat: поддержка фильтра tableoid [`#1657`](https://github.com/nocobase/nocobase/pull/1657)
- feat(plugin-workflow): добавление поддержки массивного отображения в процессоре [`#1662`](https://github.com/nocobase/nocobase/pull/1662)
- fix(plugin-workflow): исправление добавления null к триггеру коллекции [`#1661`](https://github.com/nocobase/nocobase/pull/1661)
- feat(filter-operators): операторы eq и ne поддерживают массивы [`#1658`](https://github.com/nocobase/nocobase/pull/1658)
- fix(plugin-workflow): исправление загрузки данных в выдвижной панели задач [`#1656`](https://github.com/nocobase/nocobase/pull/1656)
### Объединено

- refactor(client): улучшение перевода [`#1654`](https://github.com/nocobase/nocobase/pull/1654)
- fix: исправление исчезновения кнопки "Добавить пункт меню" [`#1655`](https://github.com/nocobase/nocobase/pull/1655)
- chore: добавление новой конфигурации allowAddtoCurrent [`#1652`](https://github.com/nocobase/nocobase/pull/1652)
- feat: поддержка коллекции файлов [`#1636`](https://github.com/nocobase/nocobase/pull/1636)
- fix(plugin-workflow): исправление выдвижной панели ручного узла [`#1653`](https://github.com/nocobase/nocobase/pull/1653)
- chore: наследование API с различной схемой [`#1545`](https://github.com/nocobase/nocobase/pull/1545)
- fix: выбранная запись не может активировать дочернюю коллекцию [`#1649`](https://github.com/nocobase/nocobase/pull/1649)
- feat: хук перед включением плагина [`#1648`](https://github.com/nocobase/nocobase/pull/1648)
- chore: добавление транзакции в действие установки поля [`#1647`](https://github.com/nocobase/nocobase/pull/1647)
- fix(linkage rule): правило связывания не отображается в действии [`#1644`](https://github.com/nocobase/nocobase/pull/1644)
- refactor: параметры коллекции представления [`#1643`](https://github.com/nocobase/nocobase/pull/1643)
- fix: ошибка обновления поля [`#1645`](https://github.com/nocobase/nocobase/pull/1645)
- feat(Table): поддержка правил связывания для действия столбца [`#1638`](https://github.com/nocobase/nocobase/pull/1638)
- fix(view-collection): имя поля нельзя редактировать при наличии источника поля [`#1642`](https://github.com/nocobase/nocobase/pull/1642)
- fix: закрытие правил связывания требует повторного открытия формы для вступления в силу [`#1640`](https://github.com/nocobase/nocobase/pull/1640)
- refactor(client): изменение Variable.TextArea на управляемый компонент [`#1605`](https://github.com/nocobase/nocobase/pull/1605)
- fix: получение определения представления PostgreSQL [`#1641`](https://github.com/nocobase/nocobase/pull/1641)
- fix: вывод типа столбца представления с псевдонимом [`#1634`](https://github.com/nocobase/nocobase/pull/1634)
- fix(plugin-workflow): исправление незначительных проблем UI [`#1635`](https://github.com/nocobase/nocobase/pull/1635)
- chore: отключение подчеркивания в коллекции представлений [`#1633`](https://github.com/nocobase/nocobase/pull/1633)
- fix: область перетаскивания действия формы слишком большая [`#1628`](https://github.com/nocobase/nocobase/pull/1628)
- fix: исправление UI связанного блока FixedBlock [`#1632`](https://github.com/nocobase/nocobase/pull/1632)
- feat: коллекция представлений базы данных [`#1587`](https://github.com/nocobase/nocobase/pull/1587)
- fix: инициализация значения сортировки в поле сортировки с scopeKey [`#1626`](https://github.com/nocobase/nocobase/pull/1626)
- style: улучшение стиля правила связывания [`#1625`](https://github.com/nocobase/nocobase/pull/1625)
- fix: поиск с атрибутами и группой [`#1411`](https://github.com/nocobase/nocobase/pull/1411)
- docs: преобразование ссылки на видео в тег видео [`#1414`](https://github.com/nocobase/nocobase/pull/1414)
- feat(parse-variables): поддержка разбора переменных в параметрах фильтра [`#1558`](https://github.com/nocobase/nocobase/pull/1558)
- fix(linkage rules): поддержка именования, включения, отключения, копирования и присвоения null [`#1511`](https://github.com/nocobase/nocobase/pull/1511)
- chore: обновление тестового CI [`#1622`](https://github.com/nocobase/nocobase/pull/1622)
- fix: кнопка "Добавить" в истории не поддерживает активацию дочерней коллекции [`#1536`](https://github.com/nocobase/nocobase/pull/1536)
- fix(linkages-action): действия блока деталей не поддерживают правила связывания [`#1504`](https://github.com/nocobase/nocobase/pull/1504)
- fix: избежание работы высоты FixedBlock во всплывающем окне [`#1621`](https://github.com/nocobase/nocobase/pull/1621)
- fix: таблица во всплывающем окне не отображается при наличии FixedBlock [`#1619`](https://github.com/nocobase/nocobase/pull/1619)
- feat: улучшение фильтра связи [`#1606`](https://github.com/nocobase/nocobase/pull/1606)
- fix(Table): невозможно отобразить данные таблицы [`#1617`](https://github.com/nocobase/nocobase/pull/1617)
- fix(plugin-workflow): исправление read-pretty формы списка задач для неназначенного пользователя [`#1615`](https://github.com/nocobase/nocobase/pull/1615)
- feat(table): скрытие пагинации при наличии только одной страницы [`#1614`](https://github.com/nocobase/nocobase/pull/1614)
- refactor: улучшение производительности FixedBlock [`#1593`](https://github.com/nocobase/nocobase/pull/1593)
- fix(collection-manager): бесконечная рекурсия [`#1608`](https://github.com/nocobase/nocobase/pull/1608)
- fix(audit-logs): добавление многоточия для столбцов таблицы [`#1603`](https://github.com/nocobase/nocobase/pull/1603)
- feat: улучшение UI для несвязанных данных [`#1602`](https://github.com/nocobase/nocobase/pull/1602)
- feat(Kanban): карточка поддерживает режим открытия [`#1601`](https://github.com/nocobase/nocobase/pull/1601)
- fix(importable-field): некорректное отображение при перемещении маркера сортировки [`#1613`](https://github.com/nocobase/nocobase/pull/1613)
- fix: активированные дочерние коллекции остаются после удаления дочерней коллекции [`#1610`](https://github.com/nocobase/nocobase/pull/1610)
- fix: удаление записи промежуточной таблицы, ссылающейся на таблицу коллекций [`#1611`](https://github.com/nocobase/nocobase/pull/1611)
- fix(plugin-workflow): добавление значений по умолчанию для действий ручного узла [`#1600`](https://github.com/nocobase/nocobase/pull/1600)
- feat(plugin-workflow): добавление опции failOnEmpty для узла запроса [`#1599`](https://github.com/nocobase/nocobase/pull/1599)
- fix(plugin-workflow): использование toJSON вместо get для получения корректного результата [`#1596`](https://github.com/nocobase/nocobase/pull/1596)
- Translation pt-BR (Бразильский португальский) [`#1591`](https://github.com/nocobase/nocobase/pull/1591)
- fix: область разрешений роли отображается пустой [`#1592`](https://github.com/nocobase/nocobase/pull/1592)
- fix(FixedBlock): избежание программной прокрутки канбана [`#1406`](https://github.com/nocobase/nocobase/pull/1406)
- fix: повторный запрос категорий при переключении между интерфейсом графа и коллекциями/полями [`#1590`](https://github.com/nocobase/nocobase/pull/1590)
- fix: collectionFieldsOptions не может получить все поля [`#1588`](https://github.com/nocobase/nocobase/pull/1588)
- fix(plugin-workflow): исправление ширины ввода в конфигурации узла запроса [`#1585`](https://github.com/nocobase/nocobase/pull/1585)
- feat(filter-blocks): поддержка filter-blocks [`#1505`](https://github.com/nocobase/nocobase/pull/1505)
- refactor: мульти-приложение [`#1578`](https://github.com/nocobase/nocobase/pull/1578)
### Объединено

- feat: компактная тема [`#1574`](https://github.com/nocobase/nocobase/pull/1574)
- feat: поддержка поля cron [`#1421`](https://github.com/nocobase/nocobase/pull/1421)
- fix(Calendar): обеспечение получения правильного gridInitializer при добавлении новой записи… [`#1425`](https://github.com/nocobase/nocobase/pull/1425)
- feat(markdown): поддержка mermaid и улучшенный стиль [`#1583`](https://github.com/nocobase/nocobase/pull/1583)
- fix(plugin-map): повторение блока карты [`#1582`](https://github.com/nocobase/nocobase/pull/1582)
- feat: древовидная коллекция [`#1561`](https://github.com/nocobase/nocobase/pull/1561)
- feat(plugin-map): добавление блока карты [`#1486`](https://github.com/nocobase/nocobase/pull/1486)
- chore: ленивая загрузка подприложения в общей коллекции [`#1569`](https://github.com/nocobase/nocobase/pull/1569)
- fix(record-picker): поддержка добавления записей подколлекции [`#1573`](https://github.com/nocobase/nocobase/pull/1573)
- fix: перезагрузка менеджера приложений [`#1565`](https://github.com/nocobase/nocobase/pull/1565)
- feat: плагин мульти-приложений с общей коллекцией [`#1562`](https://github.com/nocobase/nocobase/pull/1562)
- feat: поддержка ссылок в выборе записей [`#1515`](https://github.com/nocobase/nocobase/pull/1515)
- feat: мульти-приложения [`#1540`](https://github.com/nocobase/nocobase/pull/1540)
- docs(client): добавление документации по переменным [`#1556`](https://github.com/nocobase/nocobase/pull/1556)
- fix(charts): улучшение предпросмотра таблицы диаграмм для объектного типа [`#1555`](https://github.com/nocobase/nocobase/pull/1555)
- feat(plugin-workflow): конфигурация предзагрузки связей в триггерах и узлах [`#1548`](https://github.com/nocobase/nocobase/pull/1548)

### Исправлено

- fix(plugin-workflow): исправление формы списка задач в режиме read-pretty для неназначенного пользователя (#1615) [`#1572`](https://github.com/nocobase/nocobase/issues/1572)

### Коммиты

- chore(versions): 😊 публикация v0.9.2-alpha.1 [`d1adc9d`](https://github.com/nocobase/nocobase/commit/d1adc9de0b87b896e90c81c226646b840309c240)
- fix(file-manager): обновление версии s3 [`50183b0`](https://github.com/nocobase/nocobase/commit/50183b065d32be5d2f6590bfb0c6190fafc12881)
- fix: правило связывания [`b8776fe`](https://github.com/nocobase/nocobase/commit/b8776fe2d0fd6729c18b968d9f7b15e7c81c4ef2)

## [v0.9.1-alpha.2](https://github.com/nocobase/nocobase/compare/v0.9.1-alpha.1...v0.9.1-alpha.2) - 2023-03-09

### Объединено

- fix(plugin-workflow): исправление импорта модуля (#1550) [`#1552`](https://github.com/nocobase/nocobase/pull/1552)
- chore: ответ репозитория отношений, когда исходная модель не найдена [`#1546`](https://github.com/nocobase/nocobase/pull/1546)
- fix(plugin-workflow): исправление компонента конфигурации назначаемых в ручном узле [`#1547`](https://github.com/nocobase/nocobase/pull/1547)
- feat: состояние остановки в приложении [`#1543`](https://github.com/nocobase/nocobase/pull/1543)
- fix(plugin-workflow): исправление пути поля AssociationInput [`#1542`](https://github.com/nocobase/nocobase/pull/1542)
- fix: кэширование с index.html [`#1541`](https://github.com/nocobase/nocobase/pull/1541)
- fix: связь многие-ко-многим через таблицу с пользовательской схемой [`#1539`](https://github.com/nocobase/nocobase/pull/1539)
- fix(plugin-formula): предоставление результата поля формулы в форме [`#1534`](https://github.com/nocobase/nocobase/pull/1534)
- test: тестирование с переменной окружения collection_manager_schema [`#1532`](https://github.com/nocobase/nocobase/pull/1532)
- fix: фильтрация по полю связи с подчеркиванием [`#1537`](https://github.com/nocobase/nocobase/pull/1537)
- fix(charts): исправление копирования [`#1533`](https://github.com/nocobase/nocobase/pull/1533)
- feat: добавление плагина диаграмм [`#1477`](https://github.com/nocobase/nocobase/pull/1477)
- feat: поддержка добавления новых блоков для коллекций наследования [`#1518`](https://github.com/nocobase/nocobase/pull/1518)
- refactor(plugin-workflow): изменение карточки холста и корректировка стилей [`#1529`](https://github.com/nocobase/nocobase/pull/1529)
- fix: тестирование с плагином nocobase [`#1525`](https://github.com/nocobase/nocobase/pull/1525)
- fix: кэширование nginx [`#1523`](https://github.com/nocobase/nocobase/pull/1523)
- fix: удаление поля при наличии различий между схемой коллекции и базой данных [`#1524`](https://github.com/nocobase/nocobase/pull/1524)

### Коммиты

- chore(versions): 😊 публикация v0.9.1-alpha.2 [`bc5156d`](https://github.com/nocobase/nocobase/commit/bc5156d458adecce8189aa535e5738672e63c2c0)
- fix: добавление новых блоков [`3904aa7`](https://github.com/nocobase/nocobase/commit/3904aa7c111eaa522cc7072a268a579aa115906e)
- fix: конфликты имен схем [`a463c3d`](https://github.com/nocobase/nocobase/commit/a463c3d747666496721571110bd77dba3726c2f7)

## [v0.9.1-alpha.1](https://github.com/nocobase/nocobase/compare/v0.9.0-alpha.2...v0.9.1-alpha.1) - 2023-03-03

### Объединено

- refactor: блок журналов аудита [`#1517`](https://github.com/nocobase/nocobase/pull/1517)
- fix(evaluators): исправление предварительной обработки и добавление тестовых случаев [`#1519`](https://github.com/nocobase/nocobase/pull/1519)
- chore(debug): исправление имени файла отладки при запуске теста [`#1520`](https://github.com/nocobase/nocobase/pull/1520)
- feat: переменная окружения схемы менеджера коллекций [`#1506`](https://github.com/nocobase/nocobase/pull/1506)
- fix(client): исправление отображения неотмеченного чекбокса [`#1508`](https://github.com/nocobase/nocobase/pull/1508)
- feat(snapshot-field): улучшение перехода [`#1513`](https://github.com/nocobase/nocobase/pull/1513)
- fix(plugin-workflow): исправление валидации CollectionField при использовании переменной [`#1512`](https://github.com/nocobase/nocobase/pull/1512)
- feat(plugin-formula): вычисления с полем моментального снимка [`#1498`](https://github.com/nocobase/nocobase/pull/1498)
- fix(association-select): фильтр без области данных не работает [`#1509`](https://github.com/nocobase/nocobase/pull/1509)
- feat: резервная сортировка поля инициализации по полю createdAt [`#1507`](https://github.com/nocobase/nocobase/pull/1507)
- fix(graphical-interface): категория коллекции не отображает заголовок [`#1503`](https://github.com/nocobase/nocobase/pull/1503)
- fix(association-select): данные некорректны при использовании области данных [`#1491`](https://github.com/nocobase/nocobase/pull/1491)
- feat: методы доступа к версии диалекта [`#1502`](https://github.com/nocobase/nocobase/pull/1502)
- fix: схема коллекции обновлена, но модель _schema не изменилась [`#1500`](https://github.com/nocobase/nocobase/pull/1500)
- Update zh_CN.ts [`#1481`](https://github.com/nocobase/nocobase/pull/1481)
- fix(linkageRules): поддержка пустого условия [`#1496`](https://github.com/nocobase/nocobase/pull/1496)
- feat: правила связывания кнопок формы [`#1456`](https://github.com/nocobase/nocobase/pull/1456)
- fix: импортер коллекций имеет некорректную ссылку [`#1495`](https://github.com/nocobase/nocobase/pull/1495)
- feat: поддержка пользовательского развертывания плагинов в Dockerfile [`#1494`](https://github.com/nocobase/nocobase/pull/1494)
- fix: переменные окружения [`#1490`](https://github.com/nocobase/nocobase/pull/1490)
- feat: метод подготовки базы данных [`#1492`](https://github.com/nocobase/nocobase/pull/1492)
- Fix/множественные запросы схемы [`#1488`](https://github.com/nocobase/nocobase/pull/1488)
- fix: нарушение строки [`#1487`](https://github.com/nocobase/nocobase/pull/1487)
- refactor(plugin-workflow): миграция оценщиков [`#1485`](https://github.com/nocobase/nocobase/pull/1485)
- docs: исправление опечатки [`#1482`](https://github.com/nocobase/nocobase/pull/1482)
- fix(plugin-workflow): исправление пользовательского статуса задачи [`#1484`](https://github.com/nocobase/nocobase/pull/1484)
- fix(plugin-workflow): исправление параметра конфигурации условия [`#1483`](https://github.com/nocobase/nocobase/pull/1483)
- fix(plugin-workflow): исправление миграции [`#1479`](https://github.com/nocobase/nocobase/pull/1479)
- fix(plugin-workflow): исправление миграции с префиксом таблицы [`#1478`](https://github.com/nocobase/nocobase/pull/1478)
- refactor(plugin-formula): объединение двух типов полей формулы в один [`#1457`](https://github.com/nocobase/nocobase/pull/1457)
- fix(plugin-workflow): исправление миграции для вычислений [`#1476`](https://github.com/nocobase/nocobase/pull/1476)
- fix(plugin-workflow): исправление повторения типа числа в триггере расписания [`#1475`](https://github.com/nocobase/nocobase/pull/1475)
- Feat(plugin-workflow) инструкция вручную [`#1339`](https://github.com/nocobase/nocobase/pull/1339)
- feat: поддержка импорта вложений [`#1466`](https://github.com/nocobase/nocobase/pull/1466)
- fix: ошибка "столбец не существует" после уничтожения поля связи [`#1465`](https://github.com/nocobase/nocobase/pull/1465)
- fix: добавление схемы [`#1464`](https://github.com/nocobase/nocobase/pull/1464)
- fix: избежание выбора уже выбранных данных в o2o, o2m [`#1462`](https://github.com/nocobase/nocobase/pull/1462)
- feat: добавление тестовых случаев [`#1463`](https://github.com/nocobase/nocobase/pull/1463)
- feat: обновление zh_CN.ts [`#1458`](https://github.com/nocobase/nocobase/pull/1458)
- refactor: экспорт плагина [`#1460`](https://github.com/nocobase/nocobase/pull/1460)
- Fix/pg схема с наследованием [`#1446`](https://github.com/nocobase/nocobase/pull/1446)
- feat: админка для нескольких приложений [`#1431`](https://github.com/nocobase/nocobase/pull/1431)
- chore: исправление ошибки сборки плагина [`#1454`](https://github.com/nocobase/nocobase/pull/1454)
- feat: предоставление опции подчеркивания для базы данных [`#1366`](https://github.com/nocobase/nocobase/pull/1366)
- Revert "fix(table): исправление поведения переполнения поля (#1392)" [`#1452`](https://github.com/nocobase/nocobase/pull/1452)
- fix(collection category): дефект локализации zh_cn [`#1451`](https://github.com/nocobase/nocobase/pull/1451)
- feat: добавление параметров namespace и duplicator для опций коллекции [`#1449`](https://github.com/nocobase/nocobase/pull/1449)
- fix(snapshot-field): удаление ограничения глубины [`#1450`](https://github.com/nocobase/nocobase/pull/1450)
- chore: обновление URL лицензий [`#1285`](https://github.com/nocobase/nocobase/pull/1285)
- feat: моментальный снимок связи [`#1438`](https://github.com/nocobase/nocobase/pull/1438)
- fix(table): исправление поведения переполнения поля [`#1392`](https://github.com/nocobase/nocobase/pull/1392)
- fix(plugin-sequence): исправление пропущенного поля createdAt в массовом хуке [`#1448`](https://github.com/nocobase/nocobase/pull/1448)
- fix: ошибка:0308010C:цифровые подпрограммы конверта::неподдерживаемо [`#1447`](https://github.com/nocobase/nocobase/pull/1447)
- feat: категории коллекций [`#1327`](https://github.com/nocobase/nocobase/pull/1327)
- fix(plugin-fm): исправление конфигурации пути для хранилищ [`#1445`](https://github.com/nocobase/nocobase/pull/1445)
- fix: Node.js 17+, добавление openssl-legacy-provider [`#1434`](https://github.com/nocobase/nocobase/pull/1434)
- fix(plugin-workflow): исправление расписания для поля со значением null [`#1442`](https://github.com/nocobase/nocobase/pull/1442)
- feat: поддержка схемы PostgreSQL [`#1439`](https://github.com/nocobase/nocobase/pull/1439)
- fix(i18n): установка разделителя ключа и пространства имен по умолчанию в false [`#1432`](https://github.com/nocobase/nocobase/pull/1432)
- feat: отключение триггера при импорте коллекции [`#1417`](https://github.com/nocobase/nocobase/pull/1417)
- chore: перевод "Добавить вкладку" в заголовке страницы [`#1424`](https://github.com/nocobase/nocobase/pull/1424)
- fix(plugin-workflow): использование промиса для запроса [`#1426`](https://github.com/nocobase/nocobase/pull/1426)
- fix(acl): стратегия слияния пользовательских appends [`#1416`](https://github.com/nocobase/nocobase/pull/1416)
- docs: обновление URL примера G2Plot [`#1408`](https://github.com/nocobase/nocobase/pull/1408)
- docs: исправление опечатки [`#1412`](https://github.com/nocobase/nocobase/pull/1412)

### Объединено

- fix(FixedBlock): использование фильтров связи и FixedBlock одновременно не отображает полную таблицу [`#1405`](https://github.com/nocobase/nocobase/pull/1405)
- feat(calendar): поля startDate и endDate поддерживают использование полей связи [`#1397`](https://github.com/nocobase/nocobase/pull/1397)
- fix: загрузка промежуточной коллекции перед привязкой поля belongsToMany [`#1409`](https://github.com/nocobase/nocobase/pull/1409)
- feat(verification-plugin): поддержка SMS Tencent [`#1382`](https://github.com/nocobase/nocobase/pull/1382)
- fix: внешние ключи доступны для редактирования при добавлении полей [`#1404`](https://github.com/nocobase/nocobase/pull/1404)
- fix: стиль navbar_ui [`#1398`](https://github.com/nocobase/nocobase/pull/1398)
- fix: наследование начальной сортировки [`#1402`](https://github.com/nocobase/nocobase/pull/1402)
- fix(plugin-workflow): исправление ширины ввода URL для конфигурации запроса [`#1401`](https://github.com/nocobase/nocobase/pull/1401)
- Fix/snapshot [`#1396`](https://github.com/nocobase/nocobase/pull/1396)
- feat: исправление фильтра наследования через коллекции [`#1394`](https://github.com/nocobase/nocobase/pull/1394)
- Fix(plugin-sequence): поддержка поля последовательности в таблице m2m [`#1383`](https://github.com/nocobase/nocobase/pull/1383)
- fix(plugin-workflow): корректировка позиции уведомления о выполнении [`#1381`](https://github.com/nocobase/nocobase/pull/1381)
- fix: индивидуальные хуки для промежуточной коллекции [`#1378`](https://github.com/nocobase/nocobase/pull/1378)
- fix: записи промежуточной коллекции не должны сбрасываться [`#1377`](https://github.com/nocobase/nocobase/pull/1377)
- feat(client): добавление контекста disabled для формы [`#1374`](https://github.com/nocobase/nocobase/pull/1374)
- Fix(plugin-workflow): узел запроса [`#1367`](https://github.com/nocobase/nocobase/pull/1367)

### Коммиты

- docs: добавление документации по плагинам [`68511f0`](https://github.com/nocobase/nocobase/commit/68511f05bc7dbca49e0ab95eb868a193a3502d71)
- feat(db): парсер значений полей [`5805b69`](https://github.com/nocobase/nocobase/commit/5805b69455532ad643e9c87831da985d41bc5d6d)
- chore(versions): 😊 публикация v0.9.1-alpha.1 [`946c8f2`](https://github.com/nocobase/nocobase/commit/946c8f25a3df538f4a83abe4468786cf554d8914)

## [v0.9.0-alpha.2](https://github.com/nocobase/nocobase/compare/v0.9.0-alpha.1...v0.9.0-alpha.2) - 2023-01-14

### Объединено

- feat: динамическая загрузка нескольких языков [`#1355`](https://github.com/nocobase/nocobase/pull/1355)
- refactor(plugin-workflow): рефакторинг инструкции запроса [`#1356`](https://github.com/nocobase/nocobase/pull/1356)
- feat: обновление зависимостей [`#1353`](https://github.com/nocobase/nocobase/pull/1353)

### Коммиты

- feat: добавление en-US.example.json [`86554c0`](https://github.com/nocobase/nocobase/commit/86554c0205d6cb8f5dd3a293c9929b4aa9cb5897)
- fix: кэширование локализации [`a4116a2`](https://github.com/nocobase/nocobase/commit/a4116a251b00109dad96e5062bf9b6441544f8b3)
- chore(versions): 😊 публикация v0.9.0-alpha.2 [`daa91e9`](https://github.com/nocobase/nocobase/commit/daa91e95a6192bac19702eb17e9f764a7df11477)

## [v0.9.0-alpha.1](https://github.com/nocobase/nocobase/compare/v0.8.1-alpha.4...v0.9.0-alpha.1) - 2023-01-11

### Объединено

- feat: изменение лицензии [`#1350`](https://github.com/nocobase/nocobase/pull/1350)
- feat: плагин формулы [`#1344`](https://github.com/nocobase/nocobase/pull/1344)
- feat: оптимизация ACL [`#1136`](https://github.com/nocobase/nocobase/pull/1136)
- feat: плагин дубликатора [`#1265`](https://github.com/nocobase/nocobase/pull/1265)
- fix(plugin-workflow): исправление пропущенной подготовки [`#1337`](https://github.com/nocobase/nocobase/pull/1337)
- fix: FixedBlock не исчезает при удалении текущей вкладки [`#1324`](https://github.com/nocobase/nocobase/pull/1324)
- feat(Select): компиляция title и label [`#1332`](https://github.com/nocobase/nocobase/pull/1332)
- fix: улучшение фильтра [`#1333`](https://github.com/nocobase/nocobase/pull/1333)

### Коммиты

- chore(versions): 😊 публикация v0.9.0-alpha.1 [`013f091`](https://github.com/nocobase/nocobase/commit/013f0916a521fef74970ba6feed76c1b17b6ff01)
- fix: typeError: Не удается прочитать свойства undefined (чтение 'find') [`1dc4142`](https://github.com/nocobase/nocobase/commit/1dc4142da2195fb6f09bd691b23948d9d5f9e01d)
- feat: улучшение перевода [`31794d3`](https://github.com/nocobase/nocobase/commit/31794d3c1b7af13d9dbaca8d12b1843c18553307)

## [v0.8.1-alpha.4](https://github.com/nocobase/nocobase/compare/v0.8.1-alpha.2...v0.8.1-alpha.4) - 2023-01-05

### Объединено

- chore(versions): 😊 публикация v0.8.1-alpha.4 [`#1331`](https://github.com/nocobase/nocobase/pull/1331)

## [v0.8.1-alpha.2](https://github.com/nocobase/nocobase/compare/v0.8.0-alpha.13...v0.8.1-alpha.2) - 2023-01-05

### Объединено

- fix(plugin-sequence-field): целое число, генерируемое последовательностью, не должно быть меньше начального значения [`#1330`](https://github.com/nocobase/nocobase/pull/1330)
- fix: фильтр removeNullConditions [`#1329`](https://github.com/nocobase/nocobase/pull/1329)
- fix: исправление отображения моментального снимка [`#1328`](https://github.com/nocobase/nocobase/pull/1328)
- fix(plugin-workflow): исправление выдвижной панели истории в холсте рабочего процесса [`#1326`](https://github.com/nocobase/nocobase/pull/1326)
- feat: плагин поля моментального снимка [`#1253`](https://github.com/nocobase/nocobase/pull/1253)
- feat: исправление стиля настраиваемых полей [`#1322`](https://github.com/nocobase/nocobase/pull/1322)
- fix(plugin-workflow): исправление событий в prepare [`#1325`](https://github.com/nocobase/nocobase/pull/1325)
- fix(database): соответствие фильтра [`#1319`](https://github.com/nocobase/nocobase/pull/1319)
- fix: слияние параметров действия [`#1321`](https://github.com/nocobase/nocobase/pull/1321)
- chore: установка каскадного удаления для belongsToMany [`#1311`](https://github.com/nocobase/nocobase/pull/1311)
- fix: отключение опции filterByTk в методе destroy, если коллекция не имеет первичного ключа или имеет составной первичный ключ [`#1313`](https://github.com/nocobase/nocobase/pull/1313)
- fix: медленный поиск с include в MySQL [`#1304`](https://github.com/nocobase/nocobase/pull/1304)
- fix(map-plugin): невозможность сохранения из-за null значения [`#1309`](https://github.com/nocobase/nocobase/pull/1309)
- fix: создание наследования с именем таблицы, содержащим заглавные буквы [`#1308`](https://github.com/nocobase/nocobase/pull/1308)
- fix: ошибка обновления [`#1303`](https://github.com/nocobase/nocobase/pull/1303)
- fix: фильтр связи [`#1301`](https://github.com/nocobase/nocobase/pull/1301)
- fix: pageSize 200 & "не является функцией" [`#1299`](https://github.com/nocobase/nocobase/pull/1299)
- refactor(client): улучшение универсальности инициализатора вкладок [`#1298`](https://github.com/nocobase/nocobase/pull/1298)
- fix(Select): поле title и кнопка очистки не работают [`#1296`](https://github.com/nocobase/nocobase/pull/1296)
- fix(plugin-fm): исправление конфигурации локального хранилища и пропуск пустого базового URL [`#1294`](https://github.com/nocobase/nocobase/pull/1294)
- feat: обновление antd до версии 4.2.8 [`#1231`](https://github.com/nocobase/nocobase/pull/1231)
- feat: фильтр связи [`#1274`](https://github.com/nocobase/nocobase/pull/1274)
- chore: обновление версии Sequelize до последней [`#1234`](https://github.com/nocobase/nocobase/pull/1234)
- feat: добавление плагина iframe-block [`#1281`](https://github.com/nocobase/nocobase/pull/1281)
- feat: обновление размера страницы до 200 и ограничение полей [`#1282`](https://github.com/nocobase/nocobase/pull/1282)
- fix: предотвращение горизонтальной прокрутки меню [`#1279`](https://github.com/nocobase/nocobase/pull/1279)
- Turkish language created for Docs. Поддержка турецкого языка для документации [`#1071`](https://github.com/nocobase/nocobase/pull/1071)
- fix(client/kanban): исправление бага с активацией всех полей по умолчанию в карточке канбан [`#1270`](https://github.com/nocobase/nocobase/pull/1270)
- fix: невозможность удаления события в календаре [`#1277`](https://github.com/nocobase/nocobase/pull/1277)
- fix(AssociationSelect): отсутствующее поле title в деталях [`#1275`](https://github.com/nocobase/nocobase/pull/1275)
- fix: меню не прокручивается [`#1276`](https://github.com/nocobase/nocobase/pull/1276)
- feat: поддержка фиксированного блока [`#1267`](https://github.com/nocobase/nocobase/pull/1267)
- fix(plugin-sequence): исправление тестового случая [`#1268`](https://github.com/nocobase/nocobase/pull/1268)
- fix(plugin-sequence): исправление индекса шаблона обновления [`#1266`](https://github.com/nocobase/nocobase/pull/1266)
- feat: поддержка фиксированного меню и заголовка [`#1260`](https://github.com/nocobase/nocobase/pull/1260)
- fix: удаление поля в родительской таблице [`#1263`](https://github.com/nocobase/nocobase/pull/1263)
- refactor(client/popup): изменение текста 'Set popup size' на 'Popup size' [`#1262`](https://github.com/nocobase/nocobase/pull/1262)
- feat: вкладки страницы [`#1261`](https://github.com/nocobase/nocobase/pull/1261)
- fix(plugin-fm): значения формы в выдвижной панели [`#1259`](https://github.com/nocobase/nocobase/pull/1259)
- feat: поддержка кнопки синхронизации [`#1258`](https://github.com/nocobase/nocobase/pull/1258)
- fix: isOverride не работает [`#1257`](https://github.com/nocobase/nocobase/pull/1257)
- refactor(sequence-field): перемещение в плагин и использование таблицы для записи [`#1209`](https://github.com/nocobase/nocobase/pull/1209)
- feat: добавление плагина карты [`#1229`](https://github.com/nocobase/nocobase/pull/1229)
- fix(plugin-workflow): исправление результата задачи в истории [`#1242`](https://github.com/nocobase/nocobase/pull/1242)
- feat: установка поля [`#1237`](https://github.com/nocobase/nocobase/pull/1237)
- chore: обновление CI [`#1239`](https://github.com/nocobase/nocobase/pull/1239)
- feat(client/popup): поддержка установки размера выдвижной панели и модального окна [`#1224`](https://github.com/nocobase/nocobase/pull/1224)
- fix(plugin-file-manager): исправление промежуточного ПО локального сервера [`#1226`](https://github.com/nocobase/nocobase/pull/1226)
- feat: блок iframe [`#1225`](https://github.com/nocobase/nocobase/pull/1225)
- fix(workflow/request-var): исправление редактора переменных узла запроса [`#1223`](https://github.com/nocobase/nocobase/pull/1223)
- fix: изменение времени ожидания nginx на 10 минут [`#1222`](https://github.com/nocobase/nocobase/pull/1222)
- fix: изменение времени ожидания импорта на 10 минут [`#1221`](https://github.com/nocobase/nocobase/pull/1221)
- fix: параметры компонента поля появляются в неассоциативном интерфейсе [`#1220`](https://github.com/nocobase/nocobase/pull/1220)
- Fix(plugin-workflow): рефакторинг клиента [`#1163`](https://github.com/nocobase/nocobase/pull/1163)
- feat(cli): быстрый старт [`#1204`](https://github.com/nocobase/nocobase/pull/1204)
- fix(plugin-cm): исправление инъекции интерфейсов и геттеров [`#1196`](https://github.com/nocobase/nocobase/pull/1196)
- fix(i18n): возврат ключа в глобальную область [`#1195`](https://github.com/nocobase/nocobase/pull/1195)
- test(plugin-workflow): добавление кэширования и тестов для SQLite [`#1194`](https://github.com/nocobase/nocobase/pull/1194)
- fix(plugin-workflow): использование двойных каналов для обработки триггеров [`#1187`](https://github.com/nocobase/nocobase/pull/1187)
- fix(plugin-workflow): временный пропуск теста [`#1188`](https://github.com/nocobase/nocobase/pull/1188)
- feat(menu): при выборе группы также выбираются подменю [`#1152`](https://github.com/nocobase/nocobase/pull/1152)
- fix(plugin-workflow): исправление транзакции в триггере [`#1186`](https://github.com/nocobase/nocobase/pull/1186)
- feat: экспорт ошибки типа blob [`#1170`](https://github.com/nocobase/nocobase/pull/1170)
- fix(plugin-workflow): диспетчеризация при запуске сервера [`#1183`](https://github.com/nocobase/nocobase/pull/1183)
- fix: ошибка `yarn start` в системе Windows [`#1177`](https://github.com/nocobase/nocobase/pull/1177)
- fix(plugin-users): исправление инициализации SMS-верификации [`#1173`](https://github.com/nocobase/nocobase/pull/1173)
- fix(plugin-workflow): исправление тестового случая [`#1172`](https://github.com/nocobase/nocobase/pull/1172)
- feat(plugin-workflow): добавление действия дублирования [`#1171`](https://github.com/nocobase/nocobase/pull/1171)
- fix(plugin-workflow): исправление операнда контекста [`#1169`](https://github.com/nocobase/nocobase/pull/1169)
- fix: ошибка автоматического развертывания [`#1168`](https://github.com/nocobase/nocobase/pull/1168)
- feat: настройка области целевых коллекций [`#1165`](https://github.com/nocobase/nocobase/pull/1165)
- ci(workflows): исправление ошибки автоматического развертывания [`#1166`](https://github.com/nocobase/nocobase/pull/1118)
### Объединено (продолжение)

- fix: обновление до bigint [`#1117`](https://github.com/nocobase/nocobase/pull/1117)
- fix(cm): значения по умолчанию для переопределения [`#1112`](https://github.com/nocobase/nocobase/pull/1112)
- fix: обновление последовательности и внешнего ключа [`#1116`](https://github.com/nocobase/nocobase/pull/1116)
- fix(plugin-workflow): исправление схемы рабочего процесса [`#1115`](https://github.com/nocobase/nocobase/pull/1115)
- fix(client): предупреждения о ключах меню [`#1114`](https://github.com/nocobase/nocobase/pull/1114)
- fix: недопустимый тип внешнего ключа [`#1113`](https://github.com/nocobase/nocobase/pull/1113)
- fix: обработка ошибки "столбец не существует" [`#1110`](https://github.com/nocobase/nocobase/pull/1110)
- fix: наследование с коллекцией, которая не существует [`#1109`](https://github.com/nocobase/nocobase/pull/1109)
- fix(locale): перемещение описания в глобальную область [`#1108`](https://github.com/nocobase/nocobase/pull/1108)
- feat: использование bigint для поля id [`#1100`](https://github.com/nocobase/nocobase/pull/1100)
- refactor: плагин формулы [`#1082`](https://github.com/nocobase/nocobase/pull/1082)
- fix: создание наследования из таблицы без id [`#1104`](https://github.com/nocobase/nocobase/pull/1104)
- fix: поиск последовательности таблицы [`#1101`](https://github.com/nocobase/nocobase/pull/1101)
- Feat/collection inherits [`#1097`](https://github.com/nocobase/nocobase/pull/1097)
- fix: создание коллекции с пустыми параметрами наследования [`#1096`](https://github.com/nocobase/nocobase/pull/1096)
- fix: удаление узла после удаления коллекции [`#1095`](https://github.com/nocobase/nocobase/pull/1095)
- fix: ошибка отвязки [`#1094`](https://github.com/nocobase/nocobase/pull/1094)
- chore: сообщение об ошибке конфликта типов [`#1093`](https://github.com/nocobase/nocobase/pull/1093)
- feat: наследование коллекций [`#1069`](https://github.com/nocobase/nocobase/pull/1069)
- feat: отсутствие рекурсивного обновления связей [`#1091`](https://github.com/nocobase/nocobase/pull/1091)
- fix(plugin-workflow): исправление цепочки транзакций в триггере [`#1089`](https://github.com/nocobase/nocobase/pull/1089)
- fix(plugin-workflow): исправление конфликта имен схемы [`#1087`](https://github.com/nocobase/nocobase/pull/1087)
- refactor(plugin-workflow): разделение транзакций для триггера коллекции [`#1080`](https://github.com/nocobase/nocobase/pull/1080)
- fix: пропуск записей, которые не существуют [`#1084`](https://github.com/nocobase/nocobase/pull/1084)
- refactor(plugin-workflow): корректировка стиля [`#1079`](https://github.com/nocobase/nocobase/pull/1079)
- fix: переменная MySQL 'lower_case_table_names' должна быть установлена в '0' или '2' [`#1078`](https://github.com/nocobase/nocobase/pull/1078)
- feat: пакет логирования [`#1021`](https://github.com/nocobase/nocobase/pull/1021)
- Refactor: клиент плагина workflow [`#1077`](https://github.com/nocobase/nocobase/pull/1077)
- fix: синхронизация опций ссылок [`#1061`](https://github.com/nocobase/nocobase/pull/1061)
- refactor(plugin-workflow): корректировка некоторых API [`#1067`](https://github.com/nocobase/nocobase/pull/1067)
- fix(plugin-workflow): исправление геттера триггера [`#1060`](https://github.com/nocobase/nocobase/pull/1060)
- Update README.md [`#1053`](https://github.com/nocobase/nocobase/pull/1053)
- test(collection-manager): тест 20221104151410-update-collections-hidden исправлен [`#1042`](https://github.com/nocobase/nocobase/pull/1042)

### Исправлено

- fix(client): перевод заголовка страницы не работает [`#838`](https://github.com/nocobase/nocobase/issues/838)

### Коммиты

- feat: обновление документации [`15cbad3`](https://github.com/nocobase/nocobase/commit/15cbad30b4e40121ab768273d6d42832960cd4bf)
- Revert "refactor: плагин формулы (#1082)" [`0cbfa0a`](https://github.com/nocobase/nocobase/commit/0cbfa0a52177cce6b5400107a639d97de0b4e7a9)
- chore(versions): 😊 публикация v0.8.1-alpha.2 [`4ecd2ee`](https://github.com/nocobase/nocobase/commit/4ecd2ee40d0ddfdfc5440670aa4f2b3a64f1c819)

## [v0.8.0-alpha.13](https://github.com/nocobase/nocobase/compare/v0.8.0-alpha.11...v0.8.0-alpha.13) - 2022-11-04

### Объединено

- test(collection-manager): миграция - оптимизация теста 20221104151410-update-collections-hidden [`#1040`](https://github.com/nocobase/nocobase/pull/1040)

### Коммиты

- chore(versions): 😊 публикация v0.8.0-alpha.13 [`ce588ee`](https://github.com/nocobase/nocobase/commit/ce588eefb0bfc50f7d5bbee575e0b5e843bf6644)

## [v0.8.0-alpha.11](https://github.com/nocobase/nocobase/compare/v0.8.0-alpha.9...v0.8.0-alpha.11) - 2022-11-04

### Объединено

- chore(collection-manager): миграция - 20221104151410-update-collections-hidden [`#1039`](https://github.com/nocobase/nocobase/pull/1039)
- fix: сбой синхронизации БД [`#1037`](https://github.com/nocobase/nocobase/pull/1037)
- feat: оптимизация позиционирования всплывающего окна добавления поля [`#1034`](https://github.com/nocobase/nocobase/pull/1034)
- fix: повторная привязка методов доступа ассоциаций [`#1027`](https://github.com/nocobase/nocobase/pull/1027)
- chore(debugger): очистка скриптов [`#1029`](https://github.com/nocobase/nocobase/pull/1029)
- fix(calendar): события не поддерживают moment [`#1017`](https://github.com/nocobase/nocobase/pull/1017)
- Fix: отладчик [`#1014`](https://github.com/nocobase/nocobase/pull/1014)

### Коммиты

- chore(versions): 😊 публикация v0.8.0-alpha.11 [`6d9006f`](https://github.com/nocobase/nocobase/commit/6d9006f361f569546777f05f03414acc66d06506)
- feat: больше логов в консоль [`f15c67a`](https://github.com/nocobase/nocobase/commit/f15c67afd5745ccf37b5303f2bf8d61513d62183)
- feat(client): добавление опции фильтра [`af3fbeb`](https://github.com/nocobase/nocobase/commit/af3fbeb99b9d2b80433bb25ec7c1158ae8addda6)

## [v0.8.0-alpha.9](https://github.com/nocobase/nocobase/compare/v0.8.0-alpha.8...v0.8.0-alpha.9) - 2022-11-02

### Объединено

- feat: улучшение менеджера коллекций [`#1013`](https://github.com/nocobase/nocobase/pull/1013)
- feat(calendar): поддержка добавления/удаления повторяющихся событий [`#988`](https://github.com/nocobase/nocobase/pull/988)
- Fix: поле последовательности [`#1009`](https://github.com/nocobase/nocobase/pull/1009)
- feat: обновление документации [`#1006`](https://github.com/nocobase/nocobase/pull/1006)
- fix(sample): исправление клиента shop-i18n [`#1005`](https://github.com/nocobase/nocobase/pull/1005)
- chore(versions): 😊 публикация v0.8.0-alpha.7 [`#1002`](https://github.com/nocobase/nocobase/pull/1002)
- fix(plugin-workflow): исправление конфигурации триггера [`#997`](https://github.com/nocobase/nocobase/pull/997)

### Коммиты

- chore(versions): 😊 публикация v0.8.0-alpha.9 [`642e044`](https://github.com/nocobase/nocobase/commit/642e04490d41acd9c4abba00112fa7f634d83d89)
- chore(versions): 😊 публикация v0.8.0-alpha.8 [`d5680f8`](https://github.com/nocobase/nocobase/commit/d5680f80d7e468ee5972f008e162eca39c86aa87)
- fix: удаление клиентских файлов плагина sample [`7cded43`](https://github.com/nocobase/nocobase/commit/7cded4395a95922918a2b8abe041160b715a601b)

## [v0.8.0-alpha.8](https://github.com/nocobase/nocobase/compare/v0.8.0-alpha.7...v0.8.0-alpha.8) - 2022-11-01

### Коммиты

- chore(versions): 😊 публикация v0.8.0-alpha.8 [`6d3aa09`](https://github.com/nocobase/nocobase/commit/6d3aa092c0e788824bd0f7fd92607002e8000d66)
- fix: удаление клиентских файлов плагина sample [`8da81f0`](https://github.com/nocobase/nocobase/commit/8da81f00e5f65d3cd17819f1959d0ef4575461fd)

## [v0.8.0-alpha.7](https://github.com/nocobase/nocobase/compare/v0.8.0-alpha.6...v0.8.0-alpha.7) - 2022-11-01

### Коммиты

- chore(versions): 😊 публикация v0.8.0-alpha.7 [`9fbb789`](https://github.com/nocobase/nocobase/commit/9fbb78932ac739fa4c97869fa28d9a676f905519)
- fix(pm): ошибка обновления при использовании базы данных SQLite [`bc7848d`](https://github.com/nocobase/nocobase/commit/bc7848da68516f18a5332c3ab1154675314f1ab1)

## [v0.8.0-alpha.6](https://github.com/nocobase/nocobase/compare/v0.8.0-alpha.5...v0.8.0-alpha.6) - 2022-11-01

### Коммиты

- chore(versions): 😊 публикация v0.8.0-alpha.6 [`88b8a0f`](https://github.com/nocobase/nocobase/commit/88b8a0f379a261b2b65ee5ba3a958a1d450e0e37)
- fix: сбой обновления при использовании Docker [`af32f08`](https://github.com/nocobase/nocobase/commit/af32f08d5f624468c371bff61d2e7f62cfe20db8)
- Update README.zh-CN.md [`fc7b17b`](https://github.com/nocobase/nocobase/commit/fc7b17b0858b328a0f2844260ebd3adfaa3f08e3)

## [v0.8.0-alpha.5](https://github.com/nocobase/nocobase/compare/v0.8.0-alpha.3...v0.8.0-alpha.5) - 2022-11-01

### Коммиты

- chore(versions): 😊 публикация v0.8.0-alpha.5 [`3453f46`](https://github.com/nocobase/nocobase/commit/3453f46997df9648f6aace49c80922a19611bf99)

## [v0.8.0-alpha.3](https://github.com/nocobase/nocobase/compare/v0.8.0-alpha.2...v0.8.0-alpha.3) - 2022-11-01

### Коммиты

- chore(versions): 😊 публикация v0.8.0-alpha.3 [`3395eb6`](https://github.com/nocobase/nocobase/commit/3395eb66898d506fd5f465f11c60513a1b46bcab)

## [v0.8.0-alpha.2](https://github.com/nocobase/nocobase/compare/v0.8.0-alpha.1...v0.8.0-alpha.2) - 2022-11-01

### Коммиты

- chore(versions): 😊 публикация v0.8.0-alpha.2 [`7f4c2de`](https://github.com/nocobase/nocobase/commit/7f4c2de98dd9bad88398351080c56753b0cac03c)

## [v0.8.0-alpha.1](https://github.com/nocobase/nocobase/compare/v0.7.7-alpha.1...v0.8.0-alpha.1) - 2022-11-01

### Объединено

- Различные улучшения [`#979`](https://github.com/nocobase/nocobase/pull/979)
- fix(client/form-fields): исправление x-read-pretty для полей [`#994`](https://github.com/nocobase/nocobase/pull/994)
- feat: проверка ссылок [`#989`](https://github.com/nocobase/nocobase/pull/989)
- fix(client/menu-permissions-page): исправление отсутствия данных на странице разрешений меню [`#993`](https://github.com/nocobase/nocobase/pull/993)
- feat: обновление документации [`#996`](https://github.com/nocobase/nocobase/pull/996)
- fix(client): добавление локализации для поля последовательности [`#995`](https://github.com/nocobase/nocobase/pull/995)
- docs: обновление API документации [`#973`](https://github.com/nocobase/nocobase/pull/973)
- feat: обновление документации [`#990`](https://github.com/nocobase/nocobase/pull/990)
- fix(client/upload): исправление состояния загрузки нескольких файлов [`#974`](https://github.com/nocobase/nocobase/pull/974)
- fix(client/table-selector-provider): применение конфигурации диапазона данных [`#960`](https://github.com/nocobase/nocobase/pull/960)
- fix(client/formula): установка фокуса курсора на поле ввода [`#959`](https://github.com/nocobase/nocobase/pull/959)
- feat: визуализация рабочего процесса плагина [`#987`](https://github.com/nocobase/nocobase/pull/987)
- feat: поддержка отображения лунного дня в неделе и дне [`#977`](https://github.com/nocobase/nocobase/pull/977)
- fix: добавление примеров плагинов [`#986`](https://github.com/nocobase/nocobase/pull/986)
- feat: улучшение кода [`#978`](https://github.com/nocobase/nocobase/pull/978)
- chore: улучшение CI [`#976`](https://github.com/nocobase/nocobase/pull/976)
- feat: поддержка отображения лунного дня [`#972`](https://github.com/nocobase/nocobase/pull/972)
- chore: исправление некорректных зависимостей [`#970`](https://github.com/nocobase/nocobase/pull/970)
- fix: пустой оператор логического фильтра [`#961`](https://github.com/nocobase/nocobase/pull/961)
- fix(plugin-workflow): исправление действия обновления рабочего процесса [`#964`](https://github.com/nocobase/nocobase/pull/964)
- fix(database/formula-field): сохранение результата формулы, даже если результат равен 0 [`#962`](https://github.com/nocobase/nocobase/pull/962)
- feat(file-manager): поддержка Tencent COS [`#958`](https://github.com/nocobase/nocobase/pull/958)
- feat: отправка в реестр Docker Alibaba [`#957`](https://github.com/nocobase/nocobase/pull/957)
- fix(plugin-workflow): исправление времени триггера расписания [`#956`](https://github.com/nocobase/nocobase/pull/956)
- Turkish readme [`#955`](https://github.com/nocobase/nocobase/pull/955)
- chore(versions): 😊 публикация v0.7.6-alpha.2 [`#954`](https://github.com/nocobase/nocobase/pull/954)
- Turkish language [`#939`](https://github.com/nocobase/nocobase/pull/939)
- refactor(plugin-file-manager): перемещение клиентского кода в папку плагина и активация конфигурации пути [`#913`](https://github.com/nocobase/nocobase/pull/913)
- refactor: менеджер плагинов [`#965`](https://github.com/nocobase/nocobase/pull/965)
- feat: добавление действия фильтрации в таблицу коллекций [`#953`](https://github.com/nocobase/nocobase/pull/953)
- feat: кэширование UI схемы [`#877`](https://github.com/nocobase/nocobase/pull/877)
- feat: изменение связей [`#943`](https://github.com/nocobase/nocobase/pull/943)
- feat: оптимизация Docker [`#948`](https://github.com/nocobase/nocobase/pull/948)
- fix(plugin-workflow): тестирование changedWithAssociations() [`#950`](https://github.com/nocobase/nocobase/pull/950)
- fix(plugin-workflow): пропуск времязависимых тестов [`#951`](https://github.com/nocobase/nocobase/pull/951)
- fix(plugin-workflow): исправление бага триггера расписания [`#949`](https://github.com/nocobase/nocobase/pull/949)
- fix(plugin-workflow): исправление компонента поля коллекции [`#942`](https://github.com/nocobase/nocobase/pull/942)
- fix(plugin-workflow): избегание ревизий с "призрачными" узлами [`#941`](https://github.com/nocobase/nocobase/pull/941)
- fix(plugin-workflow): добавление контекста запроса в процессор [`#936`](https://github.com/nocobase/nocobase/pull/936)
- feat: плагин рабочего процесса для поля коллекции [`#934`](https://github.com/nocobase/nocobase/pull/934)
- fix(plugin-workflow): исправление бесконечного запуска триггера расписания при отсутствии повтора [`#926`](https://github.com/nocobase/nocobase/pull/926)
- fix(plugin-workflow): временное отключение валидации поля коллекции в узле [`#928`](https://github.com/nocobase/nocobase/pull/928)
- Doc/db repository [`#896`](https://github.com/nocobase/nocobase/pull/896)
- docs: исправление документации по ресурсам и действиям [`#880`](https://github.com/nocobase/nocobase/pull/880)
- docs: исправление примера i18n разработки [`#910`](https://github.com/nocobase/nocobase/pull/910)
- feat: создание массива значений [`#912`](https://github.com/nocobase/nocobase/pull/912)
- fix: отвязка при выбросе ошибки [`#914`](https://github.com/nocobase/nocobase/pull/914)
- fix: слияние appends теперь использует первичный ключ [`#911`](https://github.com/nocobase/nocobase/pull/911)
- Doc: события базы данных API [`#887`](https://github.com/nocobase/nocobase/pull/887)
- feat: ограничение идентификаторов базы данных [`#908`](https://github.com/nocobase/nocobase/pull/908)
- fix: синхронизация значения по умолчанию для поля коллекции [`#907`](https://github.com/nocobase/nocobase/pull/907)
- fix: слияние appends включает [`#905`](https://github.com/nocobase/nocobase/pull/905)
- fix(samples): исправление тестового случая [`#903`](https://github.com/nocobase/nocobase/pull/903)
- fix: проблема запроса appends в репозитории одиночной связи [`#901`](https://github.com/nocobase/nocobase/pull/901)
- feat(plugin-workflow): добавление конкатенации вычислений [`#894`](https://github.com/nocobase/nocobase/pull/894)
- fix(client/record-picker): поддержка форматирования DataPicker в record-picker [`#888`](https://github.com/nocobase/nocobase/pull/888)
- fix(client/block-select-collection): исправление ошибки отображения меню выбора коллекции [`#889`](https://github.com/nocobase/nocobase/pull/889)
- fix: невозможность отправки формы во время загрузки файла [`#892`](https://github.com/nocobase/nocobase/pull/892)
- fix: запуск тестов через Jest [`#891`](https://github.com/nocobase/nocobase/pull/891)
### Объединено (продолжение)

- feat(collection-manager): обратные поля теперь можно настраивать [`#883`](https://github.com/nocobase/nocobase/pull/883)
- fix(formula): поддержка целых чисел и исправление ошибки NaN [`#879`](https://github.com/nocobase/nocobase/pull/879)
- fix: отсутствует параметр сортировки [`#849`](https://github.com/nocobase/nocobase/pull/849)
- fix: медленный запрос соединения, вызванный полем appends в методе find репозитория [`#845`](https://github.com/nocobase/nocobase/pull/845)
- feat(core/cache): поддержка кэширования [`#876`](https://github.com/nocobase/nocobase/pull/876)
- feat: обновление опции должно иметь фильтр или filterByTk [`#847`](https://github.com/nocobase/nocobase/pull/847)
- added Russian translation [`#840`](https://github.com/nocobase/nocobase/pull/840)
- feat(database): добавление типа поля последовательности [`#779`](https://github.com/nocobase/nocobase/pull/779)
- fix: невозможность доступа к страницам без разрешений через URL [`#826`](https://github.com/nocobase/nocobase/pull/826)
- fix: прослушивание promisify [`#899`](https://github.com/nocobase/nocobase/pull/899)
- refactor(core): упрощение части кода [`#895`](https://github.com/nocobase/nocobase/pull/895)
- feat: пример страницы регистрации [`#893`](https://github.com/nocobase/nocobase/pull/893)
- docs: репозиторий отношений и ACL [`#848`](https://github.com/nocobase/nocobase/pull/848)
- Update actions.md [`#873`](https://github.com/nocobase/nocobase/pull/873)
- docs: добавление документации по тестированию [`#871`](https://github.com/nocobase/nocobase/pull/871)
- Doc: миграция разработки [`#870`](https://github.com/nocobase/nocobase/pull/870)
- Doc: команда [`#869`](https://github.com/nocobase/nocobase/pull/869)
- docs: добавление документации по хукам [`#868`](https://github.com/nocobase/nocobase/pull/868)
- feat: обновление документации разработки [`#866`](https://github.com/nocobase/nocobase/pull/866)
- feat: плагин ограничения частоты запросов [`#862`](https://github.com/nocobase/nocobase/pull/862)
- feat: пример пользовательского блока [`#867`](https://github.com/nocobase/nocobase/pull/867)
- docs: перемещение HTTP в раздел разработки [`#861`](https://github.com/nocobase/nocobase/pull/861)
- refactor: middleware [`#857`](https://github.com/nocobase/nocobase/pull/857)
- Doc: i18n разработка [`#858`](https://github.com/nocobase/nocobase/pull/858)
- docs: добавление документации и примера действий с ресурсами [`#853`](https://github.com/nocobase/nocobase/pull/853)
- feat: добавление примера и документации для пользовательской страницы [`#855`](https://github.com/nocobase/nocobase/pull/855)
- feat: документация CLI NocoBase [`#854`](https://github.com/nocobase/nocobase/pull/854)
- fix: автоматическая установка плагина при включении [`#852`](https://github.com/nocobase/nocobase/pull/852)
- Doc: поля коллекции разработки [`#846`](https://github.com/nocobase/nocobase/pull/846)
- docs: API серверного приложения [`#842`](https://github.com/nocobase/nocobase/pull/842)
- docs: добавление API действий [`#844`](https://github.com/nocobase/nocobase/pull/844)
- refactor(doc): изменение структуры документации [`#804`](https://github.com/nocobase/nocobase/pull/804)
- refactor: менеджер плагинов [`#775`](https://github.com/nocobase/nocobase/pull/775)

### Коммиты

- feat: заметки о выпуске [`b185412`](https://github.com/nocobase/nocobase/commit/b18541255c4c07d138793a018c785451542aab74)
- Update v08-changelog.md [`d242169`](https://github.com/nocobase/nocobase/commit/d24216962b46c286411d15051e85861f764f5a03)
- fix(client): инициализаторы вкладок для блока формы создания [`929a4f8`](https://github.com/nocobase/nocobase/commit/929a4f848a327d7f8c55bcc786f584f4444ad36e)

## [v0.7.7-alpha.1](https://github.com/nocobase/nocobase/compare/v0.7.6-alpha.2...v0.7.7-alpha.1) - 2022-10-26

### Объединено

- fix(database/formula-field): результат формулы, равный 0, также будет сохранен [`#962`](https://github.com/nocobase/nocobase/pull/962)
- feat(file-manager): поддержка Tencent COS [`#958`](https://github.com/nocobase/nocobase/pull/958)
- feat: отправка в реестр Docker Alibaba [`#957`](https://github.com/nocobase/nocobase/pull/957)
- fix(plugin-workflow): исправление времени триггера расписания [`#956`](https://github.com/nocobase/nocobase/pull/956)
- Turkish readme [`#955`](https://github.com/nocobase/nocobase/pull/955)
- chore(versions): 😊 публикация v0.7.6-alpha.2 [`#954`](https://github.com/nocobase/nocobase/pull/954)

### Коммиты

- chore(versions): 😊 публикация v0.7.7-alpha.1 [`a7a807c`](https://github.com/nocobase/nocobase/commit/a7a807c433df69e4edf93dfb1bd31ee5a9f4beab)
- fix: ошибка lerna ERR! EUNCOMMIT M yarn.lock [`39eb3c9`](https://github.com/nocobase/nocobase/commit/39eb3c90bea25e6308723a87f91c80f60939d3cb)
- feat: сервис API [`59f102d`](https://github.com/nocobase/nocobase/commit/59f102de8acd7dd16a8ba0955aeef9df8d77d655)

## [v0.7.6-alpha.2](https://github.com/nocobase/nocobase/compare/v0.7.5-alpha.1.1666403334...v0.7.6-alpha.2) - 2022-10-24

### Объединено

- Turkish language [`#939`](https://github.com/nocobase/nocobase/pull/939)
- refactor(plugin-file-manager): перемещение клиентского кода в папку плагина и активация конфигурации пути [`#913`](https://github.com/nocobase/nocobase/pull/913)
- feat: добавление действия фильтрации в таблицу коллекций [`#953`](https://github.com/nocobase/nocobase/pull/953)
- feat: кэширование UI схемы [`#877`](https://github.com/nocobase/nocobase/pull/877)
- feat: оптимизация Docker [`#948`](https://github.com/nocobase/nocobase/pull/948)
- fix(plugin-workflow): тестирование changedWithAssociations() [`#950`](https://github.com/nocobase/nocobase/pull/950)
- fix(plugin-workflow): пропуск времязависимых тестов [`#951`](https://github.com/nocobase/nocobase/pull/951)
- fix(plugin-workflow): исправление бага триггера расписания [`#949`](https://github.com/nocobase/nocobase/pull/949)

### Коммиты

- chore(versions): 😊 публикация v0.7.6-alpha.1 [`a0382a9`](https://github.com/nocobase/nocobase/commit/a0382a90c1e764dc48d25153f03856d991bc27d2)
- chore(versions): 😊 публикация v0.7.6-alpha.2 [`b304681`](https://github.com/nocobase/nocobase/commit/b3046819d88b3341b9e2ead41e9c15bde2c41da8)
- Revert "fix: registry.npmjs.org" [`e24d6bd`](https://github.com/nocobase/nocobase/commit/e24d6bdebce7b076974dd4759688ab434369e41c)

## [v0.7.5-alpha.1.1666403334](https://github.com/nocobase/nocobase/compare/v0.7.5-alpha.1...v0.7.5-alpha.1.1666403334) - 2022-10-22

### Объединено

- feat: изменение связей [`#943`](https://github.com/nocobase/nocobase/pull/943)
- fix(plugin-workflow): исправление компонента поля коллекции [`#942`](https://github.com/nocobase/nocobase/pull/942)
- fix(plugin-workflow): избежание ревизий с "призрачными" узлами [`#941`](https://github.com/nocobase/nocobase/pull/941)
- fix(plugin-workflow): добавление контекста запроса в процессор [`#936`](https://github.com/nocobase/nocobase/pull/936)
- Feat/plugin workflow collection field [`#934`](https://github.com/nocobase/nocobase/pull/934)
- fix(plugin-workflow): исправление бесконечного запуска триггера расписания при отсутствии повтора [`#926`](https://github.com/nocobase/nocobase/pull/926)
- fix(plugin-workflow): временное отключение валидации поля коллекции в узле [`#928`](https://github.com/nocobase/nocobase/pull/928)

### Коммиты

- chore(versions): 😊 публикация v0.7.5-alpha.1.1666403334 [`692f7e7`](https://github.com/nocobase/nocobase/commit/692f7e7ae5ddca3a3f3793bf57604603924c6af9)
- chore: dockerfile [`65724de`](https://github.com/nocobase/nocobase/commit/65724de42cfe65cbcfcbc56496c9fda1b0509ff7)
- chore: dockerfile [`bd5a0ce`](https://github.com/nocobase/nocobase/commit/bd5a0cefed7ff837237ff730ccf6e50a0419b49f)

## [v0.7.5-alpha.1](https://github.com/nocobase/nocobase/compare/v0.7.4-alpha.7...v0.7.5-alpha.1) - 2022-10-16

### Объединено

- chore(versions): 😊 публикация v0.7.5-alpha.1 [`#920`](https://github.com/nocobase/nocobase/pull/920)
- Feat: плагин рабочего процесса для поля коллекции [`#919`](https://github.com/nocobase/nocobase/pull/919)
- feat: создание массива значений [`#912`](https://github.com/nocobase/nocobase/pull/912)
- fix: отвязка при выбросе ошибки [`#914`](https://github.com/nocobase/nocobase/pull/914)
- fix: слияние appends теперь использует первичный ключ [`#911`](https://github.com/nocobase/nocobase/pull/911)
- feat: ограничение идентификаторов базы данных [`#908`](https://github.com/nocobase/nocobase/pull/908)
- fix: синхронизация значения по умолчанию для поля коллекции [`#907`](https://github.com/nocobase/nocobase/pull/907)
- fix: слияние appends включает [`#905`](https://github.com/nocobase/nocobase/pull/905)
- fix: проблема запроса appends в репозитории одиночной связи [`#901`](https://github.com/nocobase/nocobase/pull/901)
- feat(plugin-workflow): добавление конкатенации вычислений [`#894`](https://github.com/nocobase/nocobase/pull/894)
- fix(client/record-picker): поддержка форматирования DataPicker в record-picker [`#888`](https://github.com/nocobase/nocobase/pull/888)
- fix(client/block-select-collection): исправление ошибки отображения меню выбора коллекции [`#889`](https://github.com/nocobase/nocobase/pull/889)
- fix: невозможность отправки формы во время загрузки файла [`#892`](https://github.com/nocobase/nocobase/pull/892)
- fix: запуск тестов через Jest [`#891`](https://github.com/nocobase/nocobase/pull/891)
- feat(collection-manager): обратные поля теперь можно настраивать [`#883`](https://github.com/nocobase/nocobase/pull/883)
- fix(formula): поддержка целых чисел и исправление ошибки NaN [`#879`](https://github.com/nocobase/nocobase/pull/879)
- fix: отсутствует параметр сортировки [`#849`](https://github.com/nocobase/nocobase/pull/849)
- fix: медленный запрос соединения, вызванный полем appends в методе find репозитория [`#845`](https://github.com/nocobase/nocobase/pull/845)
- feat(core/cache): поддержка кэширования [`#876`](https://github.com/nocobase/nocobase/pull/876)
- feat: обновление опции должно иметь фильтр или filterByTk [`#847`](https://github.com/nocobase/nocobase/pull/847)
- added Russian translation [`#840`](https://github.com/nocobase/nocobase/pull/840)
- feat(database): добавление типа поля последовательности [`#779`](https://github.com/nocobase/nocobase/pull/779)
- fix: невозможность доступа к страницам без разрешений через URL [`#826`](https://github.com/nocobase/nocobase/pull/826)
- refactor(resourcer): объединение класса middleware [`#825`](https://github.com/nocobase/nocobase/pull/825)
- refactor(database): исправление некоторых полей и типов [`#820`](https://github.com/nocobase/nocobase/pull/820)
- feat(locale): добавлен японский перевод [`#813`](https://github.com/nocobase/nocobase/pull/813)
- fix(plugin-workflow): исправление типа значения для DatePicker на moment (#815) [`#819`](https://github.com/nocobase/nocobase/pull/819)
- refactor(plugin-workflow): экспорт реестра клиентских калькуляторов [`#816`](https://github.com/nocobase/nocobase/pull/816)
- fix: изменение типа хранения числа на double [`#810`](https://github.com/nocobase/nocobase/pull/810)
- refactor(Server) [`#795`](https://github.com/nocobase/nocobase/pull/795)
- fix(plugin-verification): изменение ошибки лимита скорости провайдера на 429 [`#788`](https://github.com/nocobase/nocobase/pull/788)
- fix(plugin-cm): исправление исчезновения поля после неудачного обновления [`#773`](https://github.com/nocobase/nocobase/pull/773)
- fix: исправление uiSchema undefined [`#770`](https://github.com/nocobase/nocobase/pull/770)
- fix(plugin-cm): исправление значения по умолчанию для уникальной опции обновления [`#768`](https://github.com/nocobase/nocobase/pull/768)
- fix(plugin-users): исправление обновления профиля 500 (#766) [`#767`](https://github.com/nocobase/nocobase/pull/767)
- fix: столбец MySQL в предложении WHERE неоднозначен [`#756`](https://github.com/nocobase/nocobase/pull/756)
- feat(plugin-cm): добавление уникальной опции для базовых полей [`#745`](https://github.com/nocobase/nocobase/pull/745)
- feat(plugin-verification): добавление плагина верификации и телефона для пользователей [`#722`](https://github.com/nocobase/nocobase/pull/722)
- feat: изменение размера столбцов сетки перетаскиванием [`#748`](https://github.com/nocobase/nocobase/pull/748)
- refactor(client): разделение элементов schema-initializer на несколько файлов [`#744`](https://github.com/nocobase/nocobase/pull/744)
- refactor(plugin-workflow): изменение режима файлов на 644 [`#755`](https://github.com/nocobase/nocobase/pull/755)
- fix: проверка версии базы данных [`#749`](https://github.com/nocobase/nocobase/pull/749)
- feat: добавление примеров [`#718`](https://github.com/nocobase/nocobase/pull/718)

### Исправлено

- fix(plugin-workflow): исправление типа значения для DatePicker на moment (#815) (#819) [`#815`](https://github.com/nocobase/nocobase/issues/815)
- fix(plugin-users): исправление обновления профиля 500 (#766) (#767) [`#766`](https://github.com/nocobase/nocobase/issues/766)
- fix: проверка версии базы данных (#749) [`#742`](https://github.com/nocobase/nocobase/issues/742)

### Коммиты

- fix(client): инициализаторы вкладок для блока формы создания [`7efc4bc`](https://github.com/nocobase/nocobase/commit/7efc4bca0e3c5f2e1c5cd9e1365e77a005f3e108)
- fix: транзакция не может быть отменена, так как она завершена с состоянием: rollback [`6dacec4`](https://github.com/nocobase/nocobase/commit/6dacec4158103fd165ec2865ea87ed9d3d4ceaa4)
- fix(database): исправление ошибки слишком длинного имени индекса [`7bfe6b8`](https://github.com/nocobase/nocobase/commit/7bfe6b8c46bef0183c4703683175561c7fc91aee)

## [v0.7.4-alpha.7](https://github.com/nocobase/nocobase/compare/v0.7.4-alpha.4...v0.7.4-alpha.7) - 2022-08-15

### Объединено

- chore(versions): 😊 публикация v0.7.4-alpha.7 [`#740`](https://github.com/nocobase/nocobase/pull/740)

### Коммиты

- docs: обновление заметок о выпуске [`a260d29`](https://github.com/nocobase/nocobase/commit/a260d29222abe49d1453df828bb06a368e83dcf3)
- fix(collection-manager): обновление коллекции без полей [`03538ee`](https://github.com/nocobase/nocobase/commit/03538ee82f7b7cd73367d9904e4ac3c87d7a4345)

## [v0.7.4-alpha.4](https://github.com/nocobase/nocobase/compare/v0.7.4-alpha.1...v0.7.4-alpha.4) - 2022-08-12

### Объединено

- chore(versions): 😊 публикация v0.7.4-alpha.4 [`#727`](https://github.com/nocobase/nocobase/pull/727)
- fix: синхронизация сортировки таблицы для экспорта [`#723`](https://github.com/nocobase/nocobase/pull/723)
- feat: полная версия Dockerfile NocoBase [`#719`](https://github.com/nocobase/nocobase/pull/719)
- fix(plugin-workflow): исправление расширения коллекции [`#708`](https://github.com/nocobase/nocobase/pull/708)
- fix: DB_TABLE_PREFIX не применяется [`#710`](https://github.com/nocobase/nocobase/pull/710)
- feat: значение по умолчанию [`#679`](https://github.com/nocobase/nocobase/pull/679)
- fix: ошибка отправки при удалении обязательного поля (#688) [`#694`](https://github.com/nocobase/nocobase/pull/694)

### Коммиты

- feat: добавление примеров [`b848b9c`](https://github.com/nocobase/nocobase/commit/b848b9cd6774df6ed86acd30edb81ed6381c3555)
- fix: провайдер записей необходим для read pretty [`38c3e3e`](https://github.com/nocobase/nocobase/commit/38c3e3e4cc2698069c741d25ddda8e3e8e4d1db0)
- Update README.zh-CN.md [`ba0e618`](https://github.com/nocobase/nocobase/commit/ba0e61873e7f69dee6a76929eb774828ac980760)

## [v0.7.4-alpha.1](https://github.com/nocobase/nocobase/compare/v0.7.3-alpha.1...v0.7.4-alpha.1) - 2022-07-28

### Объединено

- chore(versions): 😊 публикация v0.7.4-alpha.1 [`#696`](https://github.com/nocobase/nocobase/pull/696)
- fix: добавление ролей текущему пользователю [`#695`](https://github.com/nocobase/nocobase/pull/695)
- fix: исправление формата даты [`#686`](https://github.com/nocobase/nocobase/pull/686)
- test(plugin-workflow): пропуск тестов prompt [`#692`](https://github.com/nocobase/nocobase/pull/692)
- fix: исправление точности процентов [`#685`](https://github.com/nocobase/nocobase/pull/685)
- fix(plugin-workflow): корректировка времени ожидания для тестовых случаев [`#691`](https://github.com/nocobase/nocobase/pull/691)
- feat(plugin-workflow): добавление конфигурации исполнителей для инструкции prompt [`#690`](https://github.com/nocobase/nocobase/pull/690)
- fix: отображение кнопки экспорта ролей (#616) [`#666`](https://github.com/nocobase/nocobase/pull/666)
- feat: валидация UID [`#681`](https://github.com/nocobase/nocobase/pull/681)
- refactor: замена react-drag-listview на @dnd-kit/sortable [`#660`](https://github.com/nocobase/nocobase/pull/660)
- refactor(plugin-users): улучшение расширяемости middleware [`#677`](https://github.com/nocobase/nocobase/pull/677)
- feat: удаление o2m без обновления [`#646`](https://github.com/nocobase/nocobase/pull/646)
- feat: добавление описания в канбан [`#659`](https://github.com/nocobase/nocobase/pull/659)
- fix: потеря поля enum [`#667`](https://github.com/nocobase/nocobase/pull/667)
- feat: добавление горячей клавиши редактора Ctrl+Shift+U [`#675`](https://github.com/nocobase/nocobase/pull/675)
- fix: исправление ошибки изменения поля календаря (#626) [`#671`](https://github.com/nocobase/nocobase/pull/671)
- chore: исправление неработающего eslint [`#670`](https://github.com/nocobase/nocobase/pull/670)
- feat: точность чисел [`#661`](https://github.com/nocobase/nocobase/pull/661)
- feat: конфигурация nginx [`#664`](https://github.com/nocobase/nocobase/pull/664)
- feat: проблема переключения формы дизайнера элементов формы [`#656`](https://github.com/nocobase/nocobase/pull/656)

### Коммиты

- fix(client): fieldNames компонента RecordPicker [`9038d11`](https://github.com/nocobase/nocobase/commit/9038d111ea71a89798cb1499f3dadc3f9c3dbfd7)
- fix(client): обязательное поле для подтаблицы [`609b0e2`](https://github.com/nocobase/nocobase/commit/609b0e2ff2d5aece96185cbcd30ec1810194be0d)
- feat(client): иконка вкладки [`d9b2bf8`](https://github.com/nocobase/nocobase/commit/d9b2bf8af1c42e2f4e81533f6db92b19523410bd)

## [v0.7.3-alpha.1](https://github.com/nocobase/nocobase/compare/v0.7.2-alpha.2...v0.7.3-alpha.1) - 2022-08-10

### Объединено

- chore(versions): 😊 публикация v0.7.3-alpha.1 [`#657`](https://github.com/nocobase/nocobase/pull/657)
- feat: действие печати [`#652`](https://github.com/nocobase/nocobase/pull/652)
- feat: восстановление action-hooks [`#655`](https://github.com/nocobase/nocobase/pull/655)
- feat: проблема пагинации коллекций и полей [`#653`](https://github.com/nocobase/nocobase/pull/653)
- fix(core): изменение методов прокси агента на нативные [`#654`](https://github.com/nocobase/nocobase/pull/654)
- feat: удаление действий деталей поля таблицы [`#638`](https://github.com/nocobase/nocobase/pull/638)
- fix: ссылка на значение по умолчанию [`#641`](https://github.com/nocobase/nocobase/pull/641)
- feat: поддержка отображения связанных полей таблицы в блоках деталей или форм [`#635`](https://github.com/nocobase/nocobase/pull/635)
- fix: record picker не может выбирать с разных страниц [`#623`](https://github.com/nocobase/nocobase/pull/623)
- fix: перетаскивание элемента влево, вправо или вниз вызывало исчезновение элемента [`#620`](https://github.com/nocobase/nocobase/pull/620)
- feat: добавление кнопки перезагрузки в действия таблицы [`#630`](https://github.com/nocobase/nocobase/pull/630)
- feat: улучшение настроек языка [`#627`](https://github.com/nocobase/nocobase/pull/627)
- feat: назначение полей для пользовательских действий поддерживает строковые переменные [`#597`](https://github.com/nocobase/nocobase/pull/597)
- fix: пропуск рекурсивного удаления в компоненте grid [`#621`](https://github.com/nocobase/nocobase/pull/621)
- feat: исправление времени и пагинации коллекции [`#618`](https://github.com/nocobase/nocobase/pull/618)
- feat: выбор полей recordblockinitializers [`#558`](https://github.com/nocobase/nocobase/pull/558)
- fix: неправильный фон :active [`#607`](https://github.com/nocobase/nocobase/pull/607)
- fix: селектор таблицы OBO [`#613`](https://github.com/nocobase/nocobase/pull/613)
- feat: валидатор формы [`#569`](https://github.com/nocobase/nocobase/pull/569)
- fix: селектор таблицы [`#612`](https://github.com/nocobase/nocobase/pull/612)
- chore(versions): 😊 публикация v0.7.2-alpha.7 [`#611`](https://github.com/nocobase/nocobase/pull/611)
- chore(versions): 😊 публикация v0.7.2-alpha.3 [`#608`](https://github.com/nocobase/nocobase/pull/608)
- chore(versions): 😊 публикация v0.7.2-alpha.2 [`#606`](https://github.com/nocobase/nocobase/pull/606)

### Коммиты

- fix(client): ошибка сборки [`600f13f`](https://github.com/nocobase/nocobase/commit/600f13f4a06ccfed27df928d7435afa83391c18a)
- fix(client): блоки удаляются при перетаскивании ниже текущего блока [`20ab8c1`](https://github.com/nocobase/nocobase/commit/20ab8c15017d9dbf941bf963ce3023115050edf8)
- feat(client): иконки и переводы панели инструментов плагинов [`c51c6c0`](https://github.com/nocobase/nocobase/commit/c51c6c097f24417f0ff82d3c5178ec3be1ee7630)

## [v0.7.2-alpha.2](https://github.com/nocobase/nocobase/compare/v0.7.2-alpha.1...v0.7.2-alpha.2) - 2022-07-07

### Объединено

- fix: права полей не могут быть сохранены [`#605`](https://github.com/nocobase/nocobase/pull/605)
- fix(plugin-workflow): исправление бага ревизии [`#603`](https://github.com/nocobase/nocobase/pull/603)
- fix(plugin-workflow): исправление выбранного значения [`#600`](https://github.com/nocobase/nocobase/pull/600)
- fix(plugin-workflow): исправление компонента CollectionFieldSelect [`#598`](https://github.com/nocobase/nocobase/pull/598)
- feat(plugin-workflow): добавление выбора ассоциации в расчетах [`#584`](https://github.com/nocobase/nocobase/pull/584)

### Исправлено

- fix: права полей не могут быть сохранены (#605) [`#599`](https://github.com/nocobase/nocobase/issues/599)

### Коммиты

- chore(versions): 😊 публикация v0.7.2-alpha.1 [`a0cc501`](https://github.com/nocobase/nocobase/commit/a0cc50154cc292248ef107c95a24bcc0c7a586fa)
- fix(g2plot): импорт всех графиков [`2bb8fd9`](https://github.com/nocobase/nocobase/commit/2bb8fd984fb5c9cdd484cffc18411f4b644b8fb3)
- Update issue templates [`7767335`](https://github.com/nocobase/nocobase/commit/7767335ba7fe83e22bcc1976a8fd57926dc12c0a)

## [v0.7.2-alpha.1](https://github.com/nocobase/nocobase/compare/v0.7.1-alpha.5...v0.7.2-alpha.1) - 2022-07-05

### Объединено

- chore(versions): 😊 публикация v0.7.2-alpha.1 [`#578`](https://github.com/nocobase/nocobase/pull/578)
- fix: удаление всех внешних ключей [`#576`](https://github.com/nocobase/nocobase/pull/576)
- fix(plugin-workflow): исправление конфигурации триггера коллекции [`#575`](https://github.com/nocobase/nocobase/pull/575)
- feat: фильтрация с переменной [`#574`](https://github.com/nocobase/nocobase/pull/574)
- feat(cli): проверка версии базы данных перед установкой [`#572`](https://github.com/nocobase/nocobase/pull/572)
- fix(database): недействительный индекс [`#564`](https://github.com/nocobase/nocobase/pull/564)
- fix: экспорт данных таблицы ассоциаций [`#561`](https://github.com/nocobase/nocobase/pull/561)
- Refactor(plugin workflow): перемещение клиентских файлов в плагин [`#556`](https://github.com/nocobase/nocobase/pull/556)
- fix(database): ограничения по умолчанию отключены [`#550`](https://github.com/nocobase/nocobase/pull/550)
- fix(plugin-workflow): исправление ширины выбора [`#552`](https://github.com/nocobase/nocobase/pull/552)
- feat: совместимость со старым канбаном [`#553`](https://github.com/nocobase/nocobase/pull/553)
- feat: отображение полей ассоциаций [`#512`](https://github.com/nocobase/nocobase/pull/512)
- Fix(plugin workflow) [`#549`](https://github.com/nocobase/nocobase/pull/549)
- fix:update mysql port [`#548`](https://github.com/nocobase/nocobase/pull/548)
- fix: экспорт блоков связей [`#546`](https://github.com/nocobase/nocobase/pull/546)
- fix(plugin-workflow): очистка опций при изменении коллекции [`#547`](https://github.com/nocobase/nocobase/pull/547)
- feat(plugin-workflow): добавление режима гонки [`#542`](https://github.com/nocobase/nocobase/pull/542)
- fix(client): изменение toArr на _.castArray в компоненте выбора [`#543`](https://github.com/nocobase/nocobase/pull/543)
- chore(versions): 😊 публикация v0.7.1-alpha.7 [`#539`](https://github.com/nocobase/nocobase/pull/539)

### Коммиты

- fix(client): закомментирован бесполезный код [`4e9384b`](https://github.com/nocobase/nocobase/commit/4e9384bce27676a3cc1ce8d8fd08f5611cffbe5a)
- fix(workflow): объединение провайдеров рабочего процесса [`008a7f7`](https://github.com/nocobase/nocobase/commit/008a7f7f3351bdedf01b4490d1658edeacc95a16)
- feat(client): поле целого числа [`9928424`](https://github.com/nocobase/nocobase/commit/9928424f5a163fe4edd7cfd60f349ca65b47c9bf)

## [v0.7.1-alpha.5](https://github.com/nocobase/nocobase/compare/v0.7.1-alpha.4...v0.7.1-alpha.5) - 2022-06-26

### Коммиты

- chore(versions): 😊 публикация v0.7.1-alpha.5 [`c9159c6`](https://github.com/nocobase/nocobase/commit/c9159c6cf4b7deb80e87122d4b7967a510b8ae7c)
- fix(cli): обновление из Docker [`c4c96e5`](https://github.com/nocobase/nocobase/commit/c4c96e5a79562d87b597d23f0e536cd19687c890)

## [v0.7.1-alpha.4](https://github.com/nocobase/nocobase/compare/v0.7.0-alpha.82...v0.7.1-alpha.4) - 2022-06-26

### Объединено

- chore(create-nocobase-app): исправление некоторых ошибок [`#538`](https://github.com/nocobase/nocobase/pull/538)
- fix: удаление полей коллекции [`#536`](https://github.com/nocobase/nocobase/pull/536)
- feat(plugin-workflow): добавление типа узла задержки [`#532`](https://github.com/nocobase/nocobase/pull/532)
- refactor: клиентское приложение [`#533`](https://github.com/nocobase/nocobase/pull/533)
- fix: отсутствующая транзакция [`#531`](https://github.com/nocobase/nocobase/pull/531)
- fix: добавление свойства обрезки текста в record picker [`#527`](https://github.com/nocobase/nocobase/pull/527)
- fix: удаление шаблона без элементов формы [`#528`](https://github.com/nocobase/nocobase/pull/528)
- fix(plugin-workflow): установка текущего при обновлении [`#526`](https://github.com/nocobase/nocobase/pull/526)
- fix: сортировка с NULLS LAST [`#519`](https://github.com/nocobase/nocobase/pull/519)
- fix: загрузка действия, обновление контекста, отправка и валидация формы [`#523`](https://github.com/nocobase/nocobase/pull/523)
- Fix field pattern [`#520`](https://github.com/nocobase/nocobase/pull/520)
- fix(plugin-workflow): исправление минимальной ширины searchable select [`#524`](https://github.com/nocobase/nocobase/pull/524)
- fix: шаблон только с полями [`#517`](https://github.com/nocobase/nocobase/pull/517)
- fix(plugin-workflow): исправление свойства current при обновлении рабочего процесса [`#521`](https://github.com/nocobase/nocobase/pull/521)
- refactor(plugin-workflow): абстракция в классы [`#515`](https://github.com/nocobase/nocobase/pull/515)
- feat: сортируемые столбцы и шаблоны элементов формы [`#518`](https://github.com/nocobase/nocobase/pull/518)
- fix(custom-request): поддержка строковых/JSON шаблонов [`#514`](https://github.com/nocobase/nocobase/pull/514)
- feat: добавление заголовка блока [`#513`](https://github.com/nocobase/nocobase/pull/513)
- fix: удаление коллекций и полей из базы данных [`#511`](https://github.com/nocobase/nocobase/pull/511)
- feat: улучшение миграций [`#510`](https://github.com/nocobase/nocobase/pull/510)
- fix(client): унификация использования даты/времени в формате UTC при передаче [`#509`](https://github.com/nocobase/nocobase/pull/509)
- fix: баг формулы [`#508`](https://github.com/nocobase/nocobase/pull/508)
- fix: поля экспорта по умолчанию [`#506`](https://github.com/nocobase/nocobase/pull/506)
- feat: блок полей ассоциации [`#493`](https://github.com/nocobase/nocobase/pull/493)
- feat: экспорт плагинов [`#479`](https://github.com/nocobase/nocobase/pull/479)
- fix(client): путь пакета (исправление #503) [`#504`](https://github.com/nocobase/nocobase/pull/504)
- fix: ошибка создания или удаления коллекции [`#501`](https://github.com/nocobase/nocobase/pull/501)
- feat: обновление коллекций и полей [`#500`](https://github.com/nocobase/nocobase/pull/500)
- fix: откат при ошибке создания поля [`#498`](https://github.com/nocobase/nocobase/pull/498)
- fix(client): глобальная установка `dropdownMatchSelectWidth` в false [`#497`](https://github.com/nocobase/nocobase/pull/497)
- fix(client): предупреждение об отсутствии ключа в пунктах меню пользователя [`#496`](https://github.com/nocobase/nocobase/pull/496)
- Feat(plugin workflow): поле cron для конфигурации триггера расписания [`#495`](https://github.com/nocobase/nocobase/pull/495)
- feat: журналы аудита [`#494`](https://github.com/nocobase/nocobase/pull/494)
- refactor(plugin-workflow): добавление столбца ревизии к выполнению [`#491`](https://github.com/nocobase/nocobase/pull/491)
- feat: uiSchema для поля связи [`#487`](https://github.com/nocobase/nocobase/pull/487)
- feat: изменение FK на компонент ввода [`#488`](https://github.com/nocobase/nocobase/pull/488)
- fix(plugin-multi-app-manager): исправление ошибки pg при создании базы данных в блокированных тестах [`#486`](https://github.com/nocobase/nocobase/pull/486)
- refactor(database): прокси-хук [`#402`](https://github.com/nocobase/nocobase/pull/402)
- feat: блоки диаграмм [`#484`](https://github.com/nocobase/nocobase/pull/484)
- Refactor(plugin workflow): поддержка чисел в конфигурации повтора для расписания [`#482`](https://github.com/nocobase/nocobase/pull/482)
- chore(debug): добавление конфигурации отладки [`#475`](https://github.com/nocobase/nocobase/pull/475)
- fix: баг has one [`#478`](https://github.com/nocobase/nocobase/pull/478)
- feat: связи [`#473`](https://github.com/nocobase/nocobase/pull/473)
- fix(plugin-workflow): исправление транзакции триггера коллекции [`#474`](https://github.com/nocobase/nocobase/pull/474)
- fix(plugin-workflow): временное решение для условий триггера коллекции [`#472`](https://github.com/nocobase/nocobase/pull/472)
- fix: компонент markdown [`#469`](https://github.com/nocobase/nocobase/pull/469)
- fix: поле формулы и поле процента [`#467`](https://github.com/nocobase/nocobase/pull/467)
- fix(plugin-workflow): исправление действия обновления рабочего процесса [`#464`](https://github.com/nocobase/nocobase/pull/464)
- fix: обновление поля формулы и поля процента [`#461`](https://github.com/nocobase/nocobase/pull/461)
- feat: добавление типа поля формулы [`#457`](https://github.com/nocobase/nocobase/pull/457)
- fix: детали связанных данных в подтаблице не отображаются [`#454`](https://github.com/nocobase/nocobase/pull/454)
- fix(plugin-workflow): исправление языков [`#451`](https://github.com/nocobase/nocobase/pull/451)
- fix: хук afterSync не запускается [`#450`](https://github.com/nocobase/nocobase/pull/450)
- docs(various): улучшение читаемости [`#447`](https://github.com/nocobase/nocobase/pull/447)
- feat: пользовательский запрос [`#439`](https://github.com/nocobase/nocobase/pull/439)
- Feat(plugin workflow): триггер расписания [`#438`](https://github.com/nocobase/nocobase/pull/438)
- feat: мигратор базы данных [`#432`](https://github.com/nocobase/nocobase/pull/432)
- fix(client): компонент select не открывается в блоке подтаблицы [`#431`](https://github.com/nocobase/nocobase/pull/431)
- docs(github): переход на формат markdown [`#430`](https://github.com/nocobase/nocobase/pull/430)
- fix(cli): опечатка [`#429`](https://github.com/nocobase/nocobase/pull/429)

### Исправлено

- fix(client): путь пакета (исправление #503) (#504) [`#503`](https://github.com/nocobase/nocobase/issues/503)

### Коммиты

- feat(client): обновление локализаций [`e57e60e`](https://github.com/nocobase/nocobase/commit/e57e60e6cb84431e694e69830d128cd71938388f)
- docs: обновление документации [`e5cb948`](https://github.com/nocobase/nocobase/commit/e5cb94803f738961fcbc1986a94d258ef9e191a9)
- fix(client): улучшение компонента datepicker, дата с временной зоной, поддержка GMT [`1c03fbb`](https://github.com/nocobase/nocobase/commit/1c03fbb853b5885547835f50fc9a0932f63c363b)

## [v0.7.0-alpha.82](https://github.com/nocobase/nocobase/compare/v0.7.0-alpha.67...v0.7.0-alpha.82) - 2022-05-27

### Объединено

- feat(client,sdk): улучшение API клиента [`#425`](https://github.com/nocobase/nocobase/pull/425)
- feat: добавление команды create-plugin [`#423`](https://github.com/nocobase/nocobase/pull/423)
- feat: добавление цвета кнопки [`#420`](https://github.com/nocobase/nocobase/pull/420)
- chore(versions): 😊 публикация v0.7.0-alpha.78 [`#419`](https://github.com/nocobase/nocobase/pull/419)

### Коммиты

- chore(versions): 😊 публикация v0.7.0-alpha.82 [`4820fd0`](https://github.com/nocobase/nocobase/commit/4820fd09375c7200d1ea0bb0aab1bd4783b80d3d)
- docs: обновление документации по установке [`90623e8`](https://github.com/nocobase/nocobase/commit/90623e8e9a175238c3fc8bb527c8884c207ff78e)
- fix: "typescript": "4.5.5" [`c071217`](https://github.com/nocobase/nocobase/commit/c071217fff819378e982e611af1fd9fa71ebc5fb)

## [v0.7.0-alpha.67](https://github.com/nocobase/nocobase/compare/v0.7.0-alpha.64...v0.7.0-alpha.67) - 2022-05-24

### Коммиты

- chore(versions): 😊 публикация v0.7.0-alpha.67 [`3262979`](https://github.com/nocobase/nocobase/commit/326297936b17c6da3f6e86891c9772c72b088312)
- chore(versions): 😊 публикация v0.7.0-alpha.66 [`9c19e4d`](https://github.com/nocobase/nocobase/commit/9c19e4d67f0b59b8ec957b1a9164acc88a50416d)

## [v0.7.0-alpha.64](https://github.com/nocobase/nocobase/compare/v0.7.0-alpha.60...v0.7.0-alpha.64) - 2022-05-24

### Объединено

- feat: обновление документации [`#413`](https://github.com/nocobase/nocobase/pull/413)

### Коммиты

- chore(versions): 😊 публикация v0.7.0-alpha.63 [`c01c695`](https://github.com/nocobase/nocobase/commit/c01c6952a58c2677d9f45fb41872363afda25197)
- chore(versions): 😊 публикация v0.7.0-alpha.64 [`35d01a5`](https://github.com/nocobase/nocobase/commit/35d01a5fb0f0522e263c7fc37bc8384f99424240)
- fix(plugin-users): добавление переводов (#416) [`72c3ba4`](https://github.com/nocobase/nocobase/commit/72c3ba4fae5cdee6b84eed65e3a35180186a987e)

## [v0.7.0-alpha.60](https://github.com/nocobase/nocobase/compare/v0.7.0-alpha.59...v0.7.0-alpha.60) - 2022-05-23

### Коммиты

- chore(versions): 😊 публикация v0.7.0-alpha.60 [`f0d0afb`](https://github.com/nocobase/nocobase/commit/f0d0afbb19dbd90ac3cf4155748fa084c67f54ee)
- fix(create-nocobase-app): путь хранилища [`a0245ca`](https://github.com/nocobase/nocobase/commit/a0245caeb816fede8bb40c33e694de6419a21f26)

## [v0.7.0-alpha.59](https://github.com/nocobase/nocobase/compare/v0.7.0-alpha.58...v0.7.0-alpha.59) - 2022-05-23

### Объединено

- refactor(plugin-workflow): изменение типа столбца executed с boolean на integer [`#411`](https://github.com/nocobase/nocobase/pull/411)

### Коммиты

- chore(versions): 😊 публикация v0.7.0-alpha.59 [`c90e5ae`](https://github.com/nocobase/nocobase/commit/c90e5aee4c8257a3ab7ff492e69cb568cccff8b5)
- docs: обновление дорожной карты и заметок о выпуске [`f198411`](https://github.com/nocobase/nocobase/commit/f198411c7386afaa4b6fc41ebb1806d40e3752b1)
- Update roadmap.md [`e5c5e16`](https://github.com/nocobase/nocobase/commit/e5c5e16b73174bf8092f730b196ef2ef088001b4)

## [v0.7.0-alpha.58](https://github.com/nocobase/nocobase/compare/v0.7.0-alpha.57...v0.7.0-alpha.58) - 2022-05-22

### Объединено

- fix: ответ 204 без содержимого [`#378`](https://github.com/nocobase/nocobase/pull/378)
- feat: уничтожение поля ассоциации после уничтожения целевой коллекции [`#376`](https://github.com/nocobase/nocobase/pull/376)
- fix(type): использование нативного Transactionable из Sequelize вместо TransactionAble [`#410`](https://github.com/nocobase/nocobase/pull/410)
- fix(plugin-workflow): удаление предыдущих слушателей при изменении коллекции в конфигурации [`#409`](https://github.com/nocobase/nocobase/pull/409)
- feat: добавление пользовательского действия [`#396`](https://github.com/nocobase/nocobase/pull/396)
- refactor(plugin-workflow): поддержка нескольких экземпляров и управление событиями (исправление #384) [`#408`](https://github.com/nocobase/nocobase/pull/408)

### Исправлено

- refactor(plugin-workflow): поддержка нескольких экземпляров и управление событиями (исправление #384) (#408) [`#384`](https://github.com/nocobase/nocobase/issues/384) [`#384`](https://github.com/nocobase/nocobase/issues/384)

### Коммиты

- chore(versions): 😊 публикация v0.7.0-alpha.58 [`19ee422`](https://github.com/nocobase/nocobase/commit/19ee42257edf17804d548ffd5ba9ddff6dc775d1)
- fix(plugin-acl): отсутствующие параметры пагинации #394 [`b44753d`](https://github.com/nocobase/nocobase/commit/b44753d528a12075e64754828982ca80dfc90263)
- fix: отсутствующие операторы фильтрации isTruly/isFalsy #390 [`e596e6d`](https://github.com/nocobase/nocobase/commit/e596e6d365a3e46859e7d7bafcc3e54d286656cf)

## [v0.7.0-alpha.57](https://github.com/nocobase/nocobase/compare/v0.7.0-alpha.34...v0.7.0-alpha.57) - 2022-05-19

### Объединено

- fix(plugin-workflow): исправление заголовка типа узла в ящиках [`#389`](https://github.com/nocobase/nocobase/pull/389)

### Коммиты

- feat: сборка, cli, devtools, sdk, документация... [`6410bc8`](https://github.com/nocobase/nocobase/commit/6410bc8a75fa4dda9fe2bccfadca336fc8e794d0)
- chore(versions): 😊 публикация v0.7.0-alpha.57 [`33f076e`](https://github.com/nocobase/nocobase/commit/33f076e430645055d79254592971c50d9f131a6d)
- Update README.md [`e24e007`](https://github.com/nocobase/nocobase/commit/e24e007395ed09463acdc3cf53b856ca9e0dd664)

## [v0.7.0-alpha.34](https://github.com/nocobase/nocobase/compare/v0.7.0-alpha.33...v0.7.0-alpha.34) - 2022-05-14

### Объединено

- Fix(plugin workflow): исправление невозможности получения свойств результата работы [`#382`](https://github.com/nocobase/nocobase/pull/382)
- feat: завершение работы сервера при возникновении ошибки [`#374`](https://github.com/nocobase/nocobase/pull/374)
- chore: параметры приложения [`#375`](https://github.com/nocobase/nocobase/pull/375)
- fix: оператор not in с null значением записи [`#377`](https://github.com/nocobase/nocobase/pull/377)

### Коммиты

- chore(versions): 😊 публикация v0.7.0-alpha.34 [`48b2b4b`](https://github.com/nocobase/nocobase/commit/48b2b4bc7bbc39533e461d34d7f026a4ad1a9b5c)
- feat: добавление API действия plugins:getPinned [`b5c24aa`](https://github.com/nocobase/nocobase/commit/b5c24aa7999934f2b6f7ca1e9e9448b220a61af2)

## [v0.7.0-alpha.33](https://github.com/nocobase/nocobase/compare/v0.7.0-alpha.30...v0.7.0-alpha.33) - 2022-05-13

### Объединено

- Feat(plugin workflow): ревизии [`#379`](https://github.com/nocobase/nocobase/pull/379)
- fix(database): исправление парсера опций списка include [`#371`](https://github.com/nocobase/nocobase/pull/371)
- fix(plugin-workflow): исправление дублирования описания в значениях полей [`#368`](https://github.com/nocobase/nocobase/pull/368)
- fix(database): исправление типа и транзакции в репозитории [`#366`](https://github.com/nocobase/nocobase/pull/366)
- Fix(plugin workflow): исправление транзакции выполнения [`#364`](https://github.com/nocobase/nocobase/pull/364)
- fix(plugin-workflow): добавление заголовка документа [`#363`](https://github.com/nocobase/nocobase/pull/363)
- fix: установка видимости с подтверждением [`#361`](https://github.com/nocobase/nocobase/pull/361)

### Коммиты

- chore(versions): 😊 публикация v0.7.0-alpha.33 [`c4b5f4f`](https://github.com/nocobase/nocobase/commit/c4b5f4f84b18c2d8bc40f82947b9338e2f620984)
- Update issue templates [`8466159`](https://github.com/nocobase/nocobase/commit/846615937add786319dde167f2b28e981941e18e)
- fix: ошибка области данных поля link-to (#1337) [`2156c70`](https://github.com/nocobase/nocobase/commit/2156c70ff3a7e65a8ad1bf14602f0dad150382ab)

## [v0.7.0-alpha.30](https://github.com/nocobase/nocobase/compare/v0.7.0-alpha.29...v0.7.0-alpha.30) - 2022-05-05

### Объединено

- fix(plugin-workflow): исправление тестов [`#360`](https://github.com/nocobase/nocobase/pull/360)
- Feat: подсказка о несохраненных изменениях [`#359`](https://github.com/nocobase/nocobase/pull/359)
- Fix acl error [`#358`](https://github.com/nocobase/nocobase/pull/358)

### Коммиты

- chore(versions): 😊 публикация v0.7.0-alpha.30 [`781fb0a`](https://github.com/nocobase/nocobase/commit/781fb0a999854341cd8c353d31ae5a11ecbbe775)
- fix(client): обновление пакетов formily [`58b151c`](https://github.com/nocobase/nocobase/commit/58b151c74512d5fa3f33c094580c4f5f15792342)
- fix(client): setFormValueChanged должен быть определен [`b33c819`](https://github.com/nocobase/nocobase/commit/b33c8198e676cc935bccf995ff3d18b249290062)

## [v0.7.0-alpha.29](https://github.com/nocobase/nocobase/compare/v0.7.0-alpha.28...v0.7.0-alpha.29) - 2022-05-04

### Объединено

- fix: ошибка ACL пустого ресурса [`#357`](https://github.com/nocobase/nocobase/pull/357)
- Feat: при изменении значений формы без сохранения будет выводиться запрос [`#351`](https://github.com/nocobase/nocobase/pull/351)
- fix: изменение цвета значка закрытия фильтра [`#356`](https://github.com/nocobase/nocobase/pull/356)
- fix(plugin-workflow): исправление i18n [`#354`](https://github.com/nocobase/nocobase/pull/354)

### Коммиты

- chore(versions): 😊 публикация v0.7.0-alpha.29 [`46e660b`](https://github.com/nocobase/nocobase/commit/46e660b10d1cf94ecb808a9a45edb5e8d40398dc)
- fix(client): стилизация цветов [`90a58cc`](https://github.com/nocobase/nocobase/commit/90a58cc3cf3eab02bc61f363d4476454383907d3)
- feat(client): перевод [`33a99d9`](https://github.com/nocobase/nocobase/commit/33a99d91b8dc19186ed743b1bbc073c09dd4629e)

## [v0.7.0-alpha.28](https://github.com/nocobase/nocobase/compare/v0.7.0-alpha.24...v0.7.0-alpha.28) - 2022-05-02

### Объединено

- Fix(plugin-workflow) [`#353`](https://github.com/nocobase/nocobase/pull/353)
- fix(plugin-file-manager): обновление пакета multer-aliyun-oss для исправления размера [`#352`](https://github.com/nocobase/nocobase/pull/352)
- feat: улучшение кода [`#350`](https://github.com/nocobase/nocobase/pull/350)
- Fix/plugin workflow [`#349`](https://github.com/nocobase/nocobase/pull/349)
- fix: db:sync не работает [`#348`](https://github.com/nocobase/nocobase/pull/348)
- fix(plugin-workflow): исправление логики привязки триггера для избежания дублирования [`#347`](https://github.com/nocobase/nocobase/pull/347)
- Fix(plugin workflow) [`#346`](https://github.com/nocobase/nocobase/pull/346)
- Fix: стиль URL меню [`#344`](https://github.com/nocobase/nocobase/pull/344)
- chore(plugin-workflow): добавление перевода [`#345`](https://github.com/nocobase/nocobase/pull/345)
- fix(plugin-workflow): разрыв циклического триггера через идентификатор транзакции [`#341`](https://github.com/nocobase/nocobase/pull/341)

### Коммиты

- chore(versions): 😊 публикация v0.7.0-alpha.28 [`a48d004`](https://github.com/nocobase/nocobase/commit/a48d00492ebc34c66c63d9644530c5b8a7c9914a)
- chore(versions): 😊 публикация v0.7.0-alpha.27 [`ebfe11f`](https://github.com/nocobase/nocobase/commit/ebfe11ff09bf50b4b2322cbbad65b4ea936fdb71)
- chore(versions): 😊 публикация v0.7.0-alpha.26 [`515d952`](https://github.com/nocobase/nocobase/commit/515d95276700ffafe7d2785a93fc510d36da462b)

## [v0.7.0-alpha.24](https://github.com/nocobase/nocobase/compare/v0.7.0-alpha.16...v0.7.0-alpha.24) - 2022-04-29

### Объединено

- fix: model.beforeCreate не вызывается [`#343`](https://github.com/nocobase/nocobase/pull/343)
- fix: миниатюрное изображение в карточке канбан [`#338`](https://github.com/nocobase/nocobase/pull/338)
- feat: аутентификация базы данных [`#342`](https://github.com/nocobase/nocobase/pull/342)
- chore: асинхронная установка подприложения [`#336`](https://github.com/nocobase/nocobase/pull/336)
- fix(plugin-workflow): изменение UX ввода значений коллекции в узлах рабочего процесса [`#340`](https://github.com/nocobase/nocobase/pull/340)
- feat: улучшения [`#335`](https://github.com/nocobase/nocobase/pull/335)
- Feat(plugin workflow): добавление измененных полей в конфигурацию триггера модели [`#332`](https://github.com/nocobase/nocobase/pull/332)

### Коммиты

- docs: обновление readme.md [`aacec30`](https://github.com/nocobase/nocobase/commit/aacec306733ee1cab3c3c7e5a7fcbbeb372a03e9)
- chore(versions): 😊 публикация v0.7.0-alpha.24 [`1fb2dd8`](https://github.com/nocobase/nocobase/commit/1fb2dd884c4f2d2167f5dde40a15012a752e53ab)
- feat: поле UUID [`2c0d3fc`](https://github.com/nocobase/nocobase/commit/2c0d3fcc5ad1bce2cbc47e82e76277918c66c565)

## [v0.7.0-alpha.16](https://github.com/nocobase/nocobase/compare/v0.7.0-alpha.15...v0.7.0-alpha.16) - 2022-04-27

### Объединено

- fix: невозможно найти модуль mkdirp [`#330`](https://github.com/nocobase/nocobase/pull/330)
- Fix(plugin workflow): проблемы UX [`#329`](https://github.com/nocobase/nocobase/pull/329)

### Коммиты

- chore(versions): 😊 публикация v0.7.0-alpha.16 [`27399f4`](https://github.com/nocobase/nocobase/commit/27399f4e5e6d1f9f2c0eee4d6be8ff89df625bd8)
- feat: улучшение кода [`c71f45c`](https://github.com/nocobase/nocobase/commit/c71f45ca6a15149703fdf12f4d0f68a226d10a7e)
- Update README.md [`4317de7`](https://github.com/nocobase/nocobase/commit/4317de7eb116dd7d538d0cf2c4782372e1b5fce2)

## [v0.7.0-alpha.15](https://github.com/nocobase/nocobase/compare/v0.7.0-alpha.6...v0.7.0-alpha.15) - 2022-04-26

### Объединено

- fix: совместимость create-nocobase-app [`#323`](https://github.com/nocobase/nocobase/pull/323)
- fix: версия клиентского пакета create-nocobase-app [`#321`](https://github.com/nocobase/nocobase/pull/321)
- fix: менеджер приложений [`#320`](https://github.com/nocobase/nocobase/pull/320)

### Коммиты

- chore(versions): 😊 публикация v0.7.0-alpha.15 [`f0d9b0e`](https://github.com/nocobase/nocobase/commit/f0d9b0ec026b589b3d10dcdbbbb656baca1a9004)
- chore(versions): 😊 публикация v0.7.0-alpha.14 [`8736278`](https://github.com/nocobase/nocobase/commit/87362789f331e043336b571137a7ace7e38a6da1)
- chore(versions): 😊 публикация v0.7.0-alpha.13 [`62eb85d`](https://github.com/nocobase/nocobase/commit/62eb85de5f341f343577232ebecce7f9fb7a5b21)

## [v0.7.0-alpha.6](https://github.com/nocobase/nocobase/compare/v0.7.0-alpha.5...v0.7.0-alpha.6) - 2022-04-25

### Коммиты

- chore(versions): 😊 публикация v0.7.0-alpha.6 [`7d0087c`](https://github.com/nocobase/nocobase/commit/7d0087cbb3b7663ba05366ca3b80db2853669ee9)

## [v0.7.0-alpha.5](https://github.com/nocobase/nocobase/compare/v0.7.0-alpha.4...v0.7.0-alpha.5) - 2022-04-25

### Коммиты

- chore(versions): 😊 публикация v0.7.0-alpha.5 [`a00b45a`](https://github.com/nocobase/nocobase/commit/a00b45a2686695c5f4824d074ac5e1aff210793a)
- fix(plugin-system-settings): невозможно прочитать свойство cliArgs undefined [`b0d3274`](https://github.com/nocobase/nocobase/commit/b0d3274b2d98147679f91c468327287675de0c08)

## [v0.7.0-alpha.4](https://github.com/nocobase/nocobase/compare/v0.7.0-alpha.3...v0.7.0-alpha.4) - 2022-04-25

### Коммиты

- chore(versions): 😊 публикация v0.7.0-alpha.4 [`327e413`](https://github.com/nocobase/nocobase/commit/327e413b6dd94dad9b756b1e08cda47cad734dc1)

## [v0.7.0-alpha.3](https://github.com/nocobase/nocobase/compare/v0.7.0-alpha.2...v0.7.0-alpha.3) - 2022-04-25

### Коммиты

- chore(versions): 😊 публикация v0.7.0-alpha.3 [`b12507f`](https://github.com/nocobase/nocobase/commit/b12507f6e4bcb5f1fd8285670a43fb3807d90ea0)
- fix: antd использует ~v4.19.5 [`733c704`](https://github.com/nocobase/nocobase/commit/733c7048ed0e00bd2c01bfaf8452731a9a89670e)

## [v0.7.0-alpha.2](https://github.com/nocobase/nocobase/compare/v0.7.0-alpha.1...v0.7.0-alpha.2) - 2022-04-25

### Коммиты

- chore(versions): 😊 публикация v0.7.0-alpha.2 [`0e0e99e`](https://github.com/nocobase/nocobase/commit/0e0e99ef79c0b25bb0b45ecaa477c049cb16afee)
- feat(license): обновление лицензии [`ed9b2b6`](https://github.com/nocobase/nocobase/commit/ed9b2b6d950cab33423225069a7b0de24b65ef45)
- feat: kanban disableCardDrag [`05a251b`](https://github.com/nocobase/nocobase/commit/05a251b1fc06012e77e402b422e3120430effef1)

## [v0.7.0-alpha.1](https://github.com/nocobase/nocobase/compare/v0.7.0-alpha.0...v0.7.0-alpha.1) - 2022-04-25

### Коммиты

- chore(versions): 😊 публикация v0.7.0-alpha.1 [`e7293ad`](https://github.com/nocobase/nocobase/commit/e7293ad7aadbdf2084042f7800a232af6e0b7a8a)

## [v0.7.0-alpha.0](https://github.com/nocobase/nocobase/compare/v0.6.2-alpha.12...v0.7.0-alpha.0) - 2022-04-25

### Объединено

- refactor: изменение стиля метки по умолчанию [`#318`](https://github.com/nocobase/nocobase/pull/318)
- Fix multiple apps [`#317`](https://github.com/nocobase/nocobase/pull/317)
- Fix multiple apps [`#316`](https://github.com/nocobase/nocobase/pull/316)
- Fix acl target action error [`#311`](https://github.com/nocobase/nocobase/pull/311)
- feat: файловые хранилища [`#314`](https://github.com/nocobase/nocobase/pull/314)
- fix(plugin-workflow): исправление UX [`#313`](https://github.com/nocobase/nocobase/pull/313)
- fix(plugin-workflow): исправление поля получения узла запроса [`#308`](https://github.com/nocobase/nocobase/pull/308)
- Fix create nocobase app [`#307`](https://github.com/nocobase/nocobase/pull/307)
- fix: create-nocobase-app [`#306`](https://github.com/nocobase/nocobase/pull/306)
- Fix create nocobase app [`#305`](https://github.com/nocobase/nocobase/pull/305)
- fix: добавление overflow:hidden в элемент блока [`#304`](https://github.com/nocobase/nocobase/pull/304)

### Коммиты

- feat(license): замена лицензии MIT на Apache-2.0 [`717efa8`](https://github.com/nocobase/nocobase/commit/717efa889d471fac3f909137e2adb96586414aad)
- feat: переводы [`5c0184a`](https://github.com/nocobase/nocobase/commit/5c0184a397885d6de5307a7087c2d93042cd49f8)
- feat: переводы [`1f04f90`](https://github.com/nocobase/nocobase/commit/1f04f90a00e071aa9ab294f21e8d02373191eecc)

## [v0.6.2-alpha.12](https://github.com/nocobase/nocobase/compare/v0.6.2-alpha.11...v0.6.2-alpha.12) - 2022-04-21

### Коммиты

- chore(versions): 😊 публикация v0.6.2-alpha.12 [`5a668cf`](https://github.com/nocobase/nocobase/commit/5a668cf9d0450944f3d2d5beed9e8d5e5b96f5d7)
- fix: публикация create-nocobase-app [`269e73e`](https://github.com/nocobase/nocobase/commit/269e73ef19d41835813609b39744c40fb1fff92e)
- chore: package.json для create-nocobase-app [`1c30ee1`](https://github.com/nocobase/nocobase/commit/1c30ee1c630d021dc919ce6fcc56cce179db20ae)

## [v0.6.2-alpha.11](https://github.com/nocobase/nocobase/compare/v0.6.2-alpha.10...v0.6.2-alpha.11) - 2022-04-20

### Коммиты

- chore(versions): 😊 публикация v0.6.2-alpha.11 [`8741015`](https://github.com/nocobase/nocobase/commit/8741015a6237cd3ea7342edcb7aa11fe794e6b18)
- fix: read-config [`f6d23ad`](https://github.com/nocobase/nocobase/commit/f6d23add8c1845dd4b567d2958c24ada8ae8cee0)

## [v0.6.2-alpha.10](https://github.com/nocobase/nocobase/compare/v0.6.2-alpha.9...v0.6.2-alpha.10) - 2022-04-20

### Коммиты

- chore(versions): 😊 публикация v0.6.2-alpha.10 [`693c668`](https://github.com/nocobase/nocobase/commit/693c668282d8032b69245ae7e5c1cafa3c41e584)
- fix: публикация [`9e717ae`](https://github.com/nocobase/nocobase/commit/9e717ae3ca2f453005602df03b08edca14c56505)

## [v0.6.2-alpha.9](https://github.com/nocobase/nocobase/compare/v0.6.2-alpha.7...v0.6.2-alpha.9) - 2022-04-20

### Объединено

- feat: блок деталей [`#302`](https://github.com/nocobase/nocobase/pull/302)
- Fix(plugin workflow): исправление представления формы данных коллекции [`#301`](https://github.com/nocobase/nocobase/pull/301)
- feat: добавление оператора фильтра $isCurrentUser [`#299`](https://github.com/nocobase/nocobase/pull/299)
- fix: ошибка первичного ключа промежуточной таблицы [`#297`](https://github.com/nocobase/nocobase/pull/297)
- feat: промежуточная коллекция для поля linkTo [`#296`](https://github.com/nocobase/nocobase/pull/296)
- fix: длинный текст будет переноситься в FormItem [`#295`](https://github.com/nocobase/nocobase/pull/295)
- fix(client): предотвращение ошибки при получении поля по случайному имени [`#294`](https://github.com/nocobase/nocobase/pull/294)
- Feat/create nocobase app [`#273`](https://github.com/nocobase/nocobase/pull/273)
- feat(plugin-workflow): добавление всех CRUD-узлов для рабочего процесса [`#293`](https://github.com/nocobase/nocobase/pull/293)
- feat(plugin-workflow): добавление компонента узла создания [`#292`](https://github.com/nocobase/nocobase/pull/292)
- fix: удаление значения редактора, чтобы избежать отображения HTML-строки [`#290`](https://github.com/nocobase/nocobase/pull/290)

### Коммиты

- fix: обновление yarn.lock [`fcfde7e`](https://github.com/nocobase/nocobase/commit/fcfde7ed0a5b7fdae3fe7424e406ca2e5d944f9b)
- chore(versions): 😊 публикация v0.6.2-alpha.9 [`1afc867`](https://github.com/nocobase/nocobase/commit/1afc86733cb090cf5f45c781ad6488c32caa740c)
- fix: обновление useCreateActionProps & useUpdateActionProps [`fca0943`](https://github.com/nocobase/nocobase/commit/fca0943e8d013a0e8bb46756b89cfc992aa1b6c1)

## [v0.6.2-alpha.7](https://github.com/nocobase/nocobase/compare/v0.6.2-alpha.6...v0.6.2-alpha.7) - 2022-04-16

### Коммиты

- feat: улучшение кода [`2202cc6`](https://github.com/nocobase/nocobase/commit/2202cc64d960918113b50bf0dc352a59cac04484)
- chore(versions): 😊 публикация v0.6.2-alpha.7 [`d165782`](https://github.com/nocobase/nocobase/commit/d165782860681af206005039f4bec00fc7fe4241)

## [v0.6.2-alpha.6](https://github.com/nocobase/nocobase/compare/v0.6.2-alpha.5...v0.6.2-alpha.6) - 2022-04-15

### Коммиты

- chore(versions): 😊 публикация v0.6.2-alpha.6 [`faa064a`](https://github.com/nocobase/nocobase/commit/faa064ae8dbdcba98e1782a8e2c0b5a338e68219)

## [v0.6.2-alpha.5](https://github.com/nocobase/nocobase/compare/v0.6.2-alpha.4...v0.6.2-alpha.5) - 2022-04-15

### Коммиты

- chore: библиотека create-nocobase-app [`fc27ebc`](https://github.com/nocobase/nocobase/commit/fc27ebc08a5c889596432a2ece6ba9e0c8957bab)
- chore: create-nocobase-app [`8d0703c`](https://github.com/nocobase/nocobase/commit/8d0703c568ad0e66a14e3a4d47d57b1d63cd64f8)
- chore(versions): 😊 публикация v0.6.2-alpha.5 [`2b21546`](https://github.com/nocobase/nocobase/commit/2b21546c4c50c7b5447d991d3852b90dca7219b9)

## [v0.6.2-alpha.4](https://github.com/nocobase/nocobase/compare/v0.6.2-alpha.3...v0.6.2-alpha.4) - 2022-04-15

### Коммиты

- chore(versions): 😊 публикация v0.6.2-alpha.4 [`e3a9e92`](https://github.com/nocobase/nocobase/commit/e3a9e924e002afeb02fb785fcecb124dd6d995a1)

## [v0.6.2-alpha.3](https://github.com/nocobase/nocobase/compare/v0.6.2-alpha.1...v0.6.2-alpha.3) - 2022-04-15

### Коммиты

- feat: рабочие пространства [`0eb6997`](https://github.com/nocobase/nocobase/commit/0eb6997c7257332751e49d4a6c623c2ccd786495)
- chore(versions): 😊 публикация v0.6.2-alpha.3 [`2feae05`](https://github.com/nocobase/nocobase/commit/2feae051e24a46c0b78b31ef2a4dafdb14344398)
- chore: 0.6.2-alpha.2 [`dbf86d5`](https://github.com/nocobase/nocobase/commit/dbf86d52ccc7653e6b23386c2aa465402702da85)

## [v0.6.2-alpha.1](https://github.com/nocobase/nocobase/compare/v0.6.2-alpha.0...v0.6.2-alpha.1) - 2022-04-15

### Коммиты

- chore(versions): 😊 публикация v0.6.2-alpha.1 [`c6b58b2`](https://github.com/nocobase/nocobase/commit/c6b58b215e43a48d625b8493eefc438c6b9e1e7a)

## [v0.6.2-alpha.0](https://github.com/nocobase/nocobase/compare/v0.6.1-alpha.0...v0.6.2-alpha.0) - 2022-04-15

### Коммиты

- chore(versions): 😊 публикация v0.6.2-alpha.0 [`5351fb3`](https://github.com/nocobase/nocobase/commit/5351fb3ab34a92b97102640dffa7aeafa5294b97)

## [v0.6.1-alpha.0](https://github.com/nocobase/nocobase/compare/v0.6.0...v0.6.1-alpha.0) - 2022-04-15

### Коммиты

- chore(versions): 😊 публикация v0.6.1-alpha.0 [`0b52b73`](https://github.com/nocobase/nocobase/commit/0b52b731dcd23e6ae251c4d5f5c4da781dd109d5)

## [v0.6.0](https://github.com/nocobase/nocobase/compare/v0.6.0-alpha.1...v0.6.0) - 2022-04-15

### Объединено

- Feat: plugin-workflow [`#288`](https://github.com/nocobase/nocobase/pull/288)
- fix: стиль slate [`#289`](https://github.com/nocobase/nocobase/pull/289)
- fix: toJSON с belongsTo ассоциацией [`#287`](https://github.com/nocobase/nocobase/pull/287)
- feat: улучшение модуля ACL [`#283`](https://github.com/nocobase/nocobase/pull/283)
- fix: удаление собственных записей [`#285`](https://github.com/nocobase/nocobase/pull/285)
- feat(plugin-workflow): поддержка переменных контекста из триггера модели [`#284`](https://github.com/nocobase/nocobase/pull/284)
- fix: ACL запись [`#280`](https://github.com/nocobase/nocobase/pull/280)
- fix: вызов корневого хука сервера после insertNewSchema [`#282`](https://github.com/nocobase/nocobase/pull/282)
- Feat/plugin workflow [`#278`](https://github.com/nocobase/nocobase/pull/278)
- feat: провайдер ACL [`#279`](https://github.com/nocobase/nocobase/pull/279)
- feat: добавление компонента Slate [`#272`](https://github.com/nocobase/nocobase/pull/272)
- Feat(plugin users with jwt) [`#258`](https://github.com/nocobase/nocobase/pull/258)
- fix: изменение стиля antd по умолчанию [`#277`](https://github.com/nocobase/nocobase/pull/277)
- fix(client): ошибка undefined после очистки значения фильтра каскада [`#267`](https://github.com/nocobase/nocobase/pull/267)
- Feat(plugin workflow): рефакторинг расчетов и добавление фильтра для запроса [`#264`](https://github.com/nocobase/nocobase/pull/264)
- feat: провайдер блока [`#261`](https://github.com/nocobase/nocobase/pull/261)
- fix: toJSON с нулевой ассоциацией [`#260`](https://github.com/nocobase/nocobase/pull/260)
- fix: обработка ошибок [`#259`](https://github.com/nocobase/nocobase/pull/259)

### Коммиты

- fix: yarn.lock [`7a7eb0c`](https://github.com/nocobase/nocobase/commit/7a7eb0cc82af0b1621476d2bb163b43ccc92da80)
- fix: yarn.lock [`e226f04`](https://github.com/nocobase/nocobase/commit/e226f04e505ed7f4d94abf3074ad4f375d15c67d)
- feat: редактор форматированного текста [`5b41b33`](https://github.com/nocobase/nocobase/commit/5b41b338072ec75f579a695bdae34dd69918752b)

## [v0.6.0-alpha.1](https://github.com/nocobase/nocobase/compare/v0.5.0-alpha.33...v0.6.0-alpha.1) - 2022-04-05

### Объединено

- fix: поддержка переноса строк в режиме чтения для `textarea` [`#255`](https://github.com/nocobase/nocobase/pull/255)
- fix: поддержка многоточия в `markdown` [`#257`](https://github.com/nocobase/nocobase/pull/257)
- featPlugin: поддержка нескольких приложений [`#248`](https://github.com/nocobase/nocobase/pull/248)
- add: шаблон журнала действий [`#239`](https://github.com/nocobase/nocobase/pull/239)
- fix: исправление некоторых ошибок [`#252`](https://github.com/nocobase/nocobase/pull/252)
- fix(plugin-workflow): исправление добавления/удаления узлов в параллельных ветвях [`#253`](https://github.com/nocobase/nocobase/pull/253)
- Feat: базовая точка входа клиента для плагина `workflow` [`#225`](https://github.com/nocobase/nocobase/pull/225)
- fix: обновление `updatedAt` при изменении области действия [`#251`](https://github.com/nocobase/nocobase/pull/251)
- feat: получение JSON-схемы с асинхронным узлом [`#246`](https://github.com/nocobase/nocobase/pull/246)
- feat: `insertNewSchema` [`#245`](https://github.com/nocobase/nocobase/pull/245)
- fix: ошибка транзакции [`#242`](https://github.com/nocobase/nocobase/pull/242)
- feat: шаблоны блоков [`#240`](https://github.com/nocobase/nocobase/pull/240)
- feat: очистка предков в `uiSchema` [`#241`](https://github.com/nocobase/nocobase/pull/241)
- feat: инициализация значений поля сортировки [`#236`](https://github.com/nocobase/nocobase/pull/236)
- fix: действие перемещения без изменения `updatedAt` [`#235`](https://github.com/nocobase/nocobase/pull/235)
- feat: проверка роли действия [`#234`](https://github.com/nocobase/nocobase/pull/234)
- feat: оператор "не равно" (`ne`) [`#233`](https://github.com/nocobase/nocobase/pull/233)
- fix: текущая роль пользователя [`#232`](https://github.com/nocobase/nocobase/pull/232)
- featEnable: разрешения [`#229`](https://github.com/nocobase/nocobase/pull/229)
- test: обновление `reverseField` [`#231`](https://github.com/nocobase/nocobase/pull/231)
- feat: `kanban` [`#230`](https://github.com/nocobase/nocobase/pull/230)
- Nocobase next `kanban` [`#223`](https://github.com/nocobase/nocobase/pull/223)
- add: тесты [`#224`](https://github.com/nocobase/nocobase/pull/224)
- Plugin error handler [`#222`](https://github.com/nocobase/nocobase/pull/222)
- fix: массив `$noneOf` с `null` [`#220`](https://github.com/nocobase/nocobase/pull/220)
- fix: парсер фильтров с числом в ключе [`#219`](https://github.com/nocobase/nocobase/pull/219)
- feat: индекс потомков в `ui-schema-tree-path` [`#218`](https://github.com/nocobase/nocobase/pull/218)
- fix: ошибка запроса оператора массива [`#217`](https://github.com/nocobase/nocobase/pull/217)
- fix: значение запроса оператора [`#216`](https://github.com/nocobase/nocobase/pull/216)
- feat: строковые операторы [`#215`](https://github.com/nocobase/nocobase/pull/215)
- feat: middleware обработки ошибок [`#214`](https://github.com/nocobase/nocobase/pull/214)
- refactor: компонент схемы фильтров [`#213`](https://github.com/nocobase/nocobase/pull/213)
- fix: пустой оператор с фильтром `$or` [`#212`](https://github.com/nocobase/nocobase/pull/212)
- feat: установка плагина [`#211`](https://github.com/nocobase/nocobase/pull/211)
- feat: сортировка по значению через таблицу [`#209`](https://github.com/nocobase/nocobase/pull/209)
- Feat: плагин `workflow` [`#210`](https://github.com/nocobase/nocobase/pull/210)
- fix: сортировка полей коллекции [`#208`](https://github.com/nocobase/nocobase/pull/208)
- feat: сортировка в полях коллекции [`#207`](https://github.com/nocobase/nocobase/pull/207)
- fix: REST API коллекции [`#205`](https://github.com/nocobase/nocobase/pull/205)
- feat: непостраничный список [`#204`](https://github.com/nocobase/nocobase/pull/204)
- feat: завершение разработки компонента календаря [`#199`](https://github.com/nocobase/nocobase/pull/199)
- fix(dependencies): перемещение `json-template` в исходные подпакеты [`#203`](https://github.com/nocobase/nocobase/pull/203)
- Feat(plugin workflow): добавление дополнительных инструкций [`#201`](https://github.com/nocobase/nocobase/pull/201)
- fix: `getJsonSchema` с свойствами [`#202`](https://github.com/nocobase/nocobase/pull/202)
- fix: оператор массива PostgreSQL [`#200`](https://github.com/nocobase/nocobase/pull/200)
### Объединено (продолжение)

- fix: сортировка PostgreSQL с проблемой `appends` [`#198`](https://github.com/nocobase/nocobase/pull/198)
- feat: удаление API в `uiSchema` [`#196`](https://github.com/nocobase/nocobase/pull/196)
- refactor: переименование `perPage` в `pageSize` [`#197`](https://github.com/nocobase/nocobase/pull/197)
- fix: тест парсера опций [`#195`](https://github.com/nocobase/nocobase/pull/195)
- fix: вложенное `append` [`#194`](https://github.com/nocobase/nocobase/pull/194)
- fix: тест с базой данных [`#193`](https://github.com/nocobase/nocobase/pull/193)
- fix(plugin-workflow): зависимости в пакете [`#192`](https://github.com/nocobase/nocobase/pull/192)
- Fix: тест `plugin-workflow` [`#191`](https://github.com/nocobase/nocobase/pull/191)
- Refactor(plugin-workflow): обновление плагина для использования абстрактного класса плагина и исправление типов [`#190`](https://github.com/nocobase/nocobase/pull/190)
- fix: хранение `ui schema` [`#188`](https://github.com/nocobase/nocobase/pull/188)
- fix: хранение `ui schema` [`#187`](https://github.com/nocobase/nocobase/pull/187)
- fix: обновление `guard` с экземпляром `Model` [`#186`](https://github.com/nocobase/nocobase/pull/186)
- fix: `getProperties` с порядком [`#183`](https://github.com/nocobase/nocobase/pull/183)
- feat(Server): улучшение приложения [`#177`](https://github.com/nocobase/nocobase/pull/177)
- Feature: MVP плагина `workflow` [`#171`](https://github.com/nocobase/nocobase/pull/171)
- fix(root): исправление зависимостей в пакетах для избежания ошибок сборки [`#178`](https://github.com/nocobase/nocobase/pull/178)
- Application [`#175`](https://github.com/nocobase/nocobase/pull/175)
- feat: добавление плагина ACL [`#169`](https://github.com/nocobase/nocobase/pull/169)
- add: компонент `Filter` в схему компонентов [`#176`](https://github.com/nocobase/nocobase/pull/176)
- feat: добавление компонента `Markdown` в схему компонентов [`#173`](https://github.com/nocobase/nocobase/pull/173)
- feat: связанные с таблицей компоненты [`#172`](https://github.com/nocobase/nocobase/pull/172)
- feat: добавление компонента `select` в схему компонентов [`#168`](https://github.com/nocobase/nocobase/pull/168)
- feat: добавление `TreeSelect` в схему компонентов [`#167`](https://github.com/nocobase/nocobase/pull/167)
- Plugin acl [`#166`](https://github.com/nocobase/nocobase/pull/166)
- add: компонент загрузки в схему компонентов [`#165`](https://github.com/nocobase/nocobase/pull/165)
- migrate: `TimePicker` в схему компонентов [`#164`](https://github.com/nocobase/nocobase/pull/164)
- Feat/plugin UI schema v0.6 [`#143`](https://github.com/nocobase/nocobase/pull/143)
- Feat/plugin collection manager [`#147`](https://github.com/nocobase/nocobase/pull/147)
- Acl [`#162`](https://github.com/nocobase/nocobase/pull/162)
- feat: acl [`#153`](https://github.com/nocobase/nocobase/pull/153)
- feat: добавление компонента `InputNumber` в схему компонентов [`#160`](https://github.com/nocobase/nocobase/pull/160)
- feature/nocobase next password [`#159`](https://github.com/nocobase/nocobase/pull/159)
- feat: добавление `DatePicker` в схему компонентов [`#161`](https://github.com/nocobase/nocobase/pull/161)
- feat: добавление `input` в схему компонентов [`#158`](https://github.com/nocobase/nocobase/pull/158)
- feat: добавление `radio` в схему компонентов [`#154`](https://github.com/nocobase/nocobase/pull/154)
- optimize: переименование файла компонента `checkbox` [`#155`](https://github.com/nocobase/nocobase/pull/155)
- Nocobase next color select [`#157`](https://github.com/nocobase/nocobase/pull/157)
- feat: добавление компонента `async-data-provider` [`#151`](https://github.com/nocobase/nocobase/pull/151)
- feat: клиентская часть v0.6 [`#150`](https://github.com/nocobase/nocobase/pull/150)
- Feat/GitHub actions [`#148`](https://github.com/nocobase/nocobase/pull/148)
- feat: фильтрация по целевому ключу [`#146`](https://github.com/nocobase/nocobase/pull/146)
- refactor: действия [`#137`](https://github.com/nocobase/nocobase/pull/137)
- feat: поддержка типа поля контекста [`#131`](https://github.com/nocobase/nocobase/pull/131)
- feat: следующая версия базы данных [`#130`](https://github.com/nocobase/nocobase/pull/130)
- feat: переименование `resourceKey` и `associatedKey` в `resourceIndex` и `associatedIndex` [`#126`](https://github.com/nocobase/nocobase/pull/126)
- refactor: переполнение текста в ячейке таблицы с многоточием [`#125`](https://github.com/nocobase/nocobase/pull/125)
- Add S3 storage and refactors [`#124`](https://github.com/nocobase/nocobase/pull/124)
- Fix: плагин `plugin-file-manager` [`#111`](https://github.com/nocobase/nocobase/pull/111)
- refactor: разделение кода компонента таблицы [`#121`](https://github.com/nocobase/nocobase/pull/121)
- refactor: разделение кода компонента таблицы [`#120`](https://github.com/nocobase/nocobase/pull/120)
- feat: добавление кнопки сброса в панель фильтров [`#110`](https://github.com/nocobase/nocobase/pull/110)
- feat: разрешение пользователю изменять пароль [`#109`](https://github.com/nocobase/nocobase/pull/109)

### Коммиты

- v0.6 [`732d310`](https://github.com/nocobase/nocobase/commit/732d31009eafbded78dd35dee5d891438783ba53)
- create-nocobase-app шаблон из [develop] [`9f4bea7`](https://github.com/nocobase/nocobase/commit/9f4bea79668643d37c2b488eb969b2c93a241026)
- feat: улучшение инициализатора схемы действия просмотра [`590ca26`](https://github.com/nocobase/nocobase/commit/590ca267b27b093b67aa140c4e94fd2b97c8eeb6)

## [v0.5.0-alpha.33](https://github.com/nocobase/nocobase/compare/v0.4.0-alpha.6...v0.5.0-alpha.33) - 2021-11-22

### Объединено

- fix: обновление formily & рендеринг бокового меню с использованием createPortal & эффект глубокого сравнения [`#103`](https://github.com/nocobase/nocobase/pull/103)
- fix: получение значения схемы в SchemaRenderer [`#102`](https://github.com/nocobase/nocobase/pull/102)
- fix: обновление formily и использование стратегии перезаписи в form.setValues [`#101`](https://github.com/nocobase/nocobase/pull/101)
- feat: поддержка i18n [`#99`](https://github.com/nocobase/nocobase/pull/99)
- feat: новая версия документации [`#95`](https://github.com/nocobase/nocobase/pull/95)
- стиль option-tag [`#92`](https://github.com/nocobase/nocobase/pull/92)
- create-nocobase-app: favicon [`#91`](https://github.com/nocobase/nocobase/pull/91)
- feat: создание приложения nocobase с опциями simple и quickstart [`#87`](https://github.com/nocobase/nocobase/pull/87)
- feat: экспорт плагина [`#73`](https://github.com/nocobase/nocobase/pull/73)

### Коммиты

- v0.5 [`2cbcd08`](https://github.com/nocobase/nocobase/commit/2cbcd087ce6629d8f0df550ee35e02065db41dbc)
- рефакторинг [`75cd158`](https://github.com/nocobase/nocobase/commit/75cd158a270935559a9922d1dd074811253013b9)
- feat: улучшение кода [`c6b68f2`](https://github.com/nocobase/nocobase/commit/c6b68f2b10e4e8df5257345f5e39408666c5810d)

## [v0.4.0-alpha.6](https://github.com/nocobase/nocobase/compare/v0.4.0-alpha.5...v0.4.0-alpha.6) - 2021-04-18

### Объединено

- docs: добавление документации [`#75`](https://github.com/nocobase/nocobase/pull/75)
- refactor: использование булевых значений вместо null [`#74`](https://github.com/nocobase/nocobase/pull/74)

### Коммиты

- fix: улучшение стилей формы входа [`5319000`](https://github.com/nocobase/nocobase/commit/5319000bd613ce9d2ac0a66f73ab403a84c5b8dd)
- fix: сообщение об ошибке для входа и регистрации [`214b227`](https://github.com/nocobase/nocobase/commit/214b227a6c1fe92bf54968e369aeaeabb8f73d7a)
- docs: Node.js, предоставляемый Docker [`22739af`](https://github.com/nocobase/nocobase/commit/22739afa2da4dd38eda9077f5ca566cd022f4dc2)

## [v0.4.0-alpha.5](https://github.com/nocobase/nocobase/compare/v0.4.0-alpha.2...v0.4.0-alpha.5) - 2021-04-07

### Коммиты

- chore(versions): публикация пакетов 0.4.0-alpha.5 [`ef93a3c`](https://github.com/nocobase/nocobase/commit/ef93a3c11c28419e1e842f73799cf005d49a5116)
- chore(versions): публикация пакетов 0.4.0-alpha.4 [`a22efec`](https://github.com/nocobase/nocobase/commit/a22efec65d85fd15e59332d2eb6483cb84a1e619)
- chore(versions): публикация пакетов 0.4.0-alpha.3 [`e72eebb`](https://github.com/nocobase/nocobase/commit/e72eebb8cd5e666b642030a9e268961385cc4d4d)

## [v0.4.0-alpha.2](https://github.com/nocobase/nocobase/compare/v0.4.0-alpha.1...v0.4.0-alpha.2) - 2021-04-07

### Коммиты

- refactor: промежуточные обработчики приложения [`17362a8`](https://github.com/nocobase/nocobase/commit/17362a844439e5510f254195fa135b6335866ef3)
- chore(versions): публикация пакетов 0.4.0-alpha.2 [`c2f1876`](https://github.com/nocobase/nocobase/commit/c2f18763c9e7c03a7a46edafd26b1fa884b8f272)

## v0.4.0-alpha.1 - 2021-04-07

### Объединено

- fix: незначительные проблемы [`#72`](https://github.com/nocobase/nocobase/pull/72)
- Develop [`#68`](https://github.com/nocobase/nocobase/pull/68)
- Feature: плагин `china-region` [`#66`](https://github.com/nocobase/nocobase/pull/66)
- Feature: фильтр для поля `linkTo` [`#64`](https://github.com/nocobase/nocobase/pull/64)
- fix: сделать представление/вкладку по умолчанию неудаляемыми [`#63`](https://github.com/nocobase/nocobase/pull/63)
- Feature/plugin automations [`#65`](https://github.com/nocobase/nocobase/pull/65)
- Feature/action logs [`#62`](https://github.com/nocobase/nocobase/pull/62)
- Feature/action logs [`#61`](https://github.com/nocobase/nocobase/pull/61)
- Feature/destroy lock [`#60`](https://github.com/nocobase/nocobase/pull/60)
- fix: игнорирование некоторых ошибок TypeScript [`#59`](https://github.com/nocobase/nocobase/pull/59)
- feat: разрешения маршрутов [`#58`](https://github.com/nocobase/nocobase/pull/58)
- Feature: добавление API плагина разрешений [`#57`](https://github.com/nocobase/nocobase/pull/57)
- fix: внешний ключ `updatedBy` [`#56`](https://github.com/nocobase/nocobase/pull/56)
- feat: добавление плагина разрешений [`#53`](https://github.com/nocobase/nocobase/pull/53)
- fix: поле `updatedBy` в хуке `bulkUpdate` [`#54`](https://github.com/nocobase/nocobase/pull/54)
- test: пропуск тестов с ошибками для прохождения CI [`#52`](https://github.com/nocobase/nocobase/pull/52)
- fix: избежание ошибок при обновлении других полей [`#51`](https://github.com/nocobase/nocobase/pull/51)
- feat: операторы только для дат [`#50`](https://github.com/nocobase/nocobase/pull/50)
- Feature: поле для установки значения по умолчанию [`#49`](https://github.com/nocobase/nocobase/pull/49)
- Feature: пользовательские операторы для запросов [`#48`](https://github.com/nocobase/nocobase/pull/48)
- fix: ошибка `toInclude` с вложенными ассоциациями [`#47`](https://github.com/nocobase/nocobase/pull/47)
- feat: возможность загрузки одного файла в вложение [`#46`](https://github.com/nocobase/nocobase/pull/46)
- feature: добавление базовой архитектуры менеджера файлов [`#44`](https://github.com/nocobase/nocobase/pull/44)
- feat: добавление конфигурации полей `createdBy/updatedBy` для таблиц, управляемых коллекциями [`#43`](https://github.com/nocobase/nocobase/pull/43)
- fix: использование `wrapped` и логики для объединения фильтров [`#42`](https://github.com/nocobase/nocobase/pull/42)
- fix: `filterByFields` должен возвращать то же значение, когда вход == null (закрыть 0) [`#41`](https://github.com/nocobase/nocobase/pull/41)
- fix: свойства Symbol не могут быть перебраны в цикле for-in [`#39`](https://github.com/nocobase/nocobase/pull/39)
- Feature/sort [`#38`](https://github.com/nocobase/nocobase/pull/38)
- refactor: изменение стратегии сортировки с offset на targetId [`#37`](https://github.com/nocobase/nocobase/pull/37)
- Feature/sort [`#36`](https://github.com/nocobase/nocobase/pull/36)
- feat: добавление фильтра и транзакции для действия destroy [`#35`](https://github.com/nocobase/nocobase/pull/35)
- fix: логика фильтра полей для create/update [`#34`](https://github.com/nocobase/nocobase/pull/34)
- Feature: параметры полей действий для create/update [`#32`](https://github.com/nocobase/nocobase/pull/32)
- Fix: изменение стратегии с add на set для updateAssociations [`#33`](https://github.com/nocobase/nocobase/pull/33)
- Test/ci [`#31`](https://github.com/nocobase/nocobase/pull/31)
- feat: улучшение хуков/полей/действий/представлений коллекций [`#30`](https://github.com/nocobase/nocobase/pull/30)
- Fix/model update associations [`#29`](https://github.com/nocobase/nocobase/pull/29)
- fix: тестовые случаи базы данных и опции таблицы [`#28`](https://github.com/nocobase/nocobase/pull/28)
- feat: добавление поддержки геттеров и сеттеров виртуальных атрибутов [`#27`](https://github.com/nocobase/nocobase/pull/27)
- feat: опции коллекции и хуки [`#21`](https://github.com/nocobase/nocobase/pull/21)
### Объединено (продолжение)

- feat(users): добавление модуля пользователей [`#26`](https://github.com/nocobase/nocobase/pull/26)
- feat: добавление действия сортировки [`#22`](https://github.com/nocobase/nocobase/pull/22)
- Test/list [`#19`](https://github.com/nocobase/nocobase/pull/19)
- feat: параметры пагинации [`#20`](https://github.com/nocobase/nocobase/pull/20)
- test: рефакторинг тестов в базе данных и добавление новых [`#17`](https://github.com/nocobase/nocobase/pull/17)
- feat: действия и представления [`#18`](https://github.com/nocobase/nocobase/pull/18)
- Тестовые случаи для базы данных [`#16`](https://github.com/nocobase/nocobase/pull/16)
- Refactor: изменение глобальной инъекции тестов для пакета действий [`#15`](https://github.com/nocobase/nocobase/pull/15)
- feat: улучшение плагинов [`#14`](https://github.com/nocobase/nocobase/pull/14)
- Doc: добавление README.md для сервера [`#12`](https://github.com/nocobase/nocobase/pull/12)
- fix: `parseRequest` & `registerHandlers` [`#10`](https://github.com/nocobase/nocobase/pull/10)
- fix #9 [`#11`](https://github.com/nocobase/nocobase/pull/11)
- feat: поддержка регистрации и вызова частичных действий [`#7`](https://github.com/nocobase/nocobase/pull/7)
- 发布核心框架 [`#6`](https://github.com/nocobase/nocobase/pull/6) *(Публикация основной структуры)*

### Исправлено

- fix #9 (#11) [`#9`](https://github.com/nocobase/nocobase/issues/9) [`#9`](https://github.com/nocobase/nocobase/issues/9)

### Коммиты

- chore: корректировка параметров [`b95e2da`](https://github.com/nocobase/nocobase/commit/b95e2da129aa49b5d8fb3e31ba8975818f7053cb)
- first commit [`e5d30b3`](https://github.com/nocobase/nocobase/commit/e5d30b30ba4dd38de764b0e5044f836f04a03706)
- style: форматирование кода [`ce4a22f`](https://github.com/nocobase/nocobase/commit/ce4a22fbb9b1ba9b88db1dc86609e94944f9d904)
