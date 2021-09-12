import pino from 'pino'

export default pino({
    prettyPrint: {
        ignore: 'pid,hostname'
    }
})
