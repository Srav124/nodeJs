# nodeJs
# All About NODE JS
Node Js build on top of v8 Engine. It provides run time env for JS. It is fast and scalable.
It is single threaded but supports asynchronous programming because it follows event-driven mechanism.
Node.js architecture is based on a single-threaded, event-driven model. It uses an event loop to handle asynchronous operations and manage I/O tasks non-blockingly.
The core components include the call stack, event queue, and libuv library, which provides a thread pool for handling background operations. 
This architecture enables efficient handling of multiple concurrent tasks

Call Stack:
The call stack is where synchronous code is executed. When a function is invoked, it gets pushed onto the stack. Once the function completes, it is popped off the stack.

Event Loop:
The event loop is at the heart of Node.js. It's an endless loop that continuously checks the call stack and the event queue. 
If the call stack is empty, the event loop picks tasks from the event queue to be executed. 
This is how Node.js manages non-blocking operations.

Event Queue:
The event queue holds callback functions from completed asynchronous tasks (like I/O operations or timers).
 Once the call stack is empty, the event loop takes the oldest task from the queue and executes it.
 
Thread Pool:
For asynchronous tasks that require heavy I/O operations or need to work with the file system, Node.js uses a thread pool (managed by libuv). 
These operations are offloaded to the thread pool, and once the task is completed, the callback function is pushed to the event queue, 
where the event loop can pick it up for execution.

In node js we usually have 7 threads including main thread. All the remaining threads will be called whenever they needed like 
DB operations and file operations.

Phases of EventLoop:
Timers: This phase processes timers that have been set using setTimeout() and setInterval().

pending callbacks: This phase processes any callbacks that have been added to the message queue by asynchronous functions.

idle,ignore: The “idle.ignore” phase is not a standard phase of the event loop in Node.js. It means it’s Used internally only. 
The “idle” phase is a period of time during which the event loop has nothing to do and can be used to perform background tasks, 
such as running garbage collection or checking for low-priority events

pool : This phase is used to check for new I/O events and process any that have been detected

check : This phase processes any setImmediate() callbacks that have been added to the message queue.

close callbacks :Executes callbacks like socket.on('close', ...).