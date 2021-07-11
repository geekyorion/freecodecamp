const projectName = '25-5-clock';

const formatInMM_SS = (mins, seconds) => {
    return `${mins < 10 ? '0' : ''}${mins}:${seconds < 10 ? '0' : ''}${seconds}`;
}
