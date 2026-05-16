<<<<<<< HEAD
const questions = {

    OOP: [
        { title: "🏛️ Class and Object", desc: "Create a class Student and make object.", example: "Input: Student s1\nOutput:Object created", level: "Easy", rate: "91%" },
        { title: "👨‍👦 Inheritance", desc: "Dog inherits Animal properties.", example: "Input: Dog extends Animal\nOutput:Inherited", level: "Easy", rate: "88%" },
        { title: "🎭 Method Overriding", desc: "Override parent method.", example: "Input: run()\nOutput:Child run", level: "Medium", rate: "73%" },
        { title: "➕ Method Overloading", desc: "Same method different parameters.", example: "sum(2,3)\nOutput:5", level: "Easy", rate: "84%" },
        { title: "🔒 Encapsulation", desc: "Use private variables with getter setter.", example: "name=Teja\nOutput:Teja", level: "Easy", rate: "82%" },
        { title: "🧬 Abstraction", desc: "Use abstract class Vehicle.", example: "Car extends Vehicle", level: "Medium", rate: "71%" },
        { title: "📦 Interface", desc: "Implement interface Runnable.", example: "run()\nOutput:Running", level: "Medium", rate: "70%" },
        { title: "🛠️ Constructor", desc: "Create default constructor.", example: "Student()\nOutput:Called", level: "Easy", rate: "87%" },
        { title: "🎯 Static Keyword", desc: "Use static variable count.", example: "count=2", level: "Easy", rate: "80%" },
        { title: "🧩 Final Keyword", desc: "Declare final variable.", example: "final int x=10", level: "Easy", rate: "83%" }
    ],

    Arrays: [
        { title: "➕ Two Sum", desc: "Find two indices with target sum.", example: "[2,7,11,15],9 => [0,1]", level: "Easy", rate: "86%" },
        { title: "📈 Maximum Subarray", desc: "Largest contiguous sum.", example: "[-2,1,-3,4,-1,2,1] => 6", level: "Medium", rate: "63%" },
        { title: "🔄 Rotate Array", desc: "Rotate array by k steps.", example: "[1,2,3,4],2 => [3,4,1,2]", level: "Medium", rate: "60%" },
        { title: "0️⃣ Move Zeroes", desc: "Move zeros to end.", example: "[0,1,0,3] => [1,3,0,0]", level: "Easy", rate: "77%" },
        { title: "💰 Stock Profit", desc: "Find max profit.", example: "[7,1,5,3,6] => 5", level: "Easy", rate: "81%" },
        { title: "📦 Product Except Self", desc: "Multiply except self.", example: "[1,2,3,4] => [24,12,8,6]", level: "Medium", rate: "58%" },
        { title: "🏆 Majority Element", desc: "Find majority element.", example: "[2,2,1,2] => 2", level: "Easy", rate: "83%" },
        { title: "🧮 Missing Number", desc: "Find missing number.", example: "[3,0,1] => 2", level: "Easy", rate: "79%" },
        { title: "🎯 Single Number", desc: "Find single occurring number.", example: "[4,1,2,1,2] => 4", level: "Easy", rate: "84%" },
        { title: "📚 Remove Duplicates", desc: "Remove duplicates sorted array.", example: "[1,1,2] => [1,2]", level: "Easy", rate: "85%" }
    ],

    Strings: [
        { title: "🔁 Reverse String", desc: "Reverse given string.", example: "hello => olleh", level: "Easy", rate: "84%" },
        { title: "🪞 Palindrome", desc: "Check palindrome string.", example: "madam => true", level: "Easy", rate: "82%" },
        { title: "🔤 Longest Prefix", desc: "Find common prefix.", example: "flower,flow => fl", level: "Easy", rate: "78%" },
        { title: "📦 String Compression", desc: "Compress repeated chars.", example: "aaabb => a3b2", level: "Medium", rate: "59%" },
        { title: "🧠 Unique Substring", desc: "Longest substring no repeat.", example: "abcabcbb => 3", level: "Medium", rate: "63%" },
        { title: "🔍 Substring Search", desc: "Find substring index.", example: "hello,ll => 2", level: "Easy", rate: "76%" },
        { title: "🎯 Valid Anagram", desc: "Check if anagram.", example: "listen,silent => true", level: "Easy", rate: "83%" },
        { title: "📌 First Unique Char", desc: "Find first unique char.", example: "leetcode => l", level: "Easy", rate: "79%" },
        { title: "✂️ Reverse Words", desc: "Reverse sentence words.", example: "I am Teja => Teja am I", level: "Easy", rate: "80%" },
        { title: "📈 Character Frequency", desc: "Count characters.", example: "aab => a2b1", level: "Easy", rate: "87%" }
    ],

    "Linked List": [
        { title: "🔗 Reverse Linked List", desc: "Reverse linked list.", example: "1->2->3 => 3->2->1", level: "Easy", rate: "84%" },
        { title: "📍 Middle Node", desc: "Find middle node.", example: "1->2->3->4->5 => 3", level: "Easy", rate: "82%" },
        { title: "❌ Detect Cycle", desc: "Detect cycle in list.", example: "Output:true", level: "Easy", rate: "81%" },
        { title: "🗑️ Delete Node", desc: "Delete given node.", example: "Delete 5", level: "Easy", rate: "79%" },
        { title: "➕ Merge Lists", desc: "Merge two sorted lists.", example: "1->2 +1->3", level: "Easy", rate: "85%" },
        { title: "🔁 Rotate List", desc: "Rotate linked list.", example: "1->2->3->4,2", level: "Medium", rate: "67%" },
        { title: "📦 Remove Nth Node", desc: "Remove nth from end.", example: "1->2->3,2", level: "Medium", rate: "69%" },
        { title: "🧠 Palindrome List", desc: "Check palindrome list.", example: "1->2->1 => true", level: "Easy", rate: "77%" },
        { title: "🔄 Swap Pairs", desc: "Swap nodes pairwise.", example: "1->2->3->4", level: "Medium", rate: "65%" },
        { title: "📏 Length List", desc: "Find length of list.", example: "1->2->3 => 3", level: "Easy", rate: "90%" }
    ],

    Stack: [
        { title: "📚 Valid Parentheses", desc: "Check balanced brackets.", example: "()[]{} => true", level: "Easy", rate: "88%" },
        { title: "📦 Min Stack", desc: "Design min stack.", example: "push,pop,getMin", level: "Medium", rate: "63%" },
        { title: "🎯 Next Greater", desc: "Find next greater element.", example: "[2,1,3]", level: "Medium", rate: "67%" },
        { title: "🧾 Evaluate Postfix", desc: "Evaluate postfix expression.", example: "23+ => 5", level: "Easy", rate: "79%" },
        { title: "📏 Stack Size", desc: "Find stack size.", example: "3", level: "Easy", rate: "91%" },
        { title: "🗑️ Delete Middle", desc: "Delete middle item.", example: "1 2 3", level: "Medium", rate: "58%" },
        { title: "🔄 Sort Stack", desc: "Sort stack.", example: "3 1 2", level: "Medium", rate: "60%" },
        { title: "📤 Push", desc: "Push element.", example: "push(5)", level: "Easy", rate: "96%" },
        { title: "📥 Pop", desc: "Pop element.", example: "pop()", level: "Easy", rate: "95%" },
        { title: "👀 Peek", desc: "Get top item.", example: "peek()", level: "Easy", rate: "94%" }
    ],
    Queue: [
        { title: "🚶 Queue Enqueue", desc: "Insert element into queue.", example: "enqueue(5)", level: "Easy", rate: "95%" },
        { title: "📤 Queue Dequeue", desc: "Remove front element.", example: "dequeue()", level: "Easy", rate: "94%" },
        { title: "👀 Front Element", desc: "Find front of queue.", example: "front()", level: "Easy", rate: "93%" },
        { title: "📏 Queue Size", desc: "Find queue size.", example: "3", level: "Easy", rate: "92%" },
        { title: "🔄 Circular Queue", desc: "Implement circular queue.", example: "size=5", level: "Medium", rate: "68%" },
        { title: "🧠 Queue Using Stack", desc: "Implement queue using stacks.", example: "push pop", level: "Medium", rate: "66%" },
        { title: "📚 Generate Binary Numbers", desc: "Use queue to generate numbers.", example: "1 10 11", level: "Medium", rate: "61%" },
        { title: "🚦 Priority Queue", desc: "Highest priority served first.", example: "5,2,9 => 9", level: "Medium", rate: "64%" },
        { title: "🚌 Reverse Queue", desc: "Reverse queue elements.", example: "1 2 3 => 3 2 1", level: "Medium", rate: "62%" },
        { title: "❌ Empty Queue", desc: "Check queue empty.", example: "true", level: "Easy", rate: "97%" }
    ],

    Trees: [
        { title: "🌳 Inorder Traversal", desc: "Traverse binary tree inorder.", example: "Left Root Right", level: "Easy", rate: "85%" },
        { title: "🌲 Preorder Traversal", desc: "Traverse preorder.", example: "Root Left Right", level: "Easy", rate: "84%" },
        { title: "🌴 Postorder Traversal", desc: "Traverse postorder.", example: "Left Right Root", level: "Easy", rate: "83%" },
        { title: "📏 Tree Height", desc: "Find height of tree.", example: "Output:3", level: "Easy", rate: "81%" },
        { title: "📍 Level Order", desc: "BFS traversal.", example: "1 2 3", level: "Medium", rate: "72%" },
        { title: "🧠 Balanced Tree", desc: "Check if balanced.", example: "true", level: "Medium", rate: "68%" },
        { title: "🔍 Search BST", desc: "Search key in BST.", example: "Find 7 => true", level: "Easy", rate: "82%" },
        { title: "➕ Insert BST", desc: "Insert node in BST.", example: "Insert 5", level: "Easy", rate: "80%" },
        { title: "🗑️ Delete BST", desc: "Delete node from BST.", example: "Delete 10", level: "Medium", rate: "61%" },
        { title: "🏔️ Diameter Tree", desc: "Longest path in tree.", example: "Output:5", level: "Hard", rate: "48%" }
    ],

    Graphs: [
        { title: "🌐 BFS Graph", desc: "Breadth first traversal.", example: "0 1 2 3", level: "Easy", rate: "79%" },
        { title: "🕸️ DFS Graph", desc: "Depth first traversal.", example: "0 2 3 1", level: "Easy", rate: "78%" },
        { title: "🔍 Detect Cycle", desc: "Detect graph cycle.", example: "true", level: "Medium", rate: "67%" },
        { title: "🛣️ Shortest Path", desc: "Find shortest path.", example: "0->3 = 4", level: "Medium", rate: "65%" },
        { title: "🏙️ Number of Islands", desc: "Count islands in grid.", example: "Output:3", level: "Medium", rate: "69%" },
        { title: "📌 Connected Components", desc: "Count components.", example: "2", level: "Medium", rate: "66%" },
        { title: "🧭 Topological Sort", desc: "Sort DAG nodes.", example: "5 4 2 3", level: "Hard", rate: "55%" },
        { title: "🚦 Bipartite Graph", desc: "Check bipartite graph.", example: "true", level: "Medium", rate: "63%" },
        { title: "📍 Dijkstra", desc: "Minimum path cost.", example: "Cost=7", level: "Hard", rate: "52%" },
        { title: "🔗 Union Find", desc: "Disjoint set operations.", example: "Merged", level: "Hard", rate: "50%" }
    ],

    Recursion: [
        { title: "🔢 Factorial", desc: "Find factorial using recursion.", example: "5 => 120", level: "Easy", rate: "91%" },
        { title: "🧮 Fibonacci", desc: "Nth fibonacci.", example: "6 => 8", level: "Easy", rate: "87%" },
        { title: "🏗️ Tower of Hanoi", desc: "Solve Hanoi puzzle.", example: "3 disks", level: "Medium", rate: "71%" },
        { title: "🔁 Reverse String", desc: "Reverse string recursively.", example: "abc => cba", level: "Easy", rate: "82%" },
        { title: "📚 Sum of Digits", desc: "Find digit sum.", example: "123 => 6", level: "Easy", rate: "86%" },
        { title: "🧠 Power Function", desc: "Find x^n recursively.", example: "2^5 => 32", level: "Medium", rate: "74%" },
        { title: "📍 Binary Search", desc: "Recursive binary search.", example: "Find 7", level: "Easy", rate: "84%" },
        { title: "🎯 Palindrome", desc: "Check palindrome recursively.", example: "madam => true", level: "Easy", rate: "80%" },
        { title: "🪜 Climbing Stairs", desc: "Ways to climb stairs.", example: "3 => 3", level: "Medium", rate: "72%" },
        { title: "📦 Subsets", desc: "Generate all subsets.", example: "[1,2]", level: "Medium", rate: "66%" }
    ],

    "Dynamic Programming": [
        { title: "🪜 Climbing Stairs", desc: "Ways to climb n stairs.", example: "4 => 5", level: "Easy", rate: "83%" },
        { title: "💰 Coin Change", desc: "Minimum coins needed.", example: "[1,2,5],11 => 3", level: "Medium", rate: "64%" },
        { title: "🎒 Knapsack", desc: "Max value in bag.", example: "W=10", level: "Hard", rate: "55%" },
        { title: "🔢 Fibonacci DP", desc: "Fibonacci using DP.", example: "7 => 13", level: "Easy", rate: "88%" },
        { title: "📈 LIS", desc: "Longest increasing subsequence.", example: "[10,9,2,5] => 2", level: "Medium", rate: "61%" },
        { title: "🧠 LCS", desc: "Longest common subsequence.", example: "abcde,ace => 3", level: "Medium", rate: "60%" },
        { title: "✂️ Edit Distance", desc: "Min operations convert string.", example: "cat->cut =>1", level: "Hard", rate: "52%" },
        { title: "🏠 House Robber", desc: "Max loot without adjacent.", example: "[2,7,9,3] => 11", level: "Medium", rate: "69%" },
        { title: "📦 Partition Equal Sum", desc: "Can split equal sum.", example: "[1,5,11,5] => true", level: "Medium", rate: "58%" },
        { title: "🛣️ Unique Paths", desc: "Robot unique paths.", example: "3x2 => 3", level: "Medium", rate: "67%" }
    ],
    Basics: [
        { title: "🐍 Hello World", desc: "Print Hello World.", example: "Input:none Output:Hello World", level: "Easy", rate: "99%" },
        { title: "➕ Add Two Numbers", desc: "Add two numbers.", example: "2 3 => 5", level: "Easy", rate: "98%" },
        { title: "➖ Subtract Numbers", desc: "Subtract two values.", example: "5 2 => 3", level: "Easy", rate: "97%" },
        { title: "✖️ Multiply Numbers", desc: "Multiply two numbers.", example: "3 4 => 12", level: "Easy", rate: "97%" },
        { title: "➗ Divide Numbers", desc: "Divide two numbers.", example: "8 2 => 4", level: "Easy", rate: "96%" },
        { title: "🔢 Even Odd", desc: "Check even or odd.", example: "4 => Even", level: "Easy", rate: "96%" },
        { title: "📏 Largest Number", desc: "Find largest of two.", example: "8 3 => 8", level: "Easy", rate: "95%" },
        { title: "📦 Swap Numbers", desc: "Swap two values.", example: "2 5 => 5 2", level: "Easy", rate: "95%" },
        { title: "🎯 Positive Negative", desc: "Check sign of number.", example: "-4 => Negative", level: "Easy", rate: "94%" },
        { title: "📅 Leap Year", desc: "Check leap year.", example: "2024 => true", level: "Easy", rate: "93%" }
    ],

    "Python_Loops": [
        { title: "🔄 Print 1 to N", desc: "Print numbers 1 to n.", example: "5 => 1 2 3 4 5", level: "Easy", rate: "97%" },
        { title: "🔁 Print N to 1", desc: "Reverse counting.", example: "5 => 5 4 3 2 1", level: "Easy", rate: "96%" },
        { title: "➕ Sum 1 to N", desc: "Find sum using loop.", example: "5 => 15", level: "Easy", rate: "95%" },
        { title: "✖️ Factorial", desc: "Find factorial.", example: "5 => 120", level: "Easy", rate: "94%" },
        { title: "📋 Multiplication Table", desc: "Print table.", example: "2 => 2 4 6", level: "Easy", rate: "93%" },
        { title: "🔢 Count Digits", desc: "Count digits in number.", example: "1234 => 4", level: "Easy", rate: "92%" },
        { title: "🧠 Reverse Number", desc: "Reverse digits.", example: "123 => 321", level: "Easy", rate: "91%" },
        { title: "🎯 Armstrong Number", desc: "Check Armstrong.", example: "153 => true", level: "Medium", rate: "82%" },
        { title: "📌 Prime Number", desc: "Check prime.", example: "7 => true", level: "Easy", rate: "90%" },
        { title: "🌟 Fibonacci Series", desc: "Print fibonacci series.", example: "5 => 0 1 1 2 3", level: "Easy", rate: "89%" }
    ],

    "Python_Functions": [
        { title: "🛠️ Add Function", desc: "Create add function.", example: "add(2,3)=>5", level: "Easy", rate: "97%" },
        { title: "📦 Factorial Function", desc: "Factorial using function.", example: "fact(5)=>120", level: "Easy", rate: "95%" },
        { title: "🔁 Recursive Fibonacci", desc: "Fibonacci with recursion.", example: "fib(6)=>8", level: "Medium", rate: "84%" },
        { title: "📏 Max Function", desc: "Return max value.", example: "max(5,9)=>9", level: "Easy", rate: "96%" },
        { title: "🧠 Prime Function", desc: "Check prime using function.", example: "prime(7)=>true", level: "Easy", rate: "92%" },
        { title: "🔢 Even Odd Function", desc: "Return even/odd.", example: "eo(4)=>Even", level: "Easy", rate: "94%" },
        { title: "✂️ String Reverse Function", desc: "Reverse string function.", example: "rev('abc')=>cba", level: "Easy", rate: "93%" },
        { title: "📚 Lambda Add", desc: "Use lambda for add.", example: "lambda x,y:x+y", level: "Medium", rate: "82%" },
        { title: "📍 Default Arguments", desc: "Use default args.", example: "fun(a=5)", level: "Easy", rate: "91%" },
        { title: "🎯 Variable Arguments", desc: "Use *args.", example: "sum(1,2,3)", level: "Medium", rate: "83%" }
    ],

    "Python_Lists": [
        { title: "📋 Create List", desc: "Create list of values.", example: "[1,2,3]", level: "Easy", rate: "98%" },
        { title: "➕ Append Item", desc: "Append item to list.", example: "[1,2]+3", level: "Easy", rate: "97%" },
        { title: "🗑️ Remove Item", desc: "Remove value from list.", example: "[1,2,3]-2", level: "Easy", rate: "96%" },
        { title: "🔄 Reverse List", desc: "Reverse list.", example: "[1,2,3]=>[3,2,1]", level: "Easy", rate: "95%" },
        { title: "📏 Length List", desc: "Find length.", example: "[1,2,3]=>3", level: "Easy", rate: "95%" },
        { title: "🔍 Search Item", desc: "Search element.", example: "2 in [1,2,3]", level: "Easy", rate: "94%" },
        { title: "📈 Sort List", desc: "Sort ascending.", example: "[3,1,2]=>[1,2,3]", level: "Easy", rate: "94%" },
        { title: "📦 Sum List", desc: "Sum all values.", example: "[1,2,3]=>6", level: "Easy", rate: "93%" },
        { title: "🎯 Max List", desc: "Find maximum item.", example: "[4,9,1]=>9", level: "Easy", rate: "93%" },
        { title: "🧠 Nested List", desc: "Access nested list item.", example: "[[1,2],[3,4]]", level: "Medium", rate: "84%" }
    ],

    "Python_Strings": [
        { title: "🔁 Reverse String", desc: "Reverse string.", example: "hello=>olleh", level: "Easy", rate: "97%" },
        { title: "🪞 Palindrome", desc: "Check palindrome.", example: "madam=>true", level: "Easy", rate: "96%" },
        { title: "🔤 Uppercase", desc: "Convert uppercase.", example: "abc=>ABC", level: "Easy", rate: "95%" },
        { title: "🔡 Lowercase", desc: "Convert lowercase.", example: "ABC=>abc", level: "Easy", rate: "95%" },
        { title: "📏 Length String", desc: "Find string length.", example: "hello=>5", level: "Easy", rate: "96%" },
        { title: "✂️ Slice String", desc: "Slice substring.", example: "hello[1:4]=>ell", level: "Easy", rate: "94%" },
        { title: "📦 Count Vowels", desc: "Count vowels.", example: "apple=>2", level: "Easy", rate: "93%" },
        { title: "🎯 Anagram", desc: "Check anagram.", example: "listen,silent=>true", level: "Medium", rate: "84%" },
        { title: "📍 First Unique", desc: "Find first unique char.", example: "leetcode=>l", level: "Medium", rate: "82%" },
        { title: "🧠 Replace Word", desc: "Replace substring.", example: "hi all=>hello all", level: "Easy", rate: "92%" }
    ],

    "Python_Dictionary": [
        { title: "📖 Create Dictionary", desc: "Create key-value pair.", example: "{'a':1}", level: "Easy", rate: "98%" },
        { title: "🔍 Search Key", desc: "Check key exists.", example: "a in dict", level: "Easy", rate: "97%" },
        { title: "➕ Add Pair", desc: "Add new key.", example: "d['b']=2", level: "Easy", rate: "96%" },
        { title: "🗑️ Delete Key", desc: "Delete key.", example: "del d['a']", level: "Easy", rate: "95%" },
        { title: "📏 Length Dict", desc: "Count items.", example: "len(d)", level: "Easy", rate: "95%" },
        { title: "📚 Keys Print", desc: "Print keys.", example: "d.keys()", level: "Easy", rate: "94%" },
        { title: "📦 Values Print", desc: "Print values.", example: "d.values()", level: "Easy", rate: "94%" },
        { title: "🔄 Loop Dictionary", desc: "Loop key values.", example: "for k,v in d.items()", level: "Easy", rate: "93%" },
        { title: "🎯 Max Value", desc: "Find max value.", example: "{'a':5,'b':8}", level: "Medium", rate: "84%" },
        { title: "🧠 Merge Dict", desc: "Merge dictionaries.", example: "d1|d2", level: "Medium", rate: "82%" }
    ],

    "Python_Linked List": [
        { title: "🔗 Create Node", desc: "Create linked list node.", example: "Node(5)", level: "Easy", rate: "91%" },
        { title: "➕ Insert Front", desc: "Insert at beginning.", example: "5->10", level: "Easy", rate: "90%" },
        { title: "📦 Insert End", desc: "Insert at end.", example: "10->20", level: "Easy", rate: "89%" },
        { title: "🗑️ Delete Node", desc: "Delete node.", example: "remove 10", level: "Easy", rate: "88%" },
        { title: "🔄 Reverse List", desc: "Reverse linked list.", example: "1->2->3", level: "Medium", rate: "80%" },
        { title: "📍 Search Node", desc: "Search value.", example: "find 7", level: "Easy", rate: "87%" },
        { title: "📏 Count Nodes", desc: "Count nodes.", example: "3", level: "Easy", rate: "89%" },
        { title: "🧠 Detect Cycle", desc: "Detect loop.", example: "true", level: "Medium", rate: "76%" },
        { title: "🎯 Middle Node", desc: "Find middle node.", example: "1->2->3=>2", level: "Easy", rate: "85%" },
        { title: "🔁 Merge Lists", desc: "Merge two lists.", example: "1->2 +3->4", level: "Medium", rate: "79%" }
    ],

    "Python_Trees": [
        { title: "🌳 Inorder Traversal", desc: "Traverse inorder.", example: "Left Root Right", level: "Easy", rate: "87%" },
        { title: "🌲 Preorder", desc: "Traverse preorder.", example: "Root Left Right", level: "Easy", rate: "86%" },
        { title: "🌴 Postorder", desc: "Traverse postorder.", example: "Left Right Root", level: "Easy", rate: "85%" },
        { title: "📏 Height Tree", desc: "Find tree height.", example: "3", level: "Easy", rate: "84%" },
        { title: "📍 Level Order", desc: "BFS traversal.", example: "1 2 3", level: "Medium", rate: "78%" },
        { title: "🔍 Search BST", desc: "Search node in BST.", example: "7=>true", level: "Easy", rate: "83%" },
        { title: "➕ Insert BST", desc: "Insert in BST.", example: "insert 5", level: "Easy", rate: "82%" },
        { title: "🗑️ Delete BST", desc: "Delete node.", example: "delete 10", level: "Medium", rate: "72%" },
        { title: "🧠 Balanced Tree", desc: "Check balanced.", example: "true", level: "Medium", rate: "75%" },
        { title: "🏔️ Diameter Tree", desc: "Longest path.", example: "5", level: "Hard", rate: "61%" }
    ],

    "Python_Graphs": [
        { title: "🌐 BFS Graph", desc: "Breadth first search.", example: "0 1 2", level: "Easy", rate: "84%" },
        { title: "🕸️ DFS Graph", desc: "Depth first search.", example: "0 2 1", level: "Easy", rate: "83%" },
        { title: "🔍 Detect Cycle", desc: "Detect cycle.", example: "true", level: "Medium", rate: "74%" },
        { title: "📌 Components", desc: "Count components.", example: "2", level: "Medium", rate: "73%" },
        { title: "🛣️ Shortest Path", desc: "Find shortest path.", example: "0->3=4", level: "Medium", rate: "71%" },
        { title: "🚦 Bipartite", desc: "Check bipartite graph.", example: "true", level: "Medium", rate: "70%" },
        { title: "🧭 Topological Sort", desc: "Sort DAG.", example: "5 4 2", level: "Hard", rate: "62%" },
        { title: "📍 Dijkstra", desc: "Minimum path cost.", example: "7", level: "Hard", rate: "60%" },
        { title: "🏙️ Islands", desc: "Count islands.", example: "3", level: "Medium", rate: "72%" },
        { title: "🔗 Union Find", desc: "Disjoint set.", example: "Merged", level: "Hard", rate: "58%" }
    ],

    "Python_Recursion": [
        { title: "🔢 Factorial", desc: "Find factorial recursively.", example: "5=>120", level: "Easy", rate: "94%" },
        { title: "🧮 Fibonacci", desc: "Nth fibonacci.", example: "6=>8", level: "Easy", rate: "91%" },
        { title: "🔁 Reverse String", desc: "Reverse recursively.", example: "abc=>cba", level: "Easy", rate: "89%" },
        { title: "📚 Sum Digits", desc: "Digit sum.", example: "123=>6", level: "Easy", rate: "90%" },
        { title: "🧠 Power", desc: "x^n recursively.", example: "2^5=>32", level: "Medium", rate: "82%" },
        { title: "🏗️ Tower Hanoi", desc: "Solve Hanoi.", example: "3 disks", level: "Medium", rate: "74%" },
        { title: "🎯 Palindrome", desc: "Check palindrome recursively.", example: "madam=>true", level: "Easy", rate: "87%" },
        { title: "📦 Subsets", desc: "Generate subsets.", example: "[1,2]", level: "Medium", rate: "79%" },
        { title: "📍 Binary Search", desc: "Recursive binary search.", example: "find 7", level: "Easy", rate: "88%" },
        { title: "🪜 Stair Ways", desc: "Ways to climb stairs.", example: "3=>3", level: "Medium", rate: "81%" }
    ],
    "Cpp_Pointers": [
        { title: "👉 Pointer Basics", desc: "Store variable address in pointer.", example: "int *p=&x", level: "Easy", rate: "95%" },
        { title: "➕ Pointer Arithmetic", desc: "Increment pointer position.", example: "p++", level: "Medium", rate: "82%" },
        { title: "🔁 Swap Using Pointer", desc: "Swap two numbers using pointers.", example: "2 5 => 5 2", level: "Easy", rate: "91%" },
        { title: "📦 Double Pointer", desc: "Use pointer to pointer.", example: "int **pp", level: "Medium", rate: "79%" },
        { title: "📏 Array Pointer", desc: "Traverse array using pointer.", example: "*(arr+i)", level: "Easy", rate: "88%" },
        { title: "🔍 Null Pointer", desc: "Check null pointer.", example: "p==NULL", level: "Easy", rate: "90%" },
        { title: "🧠 Function Pointer", desc: "Call function using pointer.", example: "fp()", level: "Hard", rate: "61%" },
        { title: "🗑️ Dangling Pointer", desc: "Understand dangling pointer.", example: "delete p", level: "Medium", rate: "72%" },
        { title: "📌 Void Pointer", desc: "Generic pointer usage.", example: "void *p", level: "Medium", rate: "76%" },
        { title: "🎯 Dynamic Memory", desc: "Allocate using new.", example: "int *p=new int", level: "Easy", rate: "87%" }
    ],

    "Cpp_STL": [
        { title: "📦 Vector Demo", desc: "Use vector container.", example: "vector<int> v", level: "Easy", rate: "96%" },
        { title: "📚 Stack STL", desc: "Use stack container.", example: "stack<int> s", level: "Easy", rate: "94%" },
        { title: "🚶 Queue STL", desc: "Use queue container.", example: "queue<int> q", level: "Easy", rate: "93%" },
        { title: "🔗 List STL", desc: "Use list container.", example: "list<int> l", level: "Easy", rate: "91%" },
        { title: "🗺️ Map STL", desc: "Store key value pairs.", example: "map<int,int>", level: "Easy", rate: "90%" },
        { title: "🎯 Set STL", desc: "Store unique values.", example: "set<int>", level: "Easy", rate: "89%" },
        { title: "🔄 Sort Vector", desc: "Sort vector using sort().", example: "sort(v.begin(),v.end())", level: "Easy", rate: "92%" },
        { title: "📏 Vector Size", desc: "Find size of vector.", example: "v.size()", level: "Easy", rate: "95%" },
        { title: "🗑️ Pop Back", desc: "Remove last element.", example: "v.pop_back()", level: "Easy", rate: "94%" },
        { title: "🧠 Priority Queue", desc: "Use max heap.", example: "priority_queue<int>", level: "Medium", rate: "78%" }
    ],

    "Cpp_Arrays": [
        { title: "➕ Two Sum", desc: "Find pair with target sum.", example: "[2,7,11,15],9=>[0,1]", level: "Easy", rate: "86%" },
        { title: "📈 Maximum Subarray", desc: "Largest contiguous sum.", example: "[-2,1,-3,4,-1,2,1]=>6", level: "Medium", rate: "63%" },
        { title: "🔄 Rotate Array", desc: "Rotate array by k.", example: "[1,2,3,4],2", level: "Medium", rate: "60%" },
        { title: "0️⃣ Move Zeroes", desc: "Move zeros to end.", example: "[0,1,0,3]", level: "Easy", rate: "77%" },
        { title: "💰 Stock Profit", desc: "Max stock profit.", example: "[7,1,5,3,6]=>5", level: "Easy", rate: "81%" },
        { title: "📦 Product Except Self", desc: "Multiply except self.", example: "[1,2,3,4]", level: "Medium", rate: "58%" },
        { title: "🏆 Majority Element", desc: "Find majority item.", example: "[2,2,1,2]", level: "Easy", rate: "83%" },
        { title: "🧮 Missing Number", desc: "Find missing number.", example: "[3,0,1]=>2", level: "Easy", rate: "79%" },
        { title: "🎯 Single Number", desc: "Find single occurring number.", example: "[4,1,2,1,2]=>4", level: "Easy", rate: "84%" },
        { title: "📚 Remove Duplicates", desc: "Remove duplicates sorted array.", example: "[1,1,2]", level: "Easy", rate: "85%" }
    ],

    "Cpp_Strings": [
        { title: "🔁 Reverse String", desc: "Reverse string.", example: "hello=>olleh", level: "Easy", rate: "94%" },
        { title: "🪞 Palindrome", desc: "Check palindrome.", example: "madam=>true", level: "Easy", rate: "92%" },
        { title: "🔤 String Length", desc: "Find length.", example: "hello=>5", level: "Easy", rate: "95%" },
        { title: "✂️ Substring", desc: "Extract substring.", example: "hello.substr(1,3)", level: "Easy", rate: "90%" },
        { title: "🎯 Anagram", desc: "Check anagram.", example: "listen,silent", level: "Medium", rate: "81%" },
        { title: "📌 First Unique", desc: "First unique char.", example: "leetcode=>l", level: "Medium", rate: "79%" },
        { title: "🔍 Find Character", desc: "Search character.", example: "find('e')", level: "Easy", rate: "91%" },
        { title: "📦 Count Vowels", desc: "Count vowels.", example: "apple=>2", level: "Easy", rate: "88%" },
        { title: "🔡 To Lowercase", desc: "Convert lowercase.", example: "ABC=>abc", level: "Easy", rate: "87%" },
        { title: "🔠 To Uppercase", desc: "Convert uppercase.", example: "abc=>ABC", level: "Easy", rate: "87%" }
    ],

    "Cpp_Linked List": [
        { title: "🔗 Create Node", desc: "Create linked list node.", example: "Node(5)", level: "Easy", rate: "91%" },
        { title: "➕ Insert Front", desc: "Insert beginning.", example: "5->10", level: "Easy", rate: "90%" },
        { title: "📦 Insert End", desc: "Insert at end.", example: "10->20", level: "Easy", rate: "89%" },
        { title: "🗑️ Delete Node", desc: "Delete node.", example: "remove 10", level: "Easy", rate: "88%" },
        { title: "🔄 Reverse List", desc: "Reverse linked list.", example: "1->2->3", level: "Medium", rate: "80%" },
        { title: "📍 Search Node", desc: "Search node value.", example: "find 7", level: "Easy", rate: "87%" },
        { title: "📏 Count Nodes", desc: "Count nodes.", example: "3", level: "Easy", rate: "89%" },
        { title: "🧠 Detect Cycle", desc: "Detect loop.", example: "true", level: "Medium", rate: "76%" },
        { title: "🎯 Middle Node", desc: "Find middle node.", example: "1->2->3=>2", level: "Easy", rate: "85%" },
        { title: "🔁 Merge Lists", desc: "Merge two lists.", example: "1->2 +3->4", level: "Medium", rate: "79%" }
    ],

    "Cpp_Stack": [
        { title: "📚 Push Stack", desc: "Push element.", example: "push(5)", level: "Easy", rate: "96%" },
        { title: "📤 Pop Stack", desc: "Pop top element.", example: "pop()", level: "Easy", rate: "95%" },
        { title: "👀 Peek Stack", desc: "Top element.", example: "top()", level: "Easy", rate: "94%" },
        { title: "📏 Stack Size", desc: "Find size.", example: "3", level: "Easy", rate: "93%" },
        { title: "🗑️ Empty Stack", desc: "Check empty.", example: "true", level: "Easy", rate: "97%" },
        { title: "🎯 Valid Parentheses", desc: "Check brackets.", example: "()[]{}", level: "Easy", rate: "88%" },
        { title: "📦 Min Stack", desc: "Minimum stack.", example: "getMin()", level: "Medium", rate: "76%" },
        { title: "🔄 Reverse Stack", desc: "Reverse stack.", example: "1 2 3", level: "Medium", rate: "72%" },
        { title: "🧠 Sort Stack", desc: "Sort stack.", example: "3 1 2", level: "Medium", rate: "70%" },
        { title: "📍 Next Greater", desc: "Next greater element.", example: "[2,1,3]", level: "Medium", rate: "74%" }
    ],

    "Cpp_Queue": [
        { title: "🚶 Enqueue", desc: "Insert queue item.", example: "enqueue(5)", level: "Easy", rate: "95%" },
        { title: "📤 Dequeue", desc: "Remove front item.", example: "dequeue()", level: "Easy", rate: "94%" },
        { title: "👀 Front Queue", desc: "Front element.", example: "front()", level: "Easy", rate: "93%" },
        { title: "📏 Queue Size", desc: "Find queue size.", example: "3", level: "Easy", rate: "92%" },
        { title: "🗑️ Empty Queue", desc: "Check empty.", example: "true", level: "Easy", rate: "97%" },
        { title: "🔄 Circular Queue", desc: "Implement circular queue.", example: "size=5", level: "Medium", rate: "78%" },
        { title: "🧠 Queue Using Stack", desc: "Use two stacks.", example: "push pop", level: "Medium", rate: "74%" },
        { title: "📚 Reverse Queue", desc: "Reverse queue.", example: "1 2 3", level: "Medium", rate: "71%" },
        { title: "🚦 Priority Queue", desc: "Highest priority first.", example: "9 first", level: "Medium", rate: "73%" },
        { title: "📍 Generate Binary", desc: "Generate binary nums.", example: "1 10 11", level: "Medium", rate: "69%" }
    ],

    "Cpp_Trees": [
        { title: "🌳 Inorder", desc: "Traverse inorder.", example: "L R", level: "Easy", rate: "87%" },
        { title: "🌲 Preorder", desc: "Traverse preorder.", example: "R L", level: "Easy", rate: "86%" },
        { title: "🌴 Postorder", desc: "Traverse postorder.", example: "L R Root", level: "Easy", rate: "85%" },
        { title: "📏 Height Tree", desc: "Find height.", example: "3", level: "Easy", rate: "84%" },
        { title: "📍 Level Order", desc: "BFS traversal.", example: "1 2 3", level: "Medium", rate: "78%" },
        { title: "🔍 Search BST", desc: "Search key.", example: "7=>true", level: "Easy", rate: "83%" },
        { title: "➕ Insert BST", desc: "Insert node.", example: "insert 5", level: "Easy", rate: "82%" },
        { title: "🗑️ Delete BST", desc: "Delete node.", example: "delete 10", level: "Medium", rate: "72%" },
        { title: "🧠 Balanced Tree", desc: "Check balanced.", example: "true", level: "Medium", rate: "75%" },
        { title: "🏔️ Diameter", desc: "Longest path.", example: "5", level: "Hard", rate: "61%" }
    ],

    "Cpp_Graphs": [
        { title: "🌐 BFS Graph", desc: "Breadth first traversal.", example: "0 1 2", level: "Easy", rate: "84%" },
        { title: "🕸️ DFS Graph", desc: "Depth first traversal.", example: "0 2 1", level: "Easy", rate: "83%" },
        { title: "🔍 Detect Cycle", desc: "Detect cycle.", example: "true", level: "Medium", rate: "74%" },
        { title: "📌 Components", desc: "Count components.", example: "2", level: "Medium", rate: "73%" },
        { title: "🛣️ Shortest Path", desc: "Shortest path.", example: "0->3=4", level: "Medium", rate: "71%" },
        { title: "🚦 Bipartite", desc: "Check bipartite.", example: "true", level: "Medium", rate: "70%" },
        { title: "🧭 Topological Sort", desc: "Sort DAG.", example: "5 4 2", level: "Hard", rate: "62%" },
        { title: "📍 Dijkstra", desc: "Min cost path.", example: "7", level: "Hard", rate: "60%" },
        { title: "🏙️ Islands", desc: "Count islands.", example: "3", level: "Medium", rate: "72%" },
        { title: "🔗 Union Find", desc: "Disjoint set.", example: "Merged", level: "Hard", rate: "58%" }
    ],

    "Cpp_DP": [
        { title: "🪜 Climbing Stairs", desc: "Ways to climb stairs.", example: "4=>5", level: "Easy", rate: "86%" },
        { title: "💰 Coin Change", desc: "Minimum coins.", example: "11=>3", level: "Medium", rate: "74%" },
        { title: "🎒 Knapsack", desc: "Max value bag.", example: "W=10", level: "Hard", rate: "63%" },
        { title: "🔢 Fibonacci DP", desc: "DP fibonacci.", example: "7=>13", level: "Easy", rate: "90%" },
        { title: "📈 LIS", desc: "Longest increasing subsequence.", example: "[10,9,2]", level: "Medium", rate: "69%" },
        { title: "🧠 LCS", desc: "Longest common subsequence.", example: "abcde,ace", level: "Medium", rate: "67%" },
        { title: "✂️ Edit Distance", desc: "Min edits.", example: "cat->cut", level: "Hard", rate: "58%" },
        { title: "🏠 House Robber", desc: "Max loot.", example: "[2,7,9]", level: "Medium", rate: "73%" },
        { title: "📦 Partition Sum", desc: "Equal partition possible.", example: "true", level: "Medium", rate: "64%" },
        { title: "🛣️ Unique Paths", desc: "Grid unique paths.", example: "3x2=>3", level: "Medium", rate: "71%" }
    ],
    HTML: [
        { title: "🧾 Login Form", desc: "Create login form using HTML.", example: "email + password fields", level: "Easy", rate: "97%" },
        { title: "📋 Registration Form", desc: "Create signup form.", example: "name email password", level: "Easy", rate: "96%" },
        { title: "📊 HTML Table", desc: "Create student marks table.", example: "rows and columns", level: "Easy", rate: "95%" },
        { title: "🖼️ Image Gallery", desc: "Display images using img tag.", example: "3 images", level: "Easy", rate: "94%" },
        { title: "🔗 Navigation Bar", desc: "Create navbar with links.", example: "Home About Contact", level: "Easy", rate: "93%" },
        { title: "📝 Resume Page", desc: "Design resume page.", example: "name skills contact", level: "Easy", rate: "92%" },
        { title: "🎥 Video Embed", desc: "Embed video in page.", example: "video tag", level: "Easy", rate: "91%" },
        { title: "📍 Google Map Embed", desc: "Embed map iframe.", example: "location map", level: "Easy", rate: "90%" },
        { title: "📦 Semantic Tags", desc: "Use header main footer.", example: "semantic layout", level: "Easy", rate: "89%" },
        { title: "🛒 Product Card", desc: "Create product card layout.", example: "image price button", level: "Easy", rate: "88%" }
    ],

    CSS: [
        { title: "🎨 Center Div", desc: "Center div using flexbox.", example: "justify-content:center", level: "Easy", rate: "96%" },
        { title: "📱 Responsive Card", desc: "Responsive card with media query.", example: "mobile layout", level: "Easy", rate: "95%" },
        { title: "🌈 Gradient Background", desc: "Apply linear gradient.", example: "background:linear-gradient()", level: "Easy", rate: "94%" },
        { title: "🖱️ Button Hover", desc: "Add hover effects.", example: "button:hover", level: "Easy", rate: "93%" },
        { title: "📦 Grid Layout", desc: "Use CSS grid.", example: "3 column grid", level: "Easy", rate: "92%" },
        { title: "🔄 Animation Bounce", desc: "Bounce animation using keyframes.", example: "@keyframes bounce", level: "Medium", rate: "84%" },
        { title: "🧾 Navbar Design", desc: "Style navigation bar.", example: "dark navbar", level: "Easy", rate: "91%" },
        { title: "🪟 Modal Popup", desc: "Design popup modal.", example: "center popup", level: "Medium", rate: "82%" },
        { title: "📋 Pricing Cards", desc: "Create pricing section.", example: "basic pro premium", level: "Easy", rate: "89%" },
        { title: "🌙 Dark Theme", desc: "Create dark mode UI.", example: "black background", level: "Easy", rate: "90%" }
    ],

    JavaScript: [
        { title: "⚡ Counter App", desc: "Increment decrement counter.", example: "+1 -1", level: "Easy", rate: "95%" },
        { title: "📋 Todo App", desc: "Add remove todo items.", example: "task list", level: "Easy", rate: "94%" },
        { title: "🕒 Digital Clock", desc: "Live current clock.", example: "10:25:30", level: "Easy", rate: "93%" },
        { title: "🧮 Calculator", desc: "Simple calculator.", example: "2+3=5", level: "Easy", rate: "92%" },
        { title: "🎯 Guess Number", desc: "Guess random number game.", example: "1 to 10", level: "Easy", rate: "91%" },
        { title: "🖼️ Image Slider", desc: "Automatic image slider.", example: "next prev", level: "Medium", rate: "84%" },
        { title: "🔍 Search Filter", desc: "Filter list items.", example: "search products", level: "Easy", rate: "90%" },
        { title: "📦 Local Storage Notes", desc: "Store notes in localStorage.", example: "save notes", level: "Medium", rate: "83%" },
        { title: "📍 Form Validation", desc: "Validate login form.", example: "required fields", level: "Easy", rate: "89%" },
        { title: "🎲 Dice Game", desc: "Random dice roll game.", example: "1 to 6", level: "Easy", rate: "88%" }
    ],

    React: [
        { title: "⚛️ Counter Component", desc: "Counter using useState.", example: "count++", level: "Easy", rate: "91%" },
        { title: "📋 Todo Component", desc: "Todo app in React.", example: "add task", level: "Easy", rate: "90%" },
        { title: "🔍 Search Filter", desc: "Search users list.", example: "filter names", level: "Easy", rate: "89%" },
        { title: "🌙 Theme Toggle", desc: "Dark light mode.", example: "toggle theme", level: "Easy", rate: "88%" },
        { title: "📦 Product Cards", desc: "Map products cards.", example: "cards list", level: "Easy", rate: "87%" },
        { title: "📝 Form Component", desc: "Controlled form inputs.", example: "name email", level: "Medium", rate: "82%" },
        { title: "🕒 Clock App", desc: "Live clock using useEffect.", example: "time updates", level: "Medium", rate: "81%" },
        { title: "🛒 Cart System", desc: "Shopping cart state.", example: "add remove item", level: "Medium", rate: "80%" },
        { title: "📊 Dashboard UI", desc: "Stats dashboard page.", example: "cards charts", level: "Medium", rate: "79%" },
        { title: "🌐 API Fetch Users", desc: "Fetch API data in React.", example: "users list", level: "Medium", rate: "78%" }
    ],

    "Node.js": [
        { title: "🟢 Basic Server", desc: "Create HTTP server.", example: "http.createServer()", level: "Easy", rate: "92%" },
        { title: "📁 Read File", desc: "Read file using fs.", example: "fs.readFile()", level: "Easy", rate: "91%" },
        { title: "📝 Write File", desc: "Write file content.", example: "fs.writeFile()", level: "Easy", rate: "90%" },
        { title: "📦 JSON Server", desc: "Return JSON response.", example: "res.end(JSON)", level: "Easy", rate: "89%" },
        { title: "🔄 Event Emitter", desc: "Use events module.", example: "emit/on", level: "Medium", rate: "82%" },
        { title: "📍 Path Module", desc: "Use path.join.", example: "folder/file", level: "Easy", rate: "88%" },
        { title: "🧠 OS Module", desc: "Get system info.", example: "os.platform()", level: "Easy", rate: "87%" },
        { title: "📤 Stream Read", desc: "Read stream file.", example: "createReadStream", level: "Medium", rate: "80%" },
        { title: "📥 Stream Write", desc: "Write stream file.", example: "createWriteStream", level: "Medium", rate: "79%" },
        { title: "🔐 Environment Variables", desc: "Use .env variables.", example: "PORT=3000", level: "Medium", rate: "78%" }
    ],

    "Express.js": [
        { title: "🚏 GET Route", desc: "Create GET route.", example: "app.get()", level: "Easy", rate: "93%" },
        { title: "📦 POST Route", desc: "Create POST route.", example: "app.post()", level: "Easy", rate: "92%" },
        { title: "🗑️ DELETE Route", desc: "Create delete route.", example: "app.delete()", level: "Easy", rate: "90%" },
        { title: "✏️ PUT Route", desc: "Create update route.", example: "app.put()", level: "Easy", rate: "89%" },
        { title: "📁 Static Files", desc: "Serve public folder.", example: "express.static()", level: "Easy", rate: "88%" },
        { title: "🧾 Middleware", desc: "Use custom middleware.", example: "next()", level: "Medium", rate: "82%" },
        { title: "🔐 Login API", desc: "Login route with body data.", example: "username password", level: "Medium", rate: "81%" },
        { title: "📍 Params Route", desc: "Use route params.", example: "/user/:id", level: "Easy", rate: "87%" },
        { title: "🔎 Query Route", desc: "Use query strings.", example: "?name=teja", level: "Easy", rate: "86%" },
        { title: "❌ 404 Handler", desc: "Create not found route.", example: "Page not found", level: "Medium", rate: "79%" }
    ],

    MongoDB: [
        { title: "🍃 Insert Document", desc: "Insert data into collection.", example: "insertOne()", level: "Easy", rate: "91%" },
        { title: "🔍 Find Document", desc: "Find records.", example: "find()", level: "Easy", rate: "90%" },
        { title: "✏️ Update Document", desc: "Update record.", example: "updateOne()", level: "Easy", rate: "89%" },
        { title: "🗑️ Delete Document", desc: "Delete record.", example: "deleteOne()", level: "Easy", rate: "88%" },
        { title: "📦 Find By ID", desc: "Search using _id.", example: "findById()", level: "Easy", rate: "87%" },
        { title: "📊 Sort Records", desc: "Sort ascending descending.", example: "sort()", level: "Easy", rate: "86%" },
        { title: "📏 Limit Records", desc: "Limit results.", example: "limit(5)", level: "Easy", rate: "85%" },
        { title: "🔗 Mongoose Schema", desc: "Create schema model.", example: "new Schema()", level: "Medium", rate: "82%" },
        { title: "🧠 Populate Data", desc: "Use populate relation.", example: "user posts", level: "Medium", rate: "79%" },
        { title: "📚 Aggregate", desc: "Aggregation pipeline.", example: "group sum", level: "Hard", rate: "71%" }
    ],

    SQL: [
        { title: "🗃️ Select Query", desc: "Use SELECT statement.", example: "SELECT * FROM users", level: "Easy", rate: "96%" },
        { title: "➕ Insert Query", desc: "Insert row.", example: "INSERT INTO users", level: "Easy", rate: "95%" },
        { title: "✏️ Update Query", desc: "Update row.", example: "UPDATE users SET", level: "Easy", rate: "94%" },
        { title: "🗑️ Delete Query", desc: "Delete row.", example: "DELETE FROM users", level: "Easy", rate: "93%" },
        { title: "🔗 INNER JOIN", desc: "Join two tables.", example: "users JOIN orders", level: "Medium", rate: "84%" },
        { title: "📊 GROUP BY", desc: "Group rows.", example: "GROUP BY city", level: "Medium", rate: "83%" },
        { title: "📏 COUNT Rows", desc: "Count records.", example: "COUNT(*)", level: "Easy", rate: "92%" },
        { title: "🔍 WHERE Clause", desc: "Filter rows.", example: "WHERE age>18", level: "Easy", rate: "91%" },
        { title: "📈 ORDER BY", desc: "Sort rows.", example: "ORDER BY marks DESC", level: "Easy", rate: "90%" },
        { title: "🧠 Subquery", desc: "Use nested query.", example: "SELECT ... (SELECT)", level: "Hard", rate: "76%" }
    ],

    API: [
        { title: "🌐 Fetch API", desc: "Fetch data from API.", example: "fetch(url)", level: "Easy", rate: "93%" },
        { title: "📦 JSON Parse", desc: "Read JSON response.", example: "response.json()", level: "Easy", rate: "92%" },
        { title: "📤 POST Request", desc: "Send POST data.", example: "method:'POST'", level: "Easy", rate: "90%" },
        { title: "🔐 Auth Token", desc: "Send bearer token.", example: "Authorization header", level: "Medium", rate: "81%" },
        { title: "🔄 Async Await Fetch", desc: "Use async await.", example: "await fetch()", level: "Easy", rate: "89%" },
        { title: "❌ Error Handling", desc: "Catch API errors.", example: "try catch", level: "Easy", rate: "88%" },
        { title: "📍 Query Params", desc: "Send query params.", example: "?page=1", level: "Easy", rate: "87%" },
        { title: "🧠 REST API Design", desc: "Design REST endpoints.", example: "GET POST PUT DELETE", level: "Medium", rate: "80%" },
        { title: "📚 Axios Request", desc: "Use axios library.", example: "axios.get()", level: "Medium", rate: "79%" },
        { title: "⏱️ Loading Spinner", desc: "Show loading state.", example: "Loading...", level: "Easy", rate: "86%" }
    ],

    "Responsive Design": [
        { title: "📱 Media Query", desc: "Use media query.", example: "@media max-width", level: "Easy", rate: "94%" },
        { title: "📦 Responsive Grid", desc: "Grid for mobile desktop.", example: "repeat(auto-fit)", level: "Easy", rate: "92%" },
        { title: "🧾 Mobile Navbar", desc: "Hamburger navbar.", example: "menu icon", level: "Easy", rate: "91%" },
        { title: "🖼️ Responsive Image", desc: "Flexible images.", example: "max-width:100%", level: "Easy", rate: "90%" },
        { title: "📋 Responsive Cards", desc: "Cards resize on screen.", example: "1 col mobile", level: "Easy", rate: "89%" },
        { title: "🌐 Tablet Layout", desc: "Tablet specific design.", example: "768px", level: "Easy", rate: "88%" },
        { title: "🖥️ Desktop Layout", desc: "Large screen layout.", example: "1200px", level: "Easy", rate: "87%" },
        { title: "🔄 Flex Wrap", desc: "Wrap items responsive.", example: "flex-wrap:wrap", level: "Easy", rate: "86%" },
        { title: "🎯 Fluid Typography", desc: "Responsive font sizes.", example: "clamp()", level: "Medium", rate: "79%" },
        { title: "🌙 Responsive Sidebar", desc: "Sidebar collapses mobile.", example: "hide on mobile", level: "Medium", rate: "78%" }
    ] 

};

