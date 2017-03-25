# A Single page to validate credit card with custom rules


# Install:

### Install virtualenv with:
```
sudo pip install virtualenv && sudo pip install virtualenvwrapper
```

[How to Virtualenvwrapper](http://virtualenvwrapper.readthedocs.io/en/latest/install.html)


### Create a virtualenv and install requirements.txt


Example:
```
mkvirtualenv credit_card
```

and

```
pip install -r requirements.txt
```

And also need to create your "local_settings.py" on path "anchor/anchor/"
and in this file, just add "DEBUG=TRUE".


### Run Project (Migrate is not necessary, but you can make it):


Go to the root of the project and:
```
python manage.py runserver
```

So you can test the application. You can also run tests with:

```
python manage.py test
```


### Webpack monitor

This project uses react and webpack to show results when process jsx files to common js files. You'll
need install Node and npm too. So after that, to compile jsx,
go to the app "anchor/credit_card/static/" path and use command:

```
npm install
```

and


```
webpack -w
```

To auto-compile "card_result.jsx".

Enjoy
