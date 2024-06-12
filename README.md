
## Installation

1. Make sure you have [**node**](https://nodejs.org/), [**yarn**](https://yarnpkg.com/), [**docker**](https://www.docker.com/products/docker-desktop) installed.
2. install dependencies

```
$ npm install --global yarn
$ yarn install
```


### if you have docker installed then below commands 
If you have docker installed then build Docker Image by following command

```
docker build -t qa-automation-tests .
```

## Running Tests

And then, you can run the container from the built image

```
docker run qa-automation-tests
```

OR 
(if playwright and broswers are globally added to your PC)
```
npx playwright test
```


## See Tests Reports

if you have executed this : `docker run qa-automation-tests`
then you will see something like this in terminal to see report. Open that URL :

```
Serving HTML report at http://localhost:9323. Press Ctrl+C to quit.
```

OR 
else you can execute :
```
npx playwright show-report
```




