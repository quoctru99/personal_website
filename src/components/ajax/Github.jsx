

export const getUser = async (per_page) =>  {
    return await fetch(`http://localhost:8080/api/tru`)
        .then((res) => {
            return res.json()
        })
        .then((json) => {
            this.setState({
                numPage: Math.ceil(json.total/per_page)
            })
        })
}

export const getRepo = (page, per_page) =>  {

    fetch(`http://localhost:8080/api/repo/tru?page=${page}&per_page=${per_page}`)
        .then((reponse) => {
            return reponse.json();
        })
        .then((json) => {
            this.setState({
                gitTable: json
            })
        })
}
