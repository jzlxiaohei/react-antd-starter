import Rx from 'rx-lite'

window.replaySub = new Rx.ReplaySubject(1)
replaySub.onNext({a:111})
replaySub.onNext({b:111})
replaySub.subscribe(
    obj=>{
        console.log(obj)
    },
    obj=>{
    },
    obj=>{
        console.log('completed')
    }
)
replaySub.subscribe(
    obj=>{
        console.log(obj)
    },
    obj=>{
    },
    obj=>{
        console.log('completed')
    }
)