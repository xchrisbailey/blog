---
title: "Setting Up Postgres via Homebrew"
description: "Getting started with postgres on macos by way of homebrew"
date: "11/15/2024"
---

## The Basics

Getting started is fairly straightforward as with any homebrew install, but i've managed to run into a couple of gotchas or unexpected settings that need to be sorted out which ill get to in the next section. For now installation is as easy as

```sh
$ brew install postgres@{version}
```

this will get you set up with a fresh install of the specified version. In order to run this instance of postgres there are a few options.

1. Run it as a homebrew service via the `brew services start postgres@{version}` this will run it in the background and can be restarted with the similar command `brew services restart postgres@{version}`
2. if you dont need it ran in the background `  LC_ALL="C" /opt/homebrew/opt/postgresql@17/bin/postgres -D /opt/homebrew/var/postgresql@17` will run a foreground task.
3. my preferred method however is to use [dbngin](https://dbngin.com) a gui for starting and stopping background tasks specifically databases installed on your system. `brew install dbngin` will get you going there.

## Users

By default homebrews postgres install doesnt come with the standard
postgres:postgres user password. Its setup around your system username and w/o a
password.

```sh
# to open the postgres repl
$ psql postgres

# find the username created with homebrew
postgres=# \du

# leave repl
postgres=# \q

# set a password for user
$ psql -U userFromAbove pickAPassword
```

Something to keep in mind is homebrew adds a version suffix to some postgres
installs. For example at the time of writing if you have postgres17 installed
youll need to execute `psql` as `psql-17`
