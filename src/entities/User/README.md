## Сущность пользователя

Описание:
описываем сущность.

#### Public api

- Components

`ArticleDetails` - компонент с информацией о статье

`ArticleList` -  Компонент со списком статей

`ArticleViewSelector` - Компонент переключатель отображения списка статьей (плитка, список)

`ArticleSortSelector` - Компонент с выбором сортировки списка статьей

`ArticleTypeTabs` - Компонент с выбором типа статьи

- types

`JsonSettings` - Тип, описывающий настройки пользоваеля(тему, информацию о посещении и т.д.)

`User` - Тип, описывающий пользователя (id, username, avatar, roles и т.д.)

`UserSchema` - Тип, описывающий пользователя, и boolean флаг(inited)

- Endpoints

`getUserDataByIdQuery` - injectEndpoints для получения пользователя по id

`setJsonSettingsMutation` - injectEndpoints для изменения jsonSettings

- selectors

`getUserAuthData` - получение пользователя 
`getUserInited` - boolean флаг отвечающий за инициализацию 
`getUserRoles` - получение роли пользователя
`isUserAdmin` - получение boolean флага имеется ли у текущего авторизованного пользователя роль Admin 
`isUserManager`- получение boolean флага имеется ли у текущего авторизованного пользователя роль Manager 