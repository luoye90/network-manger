

function transUnit(val, flag) {
    const kb = (val*8/1024).toFixed(2)
    const mb = (val*8/1024/1024).toFixed(2)
    if (flag) {
        return kb>1024 ? `${mb}Mbps` : `${kb}Kbps`
    }
    return mb
}

export default {
    transUnit
}