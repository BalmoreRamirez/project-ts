Apuntes 

## iniciar un proyecto de nodeJs

```jsx
npm init -y
```

```jsx
npm i express dotenv -S

```

## compilar codigo de ts

```jsx
npm i -D typescript @types/express @types/node
npx tsc --init
```

## generar la concurrencia de ts a js

```jsx
npm i -D concurrently 
```

```jsx
npm i -D webpack webpack-cli webpack-node-externals webpack-shell-plugin
```

## reglas a seguir en el proyecto

```jsx
npm i -D eslint jest ts-jest @types/jest supertest
```

## configurar eslint

1. to check syntax, find problems and enforce code style
2. javascript modules (import/export)
3. none of these
4. does your project use typescrippt→ yes 
5. where does your code run→ node
6. use a popular style guide 
7. options standard
8. option: json

```jsx
npx jest --init
```

## configurar jest

1. would you like to use jest when running “jest” script in package.json → yes
2. would you like is use typescript for use configuration file → yes
3. option →node
4. do you want, jest to add coverage reports → yes
5. option: babel
6. automatically clear mock calls instances and reults before every test→ yes
7. 

## para servir el coverage

## variable de entorno 
.env 
PORT= 3001
