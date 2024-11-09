const time = [];
for (let index = 0; index < 24; index++) {
    time.push(
        {
            "time": `${index < 10 ? '0'+index : index}: 00`
        },
        {
            "time": `${index < 10 ? '0'+index : index}: 30`
        }
    );
}
export default {model: "AvailableAt", data: time};