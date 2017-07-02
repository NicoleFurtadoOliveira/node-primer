# Practical 1

## Node.js

POSIX operative systems usually include Node.js, but more often than not, it is an old version of node. For these OSes there's a great tool, NVM (Node Version Manager) which allows us to manage and use one or more versions easily.
To install you can either go to the project's page at https://github.com/creationix/nvm and follow the instructions or just paste the code below in your terminal:

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

*After installation is complete you must open a new shell so that NVM is loaded.*

To install a node version you only need:

```
$ nvm install 8
```

To use an already installed version you need:

```
$ nvm use 8
```

From now on you can enjoy Node.js in its latest version

```
$ node -v
v8.1.3
```

## Command line

```
$ node
console.log("Hello World!");
```