=======
const questions = {

    OOP: [
        { title: "🏛️ Class and Object", desc: "Create a class Student and make object.", example: "Input: Student s1\nOutput:Object created", level: "Easy", rate: "91%" },
        { title: "👨‍👦 Inheritance", desc: "Dog inherits Animal properties.", example: "Input: Dog extends Animal\nOutput:Inherited", level: "Easy", rate: "88%" },
        { title: "🎭 Method Overriding", desc: "Override parent method.", example: "Input: run()\nOutput:Child run", level: "Medium", rate: "73%" },
        { title: "➕ Method Overloading", desc: "Same method different parameters.", example: "sum(2,3)\nOutput:5", level: "Easy", rate: "84%" },
        { title: "🔒 Encapsulation", desc: "Use private variables with getter setter.", example: "name=Teja\nOutput:Teja", level: "Easy", rate: "82%" },
        { title: "🧬 Abstraction", desc: "Use abstract class Vehicle.", example: "Car extends Vehicle", level: "Medium", rate: "71%" },
        { title: "📦 Interface", desc: "Implement interface Runnable.", example: "run()\nOutput:Running", level: "Medium", rate: "70%" },
        { title: "🛠️ Constructor", desc: "Create default constructor.", example: "Student()\nOutput:Called", level: "Easy", rate: "87%" },
        { title: "🎯 Static Keyword", desc: "Use static variable count.", example: "count=2", level: "Easy", rate: "80%" },
        { title: "🧩 Final Keyword", desc: "Declare final variable.", example: "final int x=10", level: "Easy", rate: "83%" }
    ],

    Arrays: [
        { title: "➕ Two Sum", desc: "Find two indices with target sum.", example: "[2,7,11,15],9 => [0,1]", level: "Easy", rate: "86%" },
        { title: "📈 Maximum Subarray", desc: "Largest contiguous sum.", example: "[-2,1,-3,4,-1,2,1] => 6", level: "Medium", rate: "63%" },
        { title: "🔄 Rotate Array", desc: "Rotate array by k steps.", example: "[1,2,3,4],2 => [3,4,1,2]", level: "Medium", rate: "60%" },
        { title: "0️⃣ Move Zeroes", desc: "Move zeros to end.", example: "[0,1,0,3] => [1,3,0,0]", level: "Easy", rate: "77%" },
        { title: "💰 Stock Profit", desc: "Find max profit.", example: "[7,1,5,3,6] => 5", level: "Easy", rate: "81%" },
        { title: "📦 Product Except Self", desc: "Multiply except self.", example: "[1,2,3,4] => [24,12,8,6]", level: "Medium", rate: "58%" },
        { title: "🏆 Majority Element", desc: "Find majority element.", example: "[2,2,1,2] => 2", level: "Easy", rate: "83%" },
        { title: "🧮 Missing Number", desc: "Find missing number.", example: "[3,0,1] => 2", level: "Easy", rate: "79%" },
        { title: "🎯 Single Number", desc: "Find single occurring number.", example: "[4,1,2,1,2] => 4", level: "Easy", rate: "84%" },
        { title: "📚 Remove Duplicates", desc: "Remove duplicates sorted array.", example: "[1,1,2] => [1,2]", level: "Easy", rate: "85%" }
    ],

    Strings: [
        { title: "🔁 Reverse String", desc: "Reverse given string.", example: "hello => olleh", level: "Easy", rate: "84%" },
        { title: "🪞 Palindrome", desc: "Check palindrome string.", example: "madam => true", level: "Easy", rate: "82%" },
        { title: "🔤 Longest Prefix", desc: "Find common prefix.", example: "flower,flow => fl", level: "Easy", rate: "78%" },
        { title: "📦 String Compression", desc: "Compress repeated chars.", example: "aaabb => a3b2", level: "Medium", rate: "59%" },
        { title: "🧠 Unique Substring", desc: "Longest substring no repeat.", example: "abcabcbb => 3", level: "Medium", rate: "63%" },
        { title: "🔍 Substring Search", desc: "Find substring index.", example: "hello,ll => 2", level: "Easy", rate: "76%" },
        { title: "🎯 Valid Anagram", desc: "Check if anagram.", example: "listen,silent => true", level: "Easy", rate: "83%" },
        { title: "📌 First Unique Char", desc: "Find first unique char.", example: "leetcode => l", level: "Easy", rate: "79%" },
        { title: "✂️ Reverse Words", desc: "Reverse sentence words.", example: "I am Teja => Teja am I", level: "Easy", rate: "80%" },
        { title: "📈 Character Frequency", desc: "Count characters.", example: "aab => a2b1", level: "Easy", rate: "87%" }
    ],

    "Linked List": [
        { title: "🔗 Reverse Linked List", desc: "Reverse linked list.", example: "1->2->3 => 3->2->1", level: "Easy", rate: "84%" },
        { title: "📍 Middle Node", desc: "Find middle node.", example: "1->2->3->4->5 => 3", level: "Easy", rate: "82%" },
        { title: "❌ Detect Cycle", desc: "Detect cycle in list.", example: "Output:true", level: "Easy", rate: "81%" },
        { title: "🗑️ Delete Node", desc: "Delete given node.", example: "Delete 5", level: "Easy", rate: "79%" },
        { title: "➕ Merge Lists", desc: "Merge two sorted lists.", example: "1->2 +1->3", level: "Easy", rate: "85%" },
        { title: "🔁 Rotate List", desc: "Rotate linked list.", example: "1->2->3->4,2", level: "Medium", rate: "67%" },
        { title: "📦 Remove Nth Node", desc: "Remove nth from end.", example: "1->2->3,2", level: "Medium", rate: "69%" },
        { title: "🧠 Palindrome List", desc: "Check palindrome list.", example: "1->2->1 => true", level: "Easy", rate: "77%" },
        { title: "🔄 Swap Pairs", desc: "Swap nodes pairwise.", example: "1->2->3->4", level: "Medium", rate: "65%" },
        { title: "📏 Length List", desc: "Find length of list.", example: "1->2->3 => 3", level: "Easy", rate: "90%" }
    ],

    Stack: [
        { title: "📚 Valid Parentheses", desc: "Check balanced brackets.", example: "()[]{} => true", level: "Easy", rate: "88%" },
        { title: "📦 Min Stack", desc: "Design min stack.", example: "push,pop,getMin", level: "Medium", rate: "63%" },
        { title: "🎯 Next Greater", desc: "Find next greater element.", example: "[2,1,3]", level: "Medium", rate: "67%" },
        { title: "🧾 Evaluate Postfix", desc: "Evaluate postfix expression.", example: "23+ => 5", level: "Easy", rate: "79%" },
        { title: "📏 Stack Size", desc: "Find stack size.", example: "3", level: "Easy", rate: "91%" },
        { title: "🗑️ Delete Middle", desc: "Delete middle item.", example: "1 2 3", level: "Medium", rate: "58%" },
        { title: "🔄 Sort Stack", desc: "Sort stack.", example: "3 1 2", level: "Medium", rate: "60%" },
        { title: "📤 Push", desc: "Push element.", example: "push(5)", level: "Easy", rate: "96%" },
        { title: "📥 Pop", desc: "Pop element.", example: "pop()", level: "Easy", rate: "95%" },
        { title: "👀 Peek", desc: "Get top item.", example: "peek()", level: "Easy", rate: "94%" }
    ],
    Queue: [
        { title: "🚶 Queue Enqueue", desc: "Insert element into queue.", example: "enqueue(5)", level: "Easy", rate: "95%" },
        { title: "📤 Queue Dequeue", desc: "Remove front element.", example: "dequeue()", level: "Easy", rate: "94%" },
        { title: "👀 Front Element", desc: "Find front of queue.", example: "front()", level: "Easy", rate: "93%" },
        { title: "📏 Queue Size", desc: "Find queue size.", example: "3", level: "Easy", rate: "92%" },
        { title: "🔄 Circular Queue", desc: "Implement circular queue.", example: "size=5", level: "Medium", rate: "68%" },
        { title: "🧠 Queue Using Stack", desc: "Implement queue using stacks.", example: "push pop", level: "Medium", rate: "66%" },
        { title: "📚 Generate Binary Numbers", desc: "Use queue to generate numbers.", example: "1 10 11", level: "Medium", rate: "61%" },
        { title: "🚦 Priority Queue", desc: "Highest priority served first.", example: "5,2,9 => 9", level: "Medium", rate: "64%" },
        { title: "🚌 Reverse Queue", desc: "Reverse queue elements.", example: "1 2 3 => 3 2 1", level: "Medium", rate: "62%" },
        { title: "❌ Empty Queue", desc: "Check queue empty.", example: "true", level: "Easy", rate: "97%" }
    ],

    Trees: [
        { title: "🌳 Inorder Traversal", desc: "Traverse binary tree inorder.", example: "Left Root Right", level: "Easy", rate: "85%" },
        { title: "🌲 Preorder Traversal", desc: "Traverse preorder.", example: "Root Left Right", level: "Easy", rate: "84%" },
        { title: "🌴 Postorder Traversal", desc: "Traverse postorder.", example: "Left Right Root", level: "Easy", rate: "83%" },
        { title: "📏 Tree Height", desc: "Find height of tree.", example: "Output:3", level: "Easy", rate: "81%" },
        { title: "📍 Level Order", desc: "BFS traversal.", example: "1 2 3", level: "Medium", rate: "72%" },
        { title: "🧠 Balanced Tree", desc: "Check if balanced.", example: "true", level: "Medium", rate: "68%" },
        { title: "🔍 Search BST", desc: "Search key in BST.", example: "Find 7 => true", level: "Easy", rate: "82%" },
        { title: "➕ Insert BST", desc: "Insert node in BST.", example: "Insert 5", level: "Easy", rate: "80%" },
        { title: "🗑️ Delete BST", desc: "Delete node from BST.", example: "Delete 10", level: "Medium", rate: "61%" },
        { title: "🏔️ Diameter Tree", desc: "Longest path in tree.", example: "Output:5", level: "Hard", rate: "48%" }
    ],

    Graphs: [
        { title: "🌐 BFS Graph", desc: "Breadth first traversal.", example: "0 1 2 3", level: "Easy", rate: "79%" },
        { title: "🕸️ DFS Graph", desc: "Depth first traversal.", example: "0 2 3 1", level: "Easy", rate: "78%" },
        { title: "🔍 Detect Cycle", desc: "Detect graph cycle.", example: "true", level: "Medium", rate: "67%" },
        { title: "🛣️ Shortest Path", desc: "Find shortest path.", example: "0->3 = 4", level: "Medium", rate: "65%" },
        { title: "🏙️ Number of Islands", desc: "Count islands in grid.", example: "Output:3", level: "Medium", rate: "69%" },
        { title: "📌 Connected Components", desc: "Count components.", example: "2", level: "Medium", rate: "66%" },
        { title: "🧭 Topological Sort", desc: "Sort DAG nodes.", example: "5 4 2 3", level: "Hard", rate: "55%" },
        { title: "🚦 Bipartite Graph", desc: "Check bipartite graph.", example: "true", level: "Medium", rate: "63%" },
        { title: "📍 Dijkstra", desc: "Minimum path cost.", example: "Cost=7", level: "Hard", rate: "52%" },
        { title: "🔗 Union Find", desc: "Disjoint set operations.", example: "Merged", level: "Hard", rate: "50%" }
    ],

    Recursion: [
        { title: "🔢 Factorial", desc: "Find factorial using recursion.", example: "5 => 120", level: "Easy", rate: "91%" },
        { title: "🧮 Fibonacci", desc: "Nth fibonacci.", example: "6 => 8", level: "Easy", rate: "87%" },
        { title: "🏗️ Tower of Hanoi", desc: "Solve Hanoi puzzle.", example: "3 disks", level: "Medium", rate: "71%" },
        { title: "🔁 Reverse String", desc: "Reverse string recursively.", example: "abc => cba", level: "Easy", rate: "82%" },
        { title: "📚 Sum of Digits", desc: "Find digit sum.", example: "123 => 6", level: "Easy", rate: "86%" },
        { title: "🧠 Power Function", desc: "Find x^n recursively.", example: "2^5 => 32", level: "Medium", rate: "74%" },
        { title: "📍 Binary Search", desc: "Recursive binary search.", example: "Find 7", level: "Easy", rate: "84%" },
        { title: "🎯 Palindrome", desc: "Check palindrome recursively.", example: "madam => true", level: "Easy", rate: "80%" },
        { title: "🪜 Climbing Stairs", desc: "Ways to climb stairs.", example: "3 => 3", level: "Medium", rate: "72%" },
        { title: "📦 Subsets", desc: "Generate all subsets.", example: "[1,2]", level: "Medium", rate: "66%" }
    ],

    "Dynamic Programming": [
        { title: "🪜 Climbing Stairs", desc: "Ways to climb n stairs.", example: "4 => 5", level: "Easy", rate: "83%" },
        { title: "💰 Coin Change", desc: "Minimum coins needed.", example: "[1,2,5],11 => 3", level: "Medium", rate: "64%" },
        { title: "🎒 Knapsack", desc: "Max value in bag.", example: "W=10", level: "Hard", rate: "55%" },
        { title: "🔢 Fibonacci DP", desc: "Fibonacci using DP.", example: "7 => 13", level: "Easy", rate: "88%" },
        { title: "📈 LIS", desc: "Longest increasing subsequence.", example: "[10,9,2,5] => 2", level: "Medium", rate: "61%" },
        { title: "🧠 LCS", desc: "Longest common subsequence.", example: "abcde,ace => 3", level: "Medium", rate: "60%" },
        { title: "✂️ Edit Distance", desc: "Min operations convert string.", example: "cat->cut =>1", level: "Hard", rate: "52%" },
        { title: "🏠 House Robber", desc: "Max loot without adjacent.", example: "[2,7,9,3] => 11", level: "Medium", rate: "69%" },
        { title: "📦 Partition Equal Sum", desc: "Can split equal sum.", example: "[1,5,11,5] => true", level: "Medium", rate: "58%" },
        { title: "🛣️ Unique Paths", desc: "Robot unique paths.", example: "3x2 => 3", level: "Medium", rate: "67%" }
    ],
    Basics: [
        { title: "🐍 Hello World", desc: "Print Hello World.", example: "Input:none Output:Hello World", level: "Easy", rate: "99%" },
        { title: "➕ Add Two Numbers", desc: "Add two numbers.", example: "2 3 => 5", level: "Easy", rate: "98%" },
        { title: "➖ Subtract Numbers", desc: "Subtract two values.", example: "5 2 => 3", level: "Easy", rate: "97%" },
        { title: "✖️ Multiply Numbers", desc: "Multiply two numbers.", example: "3 4 => 12", level: "Easy", rate: "97%" },
        { title: "➗ Divide Numbers", desc: "Divide two numbers.", example: "8 2 => 4", level: "Easy", rate: "96%" },
        { title: "🔢 Even Odd", desc: "Check even or odd.", example: "4 => Even", level: "Easy", rate: "96%" },
        { title: "📏 Largest Number", desc: "Find largest of two.", example: "8 3 => 8", level: "Easy", rate: "95%" },
        { title: "📦 Swap Numbers", desc: "Swap two values.", example: "2 5 => 5 2", level: "Easy", rate: "95%" },
        { title: "🎯 Positive Negative", desc: "Check sign of number.", example: "-4 => Negative", level: "Easy", rate: "94%" },
        { title: "📅 Leap Year", desc: "Check leap year.", example: "2024 => true", level: "Easy", rate: "93%" }
    ],

    "Python_Loops": [
        { title: "🔄 Print 1 to N", desc: "Print numbers 1 to n.", example: "5 => 1 2 3 4 5", level: "Easy", rate: "97%" },
        { title: "🔁 Print N to 1", desc: "Reverse counting.", example: "5 => 5 4 3 2 1", level: "Easy", rate: "96%" },
        { title: "➕ Sum 1 to N", desc: "Find sum using loop.", example: "5 => 15", level: "Easy", rate: "95%" },
        { title: "✖️ Factorial", desc: "Find factorial.", example: "5 => 120", level: "Easy", rate: "94%" },
        { title: "📋 Multiplication Table", desc: "Print table.", example: "2 => 2 4 6", level: "Easy", rate: "93%" },
        { title: "🔢 Count Digits", desc: "Count digits in number.", example: "1234 => 4", level: "Easy", rate: "92%" },
        { title: "🧠 Reverse Number", desc: "Reverse digits.", example: "123 => 321", level: "Easy", rate: "91%" },
        { title: "🎯 Armstrong Number", desc: "Check Armstrong.", example: "153 => true", level: "Medium", rate: "82%" },
        { title: "📌 Prime Number", desc: "Check prime.", example: "7 => true", level: "Easy", rate: "90%" },
        { title: "🌟 Fibonacci Series", desc: "Print fibonacci series.", example: "5 => 0 1 1 2 3", level: "Easy", rate: "89%" }
    ],

    "Python_Functions": [
        { title: "🛠️ Add Function", desc: "Create add function.", example: "add(2,3)=>5", level: "Easy", rate: "97%" },
        { title: "📦 Factorial Function", desc: "Factorial using function.", example: "fact(5)=>120", level: "Easy", rate: "95%" },
        { title: "🔁 Recursive Fibonacci", desc: "Fibonacci with recursion.", example: "fib(6)=>8", level: "Medium", rate: "84%" },
        { title: "📏 Max Function", desc: "Return max value.", example: "max(5,9)=>9", level: "Easy", rate: "96%" },
        { title: "🧠 Prime Function", desc: "Check prime using function.", example: "prime(7)=>true", level: "Easy", rate: "92%" },
        { title: "🔢 Even Odd Function", desc: "Return even/odd.", example: "eo(4)=>Even", level: "Easy", rate: "94%" },
        { title: "✂️ String Reverse Function", desc: "Reverse string function.", example: "rev('abc')=>cba", level: "Easy", rate: "93%" },
        { title: "📚 Lambda Add", desc: "Use lambda for add.", example: "lambda x,y:x+y", level: "Medium", rate: "82%" },
        { title: "📍 Default Arguments", desc: "Use default args.", example: "fun(a=5)", level: "Easy", rate: "91%" },
        { title: "🎯 Variable Arguments", desc: "Use *args.", example: "sum(1,2,3)", level: "Medium", rate: "83%" }
    ],

    "Python_Lists": [
        { title: "📋 Create List", desc: "Create list of values.", example: "[1,2,3]", level: "Easy", rate: "98%" },
        { title: "➕ Append Item", desc: "Append item to list.", example: "[1,2]+3", level: "Easy", rate: "97%" },
        { title: "🗑️ Remove Item", desc: "Remove value from list.", example: "[1,2,3]-2", level: "Easy", rate: "96%" },
        { title: "🔄 Reverse List", desc: "Reverse list.", example: "[1,2,3]=>[3,2,1]", level: "Easy", rate: "95%" },
        { title: "📏 Length List", desc: "Find length.", example: "[1,2,3]=>3", level: "Easy", rate: "95%" },
        { title: "🔍 Search Item", desc: "Search element.", example: "2 in [1,2,3]", level: "Easy", rate: "94%" },
        { title: "📈 Sort List", desc: "Sort ascending.", example: "[3,1,2]=>[1,2,3]", level: "Easy", rate: "94%" },
        { title: "📦 Sum List", desc: "Sum all values.", example: "[1,2,3]=>6", level: "Easy", rate: "93%" },
        { title: "🎯 Max List", desc: "Find maximum item.", example: "[4,9,1]=>9", level: "Easy", rate: "93%" },
        { title: "🧠 Nested List", desc: "Access nested list item.", example: "[[1,2],[3,4]]", level: "Medium", rate: "84%" }
    ],

    "Python_Strings": [
        { title: "🔁 Reverse String", desc: "Reverse string.", example: "hello=>olleh", level: "Easy", rate: "97%" },
        { title: "🪞 Palindrome", desc: "Check palindrome.", example: "madam=>true", level: "Easy", rate: "96%" },
        { title: "🔤 Uppercase", desc: "Convert uppercase.", example: "abc=>ABC", level: "Easy", rate: "95%" },
        { title: "🔡 Lowercase", desc: "Convert lowercase.", example: "ABC=>abc", level: "Easy", rate: "95%" },
        { title: "📏 Length String", desc: "Find string length.", example: "hello=>5", level: "Easy", rate: "96%" },
        { title: "✂️ Slice String", desc: "Slice substring.", example: "hello[1:4]=>ell", level: "Easy", rate: "94%" },
        { title: "📦 Count Vowels", desc: "Count vowels.", example: "apple=>2", level: "Easy", rate: "93%" },
        { title: "🎯 Anagram", desc: "Check anagram.", example: "listen,silent=>true", level: "Medium", rate: "84%" },
        { title: "📍 First Unique", desc: "Find first unique char.", example: "leetcode=>l", level: "Medium", rate: "82%" },
        { title: "🧠 Replace Word", desc: "Replace substring.", example: "hi all=>hello all", level: "Easy", rate: "92%" }
    ],

    "Python_Dictionary": [
        { title: "📖 Create Dictionary", desc: "Create key-value pair.", example: "{'a':1}", level: "Easy", rate: "98%" },
        { title: "🔍 Search Key", desc: "Check key exists.", example: "a in dict", level: "Easy", rate: "97%" },
        { title: "➕ Add Pair", desc: "Add new key.", example: "d['b']=2", level: "Easy", rate: "96%" },
        { title: "🗑️ Delete Key", desc: "Delete key.", example: "del d['a']", level: "Easy", rate: "95%" },
        { title: "📏 Length Dict", desc: "Count items.", example: "len(d)", level: "Easy", rate: "95%" },
        { title: "📚 Keys Print", desc: "Print keys.", example: "d.keys()", level: "Easy", rate: "94%" },
        { title: "📦 Values Print", desc: "Print values.", example: "d.values()", level: "Easy", rate: "94%" },
        { title: "🔄 Loop Dictionary", desc: "Loop key values.", example: "for k,v in d.items()", level: "Easy", rate: "93%" },
        { title: "🎯 Max Value", desc: "Find max value.", example: "{'a':5,'b':8}", level: "Medium", rate: "84%" },
        { title: "🧠 Merge Dict", desc: "Merge dictionaries.", example: "d1|d2", level: "Medium", rate: "82%" }
    ],

    "Python_Linked List": [
        { title: "🔗 Create Node", desc: "Create linked list node.", example: "Node(5)", level: "Easy", rate: "91%" },
        { title: "➕ Insert Front", desc: "Insert at beginning.", example: "5->10", level: "Easy", rate: "90%" },
        { title: "📦 Insert End", desc: "Insert at end.", example: "10->20", level: "Easy", rate: "89%" },
        { title: "🗑️ Delete Node", desc: "Delete node.", example: "remove 10", level: "Easy", rate: "88%" },
        { title: "🔄 Reverse List", desc: "Reverse linked list.", example: "1->2->3", level: "Medium", rate: "80%" },
        { title: "📍 Search Node", desc: "Search value.", example: "find 7", level: "Easy", rate: "87%" },
        { title: "📏 Count Nodes", desc: "Count nodes.", example: "3", level: "Easy", rate: "89%" },
        { title: "🧠 Detect Cycle", desc: "Detect loop.", example: "true", level: "Medium", rate: "76%" },
        { title: "🎯 Middle Node", desc: "Find middle node.", example: "1->2->3=>2", level: "Easy", rate: "85%" },
        { title: "🔁 Merge Lists", desc: "Merge two lists.", example: "1->2 +3->4", level: "Medium", rate: "79%" }
    ],

    "Python_Trees": [
        { title: "🌳 Inorder Traversal", desc: "Traverse inorder.", example: "Left Root Right", level: "Easy", rate: "87%" },
        { title: "🌲 Preorder", desc: "Traverse preorder.", example: "Root Left Right", level: "Easy", rate: "86%" },
        { title: "🌴 Postorder", desc: "Traverse postorder.", example: "Left Right Root", level: "Easy", rate: "85%" },
        { title: "📏 Height Tree", desc: "Find tree height.", example: "3", level: "Easy", rate: "84%" },
        { title: "📍 Level Order", desc: "BFS traversal.", example: "1 2 3", level: "Medium", rate: "78%" },
        { title: "🔍 Search BST", desc: "Search node in BST.", example: "7=>true", level: "Easy", rate: "83%" },
        { title: "➕ Insert BST", desc: "Insert in BST.", example: "insert 5", level: "Easy", rate: "82%" },
        { title: "🗑️ Delete BST", desc: "Delete node.", example: "delete 10", level: "Medium", rate: "72%" },
        { title: "🧠 Balanced Tree", desc: "Check balanced.", example: "true", level: "Medium", rate: "75%" },
        { title: "🏔️ Diameter Tree", desc: "Longest path.", example: "5", level: "Hard", rate: "61%" }
    ],

    "Python_Graphs": [
        { title: "🌐 BFS Graph", desc: "Breadth first search.", example: "0 1 2", level: "Easy", rate: "84%" },
        { title: "🕸️ DFS Graph", desc: "Depth first search.", example: "0 2 1", level: "Easy", rate: "83%" },
        { title: "🔍 Detect Cycle", desc: "Detect cycle.", example: "true", level: "Medium", rate: "74%" },
        { title: "📌 Components", desc: "Count components.", example: "2", level: "Medium", rate: "73%" },
        { title: "🛣️ Shortest Path", desc: "Find shortest path.", example: "0->3=4", level: "Medium", rate: "71%" },
        { title: "🚦 Bipartite", desc: "Check bipartite graph.", example: "true", level: "Medium", rate: "70%" },
        { title: "🧭 Topological Sort", desc: "Sort DAG.", example: "5 4 2", level: "Hard", rate: "62%" },
        { title: "📍 Dijkstra", desc: "Minimum path cost.", example: "7", level: "Hard", rate: "60%" },
        { title: "🏙️ Islands", desc: "Count islands.", example: "3", level: "Medium", rate: "72%" },
        { title: "🔗 Union Find", desc: "Disjoint set.", example: "Merged", level: "Hard", rate: "58%" }
    ],

    "Python_Recursion": [
        { title: "🔢 Factorial", desc: "Find factorial recursively.", example: "5=>120", level: "Easy", rate: "94%" },
        { title: "🧮 Fibonacci", desc: "Nth fibonacci.", example: "6=>8", level: "Easy", rate: "91%" },
        { title: "🔁 Reverse String", desc: "Reverse recursively.", example: "abc=>cba", level: "Easy", rate: "89%" },
        { title: "📚 Sum Digits", desc: "Digit sum.", example: "123=>6", level: "Easy", rate: "90%" },
        { title: "🧠 Power", desc: "x^n recursively.", example: "2^5=>32", level: "Medium", rate: "82%" },
        { title: "🏗️ Tower Hanoi", desc: "Solve Hanoi.", example: "3 disks", level: "Medium", rate: "74%" },
        { title: "🎯 Palindrome", desc: "Check palindrome recursively.", example: "madam=>true", level: "Easy", rate: "87%" },
        { title: "📦 Subsets", desc: "Generate subsets.", example: "[1,2]", level: "Medium", rate: "79%" },
        { title: "📍 Binary Search", desc: "Recursive binary search.", example: "find 7", level: "Easy", rate: "88%" },
        { title: "🪜 Stair Ways", desc: "Ways to climb stairs.", example: "3=>3", level: "Medium", rate: "81%" }
    ],
    "Cpp_Pointers": [
        { title: "👉 Pointer Basics", desc: "Store variable address in pointer.", example: "int *p=&x", level: "Easy", rate: "95%" },
        { title: "➕ Pointer Arithmetic", desc: "Increment pointer position.", example: "p++", level: "Medium", rate: "82%" },
        { title: "🔁 Swap Using Pointer", desc: "Swap two numbers using pointers.", example: "2 5 => 5 2", level: "Easy", rate: "91%" },
        { title: "📦 Double Pointer", desc: "Use pointer to pointer.", example: "int **pp", level: "Medium", rate: "79%" },
        { title: "📏 Array Pointer", desc: "Traverse array using pointer.", example: "*(arr+i)", level: "Easy", rate: "88%" },
        { title: "🔍 Null Pointer", desc: "Check null pointer.", example: "p==NULL", level: "Easy", rate: "90%" },
        { title: "🧠 Function Pointer", desc: "Call function using pointer.", example: "fp()", level: "Hard", rate: "61%" },
        { title: "🗑️ Dangling Pointer", desc: "Understand dangling pointer.", example: "delete p", level: "Medium", rate: "72%" },
        { title: "📌 Void Pointer", desc: "Generic pointer usage.", example: "void *p", level: "Medium", rate: "76%" },
        { title: "🎯 Dynamic Memory", desc: "Allocate using new.", example: "int *p=new int", level: "Easy", rate: "87%" }
    ],

    "Cpp_STL": [
        { title: "📦 Vector Demo", desc: "Use vector container.", example: "vector<int> v", level: "Easy", rate: "96%" },
        { title: "📚 Stack STL", desc: "Use stack container.", example: "stack<int> s", level: "Easy", rate: "94%" },
        { title: "🚶 Queue STL", desc: "Use queue container.", example: "queue<int> q", level: "Easy", rate: "93%" },
        { title: "🔗 List STL", desc: "Use list container.", example: "list<int> l", level: "Easy", rate: "91%" },
        { title: "🗺️ Map STL", desc: "Store key value pairs.", example: "map<int,int>", level: "Easy", rate: "90%" },
        { title: "🎯 Set STL", desc: "Store unique values.", example: "set<int>", level: "Easy", rate: "89%" },
        { title: "🔄 Sort Vector", desc: "Sort vector using sort().", example: "sort(v.begin(),v.end())", level: "Easy", rate: "92%" },
        { title: "📏 Vector Size", desc: "Find size of vector.", example: "v.size()", level: "Easy", rate: "95%" },
        { title: "🗑️ Pop Back", desc: "Remove last element.", example: "v.pop_back()", level: "Easy", rate: "94%" },
        { title: "🧠 Priority Queue", desc: "Use max heap.", example: "priority_queue<int>", level: "Medium", rate: "78%" }
    ],

    "Cpp_Arrays": [
        { title: "➕ Two Sum", desc: "Find pair with target sum.", example: "[2,7,11,15],9=>[0,1]", level: "Easy", rate: "86%" },
        { title: "📈 Maximum Subarray", desc: "Largest contiguous sum.", example: "[-2,1,-3,4,-1,2,1]=>6", level: "Medium", rate: "63%" },
        { title: "🔄 Rotate Array", desc: "Rotate array by k.", example: "[1,2,3,4],2", level: "Medium", rate: "60%" },
        { title: "0️⃣ Move Zeroes", desc: "Move zeros to end.", example: "[0,1,0,3]", level: "Easy", rate: "77%" },
        { title: "💰 Stock Profit", desc: "Max stock profit.", example: "[7,1,5,3,6]=>5", level: "Easy", rate: "81%" },
        { title: "📦 Product Except Self", desc: "Multiply except self.", example: "[1,2,3,4]", level: "Medium", rate: "58%" },
        { title: "🏆 Majority Element", desc: "Find majority item.", example: "[2,2,1,2]", level: "Easy", rate: "83%" },
        { title: "🧮 Missing Number", desc: "Find missing number.", example: "[3,0,1]=>2", level: "Easy", rate: "79%" },
        { title: "🎯 Single Number", desc: "Find single occurring number.", example: "[4,1,2,1,2]=>4", level: "Easy", rate: "84%" },
        { title: "📚 Remove Duplicates", desc: "Remove duplicates sorted array.", example: "[1,1,2]", level: "Easy", rate: "85%" }
    ],

    "Cpp_Strings": [
        { title: "🔁 Reverse String", desc: "Reverse string.", example: "hello=>olleh", level: "Easy", rate: "94%" },
        { title: "🪞 Palindrome", desc: "Check palindrome.", example: "madam=>true", level: "Easy", rate: "92%" },
        { title: "🔤 String Length", desc: "Find length.", example: "hello=>5", level: "Easy", rate: "95%" },
        { title: "✂️ Substring", desc: "Extract substring.", example: "hello.substr(1,3)", level: "Easy", rate: "90%" },
        { title: "🎯 Anagram", desc: "Check anagram.", example: "listen,silent", level: "Medium", rate: "81%" },
        { title: "📌 First Unique", desc: "First unique char.", example: "leetcode=>l", level: "Medium", rate: "79%" },
        { title: "🔍 Find Character", desc: "Search character.", example: "find('e')", level: "Easy", rate: "91%" },
        { title: "📦 Count Vowels", desc: "Count vowels.", example: "apple=>2", level: "Easy", rate: "88%" },
        { title: "🔡 To Lowercase", desc: "Convert lowercase.", example: "ABC=>abc", level: "Easy", rate: "87%" },
        { title: "🔠 To Uppercase", desc: "Convert uppercase.", example: "abc=>ABC", level: "Easy", rate: "87%" }
    ],

    "Cpp_Linked List": [
        { title: "🔗 Create Node", desc: "Create linked list node.", example: "Node(5)", level: "Easy", rate: "91%" },
        { title: "➕ Insert Front", desc: "Insert beginning.", example: "5->10", level: "Easy", rate: "90%" },
        { title: "📦 Insert End", desc: "Insert at end.", example: "10->20", level: "Easy", rate: "89%" },
        { title: "🗑️ Delete Node", desc: "Delete node.", example: "remove 10", level: "Easy", rate: "88%" },
        { title: "🔄 Reverse List", desc: "Reverse linked list.", example: "1->2->3", level: "Medium", rate: "80%" },
        { title: "📍 Search Node", desc: "Search node value.", example: "find 7", level: "Easy", rate: "87%" },
        { title: "📏 Count Nodes", desc: "Count nodes.", example: "3", level: "Easy", rate: "89%" },
        { title: "🧠 Detect Cycle", desc: "Detect loop.", example: "true", level: "Medium", rate: "76%" },
        { title: "🎯 Middle Node", desc: "Find middle node.", example: "1->2->3=>2", level: "Easy", rate: "85%" },
        { title: "🔁 Merge Lists", desc: "Merge two lists.", example: "1->2 +3->4", level: "Medium", rate: "79%" }
    ],

    "Cpp_Stack": [
        { title: "📚 Push Stack", desc: "Push element.", example: "push(5)", level: "Easy", rate: "96%" },
        { title: "📤 Pop Stack", desc: "Pop top element.", example: "pop()", level: "Easy", rate: "95%" },
        { title: "👀 Peek Stack", desc: "Top element.", example: "top()", level: "Easy", rate: "94%" },
        { title: "📏 Stack Size", desc: "Find size.", example: "3", level: "Easy", rate: "93%" },
        { title: "🗑️ Empty Stack", desc: "Check empty.", example: "true", level: "Easy", rate: "97%" },
        { title: "🎯 Valid Parentheses", desc: "Check brackets.", example: "()[]{}", level: "Easy", rate: "88%" },
        { title: "📦 Min Stack", desc: "Minimum stack.", example: "getMin()", level: "Medium", rate: "76%" },
        { title: "🔄 Reverse Stack", desc: "Reverse stack.", example: "1 2 3", level: "Medium", rate: "72%" },
        { title: "🧠 Sort Stack", desc: "Sort stack.", example: "3 1 2", level: "Medium", rate: "70%" },
        { title: "📍 Next Greater", desc: "Next greater element.", example: "[2,1,3]", level: "Medium", rate: "74%" }
    ],

    "Cpp_Queue": [
        { title: "🚶 Enqueue", desc: "Insert queue item.", example: "enqueue(5)", level: "Easy", rate: "95%" },
        { title: "📤 Dequeue", desc: "Remove front item.", example: "dequeue()", level: "Easy", rate: "94%" },
        { title: "👀 Front Queue", desc: "Front element.", example: "front()", level: "Easy", rate: "93%" },
        { title: "📏 Queue Size", desc: "Find queue size.", example: "3", level: "Easy", rate: "92%" },
        { title: "🗑️ Empty Queue", desc: "Check empty.", example: "true", level: "Easy", rate: "97%" },
        { title: "🔄 Circular Queue", desc: "Implement circular queue.", example: "size=5", level: "Medium", rate: "78%" },
        { title: "🧠 Queue Using Stack", desc: "Use two stacks.", example: "push pop", level: "Medium", rate: "74%" },
        { title: "📚 Reverse Queue", desc: "Reverse queue.", example: "1 2 3", level: "Medium", rate: "71%" },
        { title: "🚦 Priority Queue", desc: "Highest priority first.", example: "9 first", level: "Medium", rate: "73%" },
        { title: "📍 Generate Binary", desc: "Generate binary nums.", example: "1 10 11", level: "Medium", rate: "69%" }
    ],

    "Cpp_Trees": [
        { title: "🌳 Inorder", desc: "Traverse inorder.", example: "L R", level: "Easy", rate: "87%" },
        { title: "🌲 Preorder", desc: "Traverse preorder.", example: "R L", level: "Easy", rate: "86%" },
        { title: "🌴 Postorder", desc: "Traverse postorder.", example: "L R Root", level: "Easy", rate: "85%" },
        { title: "📏 Height Tree", desc: "Find height.", example: "3", level: "Easy", rate: "84%" },
        { title: "📍 Level Order", desc: "BFS traversal.", example: "1 2 3", level: "Medium", rate: "78%" },
        { title: "🔍 Search BST", desc: "Search key.", example: "7=>true", level: "Easy", rate: "83%" },
        { title: "➕ Insert BST", desc: "Insert node.", example: "insert 5", level: "Easy", rate: "82%" },
        { title: "🗑️ Delete BST", desc: "Delete node.", example: "delete 10", level: "Medium", rate: "72%" },
        { title: "🧠 Balanced Tree", desc: "Check balanced.", example: "true", level: "Medium", rate: "75%" },
        { title: "🏔️ Diameter", desc: "Longest path.", example: "5", level: "Hard", rate: "61%" }
    ],

    "Cpp_Graphs": [
        { title: "🌐 BFS Graph", desc: "Breadth first traversal.", example: "0 1 2", level: "Easy", rate: "84%" },
        { title: "🕸️ DFS Graph", desc: "Depth first traversal.", example: "0 2 1", level: "Easy", rate: "83%" },
        { title: "🔍 Detect Cycle", desc: "Detect cycle.", example: "true", level: "Medium", rate: "74%" },
        { title: "📌 Components", desc: "Count components.", example: "2", level: "Medium", rate: "73%" },
        { title: "🛣️ Shortest Path", desc: "Shortest path.", example: "0->3=4", level: "Medium", rate: "71%" },
        { title: "🚦 Bipartite", desc: "Check bipartite.", example: "true", level: "Medium", rate: "70%" },
        { title: "🧭 Topological Sort", desc: "Sort DAG.", example: "5 4 2", level: "Hard", rate: "62%" },
        { title: "📍 Dijkstra", desc: "Min cost path.", example: "7", level: "Hard", rate: "60%" },
        { title: "🏙️ Islands", desc: "Count islands.", example: "3", level: "Medium", rate: "72%" },
        { title: "🔗 Union Find", desc: "Disjoint set.", example: "Merged", level: "Hard", rate: "58%" }
    ],

    "Cpp_DP": [
        { title: "🪜 Climbing Stairs", desc: "Ways to climb stairs.", example: "4=>5", level: "Easy", rate: "86%" },
        { title: "💰 Coin Change", desc: "Minimum coins.", example: "11=>3", level: "Medium", rate: "74%" },
        { title: "🎒 Knapsack", desc: "Max value bag.", example: "W=10", level: "Hard", rate: "63%" },
        { title: "🔢 Fibonacci DP", desc: "DP fibonacci.", example: "7=>13", level: "Easy", rate: "90%" },
        { title: "📈 LIS", desc: "Longest increasing subsequence.", example: "[10,9,2]", level: "Medium", rate: "69%" },
        { title: "🧠 LCS", desc: "Longest common subsequence.", example: "abcde,ace", level: "Medium", rate: "67%" },
        { title: "✂️ Edit Distance", desc: "Min edits.", example: "cat->cut", level: "Hard", rate: "58%" },
        { title: "🏠 House Robber", desc: "Max loot.", example: "[2,7,9]", level: "Medium", rate: "73%" },
        { title: "📦 Partition Sum", desc: "Equal partition possible.", example: "true", level: "Medium", rate: "64%" },
        { title: "🛣️ Unique Paths", desc: "Grid unique paths.", example: "3x2=>3", level: "Medium", rate: "71%" }
    ],
    HTML: [
        { title: "🧾 Login Form", desc: "Create login form using HTML.", example: "email + password fields", level: "Easy", rate: "97%" },
        { title: "📋 Registration Form", desc: "Create signup form.", example: "name email password", level: "Easy", rate: "96%" },
        { title: "📊 HTML Table", desc: "Create student marks table.", example: "rows and columns", level: "Easy", rate: "95%" },
        { title: "🖼️ Image Gallery", desc: "Display images using img tag.", example: "3 images", level: "Easy", rate: "94%" },
        { title: "🔗 Navigation Bar", desc: "Create navbar with links.", example: "Home About Contact", level: "Easy", rate: "93%" },
        { title: "📝 Resume Page", desc: "Design resume page.", example: "name skills contact", level: "Easy", rate: "92%" },
        { title: "🎥 Video Embed", desc: "Embed video in page.", example: "video tag", level: "Easy", rate: "91%" },
        { title: "📍 Google Map Embed", desc: "Embed map iframe.", example: "location map", level: "Easy", rate: "90%" },
        { title: "📦 Semantic Tags", desc: "Use header main footer.", example: "semantic layout", level: "Easy", rate: "89%" },
        { title: "🛒 Product Card", desc: "Create product card layout.", example: "image price button", level: "Easy", rate: "88%" }
    ],

    CSS: [
        { title: "🎨 Center Div", desc: "Center div using flexbox.", example: "justify-content:center", level: "Easy", rate: "96%" },
        { title: "📱 Responsive Card", desc: "Responsive card with media query.", example: "mobile layout", level: "Easy", rate: "95%" },
        { title: "🌈 Gradient Background", desc: "Apply linear gradient.", example: "background:linear-gradient()", level: "Easy", rate: "94%" },
        { title: "🖱️ Button Hover", desc: "Add hover effects.", example: "button:hover", level: "Easy", rate: "93%" },
        { title: "📦 Grid Layout", desc: "Use CSS grid.", example: "3 column grid", level: "Easy", rate: "92%" },
        { title: "🔄 Animation Bounce", desc: "Bounce animation using keyframes.", example: "@keyframes bounce", level: "Medium", rate: "84%" },
        { title: "🧾 Navbar Design", desc: "Style navigation bar.", example: "dark navbar", level: "Easy", rate: "91%" },
        { title: "🪟 Modal Popup", desc: "Design popup modal.", example: "center popup", level: "Medium", rate: "82%" },
        { title: "📋 Pricing Cards", desc: "Create pricing section.", example: "basic pro premium", level: "Easy", rate: "89%" },
        { title: "🌙 Dark Theme", desc: "Create dark mode UI.", example: "black background", level: "Easy", rate: "90%" }
    ],

    JavaScript: [
        { title: "⚡ Counter App", desc: "Increment decrement counter.", example: "+1 -1", level: "Easy", rate: "95%" },
        { title: "📋 Todo App", desc: "Add remove todo items.", example: "task list", level: "Easy", rate: "94%" },
        { title: "🕒 Digital Clock", desc: "Live current clock.", example: "10:25:30", level: "Easy", rate: "93%" },
        { title: "🧮 Calculator", desc: "Simple calculator.", example: "2+3=5", level: "Easy", rate: "92%" },
        { title: "🎯 Guess Number", desc: "Guess random number game.", example: "1 to 10", level: "Easy", rate: "91%" },
        { title: "🖼️ Image Slider", desc: "Automatic image slider.", example: "next prev", level: "Medium", rate: "84%" },
        { title: "🔍 Search Filter", desc: "Filter list items.", example: "search products", level: "Easy", rate: "90%" },
        { title: "📦 Local Storage Notes", desc: "Store notes in localStorage.", example: "save notes", level: "Medium", rate: "83%" },
        { title: "📍 Form Validation", desc: "Validate login form.", example: "required fields", level: "Easy", rate: "89%" },
        { title: "🎲 Dice Game", desc: "Random dice roll game.", example: "1 to 6", level: "Easy", rate: "88%" }
    ],

    React: [
        { title: "⚛️ Counter Component", desc: "Counter using useState.", example: "count++", level: "Easy", rate: "91%" },
        { title: "📋 Todo Component", desc: "Todo app in React.", example: "add task", level: "Easy", rate: "90%" },
        { title: "🔍 Search Filter", desc: "Search users list.", example: "filter names", level: "Easy", rate: "89%" },
        { title: "🌙 Theme Toggle", desc: "Dark light mode.", example: "toggle theme", level: "Easy", rate: "88%" },
        { title: "📦 Product Cards", desc: "Map products cards.", example: "cards list", level: "Easy", rate: "87%" },
        { title: "📝 Form Component", desc: "Controlled form inputs.", example: "name email", level: "Medium", rate: "82%" },
        { title: "🕒 Clock App", desc: "Live clock using useEffect.", example: "time updates", level: "Medium", rate: "81%" },
        { title: "🛒 Cart System", desc: "Shopping cart state.", example: "add remove item", level: "Medium", rate: "80%" },
        { title: "📊 Dashboard UI", desc: "Stats dashboard page.", example: "cards charts", level: "Medium", rate: "79%" },
        { title: "🌐 API Fetch Users", desc: "Fetch API data in React.", example: "users list", level: "Medium", rate: "78%" }
    ],

    "Node.js": [
        { title: "🟢 Basic Server", desc: "Create HTTP server.", example: "http.createServer()", level: "Easy", rate: "92%" },
        { title: "📁 Read File", desc: "Read file using fs.", example: "fs.readFile()", level: "Easy", rate: "91%" },
        { title: "📝 Write File", desc: "Write file content.", example: "fs.writeFile()", level: "Easy", rate: "90%" },
        { title: "📦 JSON Server", desc: "Return JSON response.", example: "res.end(JSON)", level: "Easy", rate: "89%" },
        { title: "🔄 Event Emitter", desc: "Use events module.", example: "emit/on", level: "Medium", rate: "82%" },
        { title: "📍 Path Module", desc: "Use path.join.", example: "folder/file", level: "Easy", rate: "88%" },
        { title: "🧠 OS Module", desc: "Get system info.", example: "os.platform()", level: "Easy", rate: "87%" },
        { title: "📤 Stream Read", desc: "Read stream file.", example: "createReadStream", level: "Medium", rate: "80%" },
        { title: "📥 Stream Write", desc: "Write stream file.", example: "createWriteStream", level: "Medium", rate: "79%" },
        { title: "🔐 Environment Variables", desc: "Use .env variables.", example: "PORT=3000", level: "Medium", rate: "78%" }
    ],

    "Express.js": [
        { title: "🚏 GET Route", desc: "Create GET route.", example: "app.get()", level: "Easy", rate: "93%" },
        { title: "📦 POST Route", desc: "Create POST route.", example: "app.post()", level: "Easy", rate: "92%" },
        { title: "🗑️ DELETE Route", desc: "Create delete route.", example: "app.delete()", level: "Easy", rate: "90%" },
        { title: "✏️ PUT Route", desc: "Create update route.", example: "app.put()", level: "Easy", rate: "89%" },
        { title: "📁 Static Files", desc: "Serve public folder.", example: "express.static()", level: "Easy", rate: "88%" },
        { title: "🧾 Middleware", desc: "Use custom middleware.", example: "next()", level: "Medium", rate: "82%" },
        { title: "🔐 Login API", desc: "Login route with body data.", example: "username password", level: "Medium", rate: "81%" },
        { title: "📍 Params Route", desc: "Use route params.", example: "/user/:id", level: "Easy", rate: "87%" },
        { title: "🔎 Query Route", desc: "Use query strings.", example: "?name=teja", level: "Easy", rate: "86%" },
        { title: "❌ 404 Handler", desc: "Create not found route.", example: "Page not found", level: "Medium", rate: "79%" }
    ],

    MongoDB: [
        { title: "🍃 Insert Document", desc: "Insert data into collection.", example: "insertOne()", level: "Easy", rate: "91%" },
        { title: "🔍 Find Document", desc: "Find records.", example: "find()", level: "Easy", rate: "90%" },
        { title: "✏️ Update Document", desc: "Update record.", example: "updateOne()", level: "Easy", rate: "89%" },
        { title: "🗑️ Delete Document", desc: "Delete record.", example: "deleteOne()", level: "Easy", rate: "88%" },
        { title: "📦 Find By ID", desc: "Search using _id.", example: "findById()", level: "Easy", rate: "87%" },
        { title: "📊 Sort Records", desc: "Sort ascending descending.", example: "sort()", level: "Easy", rate: "86%" },
        { title: "📏 Limit Records", desc: "Limit results.", example: "limit(5)", level: "Easy", rate: "85%" },
        { title: "🔗 Mongoose Schema", desc: "Create schema model.", example: "new Schema()", level: "Medium", rate: "82%" },
        { title: "🧠 Populate Data", desc: "Use populate relation.", example: "user posts", level: "Medium", rate: "79%" },
        { title: "📚 Aggregate", desc: "Aggregation pipeline.", example: "group sum", level: "Hard", rate: "71%" }
    ],

    SQL: [
        { title: "🗃️ Select Query", desc: "Use SELECT statement.", example: "SELECT * FROM users", level: "Easy", rate: "96%" },
        { title: "➕ Insert Query", desc: "Insert row.", example: "INSERT INTO users", level: "Easy", rate: "95%" },
        { title: "✏️ Update Query", desc: "Update row.", example: "UPDATE users SET", level: "Easy", rate: "94%" },
        { title: "🗑️ Delete Query", desc: "Delete row.", example: "DELETE FROM users", level: "Easy", rate: "93%" },
        { title: "🔗 INNER JOIN", desc: "Join two tables.", example: "users JOIN orders", level: "Medium", rate: "84%" },
        { title: "📊 GROUP BY", desc: "Group rows.", example: "GROUP BY city", level: "Medium", rate: "83%" },
        { title: "📏 COUNT Rows", desc: "Count records.", example: "COUNT(*)", level: "Easy", rate: "92%" },
        { title: "🔍 WHERE Clause", desc: "Filter rows.", example: "WHERE age>18", level: "Easy", rate: "91%" },
        { title: "📈 ORDER BY", desc: "Sort rows.", example: "ORDER BY marks DESC", level: "Easy", rate: "90%" },
        { title: "🧠 Subquery", desc: "Use nested query.", example: "SELECT ... (SELECT)", level: "Hard", rate: "76%" }
    ],

    API: [
        { title: "🌐 Fetch API", desc: "Fetch data from API.", example: "fetch(url)", level: "Easy", rate: "93%" },
        { title: "📦 JSON Parse", desc: "Read JSON response.", example: "response.json()", level: "Easy", rate: "92%" },
        { title: "📤 POST Request", desc: "Send POST data.", example: "method:'POST'", level: "Easy", rate: "90%" },
        { title: "🔐 Auth Token", desc: "Send bearer token.", example: "Authorization header", level: "Medium", rate: "81%" },
        { title: "🔄 Async Await Fetch", desc: "Use async await.", example: "await fetch()", level: "Easy", rate: "89%" },
        { title: "❌ Error Handling", desc: "Catch API errors.", example: "try catch", level: "Easy", rate: "88%" },
        { title: "📍 Query Params", desc: "Send query params.", example: "?page=1", level: "Easy", rate: "87%" },
        { title: "🧠 REST API Design", desc: "Design REST endpoints.", example: "GET POST PUT DELETE", level: "Medium", rate: "80%" },
        { title: "📚 Axios Request", desc: "Use axios library.", example: "axios.get()", level: "Medium", rate: "79%" },
        { title: "⏱️ Loading Spinner", desc: "Show loading state.", example: "Loading...", level: "Easy", rate: "86%" }
    ],

    "Responsive Design": [
        { title: "📱 Media Query", desc: "Use media query.", example: "@media max-width", level: "Easy", rate: "94%" },
        { title: "📦 Responsive Grid", desc: "Grid for mobile desktop.", example: "repeat(auto-fit)", level: "Easy", rate: "92%" },
        { title: "🧾 Mobile Navbar", desc: "Hamburger navbar.", example: "menu icon", level: "Easy", rate: "91%" },
        { title: "🖼️ Responsive Image", desc: "Flexible images.", example: "max-width:100%", level: "Easy", rate: "90%" },
        { title: "📋 Responsive Cards", desc: "Cards resize on screen.", example: "1 col mobile", level: "Easy", rate: "89%" },
        { title: "🌐 Tablet Layout", desc: "Tablet specific design.", example: "768px", level: "Easy", rate: "88%" },
        { title: "🖥️ Desktop Layout", desc: "Large screen layout.", example: "1200px", level: "Easy", rate: "87%" },
        { title: "🔄 Flex Wrap", desc: "Wrap items responsive.", example: "flex-wrap:wrap", level: "Easy", rate: "86%" },
        { title: "🎯 Fluid Typography", desc: "Responsive font sizes.", example: "clamp()", level: "Medium", rate: "79%" },
        { title: "🌙 Responsive Sidebar", desc: "Sidebar collapses mobile.", example: "hide on mobile", level: "Medium", rate: "78%" }
    ] 

};

>>>>>>> a414f257ee4008c4bf969ab87ceea62acde97535
module.exports = questions;