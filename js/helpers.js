export function customFetch(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest
        xhr.open('GET', url)
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status <= 204) {
                resolve(xhr.response)
            } else {
                reject(new Error(`Error ${ xhr.status }`))
            }
        }
        xhr.send()
    })
}