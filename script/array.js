const myArray = [1, 2, 3, 4, 5];

myArray.push(8)
myArray.pop()

console.log(myArray);

const arr = [10, 20, 30, 40];
arr.shift()
arr.unshift(50)
console.log(arr);

console.log(Math.max(...arr));
console.log(Math.min(...arr));


const isHero = ['joy', 'roy', 'kho'];
isHero[2] = 'pangkha'// array index cheng
isHero[0] = 'khan'
console.log(isHero); 


// tow array one array converted

const friend = ['kholi', 'jolil', 'joy'];
const newFriend = ['shathe', 'kajol', 'koli'];

const upDateFriend = [...friend, ...newFriend];

console.log(upDateFriend);




