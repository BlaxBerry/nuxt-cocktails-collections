# Cocktails Collections

- [Desctiption](#desctiption)
- [Tech Stacks](#tech-stacks)
- [Setup](#how-to-setup)
- [Folders](#folders)
- [Images](#images)
- [APIs](#apis)
  - [Cocktails List](#cocktails-list)
  - [Cocktail Detail](#cocktail-detail)
  - [Cocktails List Filtered](#cocktails-list-filtered)
  - [Filters List](#filters-list)
  - [Ingredient Detail](#ingredient-detail)
  - [Ingredient Image](#ingredient-image)

## Desctiption

emmmm....a practice for Nuxt 3

## Tech Stacks

- [Nuxt]() v3.0.0-rc.11
- [Element Plus]() v2+
- [TypeScript]()
- [Sass]()
- [@nuxtjs/color-mode]()

## How to setup

```shell
git clone <this project>

cd <this project>

yarn install

yarn run dev
```

### Deploy on github pages

1. generatie project to a static web app

```shell
yarn run generate
```

2. copy `.output/public` to branch `github-page`

3. push the branch `github-page`

## Folders

```js
|- .nuxt
|- assets
  |- fonts
  |- images
  |- styles
|- components
  |- Common
  |- ...
|- composables
  |- ...
|- layouts
|- pages
|- plugins
|- server
  |- api
  |- utils
|- nuxt.config.ts
|- package.json
|- tsconfig.json
|- ...
```

## Images

## APIs

Custom Secondary Packaging

### Cocktails List

`/cocktails?name=[name]`

search cocktails list by name

|        | type   |                                              |
| ------ | ------ | -------------------------------------------- |
| params | String | the **name** of cocktail which is searching  |
| return | Array  | list of cocktails whose name includes params |

> params `name` is not necessary, if `name` is not sent api will return all cocktails list sorted by first lette

---

### Cocktail Detail

`/cocktail?id=[ID]`

search cocktail's detail by its ID

|        | type   |                                 |
| ------ | ------ | ------------------------------- |
| params | String | **cocktailObject["idDrink"]**   |
| return | Array  | list which only has one element |

---

### Cocktails List Filtered

`/cocktails?[filterName]=[params]`

get the list of cocktals filtered by params

| filter Name    | params                      | URL                           |
| -------------- | --------------------------- | ----------------------------- |
| `"category"`   | `/filters?name=categories`  | `/cocktails?category=[xxx]`   |
| `"ingredient"` | `/filters?name=ingredients` | `/cocktails?ingredient=[xxx]` |
| `"alcoholic"`  | `/filters?name=alcoholic`   | `/cocktails?alcoholic=[xxx]`  |
| `"glass"`      | `/filters?name=glassess`    | `/cocktails?glass=[xxx]`      |

---

### Filters List

`/filters?name=[params]`

get the list of filters

|        | type   |                      |
| ------ | ------ | -------------------- |
| params | String | which kind of filter |
| return | Array  | list of filters      |

| params name     | URL                         |
| --------------- | --------------------------- |
| `"categories"`  | `/filters?name=categories`  |
| `"ingredients"` | `/filters?name=ingredients` |
| `"alcoholic"`   | `/filters?name=alcoholic`   |
| `"glassess"`    | `/filters?name=glassess`    |

---

### Ingredient Detail

`/ingredient?name=[IngredientName]`

get the ingredient detail by params

> Basically used for getting the detail of ingredient from cocktail object
>
> [cocktail object item](#cocktail-detail) includes ingredients item `strIngredient1`

---

### Ingredient Image

`/image?ingredient=[IngredientName]`

get the ingredient image

> Basically used for getting the iamge of ingredient from cocktail object
