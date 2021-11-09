let permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    }
};
function hasPermission ( moduleName, role,  permissionsType) {
   
    if (moduleName == 'getUsers' && role == 'head-trainer'){
        return true;
    }
        else if (moduleName == 'getUsers' && role == 'trainer' && (permissionsType == "read" || permissionsType == "write")) {
        return true;
    }
    else if (moduleName == 'getUsers' && role == 'trainee' && permissionsType =='read'){
        return true;
    }
    else{
        return false;
    }        
};

let per = hasPermission('getUsers','trainee','read');
console.log(per);
