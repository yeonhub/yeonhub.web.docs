const showList = () => {
    const show = obj.map(ele => {
        const { name, job } = ele
        return `
                <p>이름 : <strong>${ele.name}</strong> 직업 : <strong>${ele.job}</strong></p>
                `
    }).join('')
    container.innerHTML = show;
    container.innerHTML += '++++++++++++++++++++'
    container.innerHTML += `
    <p>이름 : <strong>${obj[ran].name}</strong> 직업 : <strong>${obj[ran].job}</strong></p>
    `
}
export default showList