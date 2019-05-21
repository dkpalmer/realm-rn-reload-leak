# Realm + React Native Memory Leak Example

This is a sample project demonstrating a memory leak that occurs in __DEV__ when attaching listeners to Realm Results/List Objects and reloading the app (CMD+R).

To reproduce:
* Edit [App.js](https://github.com/dkpalmer/realm-rn-reload-leak/blob/master/App.js)
* Uncomment the target use case in `componentWillMount`
  * (1) Realm listener: Does _not_ leak
  * (2) Results listener: _Does_ leak
  * (3) List object listener: _Does_ leak
* Display Perf Monitor (CMD+D -> `Show Perf Monitor`)
* Reload the app (CMD+R)
* Watch RAM climb on each reload in use cases 2 & 3
