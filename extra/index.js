import {diamond, equilateral} from './patterns'
import {hasPermission, validateuser} from './utils';
    const users = ["abcd123@mail.com","ankit@mail.com", "patidar123@mail.com", "ankit", "patidar", "ab123"];
    validateuser(users);
    let valid_users = hasPermission('getUsers','trainee','read');
    console.log(valid_users);