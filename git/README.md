# Git Cheatsheet
---------------------------------------------

##### Add Submodule
```
git submodule add [http://path/to/your/repo.git] [/path/to/your/desired-dir]
```


##### Add Submodule with a specific branch
```
git submodule add -b [branch] [http://path/to/your/repo.git] [/path/to/your/desired-dir]
```

##### Fetch submodules after cloning
```
git submodule update --init
```

##### Update submodules
```
git submodule update
```

##### Remove cached submodules
```
git ls-files --stage [submodule_name]

git rm --cached [submodule_name]
```
