const test = document.querySelectorAll("li");
console.log(test)

for (let i = 0 ; i < test.length ; i++) {
    test[i].textContent = `${i+1}`
    test[i].dataset.id = i
    console.log(test[i])
}

