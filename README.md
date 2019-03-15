# prototype-me.js
A tool to prototype routes from an API using express

## Getting Started

Install

```
npm install -g willyandan/prototype-me.js
```
Usage

```
prototype file.json dir
```

The json file should be like this: 

```
{
	{
    "user":{
        "type":"group",
        "routes":{
            "listAll":{
                "type":"get",
                "path":"",
                "response":[{"name":"foo", "last":"bar"}, {"name":"bar", "last":"foo"}]
            },
            "lisOne":{
                "type":"get",
                "path":":id",
                "response":{"name":"foo", "last":"bar"}
                
            }
        }
    },
    "version":{
        "type":"get",
        "path":"version",
        "response":"1.0.0"
    }
}
}
```

It will create a this route tree:

```
user
--listAll
--listOne/:id
```

## Built With

* [Node.js](https://nodejs.org/en/)

* [Express.js](https://expressjs.com/)

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Willyan Antunes** - *Initial work* - [prototype-me.js](https://github.com/willyandan/prototype-me.js)

* **André Marco** - *Minor tweaks and docs* - [git](https://github.com/andremarcopereira)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
