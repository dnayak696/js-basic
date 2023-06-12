// Filter methods: returns the matched
//       values in an array from the collection
// find method: returns the first value that matches the
// matches from the collection once it matches the value in  findings


 const empArr = [
    {name: "King", age: 42},
    {name: "ali", age: 30},
    {name: "dhiraj", age: 32},
    {name: "Bikash", age: 42},
    {name: "Rakesh", age: 35},
    {name: "Biki", age: 27},
    {name: "Bikun", age: 26},
    {name: "pintu", age: 25},
    {name: "Anuj", age: 28},
    {name: "aptab", age: 29},
    {name: "anurag", age: 31},
    {name: "mithilesh", age: 30}
 ]

// filter method return every filtered data
 const filteredItem = empArr.filter(item => item.age <30)

// find methonds retun  the first element
 const foundElement = empArr.find(item => item.age <30)

 console.log(filteredItem)
 console.log(foundElement)