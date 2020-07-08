## Test task for Fulogy (ReactJS + Mobx) 

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

- `git clone git@github.com:MavlinD/Fulogy-2.git`
- `cd Fulogy-2`
- `npm run build` - собрать бандл
- `npm run hmr` - запустить в режиме Hot module replacement 
- `npm run dev`  - запустить в обычном режиме webpack

### MOBX

    MobX is not a state container
    People often use MobX as alternative for Redux. But please note that MobX is just a library to solve a technical problem and not an architecture or even state container in itself. In that sense the above examples are contrived and it is recommended to use proper engineering practices like encapsulating logic in methods, organize them in stores or controllers etc. Or, as somebody on HackerNews put it:
    “MobX, it's been mentioned elsewhere but I can't help but sing its praises. Writing in MobX means that using controllers/ dispatchers/ actions/ supervisors or another form of managing dataflow returns to being an architectural concern you can pattern to your application's needs, rather than being something that's required by default for anything more than a Todo app.”
        