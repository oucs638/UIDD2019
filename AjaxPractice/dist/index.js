$(document).ready(() => {

    $(`#listBtn`).click((event) => {
        event.preventDefault()
        $.ajax({
            method: `GET`,
            url: `./list`,
            data: {},
            success: (data) => { $(`#listDspContent`).html(data) }
        })
    })

    $(`#searchBtn`).click((event) => {
        event.preventDefault()
        $.ajax({
            method: `GET`,
            url: `./search`,
            data: {
                studentID: $(`#searchForm input[name=studentID]`).val(),
            },
            success: (data) => {
                $(`#searchDspContent`).html(data)
                $(`#searchForm input[name=studentID]`).val("")
            }
        })
    })

    $(`#addBtn`).click((event => {
        event.preventDefault()
        $.ajax({
            method: `GET`,
            url: `./add`,
            data: {
                studentID: $(`#addForm input[name=studentID]`).val(),
                studentName: $(`#addForm input[name=studentName]`).val(),
            },
            success: (data) => {
                $(`#listDspContent`).html(data)
                $(`#addForm input[name=studentID]`).val("")
                $(`#addForm input[name=studentName]`).val("")
            }
        })
    }))

    $(`#delBtn`).click((event) => {
        event.preventDefault()
        $.ajax({
            method: `GET`,
            url: `./del`,
            data: {
                studentID: $(`#addForm input[name=studentID]`).val(),
            },
            success: (data) => {
                $(`#listDspContent`).html(data)
                $(`#addForm input[name=studentID]`).val("")
            }
        })
    })

})