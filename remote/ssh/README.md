## Local Computer

### Step 1
```
cd ~/
```

#### Step 1A (If `.ssh` folder doesn't exist)
```
mkdir .ssh 
```

### Step 2
```
cd ~/.ssh
```

#### Step 2A (If `config` doesn't exist), sample below
```
# ssh-keygen -b 1024 -t rsa -f mysite_id_rsa -P ""
Host mysite
    Hostname mysite.com
    IdentityFile ~/.ssh/mysite_id_rsa
    User secretuser
```

### Step 3 (In `.ssh/` folder)
```
ssh-keygen -b 1024 -t rsa -f mysite_id_rsa -P ""
```


### Step 3A
```
mysite_id_rsa.pub (Public Key, used in remote server you want to login w/o password)
mysite_id_rsa     (Private Key, used in your local computer)
```


#### Step 3B (Save it for reference)
```
cat mysite_id_rsa.pub
```


## Remote Server

### Step 4
```
cd ~/
```


#### Step 4A (create `.ssh` if it doesn't exist)
```
mkdir .ssh
```

#### Step 4B (create `authorized_keys` if it doesn't exist)
```
touch authorized_keys
```

#### Step 4C (Grant read/write to this file)
```
chmod u+w authorized_keys
```

#### Step 4D (Paste the content from Step 3B into the file `authorized_keys` and save it. Open new line if there is already content. )


## Local Computer

### Step 5

Either do this
```
ssh mysite
```

Or put in your `.bash_profile`
```
alias mysite="ssh mysite"
```

