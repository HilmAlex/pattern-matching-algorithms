export const executionTime = async (toExec, params) => {
    const start = new Date()
    toExec(...params)
    setTimeout(() => {
        
    }, 5000);
    const end = new Date()
    
    return end - start
}