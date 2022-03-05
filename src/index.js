import './styles/index.scss';

const userStack = {
    language: 'JavaScript',
    framework: 'React'
}

const user = {
    name: 'Sergey',
    age: '24',
    ...userStack
}

console.log(user)