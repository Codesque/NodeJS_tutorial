// Javascript is syncronized , single threaded language
// This means that the javascript code is read and executed line by line.

// But nodeJS has non-blocking contents that offloads the timeconsuming operations while executing light-weighted operations.
// This doesnt mean for-loops can be offloaded.
// This means browser does provide some apis where we dont have to write the blocking code.

// Also 'for loops cannot be offloaded' means we can still write blocking code in javascript


// Imagine a scenario that 8 users uses your app , and sends requests to your app at the same time. One of the user wants to do some
// heavy operation in your server. In a single threaded system ,  other users have to wait the heavy operation to be done. But
// in a Asyncronized system , all requests are executed at the same time when all the operations completed.(Like communizm)

// We can sum up this info with these sentence : Callbacks are operated but not executed when operation has been finished. Callbacks
// are qued at the end of the event cycle which means it will be executed when other operations has been finished. 


