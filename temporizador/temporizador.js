
import schedule from 'node-schedule';

const tarefa1 = schedule.scheduleJob('*/5 * 6 * * 2', function() {
    console.log('Executando tarefa 1! ', new Date().getSeconds())
})

setTimeout(() => {
    tarefa1.cancel()
    console.log("cancelando tarefa1!")
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 6
regra.second = 36

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log("executando tarefa2", new Date().getSeconds())
})
